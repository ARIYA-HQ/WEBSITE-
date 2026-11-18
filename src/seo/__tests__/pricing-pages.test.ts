import { describe, expect, it } from 'vitest';
import { DOMAIN_PRICES_NAIRA, SMS_BUNDLES } from '../../config/pricing';
import { formatIntegerWithCommas } from '../../components/marketing/CommaNumberInput';
import {
    getGuestPassCostBreakdown,
    getTicketFeeEstimate,
    getWebsiteCostEstimate,
    pricingPages,
} from '../pricing-pages-content';
import { isIndexableRoute, publicPages } from '../routes';

describe('pricing pages', () => {
    it.each([
        ['2000', '2,000'],
        ['1000000', '1,000,000'],
        ['', ''],
        ['12,345', '12,345'],
        ['12a345', '12,345'],
    ])('formats numeric input %s as %s', (value, expected) => {
        expect(formatIntegerWithCommas(value)).toBe(expected);
    });

    it('registers five indexable pricing pages with internal links to known routes', () => {
        expect(Object.keys(pricingPages)).toHaveLength(5);

        for (const [path, page] of Object.entries(pricingPages)) {
            expect(page.path).toBe(path);
            expect(publicPages[path]?.title).toBeTruthy();
            expect(publicPages[path]?.description).toBeTruthy();
            expect(isIndexableRoute(path)).toBe(true);
            expect(page.faqs.length).toBeGreaterThan(0);

            for (const link of page.related) {
                expect(publicPages[link.href]).toBeTruthy();
            }
        }
    });

    it('uses the configured messaging credit packages', () => {
        const packages = pricingPages['/bulk-sms-email-pricing'].blocks.find(
            (block) => block.id === 'messaging-packages',
        );

        expect(packages?.type).toBe('cards');
        if (packages?.type !== 'cards') return;

        expect(packages.cards.map(({ price }) => price)).toEqual(
            SMS_BUNDLES.map(({ priceNaira }) => `₦${priceNaira.toLocaleString('en-NG')}`),
        );
    });

    it.each([
        [50, 20_000],
        [88, 35_200],
        [100, 40_000],
        [199, 79_600],
        [200, 79_950],
        [300, 114_950],
        [500, 184_900],
        [1000, 334_850],
    ])('estimates progressive guest pass pricing for %i passes', (count, expected) => {
        expect(getGuestPassCostBreakdown(count)?.total).toBe(expected);
    });

    it('rejects invalid guest pass estimates', () => {
        expect(getGuestPassCostBreakdown(0)).toBeNull();
        expect(getGuestPassCostBreakdown(-1)).toBeNull();
        expect(getGuestPassCostBreakdown(10.5)).toBeNull();
        expect(getGuestPassCostBreakdown(Number.POSITIVE_INFINITY)).toBeNull();
    });

    it('applies the minimum paid guest pass charge to smaller estimates', () => {
        expect(getGuestPassCostBreakdown(1)?.total).toBe(20_000);
        expect(getGuestPassCostBreakdown(49)?.total).toBe(20_000);
        expect(getGuestPassCostBreakdown(50)?.minimumChargeApplied).toBe(0);
    });

    it('estimates ticket fees without mixing in payment processing charges', () => {
        expect(getTicketFeeEstimate(10_000, 100, true)).toEqual({
            grossTicketValue: 1_000_000,
            serviceFee: 30_000,
            buyerTotal: 1_030_000,
            organiserProceeds: 1_000_000,
        });
        expect(getTicketFeeEstimate(10_000, 100, false)).toEqual({
            grossTicketValue: 1_000_000,
            serviceFee: 30_000,
            buyerTotal: 1_000_000,
            organiserProceeds: 970_000,
        });
    });

    it('rejects invalid ticket price and quantity estimates', () => {
        expect(getTicketFeeEstimate(-1, 1, true)).toBeNull();
        expect(getTicketFeeEstimate(10, 0, true)).toBeNull();
        expect(getTicketFeeEstimate(10.5, 1, true)).toBeNull();
        expect(getTicketFeeEstimate(Number.MAX_SAFE_INTEGER, 2, true)).toBeNull();
    });

    it('estimates domain pricing with renewals and the optional keep-live fee', () => {
        expect(getWebsiteCostEstimate('org', 3, true)).toEqual({
            firstYearPrice: DOMAIN_PRICES_NAIRA.org,
            annualRenewal: 64_000,
            renewalCount: 2,
            renewalTotal: 128_000,
            extendedWebsiteFee: 35_000,
            total: 203_000,
        });
    });

    it('rejects invalid domain selections and website terms', () => {
        expect(getWebsiteCostEstimate('invalid', 1, false)).toBeNull();
        expect(getWebsiteCostEstimate('com', 0, false)).toBeNull();
        expect(getWebsiteCostEstimate('com', 11, false)).toBeNull();
        expect(getWebsiteCostEstimate('com', 1.5, false)).toBeNull();
    });
});
