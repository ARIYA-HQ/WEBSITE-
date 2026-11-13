import { Link } from 'react-router-dom';
import { ArrowRight, Check, HeartHandshake, Shirt, Wallet } from 'lucide-react';
import { APP_LINKS } from '../config/links';
import { EVENT_IMAGES } from '../config/eventImages';
import { trackEvent } from '../analytics/analytics';

const fabrics = [
    {
        title: 'Aso-Oke',
        description: 'A handwoven Yoruba textile often chosen for traditional engagements, gele, ipele and special occasion outfits.',
    },
    {
        title: 'Lace',
        description: 'A popular choice for gowns, iro and buba, blouses and formal wedding outfits. Check the texture, weight, embroidery and comfort.',
    },
    {
        title: 'Ankara',
        description: 'Colourful printed fabric with many patterns and styles, used for both traditional and contemporary coordinated outfits.',
    },
    {
        title: 'George',
        description: 'A richly textured fabric used for traditional wrappers, blouses and occasion wear, including in some southeastern communities.',
    },
    {
        title: 'Brocade and damask',
        description: 'Decorative woven fabrics that can suit formal outfits. Compare the pattern, feel and finish of the actual material.',
    },
    {
        title: 'Swiss voile and embroidered fabrics',
        description: 'Lightweight or embellished options for occasion wear. Inspect samples because embroidery and fabric quality vary.',
    },
];

const orderSteps = [
    ['Choose and inspect the fabric', 'Select a supplier, request a physical sample and confirm that the colour, quality and quantity are available.'],
    ['Decide who the groups are', 'If useful, organise separate options for the couple’s families, friends or other groups. Make participation voluntary and expectations clear.'],
    ['Set the package and price', 'State the fabric description, quantity, included accessories, total cost, payment deadline and any delivery charge.'],
    ['Create one order record', 'Track each guest’s contact details, fabric choice, quantity, amount due, payment status and collection or delivery status.'],
    ['Distribute early and communicate', 'Set realistic order and collection dates, allow time for tailoring, and send clear updates if a supplier or delivery date changes.'],
];

const planningChecklist = [
    'Choose the fabric, colour and supplier.',
    'Inspect a sample and confirm availability.',
    'Decide who will be offered each fabric option.',
    'Write down what each package includes and its total price.',
    'Set order, payment, collection and delivery deadlines.',
    'Keep one current record of orders and payments.',
    'Share fabric details and tailoring guidance with guests.',
    'Arrange distribution and resolve outstanding orders early.',
    'Coordinate the dress code and group photographs.',
];

const faqs = [
    {
        question: 'What does Aso-Ebi mean?',
        answer: 'Aso-Ebi is a Yoruba expression commonly translated as “family cloth”. It describes coordinated dressing worn by relatives, friends or other groups to identify with a celebrant.',
    },
    {
        question: 'Is Aso-Ebi only for Yoruba weddings?',
        answer: 'The expression has Yoruba linguistic and cultural roots, while coordinated Aso-Ebi dressing is now practised at celebrations across Nigeria and among Nigerians in the diaspora.',
    },
    {
        question: 'What is the difference between Aso-Ebi and Aso-Oke?',
        answer: 'Aso-Ebi is the coordinated-dressing arrangement. Aso-Oke is a particular handwoven textile that can be chosen as Aso-Ebi fabric.',
    },
    {
        question: 'Who usually pays for Aso-Ebi?',
        answer: 'Arrangements vary. Guests often buy their own fabric, while hosts may provide it for selected family members or participants. Confirm what is included before ordering.',
    },
    {
        question: 'Is buying Aso-Ebi compulsory?',
        answer: 'There is no universal requirement for every guest to buy Aso-Ebi. Hosts should communicate the arrangement clearly and respect guests who choose not to participate.',
    },
    {
        question: 'How much does Aso-Ebi cost in Nigeria?',
        answer: 'There is no single reliable price. Cost depends on fabric type and quality, quantity, accessories, supplier, tailoring and delivery. Request a current quotation and confirm exactly what it covers.',
    },
    {
        question: 'How many yards of Aso-Ebi should I buy?',
        answer: 'The amount depends on the outfit, fabric width, measurements and design. Ask your tailor to confirm the quantity before you purchase.',
    },
    {
        question: 'Can men wear Aso-Ebi?',
        answer: 'Yes. Coordinated fabric can be styled into agbada, kaftans, senator outfits, traditional shirts and other designs.',
    },
    {
        question: 'Can guests outside Nigeria order Aso-Ebi?',
        answer: 'That depends on the host’s distribution arrangements. Ask whether international delivery is available, how long it may take and whether delivery charges are included.',
    },
];

