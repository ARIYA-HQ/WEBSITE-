import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, Search, MessageCircle, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        category: "General",
        questions: [
            {
                q: "What is Ariya HQ?",
                a: "Ariya HQ is an event planning platform built for Nigerian planners and vendors. It gives planners tools to manage every part of an event — budgets, guests, vendors, websites, registries, and tickets — all in one place. Vendors get a profile to receive bookings from planners actively looking for services."
            },
            {
                q: "Who is Ariya built for?",
                a: "Ariya serves three groups: personal planners organising their own celebrations, professional event planners managing client events, and vendors (caterers, photographers, decorators, etc.) who want to grow their bookings. Each has its own dashboard tailored to their workflow."
            },
            {
                q: "Is there a mobile app?",
                a: "The web app is fully mobile-responsive and works on any browser. You can add it to your home screen as a Progressive Web App (PWA) for an app-like experience on iOS and Android — no download required."
            },
            {
                q: "Can I collaborate with a team?",
                a: "Yes. Professional planners can add team members to events. Each member gets access to the tools relevant to their role. Team member access is a paid unlock (₦10,000+ per member)."
            },
        ]
    },
    {
        category: "Pricing & Billing",
        questions: [
            {
                q: "Is Ariya free?",
                a: "Yes — completely. Creating an account, unlimited events, guest management, budget tracking, vendor discovery, gift registry, and ticket sales are all free. You only pay for specific premium capabilities when you need them."
            },
            {
                q: "Are there any subscription fees?",
                a: "No. Ariya has no monthly or annual plans. Everything is pay-per-feature — you unlock what you need for a specific event, once."
            },
            {
                q: "What do planners pay for?",
                a: "Planners pay only for premium unlocks: removing Ariya branding (₦15,000/event), adding team members (₦10,000+/member), advanced analytics (₦20,000/event), custom domains (from ₦20,000), and SMS guest notification bundles (from ₦2,500). Everything else is free."
            },
            {
                q: "What do vendors pay for?",
                a: "Vendors pay a 7% platform fee on completed bookings — deducted from their payout after service delivery is confirmed. There are no upfront costs, no subscription, and no fee on inquiries or cancelled bookings. Optional paid unlocks include visibility boosts, an enhanced profile, and the one-time Verified Badge (₦30,000)."
            },
            {
                q: "How do registry fees work?",
                a: "Setting up a registry is free. When a planner withdraws collected funds, a 10% fee is deducted — 8% Ariya platform fee and 2% Paystack processing. Guests always pay the exact face value you set — no hidden markup."
            },
            {
                q: "How do ticket fees work?",
                a: "Creating events and ticketing is free. A 3% service fee is deducted from the organiser's payout at withdrawal. Attendees pay exactly the price you set — no buyer-facing fees are added."
            },
            {
                q: "Are feature unlocks permanent?",
                a: "Most unlocks are permanent for that event — pay once and it's active for the event's lifetime (e.g. branding removal, analytics). Visibility boosts for vendors are time-limited (7 or 30 days). The Vendor Verified Badge is a permanent, one-time payment with no renewal."
            },
            {
                q: "What payment methods are accepted?",
                a: "All payments are processed via Paystack. You can pay with any Nigerian debit card (Visa, Mastercard, Verve) or bank transfer where supported."
            },
        ]
    },
    {
        category: "For Vendors",
        questions: [
            {
                q: "How do I get bookings on Ariya?",
                a: "Sign up as a vendor, complete your profile — portfolio, services, pricing, availability — and planners will find you through search and category browsing. The more complete your profile, the higher your visibility. Paid visibility boosts can further increase your reach."
            },
            {
                q: "What is the Ariya Guarantee?",
                a: "The Ariya Guarantee is a free, optional escrow programme. When enabled, client funds are held securely at booking and automatically released 48 hours after the event — or immediately when the planner confirms delivery. Planners can filter to show only Guarantee vendors, giving you a real competitive edge at zero cost."
            },
            {
                q: "What is the Verified Badge?",
                a: "A trust signal showing planners that Ariya has verified your identity. You pay a one-time ₦30,000 fee, submit your NIN and/or CAC documents, and our team reviews within 24–48 hours. Once approved, the badge is permanent — no annual renewal. Planners can filter searches to verified vendors only."
            },
            {
                q: "How and when do I get paid?",
                a: "When a booking is completed and confirmed, a 7% platform fee is deducted and the remainder is released to your Ariya balance. You can then request a payout to your registered bank account. With the Ariya Guarantee enabled, funds auto-release 48 hours after the event date."
            },
        ]
    },
    {
        category: "Events & Planning",
        questions: [
            {
                q: "How many events can I create?",
                a: "Unlimited. There is no cap on the number of events any planner can create, regardless of whether they've purchased any unlocks."
            },
            {
                q: "Can I create a website for my event?",
                a: "Yes. Every event gets a free public website hosted at your-slug.ariyahq.com with Ariya branding. For a custom domain (e.g. yourevent.com) and no Ariya branding, those are available as paid unlocks."
            },
            {
                q: "Can I send SMS messages to my guests?",
                a: "Yes. Planners can buy SMS credit bundles — 50 SMS for ₦2,500, 200 for ₦8,000, or 500 for ₦17,500 — and use them to send RSVP reminders, day-of updates, and thank-you messages directly to guests' phones. Credits are per-event and never expire."
            },
            {
                q: "How does the gift registry work?",
                a: "Create a registry, add items with target amounts, and share the link with guests. Guests contribute directly via Paystack. Funds accumulate in your balance and you withdraw whenever you're ready. A 10% fee is deducted at withdrawal — nothing is charged to guests."
            },
            {
                q: "Is my data secure?",
                a: "Yes. All data is encrypted in transit via HTTPS. We use PostgreSQL (Neon) for storage with automated backups. Payment processing is handled entirely by Paystack — Ariya never stores card details."
            },
        ]
    }
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<string | null>(null);
    const [search, setSearch] = useState('');

    const toggleFAQ = (id: string) => setOpenIndex(openIndex === id ? null : id);

    const filtered = search.trim().length > 1
        ? faqs.map(section => ({
            ...section,
            questions: section.questions.filter(
                q => q.q.toLowerCase().includes(search.toLowerCase()) || q.a.toLowerCase().includes(search.toLowerCase())
            )
        })).filter(s => s.questions.length > 0)
        : faqs;

    return (
        <main className="pt-24 bg-white dark:bg-gray-950 min-h-screen">
            {/* Hero */}
            <section className="relative py-24 px-8 bg-gray-50 dark:bg-gray-900 mb-16">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary-600 mb-4 block">Support</span>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-gray-900 dark:text-white">
                        Common Questions,<br /> <span className="italic font-serif text-primary-600">Answered Clearly</span>.
                    </h1>
                    <div className="relative max-w-2xl mx-auto">
                        <input
                            type="text"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            placeholder="Search questions..."
                            className="w-full pl-14 pr-6 py-5 rounded-full border-none shadow-xl shadow-gray-200/50 dark:shadow-none bg-white dark:bg-gray-800 text-base text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-primary-500 outline-none"
                        />
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-primary-600 w-5 h-5" />
                    </div>
                </div>
            </section>

            {/* FAQ Content */}
            <section className="max-w-4xl mx-auto px-8 mb-32">
                {filtered.length === 0 && (
                    <p className="text-center text-gray-400 py-16">
                        No questions match "{search}".{' '}
                        <a href="mailto:ariyainfoteam@gmail.com" className="text-primary-600 font-bold underline">Email us</a> and we'll help.
                    </p>
                )}
                {filtered.map((section, sIdx) => (
                    <div key={sIdx} className="mb-16">
                        <h2 className="text-[11px] font-black uppercase tracking-widest mb-6 pb-4 border-b border-gray-100 dark:border-gray-800 text-gray-400">{section.category}</h2>
                        <div className="space-y-2">
                            {section.questions.map((item, qIdx) => {
                                const id = `${sIdx}-${qIdx}`;
                                const isOpen = openIndex === id;
                                return (
                                    <div key={qIdx}>
                                        <button
                                            onClick={() => toggleFAQ(id)}
                                            className={`w-full text-left p-6 md:p-7 rounded-[1.5rem] transition-all duration-200 flex justify-between items-start gap-4 ${isOpen ? 'bg-gray-50 dark:bg-gray-900' : 'hover:bg-gray-50 dark:hover:bg-gray-900/50'}`}
                                        >
                                            <span className={`text-base md:text-lg font-bold tracking-tight ${isOpen ? 'text-primary-600' : 'text-gray-900 dark:text-white'}`}>
                                                {item.q}
                                            </span>
                                            <span className={`p-2 rounded-full flex-shrink-0 transition-colors ${isOpen ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-600' : 'bg-gray-100 dark:bg-gray-800 text-gray-400'}`}>
                                                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                            </span>
                                        </button>
                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.22, ease: "easeInOut" }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="px-7 md:px-8 pb-7 text-gray-500 dark:text-gray-400 leading-relaxed">
                                                        {item.a}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </section>

            {/* Support CTA */}
            <section className="py-24 bg-gray-900 dark:bg-black text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-900/20 to-transparent" />
                <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">Still have questions?</h2>
                    <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
                        Can't find what you're looking for? Reach out — we typically respond within a few hours.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact">
                            <button className="bg-primary-600 text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-primary-700 transition-colors flex items-center justify-center gap-2">
                                <MessageCircle className="w-4 h-4" />
                                Contact Us
                            </button>
                        </Link>
                        <a href="mailto:ariyainfoteam@gmail.com" className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white hover:text-gray-900 transition-colors flex items-center justify-center gap-2">
                            <Mail className="w-4 h-4" />
                            ariyainfoteam@gmail.com
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
