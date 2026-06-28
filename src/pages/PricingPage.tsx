import React from 'react';
import { motion } from 'framer-motion';
import { Check, Lock, MessageSquare, Star, ShieldCheck, Globe, Users, BarChart2, Gift, Zap, Store, Image as ImageIcon, TrendingUp } from 'lucide-react';
import { PRICING_CONFIG } from '../config/pricing';
import Button from '../components/common/Button';

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const PricingPage = () => {
    return (
        <div className="min-h-screen bg-beige-100 dark:bg-gray-950 pt-32 pb-24 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#fbeee6] dark:bg-primary-900/5 rounded-bl-[200px] -z-10" />
            <div className="absolute top-1/4 -left-24 w-64 h-64 bg-orange-100 dark:bg-orange-900/10 rounded-full blur-3xl opacity-50 -z-10" />

            <div className="max-w-7xl mx-auto px-8">

                {/* Hero */}
                <div className="text-center mb-24 max-w-4xl mx-auto">
                    <motion.div {...fadeIn}>
                        <span className="section-label mb-4 block text-[10px] font-black uppercase tracking-widest text-primary-600">Pricing</span>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-gray-900 dark:text-white mb-6 leading-[0.9]">
                            Free to start.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-orange-400">Pay only when it matters.</span>
                        </h1>
                        <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
                            No subscriptions. Planners unlock features à la carte. Vendors pay only on completed bookings.
                        </p>

                        <div className="inline-flex flex-wrap justify-center items-center gap-5 px-6 py-3 bg-white dark:bg-gray-900 rounded-full border border-gray-100 dark:border-gray-800 shadow-sm text-sm font-bold">
                            <span className="flex items-center gap-2 text-gray-700 dark:text-gray-300"><Check className="w-4 h-4 text-green-500" /> No subscriptions</span>
                            <span className="w-px h-4 bg-gray-200 dark:bg-gray-700" />
                            <span className="flex items-center gap-2 text-gray-700 dark:text-gray-300"><Check className="w-4 h-4 text-green-500" /> Free event creation</span>
                            <span className="w-px h-4 bg-gray-200 dark:bg-gray-700" />
                            <span className="flex items-center gap-2 text-gray-700 dark:text-gray-300"><Lock className="w-4 h-4 text-primary-600" /> Escrow-backed payments</span>
                        </div>
                    </motion.div>
                </div>

                {/* Plans */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
                    {PRICING_CONFIG.plans.map((plan, idx) => (
                        <motion.div
                            key={plan.id}
                            {...fadeIn}
                            transition={{ delay: 0.1 * (idx + 1) }}
                            className={`rounded-[40px] p-8 border flex flex-col group hover:scale-[1.02] transition-all duration-300 relative ${plan.featured
                                ? 'bg-gray-900 dark:bg-gray-800 border-primary-600/30 shadow-2xl shadow-primary-600/10'
                                : 'bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800'}`}
                        >
                            {plan.badge && (
                                <div className="absolute top-8 right-8 px-3 py-1 bg-primary-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                                    {plan.badge}
                                </div>
                            )}
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${plan.featured ? 'bg-primary-600 text-white' : 'bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400'}`}>
                                <plan.icon className="w-6 h-6" />
                            </div>
                            <h3 className={`text-2xl font-black mb-2 tracking-tight ${plan.featured ? 'text-white' : 'text-gray-900 dark:text-white'}`}>{plan.name}</h3>
                            <p className={`text-sm mb-6 leading-relaxed ${plan.featured ? 'text-gray-400' : 'text-gray-500 dark:text-gray-400'}`}>{plan.description}</p>
                            <div className="mb-8">
                                <div className={`text-4xl font-black tracking-tighter ${plan.featured ? 'text-white' : 'text-gray-900 dark:text-white'}`}>{plan.price}</div>
                                <div className={`text-[10px] font-black uppercase tracking-widest mt-1 ${plan.featured ? 'text-primary-400' : 'text-primary-600'}`}>{plan.priceSub}</div>
                            </div>
                            <div className="space-y-3 mb-10 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${plan.featured ? 'bg-primary-600/30 text-primary-400' : 'bg-green-50 dark:bg-green-900/20 text-green-600'}`}>
                                            <Check className="w-2.5 h-2.5" />
                                        </div>
                                        <span className={`text-sm ${plan.featured ? 'text-gray-300' : 'text-gray-600 dark:text-gray-400'}`}>{feature}</span>
                                    </div>
                                ))}
                            </div>
                            <a href="https://app.ariyahq.com/auth/login">
                                <Button variant={plan.featured ? 'primary' : plan.id === 'vendor' ? 'outline' : 'dark'} fullWidth>{plan.buttonText}</Button>
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* Fee Breakdown */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <span className="text-[10px] font-black uppercase tracking-widest text-primary-600">How fees work</span>
                        <h2 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight mt-2">Transparent. No surprises.</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                label: 'Vendor Bookings',
                                rate: '7%',
                                sub: 'of completed booking payout',
                                detail: 'Only charged when a booking is completed and confirmed. Zero fee on inquiries, quotes, or cancellations.',
                                accent: 'border-t-primary-600',
                            },
                            {
                                label: 'Gift Registry',
                                rate: '10%',
                                sub: 'on planner withdrawal',
                                detail: '8% Ariya + 2% Paystack processing. Guests always pay the exact price you set — no hidden markup.',
                                accent: 'border-t-orange-400',
                            },
                            {
                                label: 'Ticket Sales',
                                rate: '3%',
                                sub: 'of organiser payout',
                                detail: 'Attendees pay what you set. The 3% is only deducted from your withdrawal — no buyer-facing fees.',
                                accent: 'border-t-emerald-500',
                            },
                        ].map(({ label, rate, sub, detail, accent }) => (
                            <div key={label} className={`p-8 bg-white dark:bg-gray-900 rounded-[32px] border-t-4 border border-gray-100 dark:border-gray-800 ${accent}`}>
                                <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">{label}</div>
                                <div className="text-5xl font-black text-gray-900 dark:text-white tracking-tighter mb-1">{rate}</div>
                                <div className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-4">{sub}</div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{detail}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Ariya Guarantee */}
                <div className="mb-24 bg-gray-900 dark:bg-gray-800 rounded-[50px] p-10 md:p-14 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-600/10 to-transparent pointer-events-none" />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 items-center">
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-4 block">Ariya Guarantee</span>
                            <h2 className="text-3xl md:text-4xl font-black text-white mb-5 leading-tight">Escrow-backed protection. Free for vendors.</h2>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Client funds are held in escrow at booking and released automatically 48 hours after the event. Planners can filter for Guarantee vendors — giving you a real edge at zero cost.
                            </p>
                            <div className="flex flex-col gap-3">
                                {['Funds held securely at booking', 'Auto-released 48hrs post-event', 'Planners can filter for you', 'Free to enable — always'].map(text => (
                                    <div key={text} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                                            <Check className="w-3 h-3 text-emerald-400" />
                                        </div>
                                        <span className="text-sm text-gray-300">{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: 'Booking Made', sub: 'Funds held in escrow', color: 'border-emerald-500/30 bg-emerald-500/10' },
                                { label: 'Event Delivered', sub: 'Planner confirms', color: 'border-blue-500/30 bg-blue-500/10' },
                                { label: 'Auto-Release', sub: '48hrs after event', color: 'border-primary-500/30 bg-primary-500/10' },
                                { label: 'You Get Paid', sub: 'Minus 7% platform fee', color: 'border-amber-500/30 bg-amber-500/10' },
                            ].map(({ label, sub, color }) => (
                                <div key={label} className={`p-5 rounded-3xl border ${color} min-h-[110px] flex flex-col justify-between`}>
                                    <Lock className="w-4 h-4 text-white/40 mb-2" />
                                    <div>
                                        <div className="text-sm font-black text-white">{label}</div>
                                        <div className="text-xs text-gray-400 mt-0.5">{sub}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Vendor Verified Badge */}
                <div className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-amber-500 mb-4 block">Verified Badge</span>
                        <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-5 leading-tight tracking-tight">Build trust. Get booked faster.</h2>
                        <p className="text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                            Submit your NIN or CAC. Our team reviews in 24–48 hours and adds a permanent verified badge to your profile. Planners can filter their search to verified vendors only.
                        </p>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="text-5xl font-black text-gray-900 dark:text-white">₦30,000</div>
                            <div>
                                <div className="text-[10px] font-black uppercase tracking-widest text-primary-600">One-time · Permanent</div>
                                <div className="text-xs text-gray-400 mt-0.5">No annual renewal</div>
                            </div>
                        </div>
                        <a href="https://app.ariyahq.com/dashboard/vendor/badges">
                            <Button variant="dark">Get Verified</Button>
                        </a>
                    </div>
                    <div className="space-y-3">
                        {[
                            { step: '01', title: 'Pay ₦30,000 via Paystack', sub: 'Secure one-time payment' },
                            { step: '02', title: 'Upload your documents', sub: 'NIN, CAC, or face photo' },
                            { step: '03', title: 'Review in 24–48 hrs', sub: 'Our team checks and approves' },
                            { step: '04', title: 'Badge on profile', sub: 'Permanent — no renewal needed' },
                        ].map(({ step, title, sub }) => (
                            <div key={step} className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                                <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[10px] font-black text-amber-500">{step}</span>
                                </div>
                                <div>
                                    <div className="text-sm font-black text-gray-900 dark:text-white">{title}</div>
                                    <div className="text-xs text-gray-400 mt-0.5">{sub}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* SMS Bundles */}
                <div className="mb-24">
                    <div className="text-center mb-10">
                        <span className="text-[10px] font-black uppercase tracking-widest text-primary-600">SMS Notifications</span>
                        <h2 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight mt-2">Reach guests directly on their phones.</h2>
                        <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-lg mx-auto">
                            RSVP reminders, day-of updates, thank-you messages — delivered as SMS. Credits are per-event and never expire.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                        {PRICING_CONFIG.smsBundles.map(({ label, price }) => (
                            <div key={label} className="p-8 bg-white dark:bg-gray-900 rounded-[32px] border border-gray-100 dark:border-gray-800 text-center hover:border-primary-600/40 transition-all">
                                <MessageSquare className="w-7 h-7 text-primary-600 mx-auto mb-4" />
                                <div className="text-2xl font-black text-gray-900 dark:text-white mb-1">{label}</div>
                                <div className="text-lg font-bold text-primary-600 mb-3">{price}</div>
                                <div className="text-xs text-gray-400">Per-event · Never expire</div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PricingPage;
