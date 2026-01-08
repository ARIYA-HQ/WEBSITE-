import React from 'react';
import { motion } from 'framer-motion';
import {
    Check,
    Zap,
    Crown,
    Store,
    Gift,
    Image as ImageIcon,
    Globe,
    ShieldCheck,
    ArrowRight,
    Lock,
    Unlock,
    CreditCard
} from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingPage = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <div className="min-h-screen bg-beige-100 dark:bg-gray-950 pt-32 pb-24 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#fbeee6] dark:bg-primary-900/5 rounded-bl-[200px] -z-10" />
            <div className="absolute top-1/4 -left-24 w-64 h-64 bg-orange-100 dark:bg-orange-900/10 rounded-full blur-3xl opacity-50 -z-10" />

            <div className="max-w-7xl mx-auto px-8">
                {/* Hero section */}
                <div className="text-center mb-24 max-w-4xl mx-auto">
                    <motion.div {...fadeIn}>
                        <span className="section-label mb-4 block">Pricing & Implementation</span>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-gray-900 dark:text-white mb-8 leading-[0.9]">
                            Pay for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-orange-400">leverage</span>,<br />
                            not for access.
                        </h1>
                        <p className="text-xl text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                            AriyaHQ is infrastructure for your events. No commissions on bookings.
                            Just power, scale, and professional polish when you need it.
                        </p>

                        <div className="inline-flex items-center gap-6 px-6 py-3 bg-white dark:bg-gray-900 rounded-full border border-gray-100 dark:border-gray-800 shadow-sm">
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-green-500" />
                                <span className="text-sm font-bold text-gray-900 dark:text-white">0% Commissions</span>
                            </div>
                            <div className="w-px h-4 bg-gray-200 dark:bg-gray-800" />
                            <div className="flex items-center gap-2">
                                <CreditCard className="w-5 h-5 text-primary-600" />
                                <span className="text-sm font-bold text-gray-900 dark:text-white">₦1,000 Flat Fee</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* The Three Pillars */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
                    {/* Individuals */}
                    <motion.div
                        {...fadeIn}
                        transition={{ delay: 0.1 }}
                        className="bg-white dark:bg-gray-900 rounded-[40px] p-8 border border-gray-100 dark:border-gray-800 flex flex-col group hover:scale-[1.02] transition-all duration-300"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 dark:text-orange-400 mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                            <Zap className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">Personal Planners</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
                            Perfect for individuals planning their own celebrations & weddings.
                        </p>

                        <div className="mb-8">
                            <div className="text-4xl font-black text-gray-900 dark:text-white tracking-tighter">FREE</div>
                            <div className="text-[10px] font-black uppercase text-primary-600 tracking-widest mt-1">Free Access by Default</div>
                        </div>

                        <div className="space-y-4 mb-10 flex-grow">
                            <FeatureItem text="1 Active Event Slot" />
                            <FeatureItem text="Core Planning Tools" />
                            <FeatureItem text="Vendor Discovery" />
                            <FeatureItem text="Guest List & RSVPs" />
                            <FeatureItem text="Budget Tracking" />
                            <FeatureItem text="Ariya-Branded Website" />
                        </div>

                        <button className="w-full py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-black uppercase tracking-widest text-xs hover:bg-primary-600 dark:hover:bg-primary-600 hover:text-white transition-all">
                            Start Planning Free
                        </button>
                    </motion.div>

                    {/* Pro Planners */}
                    <motion.div
                        {...fadeIn}
                        transition={{ delay: 0.2 }}
                        className="bg-gray-900 dark:bg-gray-800 rounded-[40px] p-8 border border-primary-600/30 flex flex-col relative group hover:scale-[1.02] transition-all duration-300 shadow-2xl shadow-primary-600/10"
                    >
                        <div className="absolute top-8 right-8 px-3 py-1 bg-primary-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                            Most Powerful
                        </div>
                        <div className="w-12 h-12 rounded-2xl bg-primary-600 flex items-center justify-center text-white mb-6">
                            <Crown className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-black text-white mb-2 tracking-tight">Pro Event Planners</h3>
                        <p className="text-sm text-gray-400 mb-8 leading-relaxed">
                            Professional tools for agencies and independent coordinators.
                        </p>

                        <div className="mb-8">
                            <div className="text-4xl font-black text-white tracking-tighter">₦30,000<span className="text-base font-medium opacity-50">/mo</span></div>
                            <div className="text-[10px] font-black uppercase text-primary-400 tracking-widest mt-1">Usage-Restricted SaaS</div>
                        </div>

                        <div className="space-y-4 mb-10 flex-grow text-white">
                            <FeatureItem text="Up to 10 Active Events" dark />
                            <FeatureItem text="Client-Branded Proposals" dark />
                            <FeatureItem text="Advanced Analytics" dark />
                            <FeatureItem text="Premium Registry" dark />
                            <FeatureItem text="Custom Design Access" dark />
                            <FeatureItem text="Priority Support" dark />
                        </div>

                        <button className="w-full py-4 bg-primary-600 text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/20">
                            Upgrade to Pro
                        </button>
                    </motion.div>

                    {/* Vendors */}
                    <motion.div
                        {...fadeIn}
                        transition={{ delay: 0.3 }}
                        className="bg-white dark:bg-gray-900 rounded-[40px] p-8 border border-gray-100 dark:border-gray-800 flex flex-col group hover:scale-[1.02] transition-all duration-300"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <Store className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">Service Vendors</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
                            Growth tools for caterers, photographers, and venue owners.
                        </p>

                        <div className="mb-8">
                            <div className="text-4xl font-black text-gray-900 dark:text-white tracking-tighter">₦15,000<span className="text-base font-medium opacity-50">/mo</span></div>
                            <div className="text-[10px] font-black uppercase text-blue-600 tracking-widest mt-1">Growth Visibility Tier</div>
                        </div>

                        <div className="space-y-4 mb-10 flex-grow">
                            <FeatureItem text="Growth Visibility Tools" />
                            <FeatureItem text="Premium Placement" />
                            <FeatureItem text="Category Boost" />
                            <FeatureItem text="Location-Specific Target" />
                            <FeatureItem text="Message Planners" />
                            <FeatureItem text="Unlimited Service Listings" />
                        </div>

                        <button className="w-full py-4 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-all">
                            Claim Your Profile
                        </button>
                    </motion.div>
                </div>

                {/* Paid Unlocks & Feature Matrix */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <span className="section-label">Restricted Unlocks</span>
                        <h2 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight mt-2">Scale as you grow</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <UnlockCard title="Remove Ariya Branding" price="₦9,000" icon={ShieldCheck} />
                        <UnlockCard title="Extra Event Slot" price="₦7,500" icon={Zap} />
                        <UnlockCard title="Premium Web Templates" price="₦15,000" icon={Globe} />
                        <UnlockCard title="Accelerated Payouts" price="₦6,000" icon={Zap} />
                        <UnlockCard title="White-Label Domain" price="₦15,000" icon={Globe} />
                        <UnlockCard title="Registry Branding" price="₦9,000" icon={Gift} />
                        <UnlockCard title="Custom Domain" price="₦9,000" icon={Globe} />
                        <UnlockCard title="Client Portals" price="₦30,000" icon={Lock} />
                    </div>
                </div>

                {/* Digital Products & Cards */}
                <div className="mb-32 bg-gray-900 dark:bg-gray-800 rounded-[50px] p-12 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-600/20 to-transparent pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#D0771E] mb-4 block">Ariya Design Studio</span>
                            <h2 className="text-4xl font-black text-white mb-6 leading-tight">Premium Card Designs & Event Kits</h2>
                            <p className="text-gray-400 mb-8 leading-relaxed max-w-md">
                                High-margin, professional stationery and event kits ready to use.
                                Make your celebration look like it cost millions for a fraction of the price.
                            </p>

                            <div className="grid grid-cols-2 gap-6 mb-10">
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                                    <div className="text-xs font-black uppercase text-primary-600 mb-1">Premium Cards</div>
                                    <div className="text-xl font-bold text-white mb-2">₦6,000</div>
                                    <p className="text-[10px] text-gray-500">Invitations, RSVPs, S-T-D</p>
                                </div>
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                                    <div className="text-xs font-black uppercase text-primary-600 mb-1">Design Kits</div>
                                    <div className="text-xl font-bold text-white mb-2">₦90,000+</div>
                                    <p className="text-[10px] text-gray-500">Full event visual language</p>
                                </div>
                            </div>

                            <button className="px-8 py-4 bg-white text-gray-900 rounded-full font-black uppercase tracking-widest text-xs hover:bg-primary-600 hover:text-white transition-all">
                                Browse Design Studio
                            </button>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <DesignAssetCard title="Wedding Invite Pack" color="bg-rose-500" />
                            <DesignAssetCard title="Corporate Gala Set" color="bg-indigo-600" />
                            <DesignAssetCard title="Modern RSVP QR" color="bg-emerald-500" />
                            <DesignAssetCard title="Registry Card Bundle" color="bg-amber-500" />
                        </div>
                    </div>
                </div>

                {/* Final FAQ / Policy Section */}
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-12">Transparency First</h2>
                    <div className="space-y-8 text-left">
                        <FAQItem
                            question="Why is there a ₦1,000 processing fee?"
                            answer="This covers our payment handling, escrow logic, fraud prevention, and platform infrastructure. We don't take commissions, so this flat fee ensures we can maintain the safest payment environment for planners and vendors in Nigeria."
                        />
                        <FAQItem
                            question="Can I really plan an event for free?"
                            answer="Yes. Our free tier is fully functional. You can discover vendors, manage guests, track your budget, and launch an event website without paying a kobo. You only pay when you need more power, more events, or custom branding."
                        />
                        <FAQItem
                            question="How do the 'markup' prices work?"
                            answer="Our pricing includes a 100% markup strategy. This reflects the professional value of our tools and infrastructure, ensuring we can continue building world-class technology for the Nigerian event industry without charging you commissions on your hard-earned bookings."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Helper Components
const FeatureItem = ({ text, dark = false }: { text: string; dark?: boolean }) => (
    <div className="flex items-start gap-3">
        <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${dark ? 'bg-primary-600/30 text-primary-400' : 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400'}`}>
            <Check className="w-2.5 h-2.5" />
        </div>
        <span className={`text-sm font-medium ${dark ? 'text-gray-300' : 'text-gray-600 dark:text-gray-400'}`}>{text}</span>
    </div>
);

const UnlockCard = ({ title, price, icon: Icon }: { title: string; price: string; icon: any }) => (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center group hover:border-primary-600/50 transition-all cursor-pointer">
        <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-400 group-hover:bg-primary-600 group-hover:text-white transition-all mb-4">
            <Icon className="w-4 h-4" />
        </div>
        <div className="text-xs font-black uppercase text-gray-900 dark:text-white mb-1">{title}</div>
        <div className="text-sm font-bold text-primary-600">{price}</div>
    </div>
);

const DesignAssetCard = ({ title, color }: { title: string; color: string }) => (
    <div className="aspect-[4/5] rounded-3xl bg-white/5 border border-white/10 p-6 flex flex-col justify-between group cursor-pointer overflow-hidden relative">
        <div className={`absolute top-0 right-0 w-24 h-24 ${color} blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity`} />
        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
            <ImageIcon className="w-4 h-4" />
        </div>
        <div className="relative z-10">
            <div className="text-[10px] font-black uppercase text-gray-400 mb-1">Template</div>
            <div className="text-sm font-bold text-white group-hover:text-primary-400 transition-colors uppercase tracking-tighter leading-tight">{title}</div>
        </div>
    </div>
);

const FAQItem = ({ question, answer }: { question: string; answer: string }) => (
    <div className="p-8 bg-white dark:bg-gray-900 rounded-[30px] border border-gray-100 dark:border-gray-800">
        <h4 className="text-lg font-black text-gray-900 dark:text-white mb-2">{question}</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">{answer}</p>
    </div>
);

export default PricingPage;
