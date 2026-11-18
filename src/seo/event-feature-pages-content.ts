import { EVENT_IMAGES } from '../config/eventImages';

type FeatureCard = { title: string; description: string };
type FeatureStep = { title: string; description: string };

type FeatureSection =
    | { id: string; title: string; intro?: string; type: 'cards'; items: FeatureCard[] }
    | { id: string; title: string; intro?: string; type: 'steps'; items: FeatureStep[] }
    | { id: string; title: string; intro?: string; type: 'bullets'; items: string[] }
    | {
        id: string;
        title: string;
        intro?: string;
        type: 'comparison';
        leftTitle: string;
        rightTitle: string;
        items: { topic: string; left: string; right: string }[];
    };

type EventFeaturePageContent = {
    path: string;
    eyebrow: string;
    title: string;
    intro: string;
    image: string;
    imageAlt: string;
    highlights: string[];
    sections: FeatureSection[];
    faqs: { question: string; answer: string }[];
    related: { label: string; href: string }[];
    ctaLabel: string;
    closingTitle: string;
    closingDescription: string;
};

export const eventFeaturePages: Record<string, EventFeaturePageContent> = {
    '/bulk-sms-for-events': {
        path: '/bulk-sms-for-events',
        eyebrow: 'Bulk SMS for events',
        title: 'Bulk SMS for Events: Reach Your Guests and Keep Everyone Informed',
        intro: 'Communicate event invitations, reminders and important updates to your audience without sending each message individually. Manage guest information and event communication together with AriyaHQ.',
        image: EVENT_IMAGES.menCelebrating,
        imageAlt: 'Guests celebrating together at an event',
        highlights: [
            'Reach multiple event guests with SMS',
            'Share concise reminders and timely announcements',
            'Coordinate messages with registration and guest management',
        ],
        ctaLabel: 'Get started with AriyaHQ',
        closingTitle: 'Make event communication easier to manage.',
        closingDescription: 'Organise guest information, send bulk SMS and keep attendees informed as your event approaches. Use SMS responsibly and contact recipients only when you have the appropriate permission.',
        sections: [
            {
                id: 'sms-use-cases',
                title: 'Keep guests informed at every stage',
                intro: 'Bulk SMS can help you communicate the practical information guests need before and during an event.',
                type: 'cards',
                items: [
                    { title: 'Invitations', description: 'Introduce your event and share its date, venue, RSVP details and where guests can find more information.' },
                    { title: 'Reminders', description: 'Remind guests about the event date, registration deadlines, arrival details and other preparations.' },
                    { title: 'Announcements', description: 'Communicate important changes to the venue, programme, schedule or event arrangements.' },
                    { title: 'Registration updates', description: 'Share registration instructions and remind participants about steps they still need to complete.' },
                    { title: 'Event-day information', description: 'Send concise arrival instructions and relevant programme updates when plans require them.' },
                ],
            },
            {
                id: 'sms-benefits',
                title: 'Manage event SMS communication with AriyaHQ',
                intro: 'Keep communication connected to the rest of your event planning instead of handling every guest update separately.',
                type: 'bullets',
                items: [
                    'Keep event guest information organised for communication planning.',
                    'Use bulk SMS to reach multiple recipients with an event message.',
                    'Share announcements and reminders with your intended event audience.',
                    'Use SMS alongside event registration and guest management activities.',
                    'Coordinate SMS with bulk email when guests need both quick updates and longer details.',
                ],
            },
            {
                id: 'sms-process',
                title: 'How to use bulk SMS for your next event',
                type: 'steps',
                items: [
                    { title: 'Set up your event', description: 'Organise the event name, date, venue and other details your guests need.' },
                    { title: 'Prepare guest information', description: 'Check recipient details for accuracy and make sure you have permission to contact them.' },
                    { title: 'Write a clear message', description: 'Keep the SMS concise, include useful event information and point to a relevant page for more detail.' },
                    { title: 'Send through AriyaHQ', description: 'Use AriyaHQ’s bulk SMS capability to communicate with your intended event audience.' },
                    { title: 'Share relevant updates', description: 'Send reminders and announcements when guests need them, avoiding unnecessary messages.' },
                ],
            },
            {
                id: 'sms-audiences',
                title: 'Who can benefit from bulk SMS for events?',
                type: 'cards',
                items: [
                    { title: 'Wedding planners', description: 'Share invitations, RSVP instructions, venue details and timely reminders with guests.' },
                    { title: 'Corporate and conference organisers', description: 'Communicate registration information, schedules, directions and event updates.' },
                    { title: 'Churches and religious organisations', description: 'Share details about conventions, conferences, special services and other gatherings.' },
                    { title: 'Event management agencies', description: 'Coordinate guest communication for different client events and projects.' },
                    { title: 'Concert and festival organisers', description: 'Send announcements and practical attendance information to event audiences.' },
                ],
            },
        ],
        faqs: [
            { question: 'What is bulk SMS for events?', answer: 'Bulk SMS for events means sending a text message to multiple event guests or participants. Organisers use it for invitations, reminders, announcements, registration information and event updates.' },
            { question: 'How can I send bulk SMS to event guests in Nigeria?', answer: 'Use a platform with bulk SMS capabilities, organise accurate recipient information, prepare a clear message and follow the platform’s supported sending process. Make sure you have the appropriate permission to contact recipients.' },
            { question: 'Can I use bulk SMS to send wedding invitations?', answer: 'Yes. Wedding organisers can use SMS to announce event details, share invitation information, communicate RSVP instructions and remind guests about the celebration.' },
            { question: 'Can I send event reminders through SMS?', answer: 'Yes. SMS can be used for concise reminders about event dates, registration deadlines, venue information and important updates.' },
            { question: 'Is bulk SMS useful for corporate events?', answer: 'It can help corporate event organisers communicate concise event information to employees, conference participants, customers, partners and other invited guests.' },
            { question: 'Can I use bulk SMS and bulk email together?', answer: 'Yes. SMS is useful for concise, time-sensitive updates, while email can provide longer explanations and more detailed event information.' },
            { question: 'Does AriyaHQ support bulk SMS?', answer: 'Yes. AriyaHQ provides bulk SMS capabilities for event communication alongside guest and event management features.' },
        ],
        related: [
            { label: 'Bulk SMS and email pricing', href: '/bulk-sms-email-pricing' },
            { label: 'Bulk email for events', href: '/bulk-email-for-events' },
            { label: 'Event registration software', href: '/event-registration' },
            { label: 'QR code guest passes', href: '/qr-code-guest-passes' },
            { label: 'Event registration guide', href: '/event-registration-nigeria' },
        ],
    },
    '/bulk-email-for-events': {
        path: '/bulk-email-for-events',
        eyebrow: 'Bulk email for events',
        title: 'Bulk Email for Events: Reach Your Guests with Important Event Updates',
        intro: 'Share event invitations, registration information, reminders and programme updates with your audience. AriyaHQ helps you manage event communication alongside guest and registration information.',
        image: EVENT_IMAGES.womenCelebrating,
        imageAlt: 'Guests celebrating at an event',
        highlights: [
            'Share detailed event information by email',
            'Communicate invitations, reminders and changes',
            'Coordinate email with SMS and guest management',
        ],
        ctaLabel: 'Get started with AriyaHQ',
        closingTitle: 'Organise your event communication in one place.',
        closingDescription: 'Use AriyaHQ to communicate with event guests, share important details and coordinate email with invitations, registration and other event activities.',
        sections: [
            {
                id: 'email-use-cases',
                title: 'What can you use bulk email for?',
                intro: 'Email gives you room to explain event details and share useful information with your intended audience.',
                type: 'cards',
                items: [
                    { title: 'Event invitations', description: 'Share the event date, venue, purpose and participation details with prospective attendees.' },
                    { title: 'Registration information', description: 'Send registration links, instructions, deadlines and information guests need to complete the process.' },
                    { title: 'Event reminders', description: 'Remind your audience about an upcoming event and share practical details as the date approaches.' },
                    { title: 'Venue and programme updates', description: 'Let guests know about revised schedules, directions, venue information or event instructions.' },
                    { title: 'Post-event follow-up', description: 'Send appreciation messages and relevant follow-up information after your event.' },
                ],
            },
            {
                id: 'email-benefits',
                title: 'How AriyaHQ supports event email',
                type: 'bullets',
                items: [
                    'Reach multiple event recipients rather than sending each email individually.',
                    'Share event information and direct recipients to invitations or registration pages.',
                    'Keep guest communication organised alongside other event activities.',
                    'Use email for details and pair it with SMS for concise, time-sensitive notices.',
                    'Plan communication for before, during and after your event.',
                ],
            },
            {
                id: 'email-process',
                title: 'How to send bulk emails for your event',
                type: 'steps',
                items: [
                    { title: 'Set up your event', description: 'Add the relevant event information, including its name, date, venue and other key details.' },
                    { title: 'Prepare recipient information', description: 'Organise accurate email addresses and make sure you have permission to contact recipients.' },
                    { title: 'Write your event message', description: 'Include the details your audience needs, such as the event date, venue, registration information or instructions.' },
                    { title: 'Send through AriyaHQ', description: 'Use AriyaHQ’s bulk email functionality to communicate with your intended event audience.' },
                    { title: 'Coordinate other communications', description: 'Use invitations, RSVP management and bulk SMS as appropriate for your event.' },
                ],
            },
            {
                id: 'email-audiences',
                title: 'Who can benefit from bulk email for events?',
                type: 'cards',
                items: [
                    { title: 'Wedding planners', description: 'Share invitations, venue information, programme details and other updates with guests.' },
                    { title: 'Corporate organisers', description: 'Communicate with employees, clients, partners, sponsors and invited guests.' },
                    { title: 'Conference organisers', description: 'Send registration instructions, programme information and announcements to attendees.' },
                    { title: 'Workshop and training organisers', description: 'Share schedules, venue information, registration details and participant instructions.' },
                    { title: 'Churches and event agencies', description: 'Manage communications for gatherings, programmes and different client events.' },
                ],
            },
            {
                id: 'email-vs-sms',
                title: 'Bulk email vs bulk SMS: which should you use?',
                intro: 'The channels serve different needs. You can use both when your guests need detailed information as well as short, timely reminders.',
                type: 'comparison',
                leftTitle: 'Bulk email',
                rightTitle: 'Bulk SMS',
                items: [
                    { topic: 'Message length', left: 'Better suited to detailed explanations and event information.', right: 'Useful for short, concise updates.' },
                    { topic: 'Common uses', left: 'Invitations, registration instructions and follow-up.', right: 'Reminders and time-sensitive announcements.' },
                    { topic: 'Using both', left: 'Provides the fuller context and relevant links.', right: 'Can point guests to an email or event page for more detail.' },
                ],
            },
        ],
        faqs: [
            { question: 'What is bulk email for events?', answer: 'Bulk email for events is sending an email message to multiple recipients. Organisers use it to share invitations, registration information, reminders, programme updates and other event communications.' },
            { question: 'Can I use AriyaHQ to send bulk emails to event guests?', answer: 'Yes. AriyaHQ provides bulk email functionality that organisers can use to communicate event information with their audiences.' },
            { question: 'Can I send event invitations through bulk email?', answer: 'Yes. You can use bulk email to share invitations and relevant information about your event with your intended audience.' },
            { question: 'What is the difference between bulk email and bulk SMS?', answer: 'Email is generally better for detailed communication, while SMS is useful for short, time-sensitive messages. Organisers can use both when appropriate.' },
            { question: 'Can I use bulk email for a conference or corporate event?', answer: 'Yes. Bulk email can support communication for conferences, corporate gatherings, workshops, weddings, religious events and other occasions.' },
            { question: 'Is AriyaHQ only for wedding invitations?', answer: 'No. AriyaHQ supports event organisers across different categories, including weddings, corporate gatherings, conferences and other social events.' },
        ],
        related: [
            { label: 'Bulk SMS and email pricing', href: '/bulk-sms-email-pricing' },
            { label: 'Bulk SMS for events', href: '/bulk-sms-for-events' },
            { label: 'Event registration software', href: '/event-registration' },
            { label: 'Event check-in preparation', href: '/event-check-in' },
            { label: 'QR code guest passes', href: '/qr-code-guest-passes' },
        ],
    },
    '/qr-code-guest-passes': {
        path: '/qr-code-guest-passes',
        eyebrow: 'QR code guest passes',
        title: 'QR Code Guest Passes: Create Unique Digital Passes for Your Event',
        intro: 'Give each guest a unique digital QR code pass and organise guest information with AriyaHQ. Use guest passes as part of your event access and check-in arrangements.',
        image: EVENT_IMAGES.pinkGeleCelebration,
        imageAlt: 'Guests celebrating together at a Nigerian event',
        highlights: [
            'Provide unique passes for individual guests',
            'Reduce dependence on printed guest passes',
            'Connect guest passes with registration and guest management',
        ],
        ctaLabel: 'Create your event',
        closingTitle: 'Make guest access easier to organise.',
        closingDescription: 'Bring invitations, registrations, guest information and unique QR code guest passes together as you prepare for your event.',
        sections: [
            {
                id: 'pass-benefits',
                title: 'Why use QR code guest passes?',
                intro: 'Digital passes give organisers and guests a shared reference for event access arrangements.',
                type: 'cards',
                items: [
                    { title: 'Unique passes for each guest', description: 'Issue individual QR code passes rather than relying only on a generic invitation.' },
                    { title: 'A reference for identification', description: 'Give your event team a digital reference to use as part of the guest identification and check-in process.' },
                    { title: 'Less dependence on paper', description: 'Offer a digital option so you do not need to print and distribute a physical pass for every attendee.' },
                    { title: 'Better guest organisation', description: 'Prepare guest information, invitations and passes together before attendees arrive.' },
                    { title: 'A considered guest experience', description: 'Provide clear digital event access information for conferences, celebrations and other gatherings.' },
                ],
            },
            {
                id: 'pass-process',
                title: 'How QR code guest passes work',
                type: 'steps',
                items: [
                    { title: 'Set up your event', description: 'Organise your event information and the access arrangements relevant to your guests.' },
                    { title: 'Organise your guests', description: 'Prepare the guest or attendee information for people invited or registered for the event.' },
                    { title: 'Issue unique passes', description: 'Provide guests with individual QR code passes through the available AriyaHQ guest pass process.' },
                    { title: 'Guests present their passes', description: 'Tell guests how to access and present their digital pass when they arrive.' },
                    { title: 'Manage event entry', description: 'Use the passes as part of the identification and check-in arrangements established for your event.' },
                ],
            },
            {
                id: 'pass-audiences',
                title: 'Who needs QR code guest passes?',
                type: 'cards',
                items: [
                    { title: 'Weddings and ceremonies', description: 'Organise invited guests and prepare for arrivals at weddings, engagements and private celebrations.' },
                    { title: 'Corporate events', description: 'Prepare passes for product launches, networking events, awards and company gatherings.' },
                    { title: 'Conferences and seminars', description: 'Organise attendee passes for conferences, workshops and professional gatherings.' },
                    { title: 'Concerts and entertainment', description: 'Prepare digital passes for invited attendees at shows and other large gatherings.' },
                    { title: 'Churches and event agencies', description: 'Manage guest access for religious programmes and events delivered for different clients.' },
                ],
            },
            {
                id: 'passes-vs-paper',
                title: 'QR code guest passes vs paper invitations',
                intro: 'Digital passes can complement printed invitations. Choose the combination that suits your guests and your event’s access arrangements.',
                type: 'comparison',
                leftTitle: 'Paper invitations',
                rightTitle: 'QR code guest passes',
                items: [
                    { topic: 'Distribution', left: 'Must be printed and physically delivered.', right: 'Can be provided digitally, depending on the event arrangements.' },
                    { topic: 'Guest reference', left: 'May require staff to look up names manually.', right: 'Provides a digital pass that can be used as a guest reference.' },
                    { topic: 'Event preparation', left: 'Guest lists may be managed separately.', right: 'Can be organised alongside guest and registration information.' },
                ],
            },
            {
                id: 'pass-connected-tools',
                title: 'Connect guest passes with your event tools',
                intro: 'A guest pass is one part of organising an event. AriyaHQ also provides tools to support invitations, registration and guest communication.',
                type: 'bullets',
                items: [
                    'Create and share digital event invitations.',
                    'Organise RSVP responses and event guest information.',
                    'Manage event registration alongside unique QR guest passes.',
                    'Communicate updates through bulk SMS and bulk email.',
                    'Plan how guests will present their passes and how your team will manage entry.',
                ],
            },
        ],
        faqs: [
            { question: 'What is a QR code guest pass?', answer: 'A QR code guest pass is a digital event pass containing a QR code associated with a guest or event registration. It can be presented as part of an event’s guest identification and entry process.' },
            { question: 'Can I create unique QR codes for every guest?', answer: 'Yes. AriyaHQ supports unique QR code guest passes so organisers can provide individual passes rather than relying only on a general invitation.' },
            { question: 'Can QR code guest passes be used for weddings?', answer: 'Yes. They can help wedding organisers manage invitations and prepare for guest arrivals at weddings, traditional ceremonies, engagements and other celebrations.' },
            { question: 'Can QR code passes be used for conferences?', answer: 'Yes. They can be used to organise guest and attendee passes for conferences, seminars, workshops and corporate events.' },
            { question: 'Do guests need a printed QR code pass?', answer: 'Digital passes can be presented electronically, depending on the arrangements for your event and the supported guest pass process.' },
            { question: 'Are QR code guest passes the same as event tickets?', answer: 'Not necessarily. A guest pass can identify an invited or registered attendee, while a ticket may also represent a paid entitlement to attend. They can serve different purposes.' },
            { question: 'Can I use QR code guest passes with event registration?', answer: 'Yes. AriyaHQ provides event registration, guest management and unique QR code guest passes to support different stages of preparing for event access.' },
        ],
        related: [
            { label: 'QR code guest pass pricing', href: '/qr-code-guest-pass-pricing' },
            { label: 'Event registration software', href: '/event-registration' },
            { label: 'Event check-in preparation', href: '/event-check-in' },
            { label: 'Event registration guide', href: '/event-registration-nigeria' },
            { label: 'Bulk SMS for events', href: '/bulk-sms-for-events' },
        ],
    },
    '/event-registration': {
        path: '/event-registration',
        eyebrow: 'Event registration',
        title: 'Event Registration Software: Manage Event Registrations with AriyaHQ',
        intro: 'Collect and organise attendee information, manage RSVPs and prepare guests for event access. AriyaHQ connects event registration with guest management and event communication.',
        image: EVENT_IMAGES.eventPlanner,
        imageAlt: 'Event organiser reviewing event and attendee details',
        highlights: [
            'Organise attendee and guest information',
            'Manage RSVPs as part of the registration process',
            'Prepare guest passes and event communications',
        ],
        ctaLabel: 'Start organising your event',
        closingTitle: 'Make event registration easier to manage.',
        closingDescription: 'Bring attendee information, guest responses, event communication and access preparation closer together with AriyaHQ.',
        sections: [
            {
                id: 'registration-benefits',
                title: 'Why use event registration software?',
                intro: 'A digital process can help you organise attendee information and plan what happens before guests arrive.',
                type: 'cards',
                items: [
                    { title: 'Organise attendee information', description: 'Keep relevant guest and attendee details together as people register for your event.' },
                    { title: 'Manage RSVPs', description: 'Track responses from invited guests when attendance confirmation matters to your planning.' },
                    { title: 'Simplify guest management', description: 'Connect registration details with the guest information you need to prepare for the event.' },
                    { title: 'Prepare for event access', description: 'Use unique QR code guest passes as part of your guest access arrangements.' },
                    { title: 'Keep attendees informed', description: 'Share registration information, reminders and updates through bulk SMS and email.' },
                ],
            },
            {
                id: 'registration-use-cases',
                title: 'What can you use AriyaHQ event registration for?',
                type: 'cards',
                items: [
                    { title: 'Conferences and seminars', description: 'Organise attendee information for professional gatherings and business events.' },
                    { title: 'Weddings and celebrations', description: 'Manage guest information and RSVP responses for weddings and private events.' },
                    { title: 'Corporate events', description: 'Coordinate registrations for product launches, networking events and company gatherings.' },
                    { title: 'Workshops and training', description: 'Organise participant information for workshops, masterclasses and training programmes.' },
                    { title: 'Religious and social events', description: 'Manage attendee information for conventions, special programmes, parties and celebrations.' },
                ],
            },
            {
                id: 'registration-process',
                title: 'How to manage event registrations with AriyaHQ',
                type: 'steps',
                items: [
                    { title: 'Create your event', description: 'Add its name, date, venue and other important information.' },
                    { title: 'Plan what to collect', description: 'Set up the registration process and request only information relevant to organising your event.' },
                    { title: 'Share your event', description: 'Reach your intended audience through your event communication channels and digital invitations.' },
                    { title: 'Manage registrations and responses', description: 'Keep attendee information organised as people register or confirm their attendance.' },
                    { title: 'Prepare for event day', description: 'Use your registration information and guest management tools to plan for attendance and guest access.' },
                ],
            },
            {
                id: 'registration-vs-manual',
                title: 'Event registration software vs manual registration',
                intro: 'Paper forms, spreadsheets and individual messages can be difficult to coordinate as an event grows.',
                type: 'comparison',
                leftTitle: 'Manual registration',
                rightTitle: 'Digital registration with AriyaHQ',
                items: [
                    { topic: 'Information', left: 'Details may be scattered across forms, sheets and messages.', right: 'Attendee information can be organised digitally.' },
                    { topic: 'Guest responses', left: 'Responses may need to be gathered and reconciled manually.', right: 'Registration and RSVP activities can be managed alongside guest information.' },
                    { topic: 'Communication', left: 'Updates may be sent through separate processes.', right: 'Bulk SMS and email can support event communication.' },
                    { topic: 'Guest access', left: 'Entry preparation may rely on separate paper lists.', right: 'Unique QR code guest passes can support access preparation.' },
                ],
            },
            {
                id: 'registration-tools',
                title: 'More than a registration form',
                intro: 'Registration is one part of planning an event. AriyaHQ brings it together with other guest management activities.',
                type: 'bullets',
                items: [
                    'Organise event registration and attendee information.',
                    'Manage RSVP responses and guest details.',
                    'Create and share digital invitations.',
                    'Provide unique QR code guest passes for event access preparation.',
                    'Communicate important details through bulk SMS and bulk email.',
                ],
            },
        ],
        faqs: [
            { question: 'What is event registration software?', answer: 'Event registration software is a digital platform that helps organisers collect and manage information from people registering to attend an event.' },
            { question: 'What is the best event registration software in Nigeria?', answer: 'The right platform depends on your event. Consider how it manages registrations, attendee information, guest communication and event-day access preparation. AriyaHQ connects registration with invitations, RSVP management, guest management, bulk communication and QR code guest passes.' },
            { question: 'Can I use AriyaHQ to manage conference registration?', answer: 'Yes. AriyaHQ can support registration and guest management for conferences, seminars, workshops and other professional events.' },
            { question: 'Can I use event registration software for weddings?', answer: 'Yes. Event registration and RSVP management can help wedding planners organise guest information and attendance confirmations.' },
            { question: 'What is the difference between event registration and RSVP?', answer: 'Registration generally collects information from people who plan to attend. RSVP asks invited guests to confirm whether they will attend. Both can help organisers plan an event.' },
            { question: 'Can I send registration information to attendees?', answer: 'AriyaHQ provides bulk SMS and bulk email capabilities that organisers can use to communicate event-related information with their audiences.' },
            { question: 'Can event registration be connected to QR code guest passes?', answer: 'AriyaHQ offers event registration, guest management and unique QR code guest passes to support different parts of preparing guests for event access.' },
        ],
        related: [
            { label: 'Event management software pricing', href: '/event-management-software-pricing' },
            { label: 'Event registration guide', href: '/event-registration-nigeria' },
            { label: 'Event check-in preparation', href: '/event-check-in' },
            { label: 'QR code guest passes', href: '/qr-code-guest-passes' },
            { label: 'Bulk email for events', href: '/bulk-email-for-events' },
            { label: 'Bulk SMS for events', href: '/bulk-sms-for-events' },
        ],
    },
    '/event-check-in': {
        path: '/event-check-in',
        eyebrow: 'Event check-in',
        title: 'Event Check-in Software: Manage Guest Entry with AriyaHQ',
        intro: 'Prepare guest information, registrations and unique QR code passes to support your event access arrangements. AriyaHQ helps you organise the work that happens before guests arrive.',
        image: EVENT_IMAGES.coupleReceptionGuests,
        imageAlt: 'Guests arriving at a wedding reception',
        highlights: [
            'Prepare attendee information before event day',
            'Provide unique QR code guest passes',
            'Coordinate guest access with registration and communication',
        ],
        ctaLabel: 'Organise your event',
        closingTitle: 'Prepare your team for a more organised event day.',
        closingDescription: 'Organise registrations and guest information in advance, provide unique QR code guest passes and share clear arrival instructions with your attendees.',
        sections: [
            {
                id: 'checkin-benefits',
                title: 'Why is event check-in important?',
                intro: 'An organised arrival process helps your team identify expected guests and reduce avoidable confusion at the entrance.',
                type: 'cards',
                items: [
                    { title: 'Reduce avoidable delays', description: 'Prepare guest details in advance so staff spend less time searching for attendee information.' },
                    { title: 'Support guest identification', description: 'Use unique QR code guest passes as a digital reference in your event access arrangements.' },
                    { title: 'Organise your event team', description: 'Give team members a clear process and explain their responsibilities at the entrance.' },
                    { title: 'Create a welcoming arrival', description: 'Clear instructions and prepared guest information can help make entry less confusing.' },
                    { title: 'Prepare for your event size', description: 'Plan how guests will arrive whether you are hosting an intimate celebration or a conference.' },
                ],
            },
            {
                id: 'checkin-tools',
                title: 'How AriyaHQ helps you prepare for event check-in',
                type: 'cards',
                items: [
                    { title: 'Event registration', description: 'Organise attendee information before the event and prepare for the people expected to attend.' },
                    { title: 'Guest management', description: 'Keep event guest information organised so your team can prepare for arrivals.' },
                    { title: 'Unique QR code guest passes', description: 'Provide individual passes that can form part of your guest identification and check-in arrangements.' },
                    { title: 'Digital invitations', description: 'Share event details and relevant access information with invited guests.' },
                    { title: 'Bulk SMS and email', description: 'Send reminders, venue details and arrival instructions before event day.' },
                ],
            },
            {
                id: 'checkin-process',
                title: 'How to plan an organised event check-in process',
                type: 'steps',
                items: [
                    { title: 'Organise your guest list', description: 'Prepare information about the people expected at your event and review it before event day.' },
                    { title: 'Prepare guest passes', description: 'Provide unique QR code passes and tell guests how to access and present them.' },
                    { title: 'Brief your check-in team', description: 'Assign responsibilities and explain the process your team will follow to identify and direct guests.' },
                    { title: 'Prepare the entry point', description: 'Set up a clear entrance and make sure guests know where to go and whom to approach.' },
                    { title: 'Communicate arrival instructions', description: 'Share the venue, arrival time and any pass instructions through your event communication channels.' },
                    { title: 'Manage guest arrivals', description: 'Follow the arrangements established for your event and ensure team members can assist arriving guests.' },
                ],
            },
            {
                id: 'checkin-vs-manual',
                title: 'Digital guest management vs manual check-in',
                intro: 'Printed lists and manual name searches may become harder to coordinate when many guests arrive close together.',
                type: 'comparison',
                leftTitle: 'Manual guest management',
                rightTitle: 'Digital preparation with AriyaHQ',
                items: [
                    { topic: 'Guest information', left: 'Often depends on printed lists and manual updates.', right: 'Guest information can be organised digitally before the event.' },
                    { topic: 'Guest identification', left: 'Staff may need to search for names manually.', right: 'Unique QR code passes can provide a digital guest reference.' },
                    { topic: 'Passes', left: 'May depend on printed invitations or passes.', right: 'Digital guest passes can reduce dependence on printed passes.' },
                    { topic: 'Communication', left: 'Arrival instructions may be handled separately.', right: 'SMS and email can support pre-event guest communication.' },
                ],
            },
            {
                id: 'checkin-audiences',
                title: 'Who needs event check-in tools?',
                type: 'cards',
                items: [
                    { title: 'Wedding planners', description: 'Organise guest arrivals at weddings, traditional ceremonies, engagements and celebrations.' },
                    { title: 'Conference organisers', description: 'Prepare attendee information and arrival instructions for conferences and seminars.' },
                    { title: 'Corporate event organisers', description: 'Plan guest access for launches, networking events, awards and company gatherings.' },
                    { title: 'Entertainment organisers', description: 'Prepare guest lists and digital passes for concerts, shows and social events.' },
                    { title: 'Churches and event agencies', description: 'Organise guest information for religious programmes and events delivered for clients.' },
                ],
            },
        ],
        faqs: [
            { question: 'What is event check-in software?', answer: 'Event check-in software helps organisers prepare for and manage attendee arrivals. Platforms differ in the tools they provide, which can include registration, guest information, digital passes and entry workflows.' },
            { question: 'What is the best event check-in software in Nigeria?', answer: 'Choose a platform that fits your event size and the process your team needs. AriyaHQ provides event registration, guest management and unique QR code guest passes to help organisers prepare for event access.' },
            { question: 'Can I use QR codes for event check-in?', answer: 'QR codes can be used as digital references on guest passes to support attendee identification during event entry. AriyaHQ supports unique QR code guest passes.' },
            { question: 'Can I use AriyaHQ for wedding check-in?', answer: 'Yes. Guest management, RSVP capabilities and unique QR code guest passes can help wedding planners organise guests and prepare for event entry.' },
            { question: 'Can event check-in software be used for conferences?', answer: 'Yes. Event organisers can use check-in tools to prepare for attendee arrivals at conferences, seminars, workshops and other professional gatherings.' },
            { question: 'What is the difference between event registration and event check-in?', answer: 'Registration happens before an event and collects information from prospective attendees. Check-in happens when attendees arrive and involves identifying or recording their attendance.' },
            { question: 'Do guests need printed QR code passes?', answer: 'Not necessarily. Digital passes can be presented electronically, depending on the event arrangements and the supported guest pass process.' },
            { question: 'Can AriyaHQ send event reminders to guests?', answer: 'AriyaHQ provides bulk SMS and bulk email capabilities organisers can use to communicate reminders, venue details and other important updates.' },
        ],
        related: [
            { label: 'Event management software pricing', href: '/event-management-software-pricing' },
            { label: 'Event registration software', href: '/event-registration' },
            { label: 'Event registration guide', href: '/event-registration-nigeria' },
            { label: 'QR code guest passes', href: '/qr-code-guest-passes' },
            { label: 'Bulk SMS for events', href: '/bulk-sms-for-events' },
            { label: 'Bulk email for events', href: '/bulk-email-for-events' },
        ],
    },
};
