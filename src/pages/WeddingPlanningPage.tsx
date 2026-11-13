import { Link } from 'react-router-dom';
import {
    ArrowDown,
    ArrowRight,
    CalendarDays,
    Check,
    CircleDollarSign,
    ClipboardCheck,
    Compass,
    Heart,
    MapPin,
    MessageCircle,
    Users,
} from 'lucide-react';
import { APP_LINKS } from '../config/links';
import { EVENT_IMAGES } from '../config/eventImages';
import { weddingPlanningFaqs } from '../seo/wedding-planning-content';

const contents = [
    { href: '#vision', label: 'Set your vision' },
    { href: '#budget', label: 'Plan your budget' },
    { href: '#timeline', label: 'Build a timeline' },
    { href: '#ceremonies', label: 'Plan your ceremonies' },
    { href: '#vendors', label: 'Choose your vendors' },
    { href: '#guests', label: 'Organise your guests' },
    { href: '#checklist', label: 'Use the checklist' },
];

const budgetCategories = [
    ['Venue and logistics', 'Venue hire, setup, power, security, transport and accommodation'],
    ['Food and hospitality', 'Catering, drinks, service staff and guest comfort'],
    ['Ceremony and attire', 'Ceremony requirements, outfits, accessories and fittings'],
    ['Photography and entertainment', 'Photography, video, music, MC and performances'],
    ['Design and details', 'Decoration, stationery, flowers and other personal touches'],
    ['Contingency', 'A reserve for unexpected costs and last-minute needs'],
];

const timeline = [
    {
        period: 'As soon as you can',
        tasks: 'Agree on priorities, budget, ceremony plans, guest estimate and a date range. Research venues and the vendors most important to you.',
    },
    {
        period: 'Once the date is set',
        tasks: 'Confirm the venue and key vendors, clarify family responsibilities, and record each agreement, payment date and decision.',
    },
    {
        period: 'A few months out',
        tasks: 'Develop the guest list, invitations, attire, ceremony programme and logistics. Review costs and vendor plans together.',
    },
    {
        period: 'Final weeks',
        tasks: 'Confirm attendance, timings, vendor arrival and venue access. Share the final schedule and contact list with your coordinator and key people.',
    },
    {
        period: 'Wedding day',
        tasks: 'Give day-to-day coordination to the people you have briefed, keep key contacts accessible, and make room to enjoy the celebration.',
    },
];

const weddingChecklist = [
    'Agree on the kind of celebration and the ceremonies you want.',
    'Set a comfortable budget and decide how expenses will be tracked.',
    'Choose a date or date range and estimate your guest count.',
    'Compare venues, visit your shortlist and confirm terms in writing.',
    'Research vendors, review their work and document what each will deliver.',
    'Confirm family, cultural and religious requirements with the right people.',
    'Create invitations and a clear way to share event information.',
    'Track invitations and guest responses in one organised place.',
    'Prepare a realistic schedule and share it with your event team.',
    'Reconfirm logistics, contacts and contingency plans before the day.',
];

const planningTools = [
    {
        icon: ClipboardCheck,
        title: 'Tasks and timelines',
        text: 'Keep next steps and responsibilities visible as plans take shape.',
        href: '/product/planning',
        link: 'Explore planning tools',
    },
    {
        icon: CircleDollarSign,
        title: 'Event finances',
        text: 'Give your event spending a central place in the planning process.',
        href: '/product/finance',
        link: 'Explore finance tools',
    },
    {
        icon: Users,
        title: 'Guests and event details',
        text: 'Plan how you will organise guests and communicate important information.',
        href: '/product/overview',
        link: 'Explore the platform',
    },
    {
        icon: MapPin,
        title: 'Event vendors',
        text: 'Discover the vendor marketplace and assess providers against your needs.',
        href: '/product/marketplace',
        link: 'Explore the marketplace',
    },
    {
        icon: MessageCircle,
        title: 'A page for your event',
        text: 'Explore event websites as a place to share the information guests need.',
        href: '/product/websites',
        link: 'Explore event websites',
    },
];

