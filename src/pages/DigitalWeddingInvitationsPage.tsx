import { Link } from 'react-router-dom';
import {
    ArrowRight,
    Check,
    ClipboardCheck,
    Heart,
    MessageCircle,
    Smartphone,
    Users,
} from 'lucide-react';
import { APP_LINKS } from '../config/links';
import { EVENT_IMAGES } from '../config/eventImages';
import { digitalWeddingInvitationFaqs } from '../seo/digital-wedding-invitations-content';

const benefits = [
    {
        title: 'Share across locations',
        text: 'Reach invited guests in different cities or countries without arranging physical delivery for every invitation. This can be helpful when family and friends are spread across Nigeria and abroad.',
    },
    {
        title: 'Reduce printing and delivery',
        text: 'Depending on the format and service you choose, digital invites can reduce or avoid printing, packaging and delivery expenses. Check any design or platform fees before deciding what you will save.',
    },
    {
        title: 'Send details promptly',
        text: 'Once the invitation is ready, you can share it through a suitable digital channel instead of waiting for physical distribution. Guests can receive the information as soon as you send it.',
    },
    {
        title: 'Communicate updates',
        text: 'If event details change, you can share a revised invitation or direct guests to an updated information page. Replace static files when you send updates, and make the new version easy to recognise.',
    },
    {
        title: 'Choose a format that fits',
        text: 'Use a classic card, an animated design, a short video or an interactive invitation, depending on your style and guests’ needs. A simple, readable design may be more useful than effects that make the details hard to see.',
    },
    {
        title: 'Connect guests to more information',
        text: 'A digital invitation can include links to directions, RSVP instructions or a wedding website with additional event information. Test each link before sending the invitation.',
    },
];

const invitationDetails = [
    {
        title: 'Names of the couple',
        text: 'Make both names easy to identify. For a traditional wedding, you may also include family names if that is appropriate for your plans.',
    },
    {
        title: 'Wedding date and time',
        text: 'Write the complete, confirmed date and the expected start time. If you have several ceremonies, label each one so guests know which event the details describe.',
    },
    {
        title: 'Venue and address',
        text: 'Include the venue name and a clear address. A map link can help guests find the location, especially if they are travelling from outside the area.',
    },
    {
        title: 'Dress code and celebration guidance',
        text: 'Share any agreed dress code, colour theme or aso-ebi information. Keep instructions clear and confirm the wording with the people organising that part of the celebration.',
    },
    {
        title: 'RSVP instructions',
        text: 'Tell guests how to respond and by what date. If you include an online RSVP link, open it yourself first and check that it leads to the correct place.',
    },
    {
        title: 'Helpful additional details',
        text: 'Add only what guests need, such as parking, access, travel guidance, event-specific instructions or a contact for questions. Keep sensitive personal information off a widely shared card.',
    },
];

const invitationFormats = [
    {
        title: 'Classic digital invitation card',
        text: 'A familiar card-style design with clear typography, wedding details, colour and imagery. If you are looking for a wedding invitation card online, check that the final file is readable at the size guests will view on their phones.',
    },
    {
        title: 'Minimalist invitation',
        text: 'A simple layout with restrained colours and readable type for couples who prefer a clean, elegant look. Give the date, venue and RSVP details enough space to stand out.',
    },
    {
        title: 'Culturally inspired invitation',
        text: 'Design choices can reflect the couple’s own heritage and celebration through attire, patterns, language or colours. Confirm cultural details with the families involved rather than relying on assumptions.',
    },
    {
        title: 'Animated or video invitation',
        text: 'Motion or a short video can add personality and make an electronic wedding invitation feel distinctive. Keep the file manageable to share and show the key details long enough to read.',
    },
    {
        title: 'Interactive invitation',
        text: 'Clickable links can take guests to directions, an RSVP form or a wedding website with more information. Test links on a phone and include a fallback address or instructions when needed.',
    },
];

