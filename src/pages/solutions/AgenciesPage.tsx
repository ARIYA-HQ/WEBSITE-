import React from 'react';
import {
    Globe,
    Shield,
    Zap,
    BarChart3,
    Users2,
    ArrowRight,
    CheckCircle2,
    Layout,
    Settings,
    Lock,
    Search,
    MessageSquare,
    Target
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function AgenciesPage() {
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
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px]" />

                <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-600/10 border border-primary-600/20 mb-8 backdrop-blur-md">
                            <Target className="w-4 h-4 text-primary-400" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-primary-400">Enterprise Solutions</span>
                        </span>
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 text-white leading-[0.85]">
                            Scale Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-orange-300">Empire.</span>
                        </h1>
                        <p className="text-xl text-gray-400 font-medium mb-12 leading-relaxed">
                            The unified platform for high-volume agencies and venues. Manage
                            multiple properties, complex staffing, and portfolio-wide analytics
                            with absolute precision.
                        </p>
                        <div className="flex flex-col sm:row gap-4">
                            <button className="bg-primary-600 text-white font-black uppercase tracking-widest px-10 py-5 rounded-full text-xs hover:bg-primary-700 transition-all shadow-xl shadow-primary-600/20">
                                Request Agency Access
                            </button>
                            <button className="text-white font-black uppercase tracking-widest px-10 py-5 rounded-full text-xs border border-white/10 hover:bg-white/5 transition-all">
                                Enterprise Whitepaper
                            </button>
                        </div>
                    </motion.div>

                    <div className="relative group">
                        <div className="absolute inset-0 bg-primary-600/20 blur-[120px] rounded-full" />
                        <div className="grid grid-cols-2 gap-4 relative z-10">
                            <div className="space-y-4 pt-12">
                                <AgencyStatCard icon={BarChart3} title="Global Revenue" val="₦142M" desc="Across 12 venues" />
                                <AgencyStatCard icon={Users2} title="Team Velocity" val="+24%" desc="Q4 staffing efficiency" />
                            </div>
                            <div className="space-y-4">
                                <AgencyStatCard icon={Shield} title="Compliance" val="SOC2" desc="Enterprise grade" />
                                <AgencyStatCard icon={Zap} title="Automation" val="82k" desc="Workflows triggered" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Capabilities */}
            <section className="py-32 px-8 max-w-7xl mx-auto">
                <div className="flex flex-col md:row justify-between items-end mb-24 gap-8">
                    <div className="max-w-2xl">
                        <span className="section-label mb-4 block">Platform Core</span>
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-none uppercase">Orchestrate <br /> with Authority.</h2>
                    </div>
                    <div className="flex gap-4">
                        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800">
                            <div className="text-2xl font-black text-primary-600">Infinite</div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-gray-500">Seats & Venues</div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    <FeatureBlock
                        icon={Layout}
                        title="White-Label Portals"
                        desc="Your brand, your domain. Deliver a 100% white-labeled experience to your high-net-worth clients."
                    />
                    <FeatureBlock
                        icon={Settings}
                        title="Permission Logic"
                        desc="Granular RBAC controls. Define exactly what staff, vendors, and clients can see and touch."
                    />
                    <FeatureBlock
                        icon={Globe}
                        title="Multi-Venue Sync"
                        desc="Manage inventories and staff shifts across dozens of locations from a single dashboard."
                    />
                </div>
            </section>

            {/* Deep Dive: Branding */}
            <section className="py-32 bg-gray-50 dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800 overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div {...fadeIn}>
                            <span className="section-label mb-4 block underline">Branding First</span>
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-tight italic uppercase">Your Brand, <br /> absolutely everywhere.</h2>
                            <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 leading-relaxed font-medium">
                                Agencies using AriyaHQ don't just use a tool; they build an ecosystem.
                                We disappear into the background so your reputation takes center stage.
                            </p>
                            <div className="space-y-4">
                                <AgencyBenefit icon={Globe} text="Custom Root Domains (e.g., portal.youragency.com)" />
                                <AgencyBenefit icon={Layout} text="Custom Logo, Favicons, and Brand Color Palettes" />
                                <AgencyBenefit icon={MessageSquare} text="Whitelabeled Emails and SMS Notifications" />
                            </div>
                        </motion.div>

                        <div className="relative">
                            <div className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-[50px] shadow-2xl p-12 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-2 bg-primary-600" />
                                <div className="flex justify-between items-center mb-12">
                                    <div className="w-32 h-6 bg-gray-100 dark:bg-gray-800 rounded animate-pulse" />
                                    <div className="flex gap-2">
                                        <div className="w-8 h-8 rounded-full bg-gray-50 dark:bg-gray-900" />
                                        <div className="w-8 h-8 rounded-full bg-gray-50 dark:bg-gray-900" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="h-4 bg-gray-50 dark:bg-gray-100/5 rounded w-3/4" />
                                    <div className="h-4 bg-gray-50 dark:bg-gray-100/5 rounded w-1/2" />
                                    <div className="h-32 bg-primary-50 dark:bg-primary-900/10 rounded-3xl mt-8" />
                                </div>
                                <div className="absolute inset-0 bg-gray-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                                    <span className="bg-white text-black font-black uppercase tracking-widest px-8 py-3 rounded-full text-[10px]">Preview Your Portal</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Analytics Section */}
            <section className="py-32 px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="p-8 bg-gray-900 rounded-[40px] border border-white/5 relative overflow-hidden">
                            <BarChart3 className="absolute -bottom-8 -right-8 w-64 h-64 text-primary-600/10" />
                            <div className="relative z-10 flex flex-col justify-between h-full">
                                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-400 mb-8">Performance Engine</div>
                                <div className="space-y-6">
                                    <div className="flex justify-between items-end border-b border-white/5 pb-4">
                                        <div className="text-sm font-bold text-gray-400">Monthly Bookings</div>
                                        <div className="text-2xl font-black text-white">412</div>
                                    </div>
                                    <div className="flex justify-between items-end border-b border-white/5 pb-4">
                                        <div className="text-sm font-bold text-gray-400">Staff Utilization</div>
                                        <div className="text-2xl font-black text-emerald-400">92%</div>
                                    </div>
                                    <div className="flex justify-between items-end border-b border-white/5 pb-4">
                                        <div className="text-sm font-bold text-gray-400">Net Promoter Score</div>
                                        <div className="text-2xl font-black text-primary-400">4.9/5</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <motion.div {...fadeIn} className="order-1 lg:order-2">
                        <span className="section-label mb-4 block">Big Data</span>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-tight uppercase">Decision Intelligence.</h2>
                        <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 leading-relaxed font-medium">
                            Don't guess. Know. AriyaHQ aggregates data from every event, staff shift,
                            and vendor payment to give you a bird's-eye view of your business health.
                        </p>
                        <button className="flex items-center gap-2 text-primary-600 font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all">
                            Explore Analytics Depth <ArrowRight className="w-4 h-4" />
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Agency FAQ */}
            <section className="py-32 px-8 max-w-4xl mx-auto">
                <div className="text-center mb-24">
                    <span className="section-label mb-4 block underline underline-offset-8">Information</span>
                    <h2 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight uppercase">Agency Operations FAQ</h2>
                </div>
                <div className="space-y-4">
                    <AgencyFaqItem
                        question="How do we handle multi-venue inventory?"
                        answer="AriyaHQ allows you to create 'Central Hubs' where inventory is tracked globally, then 'checked out' to specific venues for individual events, preventing double-bookings."
                    />
                    <AgencyFaqItem
                        question="Is there a limit on team members?"
                        answer="The Agency tier includes unlimited staff seats. You only pay based on your portfolio volume, ensuring your team can grow without cost-per-seat anxiety."
                    />
                    <AgencyFaqItem
                        question="Can we integrate our existing CRM?"
                        answer="Yes. Our Enterprise API allows seamless integration with Salesforce, HubSpot, and custom accounting software."
                    />
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 px-8 text-center bg-gray-950 border-t border-white/5 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[40vh] bg-primary-600/10 blur-[120px] rounded-full" />
                <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-12 leading-[0.85] uppercase italic">
                        The World Is <br /> Your Stage.
                    </h2>
                    <button className="bg-primary-600 text-white font-black uppercase tracking-widest px-12 py-5 rounded-full text-xs hover:bg-primary-700 transition-all shadow-xl shadow-primary-600/20">
                        Become an Ariya Agency
                    </button>
                </div>
            </section>
        </main>
    );
}

