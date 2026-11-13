import { APP_LINKS } from '../config/links';

export interface PublicVendor {
    id: string;
    business_name: string;
    category?: string;
    city?: string;
    location_base?: string;
    starting_price?: number | string | null;
    price?: number | string | null;
    rating_avg?: number | string | null;
    review_count?: number | string | null;
    user?: {
        profile?: {
            avatar?: string;
            avatarUrl?: string;
            profileImage?: string;
            profile_image?: string;
            businessLogo?: string;
            business_logo?: string;
        };
    };
}

export interface PublicCatalogItem {
    id: string;
    name: string;
    description?: string | null;
    price: number;
    category: string;
    brand: string;
    imageUrl?: string | null;
}

type JsonRecord = Record<string, unknown>;

const isLocalSite =
    typeof window !== 'undefined' &&
    ['localhost', '127.0.0.1'].includes(window.location.hostname);
const publicApiBase = isLocalSite ? '/api/v1' : APP_LINKS.api;

const asRecord = (value: unknown): JsonRecord =>
    value && typeof value === 'object' && !Array.isArray(value)
        ? value as JsonRecord
        : {};

async function getPublicData(path: string): Promise<unknown> {
    const response = await fetch(`${publicApiBase}${path}`, {
        headers: { Accept: 'application/json' },
    });

    if (!response.ok) {
        if (response.status === 401 && path === '/catalog') {
            throw new Error(
                'Ariya’s catalogue endpoint is still sign-in protected. Deploy the backend public catalogue change to show active items here.',
            );
        }
        throw new Error(`Could not load Ariya data (HTTP ${response.status}).`);
    }

    const payload: unknown = await response.json();
    const body = asRecord(payload);
    if (body.status === 'error') {
        throw new Error(typeof body.message === 'string' ? body.message : 'Ariya data could not be loaded.');
    }
    return body.data;
}

export async function loadPublicVendors(): Promise<PublicVendor[]> {
    const vendors: PublicVendor[] = [];
    let page = 1;
    let hasNextPage = true;

    while (hasNextPage) {
        const result = asRecord(await getPublicData(`/vendors?page=${page}&limit=50`));
        if (!Array.isArray(result.data)) {
            throw new Error('Ariya returned an unexpected vendor listing.');
        }
        vendors.push(...result.data as PublicVendor[]);
        const meta = asRecord(result.meta);
        hasNextPage = meta.hasNextPage === true;
        page += 1;
    }

    return vendors;
}

export async function loadPublicCatalog(): Promise<PublicCatalogItem[]> {
    const result = await getPublicData('/catalog');
    if (!Array.isArray(result)) {
        throw new Error('Ariya returned an unexpected catalogue response.');
    }
    return result as PublicCatalogItem[];
}
