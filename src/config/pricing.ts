// Keep marketing prices aligned with the product billing configuration.
export const VENDOR_COMMISSION_RATE = 0.07;
export const TICKET_SERVICE_FEE_RATE = 0.03;
export const REGISTRY_SERVICE_FEE_RATE = 0.1;

export const STORAGE_FREE_PHOTOS = 100;
export const WEBSITE_FREE_MONTHS = 3;
export const WEBSITE_OFFLINE_MONTHS = 6;
export const WEBSITE_KEEP_FOREVER_NAIRA = 35_000;
export const STUDIO_PREMIUM_PRICE_NAIRA = 15_000;
export const VENDOR_VERIFICATION_FEE_NAIRA = 30_000;

export const STORAGE_TIERS = [
    { label: '+500 photos', priceNaira: 5_000 },
    { label: '+2,000 photos', priceNaira: 12_000 },
    { label: '+5,000 photos', priceNaira: 25_000 },
];

export const VENDOR_FEATURES = [
    { label: 'Featured — 7 days', priceNaira: 15_000 },
    { label: 'Featured — 30 days', priceNaira: 45_000 },
    { label: 'Category boost', priceNaira: 20_000 },
    { label: 'Premium placement (permanent)', priceNaira: 50_000 },
];

export const SMS_BUNDLES = [
    { label: '50 messaging credits', count: 50, priceNaira: 2_500 },
    { label: '200 messaging credits', count: 200, priceNaira: 8_000 },
    { label: '500 messaging credits', count: 500, priceNaira: 17_500 },
];

export const GUEST_PASS_TIERS = [
    { label: '1–199 guests', pricePerGuestNaira: 400 },
    { label: '200–499 guests', pricePerGuestNaira: 350 },
    { label: '500–999 guests', pricePerGuestNaira: 300 },
    { label: '1,000+ guests', pricePerGuestNaira: 250 },
];

export const GUEST_PASS_MINIMUM_NAIRA = 20_000;
export const GUEST_PASS_FREE_TEST = 5;

export const DOMAIN_PRICES_NAIRA: Record<string, number> = {
    com: 50_000,
    net: 60_000,
    org: 40_000,
};
