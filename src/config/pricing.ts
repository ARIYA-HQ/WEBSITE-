import { Zap, Crown, Store, ShieldCheck, Globe, Gift, Lock } from 'lucide-react';

export const PRICING_CONFIG = {
    plans: [
        {
            id: 'personal',
            name: 'Personal Planners',
            description: 'Perfect for individuals planning their own celebrations & weddings.',
            price: 'FREE',
            priceSub: 'Free Access by Default',
            icon: Zap,
            color: 'orange',
            buttonText: 'Start Planning Free',
            features: [
                '1 Active Event Slot',
                'Core Planning Tools',
                'Vendor Discovery',
                'Guest List & RSVPs',
                'Budget Tracking',
                'Ariya-Branded Website'
            ]
        },
        {
            id: 'pro',
            name: 'Pro Event Planners',
            description: 'Professional tools for agencies and independent coordinators.',
            price: '₦30,000',
            priceSub: 'Usage-Restricted SaaS',
            period: '/mo',
            icon: Crown,
            color: 'primary',
            badge: 'Most Powerful',
            featured: true,
            buttonText: 'Upgrade to Pro',
            features: [
                'Up to 10 Active Events',
                'Client-Branded Proposals',
                'Advanced Analytics',
                'Premium Registry',
                'Custom Design Access',
                'Priority Support'
            ]
        },
        {
            id: 'vendor',
            name: 'Service Vendors',
            description: 'Growth tools for caterers, photographers, and venue owners.',
            price: '₦15,000',
            priceSub: 'Growth Visibility Tier',
            period: '/mo',
            icon: Store,
            color: 'blue',
            buttonText: 'Claim Your Profile',
            features: [
                'Growth Visibility Tools',
                'Premium Placement',
                'Category Boost',
                'Location-Specific Target',
                'Message Planners',
                'Unlimited Service Listings'
            ]
        }
    ],
    unlocks: [
        { title: "Remove Ariya Branding", price: "₦9,000", icon: ShieldCheck },
        { title: "Extra Event Slot", price: "₦7,500", icon: Zap },
        { title: "Premium Web Templates", price: "₦15,000", icon: Globe },
        { title: "Accelerated Payouts", price: "₦6,000", icon: Zap },
        { title: "White-Label Domain", price: "₦15,000", icon: Globe },
        { title: "Registry Branding", price: "₦9,000", icon: Gift },
        { title: "Custom Domain", price: "₦9,000", icon: Globe },
        { title: "Client Portals", price: "₦30,000", icon: Lock }
    ],
    faqs: [
        {
            question: "Why is there a ₦1,000 processing fee?",
            answer: "This covers our payment handling, escrow logic, fraud prevention, and platform infrastructure. We don't take commissions, so this flat fee ensures we can maintain the safest payment environment for planners and vendors in Nigeria."
        },
        {
            question: "Can I really plan an event for free?",
            answer: "Yes. Our free tier is fully functional. You can discover vendors, manage guests, track your budget, and launch an event website without paying a kobo. You only pay when you need more power, more events, or custom branding."
        },
        {
            question: "How do the 'markup' prices work?",
            answer: "Our pricing includes a 100% markup strategy. This reflects the professional value of our tools and infrastructure, ensuring we can continue building world-class technology for the Nigerian event industry without charging you commissions on your hard-earned bookings."
        }
    ]
};
