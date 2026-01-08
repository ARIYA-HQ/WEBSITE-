import React from 'react';
import {
    LayoutDashboard,
    Kanban,
    Users,
    ShieldCheck,
    Zap,
    Award,
    MessageCircle,
    CheckCircle2,
    ArrowRight,
    Search,
    Clock,
    DollarSign,
    Target
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function PlannersPage() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <main className="pt-24 bg-white dark:bg-gray-950 min-h-screen selection:bg-primary-600 selection:text-white">
            {/* Hero Section */}
            <section className="relative py-32 px-8 overflow-hidden bg-gray-950 text-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-900/20 via-transparent to-transparent opacity-50" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />

                <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-600/10 border border-primary-600/20 mb-8 backdrop-blur-md">
                            <Target className="w-4 h-4 text-primary-400" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-primary-400">Professional Grade</span>
                        </span>
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.85] italic">
                            The OS for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-orange-300">Pro Events.</span>
                        </h1>
                        <p className="text-xl text-gray-400 font-medium max-w-xl mb-12 leading-relaxed">
                            AriyaHQ is the unified operating system built for high-performance
                            planners. Orchestrate thousand-event portfolios with the precision
                            of a conductor.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-primary-600 text-white font-black uppercase tracking-widest px-10 py-5 rounded-full text-xs hover:bg-primary-700 transition-all shadow-xl shadow-primary-600/20">
                                Get Pro Access
                            </button>
                            <button className="text-white font-black uppercase tracking-widest px-10 py-5 rounded-full text-xs border border-white/10 hover:bg-white/5 transition-all">
                                Request a Demo
                            </button>
                        </div>
                    </motion.div>

                    <div className="relative group lg:block">
                        <div className="absolute inset-0 bg-primary-600/10 rounded-[40px] rotate-3 group-hover:rotate-0 transition-transform duration-500" />
                        <div className="bg-gray-900 border border-white/5 rounded-[40px] shadow-2xl p-8 relative z-10 backdrop-blur-3xl">
                            {/* Terminal-like dashboard mockup */}
                            <div className="flex items-center gap-2 mb-8">
                                <div className="w-3 h-3 rounded-full bg-red-500/30" />
                                <div className="w-3 h-3 rounded-full bg-amber-500/30" />
                                <div className="w-3 h-3 rounded-full bg-emerald-500/30" />
                                <div className="ml-4 px-3 py-1 bg-white/5 rounded-md text-[10px] text-gray-500 font-mono tracking-tighter uppercase font-bold">ariya-pro-panel v2.0</div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex justify-between items-end border-b border-white/5 pb-6">
                                    <div>
                                        <div className="text-[10px] font-black text-primary-400 uppercase tracking-widest mb-1">Portfolio Velocity</div>
                                        <div className="text-4xl font-black text-white tracking-widest">+124%</div>
                                    </div>
                                    <div className="flex gap-1 h-12 items-end">
                                        {[4, 7, 5, 8, 5, 9, 6].map((h, i) => (
                                            <div key={i} className={`w-2 bg-primary-600 rounded-sm opacity-${20 + i * 10}`} style={{ height: `${h * 10}%` }} />
                                        ))}
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                        <div className="text-[8px] font-black text-gray-500 uppercase tracking-widest mb-2 italic">Active Timelines</div>
                                        <div className="text-xl font-bold text-white">42<span className="text-[10px] text-primary-400 ml-1">Live</span></div>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                        <div className="text-[8px] font-black text-gray-500 uppercase tracking-widest mb-2 italic">Team Health</div>
                                        <div className="text-xl font-bold text-emerald-400 underline decoration-emerald-400/30">Stable</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Pillars */}
            <section className="py-32 bg-white dark:bg-gray-950">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-24 max-w-3xl mx-auto">
                        <span className="section-label mb-4 block">Unified Workflow</span>
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-[0.9]">Everything you need, <br /> in one high-performance interface.</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                        <FeatureColumn
                            icon={Kanban}
                            title="Command Center"
                            desc="Real-time multi-event tracking with automated task dependency logic."
                        />
                        <FeatureColumn
                            icon={Users}
                            title="Client Portals"
                            desc="Premium, white-labeled interfaces for your clients to track progress & payments."
                        />
                        <FeatureColumn
                            icon={DollarSign}
                            title="Budget Control"
                            desc="Atomic tracking for every expense. Zero-margin for error in your financial reporting."
                        />
                    </div>

                    {/* Detailed Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                        <FeatureItem title="Automated Timelines" desc="Templates that intelligently adapt based on your event date." />
                        <FeatureItem title="Collaborative Workspace" desc="Invite team members with granular permission controls for every event." />
                        <FeatureItem title="Vendor Sync" desc="Centralized communication hub for all vendors across your entire portfolio." />
                        <FeatureItem title="Proposal Builder" desc="Create stunning, conversion-optimized proposals in seconds." />
                        <FeatureItem title="Digital Contracts" desc="Legally binding agreements with automated signing workflows." />
                        <FeatureItem title="Inventory Engine" desc="Track assets, rentals, and equipment across multiple venues." />
                    </div>
                </div>
            </section>

            {/* Agency Benefits */}
            <section className="py-32 bg-gray-50 dark:bg-gray-900 overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div {...fadeIn}>
                            <span className="section-label mb-4 block">Agency Scale</span>
                            <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-tight font-serif italic">Your Agency. <br /> Augmented.</h2>
                            <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 leading-relaxed font-medium">
                                AriyaHQ allows managing multi-planner teams with absolute ease.
                                Standardize your planning process and ensure every client experience
                                reflects your highest brand standard.
                            </p>
                            <div className="space-y-6">
                                <BenefitPoint title="Centralized Asset Management" desc="Store all brand assets, photos, and documents in one hub." />
                                <BenefitPoint title="Custom Branding" desc="Tailor every client touchpoint to matches your agency's visual identity." />
                                <BenefitPoint title="Revenue Analytics" desc="Track billables, margins, and team performance across every quarter." />
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-6 p-4 md:p-12 bg-white dark:bg-gray-800 rounded-[50px] shadow-2xl border border-gray-100 dark:border-gray-700">
                            <div className="aspect-square bg-primary-600 rounded-3xl flex items-center justify-center p-8 text-center rotate-[-4deg]">
                                <div className="text-white">
                                    <div className="text-4xl font-black mb-2 leading-none uppercase tracking-widest">40%</div>
                                    <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">Faster Planning</div>
                                </div>
                            </div>
                            <div className="aspect-square bg-gray-100 dark:bg-gray-900 rounded-3xl flex items-center justify-center p-8 text-center rotate-[4deg] mt-12">
                                <div className="text-gray-900 dark:text-white">
                                    <div className="text-4xl font-black mb-2 leading-none uppercase tracking-widest">0</div>
                                    <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">Missed Deadlines</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Preview */}
            <section className="py-32 px-8 max-w-4xl mx-auto">
                <div className="text-center mb-24">
                    <span className="section-label mb-4 block underline underline-offset-8">Information</span>
                    <h2 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight uppercase">Planners FAQ</h2>
                </div>
                <div className="space-y-4">
                    <FaqItem question="Can I white-label the dashboard for my clients?" answer="Absolutely. Agency-tier accounts can fully customize the client portals with their own logo, colors, and a custom domain." />
                    <FaqItem question="Is there an offline mode for venue visits?" answer="Yes, our mobile-optimized workspace caches your latest timelines so you can work even in remote locations." />
                    <FaqItem question="How many team members can I add?" answer="Our Pro and Agency plans accommodate teams from 3 up to unlimited seats, depending on your tier." />
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 px-8 text-center bg-gray-950 border-t border-white/5">
                <div className="max-w-4xl mx-auto">
                    <Award className="w-12 h-12 text-primary-600 mx-auto mb-10 opacity-50" />
                    <h2 className="text-4xl md:text-7xl font-black text-white italic tracking-tighter mb-12 leading-[0.85]">
                        Build a Legacy, <br className="md:hidden" /> not just an event.
                    </h2>
                    <button className="bg-primary-600 text-white font-black uppercase tracking-widest px-12 py-5 rounded-full text-xs hover:bg-primary-700 transition-all shadow-xl shadow-primary-600/20">
                        Join the Pro Ranks
                    </button>
                </div>
            </section>
        </main>
    );
}

