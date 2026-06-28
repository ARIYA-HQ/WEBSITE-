import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label="Toggle theme"
            className="flex items-center gap-1 px-2 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary-400 transition-all duration-200"
        >
            <Sun className={`w-3.5 h-3.5 transition-colors ${isDark ? 'text-gray-400' : 'text-amber-500'}`} />
            <div className="relative w-8 h-4 mx-0.5">
                <div className="absolute inset-0 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors" />
                <div className={`absolute top-0.5 w-3 h-3 rounded-full shadow transition-all duration-300 ${isDark ? 'bg-primary-500 translate-x-4' : 'bg-white translate-x-0.5'}`} />
            </div>
            <Moon className={`w-3.5 h-3.5 transition-colors ${isDark ? 'text-primary-400' : 'text-gray-400'}`} />
        </button>
    );
}
