import { Link } from 'react-router-dom';
import {
    ArrowRight,
    CalendarDays,
    Check,
    CircleHelp,
    ClipboardList,
    Heart,
    MapPin,
    MessageCircle,
    Smartphone,
    Users,
} from 'lucide-react';
import { APP_LINKS } from '../config/links';
import heroFloral from '../assets/images/hero_floral.jpg';
import heroTable from '../assets/images/hero_table.jpg';
import { EVENT_IMAGES } from '../config/eventImages';
import { DOMAIN_PRICES_NAIRA, STUDIO_PREMIUM_PRICE_NAIRA, WEBSITE_FREE_MONTHS, WEBSITE_KEEP_FOREVER_NAIRA, WEBSITE_OFFLINE_MONTHS } from '../config/pricing';
import homePreview from '../assets/images/wedding-website/home-preview.png';
import photoStoryPreview from '../assets/images/wedding-website/photo-story.png';
import coupleStoryPreview from '../assets/images/wedding-website/couple-story.png';
import schedulePreview from '../assets/images/wedding-website/event-schedule.png';
import rsvpPreview from '../assets/images/wedding-website/guest-rsvp.png';
import travelPreview from '../assets/images/wedding-website/travel-guide.png';
import wellWishesPreview from '../assets/images/wedding-website/well-wishes.png';
import wishlistPreview from '../assets/images/wedding-website/wedding-wishlist.png';
import { weddingWebsiteFaqs } from '../seo/wedding-website-content';

const formatNaira = (amount: number) => `₦${amount.toLocaleString('en-NG')}`;

const websiteDetails = [
    'A welcome page with your names, wedding date and countdown',
    'Your story and a photo-story gallery',
    'An event schedule guests can review',
    'RSVP responses, plus-one count and dietary details',
    'Venue information and a travel guide with map links',
    'A space for guests to leave well wishes',
    'An optional couple-managed wedding wishlist',
];

const websitePreviews = [
    {
        image: homePreview,
        title: 'A personal wedding homepage',
        description: 'Welcome guests with your names, date, countdown and a direct RSVP prompt.',
        alt: 'Ariya event website homepage for Zoe and Alexis with wedding date, countdown and RSVP button',
    },
    {
        image: photoStoryPreview,
        title: 'Your photo story',
        description: 'Share engagement photos and let guests follow your journey together.',
        alt: 'Ariya wedding website photo story with a couple photo carousel',
    },
    {
        image: coupleStoryPreview,
        title: 'Your story, in your words',
        description: 'Introduce yourselves with personal stories about how you met.',
        alt: 'Ariya wedding website Our Story page with a couple portrait',
    },
    {
        image: schedulePreview,
        title: 'A clear event schedule',
        description: 'Show ceremony times and activities in a timeline guests can check.',
        alt: 'Ariya wedding website schedule showing a timeline for the celebration',
    },
    {
        image: rsvpPreview,
        title: 'Guest RSVP details',
        description: 'The example RSVP form includes attendance, contact details, plus-ones and dietary information.',
        alt: 'Ariya wedding website RSVP form with attendance choice, guest details and dietary field',
    },
    {
        image: travelPreview,
        title: 'A travel guide for guests',
        description: 'Share the venue location and travel information guests need to plan their visit.',
        alt: 'Ariya wedding website travel guide showing a Lagos venue and map link',
    },
    {
        image: wellWishesPreview,
        title: 'A place for well wishes',
        description: 'Invite friends and family to leave a message or blessing for the couple.',
        alt: 'Ariya wedding website well wishes section with an invitation to send a message',
    },
    {
        image: wishlistPreview,
        title: 'An optional wedding wishlist',
        description: 'The sample shows a wishlist area for the couple’s chosen items.',
        alt: 'Ariya wedding website wishlist page managed by the couple',
    },
];

const reasons = [
    {
        icon: ClipboardList,
        title: 'Bring details together',
        text: 'Give invited guests one place to look for the information you choose to share, rather than repeating it across separate messages.',
    },
    {
        icon: CalendarDays,
        title: 'Make each event clear',
        text: 'If you are holding more than one ceremony, separate the dates, venues and instructions so guests can quickly find what applies to them.',
    },
    {
        icon: Heart,
        title: 'Make it feel like yours',
        text: 'Add a welcome and story that reflect your relationship and the kind of celebration you are planning.',
    },
    {
        icon: Smartphone,
        title: 'Share details online',
        text: 'A published event website can be shared as a link. Check your chosen platform’s options and test the experience on a phone before sending it out.',
    },
];

