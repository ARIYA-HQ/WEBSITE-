
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    X, ChevronDown, LayoutDashboard, Kanban, Store, Calculator, Globe, Bot,
    Search, List, Star, UserPlus, FileText, Copy, Award, LifeBuoy, HelpCircle,
    ArrowRight
} from 'lucide-react';
import { ThemeToggle } from '../ThemeToggle';

import { createPortal } from 'react-dom';

interface MobileNavProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
    if (!isOpen) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] md:hidden"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-y-0 right-0 w-full sm:w-[400px] bg-white dark:bg-gray-900 shadow-2xl z-[100] overflow-y-auto md:hidden border-l border-gray-100 dark:border-gray-800"
                    >
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-8">
                                <Link to="/" onClick={onClose} className="text-2xl font-black tracking-tighter text-gray-900 dark:text-white">
                                    ARIYA
                                </Link>
                                <div className="flex items-center gap-4">
                                    <ThemeToggle />
                                    <button
                                        onClick={onClose}
                                        className="p-2 -mr-2 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <MobileAccordion title="Product">
                                    <div className="grid gap-4 pl-4">
                                        <MobileLink to="/product/overview" icon={LayoutDashboard} label="Overview" onClick={onClose} />
                                        <MobileLink to="/product/planning" icon={Kanban} label="Planning Dashboard" onClick={onClose} />
                                        <MobileLink to="/product/ai-planning" icon={Bot} label="AI Planning" onClick={onClose} />
                                        <MobileLink to="/product/marketplace" icon={Store} label="Vendor Marketplace" onClick={onClose} />
                                        <MobileLink to="/product/finance" icon={Calculator} label="Budget & Guest List" onClick={onClose} />
                                        <MobileLink to="/product/websites" icon={Globe} label="Websites & Registry" onClick={onClose} />
                                    </div>
                                </MobileAccordion>

                                <MobileAccordion title="Solutions">
                                    <div className="grid gap-4 pl-4">
                                        <MobileLink to="/solutions/agencies" label="For Agencies" onClick={onClose} />
                                        <MobileLink to="/solutions/vendors" label="For Vendors" onClick={onClose} />
                                        <MobileLink to="/solutions/enterprise" label="Enterprise" onClick={onClose} />
                                    </div>
                                </MobileAccordion>

                                <MobileAccordion title="Vendors">
                                    <div className="grid gap-4 pl-4">
                                        <MobileLink to="#" icon={Search} label="Browse Vendors" onClick={onClose} />
                                        <MobileLink to="#" icon={List} label="Vendor Categories" onClick={onClose} />
                                        <MobileLink to="#" icon={Star} label="Featured Vendors" onClick={onClose} />
                                        <MobileLink to="#" icon={UserPlus} label="Become a Vendor" onClick={onClose} />
                                    </div>
                                </MobileAccordion>

                                <Link
                                    to="/pricing"
                                    onClick={onClose}
                                    className="block text-lg font-bold text-gray-900 dark:text-white py-2"
                                >
                                    Pricing
                                </Link>

                                <MobileAccordion title="Resources">
                                    <div className="grid gap-4 pl-4">
                                        <MobileLink to="/resources/blog" icon={FileText} label="Blog & Insights" onClick={onClose} />
                                        <MobileLink to="/resources/guides" icon={Copy} label="Guides & Templates" onClick={onClose} />
                                        <MobileLink to="/resources/case-studies" icon={Award} label="Case Studies" onClick={onClose} />
                                        <MobileLink to="/resources/help-center" icon={LifeBuoy} label="Help Center" onClick={onClose} />
                                        <MobileLink to="/resources/faq" icon={HelpCircle} label="FAQs" onClick={onClose} />
                                    </div>
                                </MobileAccordion>
                            </div>

                            <div className="mt-10 pt-8 border-t border-gray-100 dark:border-gray-800 space-y-4">
                                <Link
                                    to="/login"
                                    onClick={onClose}
                                    className="block w-full text-center py-4 rounded-xl text-sm font-bold text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                >
                                    Log In
                                </Link>
                                <button className="w-full py-4 rounded-xl text-sm font-black uppercase tracking-widest text-white bg-primary-600 hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/20">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
}

function MobileAccordion({ title, children }: { title: string, children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-100 dark:border-gray-800 pb-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full justify-between items-center py-2 text-lg font-bold text-gray-900 dark:text-white"
            >
                {title}
                <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                    >
                        <div className="pt-4 pb-2">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function MobileLink({ to, icon: Icon, label, onClick }: { to: string, icon?: any, label: string, onClick: () => void }) {
    return (
        <Link
            to={to}
            onClick={onClick}
            className="flex items-center gap-3 py-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
            {Icon && <Icon className="w-4 h-4" />}
            <span className="text-sm font-medium">{label}</span>
        </Link>
    );
}
