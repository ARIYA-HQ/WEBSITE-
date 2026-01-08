import React from 'react';
import {
    ArrowRight,
    Briefcase,
    Zap,
    Coffee,
    Code,
    Heart,
    Globe,
    Rocket,
    Users,
    ChevronRight,
    Search
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function CareersPage() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <main className="pt-24 bg-beige-50 dark:bg-gray-950 min-h-screen selection:bg-primary-600 selection:text-white">
            {/* Hero Section */}
            <section className="relative py-32 px-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-100/30 dark:bg-primary-900/10 rounded-l-[100px] -z-10" />
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="section-label mb-4 block">We're Hiring</span>
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 text-gray-900 dark:text-white leading-[0.85]">
                            Shape the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-orange-500">Culture</span> of <br />
                            Celebration.
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 font-medium max-w-xl mb-12 leading-relaxed">
                            AriyaHQ is building the operating system for the world's most
                            memorable moments. We need dreamers, builders, and orchestrators
                            to help us redefine what's possible.
                        </p>
                        <div className="flex gap-4">
                            <button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-black uppercase tracking-widest px-10 py-5 rounded-full text-xs hover:bg-primary-600 dark:hover:bg-primary-600 transition-all shadow-xl shadow-black/10">
                                View Open Roles
                            </button>
                            <button className="text-gray-900 dark:text-white font-black uppercase tracking-widest px-10 py-5 rounded-full text-xs border border-gray-200 dark:border-gray-800 hover:bg-white dark:hover:bg-gray-900 transition-all">
                                Our Mission
                            </button>
                        </div>
                    </motion.div>

                    <div className="relative group hidden lg:block">
                        <div className="absolute inset-0 bg-primary-600/10 rounded-[50px] rotate-3 group-hover:rotate-0 transition-transform duration-500" />
                        <div className="aspect-square bg-white dark:bg-gray-900 rounded-[50px] border border-gray-100 dark:border-gray-800 shadow-2xl relative z-10 flex items-center justify-center p-12 overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                                <div className="absolute top-10 left-10 text-primary-600 font-black text-8xl">A</div>
                                <div className="absolute bottom-10 right-10 text-primary-600 font-black text-8xl">H</div>
                            </div>
                            <div className="text-center">
                                <Users className="w-24 h-24 text-gray-900 dark:text-white mx-auto mb-8 opacity-20" />
                                <div className="text-5xl font-black text-gray-900 dark:text-white tracking-tighter">One Team. <br /> Infinite Joy.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-32 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-24">
                        <span className="section-label mb-4 block">Our Values</span>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">What drives us forward</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <ValueCard
                            icon={<Rocket />}
                            title="Audacious Ambition"
                            desc="We play for big stakes. We aim to rewire how an entire industry thinks about events."
                        />
                        <ValueCard
                            icon={<Heart />}
                            title="Radical Hospitality"
                            desc="We serve our users with the same care a five-star host serves their guests."
                        />
                        <ValueCard
                            icon={<Zap />}
                            title="Unrelenting Speed"
                            desc="Shipping is our heartbeat. We value progress over perfection, constantly iterating."
                        />
                        <ValueCard
                            icon={<Code />}
                            title="Elegance in Detail"
                            desc="From code to design, we obsess over the details that make the magic happen."
                        />
                    </div>
                </div>
            </section>

            {/* Perks Section (Redesigned) */}
            <section className="py-32 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div {...fadeIn}>
                            <span className="section-label mb-4 block">Life at Ariya</span>
                            <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-tight">Work that feels <br /> like celebration.</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed font-medium">
                                We've built a culture that prioritizes autonomy, creativity, and the human
                                experience. We work hard, but we celebrate even harder.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <PerkItem icon={<Globe />} title="Remote-First" desc="Work from anywhere in the world." />
                                <PerkItem icon={<Coffee />} title="Health & Wellness" desc="Premium medical coverage & gym." />
                                <PerkItem icon={<Zap />} title="Equity Options" desc="Be a true owner in Ariya's future." />
                                <PerkItem icon={<Users />} title="Annual Retreats" desc="Regular offsites in beautiful places." />
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="aspect-square bg-gray-200 dark:bg-gray-800 rounded-3xl overflow-hidden relative">
                                <div className="absolute inset-0 bg-primary-600 mix-blend-overlay opacity-20" />
                                <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                                    <div className="text-gray-400 font-bold text-xs uppercase tracking-widest">[Team Image Placeholder]</div>
                                </div>
                            </div>
                            <div className="aspect-[3/4] bg-primary-600 rounded-3xl mt-8 flex flex-col justify-end p-8">
                                <div className="text-3xl font-black text-white leading-tight">"Ariya is where my best work found its home."</div>
                                <div className="mt-4 text-primary-100 flex items-center gap-2 font-bold text-xs">
                                    Tunde A. — Lead Engineer
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hiring Process */}
            <section className="py-32 bg-gray-900 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-24">
                        <span className="section-label mb-4 block text-primary-400">The Journey</span>
                        <h2 className="text-4xl font-black text-white tracking-tight">Our Hiring Process</h2>
                    </div>

                    <div className="flex flex-col md:row items-start justify-between gap-12 max-w-5xl mx-auto">
                        <ProcessStep number="01" title="Discovery" desc="Initial chat with the recruiting team." />
                        <ProcessStep number="02" title="Deep Dive" desc="Technical or design-focus interview." />
                        <ProcessStep number="03" title="Meet the Fam" desc="Interaction with the broader team." />
                        <ProcessStep number="04" title="The Offer" desc="Welcome to the future of events." />
                    </div>
                </div>
            </section>

            {/* Open Roles */}
            <section className="py-32 px-8 max-w-5xl mx-auto">
                <div className="flex flex-col md:row justify-between items-end mb-16 gap-8">
                    <div>
                        <span className="section-label mb-4 block">Opportunities</span>
                        <h2 className="text-4xl font-black text-gray-900 dark:text-white tracking-tighter leading-none">Find your next mission.</h2>
                    </div>
                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            placeholder="Filter roles..."
                            className="w-full bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-full py-4 pl-12 pr-6 text-sm focus:outline-none focus:border-primary-600 transition-colors"
                        />
                    </div>
                </div>

                <div className="space-y-4">
                    {[
                        { role: "Senior Frontend Architect", dept: "Engineering", loc: "Remote / Lagos" },
                        { role: "Brand Experience Designer", dept: "Creative", loc: "New York / Hybrid" },
                        { role: "Product Marketing Lead", dept: "Marketing", loc: "Remote" },
                        { role: "Customer Success Architect", dept: "Operations", loc: "Austin / Remote" },
                    ].map((job, i) => (
                        <div key={i} className="bg-white dark:bg-gray-900 p-8 rounded-[1.5rem] flex flex-col md:flex-row items-center justify-between group cursor-pointer transition-all border border-gray-50 dark:border-gray-800 hover:border-primary-600/50 hover:shadow-2xl shadow-primary-600/5">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 transition-colors">{job.role}</h3>
                                <div className="flex gap-4 text-xs font-bold uppercase tracking-widest text-gray-400">
                                    <span>{job.dept}</span>
                                    <span>•</span>
                                    <span>{job.loc}</span>
                                </div>
                            </div>
                            <div className="mt-4 md:mt-0 flex items-center gap-4">
                                <span className="text-[10px] font-black uppercase tracking-widest text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity">Apply Now</span>
                                <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-all">
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

const ValueCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <div className="p-10 premium-card h-full">
        <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-2xl flex items-center justify-center text-primary-600 mb-8">
            {React.cloneElement(icon as React.ReactElement, { className: 'w-6 h-6' })}
        </div>
        <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4 tracking-tight leading-tight">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-relaxed">{desc}</p>
    </div>
);

const PerkItem = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <div className="p-6 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl flex items-start gap-4 hover:border-primary-600 transition-colors group">
        <div className="w-10 h-10 bg-primary-50 dark:bg-primary-900/20 rounded-xl flex items-center justify-center text-primary-600 flex-shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors">
            {React.cloneElement(icon as React.ReactElement, { className: 'w-5 h-5' })}
        </div>
        <div>
            <div className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-tight mb-1">{title}</div>
            <p className="text-xs text-gray-500 font-medium">{desc}</p>
        </div>
    </div>
);

const ProcessStep = ({ number, title, desc }: { number: string, title: string, desc: string }) => (
    <div className="flex items-start gap-6 max-w-xs">
        <div className="text-4xl font-black text-primary-600/20">{number}</div>
        <div>
            <h4 className="text-xl font-black text-white mb-2 uppercase tracking-tight">{title}</h4>
            <p className="text-sm text-gray-400 font-medium leading-relaxed">{desc}</p>
        </div>
    </div>
);

