import React from 'react';
import {
    Globe,
    Smartphone,
    Monitor,
    Gift,
    Layout,
    ArrowRight,
    Palette,
    Zap,
    Heart,
    ShieldCheck,
    CheckCircle2
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function WebsitesPage() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <main className="pt-24 bg-white dark:bg-gray-950 min-h-screen selection:bg-indigo-600 selection:text-white">
            {/* Hero Section */}
            <section className="relative py-32 px-8 overflow-hidden bg-indigo-50 dark:bg-indigo-900/10">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-indigo-200/50 via-transparent to-transparent dark:from-indigo-900/20 opacity-50 pointer-events-none" />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="section-label mb-4 block text-indigo-600 dark:text-indigo-400">Design Studio</span>
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-gray-900 dark:text-white mb-8 leading-[0.85]">
                            The Stage for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-primary-600">Your Story.</span>
                        </h1>
                        <p className="text-xl text-gray-500 dark:text-gray-400 font-medium max-w-xl mb-12 leading-relaxed">
                            AriyaHQ gives you the tools to build a digital invitation so beautiful,
                            it feels as personal as a handwritten note. Integrated RSVPs and
                            registries included.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-indigo-600 text-white font-black uppercase tracking-widest px-10 py-5 rounded-full text-xs hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/20">
                                Start Your Website
                            </button>
                            <button className="text-gray-900 dark:text-white font-black uppercase tracking-widest px-10 py-5 rounded-full text-xs border border-gray-200 dark:border-gray-800 hover:bg-white dark:hover:bg-gray-900 transition-all">
                                View Templates
                            </button>
                        </div>
                    </motion.div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-indigo-600/5 rounded-[50px] rotate-3" />
                        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-[50px] shadow-2xl p-4 md:p-12 relative z-10 overflow-hidden">
                            {/* Website Mockup */}
                            <div className="aspect-video bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden relative">
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500/10 to-transparent" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-8">
                                    <h4 className="font-serif text-3xl md:text-5xl text-gray-900 dark:text-white mb-4 italic">Bolu & Adaora</h4>
                                    <div className="text-[10px] uppercase font-black tracking-[0.3em] text-indigo-600">May 24, 2025 • Lagos</div>
                                    <div className="mt-8 flex justify-center gap-4">
                                        <div className="px-6 py-2 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full">RSVP NOW</div>
                                        <div className="px-6 py-2 border border-gray-900 text-gray-900 text-[10px] font-black uppercase tracking-widest rounded-full dark:border-white dark:text-white">REGISTRY</div>
                                    </div>
                                </div>
                            </div>
                            {/* Floating Elements */}
                            <div className="absolute bottom-8 right-8 bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-4 border border-gray-100 dark:border-gray-700 max-w-[150px] hidden md:block group hover:scale-105 transition-transform">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center text-emerald-600">
                                        <CheckCircle2 className="w-4 h-4" />
                                    </div>
                                    <span className="text-[10px] font-bold text-gray-900 dark:text-white">New RSVP</span>
                                </div>
                                <div className="text-[8px] text-gray-500">Omotola Williams + 2</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Features */}
            <section className="py-32 px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
                    <DesignPillar
                        icon={Palette}
                        title="Artisan Templates"
                        desc="Choose from 50+ award-winning themes designed by world-class stationery artists."
                    />
                    <DesignPillar
                        icon={Smartphone}
                        title="Mobile Perfect"
                        desc="Your site will look like a bespoke app on every guest's phone, from day one."
                    />
                    <DesignPillar
                        icon={Gift}
                        title="Universal Registry"
                        desc="Link physical gifts, cash funds, or honeymoon dreams in a single, elegant list."
                    />
                </div>

                {/* Registry Sync Deep Dive */}
                <div className="bg-gray-950 rounded-[50px] p-12 md:p-24 overflow-hidden relative">
                    <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-tl from-indigo-900/30 to-transparent pointer-events-none" />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div {...fadeIn}>
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#D0771E] mb-4 block">Integrated Registry</span>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight leading-tight">Gifting made <br /> effortless & elegant.</h2>
                            <p className="text-gray-400 mb-10 leading-relaxed font-medium">
                                No more disconnected Excel sheets. Your registry is hard-wired into your
                                guest list. When a guest buys a gift, your guest list updates in real-time
                                for your thank-you notes.
                            </p>
                            <div className="space-y-4">
                                <SyncItem text="Direct ₦ Cash Fund integration for local accounts." />
                                <SyncItem text="External store linking (Amazon, Konga, etc.)" />
                                <SyncItem text="Secret 'Surprise' updates for planners only." />
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-8 bg-white/5 rounded-3xl border border-white/10 flex flex-col justify-center items-center text-center">
                                <Gift className="w-10 h-10 text-indigo-400 mb-4" />
                                <div className="text-2xl font-black text-white tracking-widest">₦5.4M</div>
                                <div className="text-[10px] font-bold text-gray-500 uppercase mt-1">Registry Total</div>
                            </div>
                            <div className="p-8 bg-indigo-600 rounded-3xl flex flex-col justify-center items-center text-center">
                                <Heart className="w-10 h-10 text-white mb-4" />
                                <div className="text-2xl font-black text-white tracking-widest">124</div>
                                <div className="text-[10px] font-bold text-indigo-200 uppercase mt-1">Gifts Received</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Template Gallery Preview */}
            <section className="py-32 bg-gray-50 dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div>
                            <span className="section-label mb-4 block">Gallery</span>
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">The Modern Collection</h2>
                        </div>
                        <button className="flex items-center gap-2 text-indigo-600 font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all">
                            Browse All Themes <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ThemeCard title="Midnight Minimal" type="Contemporary" color="bg-gray-900" />
                        <ThemeCard title="Ethereal Flora" type="Classic Wedding" color="bg-rose-50" />
                        <ThemeCard title="Industrial Loft" type="Corporate" color="bg-amber-50" />
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 px-8 text-center bg-indigo-600 text-white">
                <div className="max-w-4xl mx-auto">
                    <Globe className="w-12 h-12 text-white/50 mx-auto mb-10" />
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight italic">Your domain. Your design. <br /> Your day.</h2>
                    <button className="bg-white text-indigo-600 font-black uppercase tracking-widest px-12 py-5 rounded-full text-xs hover:bg-gray-100 transition-all shadow-xl">
                        Launch Your Site
                    </button>
                </div>
            </section>
        </main>
    );
}

const DesignPillar = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
    <div className="p-10 premium-card h-full group hover:border-indigo-600 transition-all">
        <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl flex items-center justify-center text-indigo-600 mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all">
            <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4 tracking-tighter uppercase leading-none">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">{desc}</p>
    </div>
);

const SyncItem = ({ text }: { text: string }) => (
    <div className="flex items-center gap-4">
        <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="w-3 h-3 text-indigo-400" />
        </div>
        <span className="text-sm font-bold text-gray-300 tracking-tight leading-none">{text}</span>
    </div>
);

const ThemeCard = ({ title, type, color }: { title: string, type: string, color: string }) => (
    <div className="group cursor-pointer">
        <div className={`aspect-[4/3] ${color} rounded-[3rem] border border-gray-100 dark:border-gray-800 mb-6 overflow-hidden relative`}>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="px-6 py-2 bg-white text-gray-900 text-[10px] font-black rounded-full uppercase tracking-widest">Preview Theme</div>
            </div>
        </div>
        <div className="text-[10px] font-black uppercase tracking-widest text-indigo-600 mb-1">{type}</div>
        <h4 className="text-xl font-black text-gray-900 dark:text-white uppercase tracking-tight">{title}</h4>
    </div>
);

