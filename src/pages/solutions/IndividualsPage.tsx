import React from 'react';
import {
    Heart,
    Users,
    Calculator,
    Sparkles,
    CheckCircle2,
    ArrowRight,
    Gift,
    Camera,
    Music,
    Smile,
    Calendar,
    Star
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function IndividualsPage() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <main className="pt-24 bg-white dark:bg-gray-950 min-h-screen selection:bg-rose-500 selection:text-white">
            {/* Hero Section */}
            <section className="relative py-24 px-8 overflow-hidden bg-rose-50/50 dark:bg-rose-900/5">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-200/30 via-transparent to-transparent opacity-60" />

                <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-20">
                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 dark:bg-rose-900/30 border border-rose-200 dark:border-rose-800 mb-8">
                            <Heart className="w-4 h-4 text-rose-500" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-rose-500">Plan Your Moment</span>
                        </span>
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 text-gray-900 dark:text-white leading-[0.85]">
                            Your Dream <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-primary-600">Simplified.</span>
                        </h1>
                        <p className="text-xl text-gray-400 dark:text-gray-500 font-medium mb-12 leading-relaxed max-w-xl">
                            From birthdays to big days. AriyaHQ gives you the same professional
                            tools used by elite planners, made simple enough for anyone to use.
                        </p>
                        <div className="flex flex-col sm:row gap-4">
                            <button className="bg-rose-500 text-white font-black uppercase tracking-widest px-10 py-5 rounded-full text-xs hover:bg-rose-600 transition-all shadow-xl shadow-rose-600/20">
                                Start Planning Free
                            </button>
                            <div className="flex items-center gap-3 px-6 py-4">
                                <Smile className="w-5 h-5 text-rose-500" />
                                <span className="text-xs font-bold text-gray-500">No spreadsheets required</span>
                            </div>
                        </div>
                    </motion.div>

                    <div className="flex-1 relative">
                        <div className="grid grid-cols-2 gap-4">
                            <GalleryImage src="https://images.unsplash.com/photo-1519741497674-611481863552" label="Weddings" />
                            <GalleryImage src="https://images.unsplash.com/photo-1530103043960-ef38714abb15" label="Parties" mt="mt-12" />
                            <GalleryImage src="https://images.unsplash.com/photo-1505232458627-41bed6811447" label="Showers" />
                            <GalleryImage src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3" label="Celebrations" mt="mt-12" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features: The Ariya Touch */}
            <section className="py-32 px-8 max-w-7xl mx-auto">
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <span className="section-label mb-4 block underline underline-offset-8">The Ariya Touch</span>
                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-none uppercase">Everything <br /> you need.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <PersonalFeature
                        icon={Calculator}
                        title="Atomic Budgeting"
                        desc="Detailed trackers that tell you exactly where your money is going, with built-in savings tips."
                    />
                    <PersonalFeature
                        icon={Users}
                        title="Guest Happiness"
                        desc="Collect RSVPs, meal preferences, and song requests in one beautiful mobile Experience."
                    />
                    <PersonalFeature
                        icon={Sparkles}
                        title="Vendor Curator"
                        desc="We filter through thousands of vendors to show you only the ones that match your specific vibe."
                    />
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="py-32 bg-gray-50 dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
                <div className="max-w-5xl mx-auto px-8 relative">
                    <div className="flex flex-col items-center text-center">
                        <div className="flex text-rose-500 mb-8">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-6 h-6 fill-current" />)}
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-12 tracking-tighter italic leading-tight">
                            "Ariya turned my messy Pinterest boards into a <span className="text-rose-500">flawless reality.</span> I actually enjoyed the planning process for once."
                        </h2>

                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-rose-500 p-0.5">
                                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" alt="Sarah" className="w-full h-full object-cover rounded-full" />
                            </div>
                            <div className="text-left">
                                <div className="text-lg font-black text-gray-900 dark:text-white leading-none mb-1">Amaka Okafor</div>
                                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 font-sans">Recently Married</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Simple Steps */}
            <section className="py-32 px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <motion.div {...fadeIn}>
                        <span className="section-label mb-4 block underline">How it works</span>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-tight uppercase">Start to Finish <br /> in three steps.</h2>

                        <div className="space-y-12 mt-12">
                            <StepItem num="01" title="Dream It" desc="Tell us your theme, budget, and guest count. Our AI generates your initial roadmap." />
                            <StepItem num="02" title="Assemble It" desc="Hire vetted vendors and build your registry. Everything stays synced automatically." />
                            <StepItem num="03" title="Live It" desc="Launch your event website and manage check-ins on the big day via our mobile app." />
                        </div>
                    </motion.div>

                    <div className="relative">
                        <div className="aspect-[4/5] bg-rose-100 dark:bg-rose-900/10 rounded-[60px] p-4">
                            <img
                                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b"
                                alt="Event success"
                                className="w-full h-full object-cover rounded-[50px] shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 pb-48 text-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[30vh] bg-rose-100 dark:bg-rose-900/10 blur-[100px] rounded-full" />
                <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-4xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter mb-12 leading-[0.85] uppercase italic">
                        The Best Day <br /> <span className="text-rose-500">Starts Here.</span>
                    </h2>
                    <button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-black uppercase tracking-widest px-12 py-5 rounded-full text-xs hover:bg-black dark:hover:bg-primary-50 transition-all shadow-2xl">
                        Start Planning Now
                    </button>
                    <p className="mt-8 text-[10px] font-black uppercase tracking-widest text-gray-400 italic">"The only thing we didn't do for Sarah was walk her down the aisle."</p>
                </div>
            </section>
        </main>
    );
}

// Sub-components
const GalleryImage = ({ src, label, mt = "" }: { src: string, label: string, mt?: string }) => (
    <div className={`relative aspect-[3/4] rounded-3xl overflow-hidden group cursor-pointer ${mt} shadow-lg hover:shadow-2xl transition-all duration-500`}>
        <img src={src} alt={label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <span className="absolute bottom-4 left-4 text-white font-black uppercase tracking-widest text-[10px]">{label}</span>
    </div>
);

const PersonalFeature = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
    <div className="p-10 premium-card h-full flex flex-col group hover:-translate-y-2 transition-all duration-500 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
        <div className="w-14 h-14 bg-rose-50 dark:bg-rose-900/20 rounded-2xl flex items-center justify-center text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-all transform mb-10">
            <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 tracking-tighter uppercase leading-none">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">{desc}</p>
    </div>
);

const StepItem = ({ num, title, desc }: { num: string, title: string, desc: string }) => (
    <div className="flex gap-8 group">
        <span className="text-5xl font-black text-rose-100 dark:text-rose-900/30 group-hover:text-rose-500 transition-colors duration-500">{num}</span>
        <div>
            <h4 className="text-xl font-black text-gray-900 dark:text-white uppercase mb-2">{title}</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed max-w-sm">{desc}</p>
        </div>
    </div>
);
