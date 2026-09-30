// @vitest-environment node
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import type { Server } from 'http';
import type { AddressInfo } from 'net';
import jwt from 'jsonwebtoken';

// Env must be set before the app module resolves its JWT secret.
process.env.NODE_ENV = 'test';
process.env.ADMIN_EMAIL = 'admin@test.dev';
process.env.ADMIN_PASSWORD = 'correct-horse-battery';
process.env.ADMIN_JWT_SECRET = 'x'.repeat(40);
// Point pg at a closed port so DB-backed routes fail fast instead of hanging.
process.env.DATABASE_URL = 'postgres://nobody:nothing@127.0.0.1:1/none';

let server: Server;
let base: string;

beforeAll(async () => {
    const { default: app } = await import('./app');
    server = app.listen(0);
    await new Promise(resolve => server.once('listening', resolve));
    base = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
});

afterAll(() => new Promise<void>(resolve => server.close(() => resolve())));

const call = (path: string, init: RequestInit = {}) => fetch(base + path, init);
const json = (method: string, body: unknown, token?: string): RequestInit => ({
    method,
    headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(body),
});

async function login() {
    const res = await call('/api/admin/login', json('POST', {
        email: 'admin@test.dev', password: 'correct-horse-battery',
    }));
    expect(res.status).toBe(200);
    return (await res.json()).token as string;
}

describe('admin-only endpoints reject anonymous requests', () => {
    const cases: [string, string, unknown?][] = [
        ['GET', '/api/waitlist'],
        ['DELETE', '/api/waitlist/abc'],
        ['GET', '/api/posts?admin=true'],
        ['GET', '/api/case-studies?admin=true'],
        ['GET', '/api/resources?admin=true'],
        ['POST', '/api/posts', { title: 'x' }],
        ['PUT', '/api/posts/1', { title: 'x' }],
        ['DELETE', '/api/posts/1'],
        ['POST', '/api/case-studies', { title: 'x' }],
        ['PUT', '/api/case-studies/1', { title: 'x' }],
        ['DELETE', '/api/case-studies/1'],
        ['POST', '/api/resources', { title: 'x' }],
        ['PUT', '/api/resources/1', { title: 'x' }],
        ['DELETE', '/api/resources/1'],
        ['POST', '/api/upload', { file: 'data:application/pdf;base64,AA==' }],
        ['GET', '/api/analytics/overview'],
        ['GET', '/api/analytics/waitlist-growth'],
    ];

    it.each(cases)('%s %s → 401', async (method, path, body) => {
        const res = await call(path, body ? json(method, body) : { method });
        expect(res.status).toBe(401);
    });

    it('rejects a token signed with the old hard-coded fallback secret', async () => {
        const forged = jwt.sign({ email: 'x', role: 'admin' }, 'ariya-admin-secret-change-me');
        const res = await call('/api/waitlist', { headers: { Authorization: `Bearer ${forged}` } });
        expect(res.status).toBe(401);
    });
});

describe('admin login', () => {
    it('rejects wrong credentials', async () => {
        const res = await call('/api/admin/login', json('POST', { email: 'admin@test.dev', password: 'nope' }));
        expect(res.status).toBe(401);
    });

    it('issues a token that passes the auth check', async () => {
        const token = await login();
        const me = await call('/api/admin/me', { headers: { Authorization: `Bearer ${token}` } });
        expect(me.status).toBe(200);
        expect((await me.json()).user.email).toBe('admin@test.dev');

        // Gets past auth; the (unreachable) DB then fails, which is not a 401.
        const res = await call('/api/waitlist', { headers: { Authorization: `Bearer ${token}` } });
        expect(res.status).not.toBe(401);
    });
});

describe('waitlist signup validation', () => {
    it('rejects an invalid email', async () => {
        const res = await call('/api/waitlist', json('POST', { email: 'not-an-email', role: 'subscriber' }));
        expect(res.status).toBe(400);
    });

    it('rejects an unknown role', async () => {
        const res = await call('/api/waitlist', json('POST', { email: 'a@b.co', role: 'agency' }));
        expect(res.status).toBe(400);
    });

    it('rejects oversized public payloads', async () => {
        const res = await call('/api/waitlist', json('POST', { email: 'a@b.co', role: 'subscriber', name: 'x'.repeat(50_000) }));
        expect(res.status).toBe(413);
    });
});

describe('rate limiting', () => {
    it('throttles repeated admin login attempts', async () => {
        const statuses: number[] = [];
        for (let i = 0; i < 12; i++) {
            const res = await call('/api/admin/login', json('POST', { email: 'x@y.z', password: 'bad' }));
            statuses.push(res.status);
        }
        expect(statuses).toContain(429);
    });
});
