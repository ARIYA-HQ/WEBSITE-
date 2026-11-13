
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown } from 'lucide-react';
import { ThemeToggle } from '../ThemeToggle';
import Button from '../common/Button';
import { APP_LINKS } from '../../config/links';
import { NAVIGATION_CONFIG } from '../../config/navigation';
import type { NavigationItem } from '../../config/navigation';

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
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] xl:hidden"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-y-0 right-0 w-full sm:w-[400px] bg-white dark:bg-gray-900 shadow-2xl z-[100] overflow-y-auto xl:hidden border-l border-gray-100 dark:border-gray-800"
                    >
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-8">
                                <Link to="/" onClick={onClose} aria-label="Àríyá home" className="flex items-center">
                                    <img src={`${import.meta.env.BASE_URL}brand/ariya-horizontal-primary.svg`} alt="Àríyá" className="h-7 w-auto dark:hidden" />
                                    <img src={`${import.meta.env.BASE_URL}brand/ariya-horizontal-reverse.svg`} alt="Àríyá" className="hidden h-7 w-auto dark:block" />
                                </Link>
                                <div className="flex items-center gap-4">
                                    <ThemeToggle />
                                    <button
                                        onClick={onClose}
                                        className="p-2 -mr-2 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                                        aria-label="Close menu"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {NAVIGATION_CONFIG.map((menu, index) => (
                                    <MobileAccordion key={menu.title} title={menu.title} index={index}>
                                        <div className="grid gap-2 pl-2">
                                            {menu.items.map((item, itemIndex) => <MobileMenuItem key={item.href} item={item} index={itemIndex} onClick={onClose} />)}
                                        </div>
                                    </MobileAccordion>
                                ))}

                                <div className="border-b border-gray-100 dark:border-gray-800 pb-4">
                                    <Link
                                        to="/pricing"
                                        onClick={onClose}
                                        className="flex w-full items-center py-2 text-lg font-bold text-gray-900 dark:text-white hover:text-primary-600 transition-colors"
                                    >
                                        Pricing
                                    </Link>
                                </div>

                            </div>

                            <div className="mt-10 pt-8 border-t border-gray-100 dark:border-gray-800 space-y-4">
                                <a
                                    href={APP_LINKS.login}
                                    onClick={onClose}
                                    className="block w-full text-center py-4 rounded-xl text-sm font-bold text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                >
                                    Log In
                                </a>
                                <a href={APP_LINKS.signup} className="block w-full">
                                    <Button fullWidth tabIndex={-1}>
                                        Start Free
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
}

const mobileAccents = [
    'bg-primary-50 text-primary-800 dark:bg-primary-950/50 dark:text-primary-300',
    'bg-rose-50 text-rose-800 dark:bg-rose-950/50 dark:text-rose-300',
    'bg-amber-50 text-amber-800 dark:bg-amber-950/50 dark:text-amber-300',
    'bg-emerald-50 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300',
    'bg-violet-50 text-violet-800 dark:bg-violet-950/50 dark:text-violet-300',
    'bg-sky-50 text-sky-800 dark:bg-sky-950/50 dark:text-sky-300',
];

function MobileAccordion({ title, children, index }: { title: string, children: React.ReactNode, index: number }) {
    const [isOpen, setIsOpen] = useState(false);
    const accent = mobileAccents[index % mobileAccents.length];

    return (
        <div className="border-b border-gray-100 pb-3 dark:border-gray-800">
            <button
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-base font-bold transition ${isOpen ? accent : 'text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800'}`}
            >
                {title}
                <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
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

function MobileMenuItem({ item, onClick, index }: { item: NavigationItem, onClick: () => void, index: number }) {
    const Icon = item.icon;
    const accent = mobileAccents[index % mobileAccents.length];
    const content = (
        <>
            <span className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${accent}`}>
                <Icon className="h-4 w-4" aria-hidden="true" />
            </span>
            <span>
                <span className="block text-sm font-medium">{item.title}</span>
                <span className="mt-0.5 block text-xs leading-5 text-gray-500 dark:text-gray-400">{item.description}</span>
            </span>
        </>
    );
    const className = 'flex items-start gap-3 rounded-2xl border border-transparent bg-white p-3 text-gray-600 shadow-sm transition hover:border-gray-100 hover:shadow-md hover:text-primary-700 dark:bg-gray-950 dark:text-gray-300 dark:hover:border-gray-700';

    return item.href.startsWith('http')
        ? <a href={item.href} onClick={onClick} className={className}>{content}</a>
        : <Link to={item.href} onClick={onClick} className={className}>{content}</Link>;
}

function MobileLink({ to, label, onClick }: { to: string, label: string, onClick: () => void }) {
    return (
        <Link
            to={to}
            onClick={onClick}
            className="flex items-center gap-3 py-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
            <span className="text-sm font-medium">{label}</span>
        </Link>
    );
}
