import type { AccentColor } from './colors';

export const LANDING_CONFIG = {
    vendors: [
        { name: 'Photographers', color: 'red' },
        { name: 'Caterers', color: 'orange' },
        { name: 'Florists', color: 'green' },
        { name: 'Musicians', color: 'blue' },
        { name: 'Venues', color: 'purple' },
        { name: 'Bakers', color: 'pink' },
        { name: 'Decor', color: 'indigo' },
        { name: 'Rental', color: 'teal' },
    ] as { name: string; color: AccentColor }[],
    // Venue types, not specific listings — real venues live in the app.
    venues: [
        {
            name: "Banquet Halls",
            location: "Lagos",
            image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800",
            blurb: "Large indoor halls for weddings and big celebrations",
        },
        {
            name: "Garden & Outdoor",
            location: "Port Harcourt",
            image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800",
            blurb: "Open-air spaces for receptions and daytime events",
        },
        {
            name: "Event Centres",
            location: "Abuja",
            image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&q=80&w=800",
            blurb: "Flexible spaces for parties, launches, and conferences",
        }
    ],
    // Product facts only (see config/pricing.ts) — no usage numbers until we can back them up.
    stats: [
        { val: "₦0", label: "To plan an event" },
        { val: "0", label: "Subscriptions" },
        { val: "7%", label: "Vendor fee, only on completed bookings" },
        { val: "1 link", label: "For your website, RSVPs & wishlist" }
    ]
};
