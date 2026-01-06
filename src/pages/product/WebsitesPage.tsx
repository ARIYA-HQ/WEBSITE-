import React from 'react';
import { Globe, Smartphone, Monitor, Gift, Layout, ArrowRight } from 'lucide-react';

export default function WebsitesPage() {
    return (
        <main className="pt-24 bg-white dark:bg-gray-950 min-h-screen">
            {/* Hero */}
            <section className="relative py-24 px-8 overflow-hidden bg-indigo-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-16">
                    <div className="lg:w-1/2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 mb-4 block animate-in fade-in slide-in-from-bottom-4 duration-700">Websites & Registry</span>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-gray-900 dark:text-white leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                            Tell your story, <br /> beautifully.
                        </h1>
                        <p className="text-xl text-gray-500 dark:text-gray-400 mb-10 font-medium max-w-lg animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                            Create a stunning event website in minutes. Share details, collect RSVPs, and link your registry—all in one place.
                        </p>
                        <button className="bg-indigo-600 text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                            Build Your Site
                        </button>
                    </div>
                    <div className="lg:w-1/2 flex items-end justify-center gap-4 animate-in fade-in slide-in-from-left-8 duration-1000 delay-200">
                        {/* Mock Devices */}
                        <div className="w-24 h-48 bg-gray-900 rounded-[1.5rem] border-[4px] border-gray-800 shadow-2xl relative overflow-hidden -rotate-6 translate-y-8">
                            <div className="absolute inset-0 bg-white" />
                            <div className="absolute top-2 w-full text-center text-[6px] font-bold">The Wedding</div>
                        </div>
                        <div className="w-64 h-48 bg-gray-900 rounded-t-xl border-[4px] border-b-0 border-gray-800 shadow-2xl relative overflow-hidden">
                            <div className="absolute inset-0 bg-white" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                                <div className="font-serif text-2xl mb-2">Sarah & Tom</div>
                                <button className="bg-black text-white text-[8px] px-2 py-1">RSVP</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Layout,
                            title: "Drag & Drop Builder",
                            desc: "No coding required. Choose from 50+ award-winning templates."
                        },
                        {
                            icon: Smartphone,
                            title: "Mobile Optimized",
                            desc: "Looks perfect on every screen, from iPhone to desktop."
                        },
                        {
                            icon: Gift,
                            title: "Universal Registry",
                            desc: "Add gifts from any store, cash funds, or charities."
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white dark:bg-gray-900 p-8 rounded-[2rem] border border-gray-100 dark:border-gray-800 hover:border-indigo-200 dark:hover:border-indigo-900 hover:shadow-lg transition-all group">
                            <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/20 flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{item.title}</h3>
                            <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
