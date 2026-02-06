import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure env vars are loaded
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const LOOPS_API_KEY = process.env.LOOPS_API_KEY;

class LoopsService {
    private async request(endpoint: string, method: string, data: any) {
        if (!LOOPS_API_KEY) {
            console.warn('⚠️ Loops API key not found. Skipping email automation.');
            return null;
        }

        try {
            const response = await fetch(`https://app.loops.so/api/${endpoint}`, {
                method,
                headers: {
                    'Authorization': `Bearer ${LOOPS_API_KEY}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error(`Loops API Error (${endpoint}):`, errorData);
                return null;
            }

            return await response.json();
        } catch (error) {
            console.error(`Loops Network Error (${endpoint}):`, error);
            return null;
        }
    }

    async createContact(email: string, properties: {
        name?: string;
        role?: string;
        company?: string;
        source?: string;
    }) {
        return this.request('v1/contacts/create', 'POST', {
            email,
            ...properties,
            userGroup: properties.role === 'subscriber' ? 'Newsletter' : 'Waitlist',
        });
    }

    async sendEvent(email: string, eventName: string) {
        return this.request('v1/events/send', 'POST', {
            email,
            eventName,
        });
    }
}

export const loopsService = new LoopsService();
