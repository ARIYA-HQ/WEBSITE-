import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Zap, Globe, Image, MessageSquare, ShieldCheck, TrendingUp, Tag } from 'lucide-react';
import Button from '../components/common/Button';
import { APP_LINKS } from '../config/links';

// ── Pricing constants (kept in sync with the dashboard's data/pricing.ts) ─────
const VENDOR_COMMISSION_RATE = 0.07;
const TICKET_SERVICE_FEE_RATE = 0.03;
const REGISTRY_SERVICE_FEE_RATE = 0.1;
const STORAGE_FREE_PHOTOS = 100;
const WEBSITE_FREE_MONTHS = 3;
const WEBSITE_OFFLINE_MONTHS = 6;
const WEBSITE_KEEP_FOREVER_NAIRA = 35_000;
const VENDOR_VERIFICATION_FEE_NAIRA = 30_000;

const STORAGE_TIERS = [
    { label: '+500 photos', priceNaira: 5_000 },
    { label: '+2,000 photos', priceNaira: 12_000 },
    { label: '+5,000 photos', priceNaira: 25_000 },
];
const VENDOR_FEATURES = [
    { label: 'Enhanced profile', priceNaira: 15_000 },
    { label: 'Featured — 7 days', priceNaira: 15_000 },
    { label: 'Featured — 30 days', priceNaira: 45_000 },
    { label: 'Category boost', priceNaira: 20_000 },
    { label: 'Premium placement', priceNaira: 50_000 },
];
const SMS_BUNDLES = [
    { label: '50 credits', count: 50, priceNaira: 2_500 },
    { label: '200 credits', count: 200, priceNaira: 8_000 },
    { label: '500 credits', count: 500, priceNaira: 17_500 },
];
const DOMAIN_PRICES_NAIRA: Record<string, number> = {
    com: 30_000,
    ng: 25_000,
    'com.ng': 20_000,
    'org.ng': 18_000,
};

const fmt = (n: number) => `₦${n.toLocaleString()}`;
const pct = (r: number) => `${(r * 100).toFixed(0)}%`;

function FreeTag() {
    return (
        <span className="inline-block text-[10px] font-black uppercase tracking-widest text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-2.5 py-0.5 rounded-full">
            Free
        </span>
    );
}

function Row({ label, value, note }: { label: string; value: React.ReactNode; note?: string }) {
    return (
        <div className="flex items-start justify-between py-3 border-b border-gray-100 dark:border-gray-800 last:border-0 gap-4">
            <div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{label}</p>
                {note && <p className="text-xs text-gray-400 mt-0.5 leading-snug max-w-xs">{note}</p>}
            </div>
            <div className="text-sm font-black text-gray-900 dark:text-white text-right flex-shrink-0">{value}</div>
        </div>
    );
}

function Card({ children, accent }: { children: React.ReactNode; accent: string }) {
    return (
        <div className={`rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden border-t-4 ${accent}`}>
            {children}
        </div>
    );
}

function CardBody({ children }: { children: React.ReactNode }) {
    return <div className="p-6 md:p-8">{children}</div>;
}

function CardTitle({ icon: Icon, title, sub }: { icon: React.ElementType; title: string; sub?: string }) {
    return (
        <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                <Icon className="w-5 h-5" />
            </div>
            <div>
                <h3 className="text-base font-black uppercase tracking-tight text-gray-900 dark:text-white">{title}</h3>
                {sub && <p className="text-xs text-gray-400 mt-0.5">{sub}</p>}
            </div>
        </div>
    );
}

const TABS = ['Planners', 'Vendors'] as const;
type Tab = typeof TABS[number];

