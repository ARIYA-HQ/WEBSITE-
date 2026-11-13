import { EVENT_IMAGES } from '../config/eventImages';
import { REGISTRY_SERVICE_FEE_RATE, TICKET_SERVICE_FEE_RATE } from '../config/pricing';
import type { ResourceGuideContent } from '../components/marketing/ResourceGuide';

export const invitationCardsGuide: ResourceGuideContent = {
    path: '/wedding-invitation-cards-nigeria',
    eyebrow: 'Wedding invitations',
    title: 'Wedding Invitation Cards in Nigeria: Designs, Wording and Costs',
    intro: 'Compare printed and digital invitation options, prepare clear wording and share the right details with guests for your Nigerian wedding.',
    image: EVENT_IMAGES.pinkGeleCelebration,
    imageAlt: 'Guests celebrating together at a Nigerian wedding',
    cta: 'Create a wedding event',
    sections: [
        {
            id: 'types',
            title: 'Types of wedding invitation cards',
            paragraphs: ['Nigerian couples can choose from simple printed cards, luxury boxed invitations, traditional designs, minimalist layouts, photo invitations and digital invitations. The right format depends on your audience, budget, ceremony and how you plan to distribute updates.'],
            bullets: ['Printed cards for guests who prefer a physical invitation.', 'Boxed or premium designs for a more formal presentation.', 'Digital invitations for convenient sharing and event updates.', 'Separate designs or cards when ceremonies have different guest lists.'],
        },
        {
            id: 'details',
            title: 'What to include on the invitation',
            paragraphs: ['Make essential details easy to find and proofread every name, date and address before printing or sending. If a location is hard to find, include clear directions or a map link on a separate event page.'],
            bullets: ['Names of the couple and hosts, where appropriate.', 'Ceremony date, start time, venue name and full address.', 'Dress code, RSVP instructions and a contact for questions.', 'Which event each guest is invited to and any relevant access information.'],
        },
        {
            id: 'wording',
            title: 'Invitation wording and ceremony etiquette',
            paragraphs: ['Wording can be formal, warm or brief. Couples may acknowledge parents or other hosts, but there is no single wording format for every family. Confirm names, preferred titles and any cultural or religious language with the people involved.'],
            bullets: ['Use a clear invitation line and explain who is hosting.', 'Name the ceremony or celebration so guests understand the invitation.', 'Keep essential logistics separate from decorative wording.', 'For multiple events, specify the date and invitation details for each one.'],
        },
        {
            id: 'printing',
            title: 'Printing, quantities and delivery',
            paragraphs: ['Ask printers for a written quotation that states paper, finishes, quantity, proofing, production time and delivery charges. Order a small number of spares, and leave time to review a proof before approving a full print run.'],
            bullets: ['Confirm the final guest count and whether one card covers a household.', 'Request a digital proof and check all names and event details.', 'Ask about minimum quantities, revisions and reprint costs.', 'Plan distribution time for guests travelling from other locations.'],
        },
        {
            id: 'digital',
            title: 'Digital invitations, RSVP and updates',
            paragraphs: ['Digital invitations are easy to share through messaging apps, email and social channels. They can link guests to a wedding website, directions or an RSVP form. Use one current source for event details so changes do not leave guests with conflicting information.'],
            bullets: ['Test invitation links on a phone before sending.', 'Send invitations directly to the intended guests.', 'Provide a simple way to ask questions or update an RSVP.', 'Use printed invitations as well where they better suit your guests.'],
        },
        {
            id: 'planning',
            title: 'A practical invitation timeline',
            paragraphs: ['Start preparing invitation wording once the venue, date and ceremony details are confirmed. Send invitations early enough for guests to plan travel, and set an RSVP date that gives you time to finalise seating and catering.'],
            bullets: ['Confirm event details and guest groups.', 'Choose printed, digital or combined invitations.', 'Proofread and test before distribution.', 'Track replies and share changes promptly.'],
        },
    ],
    faqs: [
        { question: 'How many wedding invitation cards should I print?', answer: 'Estimate by households or invitation groups rather than simply printing one for every person. Confirm how many physical cards your guests need and allow a small number of spares.' },
        { question: 'When should I send wedding invitations?', answer: 'Send them early enough for guests to plan. Allow extra notice when travel, accommodation or several ceremonies are involved, and set a response deadline before final arrangements are due.' },
        { question: 'Can I send wedding invitations through WhatsApp?', answer: 'Yes. Many couples share digital invitations through WhatsApp, email or other channels. Check that recipients can open the invitation and see the essential details.' },
        { question: 'What is the difference between an invitation and an RSVP?', answer: 'An invitation tells someone they are invited and provides event information. An RSVP is their response about whether they expect to attend.' },
    ],
    related: [
        { label: 'Digital wedding invitations', href: '/digital-wedding-invitations' },
        { label: 'Wedding RSVP guide', href: '/wedding-rsvp-guest-management' },
        { label: 'Create a wedding website', href: '/wedding-website' },
    ],
};