const creationSteps = [
    {
        title: 'Choose the style of celebration',
        text: 'Decide whether you are inviting guests to a traditional wedding, white wedding, introduction, destination celebration or several events. Let the invitation reflect the occasion.',
    },
    {
        title: 'Select a readable design',
        text: 'Choose colours and typography that suit your wedding. Make sure essential information is easy to read on a phone.',
    },
    {
        title: 'Confirm the event details',
        text: 'Prepare names, dates, times, venues, dress guidance and RSVP instructions. Do not send information that is still uncertain.',
    },
    {
        title: 'Pick the right digital format',
        text: 'Choose an image, PDF, video or interactive format based on how guests will receive and view the invitation.',
    },
    {
        title: 'Review before sharing',
        text: 'Check spellings, date, time, address, contact details, image quality and every link. Ask another person to proofread it and preview it on a mobile phone.',
    },
    {
        title: 'Share and keep track',
        text: 'Send invitations through appropriate channels, organise your guest list and note who has been invited and who has responded.',
    },
];

const whatsappTips = [
    'Save or export the invitation in a format that keeps text and images clear.',
    'Check every detail and link before forwarding the file.',
    'Send it to the intended guest or an appropriate group, respecting guests’ privacy.',
    'Add a short, warm message so recipients know the invitation is meant for them.',
    'Explain how to RSVP and when a response is needed.',
    'Follow up politely and share important changes promptly.',
];

const commonMistakes = [
    'Using decorative fonts that make names, dates or addresses difficult to read.',
    'Leaving out the venue address or assuming every guest knows the location.',
    'Sharing unconfirmed details that may later change.',
    'Crowding the invitation with information guests do not need.',
    'Forgetting to test how the design and links work on a mobile phone.',
    'Failing to explain how and when to RSVP.',
    'Assuming every guest prefers digital communication; offer printed invitations where appropriate.',
];

