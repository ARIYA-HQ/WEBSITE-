import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowRight, Search } from 'lucide-react';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-beige-100 dark:bg-gray-950 flex flex-col items-center justify-center px-8 relative overflow-hidden pt-20">
            {/* Ambient Background Elements */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-100 dark:bg-primary-900/10 rounded-full blur-3xl opacity-50 -z-10 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-100 dark:bg-orange-900/10 rounded-full blur-3xl opacity-50 -z-10 animate-pulse delay-1000" />

            <div className="max-w-2xl w-full text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Floating Label */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm mb-8">
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 dark:text-gray-400">Error 404</span>
                    </div>

                    {/* Main Title */}
                    <h1 className="text-[10rem] md:text-[14rem] leading-none font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-orange-500 to-amber-500 mb-6 select-none relative">
                        404
                    </h1>

                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
                        Page not found.
                    </h2>

                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-md mx-auto leading-relaxed">
                        We couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/"
                            className="w-full sm:w-auto bg-primary-600 text-white font-black uppercase tracking-widest px-8 py-4 rounded-full text-xs hover:bg-primary-700 transition-all shadow-lg hover:shadow-primary-600/30 flex items-center justify-center gap-2 group"
                        >
                            <Home className="w-4 h-4" />
                            Return Home
                        </Link>

                        <Link
                            to="/contact"
                            className="w-full sm:w-auto bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800 font-black uppercase tracking-widest px-8 py-4 rounded-full text-xs hover:bg-gray-50 dark:hover:bg-gray-800 transition-all flex items-center justify-center gap-2 group"
                        >
                            Contact Support
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Helpful Links */}
                    <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div>
                            <span className="block text-[10px] font-black uppercase tracking-widest text-[#D0771E] mb-2">Product</span>
                            <Link to="/product/overview" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Overview</Link>
                        </div>
                        <div>
                            <span className="block text-[10px] font-black uppercase tracking-widest text-[#D0771E] mb-2">Company</span>
                            <Link to="/about" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">About Us</Link>
                        </div>
                        <div>
                            <span className="block text-[10px] font-black uppercase tracking-widest text-[#D0771E] mb-2">Support</span>
                            <Link to="/resources/help-center" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Help Center</Link>
                        </div>
                        <div>
                            <span className="block text-[10px] font-black uppercase tracking-widest text-[#D0771E] mb-2">Legal</span>
                            <a href="#" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Privacy</a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default NotFoundPage;