export const giftRegistryGuide: ResourceGuideContent = {
    path: '/wedding-gift-registry-nigeria',
    eyebrow: 'Wedding gifts',
    title: 'Wedding Gift Registry in Nigeria: Create a Wishlist Guests Can Use',
    intro: 'Learn how couples can organise practical gift preferences, communicate them graciously and make gift-giving easier for family and friends.',
    image: EVENT_IMAGES.coupleReception,
    imageAlt: 'Nigerian couple celebrating at their wedding reception',
    cta: 'Start planning',
    pricingSummary: {
        title: 'What Ariya charges for registry gifts',
        description: 'Setting up an event and registry is free. These fees apply only when payments are collected through Ariya.',
        items: [
            {
                label: 'Cash fund contributions',
                value: `${REGISTRY_SERVICE_FEE_RATE * 100}%`,
                detail: 'Deducted from the couple’s payout and includes payment processing. Guests pay the gift amount shown, with no extra Ariya processing fee.',
            },
            {
                label: 'Physical registry items',
                value: 'No Ariya fee',
                detail: 'Ariya does not add a platform fee to physical item orders.',
            },
        ],
    },
    sections: [
        {
            id: 'registry',
            title: 'What is a wedding gift registry?',
            paragraphs: ['A wedding gift registry is a list of gifts or shared goals a couple would welcome. It gives guests ideas while allowing the couple to explain preferences, approximate options and delivery considerations. A registry is guidance, not a requirement for guests.'],
        },
        {
            id: 'benefits',
            title: 'Why couples may choose a registry',
            paragraphs: ['A well-organised gift list can help couples communicate what they need and reduce guesswork. It can also help guests choose gifts across different budgets or coordinate a group contribution when that is supported and clearly explained.'],
            bullets: ['Suggest practical items for a home or shared life.', 'Help guests avoid accidental duplicates when the list can track selections.', 'Include options at varied price points.', 'Offer a considerate way for guests to choose something meaningful.'],
        },
        {
            id: 'create',
            title: 'How to create a wedding gift registry',
            paragraphs: ['Discuss priorities together before adding items. Check what you already own, decide which categories matter and describe each item clearly. If you use an online registry or external retailer, review its availability, delivery, returns and payment terms yourself.'],
            bullets: ['Agree on needs, preferences and what you do not need.', 'Include useful home, experience or contribution ideas.', 'Choose items at different price points.', 'Add descriptions, sizes, colours and delivery details.', 'Review availability and remove items that are no longer relevant.'],
        },
        {
            id: 'cash',
            title: 'Cash gifts and group contributions',
            paragraphs: ['Some couples prefer contributions towards a shared goal. Explain the purpose and how guests can contribute without pressure. Use a payment or registry service only after checking fees, settlement timing, refund terms and how personal information is handled.'],
        },
        {
            id: 'share',
            title: 'How to share the registry politely',
            paragraphs: ['Share registry details as an optional convenience, not an expectation. A wedding website or invitation details page can provide a discreet link alongside the event information. Make it clear that guests are welcome whether or not they give a gift.'],
            bullets: ['Ask a trusted family member or wedding party member to share details when appropriate.', 'Avoid placing gift requests ahead of the invitation itself.', 'Keep the wording warm, brief and optional.', 'Thank guests for their presence and generosity.'],
        },
        {
            id: 'manage',
            title: 'After the wedding',
            paragraphs: ['Keep a record of gifts and contributions so you can acknowledge them thoughtfully. Follow the registry or seller’s instructions for delivery issues, exchanges or returns, and protect any personal or payment information you received.'],
        },
    ],
    faqs: [
        { question: 'Is a wedding gift registry compulsory?', answer: 'No. A registry is optional guidance for guests. Couples should communicate that attendance and well wishes are valued regardless of a gift.' },
        { question: 'Can a Nigerian wedding registry include cash contributions?', answer: 'Couples may choose to invite contributions towards a shared goal. Explain the purpose clearly and check the service’s fees, payment and privacy terms.' },
        { question: 'How do we avoid duplicate gifts?', answer: 'If your chosen registry supports reservation or purchase tracking, make sure it works as expected. Otherwise, keep the list current and consider listing alternatives.' },
        { question: 'Can we use one registry for a traditional and white wedding?', answer: 'Yes, if that suits your plans. You can share one list for both celebrations or separate information for different guest groups.' },
    ],
    related: [
        { label: 'Wedding wishlist guide', href: '/wedding-wishlist' },
        { label: 'Create a wedding website', href: '/wedding-website' },
        { label: 'Wedding invitations', href: '/wedding-invitation-cards-nigeria' },
    ],
};

