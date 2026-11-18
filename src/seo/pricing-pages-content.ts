import {
    DOMAIN_PRICES_NAIRA,
    DOMAIN_RENEWAL_MULTIPLIER,
    EMAIL_CREDIT_PER_MESSAGE,
    GUEST_PASS_FREE_TEST,
    GUEST_PASS_MINIMUM_CAPACITY,
    GUEST_PASS_MINIMUM_NAIRA,
    GUEST_PASS_TIERS,
    SMS_BUNDLES,
    STORAGE_FREE_PHOTOS,
    STORAGE_TIERS,
    STUDIO_PREMIUM_PRICE_NAIRA,
    TICKET_SERVICE_FEE_RATE,
    VENDOR_COMMISSION_RATE,
    WEBSITE_FREE_MONTHS,
    WEBSITE_KEEP_FOREVER_NAIRA,
    WEBSITE_OFFLINE_MONTHS,
} from '../config/pricing';

export type PricingPagePath =
    | '/bulk-sms-email-pricing'
    | '/event-ticketing-pricing'
    | '/qr-code-guest-pass-pricing'
    | '/event-website-pricing'
    | '/event-management-software-pricing';

type PricingCard = {
    title: string;
    price: string;
    detail: string;
    badge?: string;
};

type PricingBlock =
    | {
        type: 'cards';
        id: string;
        title: string;
        intro?: string;
        cards: PricingCard[];
        note?: string;
    }
    | {
        type: 'text';
        id: string;
        title: string;
        paragraphs: string[];
        bullets?: string[];
        externalLink?: { label: string; href: string };
    }
    | {
        type: 'table';
        id: string;
        title: string;
        intro?: string;
        headings: string[];
        rows: string[][];
        note?: string;
    }
    | {
        type: 'steps';
        id: string;
        title: string;
        intro?: string;
        steps: { title: string; description: string }[];
    }
    | { type: 'guest-pass-estimator'; id: string }
    | { type: 'ticket-fee-estimator'; id: string }
    | { type: 'website-cost-estimator'; id: string };

type PricingPageContent = {
    path: PricingPagePath;
    eyebrow: string;
    title: string;
    intro: string;
    heroNote?: string;
    blocks: PricingBlock[];
    faqs: { question: string; answer: string }[];
    related: { label: string; href: string }[];
    ctaTitle: string;
    ctaDescription: string;
    ctaLabel: string;
};

const money = (amount: number) => `₦${amount.toLocaleString('en-NG')}`;
const ticketRate = `${(TICKET_SERVICE_FEE_RATE * 100).toFixed(0)}%`;
const domainRows = Object.entries(DOMAIN_PRICES_NAIRA).map(([tld, price]) => [
    `.${tld}`,
    money(price),
    `${money(Math.round(price * DOMAIN_RENEWAL_MULTIPLIER))}/year`,
]);
const guestPassRows = GUEST_PASS_TIERS.map(({ label, pricePerGuestNaira }) => [
    label,
    `${money(pricePerGuestNaira)} per pass`,
]);
const messagingRows = SMS_BUNDLES.map(({ count, priceNaira }) => [
    `${count} credits`,
    money(priceNaira),
    `${money(Math.round(priceNaira / count))} per credit`,
]);

export function getGuestPassCostBreakdown(paidPassCount: number) {
    if (!Number.isInteger(paidPassCount) || paidPassCount < 1) return null;

    let remaining = paidPassCount;
    let previousLimit = 0;
    let total = 0;
    const breakdown: { label: string; count: number; unitPrice: number; subtotal: number }[] = [];

    for (const tier of GUEST_PASS_TIERS) {
        const tierLimit = tier.maxQuantity ?? paidPassCount;
        const capacity = Math.max(0, tierLimit - previousLimit);
        const count = Math.min(remaining, capacity);

        if (count > 0) {
            const subtotal = count * tier.pricePerGuestNaira;
            breakdown.push({
                label: tier.label,
                count,
                unitPrice: tier.pricePerGuestNaira,
                subtotal,
            });
            total += subtotal;
            remaining -= count;
        }

        previousLimit = tierLimit;
        if (remaining === 0) break;
    }

    const minimumChargeApplied = Math.max(0, GUEST_PASS_MINIMUM_NAIRA - total);
    return {
        total: total + minimumChargeApplied,
        breakdown,
        minimumChargeApplied,
    };
}

