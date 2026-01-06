import React from 'react';
import { ShieldCheck, Server, Lock, Activity } from 'lucide-react';

export default function EnterprisePage() {
    return (
        <main className="pt-24 bg-white dark:bg-gray-950 min-h-screen">
            <section className="relative py-32 px-8 bg-black text-white overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-900/40 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                        Enterprise-Grade Event Orchestration
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
                        For global organizations demanding uncompromising security, reliability, and scale.
                    </p>
                    <div className="flex gap-6 justify-center">
                        <button className="bg-primary-600 text-white font-black uppercase tracking-widest px-10 py-5 rounded-full text-sm hover:bg-primary-700 transition-colors">
                            Contact Sales
                        </button>
                        <button className="text-white font-black uppercase tracking-widest px-10 py-5 rounded-full text-sm border border-white/20 hover:bg-white/10 transition-colors">
                            Read Documentation
                        </button>
                    </div>
                </div>
            </section>

            <section className="py-24 px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { icon: ShieldCheck, title: "SSO & SAML", desc: "Seamless integration with Okta, Azure AD, and more." },
                        { icon: Lock, title: "Data Residency", desc: "Host data in US, EU, or APAC regions to meet compliance." },
                        { icon: Server, title: "Dedicated Infra", desc: "Private instances ensuring maximum performance and isolation." },
                        { icon: Activity, title: "99.99% SLA", desc: "Guaranteed uptime for mission-critical event operations." },
                    ].map((item, i) => (
                        <div key={i} className="p-8 border border-gray-100 dark:border-gray-800 rounded-2xl hover:border-gray-900 dark:hover:border-white transition-colors cursor-default group">
                            <item.icon className="w-8 h-8 text-gray-900 dark:text-white mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">{item.title}</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-24 bg-gray-50 dark:bg-gray-900 text-center">
                <div className="max-w-4xl mx-auto px-8">
                    <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">Trusted by Fortune 500</h2>
                    <div className="flex flex-wrap justify-center gap-12 grayscale opacity-50">
                        {/* Placeholders for logos */}
                        <div className="text-2xl font-black text-gray-400">ACME Corp</div>
                        <div className="text-2xl font-black text-gray-400">Globex</div>
                        <div className="text-2xl font-black text-gray-400">Soylent</div>
                        <div className="text-2xl font-black text-gray-400">Initech</div>
                        <div className="text-2xl font-black text-gray-400">Umbrella</div>
                    </div>
                </div>
            </section>
        </main>
    );
}
