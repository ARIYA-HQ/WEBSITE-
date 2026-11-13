import { Link } from 'react-router-dom';
import {
    ArrowRight,
    CalendarDays,
    Check,
    ClipboardCheck,
    Heart,
    MessageCircle,
    ShieldCheck,
    Users,
} from 'lucide-react';
import { APP_LINKS } from '../config/links';
import { EVENT_IMAGES } from '../config/eventImages';
import { trackEvent } from '../analytics/analytics';
import { weddingRsvpGuestManagementFaqs } from '../seo/wedding-rsvp-guest-management-content';

const guestManagementBenefits = [
    {
        title: 'Keep invitation records clear',
        text: 'Know who is on the guest list, which invitation was sent and who still needs to hear from you. Categories such as each family, friends, colleagues and community guests can help with coordination.',
    },
    {
        title: 'Estimate attendance more accurately',
        text: 'Some invited guests will be unavailable, and some may respond close to the deadline. Recorded replies give you a better attendance estimate than assumptions alone.',
    },
    {
        title: 'Plan food, venue and seating',
        text: 'A current headcount helps you discuss catering quantities, venue capacity, seating, drinks, transport and other guest arrangements with the people supporting your wedding.',
    },
    {
        title: 'Coordinate information and follow-ups',
        text: 'A central record helps you find guests who have not responded, note who needs directions or an update and avoid relying on scattered messages.',
    },
    {
        title: 'Connect guest numbers to your budget',
        text: 'Guest attendance can affect several costs. Reviewing confirmations alongside your budget helps you make informed decisions about the celebration you can comfortably plan.',
    },
];

const guestListSteps = [
    {
        title: 'Set capacity and a comfortable limit',
        text: 'Check the venue’s practical capacity and decide how many guests your budget and plans can support. Avoid inviting beyond the arrangements you can reasonably accommodate.',
    },
    {
        title: 'Agree categories and family allocations',
        text: 'Discuss how invitations will be shared between the couple and families. Categories might include each family, personal friends, colleagues, community members and special guests.',
    },
    {
        title: 'Create one current guest record',
        text: 'Choose a spreadsheet, planning tool or other process that the people coordinating invitations can update. Avoid keeping separate, conflicting versions without an agreed owner.',
    },
    {
        title: 'Record only the details you need',
        text: 'Depending on the event, you may need a name, contact method, category, invitation status, RSVP, approved attendee count and relevant optional requirements. Keep access limited.',
    },
    {
        title: 'Choose how invitations and replies work',
        text: 'Decide whether you will use printed invitations, digital invitations or both, and how each guest can respond. Make the response process clear before sending invitations.',
    },
    {
        title: 'Set a clear RSVP deadline',
        text: 'Choose a date that gives you enough time to confirm catering, venue, seating and other plans. Include the deadline and response method with the invitation.',
    },
    {
        title: 'Follow up, then review attendance',
        text: 'Contact non-responders politely, record any changes and share the relevant confirmed estimate with your planner and vendors. Remember that confirmations are not a guarantee of attendance.',
    },
];

const rsvpFields = [
    {
        title: 'Guest name',
        text: 'Ask for the invited guest’s name so you can match the response to the correct invitation.',
    },
    {
        title: 'Attendance response',
        text: 'Offer a clear way to say whether they intend to attend. Make the wording straightforward for guests.',
    },
    {
        title: 'Approved attendee count',
        text: 'Ask how many people are included only when the invitation permits it. Set the allowed number clearly rather than assuming every guest can bring someone.',
    },
    {
        title: 'Event selection',
        text: 'If you are holding a traditional ceremony, white wedding or other events with different guest lists, make it clear which event the response covers.',
    },
    {
        title: 'Contact method',
        text: 'Collect a contact detail only if you need it for event updates or clarification, and explain how you will use it.',
    },
    {
        title: 'Optional requirements',
        text: 'Where needed, provide optional questions for dietary or accessibility requirements. Ask only for information you can use to support the guest.',
    },
];

