import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface NavDropdownProps {
    title: string;
    children: React.ReactNode;
    activeDropdown: string | null;
    setActiveDropdown: (title: string | null) => void;
    className?: string;
    panelClassName?: string;
    transparent?: boolean;
}

export default function NavDropdown({ title, children, activeDropdown, setActiveDropdown, className = '', panelClassName = '', transparent = false }: NavDropdownProps) {
    const isOpen = activeDropdown === title;
    const baseColor = transparent ? 'text-white/90 hover:text-white' : 'text-gray-800 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-300';
    const panelId = `nav-dropdown-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
    const triggerRef = useRef<HTMLButtonElement>(null);
    const closingWithEscape = useRef(false);

    return (
        <div
            className="relative flex h-full items-center"
            onMouseEnter={() => setActiveDropdown(title)}
            onMouseLeave={() => setActiveDropdown(null)}
            onKeyDown={(event) => {
                if (event.key === 'Escape') {
                    event.preventDefault();
                    closingWithEscape.current = true;
                    setActiveDropdown(null);
                    triggerRef.current?.focus();
                }
            }}
        >
            <button
                ref={triggerRef}
                type="button"
                aria-expanded={isOpen}
                aria-haspopup="true"
                aria-controls={panelId}
                onFocus={() => {
                    if (closingWithEscape.current) {
                        closingWithEscape.current = false;
                    } else {
                        setActiveDropdown(title);
                    }
                }}
                onClick={() => setActiveDropdown(isOpen ? null : title)}
                className={`flex items-center gap-1 whitespace-nowrap rounded-lg px-2 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950 ${isOpen ? 'text-primary-600 dark:text-primary-300' : baseColor} ${className}`}
            >
                {title}
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id={panelId}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.16, ease: 'easeOut' }}
                        className={`fixed inset-x-4 top-[72px] z-[60] mx-auto pt-2 ${panelClassName}`}
                    >
                        <div className="overflow-hidden rounded-[1.5rem] border border-gray-200/80 bg-white shadow-[0_24px_70px_-24px_rgba(17,24,39,0.38)] dark:border-gray-700 dark:bg-gray-900">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