export default function WeddingPlanningPage() {
    return (
        <main className="bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
            <section className="relative isolate flex min-h-[620px] items-center overflow-hidden bg-gray-950 pt-24 text-white md:min-h-[700px]">
                <img
                    src={EVENT_IMAGES.coupleReception}
                    alt="A couple celebrating with family and friends at their wedding"
                    fetchPriority="high"
                    className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-950/90 via-gray-950/70 to-gray-950/25" />
                <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 lg:px-16">
                    <div className="max-w-3xl">
                        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-orange-200 backdrop-blur">
                            <Heart className="h-3.5 w-3.5" />
                            The AriyaHQ wedding guide
                        </span>
                        <h1 className="text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl md:text-7xl">
                            Wedding planning in Nigeria, made more manageable.
                        </h1>
                        <p className="mt-7 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
                            From family conversations and ceremony plans to budgets, vendors and guest
                            lists, use this practical guide to take your wedding one decision at a time.
                        </p>
                        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                            <a
                                href={APP_LINKS.signup}
                                className="inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-600 px-3 py-4 text-[10px] font-black uppercase tracking-widest text-white transition hover:bg-primary-500 sm:w-auto sm:px-7 sm:text-xs"
                            >
                                Start planning with AriyaHQ <ArrowRight className="h-4 w-4" />
                            </a>
                            <a
                                href="#guide"
                                className="inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/30 bg-white/5 px-3 py-4 text-[10px] font-black uppercase tracking-widest text-white transition hover:bg-white/15 sm:w-auto sm:px-7 sm:text-xs"
                            >
                                Read the guide <ArrowDown className="h-4 w-4" />
                            </a>
                        </div>
                        <p className="mt-5 text-xs font-medium text-white/65">
                            Every wedding is different. Adapt this guide to your budget, families and traditions.
                        </p>
                    </div>
                </div>
            </section>

            <section id="guide" className="scroll-mt-24 border-b border-gray-100 bg-[#fbf8f4] py-12 dark:border-gray-800 dark:bg-gray-900/60">
                <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-[0.7fr_1.3fr] md:px-10 lg:px-16">
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Start here</span>
                        <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">A clear plan starts with the next decision.</h2>
                    </div>
                    <div>
                        <p className="leading-7 text-gray-600 dark:text-gray-300">
                            Planning a wedding can mean coordinating two families, more than one ceremony,
                            changing prices and many moving parts. You do not need every detail decided today.
                            Start with what matters most to you both, write down the decisions you make, and
                            build from there.
                        </p>
                        <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                            This Nigerian wedding planning guide covers a practical process without assuming
                            that every family, community or celebration follows the same customs.
                        </p>
                    </div>
                </div>
            </section>

            <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16 lg:px-16 lg:py-24">
                <aside className="h-fit lg:sticky lg:top-28">
                    <p className="mb-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">In this guide</p>
                    <nav aria-label="Wedding guide contents" className="grid grid-cols-1 gap-2 sm:grid-cols-3 lg:grid-cols-1">
                        {contents.map((item, index) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="rounded-xl border border-gray-100 px-3 py-2.5 text-xs font-bold text-gray-600 transition hover:border-primary-600/30 hover:text-primary-700 dark:border-gray-800 dark:text-gray-300 dark:hover:text-primary-400"
                            >
                                <span className="mr-2 text-primary-600">{String(index + 1).padStart(2, '0')}</span>
                                {item.label}
                            </a>
                        ))}
                    </nav>
                    <div className="mt-8 hidden rounded-2xl bg-gray-950 p-5 text-white dark:bg-gray-900 lg:block">
                        <Compass className="mb-4 h-5 w-5 text-orange-300" />
                        <p className="text-sm font-bold">Make the plan yours.</p>
                        <p className="mt-2 text-xs leading-5 text-gray-400">Use the ideas that fit your celebration and leave the rest.</p>
                    </div>
                </aside>

                <article className="min-w-0">
                    <section id="vision" className="scroll-mt-28 border-b border-gray-100 pb-12 dark:border-gray-800">
                        <SectionEyebrow>01 · Begin with a shared vision</SectionEyebrow>
                        <h2 className="section-heading">Decide what your wedding should feel like</h2>
                        <p className="section-copy">
                            Before booking a venue or paying a vendor, make time for an honest conversation
                            with your partner. A shared vision gives you a useful way to decide what belongs
                            in the plan—and what does not.
                        </p>
                        <div className="mt-7 grid gap-3 sm:grid-cols-2">
                            {[
                                'Which ceremonies do we want to hold?',
                                'What matters most to each of us?',
                                'How many guests can we host comfortably?',
                                'Which city or location works for our people?',
                                'What date range suits our plans?',
                                'Who needs to be part of key decisions?',
                            ].map(question => (
                                <div key={question} className="flex items-start gap-3 rounded-2xl bg-[#fbf8f4] p-4 dark:bg-gray-900">
                                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
                                    <span className="text-sm font-medium leading-6 text-gray-700 dark:text-gray-200">{question}</span>
                                </div>
                            ))}
                        </div>
                        <p className="section-copy mt-6">
                            Families may have different expectations, especially when traditional and
                            religious ceremonies are both planned. Agree on who should be consulted and how
                            decisions will be made. Customs differ across families and communities, so confirm
                            specific requirements with the people who know them best.
                        </p>
                    </section>

                    <section id="budget" className="scroll-mt-28 border-b border-gray-100 py-12 dark:border-gray-800">
                        <SectionEyebrow>02 · Make the numbers work for you</SectionEyebrow>
                        <h2 className="section-heading">Build a wedding budget you can manage</h2>
                        <p className="section-copy">
                            Wedding costs in Nigeria vary by location, guest count, season, venue, suppliers
                            and the choices you make. Rather than copying another couple’s total, start with
                            an amount you and any contributors are comfortable committing to.
                        </p>
                        <div className="mt-7 overflow-hidden rounded-3xl border border-gray-100 dark:border-gray-800">
                            {budgetCategories.map(([category, details], index) => (
                                <div key={category} className={`grid gap-1 px-5 py-4 sm:grid-cols-[0.7fr_1.3fr] sm:gap-6 ${index % 2 === 0 ? 'bg-[#fbf8f4] dark:bg-gray-900/70' : 'bg-white dark:bg-gray-950'}`}>
                                    <p className="text-sm font-black text-gray-900 dark:text-white">{category}</p>
                                    <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">{details}</p>
                                </div>
                            ))}
                        </div>
                        <ol className="mt-7 grid gap-4 sm:grid-cols-2">
                            {[
                                'Agree on the total amount available and who is contributing.',
                                'Separate essential costs from optional extras.',
                                'Ask multiple vendors for current, itemised quotations.',
                                'Record deposits, due dates, balances and agreed deliverables.',
                                'Set aside a contingency that suits your circumstances.',
                                'Review actual spending against the plan regularly.',
                            ].map((step, index) => (
                                <li key={step} className="flex gap-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-50 text-[11px] font-black text-primary-700 dark:bg-primary-900/30 dark:text-primary-300">{index + 1}</span>
                                    {step}
                                </li>
                            ))}
                        </ol>
                        <div className="mt-7 rounded-2xl border-l-4 border-primary-500 bg-orange-50 p-5 dark:bg-orange-950/20">
                            <p className="text-sm leading-6 text-gray-700 dark:text-gray-200">
                                <strong>Helpful reminder:</strong> A memorable celebration is not defined by
                                its price. Set priorities together and make each commitment with clear,
                                written terms.
                            </p>
                        </div>
                        <p className="mt-6">
                            <Link to="/wedding-budget" className="inline-flex items-center gap-2 text-sm font-black text-primary-700 hover:text-primary-600 dark:text-primary-400">
                                Nigerian wedding budget breakdown <ArrowRight className="h-4 w-4" />
                            </Link>
                        </p>
                        <p className="mt-6">
                            <Link to="/product/finance" className="inline-flex items-center gap-2 text-sm font-black text-primary-700 hover:text-primary-600 dark:text-primary-400">
                                Explore AriyaHQ event finance tools <ArrowRight className="h-4 w-4" />
                            </Link>
                        </p>
                        <p className="mt-6">
                            <Link to="/digital-wedding-invitations" className="inline-flex items-center gap-2 text-sm font-black text-primary-700 hover:text-primary-600 dark:text-primary-400">
                                Explore digital wedding invitations <ArrowRight className="h-4 w-4" />
                            </Link>
                        </p>
                    </section>

                    <section id="timeline" className="scroll-mt-28 border-b border-gray-100 py-12 dark:border-gray-800">
                        <SectionEyebrow>03 · Give each task a time</SectionEyebrow>
                        <h2 className="section-heading">Build a wedding timeline around your date</h2>
                        <p className="section-copy">
                            There is no single perfect wedding planning checklist or timeline. Work
                            backwards from your date, allowing more time for the things that need family
                            agreement, popular venues or specialist vendors.
                        </p>
                        <div className="mt-8 space-y-0">
                            {timeline.map((item, index) => (
                                <div key={item.period} className="relative grid grid-cols-[42px_1fr] gap-4 pb-8 last:pb-0">
                                    {index < timeline.length - 1 && <span className="absolute left-5 top-10 h-[calc(100%-24px)] w-px bg-gray-200 dark:bg-gray-700" />}
                                    <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300">
                                        <CalendarDays className="h-4 w-4" />
                                    </span>
                                    <div className="pt-1">
                                        <h3 className="text-sm font-black text-gray-900 dark:text-white">{item.period}</h3>
                                        <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">{item.tasks}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="mt-6">
                            <Link to="/product/planning" className="inline-flex items-center gap-2 text-sm font-black text-primary-700 hover:text-primary-600 dark:text-primary-400">
                                See AriyaHQ planning tools <ArrowRight className="h-4 w-4" />
                            </Link>
                        </p>
                    </section>

                    <section id="ceremonies" className="scroll-mt-28 border-b border-gray-100 py-12 dark:border-gray-800">
                        <SectionEyebrow>04 · Coordinate the ceremonies</SectionEyebrow>
                        <h2 className="section-heading">Plan traditional and white wedding celebrations</h2>
                        <p className="section-copy">
                            Many couples plan a traditional ceremony, a white wedding, or both. Treat each
                            ceremony as its own set of conversations and practical arrangements, while
                            keeping one view of the overall budget and calendar.
                        </p>
                        <div className="mt-7 grid gap-5 md:grid-cols-2">
                            <div className="rounded-3xl border border-gray-100 bg-[#fbf8f4] p-6 dark:border-gray-800 dark:bg-gray-900">
                                <span className="text-[10px] font-black uppercase tracking-[0.18em] text-primary-600">Traditional celebration</span>
                                <h3 className="mt-3 text-xl font-black">Make space for your families’ customs</h3>
                                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                                    Speak with both families and trusted community representatives about
                                    introductions, agreed requirements, roles, attire, timing, food and
                                    other arrangements. Traditions are not interchangeable; confirm what
                                    applies to your families rather than relying on a generic checklist.
                                </p>
                            </div>
                            <div className="rounded-3xl border border-gray-100 bg-[#fbf8f4] p-6 dark:border-gray-800 dark:bg-gray-900">
                                <span className="text-[10px] font-black uppercase tracking-[0.18em] text-primary-600">White wedding</span>
                                <h3 className="mt-3 text-xl font-black">Confirm ceremony and reception details</h3>
                                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                                    If you are holding a church or other religious ceremony, ask the relevant
                                    institution about its own preparation, documents and scheduling. Plan
                                    the ceremony, reception, wedding party, outfits, transport and guest
                                    movement around the requirements you confirm.
                                </p>
                            </div>
                        </div>
                        <p className="section-copy mt-6">
                            If you are holding multiple celebrations, consider travel time, guest needs,
                            vendor availability and how much space you want between events.
                        </p>
                    </section>

                    <section className="border-b border-gray-100 py-12 dark:border-gray-800">
                        <SectionEyebrow>05 · Choose a place that fits</SectionEyebrow>
                        <h2 className="section-heading">Shortlist venues with the guest experience in mind</h2>
                        <p className="section-copy">
                            A venue affects your costs, schedule, decoration and how easily guests can
                            attend. Visit the space where possible, and ask for a written breakdown before
                            paying a deposit.
                        </p>
                        <div className="mt-7 grid gap-3 sm:grid-cols-2">
                            {[
                                ['Location', 'Consider routes, traffic, accessibility and nearby accommodation.'],
                                ['Capacity', 'Check the comfortable seated and standing capacity for your format.'],
                                ['Facilities', 'Ask about restrooms, power, ventilation, parking and security.'],
                                ['Supplier rules', 'Confirm which caterers, decorators and equipment providers are allowed.'],
                                ['Weather plan', 'For outdoor spaces, agree on a workable rain or heat contingency.'],
                                ['Full cost', 'Ask about setup time, cleaning, overtime, deposits and cancellation terms.'],
                            ].map(([label, detail]) => (
                                <div key={label} className="rounded-2xl border border-gray-100 p-4 dark:border-gray-800">
                                    <h3 className="text-sm font-black">{label}</h3>
                                    <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-400">{detail}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section id="vendors" className="scroll-mt-28 border-b border-gray-100 py-12 dark:border-gray-800">
                        <SectionEyebrow>06 · Build a reliable team</SectionEyebrow>
                        <h2 className="section-heading">Find wedding vendors who fit your plans</h2>
                        <p className="section-copy">
                            Depending on the wedding, you might need a planner or coordinator, caterer,
                            photographer, videographer, decorator, makeup artist, fashion designer, MC, DJ
                            or band, cake designer, rentals or transport. You do not need to hire every type
                            of supplier—start with the services that matter for your celebration.
                        </p>
                        <div className="mt-7 rounded-3xl bg-gray-950 p-6 text-white dark:bg-gray-900 md:p-8">
                            <h3 className="text-lg font-black">Before you book, take time to:</h3>
                            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                                {[
                                    'Review relevant examples of their work.',
                                    'Check availability for your date and location.',
                                    'Request a clear quote and list of exclusions.',
                                    'Discuss deliverables and setup or delivery times.',
                                    'Read the agreement and cancellation terms.',
                                    'Keep payment records and decisions in writing.',
                                ].map(item => (
                                    <li key={item} className="flex gap-3 text-sm leading-6 text-gray-300">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-orange-300" />{item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p className="mt-6">
                            <Link to="/product/marketplace" className="inline-flex items-center gap-2 text-sm font-black text-primary-700 hover:text-primary-600 dark:text-primary-400">
                                Explore AriyaHQ’s vendor marketplace <ArrowRight className="h-4 w-4" />
                            </Link>
                        </p>
                    </section>

                    <section id="guests" className="scroll-mt-28 border-b border-gray-100 py-12 dark:border-gray-800">
                        <SectionEyebrow>07 · Make guest details easier to manage</SectionEyebrow>
                        <h2 className="section-heading">Keep your guest list and event information organised</h2>
                        <p className="section-copy">
                            Guest numbers can grow quickly when families, friends, colleagues and
                            community members are part of the celebration. Agree on an initial estimate
                            and how invitations will be allocated, then keep updates in one current record.
                        </p>
                        <div className="mt-7 grid gap-3 sm:grid-cols-2">
                            {[
                                'Record guest names and the contact details you need.',
                                'Track who has been invited and who has responded.',
                                'Keep important dietary or access notes appropriately.',
                                'Use confirmed attendance to guide seating and catering.',
                                'Share directions, timing and updates consistently.',
                                'Limit access to personal guest information to those who need it.',
                            ].map(item => (
                                <div key={item} className="flex gap-3 rounded-2xl bg-[#fbf8f4] p-4 dark:bg-gray-900">
                                    <Users className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
                                    <span className="text-sm leading-6 text-gray-600 dark:text-gray-300">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="section-copy mt-6">
                            A wedding website can give guests one place to find the details you choose to
                            share. Confirm what information is public and avoid publishing sensitive guest
                            details.
                        </p>
                        <p className="mt-6">
                            <Link to="/product/websites" className="inline-flex items-center gap-2 text-sm font-black text-primary-700 hover:text-primary-600 dark:text-primary-400">
                                Explore AriyaHQ event websites <ArrowRight className="h-4 w-4" />
                            </Link>
                        </p>
                        <p className="mt-4">
                            <Link to="/wedding-rsvp-guest-management" className="inline-flex items-center gap-2 text-sm font-black text-primary-700 hover:text-primary-600 dark:text-primary-400">
                                Wedding RSVP and guest management guide <ArrowRight className="h-4 w-4" />
                            </Link>
                        </p>
                    </section>

                    <section className="border-b border-gray-100 py-12 dark:border-gray-800">
                        <SectionEyebrow>08 · Prepare the day itself</SectionEyebrow>
                        <h2 className="section-heading">Give the wedding day a clear running order</h2>
                        <p className="section-copy">
                            Your programme should fit your ceremony and priorities, not a template.
                            Write down the order, approximate times, locations and the person responsible
                            for each handover. Share the latest version with your coordinator, MC, vendors
                            and key family contacts.
                        </p>
                        <div className="mt-7 flex flex-wrap gap-2">
                            {['Guest arrival', 'Ceremony', 'Couple and family photos', 'Reception entrance', 'Food and speeches', 'Celebration and close'].map((item, index) => (
                                <span key={item} className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-xs font-bold text-gray-600 dark:border-gray-700 dark:text-gray-300">
                                    <span className="text-primary-600">{String(index + 1).padStart(2, '0')}</span>{item}
                                </span>
                            ))}
                        </div>
                        <p className="section-copy mt-6">
                            Include realistic transitions, vendor setup and a named contact for unexpected
                            issues. You and your partner should not have to answer every logistics question
                            during the celebration.
                        </p>
                    </section>

                    <section className="border-b border-gray-100 py-12 dark:border-gray-800">
                        <SectionEyebrow>09 · Leave room for the unexpected</SectionEyebrow>
                        <h2 className="section-heading">Make a simple backup plan</h2>
                        <p className="section-copy">
                            A supplier may be delayed, the weather may change or attendance may differ
                            from your estimate. Keep essential contacts accessible, confirm agreements,
                            appoint someone you trust to handle day-of questions, and decide in advance
                            which changes they can approve.
                        </p>
                    </section>

                    <section className="border-b border-gray-100 py-12 dark:border-gray-800">
                        <SectionEyebrow>10 · Use tools that suit your process</SectionEyebrow>
                        <h2 className="section-heading">Keep the moving parts connected</h2>
                        <p className="section-copy">
                            When budget notes, guest updates, supplier contacts and schedules live in
                            different places, it can be harder to know what is current. Choose a simple
                            system your planning team will actually update.
                        </p>
                        <div className="mt-7 grid gap-4 sm:grid-cols-2">
                            {planningTools.map(({ icon: Icon, title, text, href, link }) => (
                                <div key={title} className="rounded-3xl border border-gray-100 p-5 dark:border-gray-800">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300">
                                        <Icon className="h-5 w-5" />
                                    </span>
                                    <h3 className="mt-4 font-black">{title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">{text}</p>
                                    <Link to={href} className="mt-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-wide text-primary-700 hover:text-primary-600 dark:text-primary-400">
                                        {link} <ArrowRight className="h-3.5 w-3.5" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section id="checklist" className="scroll-mt-28 py-12">
                        <SectionEyebrow>11 · Your practical wedding checklist</SectionEyebrow>
                        <h2 className="section-heading">A Nigerian wedding planning checklist to get started</h2>
                        <p className="section-copy">
                            Use these steps as a starting point, then adjust them to your date, families,
                            ceremonies and priorities.
                        </p>
                        <ul className="mt-7 space-y-3">
                            {weddingChecklist.map((item, index) => (
                                <li key={item} className="flex items-start gap-3 rounded-2xl border border-gray-100 p-4 dark:border-gray-800">
                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-50 text-xs font-black text-primary-700 dark:bg-primary-900/30 dark:text-primary-300">{index + 1}</span>
                                    <span className="pt-0.5 text-sm leading-6 text-gray-600 dark:text-gray-300">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="border-t border-gray-100 py-12 dark:border-gray-800">
                        <SectionEyebrow>Common questions</SectionEyebrow>
                        <h2 className="section-heading">Wedding planning in Nigeria: FAQs</h2>
                        <div className="mt-7 divide-y divide-gray-100 dark:divide-gray-800">
                            {weddingPlanningFaqs.map(({ question, answer }) => (
                                <details key={question} className="group py-5">
                                    <summary className="cursor-pointer list-none pr-6 text-base font-black marker:hidden">
                                        {question}
                                    </summary>
                                    <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">{answer}</p>
                                </details>
                            ))}
                        </div>
                    </section>
                </article>
            </div>

            <section className="bg-gray-950 px-6 py-20 text-white dark:bg-black md:px-10 md:py-24">
                <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                    <div className="max-w-2xl">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-300">Your celebration, your way</span>
                        <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Ready to bring your plans together?</h2>
                        <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
                            Explore AriyaHQ’s event planning tools and decide which ones fit your wedding.
                        </p>
                    </div>
                    <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                        <a href={APP_LINKS.signup} className="inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-600 px-3 py-4 text-[10px] font-black uppercase tracking-widest text-white transition hover:bg-primary-500 sm:w-auto sm:px-7 sm:text-xs">
                            Get started <ArrowRight className="h-4 w-4" />
                        </a>
                        <Link to="/product/overview" className="inline-flex min-h-12 w-full items-center justify-center whitespace-nowrap rounded-full border border-white/20 px-3 py-4 text-[10px] font-black uppercase tracking-widest text-white transition hover:bg-white/10 sm:w-auto sm:px-7 sm:text-xs">
                            Explore the platform
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
    return <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">{children}</p>;
}
