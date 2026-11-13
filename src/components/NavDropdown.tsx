import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface NavDropdownProps {
    title: string;
    children: React.ReactNode;
    activeDropdown: string | null;
    setActiveDropdown: (title: string | null) => void;
    className?: string;
    transparent?: boolean;
}

export default function NavDropdown({ title, children, activeDropdown, setActiveDropdown, className = '', transparent = false }: NavDropdownProps) {
    const isOpen = activeDropdown === title;
    const baseColor = transparent ? 'text-white/90 hover:text-white' : 'text-gray-900 dark:text-white hover:text-primary-600';

    return (
        <div
            className="relative flex h-full items-center"
            onMouseEnter={() => setActiveDropdown(title)}
            onMouseLeave={() => setActiveDropdown(null)}
        >
            <button
                type="button"
                aria-expanded={isOpen}
                aria-haspopup="true"
                onFocus={() => setActiveDropdown(title)}
                className={`flex items-center gap-1 whitespace-nowrap text-xs font-semibold transition-colors ${isOpen ? 'text-primary-600' : baseColor}`}
            >
                {title}
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full z-[60] pt-3"
                    >
                        <div className="overflow-hidden rounded-[1.8rem] border border-white/80 bg-white shadow-2xl shadow-gray-950/15 dark:border-gray-700 dark:bg-gray-900">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