const responseMethods = [
    {
        method: 'Phone call or text',
        usefulFor: 'A small guest list or personal follow-up.',
        consider: 'Someone must record responses consistently; replies may become difficult to compare at scale.',
    },
    {
        method: 'WhatsApp',
        usefulFor: 'Guests who already communicate with you there.',
        consider: 'Responses can be scattered or buried in chats, so maintain a separate current attendance record.',
    },
    {
        method: 'Spreadsheet',
        usefulFor: 'Couples who want a flexible, low-cost list they can update manually.',
        consider: 'Agree who can edit it, use consistent status labels and protect access to personal information.',
    },
    {
        method: 'Online RSVP form',
        usefulFor: 'Collecting responses in a consistent structure.',
        consider: 'Test the form and check that it captures only the fields you need and handles guest allocations correctly.',
    },
    {
        method: 'Wedding website',
        usefulFor: 'Combining event information with RSVP details where the chosen platform supports it.',
        consider: 'Check the available fields and event setup. AriyaHQ’s sample RSVP shows attendance, guest details, plus-one and dietary fields; options may depend on the event setup.',
    },
];

const invitationStatuses = [
    ['Not invited', 'The person is on a planning list but has not been invited.'],
    ['Invitation sent', 'The invitation has been delivered or shared.'],
    ['Awaiting response', 'The guest has not yet confirmed or declined.'],
    ['Attending', 'The guest has confirmed an intention to attend.'],
    ['Not attending', 'The guest has declined the invitation.'],
    ['Follow-up needed', 'A polite reminder or clarification is still required.'],
    ['Attendance changed', 'The guest has updated an earlier response.'],
];

const commonMistakes = [
    'Waiting until invitations are ready before starting the guest list.',
    'Inviting more people than the budget or venue can comfortably support.',
    'Leaving the RSVP deadline off the invitation or failing to follow up.',
    'Relying on memory, chats or multiple outdated copies instead of one current record.',
    'Assuming an invitation includes extra attendees without stating the allocation.',
    'Using one overall headcount for several events with different guest lists.',
    'Collecting sensitive information that is not needed or sharing the guest list widely.',
];

const guestListChecklist = [
    'Confirm budget, venue capacity and a realistic guest limit.',
    'Agree family allocations and guest categories.',
    'Create one current master guest list.',
    'Mark which event each guest is invited to.',
    'Choose printed, digital or hybrid invitations.',
    'Select a response method and set an RSVP deadline.',
    'Track invitations, attendance replies and approved attendee counts.',
    'Follow up politely and record any changes.',
    'Share relevant final estimates with vendors and your coordinator.',
    'Limit access to guest contact and requirement details.',
];

function trackSignupClick(placement: 'hero' | 'closing') {
    trackEvent('wedding_rsvp_guest_management_cta_clicked', { placement });
}

