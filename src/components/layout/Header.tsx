import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, List, Star } from 'lucide-react';
import NavDropdown from '../NavDropdown';
import MobileNav from './MobileNav';
import { ThemeToggle } from '../ThemeToggle';
import { NAVIGATION_CONFIG } from '../../config/navigation';
import Button from '../common/Button';

export default function Header() {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-b border-white/20 dark:border-gray-800 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-black tracking-tighter text-primary-600">ÀRIYÁ</Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-8 items-center">
                    {/* PRODUCT */}
                    <NavDropdown
                        title={NAVIGATION_CONFIG.product.title}
                        activeDropdown={activeDropdown}
                        setActiveDropdown={setActiveDropdown}
                    >
                        <div className="flex w-[800px]">
                            <div className="flex-1 p-8 bg-white dark:bg-gray-900">
                                {NAVIGATION_CONFIG.product.sections.map((section, idx) => (
                                    <div key={idx}>
                                        <div className="text-[10px] font-black uppercase tracking-widest text-[#D0771E] mb-6">{section.label}</div>
                                        <div className="grid grid-cols-2 gap-8">
                                            {section.items.map((item, i) => (
                                                <Link key={i} to={item.href} className="flex gap-4 group">
                                                    <div className={`w-10 h-10 rounded-xl bg-${item.color}-50 dark:bg-${item.color}-900/20 flex items-center justify-center text-${item.color}-600 dark:text-${item.color}-400 group-hover:bg-${item.color}-600 group-hover:text-white transition-colors`}>
                                                        {item.icon && <item.icon className="w-5 h-5" />}
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-bold text-gray-900 dark:text-white mb-1">{item.title}</div>
                                                        <div className="text-xs text-gray-500 dark:text-gray-400">{item.description}</div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="w-64 bg-gray-50 dark:bg-gray-800/50 p-6 flex flex-col justify-end relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 dark:bg-primary-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                                <div className="relative z-10">
                                    <div className="text-[10px] font-black uppercase tracking-widest text-primary-600 mb-2">{NAVIGATION_CONFIG.product.featured.label}</div>
                                    <div className="font-bold text-gray-900 dark:text-white mb-2">{NAVIGATION_CONFIG.product.featured.title}</div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">{NAVIGATION_CONFIG.product.featured.description}</p>
                                    <a href={NAVIGATION_CONFIG.product.featured.href} className="text-xs font-bold uppercase tracking-widest text-[#D0771E] flex items-center gap-1 hover:gap-2 transition-all">
                                        {NAVIGATION_CONFIG.product.featured.cta} <ArrowRight className="w-3 h-3" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </NavDropdown>

                    {/* SOLUTIONS */}
                    <NavDropdown
                        title={NAVIGATION_CONFIG.solutions.title}
                        activeDropdown={activeDropdown}
                        setActiveDropdown={setActiveDropdown}
                    >
                        <div className="flex w-[600px]">
                            <div className="flex-1 p-8 bg-white dark:bg-gray-900">
                                {NAVIGATION_CONFIG.solutions.sections.map((section, idx) => (
                                    <div key={idx}>
                                        <div className="text-[10px] font-black uppercase tracking-widest text-[#D0771E] mb-6">{section.label}</div>
                                        <div className="space-y-6">
                                            {section.items.map((item, i) => (
                                                <Link key={i} to={item.href} className="block group">
                                                    <div className="text-sm font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 transition-colors">{item.title}</div>
                                                    <div className="text-xs text-gray-500 dark:text-gray-400">{item.description}</div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="w-48 bg-[#F5F5F0] dark:bg-gray-800 p-6">
                                <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6">{NAVIGATION_CONFIG.solutions.sidebar.label}</div>
                                <ul className="space-y-4 text-xs font-bold text-gray-600 dark:text-gray-300">
                                    {NAVIGATION_CONFIG.solutions.sidebar.items.map((item, i) => (
                                        <li key={i} className="hover:text-primary-600 cursor-pointer">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </NavDropdown>

                    {/* VENDORS */}
                    <NavDropdown
                        title={NAVIGATION_CONFIG.vendors.title}
                        activeDropdown={activeDropdown}
                        setActiveDropdown={setActiveDropdown}
                    >
                        <div className="flex w-[600px]">
                            <div className="flex-1 p-8 bg-white dark:bg-gray-900">
                                {NAVIGATION_CONFIG.vendors.sections.map((section, idx) => (
                                    <div key={idx}>
                                        <div className="text-[10px] font-black uppercase tracking-widest text-[#D0771E] mb-6">{section.label}</div>
                                        <div className="space-y-4">
                                            {section.items.map((item, i) => (
                                                <React.Fragment key={i}>
                                                    <a href={item.href} className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group">
                                                        <div className={`w-8 h-8 rounded-full bg-${item.color}-100 dark:bg-${item.color}-900/20 flex items-center justify-center text-${item.color}-600 dark:text-${item.color}-400`}>
                                                            {item.icon && <item.icon className="w-4 h-4" />}
                                                        </div>
                                                        <div>
                                                            <div className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">{item.title}</div>
                                                            <div className="text-xs text-gray-500 dark:text-gray-400">{item.description}</div>
                                                        </div>
                                                    </a>
                                                    {(i === 2) && <div className="h-px bg-gray-100 dark:bg-gray-800 my-2" />}
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="w-48 bg-orange-50 dark:bg-gray-800 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-200 dark:bg-orange-900/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-50" />
                                <div className="w-12 h-12 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-lg mb-3 text-[#D0771E] relative z-10">
                                    <Star className="w-5 h-5 fill-current" />
                                </div>
                                <div className="text-xs font-bold text-gray-900 dark:text-white relative z-10">{NAVIGATION_CONFIG.vendors.featuredVendor.title}</div>
                                <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-2 mb-4 relative z-10">Spotlight on {NAVIGATION_CONFIG.vendors.featuredVendor.name}</p>
                                <button className="text-[10px] font-black uppercase tracking-widest bg-white text-[#D0771E] px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all relative z-10">
                                    View Profile
                                </button>
                            </div>
                        </div>
                    </NavDropdown>

                    {/* PRICING (Direct Link) */}
                    <Link to="/pricing" className="text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-white hover:text-primary-600 transition-colors">
                        Pricing
                    </Link>

                    {/* RESOURCES */}
                    <NavDropdown
                        title={NAVIGATION_CONFIG.resources.title}
                        activeDropdown={activeDropdown}
                        setActiveDropdown={setActiveDropdown}
                    >
                        <div className="flex w-[600px]">
                            <div className="flex-1 p-8 bg-white dark:bg-gray-900">
                                {NAVIGATION_CONFIG.resources.sections.map((section, idx) => (
                                    <div key={idx}>
                                        <div className="text-[10px] font-black uppercase tracking-widest text-[#D0771E] mb-6">{section.label}</div>
                                        <div className="space-y-4">
                                            {section.items.map((item, i) => (
                                                <Link key={i} to={item.href} className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group">
                                                    <div className={`w-8 h-8 rounded-full bg-${item.color}-100 dark:bg-${item.color}-900/20 flex items-center justify-center text-${item.color}-600 dark:text-${item.color}-400`}>
                                                        {item.icon && <item.icon className="w-4 h-4" />}
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-bold group-hover:text-primary-600 transition-colors dark:text-white">{item.title}</div>
                                                        <div className="text-xs text-gray-500 dark:text-gray-400">{item.description}</div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="w-48 bg-[#F5F5F0] dark:bg-gray-800 p-6 flex flex-col justify-end relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 dark:bg-primary-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-60" />
                                <div className="relative z-10">
                                    <div className="text-[10px] font-black uppercase tracking-widest text-primary-600 mb-2">{NAVIGATION_CONFIG.resources.featured.label}</div>
                                    <h4 className="text-lg font-black leading-tight mb-2 text-gray-900 dark:text-white">{NAVIGATION_CONFIG.resources.featured.title}</h4>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">{NAVIGATION_CONFIG.resources.featured.description}</p>
                                    <a href={NAVIGATION_CONFIG.resources.featured.href} className="text-xs font-bold uppercase tracking-widest text-[#D0771E] flex items-center gap-1 hover:gap-2 transition-all">
                                        {NAVIGATION_CONFIG.resources.featured.cta} <ArrowRight className="w-3 h-3" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </NavDropdown>
                </nav>

                <nav className="hidden md:flex items-center gap-6">
                    <ThemeToggle />
                    <Link to="/login" className="text-sm font-bold hover:text-primary-600 transition-colors text-gray-900 dark:text-white">Log In</Link>
                    <Button size="sm">
                        Get Started
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMobileNavOpen(true)}
                        className="p-2 -mr-2 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                        aria-label="Open Mobile Menu"
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
