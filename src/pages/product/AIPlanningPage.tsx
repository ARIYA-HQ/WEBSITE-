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
                        Tell Ariya about your event and get a full planning timeline, budget breakdown, and vendor shortlist — in minutes.
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
                            title: "Instant Timeline",
                            desc: "Tell Ariya your event date and type. It generates a structured run-of-show and task checklist so nothing slips through.",
                            gradient: "from-blue-500/20 via-blue-500/5 to-transparent border-blue-500/20"
                        },
                        {
                            icon: Bot,
                            title: "Vendor Shortlist",
                            desc: "Describe what you need and Ariya surfaces a curated vendor shortlist grouped by budget category — ready for you to review.",
                            gradient: "from-purple-500/20 via-purple-500/5 to-transparent border-purple-500/20"
                        },
                        {
                            icon: Zap,
                            title: "Budget Breakdown",
                            desc: "Input your total budget and Ariya recommends how to split it across categories — catering, decor, venue, and more.",
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
                    <h2 className="text-4xl font-black tracking-tight mb-16">Your event brief. <br /> A full plan <span className="text-primary-500">in minutes</span>.</h2>

                    {/* Step visual */}
                    <div className="relative h-96 w-full rounded-[3rem] border border-white/10 bg-black overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-primary-900/40 via-transparent to-transparent" />
                        <div className="relative z-10 flex flex-col gap-4 w-full max-w-sm px-8">
                            {["Describe your event", "Ariya drafts your plan", "Review & refine in the dashboard"].map((step, i) => (
                                <div key={i} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 backdrop-blur-sm">
                                    <div className="w-7 h-7 rounded-full bg-primary-600 text-white text-xs font-black flex items-center justify-center flex-shrink-0">{i + 1}</div>
                                    <span className="text-sm font-medium text-white/80">{step}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
