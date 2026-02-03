import React from 'react';
import { Search, BookOpen, Settings, Users, DollarSign, MessageCircle, ArrowRight, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
    {
        icon: Zap,
        title: "Getting Started",
        desc: "Everything you need to know to get up and running.",
        articles: ["Quick Start Guide", "Importing your first event", "Inviting team members"]
    },
    {
        icon: Settings,
        title: "Account & Billing",
        desc: "Manage your subscription, profile, and settings.",
        articles: ["Updating billing info", "Changing your plan", "Two-factor authentication"]
    },
    {
        icon: Users,
        title: "Collaborating",
        desc: "Working with clients, vendors, and your internal team.",
        articles: ["Client portal permissions", "Vendor onboarding", "Team roles explained"]
    },
    {
        icon: DollarSign,
        title: "Budget & Finance",
        desc: "Tracking expenses, payments, and financial reports.",
        articles: ["Setting up budget categories", "Tracking payments", "Exporting reports"]
    },
    {
        icon: Shield,
        title: "Privacy & Security",
        desc: "How we protect your data and compliance information.",
        articles: ["Data export", "GDPR compliance", "Privacy policy"]
    },
    {
        icon: BookOpen,
        title: "Advanced Features",
        desc: "Deep dives into automation and AI tools.",
        articles: ["Using the AI assistant", "Automating emails", "Custom templates"]
    }
];

// Fix for Shield icon capitalization in categories array above if needed, but lucid-react exports 'Shield'
// Re-mapping for safety in the render loop

export default function HelpCenterPage() {
    return (
        <main className="pt-24 bg-white dark:bg-gray-950 min-h-screen">
            {/* Hero Search */}
            <section className="bg-gray-900 dark:bg-black text-white py-24 px-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-900/40 to-transparent" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary-500 mb-4 block animate-in fade-in slide-in-from-bottom-4 duration-700">Knowledge Base</span>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                        How can we help you?
                    </h1>
                    <div className="relative max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                        <input
                            type="text"
                            placeholder="Search articles, guides, and tutorials..."
                            className="w-full pl-14 pr-6 py-5 rounded-xl border-none shadow-2xl shadow-black/50 text-gray-900 dark:text-white bg-white dark:bg-gray-800 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:ring-2 focus:ring-primary-500 transition-all outline-none text-lg"
                        />
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="max-w-7xl mx-auto px-8 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((cat, idx) => (
                        <div key={idx} className="group p-8 rounded-[2rem] border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-none hover:border-gray-200 dark:hover:border-primary-500/50 transition-all duration-300">
                            <div className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-900 dark:text-white mb-6 group-hover:scale-110 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/30 group-hover:text-primary-600 transition-all">
                                <cat.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{cat.title}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 font-medium leading-relaxed">{cat.desc}</p>
                            <ul className="space-y-3">
                                {cat.articles.map((article, aIdx) => (
                                    <li key={aIdx}>
                                        <a href="#" className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary-600 transition-colors font-medium group/link">
                                            <span className="w-1.5 h-1.5 rounded-full bg-gray-200 dark:bg-gray-700 group-hover/link:bg-primary-600 transition-colors" />
                                            {article}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Popular Articles */}
            <section className="bg-gray-50 dark:bg-gray-800/10 py-24 px-8">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-black tracking-tight mb-12 text-center text-gray-900 dark:text-white">Popular Articles</h2>
                    <div className="space-y-4">
                        {[
                            "How to invite a client to your workspace",
                            "Understanding the budget analysis tool",
                            "Connecting your Google Calendar",
                            "Managing vendor contracts and payments",
                            "Mobile app troubleshooting guide"
                        ].map((article, idx) => (
                            <a key={idx} href="#" className="flex items-center justify-between p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-primary-200 dark:hover:border-primary-500 hover:shadow-md transition-all group">
                                <span className="font-bold text-gray-700 dark:text-gray-200 group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors">{article}</span>
                                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Support */}
            <section className="py-24 px-8 text-center">
                <div className="max-w-2xl mx-auto">
                    <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-8">
                        <MessageCircle className="w-8 h-8" />
                    </div>
                    <h2 className="text-4xl font-black tracking-tight mb-6 text-gray-900 dark:text-white">Still need answers?</h2>
                    <p className="text-gray-500 dark:text-gray-400 text-lg mb-10">
                        Our support team is available Mon-Fri, 9am-6pm EST. We usually respond within 2 hours.
                    </p>
                    <button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-black dark:hover:bg-primary-50 transition-colors shadow-lg">
                        Contact Support
                    </button>
                </div>
            </section>
        </main>
    );
}