// Sub-components
const FeatureColumn = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
    <div className="p-10 premium-card h-full flex flex-col group hover:scale-[1.02] transition-all duration-500">
        <div className="w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-2xl flex items-center justify-center text-gray-400 group-hover:bg-primary-600 group-hover:text-white transition-all transform group-hover:rotate-12 mb-10">
            <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 tracking-tighter uppercase leading-none">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">{desc}</p>
    </div>
);

const FeatureItem = ({ title, desc }: { title: string, desc: string }) => (
    <div className="border-l-2 border-primary-600/20 hover:border-primary-600 pl-6 transition-colors group">
        <h4 className="text-sm font-black text-gray-900 dark:text-white mb-2 uppercase tracking-widest group-hover:text-primary-600 transition-colors">{title}</h4>
        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-relaxed">{desc}</p>
    </div>
);

const BenefitPoint = ({ title, desc }: { title: string, desc: string }) => (
    <div className="flex items-start gap-4">
        <div className="mt-1 w-5 h-5 rounded-full bg-primary-600/10 flex items-center justify-center text-primary-600 flex-shrink-0">
            <CheckCircle2 className="w-3 h-3" />
        </div>
        <div>
            <div className="text-sm font-black text-gray-900 dark:text-white mb-1 uppercase tracking-tight">{title}</div>
            <p className="text-xs text-gray-500 font-medium leading-relaxed">{desc}</p>
        </div>
    </div>
);

const FaqItem = ({ question, answer }: { question: string, answer: string }) => (
    <div className="p-8 bg-gray-50/50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 rounded-[30px] hover:border-primary-600 transition-colors">
        <h4 className="text-lg font-black text-gray-900 dark:text-white mb-2">{question}</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">{answer}</p>
    </div>
);

