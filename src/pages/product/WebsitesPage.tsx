import React, { useMemo, useState } from 'react';
import {
    Globe,
    Smartphone,
    Gift,
    ArrowRight,
    Palette,
    CheckCircle2,
    Search,
    X,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AccountActionModal from '../../components/common/AccountActionModal';
import { DOMAIN_PRICES_NAIRA, STUDIO_PREMIUM_PRICE_NAIRA, WEBSITE_FREE_MONTHS, WEBSITE_KEEP_FOREVER_NAIRA, WEBSITE_OFFLINE_MONTHS } from '../../config/pricing';
import websiteTemplateCatalog from '../../data/websiteTemplates.json';

const formatNaira = (amount: number) => `₦${amount.toLocaleString('en-NG')}`;

type EventType = 'wedding' | 'corporate' | 'birthday' | 'baby_shower' | 'gala' | 'graduation';

type WebsiteTemplate = {
    id: string;
    type: EventType;
    name: string;
    image: string;
    isPremium: boolean;
    design: {
        primaryColor: string;
        accentColor?: string;
        fontHeading: string;
        layoutMode: 'split' | 'centered';
        buttonStyle?: 'pill' | 'outline' | 'solid' | 'monogram';
        visualTier?: 'free' | 'premium';
        imageTreatment?: 'soft' | 'contrast' | 'monochrome' | 'warm' | 'duotone';
    };
};

const websiteTemplates = websiteTemplateCatalog as WebsiteTemplate[];
const EVENT_TYPES: { id: 'all' | EventType; label: string }[] = [
    { id: 'all', label: 'All events' },
    { id: 'wedding', label: 'Weddings' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'birthday', label: 'Birthdays' },
    { id: 'baby_shower', label: 'Baby showers' },
    { id: 'gala', label: 'Galas' },
    { id: 'graduation', label: 'Graduations' },
];

const EVENT_LABELS: Record<EventType, string> = {
    wedding: 'Wedding',
    corporate: 'Corporate',
    birthday: 'Birthday',
    baby_shower: 'Baby shower',
    gala: 'Gala',
    graduation: 'Graduation',
};

const PREVIEW_COPY: Record<EventType, { title: string; subtitle: string; date: string; action: string }> = {
    wedding: { title: 'Sarah & Michael', subtitle: 'Are getting married!', date: 'June 15', action: 'RSVP now' },
    corporate: { title: 'Innovation Summit', subtitle: 'Join us for the conference', date: 'October 24', action: 'Register now' },
    birthday: { title: "Ella's 30th", subtitle: "Let's celebrate!", date: 'November 12', action: 'RSVP now' },
    baby_shower: { title: 'Welcome Baby', subtitle: 'A baby shower celebration', date: 'December 05', action: 'RSVP now' },
    gala: { title: 'Annual Charity Gala', subtitle: 'An evening to make a difference', date: 'September 18', action: 'Get tickets' },
    graduation: { title: 'Class of 2026', subtitle: 'Graduation ceremony', date: 'June 20', action: 'RSVP now' },
};

const eventLabel = (type: EventType) => EVENT_LABELS[type];

function WebsiteThemePreview({
    template,
    className = '',
    loading = 'lazy',
}: {
    template: WebsiteTemplate;
    className?: string;
    loading?: 'eager' | 'lazy';
}) {
    const { design } = template;
    const isSplit = design.layoutMode === 'split';
    const copy = PREVIEW_COPY[template.type];
    const premiumLook = design.visualTier === 'premium';
    const fontFamily = design.fontHeading === 'font-serif'
        ? 'Georgia, "Times New Roman", serif'
        : design.fontHeading === 'font-mono'
            ? '"Courier New", monospace'
            : 'Arial, sans-serif';

    return (
        <div
            role="img"
            aria-label={`${template.name} ${eventLabel(template.type).toLowerCase()} website preview`}
            className={`absolute inset-2 flex flex-col overflow-hidden bg-[#fffaf5] shadow-lg ${premiumLook ? 'border' : 'rounded-xl border border-white/80'} ${className}`}
            style={{ color: design.primaryColor, borderColor: premiumLook ? `${design.accentColor ?? design.primaryColor}99` : undefined }}
        >
            <div className="flex h-7 shrink-0 items-center justify-between border-b border-black/5 bg-[#fffaf5] px-3">
                <span className="text-[9px] font-semibold" style={{ fontFamily }}>A &amp; D</span>
                <div aria-hidden="true" className="flex items-center gap-1">
                    <span className="text-[5px] font-bold uppercase tracking-wider opacity-65">Home</span>
                    <span className="text-[5px] font-bold uppercase tracking-wider opacity-65">Our story</span>
                    <span className="text-[5px] font-bold uppercase tracking-wider opacity-65">RSVP</span>
                </div>
            </div>
            {isSplit ? (
                <div className="relative grid min-h-0 flex-1 grid-cols-2 bg-black text-white">
                    <div className={`relative z-10 flex flex-col items-center justify-center gap-2 px-2 py-3 text-center ${premiumLook ? 'bg-black/70' : 'bg-black/50'}`}>
                        <span className="border px-2 py-1 text-[5px] font-bold uppercase tracking-[0.2em]" style={{ borderColor: `${design.accentColor ?? '#ffffff'}66`, color: premiumLook ? design.accentColor : '#fff' }}>Est. {copy.date}</span>
                        <span className="text-[clamp(14px,2.4vw,27px)] leading-[0.95]" style={{ fontFamily }}>
                            {copy.title}
                        </span>
                        <span className="text-[6px] italic opacity-85">{copy.subtitle}</span>
                        <span className="text-[6px] font-bold uppercase tracking-[0.15em]">00 : 00 : 00 : 00</span>
                        <span className={`px-3 py-1.5 text-[5px] font-black uppercase tracking-widest text-gray-900 ${premiumLook ? '' : 'rounded-full'}`} style={{ backgroundColor: design.accentColor ?? '#fff' }}>{copy.action}</span>
                    </div>
                    <div className="relative min-h-0 overflow-hidden">
                        <img src={template.image} alt="" aria-hidden="true" loading={loading} decoding="async" className="absolute inset-0 h-full w-full object-cover" style={{ filter: design.imageTreatment === 'monochrome' ? 'grayscale(1)' : design.imageTreatment === 'warm' ? 'sepia(.16) saturate(1.12)' : design.imageTreatment === 'contrast' ? 'contrast(1.14) saturate(.9)' : undefined }} />
                    </div>
                </div>
            ) : (
                <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden text-center text-white" style={{ backgroundColor: design.primaryColor }}>
                    <img src={template.image} alt="" aria-hidden="true" loading={loading} decoding="async" className="absolute inset-0 h-full w-full object-cover" style={{ opacity: premiumLook ? 0.62 : 0.78, filter: design.imageTreatment === 'monochrome' ? 'grayscale(1)' : design.imageTreatment === 'warm' ? 'sepia(.16) saturate(1.12)' : design.imageTreatment === 'contrast' ? 'contrast(1.14) saturate(.9)' : undefined }} />
                    <div aria-hidden="true" className={`absolute inset-0 ${premiumLook ? 'bg-gradient-to-b from-black/70 via-black/20 to-black/80' : 'bg-black/35'}`} />
                    {premiumLook && <div aria-hidden="true" className="absolute inset-3 border" style={{ borderColor: `${design.accentColor ?? design.primaryColor}77` }} />}
                    <div className="relative px-3 py-4">
                        <span className="border px-2 py-1 text-[5px] font-bold uppercase tracking-[0.2em]" style={{ borderColor: `${design.accentColor ?? '#ffffff'}88`, color: premiumLook ? design.accentColor : '#fff' }}>Est. {copy.date}</span>
                        <h3 className="mt-3 text-[clamp(16px,2.8vw,30px)] leading-[0.95]" style={{ fontFamily }}>{copy.title}</h3>
                        <p className="mt-2 text-[7px] italic opacity-90">{copy.subtitle}</p>
                        <div className="my-3 flex justify-center gap-1">
                            {['DAYS', 'HRS', 'MINS', 'SECS'].map((unit) => <span key={unit} className="border border-white/20 bg-white/10 px-1.5 py-1 text-[4px] font-bold">{unit}<br />00</span>)}
                        </div>
                        <span className={`inline-flex border px-3 py-1.5 text-[5px] font-black uppercase tracking-widest ${premiumLook && design.buttonStyle === 'outline' ? '' : 'rounded-full'}`} style={{ borderColor: design.accentColor ?? '#fff', backgroundColor: premiumLook ? design.accentColor : '#fff', color: '#111' }}>{copy.action}</span>
                    </div>
                </div>
            )}
            <div className="flex h-5 shrink-0 items-center justify-center border-t border-black/5 bg-[#fffaf5] px-2 text-[6px] font-semibold uppercase tracking-[0.14em]" style={{ color: design.primaryColor, fontFamily }}>
                {premiumLook ? 'Premium Edition' : `${template.name} Theme`}
            </div>
        </div>
    );
}

export default function WebsitesPage() {
    const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [eventFilter, setEventFilter] = useState<'all' | EventType>('all');
    const [accessFilter, setAccessFilter] = useState<'all' | 'included' | 'premium'>('all');
    const filteredTemplates = useMemo(() => {
        const query = searchTerm.trim().toLowerCase();
        return websiteTemplates.filter((template) => {
            const matchesEvent = eventFilter === 'all' || template.type === eventFilter;
            const matchesAccess = accessFilter === 'all'
                || (accessFilter === 'premium' ? template.isPremium : !template.isPremium);
            const searchableText = `${template.name} ${eventLabel(template.type)} ${template.design.layoutMode} ${template.isPremium ? 'premium' : 'included'}`.toLowerCase();
            return matchesEvent && matchesAccess && (!query || searchableText.includes(query));
        });
    }, [searchTerm, eventFilter, accessFilter]);
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <main className="min-h-screen bg-white pt-24 text-gray-900 dark:bg-gray-950 dark:text-white selection:bg-primary-600 selection:text-white">
            {/* Hero Section */}
            <section className="relative isolate overflow-hidden bg-[#fbf6ef] dark:bg-gray-900">
                <div aria-hidden="true" className="absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-primary-400/20 blur-3xl" />
                <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 md:px-10 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <span className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white/80 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-primary-700 shadow-sm dark:border-primary-900 dark:bg-gray-950/70 dark:text-primary-300">Event websites · Ariya themes</span>
                        <h1 className="mt-6 font-serif text-5xl leading-[1.04] tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl">
                            Your day, in a place of its own.
                        </h1>
                        <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg">
                            Bring your event details, guest information and celebration story together in one shareable website.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <button type="button" onClick={() => setSelectedTheme('your event website')} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary-600 px-7 py-4 text-xs font-black uppercase tracking-widest text-white shadow-lg shadow-primary-600/20 transition hover:-translate-y-0.5 hover:bg-primary-700">
                                Create your website <ArrowRight className="h-4 w-4" />
                            </button>
                            <a href="#templates" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-gray-300 bg-white/70 px-7 py-4 text-xs font-black uppercase tracking-widest text-gray-800 transition hover:border-primary-500 dark:border-gray-700 dark:bg-gray-950/60 dark:text-white">
                                Browse the themes <ArrowRight className="h-4 w-4" />
                            </a>
                        </div>
                    </motion.div>

                    <div className="relative mx-auto w-full max-w-xl">
                        <div aria-hidden="true" className="absolute inset-8 rounded-[2.5rem] bg-primary-200/70 rotate-3 dark:bg-primary-950/50" />
                        <div className="relative grid grid-cols-2 gap-3 rounded-[2rem] border border-white/80 bg-white/80 p-4 shadow-2xl shadow-gray-900/10 backdrop-blur dark:border-gray-700 dark:bg-gray-950/80 sm:p-6">
                            <div className="relative row-span-2 min-h-64 overflow-hidden rounded-2xl" style={{ backgroundColor: websiteTemplates[0].design.primaryColor }}>
                                <WebsiteThemePreview template={websiteTemplates[0]} className="inset-3" loading="eager" />
                            </div>
                            {websiteTemplates.slice(1, 3).map((template) => (
                                <div key={template.id} className="relative min-h-32 overflow-hidden rounded-2xl" style={{ backgroundColor: template.design.primaryColor }}>
                                    <WebsiteThemePreview template={template} loading="eager" />
                                </div>
                            ))}
                            <div className="col-span-2 flex items-center justify-between rounded-2xl bg-[#fbf6ef] px-4 py-3 dark:bg-gray-800">
                                <span className="font-serif text-lg text-gray-800 dark:text-gray-100">One home for your celebration</span>
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary-700 dark:bg-gray-900"><Globe className="h-4 w-4" /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Features */}
            <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
                <div className="mb-16 grid grid-cols-1 gap-5 md:grid-cols-3">
                    <DesignPillar
                        icon={Palette}
                        title="Artisan Templates"
                        desc="Pick a theme, add your event details, and publish. Your site is live in minutes."
                    />
                    <DesignPillar
                        icon={Smartphone}
                        title="Mobile Perfect"
                        desc="Your site will look like a bespoke app on every guest's phone, from day one."
                    />
                    <DesignPillar
                        icon={Gift}
                        title="Universal Wishlist"
                        desc="Add gift ideas or cash-fund goals. Review the current payment and settlement terms before sharing your list."
                    />
                </div>

                {/* Wishlist Sync Deep Dive */}
                <div className="relative isolate overflow-hidden rounded-[2rem] bg-gray-950 p-7 md:p-12 lg:p-16">
                    <div aria-hidden="true" className="absolute -bottom-20 right-0 -z-10 h-80 w-80 rounded-full bg-primary-600/20 blur-3xl" />
                    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
                        <motion.div {...fadeIn}>
                            <span className="mb-4 block text-[10px] font-black uppercase tracking-[0.18em] text-primary-300">Integrated wishlist</span>
                            <h2 className="mb-6 font-serif text-4xl leading-tight tracking-tight text-white md:text-5xl">Gifting made effortless and elegant.</h2>
                            <p className="mb-8 max-w-xl leading-relaxed text-gray-300">
                                Keep event details and gift ideas together in one place. Add physical
                                items or a cash-fund goal, then share the wishlist with invited guests.
                            </p>
                            <div className="space-y-4">
                                <SyncItem text="Direct ₦ Cash Fund integration for local accounts." />
                                <SyncItem text="External store linking (Amazon, Konga, etc.)" />
                                <SyncItem text="Secret 'Surprise' updates for planners only." />
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-4">
                            {['Home essentials', 'Kitchen items', 'Experiences', 'Cash fund'].map((category, index) => (
                                <div key={category} className={`flex min-h-28 items-center justify-center rounded-3xl border p-5 text-center font-serif text-lg text-white ${index % 2 === 0 ? 'border-primary-300/20 bg-primary-500/10' : 'border-rose-300/20 bg-rose-500/10'}`}>
                                    {category}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Template Gallery Preview */}
            <section id="templates" className="scroll-mt-24 border-y border-gray-100 bg-[#fdfbf8] py-16 dark:border-gray-800 dark:bg-gray-900/70 md:py-20">
                <div className="mx-auto max-w-7xl px-6 md:px-10">
                    <div className="mb-8 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-700 dark:text-primary-300">Find your look</span>
                            <h2 className="mt-3 font-serif text-3xl tracking-tight text-gray-900 dark:text-white md:text-5xl">Find your event website theme</h2>
                            <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-500 dark:text-gray-400">
                                Explore the same Ariya themes available in the website builder, for weddings and every kind of celebration.
                            </p>
                        </div>
                    </div>

                    <div className="rounded-3xl border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950 sm:p-6">
                        <label htmlFor="website-theme-search" className="sr-only">Search website themes</label>
                        <div className="relative">
                            <Search aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                            <input
                                id="website-theme-search"
                                type="search"
                                value={searchTerm}
                                onChange={(event) => setSearchTerm(event.target.value)}
                                placeholder="Search themes, styles or event types"
                                className="min-h-12 w-full rounded-2xl border border-gray-200 bg-gray-50 py-3 pl-12 pr-12 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                            />
                            {searchTerm && (
                                <button type="button" onClick={() => setSearchTerm('')} aria-label="Clear theme search" className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700">
                                    <X className="h-4 w-4" />
                                </button>
                            )}
                        </div>

                        <div className="mt-5">
                            <p className="mb-2 text-[10px] font-black uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400">Event type</p>
                            <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
                                {EVENT_TYPES.map(({ id, label }) => {
                                    const active = eventFilter === id;
                                    const count = id === 'all' ? websiteTemplates.length : websiteTemplates.filter((template) => template.type === id).length;
                                    return (
                                        <button
                                            key={id}
                                            type="button"
                                            aria-pressed={active}
                                            onClick={() => setEventFilter(id)}
                                            className={`inline-flex min-h-10 shrink-0 items-center gap-2 rounded-full border px-4 text-xs font-bold transition ${active ? 'border-primary-600 bg-primary-600 text-white shadow-sm' : 'border-gray-200 bg-white text-gray-600 hover:border-primary-300 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-300 dark:hover:border-primary-700'}`}
                                        >
                                            {label}<span className={`text-[10px] ${active ? 'text-white/75' : 'text-gray-400'}`}>{count}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                            <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter by template access">
                                <span className="mr-1 text-[10px] font-black uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400">Access</span>
                                {(['all', 'included', 'premium'] as const).map((filter) => (
                                    <button
                                        key={filter}
                                        type="button"
                                        aria-pressed={accessFilter === filter}
                                        onClick={() => setAccessFilter(filter)}
                                        className={`min-h-9 rounded-full px-3 text-xs font-bold capitalize transition ${accessFilter === filter ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white'}`}
                                    >
                                        {filter === 'all' ? 'All themes' : filter}
                                    </button>
                                ))}
                            </div>
                            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400" aria-live="polite">
                                Showing <span className="text-gray-900 dark:text-white">{filteredTemplates.length}</span> of {websiteTemplates.length} themes
                            </p>
                        </div>
                    </div>

                    {filteredTemplates.length > 0 ? (
                    <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {filteredTemplates.map((template) => (
                            <article key={template.id} className="group overflow-hidden rounded-[1.5rem] border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-900/10 dark:border-gray-800 dark:bg-gray-950 dark:hover:shadow-black/30">
                                <div className="relative aspect-[4/5] overflow-hidden" style={{ backgroundColor: template.design.primaryColor }}>
                                    <WebsiteThemePreview template={template} />
                                    <span className={`absolute left-4 top-4 rounded-full px-3 py-1.5 text-[9px] font-black uppercase tracking-wider shadow-sm backdrop-blur ${template.isPremium ? 'bg-gray-950/75 text-white' : 'bg-white/90 text-gray-800'}`}>{template.isPremium ? 'Premium' : 'Included'}</span>
                                    <span className="absolute bottom-4 left-4 rounded-full border border-white/60 bg-gray-950/75 px-3 py-1 text-[9px] font-bold text-white backdrop-blur">{template.design.layoutMode} hero</span>
                                </div>
                                <div className="p-5">
                                    <h4 className="font-black text-gray-900 dark:text-white">{template.name}</h4>
                                    <div className="mt-2 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                                        <span aria-hidden="true" className="h-3 w-3 rounded-full border border-black/10" style={{ backgroundColor: template.design.primaryColor }} />
                                        <span>{eventLabel(template.type)} · {template.design.layoutMode} hero · {template.isPremium ? 'Premium' : 'Included'}</span>
                                    </div>
                                    <button type="button" onClick={() => setSelectedTheme(`${template.name} ${eventLabel(template.type)} website`)} className="mt-4 inline-flex min-h-10 items-center gap-2 rounded-full bg-primary-50 px-4 text-[10px] font-black uppercase tracking-wider text-primary-800 transition hover:bg-primary-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:bg-primary-950/60 dark:text-primary-200 dark:hover:bg-primary-700">
                                        Choose this theme <ArrowRight className="h-3.5 w-3.5" />
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                    ) : (
                        <div className="mt-7 rounded-3xl border border-dashed border-gray-300 bg-white px-6 py-14 text-center dark:border-gray-700 dark:bg-gray-950">
                            <Search className="mx-auto h-8 w-8 text-gray-400" />
                            <h3 className="mt-4 font-serif text-2xl text-gray-900 dark:text-white">No themes match those filters</h3>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Try another search or clear the filters to see all event themes.</p>
                            <button type="button" onClick={() => { setSearchTerm(''); setEventFilter('all'); setAccessFilter('all'); }} className="mt-5 inline-flex min-h-10 items-center rounded-full bg-primary-600 px-5 text-xs font-black uppercase tracking-wider text-white transition hover:bg-primary-700">
                                Clear filters
                            </button>
                        </div>
                    )}
                    <div className="mt-12 rounded-3xl border border-gray-100 bg-white p-8 dark:border-gray-800 dark:bg-gray-950">
                        <h3 className="text-xl font-black text-gray-900 dark:text-white">Looking for invitations and stationery?</h3>
                        <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">Ariya Studio designs are on their own page, separate from event website themes.</p>
                        <Link to="/product/studio-designs" className="mt-5 inline-flex items-center gap-2 whitespace-nowrap text-sm font-bold text-primary-700 dark:text-primary-300">
                            Browse Ariya Studio designs <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="px-8 py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-3xl">
                        <span className="section-label mb-4 block">Transparent pricing</span>
                        <h2 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white md:text-4xl">Website and design costs</h2>
                        <p className="mt-4 text-sm leading-6 text-gray-500 dark:text-gray-400">Start with the included event website; pay only for optional upgrades you choose.</p>
                    </div>
                    <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                        <PriceCard title="Event website" value="Free" detail={`${WEBSITE_FREE_MONTHS} months live after the event; archive access continues until month ${WEBSITE_OFFLINE_MONTHS}.`} />
                        <PriceCard title="Premium template library" value={`${formatNaira(STUDIO_PREMIUM_PRICE_NAIRA)} once`} detail="Lifetime access to Ariya Studio Premium." />
                        <PriceCard title="Keep a website live" value={`${formatNaira(WEBSITE_KEEP_FOREVER_NAIRA)} once`} detail="One-time per website, with no renewal." />
                        <PriceCard
                            title="Custom domain registration"
                            value={`${formatNaira(DOMAIN_PRICES_NAIRA.com)} first year`}
                            detail={`.com renewal: ${formatNaira(Math.round(DOMAIN_PRICES_NAIRA.com * 1.6))}/year. Other supported domains and renewals are listed on the pricing page.`}
                        />
                    </div>
                    <Link to="/pricing" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary-700 dark:text-primary-300">
                        See all domain prices and fees <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </section>

            {/* Final CTA */}
            <section className="relative isolate overflow-hidden bg-gray-950 px-6 py-20 text-center text-white dark:bg-black md:px-10 md:py-24">
                <div aria-hidden="true" className="absolute -right-20 -top-32 -z-10 h-96 w-96 rounded-full bg-primary-600/25 blur-3xl" />
                <div className="max-w-4xl mx-auto">
                    <Globe className="mx-auto mb-6 h-10 w-10 text-primary-300" />
                    <h2 className="font-serif text-4xl tracking-tight md:text-6xl">Give your celebration a home of its own.</h2>
                    <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-gray-300">Choose a theme and bring your event details together in one shareable place.</p>
                    <button type="button" onClick={() => setSelectedTheme('your event website')} className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary-600 px-8 py-4 text-xs font-black uppercase tracking-widest text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-primary-500">
                        Create your website <ArrowRight className="h-4 w-4" />
                    </button>
                </div>
            </section>
            {selectedTheme && (
                <AccountActionModal
                    title={selectedTheme === 'your event website' ? 'Create your event website' : `Choose ${selectedTheme}`}
                    description="Create an account or log in to start building an event website with this Ariya theme."
                    onClose={() => setSelectedTheme(null)}
                    createAccountLabel="Start your website"
                />
            )}
        </main>
    );
}

const DesignPillar = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
    <div className="premium-card group h-full rounded-3xl p-7 transition-all hover:-translate-y-1 hover:border-primary-300 hover:shadow-lg dark:hover:border-primary-700">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-700 transition-all group-hover:bg-primary-600 group-hover:text-white dark:bg-primary-900/30 dark:text-primary-300">
            <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4 tracking-tighter uppercase leading-none">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">{desc}</p>
    </div>
);

const SyncItem = ({ text }: { text: string }) => (
    <div className="flex items-center gap-4">
        <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="h-3 w-3 text-primary-300" />
        </div>
        <span className="text-sm font-bold text-gray-300 tracking-tight leading-none">{text}</span>
    </div>
);

const PriceCard = ({ title, value, detail }: { title: string; value: string; detail: string }) => (
    <div className="rounded-3xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="text-xs font-black uppercase tracking-wider text-gray-500 dark:text-gray-400">{title}</h3>
        <p className="mt-3 text-xl font-black text-gray-900 dark:text-white">{value}</p>
        <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">{detail}</p>
    </div>
);
