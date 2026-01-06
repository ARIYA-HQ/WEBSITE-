import React from 'react';
import { Sparkles, Bot, Zap, BrainCircuit, ArrowRight } from 'lucide-react';

export default function AIPlanningPage() {
    return (
        <main className="pt-24 bg-black min-h-screen text-white selection:bg-primary-500 selection:text-white">
            {/* Hero */}
            <section className="relative py-32 px-8 overflow-hidden text-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-900/20 via-black to-black" />

                <div className="relative z-10 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <Sparkles className="w-4 h-4 text-primary-400" />
                        <span className="text-xs font-bold uppercase tracking-widest text-primary-400">Ariya Intelligence</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                        Your 24/7 <br /> Planning Partner.
                    </h1>

                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                        Harness the power of generative AI to build timelines, source vendors, and negotiate contracts—instantly.
                    </p>

                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                        <button className="bg-primary-600 text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-primary-500 transition-colors shadow-[0_0_40px_-10px_rgba(208,119,30,0.5)]">
                            Experience the Magic
                        </button>
                    </div>
                </div>
            </section>

            {/* Feature Grid */}
            <section className="max-w-7xl mx-auto px-8 pb-32">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: BrainCircuit,
                            title: "Generative Timelines",
                            desc: "Input your event date and type, and watch as Ariya builds a detailed minute-by-minute run of show in seconds.",
                            gradient: "from-blue-500/20 via-blue-500/5 to-transparent border-blue-500/20"
                        },
                        {
                            icon: Bot,
                            title: "Smart Sourcing",
                            desc: "Our AI matches you with vendors who fit your specific style, budget, and availability criteria. No more cold calling.",
                            gradient: "from-purple-500/20 via-purple-500/5 to-transparent border-purple-500/20"
                        },
                        {
                            icon: Zap,
                            title: "Contract Analysis",
                            desc: "Upload any vendor contract. Ariya will highlight red flags, negotiate terms, and suggest edits based on industry standards.",
                            gradient: "from-orange-500/20 via-orange-500/5 to-transparent border-orange-500/20"
                        }
                    ].map((feature, idx) => (
                        <div key={idx} className={`relative p-8 rounded-[2rem] border ${feature.gradient.split(' ')[2]} bg-gradient-to-b ${feature.gradient} overflow-hidden group`}>
                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 text-white border border-white/10 group-hover:scale-110 transition-transform duration-300">
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed mb-8">
                                    {feature.desc}
                                </p>
                                <div className="flex items-center gap-2 text-primary-400 text-xs font-black uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                                    See it in action <ArrowRight className="w-3 h-3" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Interactive Visual Placeholder */}
            <section className="py-24 px-8 border-t border-white/10">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl font-black tracking-tight mb-16">It feels like sci-fi. <br /> It works like <span className="text-primary-500">science</span>.</h2>

                    {/* Abstract Visual Representation */}
                    <div className="relative h-96 w-full rounded-[3rem] border border-white/10 bg-black overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-primary-900/40 via-transparent to-transparent animate-pulse" />
                        <div className="grid grid-cols-6 gap-4 opacity-30 scale-150 rotate-12">
                            {[...Array(24)].map((_, i) => (
                                <div key={i} className="w-32 h-32 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm" />
                            ))}
                        </div>
                        <div className="absolute z-10 bg-black/80 backdrop-blur-xl border border-white/20 px-8 py-4 rounded-full flex items-center gap-4 shadow-2xl">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="font-mono text-sm text-primary-400">Processing 1,500 data points...</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
