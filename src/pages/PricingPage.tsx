import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { APP_LINKS } from '../config/links';
import {
    DOMAIN_PRICES_NAIRA,
    DOMAIN_RENEWAL_MULTIPLIER,
    GUEST_PASS_FREE_TEST,
    GUEST_PASS_MINIMUM_CAPACITY,
    GUEST_PASS_MINIMUM_NAIRA,
    GUEST_PASS_TIERS,
    REGISTRY_SERVICE_FEE_RATE,
    SMS_BUNDLES,
    STORAGE_FREE_PHOTOS,
    STORAGE_TIERS,
    STUDIO_PREMIUM_PRICE_NAIRA,
    TICKET_SERVICE_FEE_RATE,
    VENDOR_COMMISSION_RATE,
    VENDOR_FEATURES,
    VENDOR_VERIFICATION_FEE_NAIRA,
    WEBSITE_FREE_MONTHS,
    WEBSITE_KEEP_FOREVER_NAIRA,
    WEBSITE_OFFLINE_MONTHS,
} from '../config/pricing';

const money = (amount: number) => `₦${amount.toLocaleString('en-NG')}`;
const percent = (rate: number) => `${(rate * 100).toFixed(0)}%`;

type PricingRow = {
    item: string;
    price: string;
    billing: string;
    note?: string;
};

