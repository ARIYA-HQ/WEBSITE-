import React from 'react';
import { Calendar, CheckSquare, FileText, LayoutTemplate, PieChart } from 'lucide-react';

export default function PlannersPage() {
    return (
        <main className="pt-24 bg-gray-50 dark:bg-gray-950 min-h-screen">
            {/* Hero */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-[#0F172A] text-white">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="relative z-10 text-center px-4 max-w-4xl">
                    <div className="inline-block px-4 py-1 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-400 text-[10px] font-black uppercase tracking-widest mb-6 backdrop-blur-md">
                        For Professional Planners
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-tight">
                        The Command Center for <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">Event Architects</span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                        Manage multiple clients, streamline your workflows, and deliver flawless events with the industry's most powerful operating system.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <button className="bg-primary-600 text-white font-black uppercase tracking-widest px-8 py-4 rounded-full text-sm hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/20">
                            Get Pro Access
                        </button>
                        <button className="bg-white/10 text-white font-black uppercase tracking-widest px-8 py-4 rounded-full text-sm hover:bg-white/20 transition-colors backdrop-blur-md border border-white/10">
                            View Demo
                        </button>
                    </div>
                </div>
            </section>

            {/* Dashboard Preview */}
            <section className="py-24 px-8 -mt-32 relative z-20">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-white dark:bg-gray-800 rounded-[2rem] shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden p-4">
                        <img
                            src="https://cdn.dribbble.com/users/411475/screenshots/16867624/media/f5fb2b3391807662c5b369c3a2fa6741.png"
                            alt="Dashboard Interface"
                            className="w-full rounded-2xl border border-gray-100 dark:border-gray-600"
                        />
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-12 px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { icon: CheckSquare, title: "Task Management", desc: "Templates that autofill based on event date. Never miss a deadline again." },
                        { icon: FileText, title: "Pro Invoicing", desc: "Send beautiful proposals and get paid faster with integrated payment processing." },
                        { icon: LayoutTemplate, title: "Visual Floorplans", desc: "Drag-and-drop seating charts and layouts that sync with your guest list." },
                    ].map((feature, i) => (
                        <div key={i} className="flex flex-col items-start group">
                            <div className="w-12 h-12 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl flex items-center justify-center mb-6 text-primary-600 shadow-sm group-hover:border-primary-600 transition-colors">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-black uppercase tracking-widest mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
                            <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-medium">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
