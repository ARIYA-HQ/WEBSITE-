import { Link } from 'react-router-dom';
import {
    ArrowRight,
    Check,
    ClipboardCheck,
    Heart,
    Search,
    ShieldCheck,
    Users,
} from 'lucide-react';
import { APP_LINKS } from '../config/links';
import { EVENT_IMAGES } from '../config/eventImages';
import { trackEvent } from '../analytics/analytics';
import { weddingVendorsNigeriaFaqs } from '../seo/wedding-vendors-nigeria-content';

const vendorCategories = [
    {
        title: 'Wedding planner or coordinator',
        text: 'Depending on the agreement, a planner may help with budgets, schedules, vendor communication, logistics or wedding-day coordination. Clarify whether you need full planning, partial support or day-of coordination.',
    },
    {
        title: 'Decorator and event stylist',
        text: 'Discuss the stage, backdrop, tables, floral styling, lighting and setup. Share your venue, theme and budget, and confirm what materials, labour and dismantling are included.',
    },
    {
        title: 'Photographer and videographer',
        text: 'Review complete examples of work and confirm coverage hours, team size, key moments, editing, delivery timeline, albums or films and backup equipment.',
    },
    {
        title: 'Caterer and drinks provider',
        text: 'Talk through the menu, guest estimate, serving style, tasting, staff, drinks, dietary needs, food handling and how final numbers or changes affect the quotation.',
    },
    {
        title: 'Makeup artist and hairstylist',
        text: 'Ask about trials, preparation time, travel, touch-ups, additional looks and services for the wedding party. Confirm who will provide each service and when they will arrive.',
    },
    {
        title: 'Fashion designer, tailor and accessories',
        text: 'Discuss fabrics, design approval, measurements, fittings, alterations, delivery dates and payment terms early, especially when outfits are custom-made.',
    },
    {
        title: 'Aso-Ebi suppliers and coordinators',
        text: 'Confirm fabric samples, quality, quantity, package details, order records, payment deadlines and collection or delivery arrangements before sharing options with guests.',
    },
    {
        title: 'Cake designer',
        text: 'Review designs and flavours, serving quantity, delivery, setup, display and storage requirements. Check that the cake plan matches your venue and schedule.',
    },
    {
        title: 'Entertainment and music',
        text: 'A DJ, live band, MC, traditional performers or other acts may suit your programme. Confirm set times, sound checks, equipment, music preferences and venue restrictions.',
    },
    {
        title: 'Invitation and stationery designer',
        text: 'You may need printed or digital invitations, programmes, signs, place cards or menus. Confirm wording, proofing, formats, print quantities and delivery deadlines.',
    },
    {
        title: 'Venue and rental providers',
        text: 'Check what the venue supplies and what must be rented separately, such as tables, chairs, tents, stage structures, generators, cooling or restroom facilities.',
    },
    {
        title: 'Transport and logistics providers',
        text: 'Depending on the event, you may need transport for the couple, family, wedding party, guests or vendors. Confirm vehicles, routes, pickup times, waiting periods and costs.',
    },
    {
        title: 'Other specialists',
        text: 'Florists, lighting and sound technicians, ushers, security, sanitation, souvenir suppliers, content creators or photobooth providers may be useful for some weddings. Hire only what your plans require.',
    },
];

const sourcingOptions = [
    ['Recommendations', 'Ask recently married couples, trusted family and friends about their experience. Evaluate each vendor independently before committing.'],
    ['Social media', 'Search by service and city, then review consistent examples of completed work rather than relying on follower counts alone.'],
    ['Wedding events', 'Exhibitions and bridal events may let you meet several professionals and discuss samples, services and availability.'],
    ['Directories and planning platforms', 'Use category and location information to discover options, then confirm current services and details directly with the vendor.'],
    ['Professional referrals', 'A planner or another vendor may suggest people they have worked with. Treat a referral as a starting point, not a substitute for your own checks.'],
];