function PricingTable({
    label,
    rows,
}: {
    label: string;
    rows: PricingRow[];
}) {
    return (
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
            <div className="hidden overflow-x-auto md:block">
                <table className="w-full text-left">
                    <caption className="sr-only">{label}</caption>
                    <thead className="bg-gray-50 text-[10px] font-black uppercase tracking-[0.16em] text-gray-500 dark:bg-gray-950 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-5 py-4 sm:px-6">Feature</th>
                            <th scope="col" className="px-5 py-4 sm:px-6">Price</th>
                            <th scope="col" className="px-5 py-4 sm:px-6">Billing</th>
                            <th scope="col" className="px-5 py-4 sm:px-6">Details</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                        {rows.map((row) => (
                            <tr key={`${row.item}-${row.price}`} className="align-top">
                                <th scope="row" className="px-5 py-4 text-sm font-bold text-gray-900 dark:text-white sm:px-6">
                                    {row.item}
                                </th>
                                <td className="whitespace-nowrap px-5 py-4 text-sm font-black text-gray-900 dark:text-white sm:px-6">
                                    {row.price}
                                </td>
                                <td className="px-5 py-4 text-sm text-gray-600 dark:text-gray-300 sm:px-6">
                                    {row.billing}
                                </td>
                                <td className="max-w-sm px-5 py-4 text-sm leading-6 text-gray-500 dark:text-gray-400 sm:px-6">
                                    {row.note ?? '—'}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <ul aria-label={label} className="divide-y divide-gray-100 dark:divide-gray-800 md:hidden">
                {rows.map((row) => (
                    <li key={`${row.item}-${row.price}`} className="px-4 py-4">
                        <div className="flex items-start justify-between gap-4">
                            <h3 className="min-w-0 text-sm font-bold leading-5 text-gray-900 dark:text-white">
                                {row.item}
                            </h3>
                            <p className="shrink-0 text-right text-sm font-black leading-5 text-gray-950 dark:text-white">
                                {row.price}
                            </p>
                        </div>
                        <p className="mt-2 text-xs font-semibold text-primary-700 dark:text-primary-400">
                            {row.billing}
                        </p>
                        {row.note && row.note !== '—' && (
                            <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
                                {row.note}
                            </p>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function SectionHeading({
    eyebrow,
    title,
    description,
}: {
    eyebrow: string;
    title: string;
    description?: string;
}) {
    return (
        <div className="mb-5">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-primary-700 dark:text-primary-400">{eyebrow}</p>
            <h2 className="mt-2 text-xl font-black tracking-tight text-gray-950 dark:text-white sm:text-2xl">{title}</h2>
            {description && <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-600 dark:text-gray-400">{description}</p>}
        </div>
    );
}

const TABS = ['Planners', 'Vendors'] as const;
type Tab = typeof TABS[number];

function PlannerTab() {
    return (
        <div className="space-y-12">
            <section id="included">
                <SectionHeading
                    eyebrow="01 / Included"
                    title="Event planning essentials"
                    description="Core tools are available without a monthly or annual plan. Start planning first, then add paid services only when you need them."
                />
                <PricingTable
                    label="Included event planning tools"
                    rows={[
                        { item: 'Event creation and planning', price: 'Free', billing: 'Unlimited events', note: 'Create and manage events without a subscription.' },
                        { item: 'Budget, tasks and checklists', price: 'Free', billing: 'Included', note: 'Plan your event and keep track of the details.' },
                        { item: 'Guest management and RSVP', price: 'Free', billing: 'Included', note: 'Organise guest details and responses.' },
                        { item: 'Seating planner', price: 'Free', billing: 'Included', note: 'Arrange your event seating.' },
                        { item: 'Vendor discovery and bookings', price: 'Free', billing: 'Included', note: 'Discover vendors and manage bookings.' },
                        { item: 'Ariya-hosted event website', price: 'Free', billing: 'Standard event lifecycle', note: `Available for ${WEBSITE_FREE_MONTHS} months after your event; archived at month ${WEBSITE_OFFLINE_MONTHS}.` },
                        { item: 'Gift registry setup', price: 'Free', billing: 'Included', note: 'Set up a wishlist and registry for your event.' },
                        { item: 'Ticket tools', price: 'Free', billing: 'Ticket sales have a fee', note: 'Includes promo codes and a waitlist for sold-out events.' },
                        { item: 'Gallery storage', price: 'Free', billing: `First ${STORAGE_FREE_PHOTOS} photos`, note: 'Additional storage can be purchased per event.' },
                        { item: 'AI planning assistant', price: 'Free', billing: 'Included', note: 'Available as part of event planning.' },
                    ]}
                />
            </section>

            <section id="transaction-fees">
                <SectionHeading
                    eyebrow="02 / Transaction fees"
                    title="Fees when money moves"
                    description="AriyaHQ service fees and payment processor charges are not always the same. Check the fee notes for each transaction type."
                />
                <PricingTable
                    label="Event transaction fees"
                    rows={[
                        { item: 'Paid ticket sales', price: `${percent(TICKET_SERVICE_FEE_RATE)} service fee`, billing: 'On paid ticket value', note: 'Choose to pass AriyaHQ’s fee to ticket buyers or deduct it from organiser proceeds. Payment processing is separate.' },
                        { item: 'Cash fund contributions', price: `${percent(REGISTRY_SERVICE_FEE_RATE)} total fee`, billing: 'On cash gifts', note: 'Includes Paystack processing. AriyaHQ does not charge a fee on physical registry items.' },
                        { item: 'Vendor payments', price: `${percent(VENDOR_COMMISSION_RATE)} platform fee`, billing: 'When paid out', note: 'Deducted from the vendor’s payout when funds are released.' },
                    ]}
                />
            </section>

            <section id="guest-pass-fees">
                <SectionHeading
                    eyebrow="03 / Guest access"
                    title="QR code guest pass fees"
                    description="Paid passes use progressive rates: each price applies only to passes within its quantity bracket."
                />
                <PricingTable
                    label="QR guest pass fees"
                    rows={[
                        ...GUEST_PASS_TIERS.map((tier) => ({
                            item: tier.label,
                            price: `${money(tier.pricePerGuestNaira)} per pass`,
                            billing: 'Progressive rate',
                            note: 'Rate applies only to passes in this bracket.',
                        })),
                        { item: 'Free test passes', price: `${GUEST_PASS_FREE_TEST}`, billing: 'Per event', note: 'Test passes are separate from paid capacity.' },
                    ]}
                />
                <p className="mt-4 text-xs leading-5 text-gray-500 dark:text-gray-400">
                    Minimum event capacity: {GUEST_PASS_MINIMUM_CAPACITY} passes. Minimum paid charge: {money(GUEST_PASS_MINIMUM_NAIRA)} per event. Eligibility is confirmed in checkout.
                </p>
            </section>

            <section id="messaging-fees">
                <SectionHeading
                    eyebrow="04 / Guest communication"
                    title="Bulk SMS and email fees"
                    description="Purchase messaging credits as needed. Credits are shared across your AriyaHQ account; actual credit usage depends on the channel and message rules."
                />
                <PricingTable
                    label="Bulk SMS and email credit package fees"
                    rows={SMS_BUNDLES.map((bundle) => ({
                        item: `${bundle.count.toLocaleString('en-NG')} messaging credits`,
                        price: money(bundle.priceNaira),
                        billing: 'Pay as you go',
                        note: `About ${money(Math.round(bundle.priceNaira / bundle.count))} per credit. SMS segments and email send rounding affect actual credit usage.`,
                    }))}
                />
                <p className="mt-4 text-xs leading-5 text-gray-500 dark:text-gray-400">
                    A credit is not necessarily one SMS or email. SMS usage depends on message segments; email uses half a credit per message with rounding applied per send.
                </p>
            </section>

            <section id="event-websites">
                <SectionHeading
                    eyebrow="05 / Event websites"
                    title="Website and custom domain options"
                    description="The extended website option and custom domain are separate purchases."
                />
                <PricingTable
                    label="Event website pricing"
                    rows={[
                        { item: 'Keep event website live', price: money(WEBSITE_KEEP_FOREVER_NAIRA), billing: 'One-time per website', note: 'Keeps the event website live indefinitely.' },
                        ...Object.entries(DOMAIN_PRICES_NAIRA).map(([tld, price]) => ({
                            item: `Custom .${tld} domain`,
                            price: money(price),
                            billing: `First year · ${money(Math.round(price * DOMAIN_RENEWAL_MULTIPLIER))}/year renewal`,
                            note: 'Includes hosting and Ariya branding removal.',
                        })),
                    ]}
                />
            </section>

            <section id="add-ons">
                <SectionHeading
                    eyebrow="06 / Optional add-ons"
                    title="Add capacity when you need it"
                    description="One-time add-ons can be purchased for an event or account without a recurring subscription."
                />
                <div className="space-y-8">
                    <PricingTable
                        label="Additional event features"
                        rows={[
                            { item: 'Ariya Studio Premium', price: money(STUDIO_PREMIUM_PRICE_NAIRA), billing: 'One-time', note: 'Lifetime access to the premium template library.' },
                            ...STORAGE_TIERS.map((tier) => ({
                                item: `Extra photo storage · ${tier.label}`,
                                price: money(tier.priceNaira),
                                billing: 'One-time per event · stackable',
                                note: `First ${STORAGE_FREE_PHOTOS} photos are free.`,
                            })),
                        ]}
                    />
                </div>
            </section>
        </div>
    );
}

function VendorTab() {
    return (
        <div className="space-y-12">
            <section id="vendor-included">
                <SectionHeading
                    eyebrow="01 / Vendor account"
                    title="Start with a free listing"
                    description="Create a vendor presence and manage your work without an upfront subscription."
                />
                <PricingTable
                    label="Included vendor account features"
                    rows={[
                        { item: 'Directory listing', price: 'Free', billing: 'Always', note: 'Create a profile in the vendor directory.' },
                        { item: 'Portfolio gallery', price: 'Free', billing: 'Included', note: 'Showcase your work to potential clients.' },
                        { item: 'Client inquiries and bookings', price: 'Free', billing: 'Included', note: 'Receive inquiries and manage bookings.' },
                        { item: 'Reviews, ratings and earnings dashboard', price: 'Free', billing: 'Included', note: 'Manage your reputation and view earnings.' },
                    ]}
                />
            </section>
            <section id="vendor-fees">
                <SectionHeading
                    eyebrow="02 / Vendor charges"
                    title="Commission and optional visibility"
                />
                <PricingTable
                    label="Vendor charges"
                    rows={[
                        { item: 'Platform fee on Ariya payouts', price: percent(VENDOR_COMMISSION_RATE), billing: 'Deducted at payout', note: 'No subscription or upfront cost.' },
                        ...VENDOR_FEATURES.map((feature) => ({
                            item: feature.label,
                            price: money(feature.priceNaira),
                            billing: 'One-time',
                            note: 'Optional paid listing visibility feature.',
                        })),
                        { item: 'Verified badge · NIN + CAC document review', price: money(VENDOR_VERIFICATION_FEE_NAIRA), billing: 'One-time', note: 'Reviewed within 24–48 hours. Badge is permanent once approved.' },
                    ]}
                />
            </section>
        </div>
    );
}

const detailedPages = [
    { title: 'Event management software pricing', detail: 'Overall pricing model and platform fees.', href: '/event-management-software-pricing' },
    { title: 'Event ticketing fees', detail: 'Fee handling, examples and ticket estimator.', href: '/event-ticketing-pricing' },
    { title: 'QR guest pass pricing', detail: 'Progressive rates and paid pass estimator.', href: '/qr-code-guest-pass-pricing' },
    { title: 'Bulk SMS and email pricing', detail: 'Credit packages and usage rules.', href: '/bulk-sms-email-pricing' },
    { title: 'Event website pricing', detail: 'Website availability and custom domain costs.', href: '/event-website-pricing' },
];

export default function PricingPage() {
    const [activeTab, setActiveTab] = useState<Tab>('Planners');
    const panelId = activeTab === 'Planners' ? 'planner-pricing-panel' : 'vendor-pricing-panel';

    return (
        <main className="min-h-screen bg-[#f7f5f1] pt-24 text-gray-950 dark:bg-gray-950 dark:text-white">
            <header className="border-b border-gray-200 bg-[#f7f5f1] px-5 py-9 dark:border-gray-800 dark:bg-gray-950 sm:px-6 sm:py-12 md:py-16">
                <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[1fr_auto] md:items-end md:gap-8">
                    <div className="max-w-3xl">
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-primary-700 dark:text-primary-400">AriyaHQ · pricing</p>
                        <h1 className="mt-4 text-4xl font-black leading-[1.04] tracking-tight sm:text-5xl md:text-6xl">
                            No monthly plan.<br />
                            <span className="text-primary-700 dark:text-primary-400">Just clear prices.</span>
                        </h1>
                        <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300">
                            Use the core event tools for free. Pay only for optional upgrades or when you collect money through AriyaHQ.
                        </p>
                    </div>
                    <a
                        href={APP_LINKS.signup}
                        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gray-950 px-6 py-4 text-xs font-black uppercase tracking-widest text-white transition hover:bg-primary-700 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200 md:w-auto"
                    >
                        Start for free <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                </div>
                <div className="mx-auto mt-8 grid max-w-7xl grid-cols-2 border-y border-gray-300 py-3 dark:border-gray-700 md:mt-10 md:grid-cols-4 md:py-5">
                    {[
                        ['Core planning', 'Free'],
                        ['Subscription', 'None'],
                        ['Ticket fee', `${percent(TICKET_SERVICE_FEE_RATE)} on paid sales`],
                        ['Messaging', 'From ₦2,500'],
                    ].map(([label, value]) => (
                        <div key={label} className="border-gray-300 px-2 py-3 even:border-l dark:border-gray-700 sm:px-4 md:border-l-0 md:border-r md:py-3 md:first:pl-0 md:last:border-r-0">
                            <p className="text-[9px] font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 sm:text-[10px]">{label}</p>
                            <p className="mt-1 text-sm font-black leading-5 text-gray-950 dark:text-white sm:text-base">{value}</p>
                        </div>
                    ))}
                </div>
            </header>

            <section className="mx-auto max-w-7xl px-5 py-8 sm:px-6 md:px-10 md:py-10 lg:px-16">
                <div className="mb-7 flex flex-col gap-4 border-b border-gray-200 pb-5 dark:border-gray-800 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-primary-700 dark:text-primary-400">Pricing breakdown</p>
                        <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">Choose your account type</h2>
                    </div>
                    <div role="tablist" aria-label="Pricing for" className="flex w-full rounded-full border border-gray-300 bg-white p-1 dark:border-gray-700 dark:bg-gray-900 sm:w-fit">
                        {TABS.map((tab) => {
                            const selected = activeTab === tab;
                            const id = tab === 'Planners' ? 'planner-pricing-tab' : 'vendor-pricing-tab';
                            return (
                                <button
                                    key={tab}
                                    id={id}
                                    type="button"
                                    role="tab"
                                    aria-selected={selected}
                                    aria-controls={tab === 'Planners' ? 'planner-pricing-panel' : 'vendor-pricing-panel'}
                                    onClick={() => setActiveTab(tab)}
                                    className={`min-h-11 flex-1 rounded-full px-3 text-[10px] font-black uppercase tracking-wider transition sm:flex-none sm:px-5 sm:text-xs ${selected ? 'bg-gray-950 text-white dark:bg-white dark:text-gray-950' : 'text-gray-600 hover:text-gray-950 dark:text-gray-300 dark:hover:text-white'}`}
                                >
                                    {tab === 'Planners' ? 'Event organisers' : tab}
                                </button>
                            );
                        })}
                    </div>
                </div>
                <div
                    id={panelId}
                    role="tabpanel"
                    aria-labelledby={activeTab === 'Planners' ? 'planner-pricing-tab' : 'vendor-pricing-tab'}
                >
                    {activeTab === 'Planners' ? <PlannerTab /> : <VendorTab />}
                </div>
            </section>

            <section className="border-y border-gray-200 bg-white px-5 py-9 dark:border-gray-800 dark:bg-gray-900 sm:px-6 sm:py-12 md:px-10 lg:px-16">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-7 max-w-3xl">
                        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-primary-700 dark:text-primary-400">Need more detail?</p>
                        <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">Pricing guides and estimators</h2>
                        <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                            These pages explain AriyaHQ’s pricing, not competitor comparisons. Use the available estimators to model selected costs.
                        </p>
                    </div>
                    <div className="grid border-l border-t border-gray-200 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-3">
                        {detailedPages.map((page, index) => (
                            <Link
                                key={page.href}
                                to={page.href}
                                className={`group border-b border-r border-gray-200 p-4 transition hover:bg-[#f7f5f1] dark:border-gray-700 dark:hover:bg-gray-950 sm:p-6 ${index === 0 ? 'bg-[#f7f5f1] dark:bg-gray-950' : ''}`}
                            >
                                <span className="text-[10px] font-black tracking-widest text-primary-700 dark:text-primary-400">0{index + 1}</span>
                                <h3 className="mt-3 font-bold group-hover:text-primary-700 dark:group-hover:text-primary-400">{page.title}</h3>
                                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">{page.detail}</p>
                                <span className="mt-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-gray-900 dark:text-white">
                                    View details <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" aria-hidden="true" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-9 sm:px-6 md:flex-row md:items-center md:justify-between md:px-10 md:py-12 lg:px-16">
                <div className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-primary-700 dark:text-primary-400" aria-hidden="true" />
                    <p className="max-w-3xl text-sm leading-6 text-gray-600 dark:text-gray-300">
                        Fees are shown by feature and billing type. Transaction charges may vary by payment method; review the final amount displayed before confirming payment.
                    </p>
                </div>
                <a href={APP_LINKS.signup} className="shrink-0 text-sm font-black text-primary-700 underline underline-offset-4 dark:text-primary-400">
                    Create a free account
                </a>
            </section>
        </main>
    );
}