const pageSections = [
    ['meaning', 'Meaning and significance'],
    ['fabrics', 'Popular fabrics'],
    ['difference', 'Aso-Ebi vs Aso-Oke'],
    ['choosing', 'Choosing a fabric'],
    ['cost', 'Costs and packages'],
    ['organising', 'Ordering and distribution'],
    ['outfits', 'Outfits and etiquette'],
    ['checklist', 'Planning checklist'],
];

function trackAsoEbiCta(placement: 'hero' | 'closing') {
    trackEvent('aso_ebi_guide_cta_clicked', { placement });
}

export default function AsoEbiNigeriaPage() {
    return (
        <main className="bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
            <section className="relative isolate overflow-hidden bg-gray-950 pt-24 text-white">
                <img
                    src={EVENT_IMAGES.pinkGeleCelebration}
                    alt="Guests in coordinated pink outfits celebrating at a Nigerian wedding"
                    fetchPriority="high"
                    className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-45"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-950/95 via-gray-950/80 to-gray-950/45" />
                <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24 lg:px-16">
                    <nav aria-label="Breadcrumb" className="mb-6 text-xs font-bold text-white/65">
                        <Link to="/" className="transition hover:text-white">Home</Link>
                        <span className="mx-2" aria-hidden="true">/</span>
                        <Link to="/nigerian-traditional-wedding" className="transition hover:text-white">Nigerian wedding guides</Link>
                        <span className="mx-2" aria-hidden="true">/</span>
                        <span aria-current="page" className="text-white">Aso-Ebi in Nigeria</span>
                    </nav>
                    <div className="max-w-3xl">
                        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-orange-200 backdrop-blur">
                            <HeartHandshake className="h-3.5 w-3.5" aria-hidden="true" />
                            Fabric, family and celebration
                        </span>
                        <h1 className="text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
                            Aso-Ebi in Nigeria: Meaning, Fabrics, Prices and Wedding Planning
                        </h1>
                        <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
                            Learn how Aso-Ebi works, compare popular fabric choices, organise group orders and help guests prepare without unclear costs or last-minute confusion.
                        </p>
                        <p className="mt-4 max-w-2xl text-xs leading-5 text-white/70">
                            Illustrative Nigerian wedding imagery. Fabric and outfit traditions vary by family and community.
                        </p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <a
                                href={APP_LINKS.signup}
                                onClick={() => trackAsoEbiCta('hero')}
                                className="inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-600 px-4 py-4 text-xs font-black uppercase tracking-widest text-white transition hover:bg-primary-500 sm:w-auto sm:px-7"
                            >
                                Start planning <ArrowRight className="h-4 w-4 shrink-0" />
                            </a>
                            <a
                                href="#guide-content"
                                className="inline-flex min-h-12 w-full items-center justify-center whitespace-nowrap rounded-full border border-white/30 bg-white/5 px-4 py-4 text-xs font-black uppercase tracking-widest text-white transition hover:bg-white/15 sm:w-auto sm:px-7"
                            >
                                Explore the guide
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <nav aria-label="On this page" className="border-b border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-950">
                <div className="mx-auto flex max-w-7xl flex-wrap gap-x-6 gap-y-3 px-6 py-5 text-xs font-bold text-gray-600 dark:text-gray-300 md:px-10 lg:px-16">
                    {pageSections.map(([id, title]) => (
                        <a key={id} className="hover:text-primary-600" href={`#${id}`}>{title}</a>
                    ))}
                    <a className="hover:text-primary-600" href="#faqs">FAQs</a>
                </div>
            </nav>

            <div id="guide-content">
                <section id="meaning" className="scroll-mt-24 px-6 py-14 md:px-10 md:py-20 lg:px-16">
                    <div className="mx-auto grid min-w-0 max-w-7xl gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">A shared expression of support</span>
                            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">What is Aso-Ebi?</h2>
                        </div>
                        <article className="rounded-3xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-950 sm:p-8">
                            <p className="text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-base">
                                Aso-Ebi combines the Yoruba words <em>aṣọ</em> (cloth) and <em>ẹbí</em> (family), and is commonly translated as “family cloth”. It traditionally describes coordinated clothing worn by a family or social group to show belonging and support at an important occasion.
                            </p>
                            <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-base">
                                Today, coordinated Aso-Ebi is seen at weddings and other celebrations across Nigeria and in Nigerian communities abroad. The fabric, colours and arrangements are chosen by the hosts and can differ between families and events.
                            </p>
                            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                                {['Recognise family and guest groups', 'Show support for the couple', 'Express cultural and personal style', 'Create coordinated celebration photographs'].map((item) => (
                                    <li key={item} className="flex gap-3 text-sm leading-6 text-gray-700 dark:text-gray-300">
                                        <Check className="mt-1 h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    </div>
                </section>

                <section id="fabrics" className="scroll-mt-24 bg-[#fbf8f4] px-6 py-14 dark:bg-gray-900/60 md:px-10 md:py-20 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <div className="max-w-3xl">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Choose what suits your celebration</span>
                            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Popular types of Aso-Ebi fabrics in Nigeria</h2>
                            <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                                There is no single fabric required for Aso-Ebi. Compare samples, comfort, quality, availability and the budget of the people you hope will participate.
                            </p>
                        </div>
                        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {fabrics.map(({ title, description }) => (
                                <article key={title} className="rounded-3xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
                                    <Shirt className="h-5 w-5 text-primary-600" aria-hidden="true" />
                                    <h3 className="mt-4 font-black">{title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">{description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="difference" className="scroll-mt-24 px-6 py-14 md:px-10 md:py-20 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <div className="max-w-3xl">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">A useful distinction</span>
                            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Aso-Ebi and Aso-Oke are not the same thing</h2>
                        </div>
                        <div className="mt-8 grid gap-4 md:grid-cols-2">
                            <article className="rounded-3xl border border-gray-100 p-6 dark:border-gray-800">
                                <h3 className="font-black">Aso-Ebi</h3>
                                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">The coordinated-dressing tradition or arrangement for a group at an occasion. It can use lace, Ankara, George, Aso-Oke or another fabric.</p>
                            </article>
                            <article className="rounded-3xl border border-gray-100 p-6 dark:border-gray-800">
                                <h3 className="font-black">Aso-Oke</h3>
                                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">A particular handwoven textile with Yoruba heritage that may be selected as the fabric for an Aso-Ebi group.</p>
                            </article>
                        </div>
                    </div>
                </section>

                <section id="choosing" className="scroll-mt-24 bg-gray-950 px-6 py-14 text-white dark:bg-black md:px-10 md:py-20 lg:px-16">
                    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-300">Quality, comfort and timing</span>
                            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">How to choose the right Aso-Ebi fabric</h2>
                        </div>
                        <div className="grid gap-3 sm:grid-cols-2">
                            {[
                                'Set a comfortable budget before looking at fabrics.',
                                'Request physical samples and check colour, texture and finish.',
                                'Confirm supplier stock and the quantity available before announcing a choice.',
                                'Consider the season, venue, comfort and likely outfit styles.',
                                'Ask a tailor about fabric width, design and yardage before ordering.',
                                'Give guests enough time for payment, delivery and tailoring.',
                            ].map((item) => (
                                <div key={item} className="flex gap-3 rounded-2xl bg-white/5 p-4 text-sm leading-6 text-white/80">
                                    <Check className="mt-1 h-4 w-4 shrink-0 text-orange-300" aria-hidden="true" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="cost" className="scroll-mt-24 px-6 py-14 md:px-10 md:py-20 lg:px-16">
                    <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Price depends on the package</span>
                            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">How much does Aso-Ebi cost?</h2>
                        </div>
                        <article className="rounded-3xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-950 sm:p-8">
                            <p className="text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-base">
                                There is no single reliable price for Aso-Ebi in Nigeria. Cost changes with fabric type and quality, quantity, supplier, accessories, tailoring and delivery. Ask for a current quotation instead of relying on an old price list or an unverified national average.
                            </p>
                            <div className="mt-6 rounded-2xl bg-[#fbf8f4] p-5 dark:bg-gray-900">
                                <div className="flex gap-3">
                                    <Wallet className="mt-1 h-5 w-5 shrink-0 text-primary-600" aria-hidden="true" />
                                    <div>
                                        <h3 className="font-black">State exactly what the price includes</h3>
                                        <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">Clarify fabric type and quantity, matching gele or accessories, payment deadline, collection or delivery arrangements and any separate tailoring charge.</p>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-300">
                                Yardage is not universal: an outfit’s design, fabric width and the wearer’s measurements affect the amount needed. Ask the tailor to confirm it before purchase.
                            </p>
                            <Link to="/wedding-budget" className="mt-5 inline-flex items-center gap-2 text-sm font-black text-primary-700 hover:text-primary-600 dark:text-primary-300">
                                Plan your Nigerian wedding budget <ArrowRight className="h-4 w-4" />
                            </Link>
                        </article>
                    </div>
                </section>

                <section id="organising" className="scroll-mt-24 bg-[#fbf8f4] px-6 py-14 dark:bg-gray-900/60 md:px-10 md:py-20 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <div className="max-w-3xl">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">A clear process prevents confusion</span>
                            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">How to organise Aso-Ebi orders</h2>
                        </div>
                        <ol className="mt-8 grid gap-4 md:grid-cols-2">
                            {orderSteps.map(([title, description], index) => (
                                <li key={title} className="flex gap-4 rounded-3xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-50 text-xs font-black text-primary-700 dark:bg-primary-900/30 dark:text-primary-300">{index + 1}</span>
                                    <div>
                                        <h3 className="font-black">{title}</h3>
                                        <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">{description}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                <section id="outfits" className="scroll-mt-24 px-6 py-14 md:px-10 md:py-20 lg:px-16">
                    <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
                        <article className="rounded-3xl border border-gray-100 p-6 dark:border-gray-800 sm:p-8">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Make it your own</span>
                            <h2 className="mt-3 text-3xl font-black tracking-tight">Aso-Ebi outfit ideas</h2>
                            <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-300">Guests may style the same fabric in different ways. Options include iro and buba, flowing or fitted gowns, two-piece outfits, agbada, kaftans, senator styles and traditional shirts and trousers.</p>
                            <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-300">Gele, fila, jewellery, coral accessories, footwear and bags can complete an outfit. Share inspiration if helpful, while allowing guests reasonable choice.</p>
                        </article>
                        <article className="rounded-3xl bg-[#fbf8f4] p-6 dark:bg-gray-900 sm:p-8">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Respect guests’ choices</span>
                            <h2 className="mt-3 text-3xl font-black tracking-tight">Aso-Ebi etiquette</h2>
                            <ul className="mt-5 space-y-3">
                                {[
                                    'Hosts should share the price, package and deadlines clearly.',
                                    'Give guests enough notice for ordering and tailoring.',
                                    'Guests should confirm what is included before paying and keep payment records.',
                                    'Hosts should provide updates about any delays or changes.',
                                    'Purchasing Aso-Ebi should not be treated as compulsory.',
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

                <section id="checklist" className="scroll-mt-24 bg-[#fbf8f4] px-6 py-14 dark:bg-gray-900/60 md:px-10 md:py-20 lg:px-16">
                    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr]">
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Before orders open</span>
                            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Aso-Ebi planning checklist</h2>
                            <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">Use this list to keep fabric selection, guest orders and distribution in one clear process.</p>
                        </div>
                        <ul className="space-y-3">
                            {planningChecklist.map((item) => (
                                <li key={item} className="flex gap-3 rounded-2xl border border-gray-100 bg-white p-4 text-sm leading-6 text-gray-700 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-300">
                                    <Check className="mt-1 h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mx-auto mt-8 flex max-w-7xl flex-wrap gap-x-5 gap-y-3 text-sm font-black text-primary-700 dark:text-primary-300">
                        <Link className="hover:text-primary-600" to="/nigerian-traditional-wedding">Read the traditional wedding guide</Link>
                        <Link className="hover:text-primary-600" to="/wedding-checklist-timeline">Use the wedding planning checklist</Link>
                        <Link className="hover:text-primary-600" to="/digital-wedding-invitations">Explore digital wedding invitations</Link>
                        <Link className="hover:text-primary-600" to="/wedding-rsvp-guest-management">Organise wedding RSVPs</Link>
                    </div>
                </section>
            </div>

            <section id="faqs" className="scroll-mt-24 border-t border-gray-100 px-6 py-14 dark:border-gray-800 md:px-10 md:py-20 lg:px-16">
                <div className="mx-auto max-w-4xl">
                    <div className="text-center">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Helpful answers</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Aso-Ebi frequently asked questions</h2>
                    </div>
                    <div className="mt-8 divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800">
                        {faqs.map(({ question, answer }) => (
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
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-300">Bring the details together</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Plan a celebration guests can prepare for.</h2>
                        <p className="mt-4 text-sm leading-7 text-gray-300 sm:text-base">
                            Keep event information, invitations and guest responses organised alongside your wedding plans.
                        </p>
                    </div>
                    <div className="flex w-full flex-col gap-4 sm:w-auto">
                        <a
                            href={APP_LINKS.signup}
                            onClick={() => trackAsoEbiCta('closing')}
                            className="inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-600 px-4 py-4 text-xs font-black uppercase tracking-widest text-white transition hover:bg-primary-500 sm:w-auto sm:px-7"
                        >
                            Start planning <ArrowRight className="h-4 w-4 shrink-0" />
                        </a>
                        <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-bold text-white/80">
                            <Link className="hover:text-white" to="/wedding-budget">Wedding budget guide</Link>
                            <Link className="hover:text-white" to="/wedding-vendors-nigeria">Find wedding vendors</Link>
                            <Link className="hover:text-white" to="/wedding-website">Create a wedding website</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
