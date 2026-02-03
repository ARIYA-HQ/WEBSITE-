
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import VenueCard from '../components/VenueCard';
import VideoShowcase from '../components/VideoShowcase';

const vendors = [
    { name: 'Photographers', color: 'bg-red-100' },
    { name: 'Caterers', color: 'bg-orange-100' },
    { name: 'Florists', color: 'bg-green-100' },
    { name: 'Musicians', color: 'bg-blue-100' },
    { name: 'Venues', color: 'bg-purple-100' },
    { name: 'Bakers', color: 'bg-pink-100' },
    { name: 'Decor', color: 'bg-indigo-100' },
    { name: 'Rental', color: 'bg-teal-100' },
];

const venues = [
    {
        name: "Grand Palace Hotel",
        location: "Paris, France",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800",
        capacity: "500+",
        rating: 4.9,
        price: "$$$"
    },
    {
        name: "The Glass House",
        location: "New York, USA",
        image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800",
        capacity: "200-300",
        rating: 4.8,
        price: "$$"
    },
    {
        name: "Lakeside Manor",
        location: "Como, Italy",
        image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&q=80&w=800",
        capacity: "150-250",
        rating: 5.0,
        price: "$$$"
    }
];

export default function LandingPage() {
    return (
        <main className="pt-24">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <HeroSlider />
                <div className="relative z-10 text-center text-white px-4 max-w-5xl animate-in">
                    <h1 className="text-4xl md:text-8xl font-black tracking-tighter mb-6 leading-tight">
                        Event Planning Begins with Ariya
                    </h1>
                    <p className="text-base md:text-xl font-medium text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed shadow-sm">
                        From choosing vendors and booking venues to designing save-the-dates, a free event website, a registry, and even your cake — Ariya supports you through it all.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <button className="w-full md:w-auto bg-primary-600 text-white font-black uppercase tracking-widest px-10 py-5 rounded-full text-sm hover:bg-primary-700 transition-colors">
                            Explore Vendors
                        </button>
                        <button className="w-full md:w-auto bg-white/10 backdrop-blur-md text-white border border-white/20 font-black uppercase tracking-widest px-10 py-5 rounded-full text-sm hover:bg-white/20 transition-colors">
                            Create Website
                        </button>
                    </div>
                </div>
            </section>

            {/* Vendor Grid */}
            <section className="py-24 px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="section-label">Our Network</span>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter mt-4">Find Vendors For Every Event</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {vendors.map((vendor, i) => (
                        <div key={i} className="premium-card p-8 flex flex-col items-center text-center group cursor-pointer bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                            <div className={`w-16 h-16 rounded-full mb-6 flex items-center justify-center ${vendor.color} dark:bg-opacity-20 group-hover:scale-110 transition-transform`}>
                                <div className="w-8 h-8 rounded-full bg-white/40 dark:bg-white/10" />
                            </div>
                            <h3 className="text-sm font-black uppercase tracking-widest text-gray-900 dark:text-white">{vendor.name}</h3>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <button className="border-2 border-primary-600 text-primary-600 font-black uppercase tracking-widest px-10 py-4 rounded-full text-sm hover:bg-primary-600 hover:text-white transition-all">
                        View All Vendors
                    </button>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 px-8 bg-[#F2F2F2] dark:bg-gray-800">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="section-label">Venues</span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mt-4">Find Unforgettable Venues</h2>
                        <p className="text-gray-500 mt-4 max-w-xl mx-auto font-medium">
                            Discover the perfect backdrop for your next masterpiece, from grand ballrooms to intimate garden retreats.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
                        {venues.map((venue, i) => (
                            <VenueCard key={i} {...venue} />
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <button className="bg-primary-600 text-white font-black uppercase tracking-widest px-10 py-5 rounded-full text-sm hover:bg-primary-700 transition-colors shadow-lg">
                            Explore All Venues
                        </button>
                    </div>
                </div>
            </section>

            {/* Value Prop Section */}
            <section className="py-40 bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=2070"
                        className="w-full h-full object-cover opacity-30"
                        alt="Sparkling Background"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-gray-900" />
                </div>

                <div className="max-w-7xl mx-auto px-8 relative z-10 flex flex-col items-center text-center">
                    <h2 className="text-5xl md:text-8xl font-black tracking-tighter max-w-5xl mb-20 leading-tight">
                        Everything <span className="text-primary-600 italic">you</span> need to plan <span className="text-primary-600 italic">your</span> event with confidence
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-12 w-full text-left">
                        <div className="space-y-6 group">
                            <div className="text-primary-600 font-black text-6xl opacity-20 group-hover:opacity-100 transition-opacity duration-500">01.</div>
                            <h4 className="text-2xl font-black uppercase tracking-widest">Smart Search</h4>
                            <p className="text-gray-400 font-medium leading-relaxed">
                                Our AI-driven matching engine connects you with vendors who align perfectly with your style, budget, and vision.
                            </p>
                        </div>
                        <div className="space-y-6 group">
                            <div className="text-primary-600 font-black text-6xl opacity-20 group-hover:opacity-100 transition-opacity duration-500">02.</div>
                            <h4 className="text-2xl font-black uppercase tracking-widest">Unified Dashboard</h4>
                            <p className="text-gray-400 font-medium leading-relaxed">
                                Manage your guest list, track your budget, and communicate with vendors all in one beautiful, intuitive workspace.
                            </p>
                        </div>
                        <div className="space-y-6 group">
                            <div className="text-primary-600 font-black text-6xl opacity-20 group-hover:opacity-100 transition-opacity duration-500">03.</div>
                            <h4 className="text-2xl font-black uppercase tracking-widest">Ariya Intel</h4>
                            <p className="text-gray-400 font-medium leading-relaxed">
                                Get real-time insights and recommendations specifically tailored to your event's unique requirements.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Always By Your Side Section */}
            <section className="py-24 px-8 bg-[#CAD4D4]">
                <div className="max-w-7xl mx-auto flex flex-col items-center">
                    <div className="text-center mb-16">
                        <span className="section-label text-navy-primary font-bold">Support</span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mt-4 text-navy-primary">Always By Your Side</h2>
                        <p className="text-navy-primary/60 mt-4 max-w-xl mx-auto font-bold uppercase text-[10px] tracking-widest">
                            Comprehensive tools for every stage
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                        {/* Green Card */}
                        <div className="bg-[#698F69] rounded-[2rem] p-10 h-[500px] flex flex-col justify-end text-white relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500 shadow-2xl">
                            <div className="absolute top-10 left-10">
                                <div className="w-12 h-1 bg-white/30 mb-4" />
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-widest mb-4">Vendor Intelligence</h3>
                            <p className="text-white/80 font-medium leading-relaxed">
                                Real-time availability, portfolio analysis, and cross-platform reviews curated for your specific event vibe.
                            </p>
                        </div>

                        {/* Orange Card */}
                        <div className="bg-[#E67E4D] rounded-[2rem] p-10 h-[500px] flex flex-col justify-end text-white relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500 shadow-2xl">
                            <div className="absolute top-10 left-10">
                                <div className="w-12 h-1 bg-white/30 mb-4" />
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-widest mb-4">Venue Matching</h3>
                            <p className="text-white/80 font-medium leading-relaxed">
                                360-degree virtual tours, floor plan simulations, and direct booking integration for exclusive partner venues.
                            </p>
                        </div>

                        {/* Teal Card */}
                        <div className="bg-[#1A7A8A] rounded-[2rem] p-10 h-[500px] flex flex-col justify-end text-white relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500 shadow-2xl">
                            <div className="absolute top-10 left-10">
                                <div className="w-12 h-1 bg-white/30 mb-4" />
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-widest mb-4">Registry & Guest List</h3>
                            <p className="text-white/80 font-medium leading-relaxed">
                                Seamless invitation tracking, RSVP management, and a unified registry supporting multi-store syncing.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Create Event Website Section */}
            <section className="py-24 px-8 bg-[#CC4024] text-white overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col items-center">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">Create Event Website</h2>
                        <p className="text-white/80 max-w-xl mx-auto font-medium leading-relaxed">
                            Elevate your event with a gorgeous, high-converting website. Customize every detail to match your theme perfectly.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-16">
                        <div className="bg-white/10 backdrop-blur-md rounded-[2rem] p-4 group hover:bg-white/20 transition-all duration-500 overflow-hidden h-[350px]">
                            <img
                                src="https://images.unsplash.com/photo-1522673607200-1648832cee98?auto=format&fit=crop&q=80&w=800"
                                className="w-full h-full object-cover rounded-[1.5rem] group-hover:scale-105 transition-transform duration-700"
                                alt="Website template 1"
                            />
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-[2rem] p-4 group hover:bg-white/20 transition-all duration-500 overflow-hidden h-[350px]">
                            <img
                                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800"
                                className="w-full h-full object-cover rounded-[1.5rem] group-hover:scale-105 transition-transform duration-700"
                                alt="Website template 2"
                            />
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-[2rem] p-4 group hover:bg-white/20 transition-all duration-500 overflow-hidden h-[350px]">
                            <img
                                src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800"
                                className="w-full h-full object-cover rounded-[1.5rem] group-hover:scale-105 transition-transform duration-700"
                                alt="Website template 3"
                            />
                        </div>
                    </div>

                    <button className="bg-white text-[#CC4024] font-black uppercase tracking-widest px-12 py-5 rounded-full text-sm hover:scale-105 transition-transform shadow-2xl">
                        Get Started Free
                    </button>
                </div>
            </section>

            {/* Video Showcase Section */}
            <VideoShowcase />



            {/* Community Section */}
            <section className="py-24 px-8 bg-[#1A1A1A] text-white">
                <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">Join Our Community</h2>
                    <p className="text-gray-400 max-w-xl mb-16 font-medium">
                        Over 200,000 planners and vendors are already using Ariya to build their dream events.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full max-w-4xl mb-16">
                        {[
                            { val: "50k+", label: "Planners" },
                            { val: "15k+", label: "Vendors" },
                            { val: "200k+", label: "Events" },
                            { val: "80+", label: "Countries" }
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <div className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-2">{stat.val}</div>
                                <div className="text-[10px] font-black uppercase tracking-widest text-primary-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    <button className="bg-white text-black font-black uppercase tracking-widest px-12 py-5 rounded-full text-sm hover:scale-105 transition-transform">
                        Join The Community
                    </button>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="relative py-32 px-6 overflow-hidden bg-[#050505]">
                {/* Horizon Light */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[50vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-600/20 via-primary-900/5 to-transparent blur-[60px] pointer-events-none opacity-60" />

                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute bg-primary-600/30 rounded-full"
                            style={{
                                width: Math.random() * 4 + 1 + 'px',
                                height: Math.random() * 4 + 1 + 'px',
                                top: Math.random() * 100 + '%',
                                left: Math.random() * 100 + '%',
                            }}
                            animate={{
                                y: [0, -100],
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: Math.random() * 10 + 10,
                                repeat: Infinity,
                                ease: "linear",
                                delay: Math.random() * 10,
                            }}
                        />
                    ))}
                </div>

                <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="space-y-10"
                    >
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight text-white drop-shadow-2xl">
                            <span className="block text-xl md:text-2xl font-bold uppercase tracking-[0.3em] text-primary-500 mb-4 font-sans">Start Your</span>
                            <span className="font-serif italic bg-gradient-to-r from-white via-primary-100 to-gray-400 bg-clip-text text-transparent">Event Planning</span>
                            <br />
                            <span className="bg-gradient-to-r from-white via-primary-100 to-gray-400 bg-clip-text text-transparent">Journey Now</span>
                        </h2>

                        <div className="flex flex-col items-center gap-6">
                            <button className="group relative bg-[#D0771E] text-white font-black uppercase tracking-widest px-14 py-6 rounded-full text-sm overflow-hidden shadow-[0_0_40px_-10px_rgba(208,119,30,0.6)] hover:shadow-[0_0_60px_-10px_rgba(208,119,30,0.8)] transition-all duration-300 hover:scale-105">
                                <span className="relative z-10 flex items-center gap-2">
                                    Get Started Free
                                    <ArrowRight className="w-4 h-4" />
                                </span>
                                {/* Shimmer Effect */}
                                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
                            </button>
                            <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
                                No credit card required • Join 200k+ planners
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}

