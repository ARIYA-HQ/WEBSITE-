import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Calculator, Sparkles, CheckCircle } from 'lucide-react';

export default function IndividualsPage() {
    return (
        <main className="pt-24 bg-beige-50 min-h-screen">
            {/* Hero */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=2070"
                        className="w-full h-full object-cover brightness-50"
                        alt="Couple celebrating"
                    />
                </div>
                <div className="relative z-10 text-center text-white px-4 max-w-4xl animate-in fade-in zoom-in duration-1000">
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6">
                        Your Dream Event, <span className="text-primary-400">Simplified</span>
                    </h1>
                    <p className="text-xl md:text-2xl font-medium text-white/90 mb-10 leading-relaxed">
                        From "Yes!" to "I Do" and everything in between. Plan your perfect celebration without the stress.
                    </p>
                    <button className="bg-white text-black font-black uppercase tracking-widest px-10 py-5 rounded-full text-sm hover:scale-105 transition-transform">
                        Start Planning Free
                    </button>
                </div>
            </section>

            {/* Features */}
            <section className="py-24 px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary-600">Features</span>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter mt-4">Everything You Need</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: Calculator, title: "Smart Budgeting", desc: "Track every penny with our AI-powered budget estimator that learns from local pricing." },
                        { icon: Users, title: "Guest List Magic", desc: "Collect addresses, track RSVPs, and manage meal preferences in one beautiful dashboard." },
                        { icon: Sparkles, title: "Vendor Matching", desc: "Get matched with vendors who fit your style and budget perfectly. No more endless searching." },
                    ].map((feature, i) => (
                        <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                            <div className="w-14 h-14 bg-beige-100 rounded-2xl flex items-center justify-center mb-8 text-primary-600 group-hover:scale-110 transition-transform">
                                <feature.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-black uppercase tracking-widest mb-4">{feature.title}</h3>
                            <p className="text-gray-500 leading-relaxed font-medium">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonial / Social Proof */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-5xl mx-auto px-8 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <h2 className="text-4xl font-black tracking-tight mb-6">"Ariya saved my sanity."</h2>
                        <p className="text-gray-600 text-lg mb-8 italic">
                            "I was drowning in spreadsheets until I found Ariya. It somehow knew exactly what I needed before I did."
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200" alt="Sarah" />
                            </div>
                            <div>
                                <div className="font-bold text-gray-900">Sarah Jenkins</div>
                                <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Bride, June 2025</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 grid grid-cols-2 gap-4">
                        <div className="bg-primary-50 p-6 rounded-2xl text-center">
                            <div className="text-3xl font-black text-primary-600 mb-1">150+</div>
                            <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Hours Saved</div>
                        </div>
                        <div className="bg-green-50 p-6 rounded-2xl text-center">
                            <div className="text-3xl font-black text-green-600 mb-1">$2k</div>
                            <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Under Budget</div>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl text-center col-span-2">
                            <div className="text-3xl font-black text-blue-600 mb-1">Zero</div>
                            <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Stress Meltdowns</div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