const creationSteps = [
    {
        title: 'Gather the details',
        text: 'Agree on what guests need to know: names, dates, venues, schedules, directions, dress guidance and the right contact for questions.',
    },
    {
        title: 'Explore AriyaHQ website tools',
        text: 'Create an account and review the current event website options and publishing details before deciding what fits your celebration.',
    },
    {
        title: 'Add and review your information',
        text: 'Use the available options to prepare your event information. Ask someone you trust to check spellings, dates, addresses and instructions.',
    },
    {
        title: 'Publish and share',
        text: 'Follow AriyaHQ’s current publishing process. If a shareable link is available, send it to the invited guests who need those details.',
    },
];

const weddingStyles = [
    {
        title: 'Traditional celebration',
        text: 'Share the event schedule, venue and any family-approved guidance guests should know. Customs differ, so confirm details with the families involved.',
        image: heroFloral,
        alt: 'Wedding rings among soft flowers',
    },
    {
        title: 'White wedding',
        text: 'Help guests find the ceremony and reception details, timings, directions and any dress guidance you want to provide.',
        image: EVENT_IMAGES.coupleReception,
        alt: 'A couple celebrating their wedding with loved ones',
    },
    {
        title: 'Destination or multi-day',
        text: 'Bring together the event schedule, locations and travel information that guests may need when planning to attend.',
        image: heroTable,
        alt: 'A decorated table set for a wedding reception',
    },
];

const costConsiderations = [
    'What the current plan includes and whether a free option is available',
    'Any setup, subscription, hosting or transaction charges',
    'Which design and editing options are included',
    'Whether a custom domain is available and what it costs',
    'Whether online RSVP tools are included in the plan',
    'How long you can access or update a published website',
];

