import {
    BookOpen, Calculator, CalendarDays, ClipboardList, Gift, Globe,
    HelpCircle, Mail, Palette, Search, Store, Ticket, UserPlus,
} from 'lucide-react';
import { APP_LINKS } from './links';
import { SHOW_CASE_STUDIES } from './features';

export const NAVIGATION_CONFIG = [
    {
        title: 'Plan an Event',
        items: [
            { title: 'Wedding planning guide', description: 'Practical steps for planning a wedding in Nigeria', href: '/wedding-planning', icon: ClipboardList },
            { title: 'Budget calculator', description: 'Build and keep track of your wedding budget', href: '/wedding-budget', icon: Calculator },
            { title: 'Wedding checklist & timeline', description: 'Keep preparations moving in the right order', href: '/wedding-checklist-timeline', icon: CalendarDays },
        ],
    },
    {
        title: 'Find Vendors',
        items: [
            { title: 'Browse Ariya vendors', description: 'Explore published vendor profiles and listings', href: '/product/marketplace', icon: Search },
            { title: 'Wedding vendors guide', description: 'Compare services and prepare to book', href: '/wedding-vendors-nigeria', icon: Store },
            { title: 'Wedding venues guide', description: 'What to consider when choosing a venue', href: '/wedding-venues-nigeria', icon: Globe },
            { title: 'Become a vendor', description: 'Create a vendor profile on Ariya', href: APP_LINKS.vendorSignup, icon: UserPlus },
            { title: 'For event vendors', description: 'Learn about selling services on Ariya', href: '/solutions/vendors', icon: Store },
        ],
    },
    {
        title: 'Websites & Invitations',
        items: [
            { title: 'Event website templates', description: 'Browse the current Ariya website themes', href: '/product/websites', icon: Globe },
            { title: 'Wedding website guide', description: 'Plan what to share on your event website', href: '/wedding-website', icon: CalendarDays },
            { title: 'Browse invitation designs', description: 'Explore Ariya Studio wedding invitation designs', href: '/product/invitations', icon: Mail },
            { title: 'Digital invitation guide', description: 'Learn how to create and share digital wedding invitations', href: '/digital-wedding-invitations', icon: Mail },
            { title: 'Browse all Ariya Studio designs', description: 'Explore invitations, access cards and event stationery', href: '/product/studio-designs', icon: Palette },
            { title: 'Wedding invitation guide', description: 'Explore invitation styles and details', href: '/wedding-invitation-cards-nigeria', icon: Mail },
        ],
    },
    {
        title: 'Guests & RSVPs',
        items: [
            { title: 'Guest list & RSVP guide', description: 'Organise invitations and track guest responses', href: '/wedding-rsvp-guest-management', icon: ClipboardList },
            { title: 'Event registration guide', description: 'Learn how to plan an event registration process', href: '/event-registration-nigeria', icon: ClipboardList },
            { title: 'Event ticketing guide', description: 'Learn about online event ticketing', href: '/event-ticketing-nigeria', icon: Ticket },
        ],
    },
    {
        title: 'Gift Registry',
        items: [
            { title: 'Browse the wishlist catalogue', description: 'See current gift items available on Ariya', href: '/product/wishlist', icon: Gift },
            { title: 'Wedding gift registry guide', description: 'Learn how registries and gift lists work', href: '/wedding-gift-registry-nigeria', icon: Gift },
            { title: 'Wedding wishlist guide', description: 'Get ideas for creating and sharing a wishlist', href: '/wedding-wishlist', icon: ClipboardList },
        ],
    },
    {
        title: 'Ideas & Advice',
        items: [
            { title: 'Wedding planning guides', description: 'Browse practical event and wedding guides', href: '/resources/guides', icon: BookOpen },
            { title: 'Event planning journal', description: 'Ideas and stories from Ariya', href: '/resources/blog', icon: BookOpen },
            ...(SHOW_CASE_STUDIES ? [{ title: 'Stories from Ariya', description: 'Read customer and community stories', href: '/resources/case-studies', icon: BookOpen }] : []),
            { title: 'Help center', description: 'Find help using Ariya', href: '/resources/help-center', icon: HelpCircle },
            { title: 'FAQs', description: 'Answers to common questions', href: '/resources/faq', icon: HelpCircle },
        ],
    },
];

export type NavigationItem = (typeof NAVIGATION_CONFIG)[number]['items'][number];
