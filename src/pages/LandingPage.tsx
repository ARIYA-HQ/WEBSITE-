import {
    ArrowDown,
    ArrowRight,
    CalendarDays,
    Check,
    ClipboardList,
    Gift,
    Globe2,
    Mail,
    Search,
    Ticket,
    Users,
} from 'lucide-react';
import SEO from '../components/common/SEO';
import Button from '../components/common/Button';
import VideoShowcase from '../components/VideoShowcase';
import { motion, useReducedMotion } from 'framer-motion';
import { APP_LINKS, EVENT_SITE_EXAMPLE } from '../config/links';
import { EVENT_IMAGES } from '../config/eventImages';
import websitePreview from '../assets/images/wedding-website/home-preview-live.png';

const productLinks = [
    {
        eyebrow: 'Plan',
        title: 'Bring the details together',
        description:
            'Keep your event plans, budget and next steps organised as you prepare.',
        href: '/wedding-planning',
        label: 'Explore planning guides',
        icon: ClipboardList,
        tint: 'bg-[#f5eee6] text-[#91511f]',
    },
    {
        eyebrow: 'Discover',
        title: 'Find event vendors',
        description:
            'Browse vendor profiles and services for the moments you are planning.',
        href: '/product/marketplace',
        label: 'Browse vendors',
        icon: Search,
        tint: 'bg-[#eaf1e9] text-[#486a4a]',
    },
    {
        eyebrow: 'Share',
        title: 'Make an event website',
        description:
            'Choose a design and give guests one place to find your event details.',
        href: '/product/websites',
        label: 'Explore website themes',
        icon: Globe2,
        tint: 'bg-[#e9f0f3] text-[#356277]',
    },
    {
        eyebrow: 'Invite',
        title: 'Create digital invitations',
        description:
            'Browse invitation designs and share event information with your guests.',
        href: '/product/invitations',
        label: 'Browse invitations',
        icon: Mail,
        tint: 'bg-[#f5eaf0] text-[#8b4967]',
    },
    {
        eyebrow: 'Welcome',
        title: 'Organise guests and RSVPs',
        description:
            'Keep track of your guest list and responses while you plan.',
        href: '/wedding-rsvp-guest-management',
        label: 'Explore guest tools',
        icon: Users,
        tint: 'bg-[#f3efe0] text-[#88702c]',
    },
    {
        eyebrow: 'Celebrate',
        title: 'Share a wishlist',
        description:
            'Explore wishlist options and make it easy to share your gift preferences.',
        href: '/product/wishlist',
        label: 'Browse the wishlist',
        icon: Gift,
        tint: 'bg-[#eeeafb] text-[#64518c]',
    },
];

const eventTypes = [
    {
        label: 'Weddings',
        title: 'Start your wedding plan',
        description: 'Find your next step, discover vendors and bring the details together.',
        href: '/wedding-planning',
        image: EVENT_IMAGES.coupleReception,
        alt: 'Couple celebrating at a wedding reception',
    },
    {
        label: 'Celebrations',
        title: 'Make the celebration yours',
        description: 'Create a home for the details of your birthday or special occasion.',
        href: '/solutions/individuals',
        image: EVENT_IMAGES.womenCelebrating,
        alt: 'Guests celebrating together',
    },
    {
        label: 'Corporate',
        title: 'Bring your event together',
        description: 'Explore event tools for your organisation, team or attendees.',
        href: '/solutions/enterprise',
        image: EVENT_IMAGES.eventPlanner,
        alt: 'Event planner preparing for an event',
    },
];

