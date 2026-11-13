import { Instagram, Twitter, Linkedin } from 'lucide-react';

export const FOOTER_CONFIG = {
    brand: {
        name: 'ÀRIYÁ',
        description: 'Plan weddings, celebrations and events with practical tools for hosts, planners and event professionals.',
        socials: [
            { icon: Instagram, href: 'https://www.instagram.com/ariya_hq/', label: 'Instagram' },
            { icon: Twitter, href: 'https://x.com/Ariya_HQ', label: 'X (Twitter)' },
            { icon: Linkedin, href: 'https://www.linkedin.com/company/111719206/', label: 'LinkedIn' },
        ],
    },
    columns: [
        {
            title: 'Wedding Planning',
            links: [
                { label: 'Wedding Planning Guide', href: '/wedding-planning' },
                { label: 'Wedding Budget', href: '/wedding-budget' },
                { label: 'Wedding Checklist & Timeline', href: '/wedding-checklist-timeline' },
                { label: 'Wedding Venues in Nigeria', href: '/wedding-venues-nigeria' },
                { label: 'Wedding Vendors in Nigeria', href: '/wedding-vendors-nigeria' },
                { label: 'Aso-Ebi in Nigeria', href: '/aso-ebi-in-nigeria' },
                { label: 'Nigerian Traditional Wedding', href: '/nigerian-traditional-wedding' },
                { label: 'Yoruba Traditional Wedding', href: '/yoruba-traditional-wedding' },
                { label: 'Igbo Traditional Wedding', href: '/igbo-traditional-wedding' },
                { label: 'Hausa Traditional Wedding', href: '/hausa-traditional-wedding' },
                { label: 'Wedding Engagement List', href: '/nigerian-wedding-engagement-list' },
                { label: 'Wedding Invitation Cards', href: '/wedding-invitation-cards-nigeria' },
                { label: 'Digital Wedding Invitations', href: '/digital-wedding-invitations' },
                { label: 'Wedding Website', href: '/wedding-website' },
                { label: 'Wedding RSVP & Guest Management', href: '/wedding-rsvp-guest-management' },
                { label: 'Wedding Gift Registry', href: '/wedding-gift-registry-nigeria' },
                { label: 'Wedding Wishlist Guide', href: '/wedding-wishlist' },
            ],
        },
        {
            title: 'Event Resources',
            links: [
                { label: 'Event Ticketing in Nigeria', href: '/event-ticketing-nigeria' },
                { label: 'Event Registration in Nigeria', href: '/event-registration-nigeria' },
                { label: 'Event Planning Tools', href: '/product/planning' },
                { label: 'Event Marketplace', href: '/product/marketplace' },
                { label: 'Wishlist Catalogue', href: '/product/wishlist' },
                { label: 'Event Websites', href: '/product/websites' },
                { label: 'Ariya Studio Designs', href: '/product/studio-designs' },
                { label: 'Planning Guides', href: '/resources/guides' },
                { label: 'Event Planning Journal', href: '/resources/blog' },
            ],
        },
        {
            title: 'Company & Support',
            links: [
                { label: 'About Us', href: '/about' },
                { label: 'Become an Ambassador', href: '/ambassadors' },
                { label: 'Careers', href: '/careers' },
                { label: 'Contact Us', href: '/contact' },
                { label: 'Help Center', href: '/resources/help-center' },
                { label: 'FAQs', href: '/resources/faq' },
                { label: 'support@ariyahq.com', href: 'mailto:support@ariyahq.com' },
                { label: 'WhatsApp Support', href: 'https://wa.me/2347035208062' },
            ],
        },
    ],
    newsletter: {
        title: 'Stay in the Loop',
        description: 'Get the latest trends and updates delivered straight to your inbox.',
    },
    legal: {
        copyright: `© ${new Date().getFullYear()} ÀRIYÁ Inc. All rights reserved.`,
        links: [
            { label: 'Privacy Policy', href: '/legal/privacy' },
            { label: 'Terms of Service', href: '/legal/terms' },
            { label: 'Cookie Settings', href: '/legal/cookies' },
        ],
    },
};
