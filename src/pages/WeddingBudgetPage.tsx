import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    Calculator,
    Check,
    ClipboardCheck,
    Copy,
    Heart,
    Wallet,
} from 'lucide-react';
import { toast } from 'sonner';
import { APP_LINKS } from '../config/links';
import { EVENT_IMAGES } from '../config/eventImages';
import { trackEvent } from '../analytics/analytics';
import { weddingBudgetFaqs } from '../seo/wedding-budget-content';
import { allocateWeddingBudget } from '../utils/weddingBudget';

const budgetCategories = [
    {
        title: 'Wedding venue',
        details: 'Compare ceremony and reception spaces, including capacity, setup time, power, security, cleaning, parking, overtime and cancellation terms.',
    },
    {
        title: 'Catering and drinks',
        details: 'Plan for meals, small chops, drinks, serving staff, equipment and dietary needs. Confirm how quantities are estimated against expected attendance.',
    },
    {
        title: 'Decoration',
        details: 'Account for the stage, backdrop, tables, flowers, lighting, aisle, signage and any special photo areas. Get a quote that clearly lists what is included.',
    },
    {
        title: 'Wedding outfits and beauty',
        details: 'Allow for traditional and white-wedding outfits, fittings, shoes, accessories, makeup, hair, grooming and any agreed wedding-party costs.',
    },
    {
        title: 'Aso-Ebi and guest attire',
        details: 'If you are organising coordinated fabric, clarify whether the couple or guests pay, what each package includes, and how orders, delivery and tailoring will be managed.',
    },
    {
        title: 'Photography and videography',
        details: 'Compare coverage hours, team size, ceremony coverage, albums, editing, delivery timelines and other agreed deliverables.',
    },
    {
        title: 'Entertainment',
        details: 'Include the MC, DJ, live music, cultural performers, sound, lighting, transport and any equipment or overtime charges.',
    },
    {
        title: 'Traditional wedding requirements',
        details: 'Family and community customs differ. Discuss engagement-list items, gifts, clothing and ceremony arrangements with both families early.',
    },
    {
        title: 'Invitations and guest management',
        details: 'Consider printed or digital invitations, RSVP management, guest information, signage and the tools you will use to keep details organised.',
    },
    {
        title: 'Makeup, hair and grooming',
        details: 'Ask whether trials, travel, touch-ups, additional looks and services for the wedding party are covered in each vendor package.',
    },
    {
        title: 'Transportation and accommodation',
        details: 'Plan for the couple, family, wedding party, guests and suppliers travelling between locations, as well as accommodation or airport transfers when needed.',
    },
] as const;

const planningSteps = [
    {
        title: 'Agree on the total available budget',
        text: 'Count only contributions that have been discussed and reasonably confirmed. Avoid making commitments based on money you hope to receive later.',
    },
    {
        title: 'Choose your priorities',
        text: 'Decide together what matters most, such as food, photography, ceremony needs or guest comfort. Protect those priorities when comparing options.',
    },
    {
        title: 'Set a realistic guest estimate',
        text: 'Guest numbers affect food, venue capacity, drinks, seating, invitations and logistics. Agree on an initial count with family before making major bookings.',
    },
    {
        title: 'Get comparable vendor quotations',
        text: 'Request written, itemised quotes and compare the services, hours, deliverables, exclusions, payment dates and cancellation terms—not just the total.',
    },
    {
        title: 'Record every commitment and payment',
        text: 'For each expense, note the category, supplier, estimated and agreed costs, amount paid, balance, deadline and payment status.',
    },
    {
        title: 'Review spending regularly',
        text: 'Update the plan whenever costs or payments change. Regular reviews make it easier to spot overspending while there is still time to adjust.',
    },
    {
        title: 'Keep a contingency aside',
        text: 'Unexpected expenses can happen. Include a reserve in the original plan and avoid using it for routine costs if possible.',
    },
] as const;