const faqs = [
    {
        question: 'What kinds of events can I plan with Ariya?',
        answer:
            'Ariya supports weddings, birthdays, corporate events and other celebrations. Explore the event website themes to see designs for weddings, birthdays, baby showers, galas, graduations and corporate events.',
    },
    {
        question: 'Where can I see the event website designs?',
        answer:
            'Visit the event website themes page to browse and filter the available designs by event type. Select a theme to open its full preview.',
    },
    {
        question: 'Can I find vendors on Ariya?',
        answer:
            'Yes. The public marketplace lets you browse published event vendor profiles and listings. Availability, services and booking details are shown on the relevant profiles.',
    },
    {
        question: 'I provide event services. How do I join?',
        answer:
            'You can start from the vendor sign-up page, or learn more about Ariya for event vendors before creating your profile.',
    },
    {
        question: 'Where can I learn about plans and pricing?',
        answer:
            'Visit the pricing page for current plan information and details about available services.',
    },
];

const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Organization',
            name: 'ÀRIYÁ',
            url: 'https://ariyahq.com/',
            logo: 'https://ariyahq.com/brand/ariya-horizontal-primary.svg',
        },
        {
            '@type': 'WebSite',
            name: 'ÀRIYÁ',
            url: 'https://ariyahq.com/',
            description:
                'Event planning tools, vendor discovery, event websites and guest organisation for weddings, celebrations and events.',
        },
    ],
};

function SectionHeading({
    eyebrow,
    title,
    description,
    light = false,
}: {
    eyebrow: string;
    title: string;
    description: string;
    light?: boolean;
}) {
    return (
        <div className="max-w-2xl">
            <p
                className={`text-[10px] font-black uppercase tracking-[0.2em] ${
                    light ? 'text-[#f0a256]' : 'text-[#a65310]'
                }`}
            >
                {eyebrow}
            </p>
            <h2
                className={`mt-3 font-serif text-3xl leading-tight tracking-tight sm:text-4xl ${
                    light ? 'text-white' : 'text-[#20231f] dark:text-gray-100'
                }`}
            >
                {title}
            </h2>
            <p
                className={`mt-3 max-w-xl text-sm leading-6 sm:text-base sm:leading-7 ${
                    light ? 'text-white/70' : 'text-[#656a64] dark:text-gray-400'
                }`}
            >
                {description}
            </p>
        </div>
    );
}