export function getTicketFeeEstimate(
    ticketPrice: number,
    ticketCount: number,
    passFeeToBuyer: boolean,
) {
    if (
        !Number.isSafeInteger(ticketPrice) ||
        !Number.isSafeInteger(ticketCount) ||
        ticketPrice < 0 ||
        ticketCount < 1
    ) {
        return null;
    }

    const grossTicketValue = ticketPrice * ticketCount;
    if (!Number.isSafeInteger(grossTicketValue)) return null;
    const serviceFee = Math.round(grossTicketValue * TICKET_SERVICE_FEE_RATE);

    return {
        grossTicketValue,
        serviceFee,
        buyerTotal: passFeeToBuyer ? grossTicketValue + serviceFee : grossTicketValue,
        organiserProceeds: passFeeToBuyer ? grossTicketValue : grossTicketValue - serviceFee,
    };
}

export function getWebsiteCostEstimate(
    domainTld: string,
    years: number,
    keepLiveIndefinitely: boolean,
) {
    const firstYearPrice = DOMAIN_PRICES_NAIRA[domainTld];
    if (!firstYearPrice || !Number.isSafeInteger(years) || years < 1 || years > 10) {
        return null;
    }

    const annualRenewal = Math.round(firstYearPrice * DOMAIN_RENEWAL_MULTIPLIER);
    const renewalTotal = annualRenewal * (years - 1);
    const extendedWebsiteFee = keepLiveIndefinitely ? WEBSITE_KEEP_FOREVER_NAIRA : 0;
    return {
        firstYearPrice,
        annualRenewal,
        renewalCount: years - 1,
        renewalTotal,
        extendedWebsiteFee,
        total: firstYearPrice + renewalTotal + extendedWebsiteFee,
    };
}

const messagingCards = SMS_BUNDLES.map(({ count, priceNaira }) => ({
    title: `${count} credits`,
    price: money(priceNaira),
    detail: `${money(Math.round(priceNaira / count))} per credit. Credits are shared across your AriyaHQ account.`,
}));

const guestPassCards = GUEST_PASS_TIERS.map(({ label, pricePerGuestNaira }) => ({
    title: label,
    price: `${money(pricePerGuestNaira)} / pass`,
    detail: 'Marginal rate: this price applies only to passes in this quantity bracket.',
}));

const websiteCards: PricingCard[] = [
    {
        title: 'Standard event website',
        price: 'Free',
        detail: `Your website is available for ${WEBSITE_FREE_MONTHS} months after your event. Archive access continues until month ${WEBSITE_OFFLINE_MONTHS}.`,
        badge: 'No subscription',
    },
    {
        title: 'Keep website live',
        price: `${money(WEBSITE_KEEP_FOREVER_NAIRA)} once`,
        detail: 'A one-time option to keep your event website live indefinitely.',
    },
    ...Object.entries(DOMAIN_PRICES_NAIRA).map(([tld, price]) => ({
        title: `Custom .${tld} domain`,
        price: `${money(price)} first year`,
        detail: `Hosting and Ariya branding removal included. Renewal: ${money(Math.round(price * DOMAIN_RENEWAL_MULTIPLIER))}/year.`,
    })),
];

