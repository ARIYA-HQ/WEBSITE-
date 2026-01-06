import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ArrowRight, Instagram, Twitter, Linkedin, Facebook, LayoutDashboard, Kanban, Sparkles, Store, Calculator, Globe, Briefcase, Building2, TrendingUp, Search, List, UserPlus, FileText, Copy, Award, LifeBuoy, HelpCircle, Users, Star, Bot } from 'lucide-react';

// Pages
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CareersPage from './pages/CareersPage';
import IndividualsPage from './pages/solutions/IndividualsPage';
import PlannersPage from './pages/solutions/PlannersPage';
import AgenciesPage from './pages/solutions/AgenciesPage';
import VendorsPage from './pages/solutions/VendorsPage';
import EnterprisePage from './pages/solutions/EnterprisePage';
import OverviewPage from './pages/product/OverviewPage';
import AIPlanningPage from './pages/product/AIPlanningPage';
import BlogPage from './pages/resources/BlogPage';
import BlogPostPage from './pages/resources/BlogPostPage';
import FAQPage from './pages/resources/FAQPage';
import HelpCenterPage from './pages/resources/HelpCenterPage';
import GuidesPage from './pages/resources/GuidesPage';
import CaseStudiesPage from './pages/resources/CaseStudiesPage';
import CaseStudyPage from './pages/resources/CaseStudyPage';

// Components
import NavDropdown from './components/NavDropdown';

