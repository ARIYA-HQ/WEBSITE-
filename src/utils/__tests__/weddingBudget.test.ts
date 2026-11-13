import { describe, expect, it } from 'vitest';
import {
    allocateWeddingBudget,
    WEDDING_BUDGET_ALLOCATIONS,
} from '../weddingBudget';

describe('allocateWeddingBudget', () => {
    it('uses a sample allocation that totals 100 percent', () => {
        expect(WEDDING_BUDGET_ALLOCATIONS.reduce((total, item) => total + item.percent, 0))
            .toBe(100);
    });

    it('matches the example allocation and sums to the full budget', () => {
        const allocations = allocateWeddingBudget(10_000_000);

        expect(allocations.map(({ amount }) => amount)).toEqual([
            1_500_000,
            2_500_000,
            1_000_000,
            1_200_000,
            1_000_000,
            700_000,
            800_000,
            300_000,
            500_000,
            500_000,
        ]);
        expect(allocations.reduce((total, item) => total + item.amount, 0))
            .toBe(10_000_000);
    });

    it('distributes rounding remainder without losing any naira', () => {
        const allocations = allocateWeddingBudget(1);

        expect(allocations.reduce((total, item) => total + item.amount, 0)).toBe(1);
        expect(allocations.filter(({ amount }) => amount > 0)).toHaveLength(1);
    });

    it.each([-1, 1.5, Number.MAX_SAFE_INTEGER + 1])(
        'rejects invalid budgets (%s)',
        (budget) => {
            expect(() => allocateWeddingBudget(budget)).toThrow(RangeError);
        },
    );
});