export const pricingPages: Record<PricingPagePath, PricingPageContent> = {
    '/bulk-sms-email-pricing': {
        path: '/bulk-sms-email-pricing',
        eyebrow: 'Messaging pricing',
        title: 'Bulk SMS and Email Pricing in Nigeria',
        intro: 'Choose a messaging credit package for event invitations, reminders and updates. AriyaHQ uses a shared account balance for SMS and email, with no monthly or annual messaging subscription.',
        heroNote: 'Credit usage varies by channel and message length. A credit is not always equal to one SMS or one email recipient.',
        blocks: [
            {
                type: 'cards',
                id: 'messaging-packages',
                title: 'Bulk SMS and email packages',
                intro: 'Larger packages have a lower purchase cost per credit.',
                cards: messagingCards,
                note: 'Package cost per credit is not necessarily the cost per SMS or email. Actual credit usage depends on the message type, length and send.',
            },
            {
                type: 'table',
                id: 'choose-a-channel',
                title: 'Choose the right channel for your message',
                intro: 'Plan your communication around the amount of detail and timing your guests need.',
                headings: ['Communication need', 'Suggested channel', 'Example'],
                rows: [
                    ['Short, time-sensitive update', 'SMS', 'Venue change or arrival reminder'],
                    ['Detailed invitation or instructions', 'Email', 'Programme, directions or guest guidance'],
                    ['Event registration communication', 'SMS or email', 'Choose based on detail and urgency'],
                    ['Communication across multiple events', 'Shared account balance', 'Use credits from the same account balance'],
                ],
                note: 'These are general usage suggestions. Actual message credit usage depends on the channel, content and platform processing rules.',
            },
            {
                type: 'text',
                id: 'credit-usage',
                title: 'How AriyaHQ messaging credits work',
                paragraphs: [
                    'Your messaging credits are shared across your AriyaHQ account, so you can use the balance across the events you manage instead of buying a separate package for every event.',
                    'SMS usage depends on message segments. Longer messages may be split into multiple segments and consume additional credits, so the final balance depends on the number of messages and their length.',
                    `Email messages use ${EMAIL_CREDIT_PER_MESSAGE} credit per message, with applicable rounding applied per send. Email can be useful for detailed announcements and instructions that need more space than an SMS.`,
                ],
                bullets: [
                    'Use SMS for concise announcements, reminders and time-sensitive updates.',
                    'Use email for invitations, programmes, schedules and longer instructions.',
                    'Choose a package based on expected sends and message lengths, not recipient count alone.',
                ],
            },
            {
                type: 'text',
                id: 'messaging-benefits',
                title: 'Event communication alongside event management',
                paragraphs: [
                    'AriyaHQ brings event communication closer to guest registration, invitations and other event activities. You can choose SMS or email depending on the information you need to share.',
                ],
                bullets: [
                    'No monthly or annual subscription for messaging credits.',
                    'Choose from 50, 200 or 500 credit packages.',
                    'Use one account-wide balance across your events.',
                    'Coordinate messages with registration and guest management.',
                    'Select messages and recipients responsibly and follow applicable consent and communication requirements.',
                ],
            },
        ],
        faqs: [
            { question: 'How much does bulk SMS cost in Nigeria on AriyaHQ?', answer: 'Messaging packages start at ₦2,500 for 50 credits. Other packages are 200 credits for ₦8,000 and 500 credits for ₦17,500. SMS credit usage depends on message length and segments, so credits are not necessarily the same as message count.' },
            { question: 'How much does bulk email cost on AriyaHQ?', answer: 'Email uses half a credit per message, with applicable rounding applied per send. Packages start at ₦2,500 for 50 credits and can also be used for SMS.' },
            { question: 'Do I need a subscription to send bulk SMS or email?', answer: 'No. Purchase messaging credits when you need them; there is no monthly or annual messaging subscription.' },
            { question: 'Are messaging credits tied to one event?', answer: 'No. The credit balance is shared across your AriyaHQ account and can be used across the events you manage.' },
            { question: 'Does one SMS always use one credit?', answer: 'Not necessarily. SMS credit usage depends on the number of message segments. Longer messages may use more credits.' },
            { question: 'Can I use the same credits for SMS and email?', answer: 'Yes. AriyaHQ uses a shared messaging credit balance for SMS and email. The amount consumed depends on the channel and message rules.' },
            { question: 'Which messaging package should I choose?', answer: 'Choose based on how often you communicate with guests and the number and length of messages you expect to send. Larger packages have a lower purchase cost per credit, but a credit is not a guaranteed single message.' },
        ],
        related: [
            { label: 'Bulk SMS for events', href: '/bulk-sms-for-events' },
            { label: 'Bulk email for events', href: '/bulk-email-for-events' },
            { label: 'Event registration management', href: '/event-registration' },
            { label: 'All AriyaHQ pricing', href: '/pricing' },
        ],
        ctaTitle: 'Keep your event guests informed.',
        ctaDescription: 'Choose a messaging package when you are ready and manage communication alongside your event activities.',
        ctaLabel: 'Get started with AriyaHQ',
    },
    '/event-ticketing-pricing': {
        path: '/event-ticketing-pricing',
        eyebrow: 'Event ticketing fees',
        title: 'Event Ticketing Fees in Nigeria: AriyaHQ Pricing Explained',
        intro: `Create your event and sell paid tickets with a ${ticketRate} AriyaHQ service fee on the value of paid ticket sales. There is no monthly or annual subscription for core event planning.`,
        heroNote: 'AriyaHQ’s service fee is separate from payment processor charges.',
        blocks: [
            {
                type: 'cards',
                id: 'ticket-fee',
                title: 'How AriyaHQ charges for online ticket sales',
                cards: [
                    {
                        title: 'AriyaHQ service fee',
                        price: ticketRate,
                        detail: 'Charged on the value of paid tickets sold. The organiser can pass this fee to the buyer or have it deducted from proceeds.',
                        badge: 'No monthly subscription',
                    },
                    {
                        title: 'Payment processing',
                        price: 'Separate fee',
                        detail: 'Payment processor charges are separate from the AriyaHQ service fee. Check the processor’s current pricing for applicable rates.',
                    },
                ],
                note: 'Final checkout totals depend on the selected fee handling and payment method. Review the charges shown before confirming a payment.',
            },
            {
                type: 'table',
                id: 'ticket-example',
                title: 'Example: AriyaHQ fee on a ₦10,000 ticket',
                headings: ['Item', 'Amount'],
                rows: [
                    ['Ticket price', '₦10,000'],
                    [`AriyaHQ service fee (${ticketRate})`, '₦300'],
                ],
                note: 'This example shows the AriyaHQ service fee only. Payment processing fees are separate and depend on the payment processor’s current pricing. It is not a final checkout quote.',
            },
            {
                type: 'ticket-fee-estimator',
                id: 'ticket-fee-estimator',
            },
            {
                type: 'text',
                id: 'ticket-fee-handling',
                title: 'Choose how the AriyaHQ fee is handled',
                paragraphs: [
                    'AriyaHQ gives organisers a choice about the service fee on paid ticket sales. You can pass the fee to ticket buyers or have it deducted from your ticket proceeds.',
                    'Payment processing charges are separate. See the current rates on the payment processor’s official pricing page before estimating total transaction costs.',
                ],
                bullets: [
                    'Pass the AriyaHQ service fee to ticket buyers.',
                    'Deduct the AriyaHQ service fee from organiser proceeds.',
                    'Review payment processing charges separately.',
                    'Check the applicable checkout breakdown before completing a payment.',
                ],
                externalLink: {
                    label: 'View Paystack’s official pricing',
                    href: 'https://paystack.com/pricing',
                },
            },
            {
                type: 'steps',
                id: 'ticket-pricing-checklist',
                title: 'Plan your ticket price with the full cost in mind',
                intro: 'Use the calculator for AriyaHQ’s service fee, then confirm the current payment-processing charges and checkout presentation separately.',
                steps: [
                    { title: 'Set the ticket price', description: 'Choose a price that reflects the event experience and what each ticket includes.' },
                    { title: 'Estimate AriyaHQ’s fee', description: `Calculate ${ticketRate} of the paid ticket value and decide whether to pass the fee to buyers or deduct it from proceeds.` },
                    { title: 'Check processing charges', description: 'Payment processor fees are separate and may depend on the payment method and current rates.' },
                    { title: 'Review checkout', description: 'Confirm the displayed total, fee handling and settlement information before publishing ticket sales.' },
                ],
            },
            {
                type: 'text',
                id: 'ticket-tools',
                title: 'Ticketing with event management tools',
                paragraphs: [
                    'AriyaHQ brings ticket sales together with event registration and guest management. Depending on your event, you can also use digital invitations, bulk messaging and unique QR code guest passes.',
                ],
                bullets: [
                    'Create and manage event details.',
                    'Sell paid tickets and manage registrations.',
                    'Organise event guests and RSVP information.',
                    'Communicate with attendees through bulk SMS and email.',
                    'Prepare unique QR code guest passes as part of your access arrangements.',
                ],
            },
        ],
        faqs: [
            { question: 'How much does AriyaHQ charge for ticket sales?', answer: `AriyaHQ charges a ${ticketRate} service fee on the value of paid ticket sales. Organisers can pass this fee to buyers or have it deducted from their proceeds.` },
            { question: 'Does AriyaHQ charge a monthly subscription?', answer: 'No. AriyaHQ does not require a monthly or annual subscription for its core event planning tools.' },
            { question: 'Is the AriyaHQ service fee the only ticketing charge?', answer: 'No. Payment processor fees are separate from AriyaHQ’s service fee. Check the processor’s official current pricing and review the checkout breakdown.' },
            { question: 'Can I pass the ticketing fee to my customers?', answer: 'Yes. You can choose to pass the AriyaHQ service fee to ticket buyers or have it deducted from your proceeds.' },
            { question: 'Can I sell tickets for different types of events?', answer: 'AriyaHQ supports organisers managing different event types, including conferences, concerts, workshops, seminars and private celebrations.' },
            { question: 'Can I manage guests after they purchase tickets?', answer: 'AriyaHQ provides event registration and guest management tools to help organisers manage attendees.' },
            { question: 'Does AriyaHQ support QR code guest passes?', answer: 'Yes. AriyaHQ provides unique QR code guest passes. See the dedicated guest pass pricing page for current rates and purchase conditions.' },
        ],
        related: [
            { label: 'Event ticketing guide', href: '/event-ticketing-nigeria' },
            { label: 'QR code guest pass pricing', href: '/qr-code-guest-pass-pricing' },
            { label: 'Event registration management', href: '/event-registration' },
            { label: 'All AriyaHQ pricing', href: '/pricing' },
        ],
        ctaTitle: 'Start selling tickets for your event.',
        ctaDescription: 'Create an event, set up paid tickets and review the applicable service and payment processing fees.',
        ctaLabel: 'Create your event',
    },
    '/qr-code-guest-pass-pricing': {
        path: '/qr-code-guest-pass-pricing',
        eyebrow: 'QR guest pass pricing',
        title: 'QR Code Guest Pass Pricing in Nigeria',
        intro: 'Issue unique digital QR code guest passes and organise event access without a monthly subscription. Every event includes free test passes, with paid capacity priced progressively by quantity bracket.',
        heroNote: `${GUEST_PASS_FREE_TEST} free test passes per event. Paid pass rates decrease across higher quantity brackets.`,
        blocks: [
            {
                type: 'cards',
                id: 'guest-pass-tiers',
                title: 'QR code guest pass rates',
                intro: 'Each rate applies only to passes within its bracket; the final bracket rate is not applied to every pass in your order.',
                cards: guestPassCards,
                note: `The first ${GUEST_PASS_FREE_TEST} test passes are free. A paid purchase has a minimum event capacity of ${GUEST_PASS_MINIMUM_CAPACITY} and a minimum event charge of ${money(GUEST_PASS_MINIMUM_NAIRA)}. Confirm how existing event capacity affects your purchase in checkout.`,
            },
            {
                type: 'guest-pass-estimator',
                id: 'guest-pass-estimator',
            },
            {
                type: 'table',
                id: 'guest-pass-examples',
                title: 'Example paid pass estimates',
                headings: ['Paid passes', 'Estimated total'],
                rows: [50, 88, 100, 199, 200, 300, 500, 1000].map((count) => [
                    count.toLocaleString('en-NG'),
                    money(getGuestPassCostBreakdown(count)?.total ?? 0),
                ]),
                note: 'These estimates apply the progressive paid rates to the stated number of passes. The free test passes are separate; eligibility and the minimum event charge are subject to your event capacity and current checkout rules.',
            },
            {
                type: 'text',
                id: 'guest-pass-purchase-conditions',
                title: 'What to know before purchasing',
                paragraphs: [
                    `Each event includes ${GUEST_PASS_FREE_TEST} free test passes to try the guest pass functionality before purchasing additional capacity.`,
                    `A paid purchase must bring the event’s total pass capacity to at least ${GUEST_PASS_MINIMUM_CAPACITY}. The minimum paid event charge is ${money(GUEST_PASS_MINIMUM_NAIRA)}.`,
                    'Pricing is progressive. Each unit price applies only to the passes in its corresponding bracket, so the total is calculated across the applicable tiers.',
                ],
                bullets: [
                    `First ${GUEST_PASS_FREE_TEST} test passes are free for each event.`,
                    `Minimum event pass capacity for a paid purchase: ${GUEST_PASS_MINIMUM_CAPACITY}.`,
                    `Minimum paid event charge: ${money(GUEST_PASS_MINIMUM_NAIRA)}.`,
                    'Review the final quantity and total shown before confirming your purchase.',
                ],
            },
            {
                type: 'text',
                id: 'guest-pass-benefits',
                title: 'Organise guest access with AriyaHQ',
                paragraphs: [
                    'AriyaHQ helps event organisers prepare guest information and provide unique digital QR code passes. Passes can support guest identification and your event’s access arrangements.',
                    'QR code guest passes are one part of guest management. You can also manage event registration and RSVPs, share digital invitations and communicate with guests through bulk SMS and email.',
                ],
                bullets: [
                    'Provide unique digital passes to guests.',
                    'Organise guest information, registrations and RSVP responses.',
                    'Prepare guest arrivals and event entry arrangements.',
                    'Coordinate invitations and guest updates in one account.',
                ],
            },
        ],
        faqs: [
            { question: 'How much does a QR code guest pass cost in Nigeria?', answer: 'Paid passes use progressive pricing: ₦400 for the first 199, ₦350 for the next 300, ₦300 for the next 500, and ₦250 for additional passes above 999. Each rate applies only to its own bracket.' },
            { question: 'Can I get free QR code guest passes?', answer: `Yes. AriyaHQ provides ${GUEST_PASS_FREE_TEST} free test passes for each event.` },
            { question: 'What is the minimum number of guest passes I can purchase?', answer: `A paid purchase must bring the event’s total pass capacity to at least ${GUEST_PASS_MINIMUM_CAPACITY}. The minimum paid event charge is ${money(GUEST_PASS_MINIMUM_NAIRA)}. Check the current checkout for how existing event capacity affects the quantity you need to purchase.` },
            { question: 'Does AriyaHQ charge the same rate for every pass?', answer: 'No. Pricing is progressive, and each price applies only to passes within its corresponding quantity bracket.' },
            { question: 'How much do 100 QR code guest passes cost?', answer: 'At the first bracket rate, 100 paid passes are estimated at ₦40,000. The five free test passes are separate.' },
            { question: 'How much do 500 QR code guest passes cost?', answer: 'Using the progressive rates, 500 paid passes are estimated at ₦184,900. The five free test passes are separate.' },
            { question: 'How much do 1,000 QR code guest passes cost?', answer: 'Using the progressive rates, 1,000 paid passes are estimated at ₦334,850. The five free test passes are separate.' },
            { question: 'Do I need a monthly subscription?', answer: 'No. AriyaHQ does not require a monthly or annual subscription for guest passes; applicable charges are based on the pass capacity you purchase.' },
            { question: 'Can I manage registrations alongside QR code passes?', answer: 'Yes. AriyaHQ also provides event registration, RSVP management and guest management capabilities.' },
        ],
        related: [
            { label: 'QR code guest passes', href: '/qr-code-guest-passes' },
            { label: 'Event registration management', href: '/event-registration' },
            { label: 'Event check-in preparation', href: '/event-check-in' },
            { label: 'All AriyaHQ pricing', href: '/pricing' },
        ],
        ctaTitle: 'Get QR code guest passes for your event.',
        ctaDescription: `Start with ${GUEST_PASS_FREE_TEST} free test passes, then choose the capacity your event needs. Review the applicable rates and purchase conditions in checkout.`,
        ctaLabel: 'Get your guest passes',
    },
    '/event-website-pricing': {
        path: '/event-website-pricing',
        eyebrow: 'Event website pricing',
        title: 'Custom Event Website Pricing in Nigeria',
        intro: 'Give your wedding, conference or celebration a dedicated online home. AriyaHQ event websites have no monthly subscription, with optional upgrades for extended availability and custom domains.',
        heroNote: 'Extended website availability and a custom domain are separate options with separate pricing.',
        blocks: [
            {
                type: 'cards',
                id: 'website-pricing',
                title: 'Event website options and prices',
                intro: 'Choose the website option that matches how long you want your event site available and whether you need your own domain.',
                cards: websiteCards,
                note: 'Custom domain prices include hosting and removal of Ariya branding. Renewal is calculated from the selected first-year domain price.',
            },
            {
                type: 'website-cost-estimator',
                id: 'website-cost-estimator',
            },
            {
                type: 'steps',
                id: 'website-lifecycle',
                title: 'Understand the standard website lifecycle',
                intro: 'The normal event website lifecycle is different from the one-time extended website option.',
                steps: [
                    { title: 'Create your event website', description: 'Set up a dedicated page with your event details and share it with guests.' },
                    { title: `${WEBSITE_FREE_MONTHS} months after the event`, description: 'The standard website remains available for this period after your event.' },
                    { title: `Through month ${WEBSITE_OFFLINE_MONTHS}`, description: 'Archive access continues until month six; the site is then archived.' },
                    { title: 'Choose an optional upgrade', description: `Pay ${money(WEBSITE_KEEP_FOREVER_NAIRA)} once to keep the website live indefinitely, or purchase a custom domain separately.` },
                ],
            },
            {
                type: 'table',
                id: 'domain-pricing',
                title: 'Custom domain first-year and renewal prices',
                headings: ['Domain', 'First year', 'Renewal per year'],
                rows: domainRows,
                note: 'Custom domain pricing includes website hosting and Ariya branding removal. Renewal is 1.6 times the first-year price.',
            },
            {
                type: 'text',
                id: 'website-options',
                title: 'Which event website option should you choose?',
                paragraphs: [
                    'A standard event website is suitable when you need a place to share event information during the normal event lifecycle. You do not need a custom domain to create one.',
                    'Choose the extended website option if you want to keep the site live indefinitely. Choose a custom domain if you want a personalised web address; this is a separate purchase and includes hosting and Ariya branding removal.',
                ],
                bullets: [
                    'Standard website: no subscription; available three months after the event and archived at month six.',
                    `Extended website: ${money(WEBSITE_KEEP_FOREVER_NAIRA)} one-time per website to keep it live indefinitely.`,
                    'Custom domain: choose an available domain and pay its first-year price and renewal rate.',
                ],
            },
            {
                type: 'text',
                id: 'website-features',
                title: 'More than an event website',
                paragraphs: [
                    'AriyaHQ connects event websites with other tools that help organisers share information and coordinate their event.',
                ],
                bullets: [
                    'Share event name, date, venue and practical guest information.',
                    'Link guests to invitations and registration information.',
                    'Coordinate your website with RSVP management and guest details.',
                    'Explore bulk messaging and unique QR guest passes as separate event tools.',
                ],
            },
            {
                type: 'table',
                id: 'website-upgrade-comparison',
                title: 'Extended website or custom domain?',
                headings: ['Option', 'What it changes', 'Price basis'],
                rows: [
                    ['Standard event website', 'Share event information through an Ariya-hosted address.', `Free for ${WEBSITE_FREE_MONTHS} months after the event; archived at month ${WEBSITE_OFFLINE_MONTHS}.`],
                    ['Keep website live indefinitely', 'Extends availability of the event website.', `${money(WEBSITE_KEEP_FOREVER_NAIRA)} one-time per website.`],
                    ['Custom domain', 'Provides a personalised web address, hosting and Ariya branding removal.', 'First-year domain price plus annual renewal.'],
                ],
                note: 'The extended website option and custom domain are separate purchases and are not interchangeable.',
            },
        ],
        faqs: [
            { question: 'Is creating an event website on AriyaHQ free?', answer: `Yes. There is no monthly or annual subscription for creating a standard event website. It remains available for ${WEBSITE_FREE_MONTHS} months after your event, with archive access until month ${WEBSITE_OFFLINE_MONTHS}.` },
            { question: 'How long does my event website stay online?', answer: `The standard website remains available for ${WEBSITE_FREE_MONTHS} months after your event and is archived at month ${WEBSITE_OFFLINE_MONTHS}. You can pay ${money(WEBSITE_KEEP_FOREVER_NAIRA)} once to keep it live indefinitely.` },
            { question: 'How much does it cost to keep an event website live indefinitely?', answer: `The one-time extended website option costs ${money(WEBSITE_KEEP_FOREVER_NAIRA)} per website.` },
            { question: 'How much does a custom event domain cost?', answer: `First-year prices currently range from ${money(Math.min(...Object.values(DOMAIN_PRICES_NAIRA)))} to ${money(Math.max(...Object.values(DOMAIN_PRICES_NAIRA)))}, depending on the selected domain. Hosting and Ariya branding removal are included.` },
            { question: 'How much does custom domain renewal cost?', answer: 'Renewal is 1.6 times the first-year price. For example, a domain purchased for ₦40,000 renews at ₦64,000 per year.' },
            { question: 'Do I need a custom domain to create an event website?', answer: 'No. A standard event website does not require a custom domain. The custom domain is an optional separate purchase.' },
            { question: 'Is the custom domain the same as keeping my site live indefinitely?', answer: 'No. A custom domain and the one-time extended website option are separate purchases. The extended option keeps the website live indefinitely; a custom domain provides a personalised address and includes hosting and Ariya branding removal.' },
        ],
        related: [
            { label: 'Explore Ariya event websites', href: '/product/websites' },
            { label: 'Wedding website guide', href: '/wedding-website' },
            { label: 'All AriyaHQ pricing', href: '/pricing' },
            { label: 'Event management software pricing', href: '/event-management-software-pricing' },
        ],
        ctaTitle: 'Give your event a home online.',
        ctaDescription: 'Create an event website, share important details with your guests and choose optional upgrades only if you need them.',
        ctaLabel: 'Create your event',
    },
    '/event-management-software-pricing': {
        path: '/event-management-software-pricing',
        eyebrow: 'Event software pricing',
        title: 'Event Management Software Pricing in Nigeria',
        intro: 'Create events and use AriyaHQ’s core planning tools without a monthly or annual subscription. Pay applicable fees when you sell tickets, purchase messaging or guest pass capacity, or choose optional services.',
        heroNote: 'Pricing below is based on AriyaHQ’s configured service rates. Review applicable charges and conditions in checkout before purchase.',
        blocks: [
            {
                type: 'cards',
                id: 'pricing-overview',
                title: 'AriyaHQ pricing at a glance',
                cards: [
                    { title: 'Core event planning', price: 'Free', detail: 'Create events and use core planning tools without a monthly or annual subscription.' },
                    { title: 'Paid ticket sales', price: `${ticketRate} service fee`, detail: 'AriyaHQ fee on paid ticket sales. Payment processing is separate.' },
                    { title: 'QR guest passes', price: '₦400–₦250 / pass', detail: `${GUEST_PASS_FREE_TEST} free test passes. Progressive paid rates; minimum charge ${money(GUEST_PASS_MINIMUM_NAIRA)}.` },
                    { title: 'Messaging credits', price: `From ${money(Math.min(...SMS_BUNDLES.map((bundle) => bundle.priceNaira)))}`, detail: 'Packages for shared SMS and email credits, available across your account.' },
                    { title: 'Cash gift registry', price: '10% of payout', detail: 'Deducted from the organiser’s payout and includes Paystack processing.' },
                    { title: 'Vendor bookings', price: `${(VENDOR_COMMISSION_RATE * 100).toFixed(0)}% of payout`, detail: 'Basic vendor listing is free; fee applies to completed bookings and is deducted from vendor payout.' },
                    { title: 'Event photo gallery', price: `First ${STORAGE_FREE_PHOTOS} free`, detail: 'Additional photo packages are available as optional purchases.' },
                    { title: 'Ariya Studio Premium', price: `${money(STUDIO_PREMIUM_PRICE_NAIRA)} once`, detail: 'One-time lifetime access to the premium template library.' },
                    { title: 'Event website options', price: `From ${money(WEBSITE_KEEP_FOREVER_NAIRA)}`, detail: 'Standard site has a free post-event period; extended availability and custom domains are optional.' },
                ],
                note: 'Some services have progressive rates, minimum quantities or other conditions. Use the linked pricing pages for details.',
            },
            {
                type: 'text',
                id: 'pricing-model',
                title: 'No monthly subscription. Pay for what you use.',
                paragraphs: [
                    'AriyaHQ lets you create events and use core planning tools without a monthly or annual subscription. Charges apply to specific transactions and optional services.',
                    'This usage-based approach can suit wedding planners, corporate teams, event agencies, independent organisers and people planning private celebrations. You choose which paid services fit your event.',
                ],
                bullets: [
                    'Create and manage events with core planning tools for free.',
                    'Pay an AriyaHQ service fee when you sell paid tickets.',
                    'Purchase SMS and email credits or paid QR guest pass capacity when needed.',
                    'Choose optional services such as extended website availability or a custom domain.',
                ],
            },
            {
                type: 'table',
                id: 'gallery-tiers',
                title: 'Optional event gallery storage',
                headings: ['Photo capacity', 'Price'],
                rows: [
                    [`First ${STORAGE_FREE_PHOTOS} photos`, 'Free'],
                    ...STORAGE_TIERS.map((tier) => [tier.label.replace('+', 'Additional '), money(tier.priceNaira)]),
                ],
            },
            {
                type: 'table',
                id: 'domain-tiers',
                title: 'Custom domain first-year prices',
                headings: ['Domain', 'First year', 'Renewal per year'],
                rows: domainRows,
                note: `Custom domains include hosting and Ariya branding removal. Renewal is ${DOMAIN_RENEWAL_MULTIPLIER} times the first-year price.`,
            },
            {
                type: 'table',
                id: 'pricing-comparison',
                title: 'A flexible alternative to recurring software plans',
                headings: ['Pricing consideration', 'AriyaHQ'],
                rows: [
                    ['Monthly or annual subscription', 'No subscription for core event planning tools'],
                    ['Core planning tools', 'Free'],
                    ['Paid ticket sales', `${ticketRate} AriyaHQ service fee; processor fees are separate`],
                    ['Optional services', 'Pay for applicable services when you use them'],
                    ['Messaging credits', 'Shared across your AriyaHQ account'],
                ],
            },
        ],
        faqs: [
            { question: 'Is AriyaHQ event management software free?', answer: 'AriyaHQ lets you create events and use core planning tools for free. Charges apply to paid transactions and optional services.' },
            { question: 'Does AriyaHQ have a monthly subscription?', answer: 'No. AriyaHQ does not currently require a monthly or annual subscription for its core event planning tools.' },
            { question: 'How much does AriyaHQ charge for ticket sales?', answer: `AriyaHQ charges a ${ticketRate} service fee on paid ticket sales. This is separate from payment processing fees.` },
            { question: 'Can I manage multiple events on AriyaHQ?', answer: 'Yes. You can manage events through your AriyaHQ account. Messaging credits are also shared account-wide rather than restricted to individual events.' },
            { question: 'How much do QR code guest passes cost?', answer: `The first ${GUEST_PASS_FREE_TEST} test passes are free. Paid passes use progressive rates from ₦400 down to ₦250 in higher quantity brackets. A minimum event capacity of ${GUEST_PASS_MINIMUM_CAPACITY} and minimum charge of ${money(GUEST_PASS_MINIMUM_NAIRA)} apply.` },
            { question: 'How much does bulk SMS cost on AriyaHQ?', answer: 'Messaging packages start at ₦2,500 for 50 credits, with larger 200- and 500-credit packages also available. Credit usage depends on message channel and length.' },
            { question: 'Does AriyaHQ support event registration?', answer: 'Yes. AriyaHQ provides event registration and RSVP management tools to help organisers manage guest information.' },
            { question: 'Can I create a website for my event?', answer: 'Yes. AriyaHQ offers standard event websites, with separate optional upgrades for extended availability and custom domains.' },
            { question: 'Is AriyaHQ suitable for professional event planners?', answer: 'AriyaHQ provides event management tools for organisers working on weddings, conferences, corporate events and other occasions.' },
        ],
        related: [
            { label: 'Bulk SMS and email pricing', href: '/bulk-sms-email-pricing' },
            { label: 'Event ticketing fees', href: '/event-ticketing-pricing' },
            { label: 'QR code guest pass pricing', href: '/qr-code-guest-pass-pricing' },
            { label: 'Event website pricing', href: '/event-website-pricing' },
            { label: 'All AriyaHQ pricing', href: '/pricing' },
        ],
        ctaTitle: 'Start managing your event with AriyaHQ.',
        ctaDescription: 'Create your event, manage registrations and guests, then choose any paid services that fit your needs.',
        ctaLabel: 'Get started for free',
    },
};

export const pricingPagePaths = Object.keys(pricingPages) as PricingPagePath[];