export default function App() {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    return (
        <Router>
            <div className="min-h-screen bg-beige-100 flex flex-col">
                {/* Header */}
                <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-white/20 transition-all duration-300">
                    <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
                        <Link to="/" className="text-2xl font-black tracking-tighter">ARIYA</Link>

                        <nav className="hidden md:flex space-x-8">
                            {/* 1. PRODUCT */}
                            <NavDropdown
                                title="Product"
                                activeDropdown={activeDropdown}
                                setActiveDropdown={setActiveDropdown}
                            >
                                <div className="flex w-[800px]">
                                    <div className="flex-1 p-8 bg-white">
                                        <div className="text-[10px] font-black uppercase tracking-widest text-[#D0771E] mb-6">Platform Overview</div>
                                        <div className="grid grid-cols-2 gap-8">
                                            <Link to="/product/overview" className="flex gap-4 group">
                                                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                                                    <LayoutDashboard className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold text-gray-900 mb-1">Overview</div>
                                                    <div className="text-xs text-gray-500">The complete platform summary</div>
                                                </div>
                                            </Link>
                                            <a href="#" className="flex gap-4 group">
                                                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                                    <Kanban className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold text-gray-900 mb-1">Planning Dashboard</div>
                                                    <div className="text-xs text-gray-500">Your central command center</div>
                                                </div>
                                            </a>
                                            <Link to="/product/ai-planning" className="flex gap-4 group">
                                                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                                    <Bot className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold text-gray-900 mb-1">AI Planning</div>
                                                    <div className="text-xs text-gray-500">Smart assistance & insights</div>
                                                </div>
                                            </Link>
                                            <a href="#" className="flex gap-4 group">
                                                <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                                                    <Store className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold text-gray-900 mb-1">Vendor Marketplace</div>
                                                    <div className="text-xs text-gray-500">Connect with top pros</div>
                                                </div>
                                            </a>
                                            <a href="#" className="flex gap-4 group">
                                                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                                                    <Calculator className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold text-gray-900 mb-1">Budget & Guest List</div>
                                                    <div className="text-xs text-gray-500">Manage finances & RSVPs</div>
                                                </div>
                                            </a>
                                            <a href="#" className="flex gap-4 group">
                                                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                                    <Globe className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold text-gray-900 mb-1">Websites & Registry</div>
                                                    <div className="text-xs text-gray-500">Share your story</div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="w-64 bg-gray-50 p-6 flex flex-col justify-end relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                                        <div className="relative z-10">
                                            <div className="text-[10px] font-black uppercase tracking-widest text-primary-600 mb-2">New Feature</div>
                                            <h4 className="text-lg font-black leading-tight mb-2">Meet Your AI Copilot</h4>
                                            <p className="text-xs text-gray-500 mb-4">Let our AI build your timeline and suggest vendors instantly.</p>
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
                                    <div className="col-span-2 p-8 bg-white flex-1">
                                        <div className="text-[10px] font-black uppercase tracking-widest text-[#D0771E] mb-6">Build For</div>
                                        <div className="space-y-4">
                                            <Link to="/solutions/individuals" className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                                                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                                                    <Users className="w-4 h-4" />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold group-hover:text-primary-600 transition-colors">Individuals</div>
                                                    <div className="text-xs text-gray-500">Planning my own event</div>
                                                </div>
                                            </Link>
                                            <Link to="/solutions/planners" className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                                    <Briefcase className="w-4 h-4" />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold group-hover:text-primary-600 transition-colors">Event Planners</div>
                                                    <div className="text-xs text-gray-500">Professional tools</div>
                                                </div>
                                            </Link>
                                            <Link to="/solutions/agencies" className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                                                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                                                    <Building2 className="w-4 h-4" />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold group-hover:text-primary-600 transition-colors">Agencies</div>
                                                    <div className="text-xs text-gray-500">Scale your business</div>
                                                </div>
                                            </Link>
                                            <Link to="/solutions/vendors" className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                                                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                                    <TrendingUp className="w-4 h-4" />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold group-hover:text-primary-600 transition-colors">Vendors</div>
                                                    <div className="text-xs text-gray-500">Grow your bookings</div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="w-48 bg-[#0a0a0a] p-6 flex flex-col justify-end text-white">
                                        <div className="text-[10px] font-black uppercase tracking-widest text-primary-500 mb-2">Featured</div>
                                        <h4 className="text-sm font-bold mb-2">Enterprise Solutions</h4>
                                        <p className="text-[10px] text-gray-400 mb-4">Custom white-label solutions for large agencies.</p>
                                        <Link to="/solutions/enterprise" className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 hover:text-primary-500 transition-colors">
                                            Learn More <ArrowRight className="w-3 h-3" />
                                        </Link>
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
                                    <div className="flex-1 p-8 bg-white">
                                        <div className="text-[10px] font-black uppercase tracking-widest text-[#D0771E] mb-6">Marketplace</div>
                                        <div className="space-y-4">
                                            <a href="#" className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                                                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                                                    <Search className="w-4 h-4" />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold group-hover:text-primary-600 transition-colors">Browse Vendors</div>
                                                    <div className="text-xs text-gray-500">Explore the network</div>
                                                </div>
                                            </a>
                                            <a href="#" className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                                    <List className="w-4 h-4" />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold group-hover:text-primary-600 transition-colors">Vendor Categories</div>
                                                    <div className="text-xs text-gray-500">Find by type</div>
                                                </div>
                                            </a>
                                            <a href="#" className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                                                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                                                    <Star className="w-4 h-4" />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold group-hover:text-primary-600 transition-colors">Featured Vendors</div>
                                                    <div className="text-xs text-gray-500">Top rated pros</div>
                                                </div>
                                            </a>
                                            <div className="h-px bg-gray-100 my-2" />
                                            <a href="#" className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                                                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                                    <UserPlus className="w-4 h-4" />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold group-hover:text-primary-600 transition-colors">Become a Vendor</div>
                                                    <div className="text-xs text-gray-500">Join Ariya</div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="w-48 bg-orange-50 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-orange-200 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-50" />
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg mb-3 text-[#D0771E] relative z-10">
                                            <Star className="w-5 h-5 fill-current" />
                                        </div>
                                        <div className="text-xs font-bold text-gray-900 relative z-10">Vendor of the Month</div>
                                        <p className="text-[10px] text-gray-500 mt-2 mb-4 relative z-10">Spotlight on Elite Catering Co.</p>
                                        <button className="text-[10px] font-black uppercase tracking-widest bg-white text-[#D0771E] px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all relative z-10">
                                            View Profile
                                        </button>
                                    </div>
                                </div>
                            </NavDropdown>

                            {/* 4. PRICING (Direct Link) */}
                            <a href="#" className="text-sm font-bold uppercase tracking-widest hover:text-primary-600 transition-colors flex items-center h-full">
                                Pricing
                            </a>

                            {/* 5. RESOURCES */}
                            <NavDropdown
                                title="Resources"
                                activeDropdown={activeDropdown}
                                setActiveDropdown={setActiveDropdown}
                            >
                                <div className="flex w-[600px]">
                                    <div className="flex-1 p-8 bg-white">
                                        <div className="text-[10px] font-black uppercase tracking-widest text-[#D0771E] mb-6">Learn & Grow</div>
                                        <div className="space-y-4">
                                            <Link to="/resources/blog" className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                                                <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
                                                    <FileText className="w-4 h-4" />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold group-hover:text-primary-600 transition-colors">Blog & Insights</div>
                                                    <div className="text-xs text-gray-500">Industry news</div>
                                                </div>
                                            </Link>
                                            <Link to="/resources/guides" className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                                                <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                                                    <Copy className="w-4 h-4" />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold group-hover:text-primary-600 transition-colors">Guides & Templates</div>
                                                    <div className="text-xs text-gray-500">Downloadable resources</div>
                                                </div>
                                            </Link>
                                            <Link to="/resources/case-studies" className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                                                <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                                                    <Award className="w-4 h-4" />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold group-hover:text-primary-600 transition-colors">Case Studies</div>
                                                    <div className="text-xs text-gray-500">Success stories</div>
                                                </div>
                                            </Link>
                                            <Link to="/resources/help-center" className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                                                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                                                    <LifeBuoy className="w-4 h-4" />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold group-hover:text-primary-600 transition-colors">Help Center</div>
                                                    <div className="text-xs text-gray-500">Get support</div>
                                                </div>
                                            </Link>
                                            <Link to="/resources/faq" className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                                                    <HelpCircle className="w-4 h-4" />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold group-hover:text-primary-600 transition-colors">FAQs</div>
                                                    <div className="text-xs text-gray-500">Quick answers</div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="w-48 bg-[#F5F5F0] p-6 flex flex-col justify-end relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-60" />
                                        <div className="relative z-10">
                                            <div className="text-[10px] font-black uppercase tracking-widest text-primary-600 mb-2">Trend Report</div>
                                            <h4 className="text-lg font-black leading-tight mb-2">2026 Event Trends</h4>
                                            <p className="text-xs text-gray-500 mb-4">Discover what's hot this season in our annual report.</p>
                                            <a href="#" className="text-xs font-bold uppercase tracking-widest text-[#D0771E] flex items-center gap-1 hover:gap-2 transition-all">
                                                Read Report <ArrowRight className="w-3 h-3" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </NavDropdown>
                        </nav>

                        <div className="flex items-center space-x-4">
                            <button className="text-sm font-bold uppercase tracking-widest px-4 py-2 hover:text-primary-600 transition-colors">Login</button>
                            <button className="bg-primary-600 text-white text-sm font-bold uppercase tracking-widest px-6 py-3 rounded-full hover:bg-primary-800 transition-colors shadow-lg shadow-primary-600/20">
                                Get Started
                            </button>
                        </div>
                    </div>
                </header>

                {/* Main Content (Changes based on route) */}
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/careers" element={<CareersPage />} />
                    <Route path="/solutions/individuals" element={<IndividualsPage />} />
                    <Route path="/solutions/planners" element={<PlannersPage />} />
                    <Route path="/solutions/agencies" element={<AgenciesPage />} />
                    <Route path="/solutions/vendors" element={<VendorsPage />} />
                    <Route path="/solutions/enterprise" element={<EnterprisePage />} />
                    <Route path="/resources/blog" element={<BlogPage />} />
                    <Route path="/resources/blog/:id" element={<BlogPostPage />} />
                    <Route path="/resources/faq" element={<FAQPage />} />
                    <Route path="/resources/help-center" element={<HelpCenterPage />} />
                    <Route path="/resources/guides" element={<GuidesPage />} />
                    <Route path="/resources/case-studies" element={<CaseStudiesPage />} />
                    <Route path="/resources/case-studies/:id" element={<CaseStudyPage />} />
                    <Route path="/product/overview" element={<OverviewPage />} />
                    <Route path="/product/ai-planning" element={<AIPlanningPage />} />
                </Routes>

                {/* Footer */}
                <footer className="bg-neutral-900 border-t border-white/10 pt-20 pb-10 px-8 text-white mt-auto">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                        {/* Brand Column */}
                        <div className="md:col-span-4">
                            <Link to="/" className="text-3xl font-black tracking-tighter mb-6 text-white block">ARIYA</Link>
                            <p className="text-gray-400 max-w-sm mb-8 font-medium leading-relaxed">
                                The future of event planning is here. Join thousands of planners who are leveling up their business with Ariya.
                            </p>
                            <div className="flex space-x-4">
                                {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                                    <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary-600 hover:scale-110 transition-all duration-300">
                                        <Icon className="w-4 h-4" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Links Columns */}
                        <div className="md:col-span-2">
                            <h5 className="text-[10px] font-black uppercase tracking-widest text-[#D0771E] mb-6">Discover</h5>
                            <ul className="space-y-4 text-sm font-medium text-gray-400">
                                {['Vendors', 'Venues', 'Inspiration', 'Real Weddings'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="md:col-span-2">
                            <h5 className="text-[10px] font-black uppercase tracking-widest text-[#D0771E] mb-6">Company</h5>
                            <ul className="space-y-4 text-sm font-medium text-gray-400">
                                <li>
                                    <Link to="/about" className="hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2">About Us</Link>
                                </li>
                                <li>
                                    <Link to="/careers" className="hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2">Careers</Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2">Contact Us</Link>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2">Press</a>
                                </li>
                            </ul>
                        </div>

                        {/* Newsletter Column */}
                        <div className="md:col-span-4">
                            <h5 className="text-[10px] font-black uppercase tracking-widest text-[#D0771E] mb-6">Stay in the Loop</h5>
                            <p className="text-gray-400 text-sm mb-6">
                                Get the latest trends and updates delivered straight to your inbox.
                            </p>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-primary-600 transition-colors"
                                />
                                <button className="bg-white text-neutral-900 rounded-full px-6 py-3 text-sm font-bold hover:bg-primary-600 hover:text-white transition-all duration-300">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:row justify-between items-center text-[10px] font-black uppercase tracking-widest text-gray-500">
                        <p>© 2026 Ariya Inc. All rights reserved.</p>
                        <div className="flex gap-8 mt-4 md:mt-0">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
                        </div>
                    </div>
                </footer>
            </div>
        </Router>
    );
}