function PlannerTab() {
    return (
        <div className="space-y-8">
            {/* Free tier */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card accent="border-t-green-500">
                    <CardBody>
                        <CardTitle icon={Check} title="Always free" sub="No card needed · unlimited events" />
                        <ul className="space-y-0">
                            {[
                                'Unlimited event creation',
                                'Budget tracker',
                                'Guest management & RSVP',
                                'Task & checklist tools',
                                'Seating planner',
                                'Vendor discovery & bookings',
                                `Event website at yourslug.ariyahq.com`,
                                'Wishlist / gift registry setup',
                                'Ticket sales setup',
                                `${STORAGE_FREE_PHOTOS} gallery photos`,
                                'AI planning assistant',
                            ].map(item => (
                                <li key={item} className="flex items-center gap-3 py-2.5 border-b border-gray-100 dark:border-gray-800 last:border-0">
                                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                                    <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </CardBody>
                </Card>

                <div className="space-y-6">
                    {/* Platform fees */}
                    <Card accent="border-t-blue-500">
                        <CardBody>
                            <CardTitle icon={Zap} title="Platform fees" sub="Only when you collect money" />
                            <Row
                                label="Ticket sales"
                                value={pct(TICKET_SERVICE_FEE_RATE)}
                                note="Deducted from your payout. Buyers cover only Paystack's card fee."
                            />
                            <Row
                                label="Cash fund contributions"
                                value={pct(REGISTRY_SERVICE_FEE_RATE)}
                                note="Applies to cash gifts only (includes Paystack processing). Physical registry items have no Ariya fee."
                            />
                            <Row
                                label="Vendor payments"
                                value={pct(VENDOR_COMMISSION_RATE)}
                                note="Deducted from the vendor's payout when funds are released."
                            />
                        </CardBody>
                    </Card>

                    {/* Custom domain */}
                    <Card accent="border-t-primary-500">
                        <CardBody>
                            <CardTitle icon={Globe} title="Custom domain" sub="Includes hosting + Ariya branding removed" />
                            {Object.entries(DOMAIN_PRICES_NAIRA).map(([tld, price]) => (
                                <Row key={tld} label={`.${tld}`} value={`${fmt(price)}/yr`} />
                            ))}
                        </CardBody>
                    </Card>
                </div>
            </div>

            {/* Pay-as-you-go add-ons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Website keep-forever */}
                <Card accent="border-t-amber-500">
                    <CardBody>
                        <CardTitle icon={Globe} title="Keep website live" sub="One-time · no renewal" />
                        <Row label={`Live after your event`} value={`${WEBSITE_FREE_MONTHS} months free`} />
                        <Row label="Archive page" value={`Until month ${WEBSITE_OFFLINE_MONTHS}`} />
                        <Row label="Keep it live forever" value={fmt(WEBSITE_KEEP_FOREVER_NAIRA)} />
                    </CardBody>
                </Card>

                {/* Storage */}
                <Card accent="border-t-purple-500">
                    <CardBody>
                        <CardTitle icon={Image} title="Extra photo storage" sub="One-time per event · stackable" />
                        <Row label={`First ${STORAGE_FREE_PHOTOS} photos`} value={<FreeTag />} />
                        {STORAGE_TIERS.map(t => (
                            <Row key={t.label} label={t.label} value={fmt(t.priceNaira)} />
                        ))}
                    </CardBody>
                </Card>

                {/* SMS */}
                <Card accent="border-t-sky-500">
                    <CardBody>
                        <CardTitle icon={MessageSquare} title="SMS guest notifications" sub="Nigeria only · credits roll up" />
                        <Row label="Email invites" value={<FreeTag />} />
                        {SMS_BUNDLES.map(b => (
                            <Row
                                key={b.label}
                                label={b.label}
                                value={fmt(b.priceNaira)}
                                note={`≈ ${fmt(Math.round(b.priceNaira / b.count))}/SMS`}
                            />
                        ))}
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}

function VendorTab() {
    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Free listing */}
                <Card accent="border-t-green-500">
                    <CardBody>
                        <CardTitle icon={Check} title="Basic listing" sub="Always free" />
                        <ul className="space-y-0">
                            {[
                                'Directory listing',
                                'Portfolio gallery',
                                'Receive client inquiries',
                                'Manage bookings',
                                'Reviews & ratings',
                                'Earnings dashboard',
                            ].map(item => (
                                <li key={item} className="flex items-center gap-3 py-2.5 border-b border-gray-100 dark:border-gray-800 last:border-0">
                                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                                    <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-5 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
                            <p className="text-xs text-amber-700 dark:text-amber-400 font-medium">
                                {pct(VENDOR_COMMISSION_RATE)} platform fee deducted from payouts when a booking is paid out via Ariya. No subscription, no upfront cost.
                            </p>
                        </div>
                    </CardBody>
                </Card>

                {/* Visibility boosts */}
                <Card accent="border-t-primary-500">
                    <CardBody>
                        <CardTitle icon={TrendingUp} title="Visibility boosts" sub="One-time per listing · no recurring fee" />
                        {VENDOR_FEATURES.map(f => (
                            <Row key={f.label} label={f.label} value={fmt(f.priceNaira)} />
                        ))}
                    </CardBody>
                </Card>

                {/* Verification badge */}
                <Card accent="border-t-amber-500">
                    <CardBody>
                        <CardTitle icon={ShieldCheck} title="Verified badge" sub="One-time · permanent · identity verified" />
                        <Row
                            label="NIN + CAC document review"
                            value={fmt(VENDOR_VERIFICATION_FEE_NAIRA)}
                            note="Reviewed within 24–48 hrs. Badge is permanent once approved."
                        />
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}

export default function PricingPage() {
    const [activeTab, setActiveTab] = useState<Tab>('Planners');

    return (
        <main className="pt-24 min-h-screen bg-[#FAFAFA] dark:bg-gray-950">
            {/* Hero */}
            <section className="py-20 px-6 text-center max-w-3xl mx-auto">
                <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] text-primary-600 mb-4">Pricing</span>
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-gray-900 dark:text-white leading-tight">
                    Transparent pricing.<br />No surprises.
                </h1>
                <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
                    Free to plan. Pay only when you upgrade, sell tickets, or collect gifts — and only what's shown here.
                </p>
                <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
                    <a href={APP_LINKS.signup}>
                        <Button size="lg" tabIndex={-1}>Start free</Button>
                    </a>
                    <a href={APP_LINKS.vendorSignup} className="text-sm font-bold text-gray-500 dark:text-gray-400 hover:text-primary-600 transition-colors">
                        I'm a Vendor →
                    </a>
                </div>
            </section>

            {/* Tabs */}
            <div className="max-w-5xl mx-auto px-6">
                <div className="flex gap-2 bg-gray-100 dark:bg-gray-800 rounded-2xl p-1.5 w-fit mx-auto mb-12">
                    {TABS.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-8 py-2.5 rounded-xl text-sm font-black uppercase tracking-widest transition-all ${
                                activeTab === tab
                                    ? 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm'
                                    : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Tab content */}
                <div className="pb-24">
                    {activeTab === 'Planners' && <PlannerTab />}
                    {activeTab === 'Vendors' && <VendorTab />}
                </div>
            </div>

            {/* Trust strip */}
            <section className="border-t border-gray-100 dark:border-gray-800 py-16 px-6 bg-white dark:bg-gray-900">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                    {[
                        {
                            icon: Tag,
                            title: 'No subscriptions',
                            body: 'Pay once per feature or event. No monthly bills, no lock-in.',
                        },
                        {
                            icon: Check,
                            title: 'Who pays which fee',
                            body: "Cash fund guests pay the exact amount they choose — Ariya's 10% (which covers Paystack) comes from your payout. Physical registry items have no Ariya fee. Ticket buyers pay face value plus Paystack's card fee; our 3% comes from the organiser payout.",
                        },
                        {
                            icon: Zap,
                            title: 'Full transparency',
                            body: 'Every fee is shown before you collect a payment. No surprises at payout.',
                        },
                    ].map(({ icon: Icon, title, body }) => (
                        <div key={title} className="space-y-3">
                            <div className="w-12 h-12 bg-primary-600/10 rounded-2xl flex items-center justify-center mx-auto">
                                <Icon className="w-6 h-6 text-primary-600" />
                            </div>
                            <h3 className="text-sm font-black uppercase tracking-tight text-gray-900 dark:text-white">{title}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{body}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 text-center bg-[#FAFAFA] dark:bg-gray-950">
                <h2 className="text-3xl font-black tracking-tighter mb-4 text-gray-900 dark:text-white">Ready to plan your event?</h2>
                <p className="text-gray-500 dark:text-gray-400 mb-8">Create your account free. No credit card required.</p>
                <a href={APP_LINKS.signup}>
                    <Button size="lg" tabIndex={-1}>Start Planning — It's Free</Button>
                </a>
            </section>
        </main>
    );
}