export const wishlistGuide: ResourceGuideContent = {
    path: '/wedding-wishlist',
    eyebrow: 'Wedding wishlist',
    title: 'Wedding Wishlist in Nigeria: Create and Share Your Gift List',
    intro: 'Build a thoughtful wedding wishlist with useful ideas, clear details and options that make it easier for guests to choose a gift.',
    image: EVENT_IMAGES.coupleReceptionGuests,
    imageAlt: 'Nigerian couple celebrating with family and friends',
    cta: 'Plan your wedding',
    pricingSummary: {
        title: 'Ariya wishlist and cash gift fees',
        description: 'Creating an event and wishlist is free. A service fee applies only to cash contributions collected through Ariya.',
        items: [
            {
                label: 'Cash fund contributions',
                value: `${REGISTRY_SERVICE_FEE_RATE * 100}%`,
                detail: 'Deducted from the couple’s payout and includes payment processing. Guests pay the gift amount shown, with no extra Ariya processing fee.',
            },
            {
                label: 'Physical registry items',
                value: 'No Ariya fee',
                detail: 'Ariya does not add a platform fee to physical item orders.',
            },
        ],
    },
    sections: [
        {
            id: 'wishlist',
            title: 'What is a wedding wishlist?',
            paragraphs: ['A wedding wishlist is a collection of gift ideas a couple would appreciate. It may include home essentials, experiences, contributions or items from selected shops. It helps guests understand preferences while leaving them free to choose their own gift.'],
        },
        {
            id: 'difference',
            title: 'Wishlist or gift registry: what is the difference?',
            paragraphs: ['A wishlist is usually a list of ideas and preferences. A gift registry may connect those ideas to retailers, purchase or reservation status, delivery information or contributions. The exact features vary by service, so confirm them before sharing a link.'],
        },
        {
            id: 'build',
            title: 'How to build a useful wishlist',
            paragraphs: ['Start with a conversation about what you need, what you already own and what fits your plans. Clear descriptions help guests choose confidently and reduce unsuitable or duplicate purchases.'],
            bullets: ['Add items across practical categories such as kitchen, bedroom and living space.', 'Include a range of price points and optional group-gift ideas.', 'State sizes, colours, models or preferred alternatives where useful.', 'Check stock and delivery details if linking to a retailer.', 'Update the list as items are selected or your needs change.'],
        },
        {
            id: 'ideas',
            title: 'Wedding wishlist ideas for Nigerian couples',
            paragraphs: ['Choose ideas that fit your home, lifestyle and future plans. Couples setting up a home may value durable essentials, while others may prefer experiences or a contribution towards a shared goal.'],
            bullets: ['Cookware, kitchen appliances and dining essentials.', 'Bedding, towels and home organisation items.', 'Furniture, lighting or household equipment.', 'Honeymoon, home project or experience contributions.', 'A charitable contribution, if that reflects your shared values.'],
        },
        {
            id: 'share',
            title: 'Share the list with guests considerately',
            paragraphs: ['A wedding website can provide a convenient place for event information and an optional wishlist link, if the service you use supports it. Keep gift information secondary to the invitation and avoid making guests feel obligated.'],
            bullets: ['Use a short, appreciative note and say the list is optional.', 'Share the link through a channel your guests can access.', 'Keep event information and gift details clear and separate.', 'Offer a contact for questions or delivery coordination.'],
        },
        {
            id: 'after',
            title: 'Keep track and say thank you',
            paragraphs: ['If your service provides selection tracking, check how it works and whether guests can see who chose an item. Keep a private record of gifts received and send personal thanks when you can.'],
        },
    ],
    faqs: [
        { question: 'How many items should a wedding wishlist have?', answer: 'Include enough varied options for the number of guests you expect, across several price points. Keep the list manageable and update it as items are selected.' },
        { question: 'Can a wishlist be added to a digital invitation?', answer: 'You can include a link on a wedding website or invitation details page if that suits your guests. Keep it optional and check that the link works on mobile.' },
        { question: 'What if we receive a gift that is not on our wishlist?', answer: 'Thank the guest sincerely. A wishlist is a set of suggestions, not a requirement, and the gesture matters.' },
        { question: 'Should we list cash gifts?', answer: 'That is a personal choice. If you do, explain the purpose in a warm, optional way and use a payment channel whose terms you understand.' },
    ],
    related: [
        { label: 'Browse the Ariya wishlist catalogue', href: '/product/wishlist' },
        { label: 'Wedding gift registry guide', href: '/wedding-gift-registry-nigeria' },
        { label: 'Wedding website guide', href: '/wedding-website' },
        { label: 'Wedding RSVP guide', href: '/wedding-rsvp-guest-management' },
    ],
};

