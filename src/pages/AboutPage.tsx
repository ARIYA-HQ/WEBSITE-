import React from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, Users, Globe } from 'lucide-react';

export default function AboutPage() {
    return (
        <main className="pt-24 bg-beige-50 dark:bg-gray-950 min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-white dark:bg-gray-900">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2069"
                        className="w-full h-full object-cover opacity-80"
                        alt="Team celebration"
                    />
                    <div className="absolute inset-0 bg-white/60 dark:bg-black/60 backdrop-blur-[2px]" />
                </div>
                <div className="relative z-10 text-center max-w-4xl px-6">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-gray-900 dark:text-white mb-6">
                        Redefining <span className="text-primary-600">Celebration</span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 font-medium leading-relaxed">
                        We believe that planning an event should be as joyful as the event itself.
                        Ariya is building the intelligence that powers the world's most memorable moments.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-24 px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-primary-600 mb-4">Our Mission</div>
                        <h2 className="text-4xl font-black tracking-tight mb-6 text-gray-900 dark:text-white">Empowering the Visionaries</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                            Event planning has traditionally been a fragmented, stressful process. We saw a world where creativity was stifled by logistics.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                            Ariya bridges the gap between vision and reality. By combining cutting-edge AI with a curated network of top-tier professionals, we give everyone—from couples to corporate planners—the superpowers to create magic.
                        </p>
                        <div className="grid grid-cols-2 gap-8">
                            <div className="flex flex-col">
                                <span className="text-4xl font-black text-gray-900 dark:text-white">200k+</span>
                                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Events Planned</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-4xl font-black text-gray-900 dark:text-white">50k+</span>
                                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Vendors</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square bg-gray-200 rounded-[2rem] overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                                className="w-full h-full object-cover"
                                alt="Founders working"
                            />
                        </div>
                        <div className="absolute -bottom-10 -left-10 bg-white dark:bg-gray-800 p-8 rounded-[1.5rem] shadow-xl max-w-xs hidden md:block">
                            <p className="text-sm font-medium italic text-gray-600 dark:text-gray-300">
                                "Technology shouldn't replace the human touch; it should amplify it."
                            </p>
                            <div className="mt-4 text-xs font-black uppercase tracking-widest text-primary-600">- Sarah & James, Founders</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-24 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white">Our Core Values</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { icon: Heart, title: "Passion First", desc: "We love what we do and who we serve." },
                            { icon: Star, title: "Excellence", desc: "Good isn't enough. We aim for extraordinary." },
                            { icon: Users, title: "Community", desc: "We thrive when our partners thrive." },
                            { icon: Globe, title: "Inclusion", desc: "Celebrations are for everyone, everywhere." },
                        ].map((item, i) => (
                            <div key={i} className="bg-beige-50 dark:bg-gray-800 p-8 rounded-[2rem] text-center hover:scale-105 transition-transform duration-300">
                                <div className="w-12 h-12 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6 text-primary-600 dark:text-primary-400 shadow-sm">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-black uppercase tracking-widest mb-3 text-gray-900 dark:text-white">{item.title}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