export default function DigitalWeddingInvitationsPage() {
    return (
        <main className="bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
            <section className="relative isolate overflow-hidden bg-gray-950 pt-24 text-white">
                <img
                    src={EVENT_IMAGES.coupleReception}
                    alt="Nigerian couple celebrating with guests at a wedding reception"
                    fetchPriority="high"
                    className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-45"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-950/95 via-gray-950/80 to-gray-950/45" />
                <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-16">
                    <div className="max-w-3xl">
                        <nav aria-label="Breadcrumb" className="mb-6 text-xs font-bold text-white/65">
                            <Link to="/" className="transition hover:text-white">Home</Link>
                            <span className="mx-2" aria-hidden="true">/</span>
                            <span aria-current="page" className="text-white">Digital wedding invitations</span>
                        </nav>
                        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-orange-200 backdrop-blur">
                            <Smartphone className="h-3.5 w-3.5" aria-hidden="true" />
                            A modern way to invite your guests
                        </span>
                        <h1 className="text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
                            Digital Wedding Invitations: A Modern Way to Invite Guests to Your Wedding
                        </h1>
                        <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
                            Create, personalise and share wedding invitations online. Explore
                            practical formats, what to include and ways to make the invitation
                            process more convenient for you and your guests.
                        </p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <a
                                href={APP_LINKS.signup}
                                className="inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-600 px-3 py-4 text-xs font-black uppercase tracking-widest text-white transition hover:bg-primary-500 sm:w-auto sm:px-7"
                            >
                                Explore AriyaHQ <ArrowRight className="h-4 w-4 shrink-0" />
                            </a>
                            <a
                                href="#create"
                                className="inline-flex min-h-12 w-full items-center justify-center whitespace-nowrap rounded-full border border-white/30 bg-white/5 px-3 py-4 text-xs font-black uppercase tracking-widest text-white transition hover:bg-white/15 sm:w-auto sm:px-7"
                            >
                                How to create an invitation
                            </a>
                        </div>
                        <p className="mt-5 text-xs font-medium text-white/65">
                            Check the current AriyaHQ product options before deciding which tools
                            suit your invitation process.
                        </p>
                    </div>
                    <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-md sm:p-8">
                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-300/15 text-orange-200">
                                <Heart className="h-5 w-5" aria-hidden="true" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-200">A thoughtful first impression</p>
                                <h2 className="mt-1 text-xl font-black">Make the important details easy to find.</h2>
                            </div>
                        </div>
                        <p className="mt-5 text-sm leading-6 text-white/75">
                            A clear invitation helps guests understand when and where to celebrate
                            with you, how to respond and where to find any additional information.
                        </p>
                        <div className="mt-6 grid grid-cols-2 gap-3">
                            <div className="rounded-2xl bg-black/20 p-4">
                                <span className="text-[10px] font-black uppercase tracking-widest text-white/55">Keep it clear</span>
                                <p className="mt-2 text-sm font-bold">Date, time and venue</p>
                            </div>
                            <div className="rounded-2xl bg-black/20 p-4">
                                <span className="text-[10px] font-black uppercase tracking-widest text-white/55">Make it useful</span>
                                <p className="mt-2 text-sm font-bold">RSVP and directions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <nav aria-label="On this page" className="border-b border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-950">
                <div className="mx-auto flex max-w-7xl flex-wrap gap-x-6 gap-y-3 px-6 py-5 text-xs font-bold text-gray-600 dark:text-gray-300 md:px-10 lg:px-16">
                    <a className="hover:text-primary-600" href="#what-are">What they are</a>
                    <a className="hover:text-primary-600" href="#benefits">Why choose digital</a>
                    <a className="hover:text-primary-600" href="#include">What to include</a>
                    <a className="hover:text-primary-600" href="#formats">Invitation ideas</a>
                    <a className="hover:text-primary-600" href="#create">How to create one</a>
                    <a className="hover:text-primary-600" href="#whatsapp">WhatsApp tips</a>
                    <a className="hover:text-primary-600" href="#faqs">FAQs</a>
                </div>
            </nav>

            <section id="what-are" className="scroll-mt-24 px-6 py-16 md:px-10 md:py-24 lg:px-16">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">A convenient way to invite</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">What are digital wedding invitations?</h2>
                    </div>
                    <div className="space-y-5 leading-7 text-gray-600 dark:text-gray-300">
                        <p>
                            Digital wedding invitations, sometimes called online wedding invitations
                            or a wedding e-invitation, are electronic versions of traditional
                            invitation cards. Instead of printing and physically delivering every
                            copy, you prepare an invitation file or online experience and share it
                            through channels such as WhatsApp, email or social media.
                        </p>
                        <p>
                            Depending on the format and service you choose, an invitation may include
                            the couple’s names, date and time, venue, directions, dress guidance and
                            RSVP instructions. It may be a static image, PDF, video or interactive
                            invitation with useful links.
                        </p>
                        <p>
                            The right option depends on your wedding style, the information guests
                            need and how they will receive the invitation. For Nigerian weddings
                            involving multiple ceremonies or locations, make each event’s details
                            distinct and easy to understand.
                        </p>
                        <p>
                            Some couples create a digital card themselves, while others choose a
                            wedding invitation design service or an online tool. Compare the output
                            format, editing options, readability and cost before selecting one. The
                            term “free digital wedding invitations” can refer to different offers,
                            so check what is included and whether there are limits or additional fees.
                        </p>
                    </div>
                </div>
            </section>

            <section id="benefits" className="scroll-mt-24 bg-[#fbf8f4] px-6 py-16 dark:bg-gray-900/60 md:px-10 md:py-24 lg:px-16">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">A flexible option for couples</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Why choose digital wedding invitations?</h2>
                        <p className="mt-5 leading-7 text-gray-600 dark:text-gray-300">
                            Digital invitations can make distribution simpler, but they are not the
                            only choice. Consider what works for your budget, guests and celebration.
                        </p>
                    </div>
                    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {benefits.map(({ title, text }) => (
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

            <section id="include" className="scroll-mt-24 px-6 py-16 md:px-10 md:py-24 lg:px-16">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">The essentials</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">What should a digital wedding invitation include?</h2>
                        <p className="mt-5 leading-7 text-gray-600 dark:text-gray-300">
                            A beautiful design matters, but guests also need accurate, practical
                            information. Include what they need to attend and respond, without
                            crowding the invitation. If different guests are invited to separate
                            ceremonies, prepare and check the right details for each group.
                        </p>
                    </div>
                    <ul className="grid gap-3 sm:grid-cols-2">
                        {invitationDetails.map(({ title, text }) => (
                            <li key={title} className="rounded-2xl border border-gray-100 bg-[#fbf8f4] p-5 text-sm leading-6 text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
                                <h3 className="font-black text-gray-900 dark:text-white">{title}</h3>
                                <p className="mt-2">{text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section id="formats" className="scroll-mt-24 border-y border-gray-100 bg-[#fbf8f4] px-6 py-16 dark:border-gray-800 dark:bg-gray-900/60 md:px-10 md:py-24 lg:px-16">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-3xl">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Make it your own</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Digital wedding invitation ideas</h2>
                        <p className="mt-5 leading-7 text-gray-600 dark:text-gray-300">
                            Your invitation can be familiar, minimal, expressive or interactive.
                            Choose a format that fits the way your guests will open and use it.
                        </p>
                    </div>
                    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {invitationFormats.map(({ title, text }) => (
                            <article key={title} className="rounded-3xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
                                <h3 className="text-lg font-black">{title}</h3>
                                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">{text}</p>
                            </article>
                        ))}
                    </div>
                    <p className="mt-6 max-w-4xl text-sm leading-6 text-gray-600 dark:text-gray-400">
                        Cultural styles are personal. Draw on the couple’s own heritage and
                        preferences, and check family or community details rather than assuming
                        one design represents everyone.
                    </p>
                </div>
            </section>

            <section id="create" className="scroll-mt-24 bg-gray-950 px-6 py-16 text-white dark:bg-black md:px-10 md:py-24 lg:px-16">
                <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
                    <div className="max-w-xl">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-300">A simple process</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">How to create a digital wedding invitation</h2>
                        <p className="mt-5 leading-7 text-gray-300">
                            Prepare confirmed details first, then choose a format and review the
                            result before sending it to your guests.
                        </p>
                        <a
                            href={APP_LINKS.signup}
                            className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-600 px-3 py-4 text-xs font-black uppercase tracking-widest text-white transition hover:bg-primary-500 sm:w-auto sm:px-7"
                        >
                            Get started with AriyaHQ <ArrowRight className="h-4 w-4 shrink-0" />
                        </a>
                        <p className="mt-4 text-xs leading-5 text-gray-400">
                            Review the current product options before relying on any particular
                            invitation or guest-management feature.
                        </p>
                    </div>
                    <ol className="space-y-4">
                        {creationSteps.map(({ title, text }, index) => (
                            <li key={title} className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-600 text-sm font-black">
                                    {index + 1}
                                </span>
                                <div>
                                    <h3 className="font-black">{title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-gray-300">{text}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <section className="px-6 py-16 md:px-10 md:py-24 lg:px-16">
                <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
                    <article className="rounded-[2rem] border border-gray-100 bg-white p-7 dark:border-gray-800 dark:bg-gray-900 sm:p-9">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-600/10 text-primary-700 dark:text-primary-300">
                            <Users className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <h2 className="mt-5 text-2xl font-black tracking-tight">Digital or printed wedding invitations?</h2>
                        <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                            Digital invitations are shared online and can be convenient across
                            locations. Printed invitations offer a physical keepsake and can be
                            handed directly to guests. Digital formats may need a device and
                            internet connection; printed cards need design, production and delivery.
                        </p>
                        <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                            You do not have to choose only one. A hybrid approach can work well:
                            print selected copies for elders, family members or guests who prefer
                            them, and use digital invitations for wider distribution. Consider
                            whether guests can comfortably open files on their devices, whether they
                            have reliable internet access and whether a physical invitation is
                            important to them as a keepsake.
                        </p>
                        <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                            Each format has trade-offs. A static image is familiar and easy to
                            forward, but old copies may still circulate after a change. A link can
                            point guests to updated information, but they need a connection to open
                            it. Printed cards work without a device and can be kept as a memento,
                            while their details are harder to change after printing.
                        </p>
                        <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                            Think about the people you are inviting rather than assuming one method
                            will suit everyone. You might send online wedding invitations to guests
                            who prefer them, personally deliver selected printed cards and provide
                            one clear way for every guest to find the latest event details.
                        </p>
                    </article>

                    <article id="whatsapp" className="scroll-mt-24 rounded-[2rem] border border-gray-100 bg-[#fbf8f4] p-7 dark:border-gray-800 dark:bg-gray-900/60 sm:p-9">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-600/10 text-primary-700 dark:text-primary-300">
                            <MessageCircle className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <h2 className="mt-5 text-2xl font-black tracking-tight">How to send wedding invitations on WhatsApp</h2>
                        <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                            WhatsApp can be a practical way to share invitations with guests in
                            Nigeria. Make the message personal, clear and easy to act on.
                        </p>
                        <ol className="mt-5 space-y-3">
                            {whatsappTips.map((tip, index) => (
                                <li key={tip} className="flex gap-3 text-sm leading-6 text-gray-700 dark:text-gray-300">
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-600/10 text-[11px] font-black text-primary-700 dark:text-primary-300">{index + 1}</span>
                                    <span>{tip}</span>
                                </li>
                            ))}
                        </ol>
                        <p className="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-400">
                            If you are sending invitations through a group chat, consider whether
                            every guest should see the other recipients. Use a private message or
                            an appropriate group, and avoid sharing personal guest information
                            unnecessarily.
                        </p>
                        <Link
                            to="/wedding-rsvp-guest-management"
                            className="mt-5 inline-flex items-center gap-2 text-sm font-black text-primary-700 hover:text-primary-600 dark:text-primary-300"
                        >
                            Organise wedding RSVPs and guest details <ArrowRight className="h-4 w-4" />
                        </Link>
                    </article>
                </div>
            </section>

            <section className="px-6 py-16 md:px-10 md:py-20 lg:px-16">
                <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="max-w-3xl">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Plan for your actual needs</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">What do digital wedding invitations cost?</h2>
                        <p className="mt-5 leading-7 text-gray-600 dark:text-gray-300">
                            There is no single price for online wedding invitations. The cost can
                            depend on whether you make the design yourself, use a paid design
                            service, choose a video or interactive format, or pay for a platform or
                            custom features. Sending a digital file may avoid printing and delivery
                            charges, but it does not automatically mean every part of the process
                            is free.
                        </p>
                        <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                            Compare what is included, whether you can make edits, which file types
                            you receive and whether any hosting or sharing fees apply. Set a limit
                            that works with the rest of your wedding plans rather than choosing an
                            option based only on the word “free.”
                        </p>
                        <Link
                            to="/wedding-budget"
                            className="mt-5 inline-flex items-center gap-2 text-sm font-black text-primary-700 hover:text-primary-600 dark:text-primary-300"
                        >
                            Read the Nigerian wedding budget guide <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                    <aside className="rounded-[2rem] border border-gray-100 bg-[#fbf8f4] p-7 dark:border-gray-800 dark:bg-gray-900/60 sm:p-9">
                        <h3 className="text-xl font-black">A quick decision checklist</h3>
                        <ul className="mt-5 space-y-3">
                            {[
                                'Can every invited guest open and read the format?',
                                'Are all design, editing or platform fees clear?',
                                'Can you update details if your plans change?',
                                'Would some guests prefer a printed invitation?',
                            ].map((item) => (
                                <li key={item} className="flex gap-3 text-sm leading-6 text-gray-700 dark:text-gray-300">
                                    <Check className="mt-1 h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </aside>
                </div>
            </section>

            <section className="border-y border-gray-100 bg-[#fbf8f4] px-6 py-16 dark:border-gray-800 dark:bg-gray-900/60 md:px-10 md:py-20 lg:px-16">
                <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
                    <article className="rounded-[2rem] border border-gray-100 bg-white p-7 dark:border-gray-800 dark:bg-gray-950 sm:p-9">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-600/10 text-primary-700 dark:text-primary-300">
                            <Smartphone className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <h2 className="mt-5 text-2xl font-black tracking-tight">Digital wedding invitation or wedding website?</h2>
                        <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                            An invitation announces your wedding and invites someone to attend. A
                            wedding website can offer a central place for the couple’s story, event
                            schedule, venue directions, dress guidance and other details guests may
                            want to revisit. The two can work together: link from an invitation to
                            the website for more information.
                        </p>
                        <Link
                            to="/wedding-website"
                            className="mt-6 inline-flex items-center gap-2 text-sm font-black text-primary-700 hover:text-primary-600 dark:text-primary-300"
                        >
                            Explore wedding websites <ArrowRight className="h-4 w-4" />
                        </Link>
                    </article>
                    <article className="rounded-[2rem] border border-gray-100 bg-white p-7 dark:border-gray-800 dark:bg-gray-950 sm:p-9">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-600/10 text-primary-700 dark:text-primary-300">
                            <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <h2 className="mt-5 text-2xl font-black tracking-tight">Common digital invitation mistakes to avoid</h2>
                        <ul className="mt-5 space-y-3">
                            {commonMistakes.map((mistake) => (
                                <li key={mistake} className="flex gap-3 text-sm leading-6 text-gray-700 dark:text-gray-300">
                                    <Check className="mt-1 h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
                                    <span>{mistake}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                </div>
            </section>

            <section id="faqs" className="scroll-mt-24 px-6 py-16 md:px-10 md:py-24 lg:px-16">
                <div className="mx-auto max-w-4xl">
                    <div className="text-center">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Helpful answers</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Digital wedding invitation FAQs</h2>
                    </div>
                    <div className="mt-10 divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800">
                        {digitalWeddingInvitationFaqs.map(({ question, answer }) => (
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
                        These answers are general guidance. Confirm current product features and
                        any event-specific details before sharing them with guests.
                    </p>
                </div>
            </section>

            <section className="bg-gray-950 px-6 py-16 text-white dark:bg-black md:px-10 md:py-20 lg:px-16">
                <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                    <div className="max-w-2xl">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-300">Plan the whole celebration</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Make it easy for guests to know what to expect.</h2>
                        <p className="mt-4 text-sm leading-7 text-gray-300 sm:text-base">
                            Explore practical guides for planning your Nigerian wedding, organising
                            your budget and sharing event details with invited guests.
                        </p>
                    </div>
                    <div className="flex w-full flex-col gap-3 sm:w-auto">
                        <a
                            href={APP_LINKS.signup}
                            className="inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-600 px-3 py-4 text-xs font-black uppercase tracking-widest text-white transition hover:bg-primary-500 sm:w-auto sm:px-7"
                        >
                            Start planning with AriyaHQ <ArrowRight className="h-4 w-4 shrink-0" />
                        </a>
                        <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-bold text-white/80">
                            <Link className="hover:text-white" to="/wedding-planning">Wedding planning guide</Link>
                            <Link className="hover:text-white" to="/wedding-budget">Nigerian wedding budget</Link>
                            <Link className="hover:text-white" to="/wedding-website">Wedding website guide</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