export default function WeddingWebsitePage() {
    return (
        <main className="bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
            <section className="relative isolate overflow-hidden bg-[#fbf7f1] pt-24 dark:bg-gray-900">
                <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-16">
                    <div className="max-w-2xl">
                        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-600/15 bg-white/80 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary-700 dark:bg-gray-950/60 dark:text-primary-300">
                            <Heart className="h-3.5 w-3.5" />
                            Your wedding, in one place
                        </span>
                        <h1 className="text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
                            Create Your Beautiful Wedding Website with AriyaHQ
                        </h1>
                        <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg sm:leading-8">
                            Planning a wedding in Nigeria? A wedding website gives you an online
                            place to share the details your invited guests need, from ceremony
                            information to the story behind your celebration.
                        </p>
                        <p className="mt-4 text-sm font-bold text-gray-800 dark:text-gray-100">
                            Your wedding deserves more than an invitation. Give it a home online.
                        </p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <a
                                href={APP_LINKS.signup}
                                className="inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-600 px-3 py-4 text-[10px] font-black uppercase tracking-widest text-white transition hover:bg-primary-500 sm:w-auto sm:px-7 sm:text-xs"
                            >
                                Create your free wedding website <ArrowRight className="h-4 w-4" />
                            </a>
                            <a
                                href="#product-preview"
                                className="inline-flex min-h-12 w-full items-center justify-center whitespace-nowrap rounded-full border border-gray-300 bg-white/70 px-3 py-4 text-[10px] font-black uppercase tracking-widest text-gray-800 transition hover:bg-white dark:border-gray-700 dark:bg-gray-950/50 dark:text-white dark:hover:bg-gray-900 sm:w-auto sm:px-7 sm:text-xs"
                            >
                                See a sample website
                            </a>
                        </div>
                        <p className="mt-4 text-xs leading-5 text-gray-500 dark:text-gray-400">
                            Every AriyaHQ event includes a free public website. Custom domains
                            and removing Ariya branding are paid unlocks.
                        </p>
                    </div>

                    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
                        <div className="absolute -inset-4 -rotate-2 rounded-[2rem] bg-primary-600/10" />
                        <div className="relative overflow-hidden rounded-[1.75rem] border border-white shadow-2xl">
                            <img
                                src={EVENT_IMAGES.coupleReception}
                                alt="A couple celebrating their wedding with loved ones"
                                fetchPriority="high"
                                className="h-[340px] w-full object-cover sm:h-[440px]"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-950/85 via-gray-950/35 to-transparent px-6 pb-6 pt-20 text-white sm:px-8 sm:pb-8">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-200">
                                    A home for your celebration
                                </span>
                                <p className="mt-2 max-w-sm text-xl font-bold leading-snug sm:text-2xl">
                                    Your wedding. Your story. Your website.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <nav aria-label="On this page" className="border-b border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-950">
                <div className="mx-auto flex max-w-7xl flex-wrap gap-x-6 gap-y-3 px-6 py-5 text-xs font-bold text-gray-600 dark:text-gray-300 md:px-10 lg:px-16">
                    <a className="hover:text-primary-600" href="#why-a-website">Why a website</a>
                    <a className="hover:text-primary-600" href="#product-preview">See a sample</a>
                    <a className="hover:text-primary-600" href="#what-to-include">What to include</a>
                    <a className="hover:text-primary-600" href="#create">How to create one</a>
                    <a className="hover:text-primary-600" href="#cost">Cost considerations</a>
                    <a className="hover:text-primary-600" href="#faqs">FAQs</a>
                </div>
            </nav>

            <section id="why-a-website" className="scroll-mt-24 py-20 md:py-28">
                <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">A helpful online home</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                            A wedding website for your Nigerian celebration
                        </h2>
                        <p className="mt-5 leading-7 text-gray-600 dark:text-gray-300">
                            A wedding website is a personalised online destination for information
                            about your celebration. It can complement printed or digital invitations
                            by giving invited guests one place to revisit the details you share.
                        </p>
                    </div>
                    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {reasons.map(({ icon: Icon, title, text }) => (
                            <article
                                key={title}
                                className="rounded-3xl border border-gray-100 bg-[#fbf8f4] p-6 dark:border-gray-800 dark:bg-gray-900"
                            >
                                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-600/10 text-primary-700 dark:text-primary-300">
                                    <Icon className="h-5 w-5" aria-hidden="true" />
                                </span>
                                <h3 className="mt-5 text-lg font-black">{title}</h3>
                                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">{text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="product-preview" className="scroll-mt-24 bg-[#fbf8f4] py-20 dark:bg-gray-900/60 md:py-28">
                <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Ariya event website preview</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                            See what guests can explore
                        </h2>
                        <p className="mt-5 leading-7 text-gray-600 dark:text-gray-300">
                            These supplied screenshots show a sample Ariya wedding website on a
                            phone, from the couple’s homepage to RSVP and travel details.
                        </p>
                    </div>
                    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {websitePreviews.map(({ image, title, description, alt }) => (
                            <figure
                                key={title}
                                className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950"
                            >
                                <div className="bg-gray-100 p-3 dark:bg-gray-900">
                                    <img
                                        src={image}
                                        alt={alt}
                                        loading="lazy"
                                        className="mx-auto aspect-[9/19] w-full rounded-2xl object-contain"
                                    />
                                </div>
                                <figcaption className="p-5">
                                    <h3 className="font-black">{title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                                        {description}
                                    </p>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                    <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-5 text-gray-500 dark:text-gray-400">
                        Sample content is shown in the screenshots, including names, photos,
                        date and venue. Replace it with details for your own celebration.
                    </p>
                </div>
            </section>

            <section id="what-to-include" className="scroll-mt-24 bg-[#fbf8f4] py-20 dark:bg-gray-900/60 md:py-28">
                <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-16">
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Useful and personal</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                            What should your wedding website include?
                        </h2>
                        <p className="mt-5 leading-7 text-gray-600 dark:text-gray-300">
                            Start with information guests need, then add personal touches that
                            matter to you. Keep details clear, current and easy to scan on a phone.
                        </p>
                        <p className="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-400">
                            AriyaHQ includes guest management and RSVP tools. Check the current
                            event setup for the options available to your guests.
                        </p>
                        <Link
                            to="/wedding-rsvp-guest-management"
                            className="mt-4 inline-flex items-center gap-2 text-sm font-black text-primary-700 hover:text-primary-600 dark:text-primary-300"
                        >
                            Wedding RSVP and guest management guide <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                    <div className="rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950 sm:p-8">
                        <ul className="grid gap-4 sm:grid-cols-2">
                            {websiteDetails.map((detail) => (
                                <li key={detail} className="flex gap-3 text-sm leading-6 text-gray-700 dark:text-gray-300">
                                    <Check className="mt-1 h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
                                    <span>{detail}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 rounded-2xl bg-[#fbf8f4] p-5 dark:bg-gray-900">
                            <div className="flex gap-3">
                                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" aria-hidden="true" />
                                <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
                                    For traditional and white weddings, list each event separately.
                                    Confirm cultural, family and ceremony details with the people
                                    involved; practices vary across families and communities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-28">
                <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Make it yours</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                            Wedding website ideas for every kind of celebration
                        </h2>
                        <p className="mt-5 leading-7 text-gray-600 dark:text-gray-300">
                            Your wedding website design can reflect your personality and plans.
                            These are starting points for the content and mood—not a promise of
                            specific AriyaHQ templates.
                        </p>
                    </div>
                    <div className="mt-12 grid gap-6 md:grid-cols-3">
                        {weddingStyles.map((style) => (
                            <article
                                key={style.title}
                                className="overflow-hidden rounded-3xl border border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-900"
                            >
                                <img
                                    src={style.image}
                                    alt={style.alt}
                                    loading="lazy"
                                    className="h-56 w-full object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-lg font-black">{style.title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">{style.text}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="create" className="scroll-mt-24 bg-gray-950 py-20 text-white md:py-28">
                <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-16">
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-200">From idea to online</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                            How to create a wedding website
                        </h2>
                        <p className="mt-5 leading-7 text-gray-300">
                            Use these practical steps to prepare. AriyaHQ offers event website
                            tools; review the current product flow and options as you get started.
                        </p>
                        <a
                            href={APP_LINKS.signup}
                            className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-600 px-3 py-4 text-[10px] font-black uppercase tracking-widest text-white transition hover:bg-primary-500 sm:w-auto sm:px-7 sm:text-xs"
                        >
                            Get started with AriyaHQ <ArrowRight className="h-4 w-4" />
                        </a>
                    </div>
                    <ol className="space-y-4">
                        {creationSteps.map((step, index) => (
                            <li key={step.title} className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-600 text-sm font-black">
                                    {index + 1}
                                </span>
                                <div>
                                    <h3 className="font-black">{step.title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-gray-300">{step.text}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <section className="py-20 md:py-28">
                <div className="mx-auto grid max-w-7xl gap-8 px-6 md:px-10 lg:grid-cols-2 lg:px-16">
                    <article className="rounded-[2rem] border border-gray-100 bg-white p-7 dark:border-gray-800 dark:bg-gray-900 sm:p-9">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-600/10 text-primary-700 dark:text-primary-300">
                            <MessageCircle className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <h2 className="mt-5 text-2xl font-black tracking-tight">Wedding website or digital invitation?</h2>
                        <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                            An invitation announces the celebration and invites someone to attend.
                            A wedding website can hold fuller details guests may want to revisit.
                            They can work together: use the invitation to share the occasion and
                            point guests to the website for additional information.
                        </p>
                        <Link
                            to="/product/websites"
                            className="mt-6 inline-flex items-center gap-2 text-sm font-black text-primary-700 hover:text-primary-600 dark:text-primary-300"
                        >
                            Explore AriyaHQ event websites <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                            to="/digital-wedding-invitations"
                            className="mt-4 flex items-center gap-2 text-sm font-black text-primary-700 hover:text-primary-600 dark:text-primary-300"
                        >
                            Read the digital wedding invitations guide <ArrowRight className="h-4 w-4" />
                        </Link>
                    </article>

                    <article id="cost" className="scroll-mt-24 rounded-[2rem] border border-gray-100 bg-[#fbf8f4] p-7 dark:border-gray-800 dark:bg-gray-900/60 sm:p-9">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-600/10 text-primary-700 dark:text-primary-300">
                            <CircleHelp className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <h2 className="mt-5 text-2xl font-black tracking-tight">Compare wedding website costs</h2>
                        <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                            Every AriyaHQ event includes a free public website at a
                            your-slug.ariyahq.com address with Ariya branding. A custom domain
                            includes hosting and removes Ariya branding. Current Ariya website
                            and design prices:
                        </p>
                        <ul className="mt-5 space-y-3">
                            <li className="flex gap-3 text-sm leading-6 text-gray-700 dark:text-gray-300">
                                <Check className="mt-1 h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
                                <span>Event website: free for {WEBSITE_FREE_MONTHS} months after the event; archive access continues until month {WEBSITE_OFFLINE_MONTHS}.</span>
                            </li>
                            {Object.entries(DOMAIN_PRICES_NAIRA).map(([tld, price]) => (
                                <li key={tld} className="flex gap-3 text-sm leading-6 text-gray-700 dark:text-gray-300">
                                    <Check className="mt-1 h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
                                    <span>.{tld} domain: {formatNaira(price)} first year; renewal {formatNaira(Math.round(price * 1.6))}/year.</span>
                                </li>
                            ))}
                            <li className="flex gap-3 text-sm leading-6 text-gray-700 dark:text-gray-300">
                                <Check className="mt-1 h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
                                <span>Ariya Studio Premium template library: {formatNaira(STUDIO_PREMIUM_PRICE_NAIRA)} one-time for lifetime access.</span>
                            </li>
                            <li className="flex gap-3 text-sm leading-6 text-gray-700 dark:text-gray-300">
                                <Check className="mt-1 h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
                                <span>Keep a website live after the event: {formatNaira(WEBSITE_KEEP_FOREVER_NAIRA)} one-time per website.</span>
                            </li>
                        </ul>
                        <p className="mt-6 text-sm leading-6 text-gray-600 dark:text-gray-300">
                            When comparing website builders, also check:
                        </p>
                        <ul className="mt-5 space-y-3">
                            {costConsiderations.map((item) => (
                                <li key={item} className="flex gap-3 text-sm leading-6 text-gray-700 dark:text-gray-300">
                                    <Check className="mt-1 h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Link
                            to="/pricing"
                            className="mt-6 inline-flex items-center gap-2 text-sm font-black text-primary-700 hover:text-primary-600 dark:text-primary-300"
                        >
                            Check AriyaHQ pricing <ArrowRight className="h-4 w-4" />
                        </Link>
                    </article>
                </div>
            </section>

            <section className="border-y border-gray-100 bg-[#fbf8f4] py-16 dark:border-gray-800 dark:bg-gray-900/60">
                <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between md:px-10 lg:px-16">
                    <div className="max-w-2xl">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Planning the whole celebration?</span>
                        <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">Build your wedding plan one decision at a time.</h2>
                        <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                            Explore the complete Nigerian wedding planning guide for budgets,
                            timelines, venues, vendors and guest organisation.
                        </p>
                    </div>
                    <Link
                        to="/wedding-planning"
                        className="inline-flex min-h-12 w-full min-w-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-gray-300 bg-white px-3 py-4 text-[10px] font-black uppercase tracking-widest transition hover:border-primary-600 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-950 dark:hover:text-primary-300 sm:w-auto sm:px-6 sm:text-xs sm:shrink-0"
                    >
                        Read the wedding planning guide <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </section>

            <section id="faqs" className="scroll-mt-24 py-20 md:py-28">
                <div className="mx-auto max-w-4xl px-6 md:px-10">
                    <div className="text-center">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Helpful answers</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                            Wedding website FAQs
                        </h2>
                    </div>
                    <div className="mt-10 divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800">
                        {weddingWebsiteFaqs.map(({ question, answer }) => (
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

            <section className="bg-primary-700 px-6 py-16 text-white md:py-20">
                <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
                    <Users className="h-9 w-9 text-white/70" aria-hidden="true" />
                    <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-5xl">
                        Give your wedding a home online.
                    </h2>
                    <p className="mt-4 max-w-2xl leading-7 text-white/85">
                        Explore AriyaHQ’s event website tools and see whether they fit the way
                        you want to share your celebration.
                    </p>
                    <a
                        href={APP_LINKS.signup}
                        className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white px-3 py-4 text-[10px] font-black uppercase tracking-widest text-primary-800 transition hover:bg-orange-50 sm:w-auto sm:px-7 sm:text-xs"
                    >
                        Create your free wedding website <ArrowRight className="h-4 w-4" />
                    </a>
                </div>
            </section>
        </main>
    );
}
