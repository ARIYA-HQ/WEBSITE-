import { Link } from 'react-router-dom';
import {
    ArrowRight,
    Check,
    ClipboardCheck,
    MapPin,
    ShieldCheck,
} from 'lucide-react';
import { APP_LINKS } from '../config/links';
import { EVENT_IMAGES } from '../config/eventImages';
import { trackEvent } from '../analytics/analytics';
import { weddingVenuesNigeriaFaqs } from '../seo/wedding-venues-nigeria-content';

const venueTypes = [
    {
        title: 'Event centres and wedding halls',
        text: 'Indoor spaces may offer protection from weather and layouts designed for gatherings. Check seated capacity, ventilation, power, parking, decoration rules and charges for facilities or equipment.',
    },
    {
        title: 'Hotels and ballrooms',
        text: 'Hotels may combine an event space with hospitality, catering or accommodation. Confirm package inclusions, guest room rates, external vendor policies, service charges and access times.',
    },
    {
        title: 'Outdoor wedding venues',
        text: 'Gardens, private grounds and open-air spaces can offer natural surroundings and flexible layouts. Plan for weather, shade, ground conditions, sound, power, restrooms and a usable backup.',
    },
    {
        title: 'Garden venues',
        text: 'A garden can provide greenery and a relaxed setting for a ceremony or reception. Ask about rain cover, evening lighting, pest management, accessibility and the surfaces guests will walk on.',
    },
    {
        title: 'Beach venues',
        text: 'A coastal setting can suit an intimate or destination celebration. Check permissions, weather and wind, access, tides or ground conditions, sound limits, facilities and transport.',
    },
    {
        title: 'Private estates and exclusive spaces',
        text: 'Some properties may offer privacy and flexible indoor or outdoor use. Verify access roads, parking, security, facilities, event hours and any property-specific restrictions.',
    },
    {
        title: 'Religious and ceremony venues',
        text: 'A church or other religious venue may be central to the ceremony, with a separate reception location. Confirm ceremony requirements, scheduling, photography and decoration rules with the institution.',
    },
];

const cityConsiderations = [
    ['Lagos', 'Compare routes, traffic patterns, parking, access roads, accommodation and vendor setup restrictions. Consider how guests and suppliers will reach the location at the event time.'],
    ['Abuja', 'Review the venue’s location in relation to where guests are staying, transport options, accommodation and the availability of suppliers who can serve the event.'],
    ['Port Harcourt', 'Check the full journey, parking, power and venue facilities, and make a practical weather and transport plan for guests.'],
    ['Ibadan', 'Inspect the space, access and facilities in person where possible. Confirm that the layout and available services suit your ceremony and reception.'],
    ['Other Nigerian cities', 'In Enugu, Benin City, Kano, Uyo, Owerri, Abeokuta, Ilorin and elsewhere, verify current venue information locally and plan accommodation or transport for travelling guests.'],
];

const venueFactors = [
    {
        title: 'Set a complete venue budget',
        text: 'Include more than the headline rental fee: ask about furniture, decoration, lighting, sound, power, security, cleaning, setup, dismantling and overtime.',
    },
    {
        title: 'Confirm guest capacity for your layout',
        text: 'Ask whether the stated number is for seated or standing guests and whether it leaves space for a stage, dance floor, catering and guest movement.',
    },
    {
        title: 'Consider location and access',
        text: 'Think about routes, traffic, parking, public transport, nearby accommodation and access for older guests or people with mobility needs.',
    },
    {
        title: 'Inspect the actual venue',
        text: 'Photos help you shortlist, but visit the property and look at the facilities, surfaces, access and surrounding area before committing.',
    },
    {
        title: 'Ask about power and facilities',
        text: 'Confirm power supply and backup, cooling, restrooms, changing rooms, security, emergency exits, waste management and any associated charges.',
    },
    {
        title: 'Review vendor and event policies',
        text: 'Ask about external suppliers, approved caterers, decoration restrictions, sound limits, setup windows, deliveries and event closing times.',
    },
    {
        title: 'Read the agreement before paying',
        text: 'Document the date, hire period, spaces, fee, included services, deposit, payment dates, overtime, cancellation, rescheduling and refund terms.',
    },
];

const quoteDetails = [
    ['Venue hire', 'Total fee, access period and spaces included.'],
    ['Furniture and layout', 'Tables, chairs, staging and any required rentals.'],
    ['Power and cooling', 'Electricity, generator, fuel, air conditioning or ventilation charges.'],
    ['Security and cleaning', 'What is provided before, during and after the event.'],
    ['Setup and overtime', 'Access time, dismantling window and extra-hour costs.'],
    ['External vendors', 'Fees, restrictions and approved supplier requirements.'],
    ['Deposits and changes', 'Refund, cancellation, rescheduling and damage terms.'],
];