const costSavingTips = [
    'Agree on a guest count that suits your budget and the celebration you want.',
    'Compare the full venue cost, including facilities, setup, overtime and rentals.',
    'Spend intentionally: simplify lower-priority items to protect what matters most.',
    'Compare vendor packages and deliverables, not price alone.',
    'Consider digital invitations if they suit your guests and plans.',
    'Make major decisions early to reduce avoidable last-minute changes.',
    'Record small expenses such as transport, accessories, printing and refreshments.',
    'Avoid debt or financial pressure just to meet someone else’s expectations.',
] as const;

const budgetMistakes = [
    'Underestimating the guest count and the catering or venue capacity it requires.',
    'Forgetting extra charges such as transport, setup, overtime, taxes or rentals.',
    'Relying on verbal quotes instead of documenting prices and deliverables.',
    'Booking major services before agreeing on priorities and a total limit.',
    'Leaving family or cultural requirements until the last minute.',
    'Losing track of deposits, balances, due dates or contributions.',
    'Using contingency money for ordinary expenses too early.',
    'Comparing your plans with another couple’s finances and priorities.',
] as const;

const checklistGroups = [
    {
        title: 'Financial planning',
        items: [
            'Agree on the total budget and confirm contributions.',
            'Choose spending priorities and estimate guest numbers.',
            'Set aside a contingency fund.',
            'Keep traditional and white-wedding budgets visible under one overall plan.',
        ],
    },
    {
        title: 'Venue, food and suppliers',
        items: [
            'Compare venue facilities, capacity and additional charges.',
            'Confirm catering quantities, menu and service requirements.',
            'Compare decoration, photography, entertainment and outfit quotations.',
            'Keep written agreements, deliverables, deposits and due dates.',
        ],
    },
    {
        title: 'Guests and payments',
        items: [
            'Prepare the guest list and decide how invitations and RSVPs will be managed.',
            'Estimate transport and accommodation needs.',
            'Record every payment, balance and deadline.',
            'Review actual spending against the budget regularly.',
        ],
    },
] as const;

const naira = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
});