export const ticketingGuide: ResourceGuideContent = {
    path: '/event-ticketing-nigeria',
    eyebrow: 'Event ticketing',
    title: 'Event Ticketing in Nigeria: Sell Tickets Online and Manage Guests',
    intro: 'Understand ticket categories, online registration, payment checks and event-day entry so you can plan a ticketing process that fits your event.',
    image: EVENT_IMAGES.eventPlanner,
    imageAlt: 'Nigerian event organiser preparing event logistics',
    cta: 'Explore AriyaHQ',
    pricingSummary: {
        title: 'Ariya ticketing fees',
        description: 'Creating an event and setting up tickets is free. Fees apply when paid tickets are sold.',
        items: [
            {
                label: 'Ariya ticket service fee',
                value: `${TICKET_SERVICE_FEE_RATE * 100}%`,
                detail: 'The organiser can pass this fee to the buyer or have it deducted from proceeds. The chosen fee presentation is shown during checkout.',
            },
            {
                label: 'Paystack card processing',
                value: 'Separate fee',
                detail: 'Buyers cover Paystack’s card fee on ticket purchases. The amount is calculated at checkout.',
            },
        ],
    },
    sections: [
        {
            id: 'ticketing',
            title: 'What is event ticketing?',
            paragraphs: ['Event ticketing is the process of offering, issuing and validating admission for an event. Depending on the event, tickets may be free, paid, invitation-only or available in different categories.'],
        },
        {
            id: 'process',
            title: 'How online ticketing generally works',
            paragraphs: ['An organiser sets up event details and ticket types, shares a registration or sales page, and attendees complete the required steps. The platform may issue a confirmation or digital ticket; features and payment flows differ between providers.'],
            bullets: ['Define event capacity, dates, venue and admission rules.', 'Set ticket categories, quantities, prices and sales periods.', 'Explain fees, payment methods, refunds and transfer rules.', 'Test confirmations and attendee instructions before launch.', 'Prepare a check-in process and a backup for connectivity or device issues.'],
        },
        {
            id: 'types',
            title: 'Ticket types and pricing',
            paragraphs: ['Categories may include general admission, early-bird, VIP, group, student or complimentary tickets. Use only categories that you can explain and fulfil. Estimate event costs and payment-provider or platform charges before publishing a price; avoid assuming a universal market fee.'],
            bullets: ['State exactly what each ticket includes.', 'Set a clear quantity and sales deadline.', 'Explain whether a ticket is transferable or refundable.', 'Keep complimentary registration separate from paid admission.'],
        },
        {
            id: 'platform',
            title: 'Choosing a ticketing platform',
            paragraphs: ['Compare platforms on the functions your event needs and read their current terms. Check payment settlement, transaction fees, attendee exports, privacy practices, customer support and how refunds or chargebacks are handled.'],
            bullets: ['Mobile-friendly purchase and confirmation flow.', 'Clear fees and settlement timelines.', 'Useful attendance reports and attendee communication.', 'A reliable check-in method and support on event day.', 'Data access, retention and privacy controls.'],
        },
        {
            id: 'checkin',
            title: 'Digital tickets and event-day check-in',
            paragraphs: ['Digital tickets or QR codes can speed up entry when the validation system is reliable and staff are prepared. Test scanning before doors open, limit access to attendee data and have a manual lookup or contingency process.'],
            bullets: ['Train staff and test devices, scanners and internet access.', 'Define how duplicate, invalid or transferred tickets are handled.', 'Provide a private manual check-in route if technology fails.', 'Do not publish attendee lists or ticket codes openly.'],
        },
        {
            id: 'registration',
            title: 'Ticket sales versus event registration',
            paragraphs: ['Ticketing is primarily about admission and, where applicable, payment. Registration can also be used for free events or to collect participant details without selling access. Choose the simplest flow that matches your event.'],
        },
    ],
    faqs: [
        { question: 'How do I sell event tickets online in Nigeria?', answer: 'Choose a platform that supports your event, set clear ticket categories and terms, test the payment and confirmation flow, then share the event page with attendees.' },
        { question: 'Do all event tickets need to be paid?', answer: 'No. Events may use free registration, paid tickets, invitation-only admission or a combination of categories.' },
        { question: 'Are QR-code tickets reliable?', answer: 'They can help with check-in when ticket validation is configured and tested. Prepare staff, devices and an offline or manual backup.' },
        { question: 'What fees should I compare?', answer: 'Review platform and payment processing fees, settlement timing, refund or chargeback costs and any charges for check-in or support.' },
    ],
    related: [
        { label: 'Event registration guide', href: '/event-registration-nigeria' },
        { label: 'Event planning tools', href: '/product/planning' },
        { label: 'Explore the event marketplace', href: '/product/marketplace' },
    ],
};

