import React from 'react';
import {
    ShieldCheck,
    Server,
    Lock,
    Activity,
    Globe,
    Users,
    MessageSquare,
    Cpu,
    ArrowRight,
    CheckCircle2
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function EnterprisePage() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <main className="pt-24 bg-white dark:bg-gray-950 min-h-screen selection:bg-primary-600 selection:text-white">
            {/* Hero Section */}
            <section className="relative py-32 px-8 bg-gray-900 border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-900/20 via-transparent to-transparent opacity-50" />
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-600/10 border border-primary-600/20 mb-8">
                            <ShieldCheck className="w-4 h-4 text-primary-400" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-primary-400">Enterprise Ready</span>
                        </span>
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
                            Mission-Critical <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-orange-300">Event Infrastructure.</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
                            AriyaHQ Enterprise provides global organizations with the security,
                            governance, and scale needed to orchestrate thousand-event portfolios
                            with absolute precision.
                        </p>
                        <div className="flex flex-col sm:row gap-4">
                            <button className="bg-primary-600 text-white font-black uppercase tracking-widest px-10 py-5 rounded-full text-xs hover:bg-primary-700 transition-all shadow-xl shadow-primary-600/20">
                                Book a Demo
                            </button>
                            <button className="text-white font-black uppercase tracking-widest px-10 py-5 rounded-full text-xs border border-white/10 hover:bg-white/5 transition-all">
                                Security Whitepaper
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Core Capabilities */}
            <section className="py-32 px-8 max-w-7xl mx-auto">
                <div className="flex flex-col md:row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <span className="section-label mb-4 block">Platform Core</span>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">Built for scale, hardened for the enterprise.</h2>
                    </div>
                    <div className="flex gap-4">
                        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800">
                            <div className="text-2xl font-black text-primary-600">99.99%</div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-gray-500">Uptime SLA</div>
                        </div>
                        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800">
                            <div className="text-2xl font-black text-primary-600">24/7</div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-gray-500">Premium Support</div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <EnterpriseCard
                        icon={<Lock />}
                        title="SSO & Governance"
                        features={["SAML 2.0 / SCIM", "RBAC Controls", "Audit Logs", "IP Whitelisting"]}
                    />
                    <EnterpriseCard
                        icon={<Globe />}
                        title="Global Compliance"
                        features={["GDPR & CCPA", "SOC2 Type II", "ISO 27001", "Data Residency"]}
                    />
                    <EnterpriseCard
                        icon={<Cpu />}
                        title="Advanced AI"
                        features={["Private Models", "Data Sovereignty", "Auto-Cleanup", "Insight Engine"]}
                    />
                    <EnterpriseCard
                        icon={<Users />}
                        title="Team Scale"
                        features={["Infinite Seats", "Cross-Org Search", "Shared Templates", "Central Billing"]}
                    />
                </div>
            </section>

            {/* Deep Dive: Security */}
            <section className="py-32 bg-gray-50 dark:bg-gray-900 overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div {...fadeIn}>
                            <span className="section-label mb-4 block">Security First</span>
                            <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-tight">Your data is yours, <br className="hidden md:block" /> absolutely protected.</h2>
                            <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 leading-relaxed">
                                We go beyond industry standards. Every Enterprise instances runs on an isolated
                                infrastructure with AES-256 encryption at rest and TLS 1.3 in transit.
                            </p>
                            <div className="space-y-4">
                                <SecurityFactor text="Private VPC isolation for every enterprise client." />
                                <SecurityFactor text="Weekly penetration testing by independent security firms." />
                                <SecurityFactor text="Zero-trust architecture for all internal data access." />
                            </div>
                        </motion.div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-primary-600/20 blur-[120px] rounded-full" />
                            <div className="bg-white dark:bg-gray-800 p-1 rounded-[40px] shadow-2xl relative">
                                <div className="p-8 border border-gray-100 dark:border-gray-700 rounded-[38px] bg-white dark:bg-gray-800 flex flex-col justify-center items-center text-center">
                                    <div className="w-20 h-20 bg-primary-50 dark:bg-primary-900/20 rounded-full flex items-center justify-center text-primary-600 mb-6">
                                        <ShieldCheck className="w-10 h-10" />
                                    </div>
                                    <h4 className="text-2xl font-black text-gray-900 dark:text-white mb-2">SOC2 Type II Certified</h4>
                                    <p className="text-sm text-gray-500 mb-6">Audited by Deloitte (2025)</p>
                                    <button className="text-[10px] font-black uppercase tracking-widest text-[#D0771E] flex items-center gap-2 hover:gap-3 transition-all">
                                        VIEW COMPLIANCE PORTAL <ArrowRight className="w-3 h-3" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Logo Wall */}
            <section className="py-24 border-y border-gray-100 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-8 text-center">
                    <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-16">Powering the worlds most ambitious teams</h2>
                    <div className="flex flex-wrap justify-center gap-16 md:gap-24 opacity-30 grayscale dark:invert transition-all hover:opacity-100 italic">
                        <div className="text-3xl font-black tracking-tighter">GoldmanSachs</div>
                        <div className="text-3xl font-black tracking-tighter">NETFLIX</div>
                        <div className="text-3xl font-black tracking-tighter">salesforce</div>
                        <div className="text-3xl font-black tracking-tighter">Airbnb</div>
                        <div className="text-3xl font-black tracking-tighter">Spotify</div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 px-8 text-center bg-primary-600 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-black/10" />
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-tight">Ready to orchestrate at scale?</h2>
                    <p className="text-xl text-primary-100 mb-12 opacity-80 font-medium">Schedule a custom walkthrough with our solution engineering team.</p>
                    <div className="flex flex-col sm:row gap-4 justify-center">
                        <button className="bg-white text-primary-600 font-black uppercase tracking-widest px-12 py-5 rounded-full text-xs hover:bg-gray-100 transition-all shadow-xl">
                            Contact Solutions Team
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}

const EnterpriseCard = ({ icon, title, features }: { icon: React.ReactNode, title: string, features: string[] }) => (
    <div className="p-10 premium-card h-full flex flex-col items-start translate-z-0">
        <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-2xl flex items-center justify-center text-primary-600 mb-8">
            {React.cloneElement(icon as React.ReactElement, { className: 'w-6 h-6' })}
        </div>
        <h3 className="text-xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tight">{title}</h3>
        <ul className="space-y-3 mt-auto w-full">
            {features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                    <div className="w-1 h-1 rounded-full bg-primary-600" />
                    {f}
                </li>
            ))}
        </ul>
    </div>
);

const SecurityFactor = ({ text }: { text: string }) => (
    <div className="flex items-center gap-3">
        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
        <span className="text-gray-600 dark:text-gray-400 font-medium">{text}</span>
    </div>
);

