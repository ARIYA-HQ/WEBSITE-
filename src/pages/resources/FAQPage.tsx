import React, { useState } from 'react';
import { Plus, Minus, Search, MessageCircle, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        category: "General",
        questions: [
            {
                q: "What makes Ariya different from other planning platforms?",
                a: "Ariya is the only platform that uses generative AI to handle the 'heavy lifting' of planning. While other tools just digitize your spreadsheets, we actively help you create budgets, find vendors, and manage timelines using predictive intelligence."
            },
            {
                q: "Is there a mobile app available?",
                a: "Yes! Our mobile app is available for iOS and Android. It offers full functionality for planners on the go, including offline access for venue walkthroughs."
            },
            {
                q: "Can I collaborate with my team?",
                a: "Absolutely. Ariya is built for collaboration. You can invite unlimited team members, clients, and vendors to specific events with granular permission controls."
            }
        ]
    },
    {
        category: "Pricing & Billing",
        questions: [
            {
                q: "Do you offer a free trial?",
                a: "We offer a 14-day full-access free trial for all new accounts. No credit card is required to start exploring the platform."
            },
            {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards (Visa, Mastercard, Amex) as well as ACH transfers for Enterprise accounts. For high-volume agencies, we can also set up quarterly invoicing."
            },
            {
                q: "Can I change my plan later?",
                a: "Yes, you can upgrade or downgrade your plan at any time. Prorated credits will be applied to your account automatically."
            }
        ]
    },
    {
        category: "Technical",
        questions: [
            {
                q: "Is my data secure?",
                a: "Security is our top priority. We use bank-grade 256-bit SSL encryption and are SOC2 Type II compliant. Your client data is safe with us."
            },
            {
                q: "Do you integrate with other tools?",
                a: "We offer native integrations with Google Calendar, QuickBooks, Stripe, and Zoom. For everything else, our Zapier integration connects you to over 3,000 apps."
            }
        ]
    }
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<string | null>(null);

    const toggleFAQ = (id: string) => {
        setOpenIndex(openIndex === id ? null : id);
    };

    return (
        <main className="pt-24 bg-white dark:bg-gray-950 min-h-screen">
            {/* Hero */}
            <section className="relative py-24 px-8 bg-gray-50 dark:bg-gray-900 mb-16">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary-600 mb-4 block animate-in fade-in slide-in-from-bottom-4 duration-700">Support Center</span>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-gray-900 dark:text-white animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                        Common Questions, <br /> <span className="italic font-serif text-primary-600">Clarity Delivered</span>.
                    </h1>
                    <div className="relative max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                        <input
                            type="text"
                            placeholder="Search for answers..."
                            className="w-full pl-14 pr-6 py-6 rounded-full border-none shadow-xl shadow-gray-200/50 dark:shadow-none bg-white dark:bg-gray-800 text-lg text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-primary-500 transition-all outline-none"
                        />
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-primary-600 w-6 h-6" />
                    </div>
                </div>
            </section>

            {/* FAQ Content */}
            <section className="max-w-4xl mx-auto px-8 mb-32">
                {faqs.map((section, sIdx) => (
                    <div key={sIdx} className="mb-16">
                        <h2 className="text-2xl font-black tracking-tight mb-8 pb-4 border-b border-gray-100 dark:border-gray-800 text-gray-900 dark:text-white">{section.category}</h2>
                        <div className="space-y-4">
                            {section.questions.map((item, qIdx) => {
                                const id = `${sIdx}-${qIdx}`;
                                const isOpen = openIndex === id;

                                return (
                                    <div key={qIdx} className="group">
                                        <button
                                            onClick={() => toggleFAQ(id)}
                                            className={`w-full text-left p-6 md:p-8 rounded-[2rem] transition-all duration-300 flex justify-between items-start gap-4 ${isOpen ? 'bg-gray-50 dark:bg-gray-900 shadow-sm' : 'hover:bg-gray-50 dark:hover:bg-gray-900'}`}
                                        >
                                            <span className={`text-lg md:text-xl font-bold tracking-tight transition-colors ${isOpen ? 'text-primary-600' : 'text-gray-900 dark:text-white'}`}>
                                                {item.q}
                                            </span>
                                            <span className={`p-2 rounded-full transition-colors flex-shrink-0 ${isOpen ? 'bg-primary-100 text-primary-600' : 'bg-gray-100 dark:bg-gray-800 text-gray-400 group-hover:bg-white dark:group-hover:bg-gray-700 group-hover:shadow-md'}`}>
                                                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                            </span>
                                        </button>
                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="px-8 md:px-10 pb-8 text-gray-500 dark:text-gray-400 leading-relaxed text-lg">
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
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8">Still have questions?</h2>
                    <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">
                        Can't find the answer you're looking for? Our friendly team is here to help you get back to planning.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-primary-600 text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-primary-700 transition-colors flex items-center justify-center gap-2">
                            <MessageCircle className="w-4 h-4" />
                            Chat with Support
                        </button>
                        <button className="bg-white/10 border border-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white hover:text-gray-900 transition-colors flex items-center justify-center gap-2">
                            <Mail className="w-4 h-4" />
                            Email Us
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
