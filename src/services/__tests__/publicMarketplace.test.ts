import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { loadPublicCatalog, loadPublicVendors } from '../publicMarketplace';

const fetchMock = vi.fn();

describe('public Ariya marketplace data', () => {
    beforeEach(() => {
        fetchMock.mockReset();
        vi.stubGlobal('fetch', fetchMock);
    });

    afterEach(() => {
        vi.unstubAllGlobals();
    });

    it('loads all public vendor pages', async () => {
        fetchMock
            .mockResolvedValueOnce({
                ok: true,
                json: async () => ({
                    status: 'success',
                    data: {
                        data: [{ id: 'vendor-1', business_name: 'Vendor One' }],
                        meta: { hasNextPage: true },
                    },
                }),
            })
            .mockResolvedValueOnce({
                ok: true,
                json: async () => ({
                    status: 'success',
                    data: {
                        data: [{ id: 'vendor-2', business_name: 'Vendor Two' }],
                        meta: { hasNextPage: false },
                    },
                }),
            });

        await expect(loadPublicVendors()).resolves.toEqual([
            { id: 'vendor-1', business_name: 'Vendor One' },
            { id: 'vendor-2', business_name: 'Vendor Two' },
        ]);
        expect(fetchMock).toHaveBeenNthCalledWith(
            1,
            '/api/v1/vendors?page=1&limit=50',
            { headers: { Accept: 'application/json' } },
        );
        expect(fetchMock).toHaveBeenNthCalledWith(
            2,
            '/api/v1/vendors?page=2&limit=50',
            { headers: { Accept: 'application/json' } },
        );
    });

    it('loads active catalogue items from the public endpoint', async () => {
        const items = [{ id: 'catalog-1', name: 'Gift item', price: 25000 }];
        fetchMock.mockResolvedValueOnce({
            ok: true,
            json: async () => ({ status: 'success', data: items }),
        });

        await expect(loadPublicCatalog()).resolves.toEqual(items);
        expect(fetchMock).toHaveBeenCalledWith(
            '/api/v1/catalog',
            { headers: { Accept: 'application/json' } },
        );
    });

    it('surfaces public API failures', async () => {
        fetchMock.mockResolvedValueOnce({ ok: false, status: 503 });

        await expect(loadPublicCatalog()).rejects.toThrow('HTTP 503');
    });

    it('explains when the deployed catalogue endpoint still requires authentication', async () => {
        fetchMock.mockResolvedValueOnce({ ok: false, status: 401 });

        await expect(loadPublicCatalog()).rejects.toThrow(
            'Deploy the backend public catalogue change',
        );
    });
});
