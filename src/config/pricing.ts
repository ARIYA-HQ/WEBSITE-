import { Zap, Crown, Store, ShieldCheck, Globe, Gift, Lock } from 'lucide-react';

export const PRICING_CONFIG = {
    plans: [
        {
            id: 'personal',
            name: 'Personal Planners',
            description: 'Perfect for individuals planning their own celebrations.',
            price: 'FREE',
            priceSub: '1 Free Event Included',
            icon: Zap,
            color: 'orange',
            buttonText: 'Start Planning Free',
            features: [
                'Free Base Access',
                'Extra Event Slot: ₦7,500',
                'Remove Ariya Branding: ₦9,000',
                'Premium Design Tools: ₦7,500',
                'Basic Web Template: ₦6,000',
                'Premium Web Template: ₦15,000'
            ]
        },
        {
            id: 'pro',
            name: 'Professional Planners',
            description: 'Professional tools for agencies and independent coordinators.',
            price: 'FREE',
            priceSub: '2 Free Events Included',
            icon: Crown,
            color: 'primary',
            badge: 'Most Powerful',
            featured: true,
            buttonText: 'Start Planning Free',
            features: [
                'Free Base Access',
                'Extra Event Slot: ₦15,000',
                'Client Branded Proposals: ₦9,000',
                'Advanced Analytics: ₦9,000',
                'White-Label Domain: ₦15,000',
                'Team Member: ₦9,000 - ₦15,000/user'
            ]
        },
        {
            id: 'vendor',
            name: 'Vendors',
            description: 'Growth visibility tools for caterers, photographers & venues.',
            price: 'FREE',
            priceSub: 'Free Basic Profile',
            icon: Store,
            color: 'blue',
            buttonText: 'Claim Your Profile',
            features: [
                'Free Base Access',
                'Enhanced Profile: ₦15,000',
                'Advanced Insights: ₦9,000',
                'Featured Listing: ₦15k (7d) / ₦45k (30d)',
                'Category Boost: ₦30,000',
                'Location Boost: ₦30,000',
                'Premium Placement: ₦60,000'
            ]
        }
    ],
    unlocks: [
        { title: "Remove Ariya Branding", price: "₦9,000", icon: ShieldCheck },
        { title: "Extra Event Slot (Personal)", price: "₦7,500", icon: Zap },
        { title: "Extra Event Slot (Pro)", price: "₦15,000", icon: Crown },
        { title: "Accelerated Registry Payout", price: "₦6,000", icon: Zap },
        { title: "White-Label Domain", price: "₦15,000", icon: Globe },
        { title: "Registry Premium Controls", price: "₦7,500", icon: Gift },
        { title: "Client Branded Proposals", price: "₦9,000", icon: ShieldCheck },
        { title: "Category Visibility Boost", price: "₦30,000", icon: Store }
    ],
    faqs: [
        {
            question: "Are there any recurring subscription fees?",
            answer: "No. Ariya operates on a per-feature unlock model. You start for free and only pay one-time fees to unlock specific premium capabilities for your event or profile."
        },
        {
            question: "How do ticket sales work?",
            answer: "For ticketed events, we add a flat 1.5% surcharge to the customer's total at checkout. You keep 100% of your listed ticket price."
        },
        {
            question: "How are vendors paid?",
            answer: "When a planner books a vendor, they pay a flat ₦1,000 Ariya Processing Fee on top of the vendor's service amount. Funds are held safely in escrow and released to the vendor upon service delivery confirmation."
        }
    ]
};