export default function WeddingBudgetPage() {
    const [budgetInput, setBudgetInput] = useState('10000000');
    const [guestInput, setGuestInput] = useState('200');
    const [copyLabel, setCopyLabel] = useState('Copy my budget breakdown');
    const calculatorStarted = useRef(false);

    const parsedBudget = Number(budgetInput);
    const parsedGuests = Number(guestInput);
    const validBudget = budgetInput.trim() !== ''
        && Number.isSafeInteger(parsedBudget)
        && parsedBudget >= 0;
    const validGuests = guestInput.trim() !== ''
        && Number.isSafeInteger(parsedGuests)
        && parsedGuests > 0;
    const budget = validBudget ? parsedBudget : 0;
    const guests = validGuests ? parsedGuests : 0;
    const allocations = allocateWeddingBudget(budget);
    const budgetPerGuest = guests > 0 ? Math.round(budget / guests) : 0;

    function trackCalculatorStart() {
        if (calculatorStarted.current) return;
        calculatorStarted.current = true;
        trackEvent('wedding_budget_calculator_started', {});
    }

    async function copyBreakdown() {
        if (!validBudget || !validGuests) {
            toast.error('Enter a valid budget and a guest count greater than zero.');
            return;
        }

        const breakdown = [
            'Illustrative Nigerian wedding budget breakdown',
            `Total budget: ${naira.format(budget)}`,
            `Expected guests: ${guests}`,
            ...allocations.map(({ name, percent, amount }) =>
                `${name} (${percent}%): ${naira.format(amount)}`,
            ),
            `Budget per invited guest: ${naira.format(budgetPerGuest)}`,
            '',
            'Planning example only. Actual costs and vendor quotations vary. The per-guest figure is not a catering cost estimate.',
        ].join('\n');

        try {
            await navigator.clipboard.writeText(breakdown);
            setCopyLabel('Budget breakdown copied');
            window.setTimeout(() => setCopyLabel('Copy my budget breakdown'), 2500);
            trackEvent('wedding_budget_breakdown_copied', {
                guest_count: String(guests),
            });
            toast.success('Budget breakdown copied.');
        } catch (error) {
            console.error('Unable to copy the wedding budget breakdown:', error);
            toast.error('Could not copy the breakdown. Please check clipboard access and try again.');
        }
    }

    return (
        <main className="bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
            <section className="relative isolate overflow-hidden bg-gray-950 pt-24 text-white">
                <img
                    src={EVENT_IMAGES.eventPlanner}
                    alt="Nigerian event planner reviewing a wedding plan"
                    fetchPriority="high"
                    className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-50"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-950/95 via-gray-950/80 to-gray-950/45" />
                <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-16">
                    <div className="max-w-3xl">
                        <nav aria-label="Breadcrumb" className="mb-6 text-xs font-bold text-white/65">
                            <Link to="/" className="transition hover:text-white">Home</Link>
                            <span className="mx-2" aria-hidden="true">/</span>
                            <span aria-current="page" className="text-white">Nigerian wedding budget</span>
                        </nav>
                        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-orange-200 backdrop-blur">
                            <Wallet className="h-3.5 w-3.5" />
                            A practical guide for couples
                        </span>
                        <h1 className="text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
                            Nigerian Wedding Budget: How Much Does It Cost to Plan a Wedding in Nigeria?
                        </h1>
                        <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
                            Plan the wedding you want, with the budget you have. Understand common
                            expenses, set priorities and use the calculator below to sketch an
                            illustrative budget in naira.
                        </p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <a
                                href="#calculator"
                                className="inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-600 px-3 py-4 text-[10px] font-black uppercase tracking-widest text-white transition hover:bg-primary-500 sm:w-auto sm:px-7 sm:text-xs"
                            >
                                Try the budget calculator <ArrowRight className="h-4 w-4" />
                            </a>
                            <Link
                                to="/wedding-planning"
                                className="inline-flex min-h-12 w-full items-center justify-center whitespace-nowrap rounded-full border border-white/30 bg-white/5 px-3 py-4 text-[10px] font-black uppercase tracking-widest text-white transition hover:bg-white/15 sm:w-auto sm:px-7 sm:text-xs"
                            >
                                Read the wedding planning guide
                            </Link>
                        </div>
                        <p className="mt-5 text-xs font-medium text-white/65">
                            There is no single fixed price. Costs depend on your plans, location,
                            guest count and current vendor quotations.
                        </p>
                    </div>
                    <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-md sm:p-8">
                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-300/15 text-orange-200">
                                <Calculator className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-200">Start with a clear picture</p>
                                <h2 className="mt-1 text-xl font-black">Budget by choice, not guesswork.</h2>
                            </div>
                        </div>
                        <p className="mt-5 text-sm leading-6 text-white/75">
                            Set your available total, agree on priorities and ask vendors for
                            up-to-date itemised quotations before committing.
                        </p>
                        <div className="mt-6 grid grid-cols-2 gap-3">
                            <div className="rounded-2xl bg-black/20 p-4">
                                <span className="text-[10px] font-black uppercase tracking-widest text-white/55">Plan together</span>
                                <p className="mt-2 text-sm font-bold">Set priorities first</p>
                            </div>
                            <div className="rounded-2xl bg-black/20 p-4">
                                <span className="text-[10px] font-black uppercase tracking-widest text-white/55">Track clearly</span>
                                <p className="mt-2 text-sm font-bold">Record every payment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-b border-gray-100 bg-[#fbf8f4] py-10 dark:border-gray-800 dark:bg-gray-900/60">
                <div className="mx-auto grid max-w-7xl gap-5 px-6 md:grid-cols-[0.7fr_1.3fr] md:px-10 lg:px-16">
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Start with what is possible</span>
                        <h2 className="mt-3 text-2xl font-black tracking-tight">A beautiful wedding does not require an unlimited budget.</h2>
                    </div>
                    <p className="leading-7 text-gray-600 dark:text-gray-300">
                        A small celebration and a large, multi-day event have different financial
                        needs. Before booking, decide what you can comfortably spend, what matters
                        most to you both and which people need to be part of those decisions.
                        Build a plan around your own circumstances rather than a generic total found
                        online.
                    </p>
                </div>
            </section>

            <section id="calculator" className="scroll-mt-24 px-6 py-16 md:px-10 md:py-24 lg:px-16">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-3xl">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Illustrative wedding budget calculator</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">See how a budget could be allocated.</h2>
                        <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                            Enter a total and your expected guest count to see a sample allocation.
                            Use the breakdown as a starting point, then adjust category amounts to
                            match your priorities. These percentages are not Nigerian industry
                            averages, vendor prices or a live quotation.
                        </p>
                    </div>

                    <div className="mt-9 grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
                        <div className="h-fit rounded-[2rem] border border-gray-100 bg-[#fbf8f4] p-6 dark:border-gray-800 dark:bg-gray-900 sm:p-8">
                            <label htmlFor="wedding-budget-total" className="block text-xs font-black uppercase tracking-widest text-gray-700 dark:text-gray-200">
                                Total wedding budget (₦)
                            </label>
                            <input
                                id="wedding-budget-total"
                                type="number"
                                inputMode="numeric"
                                min="0"
                                max={Number.MAX_SAFE_INTEGER}
                                step="1"
                                value={budgetInput}
                                onFocus={trackCalculatorStart}
                                onChange={(event) => setBudgetInput(event.target.value)}
                                className="mt-3 w-full rounded-2xl border border-gray-200 bg-white px-4 py-4 text-lg font-bold text-gray-900 outline-none transition focus:border-primary-600 focus:ring-2 focus:ring-primary-600/15 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                                aria-describedby="wedding-budget-note"
                            />
                            {!validBudget && (
                                <p role="alert" className="mt-2 text-xs font-medium text-red-600">
                                    Enter a non-negative whole amount in naira.
                                </p>
                            )}
                            <label htmlFor="wedding-budget-guests" className="mt-6 block text-xs font-black uppercase tracking-widest text-gray-700 dark:text-gray-200">
                                Expected number of guests
                            </label>
                            <input
                                id="wedding-budget-guests"
                                type="number"
                                inputMode="numeric"
                                min="1"
                                max={Number.MAX_SAFE_INTEGER}
                                step="1"
                                value={guestInput}
                                onFocus={trackCalculatorStart}
                                onChange={(event) => setGuestInput(event.target.value)}
                                className="mt-3 w-full rounded-2xl border border-gray-200 bg-white px-4 py-4 text-lg font-bold text-gray-900 outline-none transition focus:border-primary-600 focus:ring-2 focus:ring-primary-600/15 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                                aria-describedby="wedding-budget-note"
                            />
                            {!validGuests && (
                                <p role="alert" className="mt-2 text-xs font-medium text-red-600">
                                    Enter a whole guest count greater than zero.
                                </p>
                            )}
                            <div className="mt-6 rounded-2xl bg-white p-5 dark:bg-gray-950">
                                <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Budget per invited guest</p>
                                <p className="mt-2 text-3xl font-black tracking-tight text-primary-700 dark:text-primary-400">
                                    {validBudget && validGuests ? naira.format(budgetPerGuest) : '—'}
                                </p>
                                <p className="mt-2 text-xs leading-5 text-gray-500 dark:text-gray-400">
                                    This divides the total budget by the guest count. It is not a
                                    catering cost estimate.
                                </p>
                            </div>
                            <p id="wedding-budget-note" className="mt-5 text-xs leading-5 text-gray-500 dark:text-gray-400">
                                Example values are prefilled to make the calculator easy to try.
                                Replace them with your own figures.
                            </p>
                        </div>

                        <div className="rounded-[2rem] border border-gray-100 p-6 dark:border-gray-800 sm:p-8">
                            <div className="flex flex-col gap-3 border-b border-gray-100 pb-5 dark:border-gray-800 sm:flex-row sm:items-end sm:justify-between">
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-primary-600">Sample allocation · 100%</p>
                                    <h3 className="mt-2 text-xl font-black">A starting point to adapt.</h3>
                                </div>
                                <p className="text-sm font-bold text-gray-500 dark:text-gray-400">
                                    Total: {validBudget ? naira.format(budget) : '—'}
                                </p>
                            </div>
                            <div className="mt-3 divide-y divide-gray-100 dark:divide-gray-800">
                                {allocations.map(({ name, percent, amount }) => (
                                    <div key={name} className="flex items-center justify-between gap-4 py-4">
                                        <div className="min-w-0">
                                            <p className="text-sm font-bold text-gray-800 dark:text-gray-200">{name}</p>
                                            <div className="mt-2 h-1.5 w-full max-w-48 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                                                <div
                                                    className="h-full rounded-full bg-primary-600"
                                                    style={{ width: `${percent * 4}%` }}
                                                    aria-hidden="true"
                                                />
                                            </div>
                                        </div>
                                        <div className="shrink-0 text-right">
                                            <p className="text-sm font-black text-gray-900 dark:text-white">
                                                {validBudget ? naira.format(amount) : '—'}
                                            </p>
                                            <p className="mt-1 text-xs font-bold text-gray-500">{percent}%</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button
                                type="button"
                                onClick={copyBreakdown}
                                className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gray-950 px-6 py-4 text-xs font-black uppercase tracking-widest text-white transition hover:bg-primary-700 dark:bg-white dark:text-gray-950 dark:hover:bg-primary-100 sm:w-auto"
                            >
                                <Copy className="h-4 w-4" />
                                {copyLabel}
                            </button>
                        </div>
                    </div>
                    <p className="mt-6 rounded-2xl border-l-4 border-primary-500 bg-orange-50 p-5 text-sm leading-6 text-gray-700 dark:bg-orange-950/20 dark:text-gray-200">
                        <strong>Planning example only.</strong> Actual vendor costs and expenses
                        vary by location, timing, guest count, supplier and your choices. Confirm
                        current prices directly with vendors before making commitments.
                    </p>
                </div>
            </section>

            <section className="bg-[#fbf8f4] px-6 py-16 dark:bg-gray-900/60 md:px-10 md:py-20 lg:px-16">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-3xl">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Wedding budget breakdown</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">What should you budget for?</h2>
                        <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                            The right categories depend on your ceremony, family arrangements and
                            plans. Use this list to start a conversation, then tailor it to your
                            celebration.
                        </p>
                    </div>
                    <div className="mt-9 grid gap-4 md:grid-cols-2">
                        {budgetCategories.map((category, index) => (
                            <article key={category.title} className="rounded-3xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
                                <div className="flex items-start gap-4">
                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-50 text-xs font-black text-primary-700 dark:bg-primary-900/30 dark:text-primary-300">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <div>
                                        <h3 className="font-black text-gray-900 dark:text-white">{category.title}</h3>
                                        <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">{category.details}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                    <Link
                        to="/aso-ebi-in-nigeria"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-black text-primary-700 hover:text-primary-600 dark:text-primary-300"
                    >
                        Read the Aso-Ebi fabric and ordering guide <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </section>

            <section className="px-6 py-16 md:px-10 md:py-20 lg:px-16">
                <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Make a plan you can follow</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">How to create your wedding budget, step by step</h2>
                        <p className="mt-5 leading-7 text-gray-600 dark:text-gray-300">
                            Agree on the numbers before making commitments. Revisit them together
                            as quotes arrive and plans change.
                        </p>
                        <Link
                            to="/wedding-planning"
                            className="mt-6 inline-flex items-center gap-2 text-sm font-black text-primary-700 hover:text-primary-600 dark:text-primary-400"
                        >
                            Read the complete Nigerian wedding planning guide <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                    <ol className="space-y-5">
                        {planningSteps.map((step, index) => (
                            <li key={step.title} className="flex gap-4 rounded-2xl border border-gray-100 p-5 dark:border-gray-800">
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-50 text-xs font-black text-primary-700 dark:bg-primary-900/30 dark:text-primary-300">
                                    {index + 1}
                                </span>
                                <div>
                                    <h3 className="text-sm font-black">{step.title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">{step.text}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <section className="border-y border-gray-100 px-6 py-16 dark:border-gray-800 md:px-10 md:py-20 lg:px-16">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-3xl">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Different celebrations, different plans</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Make the budget fit your wedding—not the other way around.</h2>
                        <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                            There are no reliable universal price bands for these approaches.
                            Build each plan from your available funds, chosen location, guest count
                            and current written vendor quotations.
                        </p>
                    </div>
                    <div className="mt-8 grid gap-4 md:grid-cols-3">
                        {[
                            {
                                title: 'Intimate celebration',
                                detail: 'Keep the guest list focused, choose a suitably sized venue, and prioritise the ceremony, hospitality and essential photography.',
                            },
                            {
                                title: 'Mid-sized wedding',
                                detail: 'Balance venue, food, decoration and vendor coverage while deciding which extras will make the biggest difference to your guests.',
                            },
                            {
                                title: 'Large or multi-day wedding',
                                detail: 'Plan for added coordination, multiple venues or ceremonies, larger guest logistics and a clear payment schedule across suppliers.',
                            },
                        ].map((option) => (
                            <article key={option.title} className="rounded-3xl bg-[#fbf8f4] p-6 dark:bg-gray-900">
                                <h3 className="font-black">{option.title}</h3>
                                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">{option.detail}</p>
                            </article>
                        ))}
                    </div>
                    <p className="mt-5 text-xs leading-5 text-gray-500 dark:text-gray-400">
                        These are planning approaches, not fixed cost estimates or market benchmarks.
                    </p>
                </div>
            </section>

            <section className="bg-gray-950 px-6 py-16 text-white dark:bg-black md:px-10 md:py-20 lg:px-16">
                <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-300">Spend with intention</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight">Ways to reduce costs without losing what matters</h2>
                        <ul className="mt-7 space-y-4">
                            {costSavingTips.map((tip) => (
                                <li key={tip} className="flex gap-3 text-sm leading-6 text-gray-300">
                                    <Check className="mt-1 h-4 w-4 shrink-0 text-orange-300" />
                                    {tip}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:p-8">
                        <h3 className="text-xl font-black">Common wedding budget mistakes to avoid</h3>
                        <ul className="mt-6 space-y-4">
                            {budgetMistakes.map((mistake) => (
                                <li key={mistake} className="border-b border-white/10 pb-4 text-sm leading-6 text-gray-300 last:border-0 last:pb-0">
                                    {mistake}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="px-6 py-16 md:px-10 md:py-20 lg:px-16">
                <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="overflow-hidden rounded-[2rem]">
                        <img
                            src={EVENT_IMAGES.yorubaCouple}
                            alt="A couple celebrating in traditional Nigerian wedding attire"
                            loading="lazy"
                            className="h-full max-h-[460px] w-full object-cover"
                        />
                    </div>
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Two ceremonies, one overall plan</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Plan a traditional wedding and white wedding together.</h2>
                        <p className="mt-5 leading-7 text-gray-600 dark:text-gray-300">
                            If you are holding both ceremonies, separate their costs so you can see
                            what each event requires, while keeping one overall limit to avoid
                            spending more than planned. Traditional requirements differ across
                            families and communities, so discuss them early with the people involved.
                        </p>
                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                            <div className="rounded-2xl bg-[#fbf8f4] p-5 dark:bg-gray-900">
                                <h3 className="font-black">Traditional wedding</h3>
                                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">Track engagement requirements, outfits, family gifts, venue, food, ceremony and logistics.</p>
                            </div>
                            <div className="rounded-2xl bg-[#fbf8f4] p-5 dark:bg-gray-900">
                                <h3 className="font-black">White wedding</h3>
                                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">Track ceremony, reception, attire, wedding party, catering, photography and transport.</p>
                            </div>
                        </div>
                        <Link
                            to="/wedding-website"
                            className="mt-6 inline-flex items-center gap-2 text-sm font-black text-primary-700 hover:text-primary-600 dark:text-primary-400"
                        >
                            Create a wedding website for your guests <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="bg-[#fbf8f4] px-6 py-16 dark:bg-gray-900/60 md:px-10 md:py-20 lg:px-16">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-3xl">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Keep every commitment visible</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">What a wedding budget tracker should contain</h2>
                        <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                            Keep expense information in one current place, whether that is a
                            spreadsheet or a planning tool. Review it whenever a quote, payment or
                            decision changes.
                        </p>
                    </div>
                    <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            'Expense category and description',
                            'Vendor or supplier',
                            'Estimated and agreed cost',
                            'Amount paid and outstanding balance',
                            'Payment deadline and status',
                            'Total funds available',
                            'Total committed and paid',
                            'Remaining budget and overages',
                        ].map((item) => (
                            <div key={item} className="flex gap-3 rounded-2xl border border-gray-100 bg-white p-4 text-sm font-bold text-gray-700 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-300">
                                <ClipboardCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
                                {item}
                            </div>
                        ))}
                    </div>
                    <p className="mt-7 max-w-3xl leading-7 text-gray-600 dark:text-gray-300">
                        For a larger celebration, keep traditional and white-wedding expenses
                        distinct under your shared overall limit. If relatives are contributing,
                        record what has actually been agreed and who is responsible for each
                        payment.
                    </p>
                    <Link
                        to="/wedding-rsvp-guest-management"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-black text-primary-700 hover:text-primary-600 dark:text-primary-400"
                    >
                        Organise your wedding guest list and RSVPs <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                        to="/product/finance"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-black text-primary-700 hover:text-primary-600 dark:text-primary-400"
                    >
                        Explore AriyaHQ event finance tools <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </section>

            <section className="px-6 py-16 md:px-10 md:py-20 lg:px-16">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-3xl">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">A practical reminder</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">A Nigerian wedding budget checklist</h2>
                        <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                            Use these prompts before making major bookings and as you check in on
                            your spending.
                        </p>
                    </div>
                    <div className="mt-8 grid gap-5 lg:grid-cols-3">
                        {checklistGroups.map((group) => (
                            <div key={group.title} className="rounded-3xl border border-gray-100 p-6 dark:border-gray-800">
                                <h3 className="font-black">{group.title}</h3>
                                <ul className="mt-5 space-y-4">
                                    {group.items.map((item) => (
                                        <li key={item} className="flex gap-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                                            <Check className="mt-1 h-4 w-4 shrink-0 text-primary-600" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-t border-gray-100 bg-[#fbf8f4] px-6 py-16 dark:border-gray-800 dark:bg-gray-900/60 md:px-10 md:py-20 lg:px-16">
                <div className="mx-auto max-w-4xl">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Common questions</span>
                    <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Wedding budget in Nigeria: FAQs</h2>
                    <div className="mt-7 divide-y divide-gray-200 dark:divide-gray-800">
                        {weddingBudgetFaqs.map(({ question, answer }) => (
                            <details key={question} className="group py-5">
                                <summary className="cursor-pointer list-none pr-6 text-base font-black marker:hidden">
                                    {question}
                                </summary>
                                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">{answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-gray-950 px-6 py-16 text-white dark:bg-black md:px-10 md:py-20 lg:px-16">
                <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                    <div className="max-w-2xl">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-300">Plan with clarity</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Spend less time chasing details and more time planning your celebration.</h2>
                        <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
                            Keep your wedding finances and other event-planning details easier to
                            find with AriyaHQ.
                        </p>
                    </div>
                    <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                        <a
                            href={APP_LINKS.signup}
                            className="inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-600 px-3 py-4 text-[10px] font-black uppercase tracking-widest text-white transition hover:bg-primary-500 sm:w-auto sm:px-7 sm:text-xs"
                        >
                            Start planning with AriyaHQ <ArrowRight className="h-4 w-4" />
                        </a>
                        <Link
                            to="/wedding-planning"
                            className="inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/20 px-3 py-4 text-[10px] font-black uppercase tracking-widest text-white transition hover:bg-white/10 sm:w-auto sm:px-7 sm:text-xs"
                        >
                            <Heart className="h-4 w-4" />
                            Wedding planning guide
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
