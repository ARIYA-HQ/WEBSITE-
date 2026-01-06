import React from 'react';
import { Store, Search, ShieldCheck, MessageCircle, Star, ArrowRight } from 'lucide-react';

export default function MarketplacePage() {
    return (
        <main className="pt-24 bg-white dark:bg-gray-950 min-h-screen">
            {/* Hero */}
            <section className="relative py-24 px-8 overflow-hidden bg-pink-50 dark:bg-gray-900">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-[10px] font-black uppercase tracking-widest text-pink-600 mb-4 block animate-in fade-in slide-in-from-bottom-4 duration-700">Vendor Marketplace</span>
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 text-gray-900 dark:text-white animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                        Curated pros, <br /> at your fingertips.
                    </h1>
                    <p className="text-xl text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto font-medium animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                        Discover, vet, and hire top-rated event professionals. From venues to videographers, find your dream team in minutes.
                    </p>

                    <div className="max-w-2xl mx-auto relative animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                        <input
                            type="text"
                            placeholder="Search for photographers, venues, florists..."
                            className="w-full pl-14 pr-6 py-5 rounded-full border-none shadow-xl shadow-pink-200/50 dark:shadow-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-pink-500 transition-all outline-none"
                        />
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    </div>
                </div>
            </section>

            {/* Vendor Categories Grid Mockup */}
            <section className="py-24 px-8 max-w-7xl mx-auto">
                <h2 className="text-3xl font-black tracking-tight mb-12 text-gray-900 dark:text-white">Popular Categories</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {["Venues", "Catering", "Photography", "Music", "Florals", "Decor", "Planners", "Transportation"].map((cat, idx) => (
                        <div key={idx} className="aspect-square rounded-2xl bg-gray-100 relative overflow-hidden group cursor-pointer">
                            <img
                                src={`https://source.unsplash.com/random/400x400/?${cat.toLowerCase()},event`}
                                alt={cat}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                            <div className="absolute bottom-4 left-4 text-white font-bold text-lg">{cat}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Value Prop */}
            <section className="max-w-7xl mx-auto px-8 pb-32">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: ShieldCheck,
                            title: "Vetted Quality",
                            desc: "Every vendor is screened for insurance, reviews, and portfolio quality."
                        },
                        {
                            icon: MessageCircle,
                            title: "Direct Chat",
                            desc: "Communicate directly with vendors without leaving the platform."
                        },
                        {
                            icon: Star,
                            title: "Verified Reviews",
                            desc: "Read real reviews from actual Ariya clients. No fake 5-stars."
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-8 rounded-[2rem] hover:shadow-xl hover:border-pink-200 dark:hover:border-pink-900 transition-all group">
                            <div className="w-12 h-12 rounded-xl bg-pink-100 dark:bg-pink-900/20 flex items-center justify-center text-pink-600 mb-6 group-hover:scale-110 transition-transform">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{item.title}</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
