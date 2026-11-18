import { SHOW_CASE_STUDIES } from '../config/features';

export const SITE_URL = 'https://ariyahq.com';
export const DEFAULT_DESCRIPTION =
    'Plan weddings, birthdays and corporate events with AriyaHQ. Create event websites, manage RSVPs, discover vendors, sell tickets and organise wishlists.';

export function canonicalPathFor(pathname: string) {
    const normalizedPath =
        pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
    if (/^\/resources\/blog\/[^/]+$/.test(normalizedPath)) return normalizedPath;
    return normalizedPath === '/' ? '/' : `${normalizedPath}/`;
}

export const publicPages: Record<string, { title: string; description: string }> = {
    '/': {
        title: 'Wedding & Event Planning Made Easier in Nigeria',
        description:
            'Plan weddings, birthdays and corporate events with AriyaHQ. Discover vendors, create event websites, organise guests and explore digital invitations.',
    },
    '/product/marketplace': {
        title: 'Event Vendor Marketplace',
        description: 'Discover event vendors and services for weddings, celebrations and other occasions with AriyaHQ.',
    },
    '/product/wishlist': {
        title: 'Ariya Wishlist Catalogue',
        description: 'Browse current gift items in the Ariya catalogue and find thoughtful additions for your event wishlist.',
    },
    '/product/websites': {
        title: 'Event Website Builder',
        description: 'Create a website for your wedding, party or event and share event information with your guests.',
    },
    '/product/invitations': {
        title: 'Wedding Invitation Designs | Ariya Studio',
        description: 'Browse Ariya Studio wedding invitation designs and find a style for your celebration.',
    },
    '/product/studio-designs': {
        title: 'Ariya Studio Design Templates',
        description: 'Explore Ariya Studio designs for invitations, guest access cards, thank-you notes, table numbers and place cards.',
    },
    '/solutions/agencies': {
        title: 'Event Tools for Agencies',
        description: 'Coordinate event planning, clients and vendor workflows with AriyaHQ.',
    },
    '/solutions/vendors': {
        title: 'AriyaHQ for Event Vendors',
        description: 'Showcase your event services and connect with people planning celebrations on AriyaHQ.',
    },
    '/solutions/enterprise': {
        title: 'Event Management for Organisations',
        description: 'Explore AriyaHQ tools for organisations coordinating events, guests and registrations.',
    },
    '/solutions/individuals': {
        title: 'Plan Your Event with AriyaHQ',
        description: 'Plan a wedding, birthday or celebration with event tools designed for individuals and hosts.',
    },
    '/solutions/planners': {
        title: 'Tools for Professional Event Planners',
        description: 'Manage event plans, clients, vendors and guest details with AriyaHQ.',
    },
    '/resources/blog': {
        title: 'Event Planning Journal',
        description: 'Read practical ideas and guidance for weddings, celebrations and event planning.',
    },
    '/resources/case-studies': {
        title: 'AriyaHQ Customer Stories',
        description: 'Explore event and business stories from people using AriyaHQ.',
    },
    '/resources/guides': {
        title: 'Event Planning Guides and Templates',
        description: 'Browse event planning guides, templates and checklists from AriyaHQ.',
    },
    '/resources/faq': {
        title: 'Frequently Asked Questions',
        description: 'Find answers to common questions about planning and managing events with AriyaHQ.',
    },
    '/resources/help-center': {
        title: 'AriyaHQ Help Center',
        description: 'Find help using AriyaHQ event planning and management tools.',
    },
    '/pricing': {
        title: 'AriyaHQ Pricing: Event Planning, Ticketing and Guest Tools',
        description: 'Explore AriyaHQ event management pricing. Create events for free without a monthly subscription and review fees for ticketing, QR passes, messaging and websites.',
    },
    '/bulk-sms-email-pricing': {
        title: 'Bulk SMS and Email Pricing in Nigeria',
        description: 'Compare AriyaHQ bulk SMS and email credit packages in Nigeria. Choose 50, 200 or 500 credits and understand how message usage works.',
    },
    '/event-ticketing-pricing': {
        title: 'Event Ticketing Fees in Nigeria: AriyaHQ Pricing',
        description: 'Review AriyaHQ event ticketing fees in Nigeria. Sell paid tickets with a 3% service fee, flexible fee handling and no monthly subscription.',
    },
    '/qr-code-guest-pass-pricing': {
        title: 'QR Code Guest Pass Pricing in Nigeria',
        description: 'See AriyaHQ QR code guest pass pricing in Nigeria. Get 5 free test passes, compare progressive rates and estimate event pass costs.',
    },
    '/event-website-pricing': {
        title: 'Custom Event Website Pricing in Nigeria',
        description: 'Explore AriyaHQ event website pricing in Nigeria. Create a website for free, keep it live indefinitely for ₦35,000 or choose a custom domain.',
    },
    '/event-management-software-pricing': {
        title: 'Event Management Software Pricing in Nigeria',
        description: 'Compare AriyaHQ event management pricing in Nigeria. Create events for free with no monthly subscription and review fees for ticketing, passes and messaging.',
    },
    '/wedding-planning': {
        title: 'Wedding Planning in Nigeria: Complete Guide (2026)',
        description: 'Planning a wedding in Nigeria? Get practical guidance on ceremonies, budgets, timelines, venues, vendors and guests.',
    },
    '/wedding-budget': {
        title: 'Nigerian Wedding Budget: Cost Breakdown & Planning Guide',
        description: 'Create a realistic Nigerian wedding budget. Learn how to estimate expenses, compare vendor quotes, reduce costs and track payments with a practical budget calculator.',
    },
    '/aso-ebi-in-nigeria': {
        title: 'Aso-Ebi in Nigeria: Meaning, Fabrics, Prices & Wedding Guide',
        description: 'Learn what Aso-Ebi means, popular Nigerian wedding fabrics, how to order, budgeting tips, outfit ideas and how to coordinate guests for your wedding.',
    },
    '/wedding-website': {
        title: 'Wedding Website Nigeria: Create Yours with AriyaHQ',
        description: 'Create a beautiful wedding website with AriyaHQ. Share your wedding details, event information and important updates with your guests in one place.',
    },
    '/digital-wedding-invitations': {
        title: 'Digital Wedding Invitations in Nigeria: Create and Share Online',
        description: 'Create beautiful digital wedding invitations for your Nigerian wedding. Discover how to design, personalise and share your wedding invites online.',
    },
    '/wedding-rsvp-guest-management': {
        title: 'Wedding RSVP & Guest Management: Organise Your Wedding Guests',
        description: 'Make wedding guest management easier. Learn how to organise your guest list, collect RSVPs, track attendance and plan a stress-free Nigerian wedding.',
    },
    '/wedding-vendors-nigeria': {
        title: 'Wedding Vendors in Nigeria: How to Find and Book the Best',
        description: 'Learn how to find, compare and book reliable wedding vendors in Nigeria, with practical questions, contract guidance and a booking checklist.',
    },
    '/wedding-venues-nigeria': {
        title: 'Wedding Venues in Nigeria: How to Choose the Right Venue',
        description: 'Looking for wedding venues in Nigeria? Learn how to choose the right venue, compare prices, inspect event centres and avoid hidden costs before booking.',
    },
    '/wedding-invitation-cards-nigeria': {
        title: 'Wedding Invitation Cards in Nigeria: Designs, Wording and Costs',
        description: 'Explore Nigerian wedding invitation card designs, wording examples, printing considerations and digital invitations. Learn how to invite guests and manage RSVPs.',
    },
    '/wedding-gift-registry-nigeria': {
        title: 'Wedding Gift Registry in Nigeria: Create Your Wedding Wishlist',
        description: 'Learn how to create a wedding gift registry in Nigeria, choose gifts, add a wishlist, receive cash contributions and share your registry with wedding guests.',
    },
    '/wedding-wishlist': {
        title: 'Wedding Wishlist in Nigeria: Create and Share Your Gift List',
        description: 'Learn how to create a wedding wishlist in Nigeria, choose practical gifts, organise your list by category and share it with wedding guests.',
    },
    '/event-ticketing-nigeria': {
        title: 'Event Ticketing in Nigeria: Sell Tickets Online and Manage Guests',
        description: 'Learn how event ticketing works in Nigeria, how to sell tickets online, set ticket prices, collect payments, manage registrations and check in guests using digital tickets.',
    },
    '/event-registration-nigeria': {
        title: 'Event Registration in Nigeria: Manage Attendees Online',
        description: 'Learn how to manage event registration in Nigeria, create online registration forms, collect attendee details, send confirmations and track participants before and during your event.',
    },
    '/bulk-sms-for-events': {
        title: 'Bulk SMS for Events in Nigeria',
        description: 'Send bulk SMS for events with AriyaHQ. Reach guests with invitations, reminders, registration information and important event updates.',
    },
    '/bulk-email-for-events': {
        title: 'Bulk Email for Events in Nigeria',
        description: 'Send bulk emails for events with AriyaHQ. Share invitations, registration information, reminders and important updates with your event guests.',
    },
    '/qr-code-guest-passes': {
        title: 'QR Code Guest Passes for Events in Nigeria',
        description: 'Create unique QR code guest passes for your event with AriyaHQ. Organise digital invitations, guest registration and event access.',
    },
    '/event-registration': {
        title: 'Event Registration Software in Nigeria',
        description: 'Manage event registration with AriyaHQ. Organise attendee information, RSVPs, guest communication and unique QR code guest passes.',
    },
    '/event-check-in': {
        title: 'Event Check-in Software in Nigeria',
        description: 'Prepare for event check-in with AriyaHQ. Organise guest information, manage registrations and provide unique QR code guest passes.',
    },
    '/wedding-checklist-timeline': {
        title: 'Wedding Planning Checklist Nigeria: Month-by-Month Guide',
        description: 'Follow a practical Nigerian wedding planning checklist for budgeting, vendors, traditional marriage requirements, invitations, guests and the wedding day.',
    },
    '/nigerian-traditional-wedding': {
        title: 'Nigerian Traditional Wedding Customs, Attire and Planning Guide',
        description: 'Explore Nigerian traditional wedding customs, engagement lists, attire and family preparations, with examples and a practical planning checklist.',
    },
    '/yoruba-traditional-wedding': {
        title: 'Yoruba Traditional Wedding: Customs, Engagement List and Planning Guide',
        description: 'Learn about Yoruba wedding customs, family introductions, Alaga, ẹrù ìyàwó, traditional attire and practical planning.',
    },
    '/igbo-traditional-wedding': {
        title: 'Igbo Traditional Wedding: Igba Nkwu, Engagement List and Customs',
        description: 'Explore Igbo marriage customs, Ịkụ Aka, Ime Ego, Igba Nkwu, customary lists, attire and practical planning.',
    },
    '/hausa-traditional-wedding': {
        title: 'Hausa Traditional Wedding: Kayan Lefe, Customs and Planning Guide',
        description: 'Learn about Hausa wedding customs, Kayan Zance, Kayan Lefe, Sadaki, Sa Lalle and planning with family.',
    },
    '/nigerian-wedding-engagement-list': {
        title: 'Nigerian Traditional Wedding Engagement List: Gifts and Family Preparations',
        description: 'Understand Nigerian wedding engagement lists, cultural examples, family responsibilities, budgeting and preparation steps.',
    },
    '/about': {
        title: 'About AriyaHQ',
        description: 'Learn about AriyaHQ and our tools for planning and managing events.',
    },
    '/ambassadors': {
        title: 'AriyaHQ Ambassadors',
        description: 'Learn about the AriyaHQ Ambassadors programme and how to get involved.',
    },
    '/contact': {
        title: 'Contact AriyaHQ',
        description: 'Contact the AriyaHQ team for help, questions or partnership enquiries.',
    },
    '/careers': {
        title: 'Careers at AriyaHQ',
        description: 'Explore career opportunities and ways to work with AriyaHQ.',
    },
    '/legal/privacy': {
        title: 'Privacy Policy',
        description: 'Read how AriyaHQ handles personal information and protects privacy.',
    },
    '/legal/terms': {
        title: 'Terms of Service',
        description: 'Read the terms that apply when using AriyaHQ services.',
    },
};

export function isIndexableRoute(pathname: string) {
    if (pathname === '/login' || pathname === '/admin/login') return false;
    if (pathname.startsWith('/admin/')) return false;
    if (pathname === '/legal/cookies' || pathname === '/waitlist') return false;
    if (
        !SHOW_CASE_STUDIES &&
        (pathname === '/resources/case-studies' ||
            /^\/resources\/case-studies\/[^/]+$/.test(pathname))
    ) {
        return false;
    }
    if (/^\/resources\/blog\/[^/]+$/.test(pathname)) return true;
    if (
        SHOW_CASE_STUDIES &&
        (pathname === '/resources/case-studies' ||
            /^\/resources\/case-studies\/[^/]+$/.test(pathname))
    ) {
        return true;
    }
    return Object.hasOwn(publicPages, pathname);
}
