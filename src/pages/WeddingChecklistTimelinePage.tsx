import { Link } from 'react-router-dom';
import {
    ArrowRight,
    CalendarDays,
    Check,
    ClipboardCheck,
    Download,
    Heart,
    Printer,
} from 'lucide-react';
import { APP_LINKS } from '../config/links';
import { EVENT_IMAGES } from '../config/eventImages';
import { trackEvent } from '../analytics/analytics';
import { weddingChecklistTimelineFaqs } from '../seo/wedding-checklist-timeline-content';

const essentials = [
    'Agree on a date or preferred dates and the wedding format.',
    'Set a total budget and confirm contributions.',
    'Estimate guest numbers and event-specific guest lists.',
    'Confirm ceremony and family requirements.',
    'Choose a location and book a suitable venue.',
    'Research and confirm priority vendors.',
    'Plan attire, invitations, transport and accommodation.',
    'Track RSVPs, payments, schedules and important contacts.',
    'Reconfirm final arrangements and delegate wedding-day duties.',
    'Set aside a contingency and make a backup plan.',
];

const planningStages = [
    {
        title: '12 months before: Set the foundation',
        tasks: [
            'Discuss possible dates, ceremony formats, priorities and the overall wedding vision.',
            'Agree on the available budget, confirmed contributions and a contingency reserve.',
            'Estimate the guest count and discuss guest-list allocations with both families.',
            'Decide which ceremonies or events you are organising and whether they will share a date.',
            'Identify cultural, religious or statutory requirements and who can confirm them.',
            'Choose family representatives or other people who will support planning.',
        ],
    },
    {
        title: '10–11 months before: Secure major bookings',
        tasks: [
            'Research venues and book a suitable option after confirming capacity and terms.',
            'Hire a planner or coordinator if you need one and book priority vendors early.',
            'Contact the relevant officiant, religious institution or registry about its process.',
            'Request written quotations, payment schedules and cancellation or postponement terms.',
            'Identify travel, transport or accommodation needs for important guests.',
            'Keep vendor contracts, receipts and contacts together.',
        ],
    },
    {
        title: '8–9 months before: Establish the wedding style',
        tasks: [
            'Choose a colour palette, style and decoration direction with your key vendors.',
            'Begin planning traditional and white-wedding outfits, fittings and accessories.',
            'If having Aso-Ebi, compare fabrics, inspect samples and confirm supplier availability.',
            'Discuss Aso-Ebi groups, package details, price and order deadlines before sharing them.',
            'Confirm traditional marriage preparations and obtain the relevant family engagement list.',
            'Review cultural details with the families involved rather than assuming one standard practice.',
        ],
    },
    {
        title: '6–7 months before: Build the guest experience',
        tasks: [
            'Develop the guest list and identify who is invited to each event.',
            'Confirm priority vendor agreements, deliverables and payment dates.',
            'Discuss accommodation and transport for guests travelling from other areas.',
            'Prepare a working programme for each ceremony and reception.',
            'Choose how to share event information and collect guest responses.',
            'Discuss food, drinks, venue layout and event styling with the relevant vendors.',
        ],
    },
    {
        title: '4–5 months before: Prepare invitations and logistics',
        tasks: [
            'Prepare invitations with verified dates, addresses and event details.',
            'Create a wedding website or central information page if useful for your guests.',
            'Confirm vendor setup requirements, venue access and other logistics.',
            'Review outfit progress, Aso-Ebi orders and delivery arrangements.',
            'Share important information with family representatives and the planning team.',
            'Review the budget against written quotations and confirmed contributions.',
        ],
    },
    {
        title: '2–3 months before: Finalise the main arrangements',
        tasks: [
            'Send invitations, request responses and keep the guest list up to date.',
            'Review traditional engagement requirements and confirm ceremony arrangements with both families.',
            'Confirm the white-wedding venue, officiant, bridal party and ceremony details where applicable.',
            'Finalise food, drinks, entertainment, cake, security, ushers and guest logistics.',
            'Confirm transport, parking and accommodation arrangements.',
            'Record special guest needs and outstanding vendor payments.',
        ],
    },
    {
        title: '1 month before: Review and confirm',
        tasks: [
            'Contact each vendor to confirm services, deliverables, arrival times and balances.',
            'Review RSVPs, follow up politely and prepare an updated guest count.',
            'Confirm seating, catering numbers and assistance for guests who need it.',
            'Complete outfit fittings and check shoes, accessories and alterations.',
            'Share the wedding-day schedule with the MC, family representatives and coordinator.',
            'Walk through the venue and confirm power, security, parking and weather plans.',
        ],
    },
    {
        title: '2 weeks before: Lock down details',
        tasks: [
            'Reconfirm vendor arrival, setup access, contacts and payment arrangements.',
            'Review the latest RSVP list, seating plan and transport details.',
            'Count ceremony items and check outfits, rings and other important belongings.',
            'Brief ushers, family representatives, the wedding party and coordinator.',
            'Share the final programme and contact list with the people responsible for execution.',
        ],
    },
    {
        title: '1 week before: Prepare to hand over',
        tasks: [
            'Reconfirm vendors, the venue layout, final catering numbers and backup power.',
            'Collect outfits and pack accessories and personal items for each event.',
            'Send guests final directions and reminders where needed.',
            'Review outstanding payments and keep receipts and agreed balances recorded.',
            'Allow time to rest and let the coordinator handle last-minute logistics.',
        ],
    },
    {
        title: 'Wedding day and after: Celebrate and close out',
        tasks: [
            'Follow the schedule while allowing realistic time for preparation, travel and photographs.',
            'Let the appointed coordinator manage vendor questions and programme changes.',
            'Keep important documents and personal belongings with the assigned person.',
            'After the event, collect gifts and personal items and review outstanding agreements.',
            'Follow up with vendors about photographs, video and other outstanding deliverables.',
            'Thank the people who supported your celebration and keep important records together.',
        ],
    },
];