export default function WeddingRsvpGuestManagementPage() {
    return (
        <main className="bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
            <section className="relative isolate overflow-hidden bg-gray-950 pt-24 text-white">
                <img
                    src={EVENT_IMAGES.eventPlanner}
                    alt="Nigerian event planner organising wedding details"
                    fetchPriority="high"
                    className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-45"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-950/95 via-gray-950/80 to-gray-950/45" />
                <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-16">
                    <div className="max-w-3xl">
                        <nav aria-label="Breadcrumb" className="mb-6 text-xs font-bold text-white/65">
                            <Link to="/" className="transition hover:text-white">Home</Link>
                            <span className="mx-2" aria-hidden="true">/</span>
                            <span aria-current="page" className="text-white">Wedding RSVP and guest management</span>
                        </nav>
                        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-orange-200 backdrop-blur">
                            <Users className="h-3.5 w-3.5" aria-hidden="true" />
                            Keep every guest detail organised
                        </span>
                        <h1 className="text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
                            Wedding RSVP and Guest Management: How to Organise Your Wedding Guests
                        </h1>
                        <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
                            Learn how to organise invitations, collect attendance confirmations,
                            manage guest allocations and plan for a Nigerian wedding with a clearer
                            view of who intends to attend.
                        </p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <a
                                href={APP_LINKS.signup}
                                onClick={() => trackSignupClick('hero')}
                                className="inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-600 px-3 py-4 text-xs font-black uppercase tracking-widest text-white transition hover:bg-primary-500 sm:w-auto sm:px-7"
                            >
                                Explore AriyaHQ <ArrowRight className="h-4 w-4 shrink-0" />
                            </a>
                            <a
                                href="#guest-list"
                                className="inline-flex min-h-12 w-full items-center justify-center whitespace-nowrap rounded-full border border-white/30 bg-white/5 px-3 py-4 text-xs font-black uppercase tracking-widest text-white transition hover:bg-white/15 sm:w-auto sm:px-7"
                            >
                                Organise your guest list
                            </a>
                        </div>
                        <p className="mt-5 text-xs font-medium text-white/65">
                            RSVP confirmations help with planning, but they cannot guarantee who
                            will arrive on the day.
                        </p>
                    </div>
                    <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-md sm:p-8">
                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-300/15 text-orange-200">
                                <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-200">A clearer attendance picture</p>
                                <h2 className="mt-1 text-xl font-black">Invite, follow up and update one record.</h2>
                            </div>
                        </div>
                        <p className="mt-5 text-sm leading-6 text-white/75">
                            A simple process helps you see who was invited, who has replied and
                            which details still need attention.
                        </p>
                        <div className="mt-6 grid grid-cols-2 gap-3">
                            <div className="rounded-2xl bg-black/20 p-4">
                                <span className="text-[10px] font-black uppercase tracking-widest text-white/55">Track clearly</span>
                                <p className="mt-2 text-sm font-bold">One current guest list</p>
                            </div>
                            <div className="rounded-2xl bg-black/20 p-4">
                                <span className="text-[10px] font-black uppercase tracking-widest text-white/55">Plan together</span>
                                <p className="mt-2 text-sm font-bold">Confirmed responses</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <nav aria-label="On this page" className="border-b border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-950">
                <div className="mx-auto flex max-w-7xl flex-wrap gap-x-6 gap-y-3 px-6 py-5 text-xs font-bold text-gray-600 dark:text-gray-300 md:px-10 lg:px-16">
                    <a className="hover:text-primary-600" href="#what-is-rsvp">What RSVP means</a>
                    <a className="hover:text-primary-600" href="#why-manage">Why manage guests</a>
                    <a className="hover:text-primary-600" href="#guest-list">Build a guest list</a>
                    <a className="hover:text-primary-600" href="#rsvp-form">RSVP form details</a>
                    <a className="hover:text-primary-600" href="#methods">Ways to collect replies</a>
                    <a className="hover:text-primary-600" href="#checklist">Checklist</a>
                    <a className="hover:text-primary-600" href="#faqs">FAQs</a>
                </div>
            </nav>

            <section id="what-is-rsvp" className="scroll-mt-24 px-6 py-16 md:px-10 md:py-24 lg:px-16">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Start with a clear response</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">What is a wedding RSVP?</h2>
                    </div>
                    <div className="space-y-5 leading-7 text-gray-600 dark:text-gray-300">
                        <p>
                            RSVP comes from the French expression <em>Répondez s’il vous plaît</em>,
                            meaning “Please respond.” On a wedding invitation, it asks the invited
                            guest to confirm whether they intend to attend.
                        </p>
                        <p>
                            A wedding RSVP process gives couples a way to collect attendance
                            confirmations instead of relying only on assumptions. Guests may reply
                            by phone, text, WhatsApp, an online form, a wedding website where
                            supported, or through a designated family member or coordinator.
                        </p>
                        <p>
                            The process should be simple for guests and manageable for the people
                            coordinating the event. State how and when to respond, record each
                            answer in one current place, and provide a clear way to update a
                            response if plans change.
                        </p>
                    </div>
                </div>
            </section>

            <section id="why-manage" className="scroll-mt-24 bg-[#fbf8f4] px-6 py-16 dark:bg-gray-900/60 md:px-10 md:py-24 lg:px-16">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Plan with better information</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Why is wedding guest management important?</h2>
                        <p className="mt-5 leading-7 text-gray-600 dark:text-gray-300">
                            Nigerian wedding guest lists can bring together extended families,
                            friends, colleagues and community members. A clear process helps keep
                            invitations and attendance arrangements manageable.
                        </p>
                    </div>
                    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {guestManagementBenefits.map(({ title, text }) => (
                            <article key={title} className="rounded-3xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
                                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-600/10 text-primary-700 dark:text-primary-300">
                                    <Check className="h-5 w-5" aria-hidden="true" />
                                </span>
                                <h3 className="mt-5 text-lg font-black">{title}</h3>
                                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">{text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="guest-list" className="scroll-mt-24 px-6 py-16 md:px-10 md:py-24 lg:px-16">
                <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
                    <div className="max-w-xl">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">One record, kept current</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">How to create and manage your wedding guest list</h2>
                        <p className="mt-5 leading-7 text-gray-600 dark:text-gray-300">
                            Start the list before invitations are ready. A shared, agreed process
                            makes it easier to coordinate family allocations, responses and event
                            updates without relying on memory.
                        </p>
                        <Link
                            to="/wedding-budget"
                            className="mt-5 inline-flex items-center gap-2 text-sm font-black text-primary-700 hover:text-primary-600 dark:text-primary-300"
                        >
                            Plan your guest count with the wedding budget guide <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                    <ol className="space-y-4">
                        {guestListSteps.map(({ title, text }, index) => (
                            <li key={title} className="flex gap-5 rounded-2xl border border-gray-100 bg-[#fbf8f4] p-5 dark:border-gray-800 dark:bg-gray-900 sm:p-6">
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-600 text-sm font-black text-white">
                                    {index + 1}
                                </span>
                                <div>
                                    <h3 className="font-black">{title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">{text}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <section id="rsvp-form" className="scroll-mt-24 border-y border-gray-100 bg-[#fbf8f4] px-6 py-16 dark:border-gray-800 dark:bg-gray-900/60 md:px-10 md:py-24 lg:px-16">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-3xl">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Keep responses easy</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">What information should a wedding RSVP form collect?</h2>
                        <p className="mt-5 leading-7 text-gray-600 dark:text-gray-300">
                            Ask only for details that help you organise the event. A short,
                            straightforward response process is more likely to be completed than
                            a form filled with questions guests do not need to answer.
                        </p>
                    </div>
                    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {rsvpFields.map(({ title, text }) => (
                            <article key={title} className="rounded-3xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
                                <h3 className="font-black">{title}</h3>
                                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">{text}</p>
                            </article>
                        ))}
                    </div>
                    <div className="mt-8 rounded-3xl border-l-4 border-primary-500 bg-white p-6 dark:bg-gray-950">
                        <h3 className="font-black">Make guest allocation explicit</h3>
                        <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                            If an invitation is for one person, do not let the response process
                            imply that additional attendees are automatically included. State the
                            number covered by each invitation and make sure the form or response
                            instructions reflect it.
                        </p>
                    </div>
                    <p className="mt-6 text-sm leading-6 text-gray-600 dark:text-gray-400">
                        <ShieldCheck className="mr-2 inline h-4 w-4 text-primary-600" aria-hidden="true" />
                        Guest names, contact details and special requirements are personal
                        information. Collect only what is needed, explain how it will be used and
                        share the list only with people who need access to coordinate the event.
                    </p>
                </div>
            </section>

            <section id="methods" className="scroll-mt-24 px-6 py-16 md:px-10 md:py-24 lg:px-16">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-3xl">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Choose what you can manage</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Digital wedding RSVP or a traditional response?</h2>
                        <p className="mt-5 leading-7 text-gray-600 dark:text-gray-300">
                            There is no single best method for every wedding. Consider your guest
                            count, guests’ preferences, the number of events and how you will keep
                            responses up to date.
                        </p>
                    </div>
                    <div className="mt-10 grid gap-4 lg:grid-cols-2">
                        {responseMethods.map(({ method, usefulFor, consider }) => (
                            <article key={method} className="rounded-3xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                                <h3 className="text-lg font-black">{method}</h3>
                                <p className="mt-3 text-sm leading-6 text-gray-700 dark:text-gray-300">
                                    <strong>Can suit:</strong> {usefulFor}
                                </p>
                                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                                    <strong>Consider:</strong> {consider}
                                </p>
                            </article>
                        ))}
                    </div>
                    <div className="mt-10 grid gap-8 lg:grid-cols-2">
                        <article className="rounded-[2rem] border border-gray-100 bg-[#fbf8f4] p-7 dark:border-gray-800 dark:bg-gray-900/60 sm:p-9">
                            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-600/10 text-primary-700 dark:text-primary-300">
                                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                            </span>
                            <h3 className="mt-5 text-2xl font-black tracking-tight">How to manage wedding RSVPs on WhatsApp</h3>
                            <ol className="mt-5 space-y-3">
                                {[
                                    'Prepare and check your guest list before sending invitations.',
                                    'Send each guest a clear invitation and response request.',
                                    'Include the deadline and number of attendees covered.',
                                    'Record every reply in a central guest list instead of relying on chat history.',
                                    'Follow up politely with non-responders and note any changed answers.',
                                ].map((item, index) => (
                                    <li key={item} className="flex gap-3 text-sm leading-6 text-gray-700 dark:text-gray-300">
                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-600/10 text-[11px] font-black text-primary-700 dark:text-primary-300">{index + 1}</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ol>
                            <Link
                                to="/digital-wedding-invitations"
                                className="mt-6 inline-flex items-center gap-2 text-sm font-black text-primary-700 hover:text-primary-600 dark:text-primary-300"
                            >
                                Read the digital wedding invitations guide <ArrowRight className="h-4 w-4" />
                            </Link>
                        </article>
                        <article className="rounded-[2rem] border border-gray-100 bg-white p-7 dark:border-gray-800 dark:bg-gray-900 sm:p-9">
                            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-600/10 text-primary-700 dark:text-primary-300">
                                <CalendarDays className="h-5 w-5" aria-hidden="true" />
                            </span>
                            <h3 className="mt-5 text-2xl font-black tracking-tight">Track invitation and RSVP statuses</h3>
                            <ul className="mt-5 space-y-3">
                                {invitationStatuses.map(([status, meaning]) => (
                                    <li key={status} className="flex gap-3 text-sm leading-6">
                                        <span className="min-w-32 font-black text-gray-900 dark:text-white">{status}</span>
                                        <span className="text-gray-600 dark:text-gray-400">{meaning}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-400">
                                Use the same labels throughout your list. That makes it easier to
                                see who needs a follow-up without searching through old messages.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="border-y border-gray-100 bg-[#fbf8f4] px-6 py-16 dark:border-gray-800 dark:bg-gray-900/60 md:px-10 md:py-24 lg:px-16">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
                    <article>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Several events, distinct guest lists</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Manage guests for traditional and white weddings</h2>
                        <p className="mt-5 leading-7 text-gray-600 dark:text-gray-300">
                            Some Nigerian couples organise a traditional engagement, civil or
                            religious ceremony, white wedding reception, family dinner or other
                            celebrations. Not every guest will necessarily attend every event.
                        </p>
                        <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                            For each invited person, record which occasion the invitation covers,
                            how it was sent, whether they have responded and the number of people
                            included. Separate event headcounts help prevent one RSVP total from
                            being used for several different catering or seating plans.
                        </p>
                        <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                            Agree on allocations with both families and explain each invitation
                            clearly. If you use one response form, check that guests can identify
                            the event they are responding to and cannot select options that do not
                            apply to their invitation.
                        </p>
                    </article>
                    <article className="rounded-[2rem] bg-gray-950 p-7 text-white dark:bg-black sm:p-9">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-300/15 text-orange-200">
                            <Users className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <h3 className="mt-5 text-2xl font-black tracking-tight">Guest count is a planning input, not a guess</h3>
                        <p className="mt-4 leading-7 text-gray-300">
                            Start with your budget and venue capacity, then agree family
                            allocations and an invitation policy. Use the responses you receive
                            to update your estimate and discuss final arrangements with your
                            coordinator and suppliers.
                        </p>
                        <Link
                            to="/wedding-budget"
                            className="mt-6 inline-flex items-center gap-2 text-sm font-black text-orange-200 hover:text-white"
                        >
                            Review the wedding budget guide <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                            to="/wedding-planning"
                            className="mt-4 flex items-center gap-2 text-sm font-black text-orange-200 hover:text-white"
                        >
                            Read the Nigerian wedding planning guide <ArrowRight className="h-4 w-4" />
                        </Link>
                    </article>
                </div>
            </section>

            <section className="px-6 py-16 md:px-10 md:py-24 lg:px-16">
                <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="max-w-3xl">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Set a guest limit that fits</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">How many guests should you invite to your wedding?</h2>
                        <p className="mt-5 leading-7 text-gray-600 dark:text-gray-300">
                            There is no universal guest count for a Nigerian wedding. The right
                            number depends on your budget, venue capacity, family expectations,
                            celebration style and personal preferences. If you are planning both
                            traditional and white wedding events, agree whether each event will
                            have the same guest list or different invitations.
                        </p>
                        <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                            Discuss the guest allocation with both families early. It can help to
                            separate essential invitations from additional guests, decide who is
                            responsible for sending each invitation and agree how to handle
                            requests that arrive after the list is finalised.
                        </p>
                        <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                            Do not use the number of invitations sent as your final catering
                            estimate. Review the responses you receive and confirm the practical
                            headcount with your wedding coordinator and vendors. An RSVP improves
                            your estimate, but late changes and no-shows can still happen.
                        </p>
                        <Link
                            to="/wedding-budget"
                            className="mt-5 inline-flex items-center gap-2 text-sm font-black text-primary-700 hover:text-primary-600 dark:text-primary-300"
                        >
                            Estimate your wedding budget and guest costs <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                    <aside className="rounded-[2rem] border border-gray-100 bg-[#fbf8f4] p-7 dark:border-gray-800 dark:bg-gray-900/60 sm:p-9">
                        <h3 className="text-xl font-black">A practical guest-count approach</h3>
                        <ol className="mt-5 space-y-4">
                            {[
                                'Start with the maximum you can comfortably afford.',
                                'Confirm the usable capacity with your venue.',
                                'Agree family allocations and event-specific guest lists.',
                                'Set a clear invitation policy for plus-ones and children.',
                                'Use RSVP responses to update, not replace, your planning estimate.',
                            ].map((item, index) => (
                                <li key={item} className="flex gap-3 text-sm leading-6 text-gray-700 dark:text-gray-300">
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-600/10 text-[11px] font-black text-primary-700 dark:text-primary-300">{index + 1}</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ol>
                    </aside>
                </div>
            </section>

            <section className="px-6 py-16 md:px-10 md:py-24 lg:px-16">
                <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
                    <article className="rounded-[2rem] border border-gray-100 bg-white p-7 dark:border-gray-800 dark:bg-gray-900 sm:p-9">
                        <h2 className="text-2xl font-black tracking-tight">Wedding guest management mistakes to avoid</h2>
                        <ul className="mt-5 space-y-3">
                            {commonMistakes.map((mistake) => (
                                <li key={mistake} className="flex gap-3 text-sm leading-6 text-gray-700 dark:text-gray-300">
                                    <Check className="mt-1 h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
                                    <span>{mistake}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                    <article id="checklist" className="scroll-mt-24 rounded-[2rem] border border-gray-100 bg-[#fbf8f4] p-7 dark:border-gray-800 dark:bg-gray-900/60 sm:p-9">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">A practical reminder</span>
                        <h2 className="mt-3 text-2xl font-black tracking-tight">Wedding RSVP and guest management checklist</h2>
                        <ul className="mt-5 space-y-3">
                            {guestListChecklist.map((item) => (
                                <li key={item} className="flex gap-3 text-sm leading-6 text-gray-700 dark:text-gray-300">
                                    <Check className="mt-1 h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                </div>
            </section>

            <section id="faqs" className="scroll-mt-24 border-t border-gray-100 bg-[#fbf8f4] px-6 py-16 dark:border-gray-800 dark:bg-gray-900/60 md:px-10 md:py-24 lg:px-16">
                <div className="mx-auto max-w-4xl">
                    <div className="text-center">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Helpful answers</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Wedding RSVP and guest management FAQs</h2>
                    </div>
                    <div className="mt-10 divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800">
                        {weddingRsvpGuestManagementFaqs.map(({ question, answer }) => (
                            <details key={question} className="group py-5">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left font-bold marker:hidden">
                                    <span>{question}</span>
                                    <span className="text-xl text-primary-600 transition group-open:rotate-45" aria-hidden="true">+</span>
                                </summary>
                                <p className="max-w-3xl pt-4 text-sm leading-7 text-gray-600 dark:text-gray-300">{answer}</p>
                            </details>
                        ))}
                    </div>
                    <p className="mt-6 text-xs leading-5 text-gray-500 dark:text-gray-400">
                        Product features and response options can vary by event setup. Review the
                        current product before relying on a particular workflow.
                    </p>
                </div>
            </section>

            <section className="bg-gray-950 px-6 py-16 text-white dark:bg-black md:px-10 md:py-20 lg:px-16">
                <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                    <div className="max-w-2xl">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-300">Plan the guest experience</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Make it easier to keep wedding guest details organised.</h2>
                        <p className="mt-4 text-sm leading-7 text-gray-300 sm:text-base">
                            Explore the AriyaHQ tools available for your event and choose the
                            planning process that fits your guests, celebration and current needs.
                        </p>
                    </div>
                    <div className="flex w-full flex-col gap-4 sm:w-auto">
                        <a
                            href={APP_LINKS.signup}
                            onClick={() => trackSignupClick('closing')}
                            className="inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-600 px-3 py-4 text-xs font-black uppercase tracking-widest text-white transition hover:bg-primary-500 sm:w-auto sm:px-7"
                        >
                            Explore AriyaHQ <ArrowRight className="h-4 w-4 shrink-0" />
                        </a>
                        <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-bold text-white/80">
                            <Link className="hover:text-white" to="/wedding-planning">Wedding planning in Nigeria</Link>
                            <Link className="hover:text-white" to="/wedding-website">Create a wedding website</Link>
                            <Link className="hover:text-white" to="/wedding-budget">Wedding budget in Nigeria</Link>
                            <Link className="hover:text-white" to="/digital-wedding-invitations">Digital wedding invitations</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
