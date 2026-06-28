import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Check, Image as ImageIcon, Lock, MessageSquare, Star } from 'lucide-react';
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
                        <span className="section-label mb-4 block text-[10px] font-black uppercase tracking-widest text-primary-600">Pricing & Fees</span>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-gray-900 dark:text-white mb-8 leading-[0.9]">
                            Free to use.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-orange-400">Pay only when you earn.</span>
                        </h1>
                        <p className="text-xl text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                            No subscriptions. No upfront costs. Planners unlock premium features à la carte.
                            Vendors pay a 7% fee only on completed bookings.
                        </p>

                        <div className="inline-flex flex-wrap justify-center items-center gap-6 px-6 py-3 bg-white dark:bg-gray-900 rounded-full border border-gray-100 dark:border-gray-800 shadow-sm">
                            {[
                                { icon: ShieldCheck, label: 'No Subscriptions', color: 'text-green-500' },
                                { icon: ShieldCheck, label: 'Free Event Creation', color: 'text-green-500' },
                                { icon: Lock, label: 'Ariya Guarantee (Escrow)', color: 'text-primary-600' },
                                { icon: Star, label: 'Verified Badge Programme', color: 'text-amber-500' },
                            ].map(({ icon: Icon, label, color }, i) => (
                                <React.Fragment key={label}>
                                    {i > 0 && <div className="w-px h-4 bg-gray-200 dark:bg-gray-800" />}
                                    <div className="flex items-center gap-2">
                                        <Icon className={`w-5 h-5 ${color}`} />
                                        <span className="text-sm font-bold text-gray-900 dark:text-white">{label}</span>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Plans */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
                    {PRICING_CONFIG.plans.map((plan, idx) => (
                        <motion.div
                            key={plan.id}
                            {...fadeIn}
                            transition={{ delay: 0.1 * (idx + 1) }}
                            className={`rounded-[40px] p-8 border flex flex-col group hover:scale-[1.02] transition-all duration-300 relative ${plan.featured
                                ? 'bg-gray-900 dark:bg-gray-800 border-primary-600/30 shadow-2xl shadow-primary-600/10'
                                : 'bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800'
                                }`}
                        >
                            {plan.badge && (
                                <div className="absolute top-8 right-8 px-3 py-1 bg-primary-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                                    {plan.badge}
                                </div>
                            )}
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${plan.featured ? 'bg-primary-600 text-white' : 'bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400'}`}>
                                <plan.icon className="w-6 h-6" />
                            </div>
                            <h3 className={`text-2xl font-black mb-2 tracking-tight ${plan.featured ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                                {plan.name}
                            </h3>
                            <p className={`text-sm mb-6 leading-relaxed ${plan.featured ? 'text-gray-400' : 'text-gray-500 dark:text-gray-400'}`}>
                                {plan.description}
                            </p>
                            <div className="mb-8">
                                <div className={`text-4xl font-black tracking-tighter ${plan.featured ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                                    {plan.price}
                                </div>
                                <div className={`text-[10px] font-black uppercase tracking-widest mt-1 ${plan.featured ? 'text-primary-400' : 'text-primary-600'}`}>
                                    {plan.priceSub}
                                </div>
                            </div>
                            <div className="space-y-4 mb-10 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <FeatureItem key={i} text={feature} dark={plan.featured} />
                                ))}
                            </div>
                            <a href="https://app.ariyahq.com/auth/login">
                                <Button variant={plan.featured ? 'primary' : plan.id === 'vendor' ? 'outline' : 'dark'} fullWidth>
                                    {plan.buttonText}
                                </Button>
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* Fee Breakdown */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <span className="section-label text-[10px] font-black uppercase tracking-widest text-[#D0771E]">Platform Fees</span>
                        <h2 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight mt-2">Transparent. No surprises.</h2>
                        <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto font-medium">Every fee is disclosed upfront. No hidden charges, no percentage taken from planners.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                label: 'Vendor Bookings',
                                rate: '7%',
                                sub: 'of completed booking payout',
                                detail: 'Deducted from vendor payout after service delivery is confirmed. Zero fee on inquiries, quotes, or cancellations.',
                                color: 'border-t-primary-600',
                            },
                            {
                                label: 'Gift Registry',
                                rate: '10%',
                                sub: 'on planner withdrawal',
                                detail: '8% Ariya platform fee + 2% Paystack processing. Buyers always pay the face value you set — no markup to guests.',
                                color: 'border-t-orange-400',
                            },
                            {
                                label: 'Ticket Sales',
                                rate: '3%',
                                sub: 'of organiser payout',
                                detail: 'Deducted from your payout at withdrawal. Attendees pay exactly the price you set — we never add buyer fees.',
                                color: 'border-t-emerald-500',
                            },
                        ].map(({ label, rate, sub, detail, color }) => (
                            <div key={label} className={`p-8 bg-white dark:bg-gray-900 rounded-[32px] border-t-4 border border-gray-100 dark:border-gray-800 ${color}`}>
                                <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">{label}</div>
                                <div className="text-5xl font-black text-gray-900 dark:text-white tracking-tighter mb-1">{rate}</div>
                                <div className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-4">{sub}</div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{detail}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Ariya Guarantee */}
                <div className="mb-32 bg-gray-900 dark:bg-gray-800 rounded-[50px] p-12 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-600/10 to-transparent pointer-events-none" />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 items-center">
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-4 block">Ariya Guarantee</span>
                            <h2 className="text-4xl font-black text-white mb-6 leading-tight">Escrow-backed protection. Free for vendors.</h2>
                            <p className="text-gray-400 mb-8 leading-relaxed font-medium">
                                When a vendor opts into the Ariya Guarantee, client funds are held in escrow and
                                automatically released 48 hours after the event — or immediately on planner confirmation.
                                Planners can filter specifically for Guarantee vendors, giving you a competitive edge at zero cost.
                            </p>
                            <div className="flex flex-col gap-3">
                                {[
                                    'Client funds secured in escrow at booking',
                                    'Auto-release 48hrs after your event date',
                                    'Planners can filter for Guarantee vendors',
                                    'Free to opt in — no subscription required',
                                ].map(text => (
                                    <div key={text} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                                            <Check className="w-3 h-3 text-emerald-400" />
                                        </div>
                                        <span className="text-sm text-gray-300 font-medium">{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: 'Booking Made', sub: 'Funds held in escrow', color: 'bg-emerald-500/20 border-emerald-500/30' },
                                { label: 'Event Delivered', sub: 'Planner confirms', color: 'bg-blue-500/20 border-blue-500/30' },
                                { label: 'Auto-Release', sub: '48hrs after event', color: 'bg-primary-500/20 border-primary-500/30' },
                                { label: 'You Get Paid', sub: 'Minus 7% platform fee', color: 'bg-amber-500/20 border-amber-500/30' },
                            ].map(({ label, sub, color }) => (
                                <div key={label} className={`p-6 rounded-3xl border ${color} flex flex-col justify-between min-h-[120px]`}>
                                    <Lock className="w-5 h-5 text-white/50 mb-3" />
                                    <div>
                                        <div className="text-sm font-black text-white">{label}</div>
                                        <div className="text-xs text-gray-400 mt-1">{sub}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Verified Badge */}
                <div className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-amber-500 mb-4 block">Vendor Verified Badge</span>
                        <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-6 leading-tight tracking-tight">
                            Build trust. Stand out. Get booked faster.
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed font-medium">
                            Submit your NIN or CAC documents. Our team reviews within 24–48 hours.
                            Your profile gets a permanent verified badge — and planners can filter their search to verified vendors only.
                        </p>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="text-5xl font-black text-gray-900 dark:text-white tracking-tighter">₦30,000</div>
                            <div>
                                <div className="text-[10px] font-black uppercase tracking-widest text-primary-600">One-time · Permanent</div>
                                <div className="text-xs text-gray-400 mt-1">No annual renewal</div>
                            </div>
                        </div>
                        <a href="https://app.ariyahq.com/dashboard/vendor/badges">
                            <Button variant="dark">Get Verified</Button>
                        </a>
                    </div>
                    <div className="bg-white dark:bg-gray-900 rounded-[40px] border border-gray-100 dark:border-gray-800 p-8 space-y-4">
                        {[
                            { step: '01', title: 'Pay ₦30,000 via Paystack', sub: 'Secure one-time payment' },
                            { step: '02', title: 'Upload your documents', sub: 'NIN, CAC, or face photo' },
                            { step: '03', title: 'Review within 24–48 hrs', sub: 'Our team checks and approves' },
                            { step: '04', title: 'Verified badge on profile', sub: 'Permanent — no renewal' },
                        ].map(({ step, title, sub }) => (
                            <div key={step} className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-gray-800">
                                <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest">{step}</span>
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
                <div className="mb-32">
                    <div className="text-center mb-12">
                        <span className="section-label text-[10px] font-black uppercase tracking-widest text-[#D0771E]">SMS Guest Notifications</span>
                        <h2 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight mt-2">Reach every guest. Even without WhatsApp.</h2>
                        <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto font-medium">
                            Send RSVP reminders, day-of alerts, and thank-you messages directly to guests' phones. Credits are per-event and never expire.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                        {PRICING_CONFIG.smsBundles.map(({ label, price }) => (
                            <div key={label} className="p-8 bg-white dark:bg-gray-900 rounded-[32px] border border-gray-100 dark:border-gray-800 text-center group hover:border-primary-600/40 transition-all">
                                <MessageSquare className="w-8 h-8 text-primary-600 mx-auto mb-4" />
                                <div className="text-3xl font-black text-gray-900 dark:text-white tracking-tighter mb-1">{label}</div>
                                <div className="text-lg font-bold text-primary-600 mb-4">{price}</div>
                                <div className="text-xs text-gray-400 font-medium">Per-event · Never expire</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Paid Unlocks Grid */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <span className="section-label text-[10px] font-black uppercase tracking-widest text-[#D0771E]">À La Carte Unlocks</span>
                        <h2 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight mt-2">Scale as you grow</h2>
                        <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto font-medium">One-time unlocks for specific capabilities. Pay once, use forever on that event.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {PRICING_CONFIG.unlocks.map((unlock, i) => (
                            <UnlockCard key={i} {...unlock} />
                        ))}
                    </div>
                </div>

                {/* Design Studio */}
                <div className="mb-32 bg-gray-900 dark:bg-gray-800 rounded-[50px] p-12 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-600/20 to-transparent pointer-events-none" />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#D0771E] mb-4 block">Ariya Design Studio</span>
                            <h2 className="text-4xl font-black text-white mb-6 leading-tight">Premium Card Designs & Event Kits</h2>
                            <p className="text-gray-400 mb-8 leading-relaxed max-w-md font-medium">
                                Professional stationery and event kits ready to use.
                                Make your celebration look like it cost millions, for a fraction of the price.
                            </p>
                            <div className="grid grid-cols-2 gap-6 mb-10">
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                                    <div className="text-xs font-black uppercase text-primary-600 mb-1">Premium Cards</div>
                                    <div className="text-xl font-bold text-white mb-2">₦3,000+</div>
                                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Single to Bundle</p>
                                </div>
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                                    <div className="text-xs font-black uppercase text-primary-600 mb-1">Design Kits</div>
                                    <div className="text-xl font-bold text-white mb-2">₦90,000–₦150k</div>
                                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Full visual language</p>
                                </div>
                            </div>
                            <a href="https://app.ariyahq.com/auth/login">
                                <Button variant="white">Browse Design Studio</Button>
                            </a>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <DesignAssetCard title="Wedding Invite Pack" color="bg-rose-500" />
                            <DesignAssetCard title="Corporate Gala Set" color="bg-indigo-600" />
                            <DesignAssetCard title="Modern RSVP QR" color="bg-emerald-500" />
                            <DesignAssetCard title="Registry Card Bundle" color="bg-amber-500" />
                        </div>
                    </div>
                </div>

                {/* FAQs */}
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-12 text-center">Pricing FAQ</h2>
                    <div className="space-y-4">
                        {PRICING_CONFIG.faqs.map((faq, i) => (
                            <FAQItem key={i} {...faq} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const FeatureItem = ({ text, dark = false }: { text: string; dark?: boolean }) => (
    <div className="flex items-start gap-3">
        <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${dark ? 'bg-primary-600/30 text-primary-400' : 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400'}`}>
            <Check className="w-2.5 h-2.5" />
        </div>
        <span className={`text-sm font-medium ${dark ? 'text-gray-300' : 'text-gray-600 dark:text-gray-400'}`}>{text}</span>
    </div>
);

const UnlockCard = ({ title, price, icon: Icon }: { title: string; price: string; icon: any }) => (
    <a
        href="https://app.ariyahq.com/auth/login"
        className="p-6 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center group hover:border-primary-600/50 transition-all"
    >
        <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-400 group-hover:bg-primary-600 group-hover:text-white transition-all mb-4">
            <Icon className="w-4 h-4" />
        </div>
        <div className="text-xs font-black uppercase tracking-widest text-gray-900 dark:text-white mb-1">{title}</div>
        <div className="text-sm font-bold text-primary-600">{price}</div>
    </a>
);

const DesignAssetCard = ({ title, color }: { title: string; color: string }) => (
    <a
        href="https://app.ariyahq.com/auth/login"
        className="aspect-[4/5] w-full rounded-3xl bg-white/5 border border-white/10 p-6 flex flex-col justify-between group overflow-hidden relative text-left"
    >
        <div className={`absolute top-0 right-0 w-24 h-24 ${color} blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity`} />
        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
            <ImageIcon className="w-4 h-4" />
        </div>
        <div className="relative z-10">
            <div className="text-[10px] font-black uppercase text-gray-400 mb-1 tracking-widest">Template</div>
            <div className="text-sm font-bold text-white group-hover:text-primary-400 transition-colors uppercase tracking-tighter leading-tight">{title}</div>
        </div>
    </a>
);

const FAQItem = ({ question, answer }: { question: string; answer: string }) => (
    <div className="p-8 bg-white dark:bg-gray-900 rounded-[30px] border border-gray-100 dark:border-gray-800">
        <h4 className="text-lg font-black text-gray-900 dark:text-white mb-2">{question}</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">{answer}</p>
    </div>
);

export default PricingPage;