const vendorEvaluation = [
    'Review a portfolio relevant to your venue, style and event size.',
    'Confirm the vendor is available for every date and location required.',
    'Request an itemised quotation and compare scope, exclusions and deliverables.',
    'Ask about team size, equipment, transport, setup and overtime.',
    'Check recent client feedback and request references where appropriate.',
    'Assess how clearly and promptly the vendor communicates.',
    'Read the written agreement, payment schedule and cancellation terms.',
    'Discuss backup plans if a key person, vehicle or piece of equipment is unavailable.',
];

const coordinationDetails = [
    'Vendor name, service category and primary contact.',
    'Availability and agreement status for each event date.',
    'Agreed services, deliverables, arrival and setup times.',
    'Venue access, loading, power and equipment requirements.',
    'Payment dates, outstanding balance and relevant agreement.',
    'The coordinator or family contact responsible for questions.',
];

const vendorMistakes = [
    'Choosing only by the lowest price without comparing scope and quality.',
    'Booking without reviewing relevant work or confirming the date.',
    'Paying or changing the agreement based only on verbal promises.',
    'Comparing headline prices while missing exclusions, travel or overtime.',
    'Delaying priority services until preferred vendors are unavailable.',
    'Leaving responsibilities, delivery times or venue logistics undefined.',
    'Failing to share a current schedule and a clear point of contact.',
];

function trackVendorCta(placement: 'hero' | 'closing') {
    trackEvent('wedding_vendors_cta_clicked', { placement });
}

