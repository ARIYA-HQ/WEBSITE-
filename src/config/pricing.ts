import { Zap, Crown, Store, ShieldCheck, Globe, Gift, Users, BarChart2 } from 'lucide-react';

export const PRICING_CONFIG = {
    plans: [
        {
            id: 'personal',
            name: 'Personal Planners',
            description: 'Everything you need to plan your own celebrations — beautifully, and for free.',
            price: 'FREE',
            priceSub: 'Unlimited Events',
            icon: Zap,
            color: 'orange',
            buttonText: 'Start Planning Free',
            features: [
                'Unlimited Events',
                'Budget Tracker',
                'Guest Management & RSVPs',
                'Vendor Discovery',
                'Gift Registry',
                'Event Website (Ariya-branded)',
            ]
        },
        {
            id: 'pro',
            name: 'Professional Planners',
            description: 'The full toolkit for agencies and independent coordinators running client events.',
            price: 'FREE',
            priceSub: 'Unlimited Events',
            icon: Crown,
            color: 'primary',
            badge: 'Most Powerful',
            featured: true,
            buttonText: 'Access Dashboard',
            features: [
                'Unlimited Events',
                'Client Management Portal',
                'Vendor Network & Bookings',
                'Proposal Builder',
                'Basic Analytics',
                'Team Collaboration (paid unlock)',
            ]
        },
        {
            id: 'vendor',
            name: 'Vendors',
            description: 'Get discovered by thousands of planners. Grow your bookings with zero commission.',
            price: 'FREE',
            priceSub: 'Free Basic Profile · 0% Commission',
            icon: Store,
            color: 'blue',
            buttonText: 'Claim Your Profile',
            features: [
                'Standard Directory Listing',
                'Portfolio Gallery',
                'Receive Unlimited Inquiries',
                'Client Reviews',
                '0% Booking Commission',
                'Visibility Boosts (paid unlock)',
            ]
        }
    ],
    unlocks: [
        { title: "Remove Ariya Branding", price: "₦9,000 / event", icon: ShieldCheck },
        { title: "White-Label Domain", price: "₦15,000 / event", icon: Globe },
        { title: "Client Branded Proposals", price: "₦9,000 / event", icon: Crown },
        { title: "Team Member Access", price: "₦9,000+ / member", icon: Users },
        { title: "Advanced Analytics", price: "₦9,000 / event", icon: BarChart2 },
        { title: "Registry Premium Controls", price: "₦7,500 / event", icon: Gift },
        { title: "Accelerated Registry Payout", price: "₦6,000 / event", icon: Zap },
        { title: "Vendor Category Boost", price: "₦30,000 / 30 days", icon: Store }
    ],
    faqs: [
        {
            question: "Are there any recurring subscription fees?",
            answer: "No. Ariya operates entirely on a pay-per-feature model. Event creation is always free. You only pay a one-time fee when you need a specific premium capability — like removing branding or going white-label for a client."
        },
        {
            question: "How do vendor payments work?",
            answer: "When a planner books a vendor through Ariya, a flat ₦1,000 processing fee is added on top of the vendor's service amount. Funds are held in escrow and released to the vendor after service delivery is confirmed. No percentage commissions, ever."
        },
        {
            question: "Are feature unlocks permanent?",
            answer: "Yes. Feature unlocks are one-time payments per event. Once you unlock a feature for an event, it stays unlocked for the lifetime of that event — no renewals needed."
        },
        {
            question: "What does 0% commission mean for vendors?",
            answer: "We take no percentage cut of your service revenue. The only payment-related fee is the flat ₦1,000 processing fee charged to the planner at the time of booking — not to you."
        }
    ]
};
