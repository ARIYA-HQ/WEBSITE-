import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, LayoutDashboard, Kanban, Store, Calculator, Globe, Search, List, UserPlus, FileText, Copy, Award, LifeBuoy, HelpCircle, Star, Bot } from 'lucide-react';
import NavDropdown from '../NavDropdown';
import MobileNav from './MobileNav';
import { ThemeToggle } from '../ThemeToggle';

export default function Header() {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-b border-white/20 dark:border-gray-800 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-black tracking-tighter text-primary-600">ÀRIYÁ</Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-8">
                    {/* 1. PRODUCT */}
                    <NavDropdown
                        title="Product"
                        activeDropdown={activeDropdown}
                        setActiveDropdown={setActiveDropdown}
                    >
                        <div className="flex w-[800px]">
                            <div className="flex-1 p-8 bg-white dark:bg-gray-900">
                                <div className="text-[10px] font-black uppercase tracking-widest text-[#D0771E] mb-6">Platform Overview</div>
                                <div className="grid grid-cols-2 gap-8">
                                    <Link to="/product/overview" className="flex gap-4 group">
                                        <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 dark:text-orange-400 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                                            <LayoutDashboard className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-gray-900 dark:text-white mb-1">Overview</div>
                                            <div className="text-xs text-gray-500 dark:text-gray-400">The complete platform summary</div>
                                        </div>
                                    </Link>
                                    <Link to="/product/planning" className="flex gap-4 group">
                                        <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                            <Kanban className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-gray-900 dark:text-white mb-1">Planning Dashboard</div>
                                            <div className="text-xs text-gray-500 dark:text-gray-400">Your central command center</div>
                                        </div>
                                    </Link>
                                    <Link to="/product/ai-planning" className="flex gap-4 group">
                                        <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                            <Bot className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-gray-900 dark:text-white mb-1">AI Planning</div>
                                            <div className="text-xs text-gray-500 dark:text-gray-400">Smart assistance & insights</div>
                                        </div>
                                    </Link>
                                    <Link to="/product/marketplace" className="flex gap-4 group">
                                        <div className="w-10 h-10 rounded-xl bg-pink-50 dark:bg-pink-900/20 flex items-center justify-center text-pink-600 dark:text-pink-400 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                                            <Store className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-gray-900 dark:text-white mb-1">Vendor Marketplace</div>
                                            <div className="text-xs text-gray-500 dark:text-gray-400">Connect with top pros</div>
                                        </div>
                                    </Link>
                                    <Link to="/product/finance" className="flex gap-4 group">
                                        <div className="w-10 h-10 rounded-xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600 dark:text-green-400 group-hover:bg-green-600 group-hover:text-white transition-colors">
                                            <Calculator className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-gray-900 dark:text-white mb-1">Budget & Guest List</div>
                                            <div className="text-xs text-gray-500 dark:text-gray-400">Manage finances & RSVPs</div>
                                        </div>
                                    </Link>
                                    <Link to="/product/websites" className="flex gap-4 group">
                                        <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                            <Globe className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-gray-900 dark:text-white mb-1">Websites & Registry</div>
                                            <div className="text-xs text-gray-500 dark:text-gray-400">Share your story</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="w-64 bg-gray-50 dark:bg-gray-800/50 p-6 flex flex-col justify-end relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 dark:bg-primary-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                                <div className="relative z-10">
                                    <div className="text-[10px] font-black uppercase tracking-widest text-primary-600 mb-2">New Feature</div>
                                    <div className="font-bold text-gray-900 dark:text-white mb-2">AI Contract Analysis</div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">Upload any vendor contract and get instant analysis.</p>
                                    <a href="#" className="text-xs font-bold uppercase tracking-widest text-[#D0771E] flex items-center gap-1 hover:gap-2 transition-all">
                                        Try It Now <ArrowRight className="w-3 h-3" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </NavDropdown>

                    {/* 2. SOLUTIONS */}
                    <NavDropdown
                        title="Solutions"
                        activeDropdown={activeDropdown}
                        setActiveDropdown={setActiveDropdown}
                    >
                        <div className="flex w-[600px]">
                            <div className="flex-1 p-8 bg-white dark:bg-gray-900">
                                <div className="text-[10px] font-black uppercase tracking-widest text-[#D0771E] mb-6">Solutions</div>
                                <div className="space-y-6">
                                    <Link to="/solutions/agencies" className="block group">
                                        <div className="text-sm font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 transition-colors">For Agencies</div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400">Scale your business with ease</div>
                                    </Link>
                                    <Link to="/solutions/vendors" className="block group">
                                        <div className="text-sm font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 transition-colors">For Vendors</div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400">Get booked and paid faster</div>
                                    </Link>
                                    <Link to="/solutions/enterprise" className="block group">
                                        <div className="text-sm font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 transition-colors">Enterprise</div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400">Custom solutions for large teams</div>
                                    </Link>
                                </div>
                            </div>
                            <div className="w-48 bg-[#F5F5F0] dark:bg-gray-800 p-6">
                                <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6">Industries</div>
                                <ul className="space-y-4 text-xs font-bold text-gray-600 dark:text-gray-300">
                                    <li className="hover:text-primary-600 cursor-pointer">Weddings</li>
                                    <li className="hover:text-primary-600 cursor-pointer">Corporate</li>
                                    <li className="hover:text-primary-600 cursor-pointer">Non-Profit</li>
                                    <li className="hover:text-primary-600 cursor-pointer">Festivals</li>
                                </ul>
                            </div>
                        </div>
                    </NavDropdown>

                    {/* 3. VENDORS */}
                    <NavDropdown
                        title="Vendors"
                        activeDropdown={activeDropdown}
                        setActiveDropdown={setActiveDropdown}
                    >
                        <div className="flex w-[600px]">
                            <div className="flex-1 p-8 bg-white dark:bg-gray-900">
                                <div className="text-[10px] font-black uppercase tracking-widest text-[#D0771E] mb-6">Marketplace</div>
                                <div className="space-y-4">
                                    <a href="#" className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                                        <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 dark:text-orange-400">
                                            <Search className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">Browse Vendors</div>
                                            <div className="text-xs text-gray-500 dark:text-gray-400">Explore the network</div>
                                        </div>
                                    </a>
                                    <a href="#" className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                                        <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                            <List className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">Vendor Categories</div>
                                            <div className="text-xs text-gray-500 dark:text-gray-400">Find by type</div>
                                        </div>
                                    </a>
                                    <a href="#" className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                                        <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
                                            <Star className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">Featured Vendors</div>
                                            <div className="text-xs text-gray-500 dark:text-gray-400">Top rated pros</div>
                                        </div>
                                    </a>
                                    <div className="h-px bg-gray-100 my-2" />
                                    <a href="#" className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                                        <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center text-green-600 dark:text-green-400">
                                            <UserPlus className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">Become a Vendor</div>
                                            <div className="text-xs text-gray-500 dark:text-gray-400">Join Ariya</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="w-48 bg-orange-50 dark:bg-gray-800 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-200 dark:bg-orange-900/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-50" />
                                <div className="w-12 h-12 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-lg mb-3 text-[#D0771E] relative z-10">
                                    <Star className="w-5 h-5 fill-current" />
                                </div>
                                <div className="text-xs font-bold text-gray-900 dark:text-white relative z-10">Vendor of the Month</div>
                                <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-2 mb-4 relative z-10">Spotlight on Elite Catering Co.</p>
                                <button className="text-[10px] font-black uppercase tracking-widest bg-white text-[#D0771E] px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all relative z-10">
                                    View Profile
                                </button>
                            </div>
                        </div>
                    </NavDropdown>

                    {/* 4. PRICING (Direct Link) */}
                    <Link to="/pricing" className="text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-white hover:text-primary-600 transition-colors">
                        Pricing
                    </Link>

                    {/* 5. RESOURCES */}
                    <NavDropdown
                        title="Resources"
                        activeDropdown={activeDropdown}
                        setActiveDropdown={setActiveDropdown}
                    >
                        <div className="flex w-[600px]">
                            <div className="flex-1 p-8 bg-white dark:bg-gray-900">
                                <div className="text-[10px] font-black uppercase tracking-widest text-[#D0771E] mb-6">Learn & Grow</div>
                                <div className="space-y-4">
                                    <Link to="/resources/blog" className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group">
                                        <div className="w-8 h-8 rounded-full bg-pink-100 dark:bg-pink-900/20 flex items-center justify-center text-pink-600 dark:text-pink-400">
                                            <FileText className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold group-hover:text-primary-600 transition-colors dark:text-white">Blog & Insights</div>
                                            <div className="text-xs text-gray-500 dark:text-gray-400">Industry news</div>
                                        </div>
                                    </Link>
                                    <Link to="/resources/guides" className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                                        <div className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900/20 flex items-center justify-center text-teal-600 dark:text-teal-400">
                                            <Copy className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">Guides & Templates</div>
                                            <div className="text-xs text-gray-500 dark:text-gray-400">Downloadable resources</div>
                                        </div>
                                    </Link>
                                    <Link to="/resources/case-studies" className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                                        <div className="w-8 h-8 rounded-full bg-yellow-100 dark:bg-yellow-900/20 flex items-center justify-center text-yellow-600 dark:text-yellow-400">
                                            <Award className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">Case Studies</div>
                                            <div className="text-xs text-gray-500 dark:text-gray-400">Success stories</div>
                                        </div>
                                    </Link>
                                    <Link to="/resources/help-center" className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                                        <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                                            <LifeBuoy className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">Help Center</div>
                                            <div className="text-xs text-gray-500 dark:text-gray-400">Get support</div>
                                        </div>
                                    </Link>
                                    <Link to="/resources/faq" className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                                        <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400">
                                            <HelpCircle className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">FAQs</div>
                                            <div className="text-xs text-gray-500 dark:text-gray-400">Quick answers</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="w-48 bg-[#F5F5F0] dark:bg-gray-800 p-6 flex flex-col justify-end relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 dark:bg-primary-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-60" />
                                <div className="relative z-10">
                                    <div className="text-[10px] font-black uppercase tracking-widest text-primary-600 mb-2">Trend Report</div>
                                    <h4 className="text-lg font-black leading-tight mb-2 text-gray-900 dark:text-white">2026 Event Trends</h4>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">Discover what's hot this season in our annual report.</p>
                                    <a href="#" className="text-xs font-bold uppercase tracking-widest text-[#D0771E] flex items-center gap-1 hover:gap-2 transition-all">
                                        Read Report <ArrowRight className="w-3 h-3" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </NavDropdown>
                </nav>

                <nav className="hidden md:flex items-center gap-6">
                    <ThemeToggle />
                    <Link to="/login" className="text-sm font-bold hover:text-primary-600 transition-colors text-gray-900 dark:text-white">Log In</Link>
                    <button className="bg-primary-600 text-white px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/20">
                        Get Started
                    </button>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMobileNavOpen(true)}
                        className="p-2 -mr-2 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                        <List className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
        </header>
    );
}
