import { Zap, Crown, Store, ShieldCheck, Globe, Gift, Users, BarChart2, MessageSquare, Star, Lock, Image as ImageIcon, TrendingUp } from 'lucide-react';

export const PRICING_CONFIG = {
    plans: [
        {
            id: 'personal',
            name: 'Personal Planners',
            description: 'Everything you need to plan your own celebrations — beautifully, and for free.',
            price: 'FREE',
            priceSub: 'Unlimited Events · Always',
            icon: Zap,
            color: 'orange',
            buttonText: 'Start Planning Free',
            features: [
                'Unlimited Events',
                'Budget Tracker & Expense Splits',
                'Guest Management & RSVPs',
                'Vendor Discovery & Bookings',
                'Gift Wishlist',
                'Event Website (Ariya-branded)',
                'Tickets & Check-in',
                'AI Event Planner',
            ]
        },
        {
            id: 'pro',
            name: 'Professional Planners',
            description: 'The full toolkit for agencies and independent coordinators running client events.',
            price: 'FREE',
            priceSub: 'Unlimited Events · Always',
            icon: Crown,
            color: 'primary',
            badge: 'Most Powerful',
            featured: true,
            buttonText: 'Access Dashboard',
            features: [
                'Everything in Personal',
                'Client Management Portal',
                'Proposal Builder',
                'Team Collaboration (paid unlock)',
                'Remove Ariya Branding (paid unlock)',
                'Custom Domain (paid unlock)',
                'Advanced Analytics (paid unlock)',
                'SMS Guest Notifications (paid bundles)',
            ]
        },
        {
            id: 'vendor',
            name: 'Vendors',
            description: 'Get discovered by thousands of planners. Grow your bookings with zero subscription fees.',
            price: 'FREE',
            priceSub: 'Free Profile · 7% on completed bookings',
            icon: Store,
            color: 'blue',
            buttonText: 'Claim Your Profile',
            features: [
                'Standard Directory Listing',
                'Portfolio Gallery',
                'Receive Unlimited Inquiries',
                'Client Reviews & Replies',
                'Ariya Guarantee (Escrow) opt-in',
                'Verified Badge (paid unlock)',
                'Visibility Boosts (paid unlocks)',
                'Monthly Revenue Analytics',
            ]
        }
    ],
    unlocks: [
        { title: "Remove Ariya Branding", price: "₦15,000 / event", icon: ShieldCheck },
        { title: "Custom Domain", price: "From ₦20,000", icon: Globe },
        { title: "Team Member Access", price: "₦10,000+ / member", icon: Users },
        { title: "Advanced Analytics", price: "₦20,000 / event", icon: BarChart2 },
        { title: "SMS Guest Notifications", price: "From ₦2,500 / bundle", icon: MessageSquare },
        { title: "Vendor Verified Badge", price: "₦30,000 one-time", icon: Star },
        { title: "Vendor Category Boost", price: "₦20,000 / 30 days", icon: TrendingUp },
        { title: "Vendor Featured Listing", price: "From ₦15,000", icon: Zap },
        { title: "Enhanced Vendor Profile", price: "₦15,000 one-time", icon: Store },
        { title: "Gallery Storage Top-up", price: "From ₦5,000", icon: ImageIcon },
        { title: "Wishlist Premium Controls", price: "₦7,500 / event", icon: Gift },
        { title: "Ariya Guarantee (Escrow)", price: "Free opt-in for vendors", icon: Lock },
    ],
    vendorFees: {
        commission: 0.07,
        commissionLabel: '7%',
        description: 'A 7% platform fee is deducted from the vendor payout on completed bookings. No fee on inquiries, quotes, or cancelled bookings.',
    },
    registryFees: {
        platformRate: 0.08,
        paystackRate: 0.02,
        totalRate: 0.10,
        description: 'A 10% total fee (8% Ariya + 2% Paystack) is deducted from the planner payout when wishlist funds are withdrawn. Buyers pay face value.',
    },
    ticketFees: {
        rate: 0.03,
        description: 'A 3% service fee is deducted from the organiser payout on ticket sales. Buyers pay the face value you set.',
    },
    smsBundles: [
        { label: '50 SMS', price: '₦2,500' },
        { label: '200 SMS', price: '₦8,000' },
        { label: '500 SMS', price: '₦17,500' },
    ],
    faqs: [
        {
            question: "Are there any recurring subscription fees?",
            answer: "No. Ariya operates entirely on a pay-per-feature model. Event creation is always free. You only pay a one-time fee when you need a specific premium capability — like removing branding, adding a team member, or boosting your vendor profile."
        },
        {
            question: "How do vendor payments work?",
            answer: "When a planner books a vendor through Ariya, funds are held in escrow until service delivery is confirmed. A 7% platform fee is then deducted from the vendor payout before release. There are no subscription costs or per-inquiry fees — you only pay when you earn."
        },
        {
            question: "What is the Ariya Guarantee?",
            answer: "Vendors who opt into the Ariya Guarantee have client funds held in escrow and released automatically 48 hours after the event date — or earlier if the planner confirms satisfaction. It builds trust with planners and is completely free for vendors to enable."
        },
        {
            question: "What does the Verified Badge cost?",
            answer: "Vendor verification is a one-time ₦30,000 payment. You submit your NIN and/or CAC documents, our team reviews within 24–48 hours, and your profile gets a permanent verified badge that planners can filter by."
        },
        {
            question: "How do wishlist and ticket fees work?",
            answer: "Wishlist: buyers pay face value, and a 10% total fee (8% Ariya + 2% Paystack) is deducted from the planner's withdrawal amount. Tickets: buyers pay the price you set, and a 3% service fee is deducted from your payout. No upfront costs."
        },
        {
            question: "Are feature unlocks permanent?",
            answer: "Most unlocks are one-time payments per event (branding removal, analytics). Visibility boosts like Featured Listing are time-limited (7 or 30 days). The Vendor Verified Badge is a permanent one-time payment."
        },
    ]
};
