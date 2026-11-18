import { useState } from 'react';
import { ArrowRight, Check, CircleHelp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackEvent } from '../../analytics/analytics';
import { APP_LINKS } from '../../config/links';
import CommaNumberInput from './CommaNumberInput';
import {
    DOMAIN_PRICES_NAIRA,
    DOMAIN_RENEWAL_MULTIPLIER,
    GUEST_PASS_MINIMUM_CAPACITY,
    TICKET_SERVICE_FEE_RATE,
    WEBSITE_KEEP_FOREVER_NAIRA,
} from '../../config/pricing';
import {
    getGuestPassCostBreakdown,
    getTicketFeeEstimate,
    getWebsiteCostEstimate,
    pricingPages,
    type PricingPagePath,
} from '../../seo/pricing-pages-content';

const money = (amount: number) => `₦${amount.toLocaleString('en-NG')}`;
const ticketServiceFeePercent = (TICKET_SERVICE_FEE_RATE * 100).toFixed(0);

function PricingTable({
    headings,
    rows,
}: {
    headings: string[];
    rows: string[][];
}) {
    return (
        <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-950">
            <div className="hidden overflow-x-auto sm:block">
            <table className="w-full min-w-[32rem] text-left text-sm">
                <thead className="bg-gray-50 text-xs font-black uppercase tracking-wide text-gray-600 dark:bg-gray-900 dark:text-gray-300">
                    <tr>
                        {headings.map((heading) => (
                            <th key={heading} scope="col" className="px-5 py-4">{heading}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                    {rows.map((row) => (
                        <tr key={row[0]}>
                            {row.map((cell, index) => (
                                index === 0
                                    ? <th key={`${row[0]}-${index}`} scope="row" className="px-5 py-4 font-bold">{cell}</th>
                                    : <td key={`${row[0]}-${index}`} className="px-5 py-4 leading-6 text-gray-600 dark:text-gray-300">{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            <ul aria-label="Pricing details" className="divide-y divide-gray-100 dark:divide-gray-800 sm:hidden">
                {rows.map((row) => (
                    <li key={row[0]} className="space-y-2 px-4 py-4">
                        <h3 className="text-sm font-bold leading-5 text-gray-900 dark:text-white">{row[0]}</h3>
                        <dl className="space-y-2">
                            {row.slice(1).map((cell, index) => (
                                <div key={`${row[0]}-${headings[index + 1]}`} className="flex items-start justify-between gap-4 text-xs leading-5">
                                    <dt className="shrink-0 text-gray-500 dark:text-gray-400">{headings[index + 1]}</dt>
                                    <dd className="text-right font-semibold text-gray-800 dark:text-gray-200">{cell}</dd>
                                </div>
                            ))}
                        </dl>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function PricingDetailPage({ path }: { path: PricingPagePath }) {
    const content = pricingPages[path];
    if (!content) throw new Error(`Missing pricing page content for ${path}`);

    const [passCount, setPassCount] = useState('100');
    const [ticketPrice, setTicketPrice] = useState('10000');
    const [ticketCount, setTicketCount] = useState('100');
    const [passFeeToBuyer, setPassFeeToBuyer] = useState(true);
    const [domainTld, setDomainTld] = useState(Object.keys(DOMAIN_PRICES_NAIRA)[0]);
    const [domainYears, setDomainYears] = useState('1');
    const [keepWebsiteLive, setKeepWebsiteLive] = useState(false);
    const numericPassCount = Number(passCount);
    const passEstimate = getGuestPassCostBreakdown(numericPassCount);
    const validPassCount =
        passCount.trim() !== '' &&
        Number.isSafeInteger(numericPassCount) &&
        numericPassCount > 0;
    const numericTicketPrice = Number(ticketPrice);
    const numericTicketCount = Number(ticketCount);
    const ticketEstimate = getTicketFeeEstimate(
        numericTicketPrice,
        numericTicketCount,
        passFeeToBuyer,
    );
    const validTicketEstimate =
        ticketPrice.trim() !== '' &&
        ticketCount.trim() !== '' &&
        ticketEstimate !== null;
    const numericDomainYears = Number(domainYears);
    const websiteEstimate = getWebsiteCostEstimate(
        domainTld,
        numericDomainYears,
        keepWebsiteLive,
    );
    const trackCta = (placement: 'hero' | 'closing') =>
        trackEvent('pricing_detail_page_cta_clicked', {
            pricingPage: content.path,
            placement,
        });

    return (
        <main className="bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
            {(() => {
                const secondaryAction = {
                    '/bulk-sms-email-pricing': { label: 'View credit packages', href: '#messaging-packages' },
                    '/event-ticketing-pricing': { label: 'Estimate ticket fees', href: '#ticket-fee-estimator' },
                    '/qr-code-guest-pass-pricing': { label: 'Estimate pass costs', href: '#guest-pass-estimator' },
                    '/event-website-pricing': { label: 'Estimate website costs', href: '#website-cost-estimator' },
                    '/event-management-software-pricing': { label: 'Explore all pricing', href: '#pricing-details' },
                } satisfies Record<PricingPagePath, { label: string; href: string }>;
                const action = secondaryAction[path];

                return (
            <section className="relative isolate overflow-hidden bg-gray-950 pt-24 text-white">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-700/40 via-gray-950 to-gray-950" />
                <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24 lg:px-16">
                    <nav aria-label="Breadcrumb" className="mb-6 text-xs font-bold text-white/65">
                        <Link to="/" className="hover:text-white">Home</Link>
                        <span className="mx-2" aria-hidden="true">/</span>
                        <Link to="/pricing" className="hover:text-white">Pricing</Link>
                        <span className="mx-2" aria-hidden="true">/</span>
                        <span aria-current="page" className="text-white">{content.eyebrow}</span>
                    </nav>
                    <div className="max-w-3xl">
                        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-orange-200">
                            {content.eyebrow}
                        </span>
                        <h1 className="text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
                            {content.title}
                        </h1>
                        <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
                            {content.intro}
                        </p>
                        {content.heroNote && (
                            <p className="mt-5 max-w-2xl rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-sm leading-6 text-white/80">
                                {content.heroNote}
                            </p>
                        )}
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <a
                                href={APP_LINKS.signup}
                                onClick={() => trackCta('hero')}
                                className="inline-flex min-h-12 min-w-0 w-full items-center justify-center gap-2 whitespace-normal rounded-full bg-primary-600 px-5 py-4 text-center text-xs font-black uppercase leading-5 tracking-widest text-white hover:bg-primary-500 sm:w-auto sm:whitespace-nowrap sm:px-7"
                            >
                                {content.ctaLabel}
                                <ArrowRight className="h-4 w-4 shrink-0" />
                            </a>
                            <a
                                href={action.href}
                                className="inline-flex min-h-12 min-w-0 w-full items-center justify-center whitespace-normal rounded-full border border-white/30 px-5 py-4 text-center text-xs font-black uppercase leading-5 tracking-widest text-white hover:bg-white/10 sm:w-auto sm:whitespace-nowrap sm:px-7"
                            >
                                {action.label}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
                );
            })()}

            <nav aria-label="On this page" className="border-b border-gray-100 dark:border-gray-800">
                <div className="mx-auto flex max-w-7xl flex-wrap gap-2 px-5 py-4 text-xs font-bold text-gray-600 dark:text-gray-300 sm:px-6 sm:py-5 md:px-10 lg:px-16">
                    {content.blocks.map((block) => (
                        <a key={block.id} href={`#${block.id}`} className="rounded-full border border-gray-200 px-3 py-2 hover:border-primary-300 hover:text-primary-700 dark:border-gray-700 dark:hover:border-primary-700 dark:hover:text-primary-300">
                            {block.type === 'guest-pass-estimator'
                                ? 'Cost estimator'
                                : block.type === 'ticket-fee-estimator'
                                    ? 'Ticket fee estimator'
                                    : block.type === 'website-cost-estimator'
                                        ? 'Website cost estimator'
                                        : block.title}
                        </a>
                    ))}
                    <a href="#faqs" className="rounded-full border border-gray-200 px-3 py-2 hover:border-primary-300 hover:text-primary-700 dark:border-gray-700 dark:hover:border-primary-700 dark:hover:text-primary-300">FAQs</a>
                </div>
            </nav>

            <div id="pricing-details">
                {content.blocks.map((block, index) => (
                    <section
                        key={block.id}
                        id={block.id}
                        className={`scroll-mt-24 px-6 py-14 md:px-10 md:py-20 lg:px-16 ${index % 2 ? 'bg-[#fbf8f4] dark:bg-gray-900/60' : ''}`}
                    >
                        {block.type === 'ticket-fee-estimator' ? (
                            <div className="mx-auto max-w-5xl">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">
                                    Estimate ticket fees
                                </span>
                                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                                    Ticket sales fee estimator
                                </h2>
                                <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-base">
                                    Estimate AriyaHQ’s {ticketServiceFeePercent}% service fee from your ticket price and expected sales. Payment processing fees are not included.
                                </p>
                                <div className="mt-8 grid gap-6 rounded-3xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-950 sm:p-8 md:grid-cols-[0.8fr_1.2fr]">
                                    <div className="space-y-5">
                                        <div>
                                            <label htmlFor="ticket-price" className="text-sm font-bold">Price per ticket (₦)</label>
                                            <CommaNumberInput
                                                id="ticket-price"
                                                min="0"
                                                value={ticketPrice}
                                                onValueChange={setTicketPrice}
                                                className="mt-2 min-h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-base font-bold text-gray-900 outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="ticket-count" className="text-sm font-bold">Number of tickets sold</label>
                                            <CommaNumberInput
                                                id="ticket-count"
                                                min="1"
                                                value={ticketCount}
                                                onValueChange={setTicketCount}
                                                className="mt-2 min-h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-base font-bold text-gray-900 outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                                            />
                                        </div>
                                        <label className="flex items-start gap-3 text-sm leading-6 text-gray-700 dark:text-gray-300">
                                            <input
                                                type="checkbox"
                                                checked={passFeeToBuyer}
                                                onChange={(event) => setPassFeeToBuyer(event.target.checked)}
                                                className="mt-1 h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                            />
                                            <span>Pass AriyaHQ’s service fee to ticket buyers</span>
                                        </label>
                                    </div>
                                    <div className="rounded-2xl bg-gray-50 p-5 dark:bg-gray-900 sm:p-6">
                                        {validTicketEstimate && ticketEstimate ? (
                                            <>
                                                <p className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400">
                                                    Estimated breakdown
                                                </p>
                                                <dl aria-live="polite" className="mt-4 space-y-3">
                                                    <div className="flex justify-between gap-4 text-sm">
                                                        <dt className="text-gray-600 dark:text-gray-300">Ticket sales value</dt>
                                                        <dd className="font-bold">{money(ticketEstimate.grossTicketValue)}</dd>
                                                    </div>
                                                    <div className="flex justify-between gap-4 text-sm">
                                                        <dt className="text-gray-600 dark:text-gray-300">AriyaHQ service fee ({ticketServiceFeePercent}%)</dt>
                                                        <dd className="font-bold">{money(ticketEstimate.serviceFee)}</dd>
                                                    </div>
                                                    <div className="flex justify-between gap-4 border-t border-gray-200 pt-3 text-sm dark:border-gray-700">
                                                        <dt className="text-gray-600 dark:text-gray-300">
                                                            {passFeeToBuyer ? 'Buyer total before processing' : 'Organiser proceeds before processing'}
                                                        </dt>
                                                        <dd className="font-black text-primary-700 dark:text-primary-300">
                                                            {money(passFeeToBuyer ? ticketEstimate.buyerTotal : ticketEstimate.organiserProceeds)}
                                                        </dd>
                                                    </div>
                                                </dl>
                                            </>
                                        ) : (
                                            <p role="status" className="text-sm leading-6 text-red-700 dark:text-red-300">
                                                Enter a non-negative whole-number ticket price and a positive whole-number ticket quantity.
                                            </p>
                                        )}
                                        <p className="mt-4 text-xs leading-5 text-gray-500 dark:text-gray-400">
                                            Estimate includes only AriyaHQ’s service fee. Payment processing fees are separate; confirm the final checkout breakdown.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ) : block.type === 'website-cost-estimator' ? (
                            <div className="mx-auto max-w-5xl">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">
                                    Estimate domain costs
                                </span>
                                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                                    Event website cost estimator
                                </h2>
                                <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-base">
                                    Estimate a custom domain’s first-year price plus renewal costs. The optional keep-live fee is separate from the domain purchase.
                                </p>
                                <div className="mt-8 grid gap-6 rounded-3xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-950 sm:p-8 md:grid-cols-[0.8fr_1.2fr]">
                                    <div className="space-y-5">
                                        <div>
                                            <label htmlFor="domain-tld" className="text-sm font-bold">Choose a custom domain</label>
                                            <select
                                                id="domain-tld"
                                                value={domainTld}
                                                onChange={(event) => setDomainTld(event.target.value)}
                                                className="mt-2 min-h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-base font-bold text-gray-900 outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                                            >
                                                {Object.entries(DOMAIN_PRICES_NAIRA).map(([tld, price]) => (
                                                    <option key={tld} value={tld}>.{tld} — {money(price)} first year</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="domain-years" className="text-sm font-bold">Years to estimate</label>
                                            <input
                                                id="domain-years"
                                                type="number"
                                                min="1"
                                                max="10"
                                                step="1"
                                                inputMode="numeric"
                                                value={domainYears}
                                                onChange={(event) => setDomainYears(event.target.value)}
                                                className="mt-2 min-h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-base font-bold text-gray-900 outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                                            />
                                        </div>
                                        <label className="flex items-start gap-3 text-sm leading-6 text-gray-700 dark:text-gray-300">
                                            <input
                                                type="checkbox"
                                                checked={keepWebsiteLive}
                                                onChange={(event) => setKeepWebsiteLive(event.target.checked)}
                                                className="mt-1 h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                            />
                                            <span>Include the one-time ₦{WEBSITE_KEEP_FOREVER_NAIRA.toLocaleString('en-NG')} keep-live option</span>
                                        </label>
                                    </div>
                                    <div className="rounded-2xl bg-gray-50 p-5 dark:bg-gray-900 sm:p-6">
                                        {websiteEstimate ? (
                                            <>
                                                <p className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400">
                                                    Estimated selected options
                                                </p>
                                                <dl aria-live="polite" className="mt-4 space-y-3">
                                                    <div className="flex justify-between gap-4 text-sm">
                                                        <dt className="text-gray-600 dark:text-gray-300">First-year .{domainTld} domain</dt>
                                                        <dd className="font-bold">{money(websiteEstimate.firstYearPrice)}</dd>
                                                    </div>
                                                    <div className="flex justify-between gap-4 text-sm">
                                                        <dt className="text-gray-600 dark:text-gray-300">
                                                            {websiteEstimate.renewalCount} renewal{websiteEstimate.renewalCount === 1 ? '' : 's'} at {money(websiteEstimate.annualRenewal)} each
                                                        </dt>
                                                        <dd className="font-bold">{money(websiteEstimate.renewalTotal)}</dd>
                                                    </div>
                                                    {keepWebsiteLive && (
                                                        <div className="flex justify-between gap-4 text-sm">
                                                            <dt className="text-gray-600 dark:text-gray-300">Keep website live indefinitely</dt>
                                                            <dd className="font-bold">{money(WEBSITE_KEEP_FOREVER_NAIRA)}</dd>
                                                        </div>
                                                    )}
                                                    <div className="flex justify-between gap-4 border-t border-gray-200 pt-3 text-sm dark:border-gray-700">
                                                        <dt className="font-bold">Estimated total</dt>
                                                        <dd className="font-black text-primary-700 dark:text-primary-300">{money(websiteEstimate.total)}</dd>
                                                    </div>
                                                </dl>
                                            </>
                                        ) : (
                                            <p role="status" className="text-sm leading-6 text-red-700 dark:text-red-300">
                                                Enter a whole number of years from 1 to 10.
                                            </p>
                                        )}
                                        <p className="mt-4 text-xs leading-5 text-gray-500 dark:text-gray-400">
                                            Custom domains include hosting and Ariya branding removal. Renewal is estimated at {DOMAIN_RENEWAL_MULTIPLIER}× first-year price. The keep-live option and custom domain are separate purchases. Confirm current pricing and availability at checkout.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ) : block.type === 'guest-pass-estimator' ? (
                            <div className="mx-auto max-w-5xl">
                                <div className="max-w-3xl">
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">
                                        Estimate your costs
                                    </span>
                                    <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                                        QR guest pass cost estimator
                                    </h2>
                                    <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-base">
                                        Enter the number of paid passes to estimate the total using AriyaHQ’s progressive quantity rates.
                                    </p>
                                </div>
                                <div className="mt-8 grid gap-6 rounded-3xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-950 sm:p-8 md:grid-cols-[0.8fr_1.2fr]">
                                    <div>
                                        <label htmlFor="paid-pass-count" className="text-sm font-bold">
                                            Number of paid passes
                                        </label>
                                        <CommaNumberInput
                                            id="paid-pass-count"
                                            min="1"
                                            value={passCount}
                                            onValueChange={setPassCount}
                                            className="mt-2 min-h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-base font-bold text-gray-900 outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                                        />
                                        <p className="mt-3 text-xs leading-5 text-gray-500 dark:text-gray-400">
                                            {GUEST_PASS_MINIMUM_CAPACITY} minimum total event pass capacity and a ₦20,000 minimum paid charge apply. Free test passes are separate. Check checkout for eligibility based on your event’s existing capacity.
                                        </p>
                                    </div>
                                    <div className="rounded-2xl bg-gray-50 p-5 dark:bg-gray-900 sm:p-6">
                                        {validPassCount && passEstimate ? (
                                            <>
                                                <p className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400">
                                                    Estimated paid pass total
                                                </p>
                                                <p aria-live="polite" className="mt-2 text-3xl font-black text-primary-700 dark:text-primary-300">
                                                    {money(passEstimate.total)}
                                                </p>
                                                <ul className="mt-5 space-y-2 border-t border-gray-200 pt-4 text-sm dark:border-gray-700">
                                                    {passEstimate.breakdown.map((tier) => (
                                                        <li key={tier.label} className="flex flex-wrap justify-between gap-x-4 gap-y-1 text-gray-600 dark:text-gray-300">
                                                            <span>{tier.count.toLocaleString('en-NG')} × {money(tier.unitPrice)} ({tier.label})</span>
                                                            <span className="font-bold text-gray-900 dark:text-white">{money(tier.subtotal)}</span>
                                                        </li>
                                                    ))}
                                                    {passEstimate.minimumChargeApplied > 0 && (
                                                        <li className="flex flex-wrap justify-between gap-x-4 gap-y-1 border-t border-gray-200 pt-2 text-gray-600 dark:border-gray-700 dark:text-gray-300">
                                                            <span>Minimum event charge adjustment</span>
                                                            <span className="font-bold text-gray-900 dark:text-white">{money(passEstimate.minimumChargeApplied)}</span>
                                                        </li>
                                                    )}
                                                </ul>
                                            </>
                                        ) : (
                                            <p role="status" className="text-sm leading-6 text-red-700 dark:text-red-300">
                                                Enter a whole number of paid passes greater than zero.
                                            </p>
                                        )}
                                        <p className="mt-4 text-xs leading-5 text-gray-500 dark:text-gray-400">
                                            Estimate only; the final amount and purchase eligibility are confirmed in AriyaHQ checkout.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="mx-auto min-w-0 max-w-7xl">
                                <div className="max-w-3xl">
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">
                                        {content.eyebrow}
                                    </span>
                                    <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                                        {block.title}
                                    </h2>
                                    {'intro' in block && block.intro && (
                                        <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-base">
                                            {block.intro}
                                        </p>
                                    )}
                                </div>

                                {block.type === 'cards' && (
                                    <div className="mt-8 grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                        {block.cards.map((card) => (
                                            <article key={card.title} className="relative min-w-0 rounded-3xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
                                                {card.badge && (
                                                    <span className="inline-flex rounded-full bg-primary-50 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-primary-700 dark:bg-primary-950 dark:text-primary-300">
                                                        {card.badge}
                                                    </span>
                                                )}
                                                <h3 className="mt-3 break-words text-base font-bold">{card.title}</h3>
                                                <p className="mt-3 break-words text-2xl font-black tracking-tight text-primary-700 dark:text-primary-300">{card.price}</p>
                                                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">{card.detail}</p>
                                            </article>
                                        ))}
                                    </div>
                                )}

                                {block.type === 'table' && (
                                    <div className="mt-8">
                                        <PricingTable headings={block.headings} rows={block.rows} />
                                    </div>
                                )}

                                {block.type === 'text' && (
                                    <article className="mt-8 min-w-0 max-w-5xl rounded-3xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-950 sm:p-8">
                                        <div className="space-y-4">
                                            {block.paragraphs.map((paragraph) => (
                                                <p key={paragraph} className="text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-base">{paragraph}</p>
                                            ))}
                                        </div>
                                        {block.bullets && (
                                            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                                                {block.bullets.map((bullet) => (
                                                    <li key={bullet} className="flex items-start gap-3 text-sm leading-6 text-gray-700 dark:text-gray-300">
                                                        <Check className="mt-1 h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
                                                        <span>{bullet}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                        {block.externalLink && (
                                            <a
                                                href={block.externalLink.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary-700 underline dark:text-primary-300"
                                            >
                                                {block.externalLink.label}
                                                <ArrowRight className="h-4 w-4" aria-hidden="true" />
                                            </a>
                                        )}
                                    </article>
                                )}

                                {block.type === 'steps' && (
                                    <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                        {block.steps.map((step, stepIndex) => (
                                            <li key={step.title} className="min-w-0 rounded-3xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
                                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-50 text-sm font-black text-primary-700 dark:bg-primary-950 dark:text-primary-300">
                                                    {stepIndex + 1}
                                                </span>
                                                <h3 className="mt-4 font-bold">{step.title}</h3>
                                                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">{step.description}</p>
                                            </li>
                                        ))}
                                    </ol>
                                )}

                                {'note' in block && block.note && (
                                    <p className="mt-5 flex max-w-5xl gap-2 text-xs leading-5 text-gray-500 dark:text-gray-400">
                                        <CircleHelp className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                                        <span>{block.note}</span>
                                    </p>
                                )}
                            </div>
                        )}
                    </section>
                ))}
            </div>

            <section id="faqs" className="scroll-mt-24 border-t border-gray-100 px-6 py-14 dark:border-gray-800 md:px-10 md:py-20 lg:px-16">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-center text-3xl font-black tracking-tight sm:text-4xl">Frequently asked questions</h2>
                    <div className="mt-8 divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800">
                        {content.faqs.map(({ question, answer }) => (
                            <details key={question} className="group py-5">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left font-bold">
                                    <span>{question}</span>
                                    <span className="text-xl text-primary-600 group-open:rotate-45" aria-hidden="true">+</span>
                                </summary>
                                <p className="max-w-3xl pt-4 text-sm leading-7 text-gray-600 dark:text-gray-300">{answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-gray-950 px-6 py-14 text-white dark:bg-black md:px-10 md:py-20 lg:px-16">
                <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-center">
                    <div className="min-w-0 max-w-3xl">
                        <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{content.ctaTitle}</h2>
                        <p className="mt-4 text-sm leading-7 text-gray-300 sm:text-base">{content.ctaDescription}</p>
                        <nav aria-label="Related pricing and event tools" className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm font-bold text-white/80">
                            {content.related.map(({ label, href }) => (
                                <Link key={href} to={href} className="hover:text-white">{label}</Link>
                            ))}
                        </nav>
                    </div>
                    <a
                        href={APP_LINKS.signup}
                        onClick={() => trackCta('closing')}
                        className="inline-flex min-h-12 min-w-0 w-full items-center justify-center gap-2 whitespace-normal rounded-full bg-primary-600 px-5 py-4 text-center text-xs font-black uppercase leading-5 tracking-widest text-white hover:bg-primary-500 md:w-auto md:whitespace-nowrap"
                    >
                        {content.ctaLabel}
                        <ArrowRight className="h-4 w-4 shrink-0" />
                    </a>
                </div>
            </section>
        </main>
    );
}
