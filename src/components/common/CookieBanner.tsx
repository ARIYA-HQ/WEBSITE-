import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cookie, X } from 'lucide-react';

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if consent has already been given
        const consent = localStorage.getItem('cookie-preferences');
        if (!consent) {
            // Show banner after a short delay for better UX
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAcceptAll = () => {
        const allConsent = {
            essential: true,
            analytics: true,
            marketing: true,
            preferences: true
        };
        localStorage.setItem('cookie-preferences', JSON.stringify(allConsent));
        setIsVisible(false);
    };

    const handleEssentialOnly = () => {
        const essentialOnly = {
            essential: true,
            analytics: false,
            marketing: false,
            preferences: false
        };
        localStorage.setItem('cookie-preferences', JSON.stringify(essentialOnly));
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="fixed bottom-3 left-3 right-3 md:bottom-8 md:left-8 md:right-8 z-[100] max-w-4xl mx-auto"
                >
                    <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl border border-white/20 dark:border-gray-800 p-4 pr-10 md:p-8 rounded-3xl md:rounded-[2.5rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)] flex flex-col md:flex-row items-center justify-between gap-3 md:gap-8">
                        <div className="flex items-start gap-6">
                            <div className="hidden md:flex w-12 h-12 rounded-2xl bg-primary-600/10 items-center justify-center shrink-0">
                                <Cookie className="w-6 h-6 text-primary-600" />
                            </div>
                            <div className="space-y-1">
                                <h4 className="hidden md:block text-lg font-black uppercase tracking-widest text-gray-900 dark:text-white">Cookie Preferences</h4>
                                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                                    We use cookies to enhance your experience and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                                    <Link to="/legal/cookies" className="ml-2 text-primary-600 hover:underline">Manage Settings</Link>
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-row items-center gap-2 md:gap-4 w-full md:w-auto">
                            <button
                                onClick={handleEssentialOnly}
                                className="flex-1 md:flex-none px-4 md:px-8 py-3 md:py-4 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                            >
                                Essential Only
                            </button>
                            <button
                                onClick={handleAcceptAll}
                                className="flex-1 md:flex-none px-4 md:px-10 py-3 md:py-4 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-primary-600 dark:hover:bg-primary-600 hover:text-white dark:hover:text-white transition-all shadow-lg"
                            >
                                Accept All
                            </button>
                        </div>

                        <button
                            onClick={() => setIsVisible(false)}
                            aria-label="Dismiss cookie banner"
                            className="absolute top-2 right-2 md:top-4 md:right-4 p-2 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