export default function WeddingVendorsNigeriaPage() {
    return (
        <main className="bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
            <section className="relative isolate overflow-hidden bg-gray-950 pt-24 text-white">
                <img
                    src={EVENT_IMAGES.eventPlanner}
                    alt="Nigerian event planner reviewing wedding arrangements"
                    fetchPriority="high"
                    className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-45"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-950/95 via-gray-950/80 to-gray-950/45" />
                <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-16">
                    <div className="max-w-3xl">
                        <nav aria-label="Breadcrumb" className="mb-6 text-xs font-bold text-white/65">
                            <Link to="/" className="transition hover:text-white">Home</Link>
                            <span className="mx-2" aria-hidden="true">/</span>
                            <span aria-current="page" className="text-white">Wedding vendors in Nigeria</span>
                        </nav>
                        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-orange-200 backdrop-blur">
                            <Users className="h-3.5 w-3.5" aria-hidden="true" />
                            Build the right team for your day
                        </span>
                        <h1 className="text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
                            Wedding Vendors in Nigeria: How to Find and Choose the Right Vendors for Your Wedding
                        </h1>
                        <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
                            Discover the wedding professionals you may need, how to compare
                            quotations and what to confirm before hiring a team for your
                            traditional wedding, white wedding or celebration.
                        </p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <a
                                href={APP_LINKS.signup}
                                onClick={() => trackVendorCta('hero')}
                                className="inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-600 px-3 py-4 text-xs font-black uppercase tracking-widest text-white transition hover:bg-primary-500 sm:w-auto sm:px-7"
                            >
                                Explore wedding vendors <ArrowRight className="h-4 w-4 shrink-0" />
                            </a>
                            <a
                                href="#vendor-checklist"
                                className="inline-flex min-h-12 w-full items-center justify-center whitespace-nowrap rounded-full border border-white/30 bg-white/5 px-3 py-4 text-xs font-black uppercase tracking-widest text-white transition hover:bg-white/15 sm:w-auto sm:px-7"
                            >
                                Compare before booking
                            </a>
                        </div>
                        <p className="mt-5 text-xs font-medium text-white/65">
                            Vendor availability, services and fees vary. Confirm current details
                            directly before making a commitment.
                        </p>
                    </div>
                    <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-md sm:p-8">
                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-300/15 text-orange-200">
                                <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-200">Choose with clarity</p>
                                <h2 className="mt-1 text-xl font-black">Compare the service, not just the price.</h2>
                            </div>
                        </div>
                        <p className="mt-5 text-sm leading-6 text-white/75">
                            Start with your priorities, ask for written details and keep key
                            decisions easy for your planning team to find.
                        </p>
                        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                            <div className="rounded-2xl bg-black/20 p-4">
                                <span className="text-[10px] font-black uppercase tracking-widest text-white/55">Check the scope</span>
                                <p className="mt-2 text-sm font-bold">Deliverables in writing</p>
                            </div>
                            <div className="rounded-2xl bg-black/20 p-4">
                                <span className="text-[10px] font-black uppercase tracking-widest text-white/55">Plan together</span>
                                <p className="mt-2 text-sm font-bold">One current schedule</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <nav aria-label="On this page" className="border-b border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-950">
                <div className="mx-auto flex max-w-7xl flex-wrap gap-x-6 gap-y-3 px-6 py-5 text-xs font-bold text-gray-600 dark:text-gray-300 md:px-10 lg:px-16">
                    <a className="hover:text-primary-600" href="#what-are">What vendors do</a>
                    <a className="hover:text-primary-600" href="#vendor-types">Vendor types</a>
                    <a className="hover:text-primary-600" href="#find-vendors">Where to find them</a>
                    <a className="hover:text-primary-600" href="#vendor-checklist">How to compare</a>
                    <a className="hover:text-primary-600" href="#coordinate">Coordinate a team</a>
                    <a className="hover:text-primary-600" href="#faqs">FAQs</a>
                </div>
            </nav>

            <section id="what-are" className="scroll-mt-24 px-6 py-16 md:px-10 md:py-24 lg:px-16">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Support for the celebration</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">What are wedding vendors?</h2>
                    </div>
                    <div className="space-y-5 leading-7 text-gray-600 dark:text-gray-300">
                        <p>
                            Wedding vendors are professionals and businesses that provide services
                            or products for a wedding. Some work in the months before the event,
                            while others deliver or coordinate services at the venue on the day.
                        </p>
                        <p>
                            A wedding may involve a planner, caterer, photographer, decorator,
                            beauty team, entertainment providers and other specialists. The number
                            depends on the size, style, location and complexity of your plans.
                            An intimate ceremony may need only a few providers; multiple events
                            may need a larger team.
                        </p>
                        <p>
                            The aim is not to hire every type of professional. Decide which
                            responsibilities matter to you, what you can handle with trusted
                            support and where specialised experience would be useful.
                        </p>
                    </div>
                </div>
            </section>

            <section id="vendor-types" className="scroll-mt-24 bg-[#fbf8f4] px-6 py-16 dark:bg-gray-900/60 md:px-10 md:py-24 lg:px-16">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-3xl">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Choose what your wedding needs</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Wedding vendors you may need in Nigeria</h2>
                        <p className="mt-5 leading-7 text-gray-600 dark:text-gray-300">
                            Not every wedding needs the same team. Use these categories as a
                            starting point, then confirm what fits your celebration and budget.
                        </p>
                    </div>
                    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {vendorCategories.map(({ title, text }) => (
                            <article key={title} className="rounded-3xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
                                <h3 className="text-lg font-black">{title}</h3>
                                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">{text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="find-vendors" className="scroll-mt-24 px-6 py-16 md:px-10 md:py-24 lg:px-16">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
                    <div className="max-w-xl">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Research and verify</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">How to find wedding vendors in Nigeria</h2>
                        <p className="mt-5 leading-7 text-gray-600 dark:text-gray-300">
                            Use more than one source to build a shortlist. A recommendation or
                            online profile can help you discover a professional, but check
                            availability, work and written terms directly.
                        </p>
                        <Link
                            to="/product/marketplace"
                            className="mt-5 inline-flex items-center gap-2 text-sm font-black text-primary-700 hover:text-primary-600 dark:text-primary-300"
                        >
                            Explore AriyaHQ’s event vendor marketplace <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                    <div className="space-y-4">
                        {sourcingOptions.map(([title, text]) => (
                            <article key={title} className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-600/10 text-primary-700 dark:text-primary-300">
                                    <Search className="h-5 w-5" aria-hidden="true" />
                                </span>
                                <div>
                                    <h3 className="font-black">{title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">{text}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="vendor-checklist" className="scroll-mt-24 border-y border-gray-100 bg-gray-950 px-6 py-16 text-white dark:border-gray-800 dark:bg-black md:px-10 md:py-24 lg:px-16">
                <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
                    <div className="max-w-xl">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-300">Before you pay a deposit</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">How to choose the right wedding vendors</h2>
                        <p className="mt-5 leading-7 text-gray-300">
                            Evaluate how each professional fits your plans, budget, date and
                            expectations. The lowest quote is not automatically the best value;
                            compare the complete scope and practical arrangements.
                        </p>
                        <Link
                            to="/wedding-budget"
                            className="mt-6 inline-flex items-center gap-2 text-sm font-black text-orange-200 hover:text-white"
                        >
                            Plan your vendor budget <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                    <ul className="grid gap-3 sm:grid-cols-2">
                        {vendorEvaluation.map((item) => (
                            <li key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-sm leading-6 text-gray-200">
                                <Check className="mt-1 h-4 w-4 shrink-0 text-orange-300" aria-hidden="true" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="px-6 py-16 md:px-10 md:py-24 lg:px-16">
                <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
                    <article className="rounded-[2rem] border border-gray-100 bg-[#fbf8f4] p-7 dark:border-gray-800 dark:bg-gray-900/60 sm:p-9">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Understand the full quote</span>
                        <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">How much do wedding vendors cost in Nigeria?</h2>
                        <p className="mt-5 leading-7 text-gray-600 dark:text-gray-300">
                            There is no single price for wedding services. Costs can vary with
                            city, date, experience, guest count, service duration, team size,
                            materials, equipment, travel, customisation and the deliverables
                            included. A full-service planner and a day-of coordinator, for example,
                            provide different scopes of work.
                        </p>
                        <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                            Set your total budget first, list essential services, obtain current
                            itemised quotations and compare exclusions as well as inclusions.
                            Record deposits, balances and payment dates, and leave room for
                            expenses that are not yet confirmed.
                        </p>
                        <Link
                            to="/wedding-budget"
                            className="mt-5 inline-flex items-center gap-2 text-sm font-black text-primary-700 hover:text-primary-600 dark:text-primary-300"
                        >
                            Read the Nigerian wedding budget guide <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                            to="/aso-ebi-in-nigeria"
                            className="mt-4 inline-flex items-center gap-2 text-sm font-black text-primary-700 hover:text-primary-600 dark:text-primary-300"
                        >
                            Read the Aso-Ebi ordering guide <ArrowRight className="h-4 w-4" />
                        </Link>
                    </article>
                    <article className="rounded-[2rem] border border-gray-100 bg-white p-7 dark:border-gray-800 dark:bg-gray-900 sm:p-9">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-600/10 text-primary-700 dark:text-primary-300">
                            <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <h2 className="mt-5 text-2xl font-black tracking-tight">Questions to ask before hiring</h2>
                        <ul className="mt-5 space-y-3">
                            {[
                                'Are you available on each wedding date and at our location?',
                                'What is included, excluded and delivered, and by when?',
                                'Who will be on the team and who is our day-of contact?',
                                'Are travel, setup, equipment or overtime charged separately?',
                                'What are the deposit, payment, cancellation and rescheduling terms?',
                                'What happens if you or essential equipment cannot attend or work?',
                            ].map((item) => (
                                <li key={item} className="flex gap-3 text-sm leading-6 text-gray-700 dark:text-gray-300">
                                    <Check className="mt-1 h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                </div>
            </section>

            <section id="coordinate" className="scroll-mt-24 bg-[#fbf8f4] px-6 py-16 dark:bg-gray-900/60 md:px-10 md:py-24 lg:px-16">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Keep the team aligned</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">How to coordinate multiple wedding vendors</h2>
                        <p className="mt-5 leading-7 text-gray-600 dark:text-gray-300">
                            Even a strong vendor team needs clear handovers. Agree who coordinates
                            the schedule, who can make decisions on the day and where the latest
                            details can be found.
                        </p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {coordinationDetails.map((detail) => (
                            <div key={detail} className="flex gap-3 rounded-2xl border border-gray-100 bg-white p-5 text-sm leading-6 text-gray-700 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-300">
                                <ClipboardCheck className="mt-1 h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
                                <span>{detail}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-6 py-16 md:px-10 md:py-20 lg:px-16">
                <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
                    <article className="rounded-[2rem] border border-gray-100 bg-white p-7 dark:border-gray-800 dark:bg-gray-900 sm:p-9">
                        <h2 className="text-2xl font-black tracking-tight">Common wedding vendor mistakes to avoid</h2>
                        <ul className="mt-5 space-y-3">
                            {vendorMistakes.map((mistake) => (
                                <li key={mistake} className="flex gap-3 text-sm leading-6 text-gray-700 dark:text-gray-300">
                                    <Check className="mt-1 h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
                                    <span>{mistake}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                    <article className="rounded-[2rem] border border-gray-100 bg-[#fbf8f4] p-7 dark:border-gray-800 dark:bg-gray-900/60 sm:p-9">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-600/10 text-primary-700 dark:text-primary-300">
                            <Heart className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <h2 className="mt-5 text-2xl font-black tracking-tight">Build a vendor team around your priorities</h2>
                        <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                            A successful wedding is not about hiring the most expensive
                            professionals or the largest number of service providers. It is about
                            agreeing on what matters, finding people whose work and terms suit
                            those plans, and giving the team clear information.
                        </p>
                        <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                            For traditional and white wedding events, check whether a vendor can
                            cover both dates and whether the same scope applies. Coordinate the
                            venue, guest arrangements and schedule with the people responsible.
                        </p>
                        <Link
                            to="/wedding-planning"
                            className="mt-5 inline-flex items-center gap-2 text-sm font-black text-primary-700 hover:text-primary-600 dark:text-primary-300"
                        >
                            Read the wedding planning guide <ArrowRight className="h-4 w-4" />
                        </Link>
                    </article>
                </div>
            </section>

            <section id="faqs" className="scroll-mt-24 border-t border-gray-100 bg-[#fbf8f4] px-6 py-16 dark:border-gray-800 dark:bg-gray-900/60 md:px-10 md:py-24 lg:px-16">
                <div className="mx-auto max-w-4xl">
                    <div className="text-center">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Helpful answers</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Wedding vendor FAQs</h2>
                    </div>
                    <div className="mt-10 divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800">
                        {weddingVendorsNigeriaFaqs.map(({ question, answer }) => (
                            <details key={question} className="group py-5">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left font-bold marker:hidden">
                                    <span>{question}</span>
                                    <span className="text-xl text-primary-600 transition group-open:rotate-45" aria-hidden="true">+</span>
                                </summary>
                                <p className="max-w-3xl pt-4 text-sm leading-7 text-gray-600 dark:text-gray-300">{answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-gray-950 px-6 py-16 text-white dark:bg-black md:px-10 md:py-20 lg:px-16">
                <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                    <div className="max-w-2xl">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-300">Plan with a clear view</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Bring your wedding plans and vendor details together.</h2>
                        <p className="mt-4 text-sm leading-7 text-gray-300 sm:text-base">
                            Explore AriyaHQ’s planning and vendor tools, then confirm which
                            options fit the work you need to do.
                        </p>
                    </div>
                    <div className="flex w-full flex-col gap-4 sm:w-auto">
                        <a
                            href={APP_LINKS.signup}
                            onClick={() => trackVendorCta('closing')}
                            className="inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-600 px-3 py-4 text-xs font-black uppercase tracking-widest text-white transition hover:bg-primary-500 sm:w-auto sm:px-7"
                        >
                            Explore AriyaHQ <ArrowRight className="h-4 w-4 shrink-0" />
                        </a>
                        <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-bold text-white/80">
                            <Link className="hover:text-white" to="/wedding-planning">Wedding planning in Nigeria</Link>
                            <Link className="hover:text-white" to="/wedding-budget">Wedding budget guide</Link>
                            <Link className="hover:text-white" to="/wedding-venues-nigeria">Wedding venues in Nigeria</Link>
                            <Link className="hover:text-white" to="/wedding-checklist-timeline">Wedding checklist and timeline</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