const shortTimeline = [
    ['About 6 months', 'Agree date and budget, estimate guests, book venue and priority vendors, begin attire and ceremony planning.'],
    ['About 4–5 months', 'Complete the guest list, decide the design direction, prepare invitations, discuss catering and transport.'],
    ['About 2–3 months', 'Confirm agreements, distribute invitations, track RSVPs, progress fittings and finalise the programme.'],
    ['About 1 month', 'Reconfirm vendors, guest numbers, transport, schedule, contacts and contingency arrangements.'],
];

const finalWeekChecklist = [
    'Reconfirm vendor arrival, setup and contact details.',
    'Confirm venue access and weather or power backups.',
    'Review final attendance and agreed catering numbers.',
    'Collect attire, accessories, rings and important documents.',
    'Share the final running order and contact sheet.',
    'Delegate vendor, guest, transport and family questions.',
    'Charge phones and prepare personal essentials.',
    'Rest and allow the coordinator to handle logistics.',
];

const eventDayBlocks = [
    {
        title: 'Before the ceremony',
        tasks: 'Allow time for preparation, food, hydration, outfit checks, transport, bridal party coordination and photographs.',
    },
    {
        title: 'During the ceremony',
        tasks: 'Confirm the officiating team, key family members, programme handovers and positions for photographers and videographers.',
    },
    {
        title: 'During the reception',
        tasks: 'Follow the agreed programme, confirm food service, speeches and performances, and keep time for photographs and guest interactions.',
    },
];

function trackChecklistCta(placement: 'hero' | 'closing') {
    trackEvent('wedding_checklist_cta_clicked', { placement });
}

