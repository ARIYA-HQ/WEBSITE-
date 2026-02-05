import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-neutral-900 border-t border-white/10 pt-20 pb-10 px-8 text-white mt-auto">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                {/* Brand Column */}
                <div className="md:col-span-4">
                    <Link to="/" className="text-3xl font-black tracking-tighter mb-6 text-primary-600 block">ÀRIYÁ</Link>
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
                <p>© 2026 ÀRIYÁ Inc. All rights reserved.</p>
                <div className="flex gap-8 mt-4 md:mt-0">
                    <Link to="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link to="/legal/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    <Link to="/legal/cookies" className="hover:text-white transition-colors">Cookie Settings</Link>
                </div>
            </div>
        </footer>
    );
}
