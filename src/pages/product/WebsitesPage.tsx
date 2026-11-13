import React from 'react';
import {
    Globe,
    Smartphone,
    Gift,
    ArrowRight,
    Palette,
    CheckCircle2
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { APP_LINKS } from '../../config/links';
import { EVENT_IMAGES } from '../../config/eventImages';
import { DOMAIN_PRICES_NAIRA, STUDIO_PREMIUM_PRICE_NAIRA, WEBSITE_FREE_MONTHS, WEBSITE_KEEP_FOREVER_NAIRA, WEBSITE_OFFLINE_MONTHS } from '../../config/pricing';

const formatNaira = (amount: number) => `₦${amount.toLocaleString('en-NG')}`;

const websiteTemplates = [
    { name: 'Midnight Serenade', color: '#1A202C', layout: 'Split hero', image: EVENT_IMAGES.coupleWalking, premium: false },
    { name: 'Secret Garden', color: '#1F3B2C', layout: 'Centered hero', image: EVENT_IMAGES.yorubaCouple, premium: false },
    { name: 'Modern Muse', color: '#000000', layout: 'Split hero', image: EVENT_IMAGES.coupleReception, premium: false },
    { name: 'Boho Rhapsody', color: '#C05621', layout: 'Centered hero', image: EVENT_IMAGES.pinkGeleCelebration, premium: false },
    { name: 'Vintage Velvet', color: '#9B2C2C', layout: 'Split hero', image: EVENT_IMAGES.coupleVenue, premium: false },
    { name: 'Industrial Glow', color: '#2D3748', layout: 'Split hero', image: EVENT_IMAGES.coupleReceptionGuests, premium: true },
    { name: 'Azure Breeze', color: '#2B6CB0', layout: 'Centered hero', image: EVENT_IMAGES.coupleEmbrace, premium: true },
    { name: 'Royal Jubilee', color: '#553C9A', layout: 'Split hero', image: EVENT_IMAGES.pinkGeleDance, premium: true },
    { name: 'Rustic Timber', color: '#744210', layout: 'Centered hero', image: EVENT_IMAGES.womenCelebrating, premium: true },
    { name: 'Celestial Dream', color: '#2C5282', layout: 'Split hero', image: EVENT_IMAGES.menCelebrating, premium: true },
    { name: 'Atelier Vows', color: '#111111', layout: 'Centered hero', image: EVENT_IMAGES.coupleWalking, premium: true },
    { name: 'Villa Aurelia', color: '#2C3428', layout: 'Split hero', image: EVENT_IMAGES.yorubaCouple, premium: true },
    { name: 'Black Tie Bloom', color: '#070707', layout: 'Split hero', image: EVENT_IMAGES.coupleReception, premium: true },
    { name: 'Maison Floral', color: '#6F3D46', layout: 'Centered hero', image: EVENT_IMAGES.pinkGeleCelebration, premium: true },
    { name: 'Heritage Union', color: '#3A2A20', layout: 'Centered hero', image: EVENT_IMAGES.coupleVenue, premium: true },
];

export default function WebsitesPage() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <main className="pt-24 bg-white dark:bg-gray-950 min-h-screen selection:bg-indigo-600 selection:text-white">
            {/* Hero Section */}
            <section className="relative py-32 px-8 overflow-hidden bg-indigo-50 dark:bg-indigo-900/10">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-indigo-200/50 via-transparent to-transparent dark:from-indigo-900/20 opacity-50 pointer-events-none" />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="section-label mb-4 block text-indigo-600 dark:text-indigo-400">Event websites</span>
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-gray-900 dark:text-white mb-8 leading-[0.85]">
                            The Stage for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-primary-600">Your Story.</span>
                        </h1>
                        <p className="text-xl text-gray-500 dark:text-gray-400 font-medium max-w-xl mb-12 leading-relaxed">
                            Build an event website with the details your guests need, plus integrated
                            RSVPs and a wishlist. Choose a current Ariya website theme and make it your own.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href={APP_LINKS.signup} className="inline-flex items-center justify-center whitespace-nowrap bg-indigo-600 text-white font-black uppercase tracking-widest px-10 py-5 rounded-full text-xs hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/20">
                                Start Your Website
                            </a>
                            <a href="#templates" className="inline-flex items-center justify-center whitespace-nowrap text-gray-900 dark:text-white font-black uppercase tracking-widest px-10 py-5 rounded-full text-xs border border-gray-200 dark:border-gray-800 hover:bg-white dark:hover:bg-gray-900 transition-all">
                                View Templates
                            </a>
                        </div>
                    </motion.div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-indigo-600/5 rounded-[50px] rotate-3" />
                        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-[50px] shadow-2xl p-4 md:p-12 relative z-10 overflow-hidden">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl" style={{ backgroundColor: websiteTemplates[0].color }}>
                                <img src={websiteTemplates[0].image} alt="Nigerian wedding celebration, featured with the Midnight Serenade Ariya website theme" className="h-full w-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                <div className="absolute inset-x-6 bottom-6 text-white">
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Current wedding website theme</span>
                                    <h2 className="mt-2 font-serif text-3xl md:text-4xl">{websiteTemplates[0].name}</h2>
                                    <p className="mt-2 text-sm text-white/80">{websiteTemplates[0].layout} · Included template</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Features */}
            <section className="py-32 px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
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
                <div className="bg-gray-950 rounded-[50px] p-12 md:p-24 overflow-hidden relative">
                    <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-tl from-indigo-900/30 to-transparent pointer-events-none" />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div {...fadeIn}>
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#D0771E] mb-4 block">Integrated Wishlist</span>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight leading-tight">Gifting made <br /> effortless & elegant.</h2>
                            <p className="text-gray-400 mb-10 leading-relaxed font-medium">
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
                            {['Home essentials', 'Kitchen items', 'Experiences', 'Cash fund'].map((category) => (
                                <div key={category} className="flex min-h-28 items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-5 text-center text-sm font-bold text-white">
                                    {category}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Template Gallery Preview */}
            <section id="templates" className="scroll-mt-24 py-24 bg-gray-50 dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
                        <div>
                            <span className="section-label mb-4 block">Current Ariya website templates</span>
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">Choose your event website theme</h2>
                            <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-500 dark:text-gray-400">
                                Browse current Ariya wedding website themes. Names, colors, layouts and access tiers match the template library. Sign in to customize a theme for your event.
                            </p>
                        </div>
                        <a href={APP_LINKS.login} className="inline-flex items-center gap-2 whitespace-nowrap text-indigo-600 font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all">
                            Log in to view designs <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                    <h3 className="mb-5 text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400">Wedding website templates</h3>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {websiteTemplates.map((template) => (
                            <a key={template.name} href={APP_LINKS.login} className="group overflow-hidden rounded-3xl border border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-950">
                                <div className="relative aspect-[4/3] overflow-hidden" style={{ backgroundColor: template.color }}>
                                    <img src={template.image} alt="" aria-hidden="true" loading="lazy" className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105" />
                                    {template.premium && <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[9px] font-black uppercase tracking-wider text-gray-900">Premium</span>}
                                </div>
                                <div className="p-5">
                                    <h4 className="font-black text-gray-900 dark:text-white">{template.name}</h4>
                                    <div className="mt-2 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                                        <span aria-hidden="true" className="h-3 w-3 rounded-full border border-black/10" style={{ backgroundColor: template.color }} />
                                        <span>{template.layout} · {template.premium ? 'Premium' : 'Included'}</span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                    <div className="mt-12 rounded-3xl border border-gray-100 bg-white p-8 dark:border-gray-800 dark:bg-gray-950">
                        <h3 className="text-xl font-black text-gray-900 dark:text-white">Looking for invitations and stationery?</h3>
                        <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">Ariya Studio designs are on their own page, separate from event website themes.</p>
                        <Link to="/product/studio-designs" className="mt-5 inline-flex items-center gap-2 whitespace-nowrap text-sm font-bold text-indigo-700 dark:text-indigo-300">
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
                    <Link to="/pricing" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-indigo-700 dark:text-indigo-300">
                        See all domain prices and fees <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 px-8 text-center bg-indigo-600 text-white">
                <div className="max-w-4xl mx-auto">
                    <Globe className="w-12 h-12 text-white/50 mx-auto mb-10" />
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight italic">Your domain. Your design. <br /> Your day.</h2>
                    <a href={APP_LINKS.signup} className="inline-flex items-center justify-center whitespace-nowrap bg-white text-indigo-600 font-black uppercase tracking-widest px-12 py-5 rounded-full text-xs hover:bg-gray-100 transition-all shadow-xl">
                        Launch Your Site
                    </a>
                </div>
            </section>
        </main>
    );
}

const DesignPillar = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
    <div className="p-10 premium-card h-full group hover:border-indigo-600 transition-all">
        <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl flex items-center justify-center text-indigo-600 mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all">
            <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4 tracking-tighter uppercase leading-none">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">{desc}</p>
    </div>
);

const SyncItem = ({ text }: { text: string }) => (
    <div className="flex items-center gap-4">
        <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="w-3 h-3 text-indigo-400" />
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