// Sub-components
const AgencyStatCard = ({ icon: Icon, title, val, desc }: { icon: any, title: string, val: string, desc: string }) => (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[30px] hover:border-primary-600/50 transition-all group group-hover:bg-white/10">
        <div className="w-10 h-10 bg-primary-600/20 rounded-xl flex items-center justify-center text-primary-400 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all">
            <Icon className="w-5 h-5" />
        </div>
        <div className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">{title}</div>
        <div className="text-3xl font-black text-white tracking-tighter mb-2">{val}</div>
        <div className="text-[10px] text-gray-400 font-medium">{desc}</div>
    </div>
);

const FeatureBlock = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
    <div className="p-10 premium-card h-full flex flex-col group hover:scale-[1.02] transition-all duration-500">
        <div className="w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-2xl flex items-center justify-center text-gray-400 group-hover:bg-primary-600 group-hover:text-white transition-all transform group-hover:rotate-12 mb-10">
            <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 tracking-tighter uppercase leading-none">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">{desc}</p>
    </div>
);

const AgencyBenefit = ({ icon: Icon, text }: { icon: any, text: string }) => (
    <div className="flex items-center gap-4 group">
        <div className="w-5 h-5 rounded-full bg-primary-600/10 flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all">
            <Icon className="w-3 h-3" />
        </div>
        <span className="text-sm font-bold text-gray-600 dark:text-gray-400 tracking-tight">{text}</span>
    </div>
);

const AgencyFaqItem = ({ question, answer }: { question: string, answer: string }) => (
    <div className="p-8 bg-gray-50/50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 rounded-[30px] hover:border-primary-600 transition-colors">
        <h4 className="text-lg font-black text-gray-900 dark:text-white mb-2">{question}</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">{answer}</p>
    </div>
);