const venueQuestions = [
    'What is the comfortable seated capacity for our planned layout?',
    'Can we use the same space for ceremony and reception?',
    'What exactly is included in the hire fee, and what costs extra?',
    'When can our vendors enter, set up and clear the space?',
    'What are the power, cooling, restroom and security arrangements?',
    'Can we bring our own caterer, decorator, sound team and photographer?',
    'What are the payment, cancellation, rescheduling and overtime terms?',
    'What is the backup plan for rain, power interruption or other disruption?',
];

const inspectionChecklist = [
    'Capacity and floor plan confirmed for the event layout.',
    'Total costs and additional charges itemised.',
    'Access roads, parking and transport options reviewed.',
    'Power supply, backup and cooling checked.',
    'Restrooms, changing rooms and accessibility assessed.',
    'Security, emergency exits and venue contact confirmed.',
    'Vendor access, setup and dismantling times agreed.',
    'Outdoor weather contingency established where needed.',
    'Agreement and payment terms read before booking.',
];

function trackVenueCta(placement: 'hero' | 'closing') {
    trackEvent('wedding_venues_cta_clicked', { placement });
}

export default function WeddingVenuesNigeriaPage() {
    return (
        <main className="bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
            <section className="relative isolate overflow-hidden bg-gray-950 pt-24 text-white">
                <img
                    src={EVENT_IMAGES.coupleVenue}
                    alt="Nigerian couple at their wedding venue"
                    fetchPriority="high"
                    className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-45"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-950/95 via-gray-950/80 to-gray-950/45" />
                <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-16">
                    <div className="max-w-3xl">
                        <nav aria-label="Breadcrumb" className="mb-6 text-xs font-bold text-white/65">
                            <Link to="/" className="transition hover:text-white">Home</Link>
                            <span className="mx-2" aria-hidden="true">/</span>
                            <span aria-current="page" className="text-white">Wedding venues in Nigeria</span>
                        </nav>
                        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-orange-200 backdrop-blur">
                            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                            Find a place that fits your plans
                        </span>
                        <h1 className="text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
                            Wedding Venues in Nigeria: How to Find the Perfect Location for Your Wedding
                        </h1>
                        <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
                            Explore venue types, compare practical costs and learn what to check
                            before booking a wedding hall, hotel, garden, outdoor space or
                            ceremony location.
                        </p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <a
                                href={APP_LINKS.signup}
                                onClick={() => trackVenueCta('hero')}
                                className="inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-600 px-3 py-4 text-xs font-black uppercase tracking-widest text-white transition hover:bg-primary-500 sm:w-auto sm:px-7"
                            >
                                Plan your wedding <ArrowRight className="h-4 w-4 shrink-0" />
                            </a>
                            <a
                                href="#inspection"
                                className="inline-flex min-h-12 w-full items-center justify-center whitespace-nowrap rounded-full border border-white/30 bg-white/5 px-3 py-4 text-xs font-black uppercase tracking-widest text-white transition hover:bg-white/15 sm:w-auto sm:px-7"
                            >
                                Use the venue checklist
                            </a>
                        </div>
                        <p className="mt-5 text-xs font-medium text-white/65">
                            Venue prices and availability change. Request current written
                            quotations directly from venue operators.
                        </p>
                    </div>
                    <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-md sm:p-8">
                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-300/15 text-orange-200">
                                <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-200">Look beyond the photos</p>
                                <h2 className="mt-1 text-xl font-black">Check comfort, cost and logistics.</h2>
                            </div>
                        </div>
                        <p className="mt-5 text-sm leading-6 text-white/75">
                            The right venue should suit your guest count, budget, celebration
                            style and practical requirements.
                        </p>
                        <div className="mt-6 grid grid-cols-2 gap-3">
                            <div className="rounded-2xl bg-black/20 p-4">
                                <span className="text-[10px] font-black uppercase tracking-widest text-white/55">Plan for guests</span>
                                <p className="mt-2 text-sm font-bold">Capacity and access</p>
                            </div>
                            <div className="rounded-2xl bg-black/20 p-4">
                                <span className="text-[10px] font-black uppercase tracking-widest text-white/55">Budget clearly</span>
                                <p className="mt-2 text-sm font-bold">Full cost in writing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <nav aria-label="On this page" className="border-b border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-950">
                <div className="mx-auto flex max-w-7xl flex-wrap gap-x-6 gap-y-3 px-6 py-5 text-xs font-bold text-gray-600 dark:text-gray-300 md:px-10 lg:px-16">
                    <a className="hover:text-primary-600" href="#why-venue">Why venue matters</a>
                    <a className="hover:text-primary-600" href="#venue-types">Venue types</a>
                    <a className="hover:text-primary-600" href="#cities">Nigerian cities</a>
                    <a className="hover:text-primary-600" href="#choose">How to choose</a>
                    <a className="hover:text-primary-600" href="#inspection">Inspection checklist</a>
                    <a className="hover:text-primary-600" href="#faqs">FAQs</a>
                </div>
            </nav>

            <section id="why-venue" className="scroll-mt-24 px-6 py-16 md:px-10 md:py-24 lg:px-16">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">More than a backdrop</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Why is choosing the right wedding venue important?</h2>
                    </div>
                    <div className="space-y-5 leading-7 text-gray-600 dark:text-gray-300">
                        <p>
                            Your venue influences the atmosphere, the number of people you can
                            comfortably host, your decoration options and how the event will run.
                            It can also affect your budget through facilities, access and service
                            requirements beyond the rental fee.
                        </p>
                        <p>
                            Consider guest convenience as well as appearance. Routes, traffic,
                            parking, accessibility, nearby accommodation and clear directions can
                            shape how easy it is for guests and suppliers to attend.
                        </p>
                        <p>
                            The space also affects logistics such as power, sound, lighting,
                            catering, vendor access and setup time. Choosing a venue that can
                            support your plans helps you coordinate the celebration more clearly.
                        </p>
                    </div>
                </div>
            </section>

            <section id="venue-types" className="scroll-mt-24 bg-[#fbf8f4] px-6 py-16 dark:bg-gray-900/60 md:px-10 md:py-24 lg:px-16">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-3xl">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Explore the options</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Types of wedding venues in Nigeria</h2>
                        <p className="mt-5 leading-7 text-gray-600 dark:text-gray-300">
                            Venue types differ in atmosphere, facilities, flexibility and cost.
                            Compare what each can offer for your guest count and ceremony.
                        </p>
                    </div>
                    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {venueTypes.map(({ title, text }) => (
                            <article key={title} className="rounded-3xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
                                <h3 className="text-lg font-black">{title}</h3>
                                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">{text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="cities" className="scroll-mt-24 px-6 py-16 md:px-10 md:py-24 lg:px-16">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Let local logistics guide you</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Wedding venues in Lagos, Abuja and other Nigerian cities</h2>
                        <p className="mt-5 leading-7 text-gray-600 dark:text-gray-300">
                            A city can offer many types of event spaces, but traffic, access,
                            supplier availability and guest travel vary. Verify current details
                            rather than choosing a venue based only on its photos.
                        </p>
                    </div>
                    <div className="space-y-3">
                        {cityConsiderations.map(([city, text]) => (
                            <article key={city} className="rounded-2xl border border-gray-100 bg-[#fbf8f4] p-5 dark:border-gray-800 dark:bg-gray-900">
                                <h3 className="font-black">{city}</h3>
                                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">{text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="choose" className="scroll-mt-24 border-y border-gray-100 bg-gray-950 px-6 py-16 text-white dark:border-gray-800 dark:bg-black md:px-10 md:py-24 lg:px-16">
                <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-300">Shortlist with purpose</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">How to choose the perfect wedding venue</h2>
                        <p className="mt-5 leading-7 text-gray-300">
                            Establish your budget and approximate guest count before viewing
                            locations. Compare the full cost and inspect facilities in person
                            before making a commitment.
                        </p>
                        <Link
                            to="/wedding-budget"
                            className="mt-6 inline-flex items-center gap-2 text-sm font-black text-orange-200 hover:text-white"
                        >
                            Read the Nigerian wedding budget guide <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {venueFactors.map(({ title, text }) => (
                            <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                                <h3 className="font-black">{title}</h3>
                                <p className="mt-2 text-sm leading-6 text-gray-300">{text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-6 py-16 md:px-10 md:py-24 lg:px-16">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-3xl">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Compare like for like</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">How much does it cost to rent a wedding venue in Nigeria?</h2>
                        <p className="mt-5 leading-7 text-gray-600 dark:text-gray-300">
                            There is no single price that applies across venue types, cities and
                            dates. Cost may depend on capacity, hire duration, season, included
                            facilities, vendor restrictions and any additional services. Ask each
                            venue for a current itemised quotation.
                        </p>
                    </div>
                    <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {quoteDetails.map(([title, detail]) => (
                            <article key={title} className="rounded-2xl border border-gray-100 bg-[#fbf8f4] p-5 dark:border-gray-800 dark:bg-gray-900">
                                <h3 className="font-black">{title}</h3>
                                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">{detail}</p>
                            </article>
                        ))}
                    </div>
                    <p className="mt-6 max-w-3xl leading-7 text-gray-600 dark:text-gray-300">
                        Compare the total expected cost rather than the headline rental fee. Ask
                        for any verbal clarification to be added to the agreement before paying.
                    </p>
                </div>
            </section>

            <section id="inspection" className="scroll-mt-24 bg-[#fbf8f4] px-6 py-16 dark:bg-gray-900/60 md:px-10 md:py-24 lg:px-16">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Before you book</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Wedding venue inspection checklist</h2>
                        <p className="mt-5 leading-7 text-gray-600 dark:text-gray-300">
                            Take this list when visiting potential spaces. Check the venue at a
                            time similar to your event where possible, and ask the venue manager
                            to confirm details you cannot verify during a visit.
                        </p>
                        <Link
                            to="/wedding-vendors-nigeria"
                            className="mt-5 inline-flex items-center gap-2 text-sm font-black text-primary-700 hover:text-primary-600 dark:text-primary-300"
                        >
                            Coordinate your venue with wedding vendors <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                    <ul className="space-y-3">
                        {inspectionChecklist.map((item) => (
                            <li key={item} className="flex gap-3 rounded-2xl border border-gray-100 bg-white p-4 text-sm leading-6 text-gray-700 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-300">
                                <Check className="mt-1 h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="px-6 py-16 md:px-10 md:py-24 lg:px-16">
                <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
                    <article className="rounded-[2rem] border border-gray-100 bg-white p-7 dark:border-gray-800 dark:bg-gray-900 sm:p-9">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-600/10 text-primary-700 dark:text-primary-300">
                            <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <h2 className="mt-5 text-2xl font-black tracking-tight">Common venue booking mistakes to avoid</h2>
                        <ul className="mt-5 space-y-3">
                            {[
                                'Booking from photos without inspecting the venue and facilities.',
                                'Ignoring extra charges beyond the rental fee.',
                                'Choosing a space that cannot comfortably fit your layout.',
                                'Overlooking traffic, parking, access and guest accommodation.',
                                'Assuming power, cooling or vendor access is included.',
                                'Leaving outdoor weather plans or contract terms unclear.',
                            ].map((item) => (
                                <li key={item} className="flex gap-3 text-sm leading-6 text-gray-700 dark:text-gray-300">
                                    <Check className="mt-1 h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                    <article className="rounded-[2rem] border border-gray-100 bg-[#fbf8f4] p-7 dark:border-gray-800 dark:bg-gray-900/60 sm:p-9">
                        <h2 className="text-2xl font-black tracking-tight">Coordinate the venue with your vendors</h2>
                        <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                            Your decorator needs setup access, your caterer needs an appropriate
                            service area and your sound team needs to understand technical
                            requirements. Share venue details and a current floor plan with the
                            relevant suppliers.
                        </p>
                        <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                            Confirm loading arrangements, power, setup windows, contact people and
                            any equipment rules. A final coordination meeting can help catch
                            practical issues before the event.
                        </p>
                        <Link
                            to="/wedding-checklist-timeline"
                            className="mt-5 inline-flex items-center gap-2 text-sm font-black text-primary-700 hover:text-primary-600 dark:text-primary-300"
                        >
                            Use the wedding planning checklist and timeline <ArrowRight className="h-4 w-4" />
                        </Link>
                    </article>
                </div>
            </section>

            <section id="faqs" className="scroll-mt-24 border-t border-gray-100 bg-[#fbf8f4] px-6 py-16 dark:border-gray-800 dark:bg-gray-900/60 md:px-10 md:py-24 lg:px-16">
                <div className="mx-auto max-w-4xl">
                    <div className="text-center">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Helpful answers</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Wedding venue FAQs</h2>
                    </div>
                    <div className="mt-10 divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800">
                        {weddingVenuesNigeriaFaqs.map(({ question, answer }) => (
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
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-300">Plan the whole celebration</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Choose a venue that works for your guests and your plans.</h2>
                        <p className="mt-4 text-sm leading-7 text-gray-300 sm:text-base">
                            Explore AriyaHQ planning tools and keep your venue decisions connected
                            with your budget, vendors and guest arrangements.
                        </p>
                    </div>
                    <div className="flex w-full flex-col gap-4 sm:w-auto">
                        <a
                            href={APP_LINKS.signup}
                            onClick={() => trackVenueCta('closing')}
                            className="inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-600 px-3 py-4 text-xs font-black uppercase tracking-widest text-white transition hover:bg-primary-500 sm:w-auto sm:px-7"
                        >
                            Explore AriyaHQ <ArrowRight className="h-4 w-4 shrink-0" />
                        </a>
                        <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-bold text-white/80">
                            <Link className="hover:text-white" to="/wedding-planning">Wedding planning in Nigeria</Link>
                            <Link className="hover:text-white" to="/wedding-budget">Wedding budget guide</Link>
                            <Link className="hover:text-white" to="/wedding-vendors-nigeria">Wedding vendors in Nigeria</Link>
                            <Link className="hover:text-white" to="/nigerian-traditional-wedding">Traditional wedding guide</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
