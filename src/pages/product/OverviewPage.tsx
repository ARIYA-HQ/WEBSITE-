import React from 'react';
import { LayoutDashboard, Kanban, Sparkles, Store, Calculator, Globe, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function OverviewPage() {
    return (
        <main className="pt-24 bg-white min-h-screen">
            {/* Hero */}
            <section className="relative py-24 px-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-50/50 rounded-bl-[4rem] -z-10" />
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-primary-600 mb-4 block animate-in fade-in slide-in-from-bottom-4 duration-700">Platform Overview</span>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-gray-900 leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                            Everything you need to plan <span className="text-primary-600">extraordinary</span> events.
                        </h1>
                        <p className="text-xl text-gray-500 mb-10 font-medium max-w-lg animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                            Ariya brings your entire event workflow into one intuitive interface. Say goodbye to scattered spreadsheets and hello to streamlined success.
                        </p>
                        <div className="flex gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                            <button className="bg-gray-900 text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-black transition-colors shadow-xl">
                                Get Started Free
                            </button>
                            <button className="flex items-center gap-2 px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200">
                                View Demo <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                    <div className="lg:w-1/2 animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-orange-200 to-pink-200 rounded-[2.5rem] blur-2xl opacity-30" />
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"
                                className="relative rounded-[2rem] shadow-2xl border-4 border-white"
                                alt="Platform Dashboard"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 4 Pillars */}
            <section className="py-24 px-8 max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">The Power of 4 Pillars</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                        Built on a robust foundation to handle every aspect of your event lifecycle.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            icon: Kanban,
                            title: "Planning",
                            desc: "Timelines, run of shows, and task management.",
                            color: "bg-purple-100 text-purple-600"
                        },
                        {
                            icon: Store,
                            title: "Sourcing",
                            desc: "Find, vet, and contract vendors in minutes.",
                            color: "bg-pink-100 text-pink-600"
                        },
                        {
                            icon: Globe,
                            title: "Guests",
                            desc: "RSVPs, seating charts, and travel logistics.",
                            color: "bg-blue-100 text-blue-600"
                        },
                        {
                            icon: Calculator,
                            title: "Finance",
                            desc: "Budget tracking, payments, and ROI reporting.",
                            color: "bg-green-100 text-green-600"
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="p-8 rounded-[2rem] border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 group">
                            <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Integration / Ecosystem */}
            <section className="bg-gray-900 text-white py-24 px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">Plays well with others.</h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Ariya integrates seamlessly with the tools you already use. Sync calendars, process payments, and export data without breaking a sweat.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {["Google Workspace", "QuickBooks & Xero", "Stripe & Square", "DocuSign"].map((i) => (
                                <li key={i} className="flex items-center gap-3 font-bold">
                                    <CheckCircle2 className="w-5 h-5 text-primary-500" /> {i}
                                </li>
                            ))}
                        </ul>
                        <button className="text-primary-400 font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:text-white transition-colors">
                            View all integrations <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="md:w-1/2 grid grid-cols-2 gap-4 opacity-50">
                        {/* Placeholder logos - using simple text boxes for now as placeholders for actual SVG logos */}
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="bg-white/10 h-24 rounded-2xl flex items-center justify-center font-black text-2xl tracking-tighter">
                                LOGO {i}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