function downloadWeddingChecklist() {
    const checklist = planningStages
        .map(({ title, tasks }) => `${title}\n${tasks.map((task) => `[ ] ${task}`).join('\n')}`)
        .join('\n\n');
    const file = new Blob([`Nigerian Wedding Planning Checklist\n\n${checklist}\n`], {
        type: 'text/plain;charset=utf-8',
    });
    const url = URL.createObjectURL(file);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'nigerian-wedding-planning-checklist.txt';
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export default function WeddingChecklistTimelinePage() {
    return (
        <main className="wedding-checklist-page bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
            <section className="relative isolate overflow-hidden bg-gray-950 pt-24 text-white">
                <img
                    src={EVENT_IMAGES.coupleWalking}
                    alt="Nigerian couple walking together at their wedding"
                    fetchPriority="high"
                    className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-45"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-950/95 via-gray-950/80 to-gray-950/45" />
                <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-16">
                    <div className="max-w-3xl">
                        <nav aria-label="Breadcrumb" className="mb-6 text-xs font-bold text-white/65">
                            <Link to="/" className="transition hover:text-white">Home</Link>
                            <span className="mx-2" aria-hidden="true">/</span>
                            <span aria-current="page" className="text-white">Wedding checklist and timeline</span>
                        </nav>
                        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-orange-200 backdrop-blur">
                            <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                            A practical plan for each stage
                        </span>
                        <h1 className="text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
                            The Complete Nigerian Wedding Planning Checklist and Timeline
                        </h1>
                        <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
                            Break wedding planning into manageable stages—from the budget and
                            venue to vendors, invitations, guest responses and the final week.
                            Adjust the checklist to your dates, family customs and celebration.
                        </p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <a
                                href={APP_LINKS.signup}
                                onClick={() => trackChecklistCta('hero')}
                                className="inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-600 px-3 py-4 text-xs font-black uppercase tracking-widest text-white transition hover:bg-primary-500 sm:w-auto sm:px-7"
                            >
                                Start planning <ArrowRight className="h-4 w-4 shrink-0" />
                            </a>
                            <a
                                href="#timeline"
                                className="inline-flex min-h-12 w-full items-center justify-center whitespace-nowrap rounded-full border border-white/30 bg-white/5 px-3 py-4 text-xs font-black uppercase tracking-widest text-white transition hover:bg-white/15 sm:w-auto sm:px-7"
                            >
                                Explore the timeline
                            </a>
                        </div>
                        <p className="mt-5 text-xs font-medium text-white/65">
                            Timelines are planning guides, not fixed rules. Availability and
                            ceremony requirements vary.
                        </p>
                    </div>
                    <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-md sm:p-8">
                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-300/15 text-orange-200">
                                <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-200">Start with the essentials</p>
                                <h2 className="mt-1 text-xl font-black">Set dates, priorities and a budget.</h2>
                            </div>
                        </div>
                        <p className="mt-5 text-sm leading-6 text-white/75">
                            Your first decisions guide the venue, guest list, vendors and
                            arrangements that follow.
                        </p>
                        <div className="mt-6 grid grid-cols-2 gap-3">
                            <div className="rounded-2xl bg-black/20 p-4">
                                <span className="text-[10px] font-black uppercase tracking-widest text-white/55">Plan in stages</span>
                                <p className="mt-2 text-sm font-bold">One decision at a time</p>
                            </div>
                            <div className="rounded-2xl bg-black/20 p-4">
                                <span className="text-[10px] font-black uppercase tracking-widest text-white/55">Stay flexible</span>
                                <p className="mt-2 text-sm font-bold">Fit your own dates</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <nav aria-label="On this page" className="border-b border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-950">
                <div className="mx-auto flex max-w-7xl flex-wrap gap-x-6 gap-y-3 px-6 py-5 text-xs font-bold text-gray-600 dark:text-gray-300 md:px-10 lg:px-16">
                    <a className="hover:text-primary-600" href="#how-long">How long it takes</a>
                    <a className="hover:text-primary-600" href="#at-a-glance">Checklist overview</a>
                    <a className="hover:text-primary-600" href="#timeline">12-month timeline</a>
                    <a className="hover:text-primary-600" href="#short-timeline">Shorter timeline</a>
                    <a className="hover:text-primary-600" href="#final-week">Final week</a>
                    <a className="hover:text-primary-600" href="#faqs">FAQs</a>
                </div>
            </nav>

            <section id="how-long" className="scroll-mt-24 px-6 py-16 md:px-10 md:py-24 lg:px-16">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Choose a useful planning window</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">How long does it take to plan a wedding in Nigeria?</h2>
                    </div>
                    <div className="space-y-5 leading-7 text-gray-600 dark:text-gray-300">
                        <p>
                            A 9–12 month timeline can give couples more room to coordinate a
                            large celebration, popular venues or multiple wedding events. It is
                            not a requirement for every wedding: a smaller event may be organised
                            in three to six months, and a simple ceremony may need less time.
                        </p>
                        <p>
                            Your schedule depends on the number of guests, budget, ceremony
                            requirements, whether events happen on one date or several, venue and
                            vendor availability, family involvement and how much planning you
                            will handle yourself.
                        </p>
                        <p>
                            Use the stages below as a framework. Move tasks earlier if they depend
                            on other people, travel, custom outfits or official requirements.
                            Confirm ceremony details directly with the relevant family
                            representatives, religious institution or registry.
                        </p>
                    </div>
                </div>
            </section>

            <section id="at-a-glance" className="scroll-mt-24 bg-[#fbf8f4] px-6 py-16 dark:bg-gray-900/60 md:px-10 md:py-20 lg:px-16">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-3xl">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">The major decisions</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Your Nigerian wedding checklist at a glance</h2>
                        <div className="wedding-checklist-print-controls mt-6 flex flex-wrap gap-3">
                            <button
                                type="button"
                                onClick={downloadWeddingChecklist}
                                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-primary-600 px-5 text-sm font-bold text-white transition hover:bg-primary-500"
                            >
                                <Download className="h-4 w-4" aria-hidden="true" />
                                Download full checklist
                            </button>
                            <button
                                type="button"
                                onClick={() => window.print()}
                                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-gray-200 px-5 text-sm font-bold text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
                            >
                                <Printer className="h-4 w-4" aria-hidden="true" />
                                Print checklist
                            </button>
                        </div>
                    </div>
                    <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {essentials.map((item) => (
                            <li key={item} className="flex gap-3 rounded-2xl border border-gray-100 bg-white p-4 text-sm leading-6 text-gray-700 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-300">
                                <Check className="mt-1 h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-8 flex flex-wrap gap-5">
                        <Link to="/wedding-budget" className="inline-flex items-center gap-2 text-sm font-black text-primary-700 hover:text-primary-600 dark:text-primary-300">
                            Create a Nigerian wedding budget <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link to="/wedding-rsvp-guest-management" className="inline-flex items-center gap-2 text-sm font-black text-primary-700 hover:text-primary-600 dark:text-primary-300">
                            Organise wedding RSVPs <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link to="/aso-ebi-in-nigeria" className="inline-flex items-center gap-2 text-sm font-black text-primary-700 hover:text-primary-600 dark:text-primary-300">
                            Plan Aso-Ebi orders <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            <section id="timeline" className="scroll-mt-24 px-6 py-16 md:px-10 md:py-24 lg:px-16">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-3xl">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">A flexible 12-month framework</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Wedding planning timeline: what to do and when</h2>
                        <p className="mt-5 leading-7 text-gray-600 dark:text-gray-300">
                            Tasks may overlap and some couples will need to start earlier. Focus
                            first on decisions that affect later bookings and coordination.
                        </p>
                    </div>
                    <ol className="mt-10 space-y-5">
                        {planningStages.map(({ title, tasks }, index) => (
                            <li key={title} className="grid gap-5 rounded-3xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900 md:grid-cols-[0.42fr_0.58fr] md:p-8">
                                <div className="flex items-start gap-4">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-sm font-black text-white">{String(index + 1).padStart(2, '0')}</span>
                                    <h3 className="pt-1 text-lg font-black">{title}</h3>
                                </div>
                                <ul className="space-y-3">
                                    {tasks.map((task) => (
                                        <li key={task} className="flex gap-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                                            <Check className="mt-1 h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
                                            <span>{task}</span>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <section id="short-timeline" className="scroll-mt-24 bg-gray-950 px-6 py-16 text-white dark:bg-black md:px-10 md:py-24 lg:px-16">
                <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-300">A shorter planning window</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">What if you have only 3–6 months?</h2>
                        <p className="mt-5 leading-7 text-gray-300">
                            A shorter timeline may be workable, depending on the event size,
                            availability and requirements. Prioritise the venue, essential
                            suppliers and ceremony needs, and avoid spending time on details that
                            do not matter to your plans.
                        </p>
                    </div>
                    <div className="space-y-4">
                        {shortTimeline.map(([period, tasks]) => (
                            <article key={period} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
                                <h3 className="font-black text-orange-200">{period}</h3>
                                <p className="mt-2 text-sm leading-6 text-gray-300">{tasks}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="final-week" className="scroll-mt-24 px-6 py-16 md:px-10 md:py-24 lg:px-16">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Confirm, then hand over</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Final week wedding checklist</h2>
                        <p className="mt-5 leading-7 text-gray-600 dark:text-gray-300">
                            The last week is for reconfirming the arrangements, not introducing
                            avoidable changes. Give the final schedule to the people who will
                            coordinate the day and make time to rest.
                        </p>
                        <ul className="mt-7 space-y-3">
                            {finalWeekChecklist.map((item) => (
                                <li key={item} className="flex gap-3 text-sm leading-6 text-gray-700 dark:text-gray-300">
                                    <Check className="mt-1 h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-4">
                        {eventDayBlocks.map(({ title, tasks }) => (
                            <article key={title} className="rounded-3xl border border-gray-100 bg-[#fbf8f4] p-6 dark:border-gray-800 dark:bg-gray-900">
                                <h3 className="text-lg font-black">{title}</h3>
                                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">{tasks}</p>
                            </article>
                        ))}
                        <p className="rounded-2xl border-l-4 border-primary-500 bg-white p-5 text-sm leading-6 text-gray-600 dark:bg-gray-900 dark:text-gray-300">
                            Not everything will happen exactly as planned. Focus on the important
                            moments and let your coordinator handle minor changes.
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-y border-gray-100 bg-[#fbf8f4] px-6 py-16 dark:border-gray-800 dark:bg-gray-900/60 md:px-10 md:py-24 lg:px-16">
                <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
                    <article className="rounded-[2rem] border border-gray-100 bg-white p-7 dark:border-gray-800 dark:bg-gray-950 sm:p-9">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-600/10 text-primary-700 dark:text-primary-300">
                            <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <h2 className="mt-5 text-2xl font-black tracking-tight">After the wedding</h2>
                        <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                            Within the first week, collect belongings from the venue, check that
                            gifts and cards are safe, settle any agreed balances and thank the
                            people who supported you. Follow up with vendors about outstanding
                            deliverables.
                        </p>
                        <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                            Over the following weeks, check on photographs and video, organise
                            important records, review any remaining financial obligations and
                            preserve keepsakes. Make room to enjoy your new chapter together.
                        </p>
                    </article>
                    <article className="rounded-[2rem] border border-gray-100 bg-white p-7 dark:border-gray-800 dark:bg-gray-950 sm:p-9">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-600/10 text-primary-700 dark:text-primary-300">
                            <Heart className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <h2 className="mt-5 text-2xl font-black tracking-tight">Plan the celebrations that are right for you</h2>
                        <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                            A checklist should make decisions easier, not add pressure. Adjust
                            tasks to your ceremony, budget, dates and family arrangements. Confirm
                            cultural and official requirements with the people or authorities
                            responsible.
                        </p>
                        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm font-black text-primary-700 dark:text-primary-300">
                            <Link className="hover:text-primary-600" to="/wedding-vendors-nigeria">Find wedding vendors</Link>
                            <Link className="hover:text-primary-600" to="/wedding-venues-nigeria">Choose a venue</Link>
                            <Link className="hover:text-primary-600" to="/nigerian-traditional-wedding">Plan a traditional wedding</Link>
                            <Link className="hover:text-primary-600" to="/aso-ebi-in-nigeria">Plan Aso-Ebi</Link>
                            <Link className="hover:text-primary-600" to="/wedding-rsvp-guest-management">Manage RSVPs</Link>
                        </div>
                    </article>
                </div>
            </section>

            <section id="faqs" className="scroll-mt-24 border-t border-gray-100 px-6 py-16 dark:border-gray-800 md:px-10 md:py-24 lg:px-16">
                <div className="mx-auto max-w-4xl">
                    <div className="text-center">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Helpful answers</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Wedding planning checklist FAQs</h2>
                    </div>
                    <div className="mt-10 divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800">
                        {weddingChecklistTimelineFaqs.map(({ question, answer }) => (
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
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-300">Stay organised, your way</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Take the next wedding planning step with confidence.</h2>
                        <p className="mt-4 text-sm leading-7 text-gray-300 sm:text-base">
                            Explore AriyaHQ planning tools and choose the workflow that fits your
                            wedding and the people helping you organise it.
                        </p>
                    </div>
                    <div className="flex w-full flex-col gap-4 sm:w-auto">
                        <a
                            href={APP_LINKS.signup}
                            onClick={() => trackChecklistCta('closing')}
                            className="inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-600 px-3 py-4 text-xs font-black uppercase tracking-widest text-white transition hover:bg-primary-500 sm:w-auto sm:px-7"
                        >
                            Explore AriyaHQ <ArrowRight className="h-4 w-4 shrink-0" />
                        </a>
                        <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-bold text-white/80">
                            <Link className="hover:text-white" to="/wedding-planning">Wedding planning in Nigeria</Link>
                            <Link className="hover:text-white" to="/wedding-budget">Wedding budget guide</Link>
                            <Link className="hover:text-white" to="/wedding-rsvp-guest-management">Wedding RSVP guide</Link>
                            <Link className="hover:text-white" to="/nigerian-traditional-wedding">Traditional wedding guide</Link>
                            <Link className="hover:text-white" to="/aso-ebi-in-nigeria">Aso-Ebi guide</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
