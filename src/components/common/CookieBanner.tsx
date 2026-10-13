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
                    <div className="relative grid w-full grid-cols-1 items-center gap-4 rounded-3xl border border-white/20 bg-white/80 p-4 pr-12 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)] backdrop-blur-2xl dark:border-gray-800 dark:bg-gray-900/80 md:grid-cols-[minmax(0,1fr)_auto] md:gap-6 md:rounded-[2.5rem] md:p-8 md:pr-14">
                        <div className="flex min-w-0 items-start gap-4 md:gap-6">
                            <div className="hidden md:flex w-12 h-12 rounded-2xl bg-primary-600/10 items-center justify-center shrink-0">
                                <Cookie className="w-6 h-6 text-primary-600" />
                            </div>
                            <div className="min-w-0 space-y-1">
                                <h4 className="hidden md:block text-lg font-black uppercase tracking-widest text-gray-900 dark:text-white">Cookie Preferences</h4>
                                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                                    We use cookies to enhance your experience and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                                    <Link to="/legal/cookies" className="ml-2 text-primary-600 hover:underline">Manage Settings</Link>
                                </p>
                            </div>
                        </div>

                        <div className="flex w-full min-w-0 flex-wrap items-center justify-end gap-2 md:w-auto md:flex-nowrap md:gap-3">
                            <button
                                onClick={handleEssentialOnly}
                                className="flex-1 whitespace-nowrap rounded-full px-3 py-3 text-[10px] font-black uppercase tracking-widest text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white md:flex-none md:px-5 md:py-4 md:text-xs"
                            >
                                Essential Only
                            </button>
                            <button
                                onClick={handleAcceptAll}
                                className="flex-1 whitespace-nowrap rounded-full bg-gray-900 px-4 py-3 text-[10px] font-black uppercase tracking-widest text-white shadow-lg transition-all hover:bg-primary-600 hover:text-white dark:bg-white dark:text-gray-900 dark:hover:bg-primary-600 dark:hover:text-white md:flex-none md:px-6 md:py-4 md:text-xs"
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
