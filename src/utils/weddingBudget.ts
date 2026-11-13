export const WEDDING_BUDGET_ALLOCATIONS = [
    { name: 'Venue and facilities', percent: 15 },
    { name: 'Catering and drinks', percent: 25 },
    { name: 'Decoration', percent: 10 },
    { name: 'Outfits and beauty', percent: 12 },
    { name: 'Photography and videography', percent: 10 },
    { name: 'Entertainment', percent: 7 },
    { name: 'Traditional requirements', percent: 8 },
    { name: 'Invitations and guest management', percent: 3 },
    { name: 'Transportation and logistics', percent: 5 },
    { name: 'Contingency', percent: 5 },
] as const;

export function allocateWeddingBudget(budget: number) {
    if (!Number.isSafeInteger(budget) || budget < 0) {
        throw new RangeError('Wedding budget must be a non-negative safe integer.');
    }

    const allocations = WEDDING_BUDGET_ALLOCATIONS.map((item) => {
        const numerator = BigInt(budget) * BigInt(item.percent);
        return {
            ...item,
            amount: Number(numerator / 100n),
            remainder: numerator % 100n,
        };
    });
    const unallocated = budget - allocations.reduce((total, item) => total + item.amount, 0);

    allocations
        .map((item, index) => ({ index, remainder: item.remainder }))
        .sort((left, right) => Number(right.remainder - left.remainder))
        .slice(0, unallocated)
        .forEach(({ index }) => {
            allocations[index].amount += 1;
        });

    return allocations.map(({ remainder: _remainder, ...item }) => item);
}