export default function LandingPage() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <main className="overflow-hidden bg-[#fbfaf7] text-[#20231f] transition-colors duration-300 dark:bg-gray-950 dark:text-gray-100">
            <SEO
                title="Event Planning Made Easier"
                description="Plan weddings, birthdays and corporate events with AriyaHQ. Discover vendors, create event websites, organise guests and explore digital invitations."
                canonical="https://ariyahq.com/"
                structuredData={structuredData}
            />

            <section className="relative isolate min-h-[680px] overflow-hidden bg-[#18201d] text-white md:min-h-[760px]">
                <img
                    src={EVENT_IMAGES.coupleReception}
                    alt=""
                    fetchPriority="high"
                    className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#101714]/90 via-[#101714]/65 to-[#101714]/20" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#101714]/70 via-transparent to-[#101714]/10" />

                <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-6 pb-20 pt-32 md:min-h-[760px] md:px-10 md:pb-24 lg:grid-cols-[1.05fr_0.8fr] lg:gap-8">
                    <div className="max-w-3xl">
                        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white/90 backdrop-blur">
                            <span className="h-2 w-2 rounded-full bg-[#df9a58]" />
                            One place for your event journey
                        </p>
                        <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                            <span className="block">Event planning</span>
                            <span className="block">begins with</span>
                            <span className="block tracking-[-0.01em] text-[#f0c99e]">
                                ÀRIYÁ
                            </span>
                        </h1>
                        <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
                            From finding vendors to sharing event details with guests,
                            ÀRIYÁ brings practical tools together for weddings,
                            celebrations and events.
                        </p>
                        <div className="mt-8 flex w-full max-w-sm flex-col gap-4 sm:w-auto sm:max-w-none sm:flex-row">
                            <a href={APP_LINKS.signup} className="w-full sm:w-auto">
                                <Button size="md" fullWidth className="px-7 sm:w-auto" icon={ArrowRight} iconPosition="right">
                                    Start planning
                                </Button>
                            </a>
                            <a
                                href="/product/websites"
                                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-4 text-xs font-black uppercase tracking-widest text-white transition hover:bg-white/20 sm:w-auto"
                            >
                                Explore event websites
                                <ArrowRight size={17} aria-hidden="true" />
                            </a>
                        </div>
                        <p className="mt-4 text-sm text-white/65">
                            Choose a starting point that fits the event you are planning.
                        </p>
                    </div>
                    <a
                        href="/product/websites"
                        aria-label="Explore event website themes"
                        className="group relative mx-auto hidden w-full max-w-[410px] rounded-[2rem] border border-white/30 bg-white/10 p-3 shadow-[0_35px_100px_-40px_rgba(0,0,0,0.8)] backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:bg-white/15 lg:block"
                    >
                        <div className="overflow-hidden rounded-[1.4rem] bg-white">
                            <div className="flex h-8 items-center gap-1.5 border-b border-gray-200 bg-gray-50 px-3">
                                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#ef6a5b]" />
                                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#f5bd4f]" />
                                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#61c454]" />
                                <span className="ml-2 flex h-5 min-w-0 flex-1 items-center justify-center rounded-full bg-white px-2 text-[8px] text-gray-500">
                                    zoealexis.ariyahq.com
                                </span>
                            </div>
                            <img
                                src={websitePreview}
                                alt="Desktop screenshot of Zoe and Alexis’ live Ariya wedding website homepage"
                                className="block h-auto w-full transition duration-700 group-hover:scale-[1.02]"
                                fetchPriority="high"
                            />
                        </div>
                        <div className="absolute -left-7 top-12 rounded-2xl border border-white/50 bg-[#fffdf9] px-4 py-3 text-[#20231f] shadow-xl dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100">
                            <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#987454]">
                                Your event, your style
                            </p>
                            <p className="mt-1 font-serif text-sm">Website themes for every moment</p>
                        </div>
                        <div className="absolute -bottom-5 -right-4 flex items-center gap-3 rounded-2xl border border-white/50 bg-white px-4 py-3 text-[#20231f] shadow-xl dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100">
                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f3e7d8] text-[#80502c]">
                                <Globe2 size={17} aria-hidden="true" />
                            </span>
                            <span>
                                <span className="block font-serif text-sm">See a full preview</span>
                                <span className="mt-0.5 block text-[10px] text-[#777a73] dark:text-gray-400">Explore event websites</span>
                            </span>
                            <ArrowRight size={16} className="ml-1 text-[#80502c] transition-transform group-hover:translate-x-1" aria-hidden="true" />
                        </div>
                    </a>
                </div>

                <a
                    href="#choose-event"
                    className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/70 transition hover:text-white md:flex"
                >
                    Explore ÀRIYÁ
                    <ArrowDown size={15} aria-hidden="true" />
                </a>
            </section>

            <section
                id="choose-event"
                className="scroll-mt-24 bg-[#f5f2ec] px-6 py-20 transition-colors duration-300 dark:bg-[#111713] md:px-10 md:py-28"
            >
                <div className="mx-auto max-w-7xl">
                    <div className="mb-10 flex flex-col justify-between gap-6 border-b border-[#ded9cf] pb-8 dark:border-gray-800 md:mb-12 md:flex-row md:items-end md:pb-10">
                        <div>
                            <SectionHeading
                                eyebrow="A place to begin"
                                title="What are you planning?"
                                description="Every event has its own rhythm. Choose yours and find the tools and inspiration to move forward."
                            />
                        </div>
                        <a
                            href="/product/websites"
                            className="group inline-flex min-h-12 w-fit shrink-0 items-center gap-3 rounded-full border border-[#d8d0c4] bg-white/70 px-5 text-sm font-semibold text-[#64462c] transition hover:border-[#9a6a40] hover:bg-white dark:border-gray-700 dark:bg-gray-900 dark:text-[#f0c99e] dark:hover:border-[#f0c99e]/60 dark:hover:bg-gray-800"
                        >
                            Browse every theme
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f1e8dc] transition group-hover:bg-[#e8d5be] dark:bg-gray-800 dark:group-hover:bg-gray-700">
                                <ArrowRight size={15} aria-hidden="true" />
                            </span>
                        </a>
                    </div>
                    <div className="grid gap-5 lg:grid-cols-3">
                        {eventTypes.map((event, index) => (
                            <a
                                key={event.label}
                                href={event.href}
                                className="group relative isolate flex min-h-[390px] flex-col justify-between overflow-hidden rounded-[1.5rem] bg-[#2c302d] shadow-[0_16px_50px_-28px_rgba(27,30,26,0.55)] ring-1 ring-black/5 transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_65px_-30px_rgba(27,30,26,0.65)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-700 dark:ring-white/10 md:min-h-[420px]"
                            >
                                <img
                                    src={event.image}
                                    alt={event.alt}
                                    loading="lazy"
                                    className="absolute inset-0 -z-20 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 -z-10 bg-black/20 transition duration-500 group-hover:bg-black/25" />
                                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/45 via-black/25 to-black/90 transition duration-500 group-hover:from-black/50 group-hover:via-black/30 group-hover:to-black/95" />
                                <div className="flex items-center justify-between p-5 md:p-6">
                                    <span className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-black/20 px-3.5 py-2 text-[9px] font-black uppercase tracking-[0.18em] text-white backdrop-blur-md">
                                        <span className="text-[#f0c99e]">0{index + 1}</span>
                                        <span className="h-3 w-px bg-white/40" />
                                        {event.label}
                                    </span>
                                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/45 bg-white/10 text-white backdrop-blur-md transition duration-300 group-hover:rotate-[-45deg] group-hover:bg-white group-hover:text-[#20231f]">
                                        <ArrowRight size={17} aria-hidden="true" />
                                    </span>
                                </div>
                                <div className="p-6 text-white md:p-7">
                                    <h3 className="max-w-[18rem] font-serif text-2xl leading-tight tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                                        {event.title}
                                    </h3>
                                    <p className="mt-3 max-w-sm text-sm leading-6 text-white/90 drop-shadow-[0_1px_5px_rgba(0,0,0,0.9)]">
                                        {event.description}
                                    </p>
                                    <span className="mt-6 inline-flex items-center gap-2 border-t border-white/30 pt-4 text-[10px] font-black uppercase tracking-widest text-white/95">
                                        Explore this path
                                        <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white px-6 py-20 transition-colors duration-300 dark:bg-gray-950 md:px-10 md:py-28">
                <div className="mx-auto max-w-7xl">
                    <SectionHeading
                        eyebrow="The planning toolkit"
                        title="Useful tools for all the moving parts"
                        description="Choose the parts of ÀRIYÁ that fit your event. Start with one tool and explore more whenever you need them."
                    />
                    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {productLinks.map((product) => {
                            const Icon = product.icon;
                            return (
                                <a
                                    key={product.title}
                                    href={product.href}
                                    className="group rounded-2xl border border-[#ecebe6] bg-[#fff] p-6 transition hover:-translate-y-1 hover:border-[#d9c2a8] hover:shadow-[0_16px_40px_-28px_rgba(54,44,31,0.35)] dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700 dark:hover:shadow-black/30"
                                >
                                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${product.tint}`}>
                                        <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                                    </div>
                                    <p className="mt-6 text-[10px] font-black uppercase tracking-[0.18em] text-[#8a6a4f] dark:text-[#e3b989]">
                                        {product.eyebrow}
                                    </p>
                                    <h3 className="mt-2 font-serif text-xl tracking-tight">
                                        {product.title}
                                    </h3>
                                    <p className="mt-3 min-h-[52px] text-sm leading-6 text-[#656a64] dark:text-gray-400">
                                        {product.description}
                                    </p>
                                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#80502c] dark:text-[#f0c99e]">
                                        {product.label}
                                        <ArrowRight
                                            size={16}
                                            className="transition-transform group-hover:translate-x-1"
                                            aria-hidden="true"
                                        />
                                    </span>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="bg-[#fbfaf7] px-6 py-20 transition-colors duration-300 dark:bg-gray-950 md:px-10 md:py-28">
                <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
                    <div className="relative mx-auto w-full max-w-[600px]">
                        <div className="absolute -left-7 top-10 hidden h-36 w-36 rounded-full bg-[#ead5bf] dark:bg-[#49392d] md:block" />
                        <div className="relative overflow-hidden rounded-[1.5rem] border-[8px] border-white bg-white shadow-[0_30px_90px_-40px_rgba(29,35,30,0.45)] dark:border-gray-800 dark:bg-gray-900">
                            <div className="flex h-9 items-center gap-2 border-b border-gray-200 bg-gray-50 px-3">
                                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#ef6a5b]" />
                                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#f5bd4f]" />
                                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#61c454]" />
                                <span className="ml-3 flex h-5 min-w-0 flex-1 items-center justify-center rounded-full bg-white px-3 text-[9px] text-gray-500">
                                    zoealexis.ariyahq.com
                                </span>
                            </div>
                            <img
                                src={websitePreview}
                                alt="Desktop preview of Zoe and Alexis’ wedding website homepage"
                                loading="lazy"
                                className="block h-auto w-full"
                            />
                        </div>
                        <div className="absolute -bottom-5 right-4 rounded-xl border border-[#eee9e2] bg-white px-4 py-3 shadow-lg dark:border-gray-700 dark:bg-gray-900 sm:right-0">
                            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8a6a4f] dark:text-[#e3b989]">
                                Your event link
                            </p>
                            <p className="mt-1 text-sm font-semibold text-[#30352f] dark:text-gray-100">
                                {EVENT_SITE_EXAMPLE}
                            </p>
                        </div>
                    </div>
                    <div className="py-2">
                        <SectionHeading
                            eyebrow="Your event, all together"
                            title="Give guests one link to the details"
                            description="Create an event website to share the information guests need. Browse themes for different occasions, then explore the full website preview before choosing."
                        />
                        <ul className="mt-7 space-y-3">
                            {[
                                'Browse themes for weddings and other events',
                                'Preview a design before you choose it',
                                'Share event information and guest updates',
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-[#515750] dark:text-gray-300">
                                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e8f0e7] text-[#527253] dark:bg-emerald-950 dark:text-emerald-300">
                                        <Check size={13} strokeWidth={2.5} aria-hidden="true" />
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <a href="/product/websites">
                                <Button icon={ArrowRight} iconPosition="right">
                                    Explore website themes
                                </Button>
                            </a>
                            <a
                                href="/wedding-website"
                                className="inline-flex min-h-12 items-center justify-center px-3 text-sm font-semibold text-[#80502c] hover:text-[#5f371a] dark:text-[#f0c99e] dark:hover:text-white"
                            >
                                Read the website guide
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#f0eee8] px-6 py-20 transition-colors duration-300 dark:bg-gray-900 md:px-10 md:py-28">
                <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                    <div>
                        <SectionHeading
                            eyebrow="Find your people"
                            title="Explore event vendors on your terms"
                            description="Browse published profiles and listings, compare the services on offer, and reach out when you find a good fit."
                        />
                        <a className="mt-8 inline-flex" href="/product/marketplace">
                            <Button icon={ArrowRight} iconPosition="right">
                                Browse the marketplace
                            </Button>
                        </a>
                        <p className="mt-4 text-xs leading-5 text-[#777a73] dark:text-gray-400">
                            Vendor availability and booking details are confirmed with each vendor.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        {[
                            {
                                name: 'Photography',
                                image: EVENT_IMAGES.coupleEmbrace,
                                alt: 'Wedding couple embracing during their celebration',
                            },
                            {
                                name: 'Planning',
                                image: EVENT_IMAGES.eventPlanner,
                                alt: 'Event planner coordinating a celebration',
                            },
                            {
                                name: 'Florals',
                                image: EVENT_IMAGES.florist,
                                alt: 'Florist arranging flowers for an event',
                            },
                            {
                                name: 'Celebrations',
                                image: EVENT_IMAGES.pinkGeleDance,
                                alt: 'Guests dancing at a Nigerian celebration',
                            },
                        ].map((item) => (
                            <a
                                key={item.name}
                                href="/product/marketplace"
                                className="group relative aspect-[1.15] overflow-hidden rounded-2xl bg-[#d6d3cc] ring-1 ring-black/5 dark:ring-white/10"
                            >
                                <img
                                    src={item.image}
                                    alt={item.alt}
                                    loading="lazy"
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                <span className="absolute bottom-4 left-4 text-sm font-semibold text-white">
                                    {item.name}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative isolate overflow-hidden bg-[#10141d] px-6 py-16 text-white md:px-10 md:py-28">
                <motion.img
                    src={EVENT_IMAGES.pinkGeleDance}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
                    initial={false}
                    animate={shouldReduceMotion ? { scale: 1.04 } : { scale: [1.04, 1.1, 1.04] }}
                    transition={{ duration: 24, repeat: shouldReduceMotion ? 0 : Infinity, ease: 'linear' }}
                />
                <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#101827]/80" />
                <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-[#101827]/35 via-transparent to-[#101827]/75" />
                <div className="mx-auto max-w-7xl">
                    <motion.h2
                        initial={false}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="max-w-4xl text-left text-3xl font-black leading-[1.05] tracking-[-0.045em] sm:mx-auto sm:text-center sm:text-5xl md:text-[3.4rem]"
                    >
                        <span className="block">
                            Everything <span className="font-serif italic text-[#f08a24]">you need</span>
                        </span>
                        <span className="block">
                            to plan <span className="font-serif italic text-[#f08a24]">your event</span>
                        </span>
                        <span className="block">with confidence</span>
                    </motion.h2>
                    <motion.div
                        className="mx-auto mt-10 grid max-w-3xl gap-7 sm:mt-16 sm:grid-cols-3 sm:gap-10 md:mt-20"
                    >
                        {[
                            {
                                number: '01',
                                title: 'Choose your event',
                                text: 'Start with the occasion and explore planning resources that match.',
                            },
                            {
                                number: '02',
                                title: 'Build your plan',
                                text: 'Find vendors, organise guests and explore the tools you need.',
                            },
                            {
                                number: '03',
                                title: 'Share the details',
                                text: 'Create an event website or invitation to keep everyone informed.',
                            },
                        ].map((step, index) => {
                            return (
                                <motion.article
                                    key={step.number}
                                    initial={shouldReduceMotion ? false : { y: 18 }}
                                    animate={{ y: 0 }}
                                    whileHover={shouldReduceMotion ? undefined : { y: -6 }}
                                    transition={{
                                        duration: 0.65,
                                        delay: shouldReduceMotion ? 0 : index * 0.16,
                                        ease: 'easeOut',
                                    }}
                                    className="group"
                                >
                                    <span className="block origin-left text-4xl font-black leading-none tracking-[-0.06em] text-[#f08a24] opacity-35 transition-[color,opacity,transform] duration-500 group-hover:scale-105 group-hover:text-[#ff9b35] group-hover:opacity-100 sm:text-5xl md:text-6xl">
                                            {step.number}
                                    </span>
                                    <h3 className="mt-3 text-sm font-black uppercase tracking-[0.08em] sm:mt-5 sm:text-base">{step.title}</h3>
                                    <p className="mt-2 text-xs leading-5 text-white/70 sm:mt-3">
                                        {step.text}
                                    </p>
                                </motion.article>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            <section className="bg-[#202823] px-6 py-20 text-white dark:bg-black md:px-10 md:py-28">
                <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
                    <SectionHeading
                        eyebrow="For the people behind events"
                        title="Ariya works for more than one side of the celebration"
                        description="Whether you’re hosting, coordinating or providing a service, find the path built for your work."
                        light
                    />
                    <div className="grid gap-4 sm:grid-cols-2">
                        {[
                            {
                                title: 'Planning your own event?',
                                text: 'Explore tools and resources for individuals and hosts.',
                                href: '/solutions/individuals',
                                label: 'For individuals',
                            },
                            {
                                title: 'A professional event planner?',
                                text: 'See how Ariya can support your planning workflows.',
                                href: '/solutions/planners',
                                label: 'For planners',
                            },
                            {
                                title: 'Offering event services?',
                                text: 'Learn about creating a vendor profile and reaching clients.',
                                href: '/solutions/vendors',
                                label: 'For vendors',
                            },
                            {
                                title: 'Coordinating for an organisation?',
                                text: 'Explore event solutions for organisations and teams.',
                                href: '/solutions/enterprise',
                                label: 'For organisations',
                            },
                        ].map((path) => (
                            <a
                                key={path.title}
                                href={path.href}
                                className="group rounded-2xl border border-white/15 bg-white/[0.04] p-6 transition hover:border-[#d7aa7a]/60 hover:bg-white/[0.08]"
                            >
                                <h3 className="text-lg font-semibold">{path.title}</h3>
                                <p className="mt-2 text-sm leading-6 text-white/65">{path.text}</p>
                                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#f0c99e]">
                                    {path.label}
                                    <ArrowRight
                                        size={16}
                                        className="transition-transform group-hover:translate-x-1"
                                        aria-hidden="true"
                                    />
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#fbfaf7] px-6 py-20 transition-colors duration-300 dark:bg-gray-950 md:px-10 md:py-28">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-8 rounded-[2rem] bg-[#efe6da] p-7 transition-colors duration-300 dark:bg-gray-900 md:grid-cols-[1fr_auto] md:items-center md:p-12">
                        <div className="max-w-2xl">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#80502c] dark:text-[#e3b989]">
                                Tickets & registration
                            </p>
                            <h2 className="mt-3 font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
                                Planning an event with registrations or tickets?
                            </h2>
                            <p className="mt-4 text-base leading-7 text-[#656a64] dark:text-gray-400">
                                Explore Ariya’s event ticketing and registration guides to
                                understand the options and plan the attendee experience.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                            <a
                                href="/event-ticketing-nigeria"
                                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#29372e] px-6 py-4 text-xs font-black uppercase tracking-widest text-white transition hover:bg-[#1e2922] dark:bg-primary-700 dark:hover:bg-primary-600"
                            >
                                <Ticket size={17} aria-hidden="true" />
                                Event ticketing
                                <ArrowRight size={16} aria-hidden="true" />
                            </a>
                            <a
                                href="/event-registration-nigeria"
                                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#29372e]/25 px-6 py-4 text-xs font-black uppercase tracking-widest text-[#29372e] transition hover:bg-white/60 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
                            >
                                <Users size={17} aria-hidden="true" />
                                Event registration
                                <ArrowRight size={16} aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <VideoShowcase />

            <section className="relative isolate overflow-hidden bg-[#171717] px-6 py-20 text-white md:px-10 md:py-28">
                <div
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_rgba(208,119,30,0.14),_transparent_62%)]"
                />
                <div
                    aria-hidden="true"
                    className="absolute left-[12%] top-1/4 h-1 w-1 rounded-full bg-primary-500/60 shadow-[0_0_16px_4px_rgba(208,119,30,0.25)]"
                />
                <div
                    aria-hidden="true"
                    className="absolute right-[18%] top-1/3 h-1.5 w-1.5 rounded-full bg-primary-500/50 shadow-[0_0_18px_5px_rgba(208,119,30,0.2)]"
                />
                <div
                    aria-hidden="true"
                    className="absolute bottom-1/4 left-1/4 h-1 w-1 rounded-full bg-primary-500/40 shadow-[0_0_14px_4px_rgba(208,119,30,0.2)]"
                />
                <div className="relative mx-auto max-w-5xl text-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.28em] text-primary-400">
                        The Ariya community
                    </p>
                    <h2 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
                        Join our{' '}
                        <span className="font-serif font-bold italic text-primary-400">
                            community
                        </span>
                    </h2>
                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
                        Follow along for planning tips, vendor spotlights and product
                        updates from ÀRIYÁ.
                    </p>
                    <div className="mx-auto mt-10 grid max-w-3xl gap-3 text-left sm:grid-cols-3">
                        {[
                            { label: 'Planning tips', icon: ClipboardList },
                            { label: 'Vendor spotlights', icon: Search },
                            { label: 'Product updates', icon: Globe2 },
                        ].map((item) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={item.label}
                                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 sm:justify-center"
                                >
                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-600/15 text-primary-400">
                                        <Icon size={17} aria-hidden="true" />
                                    </span>
                                    <span className="text-sm font-semibold text-white/90">
                                        {item.label}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                    <a
                        href="https://instagram.com/ariya_hq"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-9 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-xs font-black uppercase tracking-widest text-gray-950 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-primary-50"
                    >
                        Join the community
                        <ArrowRight size={16} aria-hidden="true" />
                    </a>
                </div>
            </section>

            <section className="bg-white px-6 py-20 transition-colors duration-300 dark:bg-gray-950 md:px-10 md:py-24">
                <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.75fr_1.25fr]">
                    <SectionHeading
                        eyebrow="Common questions"
                        title="A few helpful answers"
                        description="Need more detail? Visit our help centre or browse the full FAQ."
                    />
                    <div className="divide-y divide-[#e9e7e1] border-y border-[#e9e7e1] dark:divide-gray-800 dark:border-gray-800">
                        {faqs.map((faq) => (
                            <details key={faq.question} className="group py-5">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold marker:hidden">
                                    {faq.question}
                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f3f0e9] text-[#80502c] transition group-open:rotate-45 dark:bg-gray-800 dark:text-[#f0c99e]">
                                        <span aria-hidden="true" className="text-xl font-normal leading-none">+</span>
                                    </span>
                                </summary>
                                <p className="max-w-2xl pt-4 pr-8 text-sm leading-7 text-[#656a64] dark:text-gray-400">
                                    {faq.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
                <div className="mx-auto mt-8 max-w-7xl md:pl-[calc(37.5%+1.25rem)]">
                    <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
                        <a href="/resources/faq" className="text-[#80502c] hover:underline dark:text-[#f0c99e]">
                            Visit all FAQs
                        </a>
                        <a href="/resources/help-center" className="text-[#80502c] hover:underline dark:text-[#f0c99e]">
                            Open the help centre
                        </a>
                    </div>
                </div>
            </section>

            <section className="relative isolate overflow-hidden bg-[#050505] px-6 py-24 text-white md:px-10 md:py-32">
                <div
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_rgba(208,119,30,0.12),_transparent_58%)]"
                />
                <div className="relative mx-auto max-w-4xl text-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/70 sm:text-xs">
                        Start your
                    </p>
                    <h2 className="mt-5 text-5xl leading-[0.98] tracking-tight sm:text-6xl md:text-8xl">
                        <span className="block font-serif font-bold italic text-white">
                            Event Planning
                        </span>
                        <span className="mt-2 block font-black tracking-[-0.06em] text-transparent bg-gradient-to-r from-white via-primary-100 to-gray-400 bg-clip-text">
                            Journey Now
                        </span>
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-white/60 sm:text-base">
                        Find your starting point and bring the parts of your event
                        together, one step at a time.
                    </p>
                    <div className="mt-9 flex flex-col items-center gap-4">
                        <a href={APP_LINKS.signup}>
                            <Button size="lg" icon={ArrowRight} iconPosition="right" className="shadow-[0_0_40px_-10px_rgba(208,119,30,0.55)]">
                                Get started free
                            </Button>
                        </a>
                        <p className="text-[9px] font-black uppercase tracking-[0.16em] text-white/40">
                            Create your account and start exploring
                        </p>
                    </div>
                    <div className="mt-8">
                        <a
                            href="/pricing"
                            className="inline-flex min-h-10 items-center justify-center rounded-full px-5 text-xs font-bold text-white/60 transition hover:text-white"
                        >
                            Explore pricing
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