export const registrationGuide: ResourceGuideContent = {
    path: '/event-registration-nigeria',
    eyebrow: 'Event registration',
    title: 'Event Registration in Nigeria: Manage Attendees Online',
    intro: 'Learn how to collect attendee details, manage sign-ups, communicate event information and prepare a clear check-in process.',
    image: EVENT_IMAGES.eventPlanner,
    imageAlt: 'Nigerian event organiser reviewing attendee and event details',
    cta: 'Explore AriyaHQ',
    sections: [
        {
            id: 'registration',
            title: 'What is event registration?',
            paragraphs: ['Event registration is the process of recording people who plan to attend. It can be used for free events, paid events, workshops, conferences, seminars, community programmes and other gatherings. Registration is not the same as confirmed attendance unless the event’s process makes that distinction clear.'],
        },
        {
            id: 'why',
            title: 'Why organise event registration?',
            paragraphs: ['A consistent registration process helps organisers estimate attendance, prepare capacity and materials, communicate changes and coordinate entry. It can also reduce manual data handling when information is kept in a suitable central system.'],
            bullets: ['Estimate attendee numbers for venue and logistics.', 'Collect only information needed to run the event.', 'Send confirmations and practical event updates.', 'Prepare attendance reports and check-in lists.', 'Plan follow-up communication where attendees have consented.'],
        },
        {
            id: 'form',
            title: 'Create a useful registration form',
            paragraphs: ['Keep forms short and explain why each field is needed. Ask for the minimum information required for attendance and logistics. If collecting sensitive details, provide appropriate privacy information and restrict access to authorised team members.'],
            bullets: ['Name and contact details required for the event.', 'Ticket or session choice where relevant.', 'Accessibility or dietary requirements only when needed.', 'Clear privacy notice and consent for optional communications.', 'Confirmation message with next steps and support contact.'],
        },
        {
            id: 'manage',
            title: 'Manage sign-ups and attendee communication',
            paragraphs: ['Use one current attendee list, define who can edit it and update registrations consistently. Send useful confirmations and reminders, and provide a way to correct a registration or ask a question.'],
            bullets: ['Track sign-up status, capacity and waitlists.', 'Send confirmations and timely reminders.', 'Share verified time, location, access and programme details.', 'Record cancellations and manage changes consistently.', 'Avoid exposing attendee contact details to other participants.'],
        },
        {
            id: 'checkin',
            title: 'Prepare check-in for event day',
            paragraphs: ['Decide how staff will verify registrations and help attendees who cannot find a confirmation. Test devices and network access, brief staff on exception handling and keep a controlled backup list if appropriate.'],
            bullets: ['Prepare an up-to-date attendee list or validation tool.', 'Assign check-in roles and escalation contacts.', 'Test the entry flow before attendees arrive.', 'Plan for duplicate entries, walk-ins and connectivity issues.', 'Keep printed or exported attendee data secure and dispose of it safely.'],
        },
        {
            id: 'ticketing',
            title: 'Registration compared with ticketing',
            paragraphs: ['Registration records participation and can be free. Ticketing manages admission entitlements and may collect payment. Some events use both, so make the difference clear to attendees and provide accurate terms for any paid ticket.'],
        },
    ],
    faqs: [
        { question: 'What information should an event registration form collect?', answer: 'Collect only the details needed to manage the event, such as a name and contact method. Explain any additional fields and how information will be used.' },
        { question: 'Can event registration be free?', answer: 'Yes. Registration can help estimate attendance and coordinate participants even when admission is free.' },
        { question: 'How do I confirm event registration?', answer: 'Send a confirmation with the event name, date, location or access link, and contact details. Explain whether it confirms a place or only records an expression of interest.' },
        { question: 'How is event registration different from RSVP?', answer: 'An RSVP usually records a response to an invitation. Registration is commonly used to collect sign-ups and participant details for an event.' },
    ],
    related: [
        { label: 'Event ticketing guide', href: '/event-ticketing-nigeria' },
        { label: 'Event planning tools', href: '/product/planning' },
        { label: 'AriyaHQ help center', href: '/resources/help-center' },
    ],
};
