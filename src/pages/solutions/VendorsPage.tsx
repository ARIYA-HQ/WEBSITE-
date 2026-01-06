import React from 'react';
import { TrendingUp, MessageSquare, Star, DollarSign } from 'lucide-react';

export default function VendorsPage() {
    return (
        <main className="pt-24 min-h-screen bg-white dark:bg-gray-950">
            {/* Hero */}
            <section className="bg-primary-50 dark:bg-gray-900 py-24 px-8 rounded-b-[3rem]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1">
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-gray-900 dark:text-white">
                            Booked Solid. <br /> Every Season.
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed font-medium">
                            Join the marketplace where high-intent couples and planners find their perfect match. Stop chasing leads, start signing contracts.
                        </p>
                        <div className="flex gap-4">
                            <button className="bg-[#D0771E] text-white font-black uppercase tracking-widest px-8 py-4 rounded-full text-sm hover:bg-[#b56619] transition-colors shadow-xl">
                                Join Network
                            </button>
                            <div className="flex items-center gap-2 px-6 py-4">
                                <span className="font-bold text-gray-900 dark:text-white">4.9/5 Rating</span>
                                <div className="flex text-[#D0771E]">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white dark:bg-gray-800 p-8 rounded-[2rem] shadow-lg">
                                <div className="text-4xl font-black text-gray-900 dark:text-white mb-2">3x</div>
                                <div className="text-xs font-bold uppercase tracking-widest text-gray-500">More Inquiries</div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-8 rounded-[2rem] shadow-lg translate-y-8">
                                <div className="text-4xl font-black text-gray-900 dark:text-white mb-2">0%</div>
                                <div className="text-xs font-bold uppercase tracking-widest text-gray-500">Commission Fees</div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-8 rounded-[2rem] shadow-lg">
                                <div className="text-4xl font-black text-gray-900 dark:text-white mb-2">24h</div>
                                <div className="text-xs font-bold uppercase tracking-widest text-gray-500">Avg. Response</div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-8 rounded-[2rem] shadow-lg translate-y-8">
                                <div className="text-4xl font-black text-gray-900 dark:text-white mb-2">50k+</div>
                                <div className="text-xs font-bold uppercase tracking-widest text-gray-500">Active Planners</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white">Grow Your Business on Autopilot</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { icon: TrendingUp, title: "Showcase Your Work", desc: "Create a stunning portfolio that highlights your style, pricing, and availability." },
                        { icon: MessageSquare, title: "Qualified Leads", desc: "Our AI matches you with clients who fit your budget and vibe. No more tire kickers." },
                        { icon: DollarSign, title: "Instant Booking", desc: "Send contracts and get paid directly through the platform with no hidden fees." },
                    ].map((step, i) => (
                        <div key={i} className="text-center px-4">
                            <div className="w-16 h-16 bg-gray-50 dark:bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6 text-primary-600">
                                <step.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{step.title}</h3>
                            <p className="text-gray-500 dark:text-gray-400">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
