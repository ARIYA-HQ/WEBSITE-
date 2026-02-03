import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Star, Shield, Zap, Instagram, Twitter, Linkedin, Users, Camera, Briefcase, Heart, Gift, Building2, Baby, Share2, Copy, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '../components/ThemeToggle';

type UserRole = 'individual' | 'pro' | 'vendor';

export default function WaitlistPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: 'individual' as UserRole
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch('http://localhost:3001/api/waitlist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                const data = await response.json();
                alert(data.error || 'Failed to join waitlist');
            }
        } catch (error) {
            console.error('Waitlist error:', error);
            alert('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const copyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const eventTypes = [
        { icon: <Heart className="w-4 h-4" />, label: "Weddings" },
        { icon: <Gift className="w-4 h-4" />, label: "Parties" },
        { icon: <Building2 className="w-4 h-4" />, label: "Corporate" },
        { icon: <Baby className="w-4 h-4" />, label: "Baby Showers" },
    ];

    const incentives = [
        { title: "Early Access", desc: "Get in before the public launch", icon: <Zap className="w-5 h-5 text-primary-600" /> },
        { title: "Priority Booking", desc: "First access to top vendors", icon: <Star className="w-5 h-5 text-primary-600" /> },
        { title: "Shape the Product", desc: "Influence Ariya with beta feedback", icon: <Shield className="w-5 h-5 text-primary-600" /> },
    ];

    return (
        <main className="min-h-screen bg-beige-50 dark:bg-gray-950 flex flex-col lg:flex-row overflow-hidden relative">
            {/* Top Navigation Overlay - High Visibility */}
            <div className="fixed top-8 left-8 right-8 flex justify-between items-center z-[100] pointer-events-none">
                <Link
                    to="/"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-gray-900 shadow-2xl border border-gray-100 dark:border-gray-800 text-[10px] font-black uppercase tracking-widest text-gray-900 dark:text-gray-100 hover:scale-105 transition-all pointer-events-auto"
                >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back Home
                </Link>
                <div className="bg-white dark:bg-gray-900 shadow-2xl border border-gray-100 dark:border-gray-800 rounded-full p-1 pointer-events-auto">
                    <ThemeToggle />
                </div>
            </div>

            {/* Left Section: Content */}
            <div className="flex-1 p-8 lg:p-20 xl:p-24 flex flex-col justify-center relative overflow-y-auto">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100/40 dark:bg-primary-900/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-2xl relative z-10"
                >
                    <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-[1.1] text-gray-900 dark:text-white mb-6">
                        Plan any event. Find every vendor. <br />
                        <span className="text-primary-600">All in one place.</span>
                    </h1>

                    <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 font-medium leading-relaxed max-w-xl">
                        Ariya is an all-in-one event planning and vendor marketplace for weddings, parties, and corporate events.
                    </p>

                    {/* Event Types */}
                    <div className="flex flex-wrap gap-4 mb-12">
                        {eventTypes.map((type, i) => (
                            <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-full border border-gray-100 dark:border-gray-800 shadow-sm text-xs font-bold text-gray-600 dark:text-gray-300">
                                {type.icon} {type.label}
                            </div>
                        ))}
                    </div>

                    <AnimatePresence mode="wait">
                        {!submitted ? (
                            <motion.div
                                key="form-container"
                                className="bg-white dark:bg-gray-900 p-8 lg:p-10 rounded-[2.5rem] shadow-2xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800 relative mb-12"
                            >
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-4 md:col-span-2">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">Join as a</label>
                                            <div className="grid grid-cols-3 gap-3">
                                                <RoleButton
                                                    active={formData.role === 'individual'}
                                                    onClick={() => setFormData(prev => ({ ...prev, role: 'individual' }))}
                                                    label="Planner"
                                                />
                                                <RoleButton
                                                    active={formData.role === 'pro'}
                                                    onClick={() => setFormData(prev => ({ ...prev, role: 'pro' }))}
                                                    label="Agency"
                                                />
                                                <RoleButton
                                                    active={formData.role === 'vendor'}
                                                    onClick={() => setFormData(prev => ({ ...prev, role: 'vendor' }))}
                                                    label="Vendor"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <input
                                                type="text"
                                                required
                                                placeholder="Your Name"
                                                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                                className="w-full h-14 bg-gray-50 dark:bg-gray-800 border-none rounded-2xl px-6 text-gray-900 dark:text-white font-bold outline-none focus:ring-2 focus:ring-primary-600 transition-all placeholder:text-gray-300 dark:placeholder:text-gray-600 text-sm"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <input
                                                type="email"
                                                required
                                                placeholder="Email Address"
                                                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                                className="w-full h-14 bg-gray-50 dark:bg-gray-800 border-none rounded-2xl px-6 text-gray-900 dark:text-white font-bold outline-none focus:ring-2 focus:ring-primary-600 transition-all placeholder:text-gray-300 dark:placeholder:text-gray-600 text-sm"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full h-16 bg-primary-600 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-primary-700 transition-all flex items-center justify-center gap-3 disabled:opacity-50 shadow-lg shadow-primary-600/20 group"
                                    >
                                        {loading ? (
                                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        ) : (
                                            <>Join the Ariya Waitlist <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                                        )}
                                    </button>
                                </form>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                className="p-10 lg:p-12 bg-white dark:bg-gray-900 rounded-[2.5rem] flex flex-col items-center text-center gap-8 shadow-2xl relative overflow-hidden mb-12 border border-gray-100 dark:border-gray-800"
                            >
                                <div className="absolute top-0 right-0 w-48 h-48 bg-primary-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                                <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center relative z-10 animate-bounce shadow-lg shadow-primary-600/20">
                                    <span className="text-4xl">🎉</span>
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-4">You're on the list!</h3>

                                    <div className="space-y-6 text-left max-w-sm mx-auto bg-gray-50 dark:bg-gray-800/50 p-6 rounded-3xl border border-gray-100 dark:border-gray-800">
                                        <div>
                                            <div className="text-[10px] font-black uppercase tracking-widest text-primary-500 mb-1">What Happens Next</div>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 font-bold">We'll email you a personalized onboarding link as soon as your spot is ready.</p>
                                        </div>
                                        <div className="flex gap-4">
                                            <button
                                                onClick={copyLink}
                                                className="flex-1 h-12 bg-white dark:bg-gray-700 rounded-xl flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-900 dark:text-white border border-gray-100 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition-all"
                                            >
                                                {copied ? 'Copied!' : <><Copy className="w-3 h-3" /> Copy Link</>}
                                            </button>
                                            <div className="flex gap-2">
                                                <button className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-xl flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-all"><Twitter className="w-4 h-4" /></button>
                                                <button className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-xl flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-all"><Instagram className="w-4 h-4" /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-primary-600 transition-colors relative z-10"
                                >
                                    Dismiss
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Incentives */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {incentives.map((item, i) => (
                            <div key={i} className="space-y-2">
                                <div className="p-2 w-fit bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                                    {item.icon}
                                </div>
                                <h4 className="text-xs font-black uppercase tracking-widest text-gray-900 dark:text-white">{item.title}</h4>
                                <p className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Right Section: Visual */}
            <div className="flex-1 relative hidden lg:block overflow-hidden bg-gray-950">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <img
                        src="/WEBSITE-/waitlist_new_hero_image_1770111190984.png"
                        alt="The Ariya Experience"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/20 to-transparent" />
                </motion.div>

                {/* Social Proof */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-12 right-12 bg-white/5 backdrop-blur-2xl p-6 rounded-3xl border border-white/10 shadow-2xl flex items-center gap-4"
                >
                    <div className="flex -space-x-3">
                        {[1, 2, 3, 4].map(i => (
                            <img key={i} src={`https://i.pravatar.cc/100?u=waitlist${i}`} className="w-10 h-10 rounded-full border-2 border-gray-900" alt="User" />
                        ))}
                    </div>
                    <div>
                        <div className="text-xl font-black text-white">Join 12,000+</div>
                        <div className="text-[10px] font-bold text-primary-500 uppercase tracking-widest">Early Adopters</div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}

function RoleButton({ active, onClick, label }: { active: boolean, onClick: () => void, label: string }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`flex items-center justify-center h-12 rounded-xl border-2 transition-all ${active
                ? 'bg-primary-50 dark:bg-primary-900/30 border-primary-600 text-primary-600 font-black'
                : 'bg-transparent border-gray-100 dark:border-gray-800 text-gray-400 hover:border-gray-200 dark:hover:border-gray-700 font-bold'}`}
        >
            <span className="text-[10px] uppercase tracking-widest">{label}</span>
        </button>
    );
}
