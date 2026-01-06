import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function NavDropdown({ title, children, activeDropdown, setActiveDropdown }: any) {
    const isOpen = activeDropdown === title;

    return (
        <div
            className="relative h-full flex items-center"
            onMouseEnter={() => setActiveDropdown(title)}
            onMouseLeave={() => setActiveDropdown(null)}
        >
            <button className={`text-sm font-bold uppercase tracking-widest flex items-center gap-1 transition-colors ${isOpen ? 'text-primary-600' : 'hover:text-primary-600'}`}>
                {title}
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-4 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
