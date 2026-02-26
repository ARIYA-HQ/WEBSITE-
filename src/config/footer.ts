import { Instagram, Twitter, Linkedin } from 'lucide-react';

export const FOOTER_CONFIG = {
    brand: {
        name: "ÀRIYÁ",
        description: "The future of event planning is here. Join thousands of planners who are leveling up their business with Ariya.",
        socials: [
            { icon: Instagram, href: 'https://www.instagram.com/ariya_hq/', label: 'Instagram' },
            { icon: Twitter, href: 'https://x.com/Ariya_HQ', label: 'X (Twitter)' },
            { icon: Linkedin, href: 'https://www.linkedin.com/company/111719206/', label: 'LinkedIn' }
        ]
    },
    columns: [
        {
            title: "Discover",
            links: [
                { label: 'Vendors', href: '#' },
                { label: 'Venues', href: '#' },
                { label: 'Inspiration', href: '#' },
                { label: 'Real Weddings', href: '#' }
            ]
        },
        {
            title: "Company",
            links: [
                { label: 'About Us', href: '/about' },
                { label: 'Careers', href: '/careers' },
                { label: 'Contact Us', href: '/contact' },
                { label: 'Press', href: '#' }
            ]
        }
    ],
    newsletter: {
        title: "Stay in the Loop",
        description: "Get the latest trends and updates delivered straight to your inbox."
    },
    legal: {
        copyright: `© ${new Array(new Date().getFullYear())} ÀRIYÁ Inc. All rights reserved.`,
        links: [
            { label: 'Privacy Policy', href: '/legal/privacy' },
            { label: 'Terms of Service', href: '/legal/terms' },
            { label: 'Cookie Settings', href: '/legal/cookies' }
        ]
    }
};
