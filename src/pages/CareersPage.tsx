import React from 'react';
import { ArrowRight, Briefcase, Zap, Coffee, Code } from 'lucide-react';

export default function CareersPage() {
    return (
        <main className="pt-24 bg-beige-50 dark:bg-gray-950 min-h-screen">
            <section className="relative py-32 text-center px-4">
                <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 text-gray-900 dark:text-white">
                    Build the <span className="text-primary-600">Future</span> of Events
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 font-medium max-w-2xl mx-auto mb-12">
                    We're a team of dreamers, builders, and party-goers on a mission to make celebration simpler. Join us.
                </p>
                <button className="bg-black text-white dark:bg-white dark:text-black font-black uppercase tracking-widest px-10 py-5 rounded-full text-sm hover:scale-105 transition-transform">
                    View Open Roles
                </button>
            </section>

            <section className="py-24 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-[10px] font-black uppercase tracking-widest text-primary-600 mb-4 text-center">Why Ariya?</div>
                    <h2 className="text-4xl font-black tracking-tight mb-16 text-center text-gray-900 dark:text-white">Perks & Benefits</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Zap, title: "High Impact", desc: "Work on features used by millions to plan their most important days." },
                            { icon: Coffee, title: "Flexible Lifestyle", desc: "Remote-first culture, unlimited PTO, and coworking stipends." },
                            { icon: Code, title: "Modern Tech", desc: "We use the latest stack (React, AI, Node) to solve complex problems." },
                        ].map((item, i) => (
                            <div key={i} className="p-8 border border-gray-100 dark:border-gray-800 rounded-[2rem] hover:border-primary-200 dark:hover:border-primary-500 hover:bg-primary-50/30 dark:hover:bg-primary-900/10 transition-all group">
                                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center mb-6 text-gray-900 dark:text-white">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black uppercase tracking-widest mb-3 text-gray-900 dark:text-white">{item.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400 font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-8 max-w-5xl mx-auto">
                <h2 className="text-4xl font-black tracking-tight mb-12 text-gray-900 dark:text-white">Open Positions</h2>
                <div className="space-y-4">
                    {[
                        { role: "Senior Frontend Engineer", dept: "Engineering", loc: "Remote" },
                        { role: "Product Designer", dept: "Design", loc: "New York, NY" },
                        { role: "Marketing Manager", dept: "Marketing", loc: "Remote" },
                        { role: "Customer Success Lead", dept: "Operations", loc: "San Francisco, CA" },
                    ].map((job, i) => (
                        <div key={i} className="bg-white dark:bg-gray-900 p-8 rounded-[1.5rem] flex flex-col md:flex-row items-center justify-between shadow-sm hover:shadow-lg dark:shadow-none transition-all border border-transparent dark:border-gray-800 hover:border-primary-100 dark:hover:border-primary-500 cursor-pointer group">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 transition-colors">{job.role}</h3>
                                <div className="flex gap-4 text-xs font-bold uppercase tracking-widest text-gray-400">
                                    <span>{job.dept}</span>
                                    <span>•</span>
                                    <span>{job.loc}</span>
                                </div>
                            </div>
                            <div className="mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">
                                <ArrowRight className="w-6 h-6 text-primary-600" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
