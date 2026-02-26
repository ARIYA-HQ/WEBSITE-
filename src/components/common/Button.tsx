import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark' | 'white';
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    icon?: LucideIcon;
    iconPosition?: 'left' | 'right';
    loading?: boolean;
    fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({
        className = '',
        variant = 'primary',
        size = 'md',
        icon: Icon,
        iconPosition = 'left',
        loading = false,
        fullWidth = false,
        children,
        disabled,
        ...props
    }, ref) => {

        const baseStyles = 'inline-flex items-center justify-center font-black uppercase tracking-widest transition-all duration-300 rounded-full disabled:opacity-50 disabled:cursor-not-allowed';

        const variants = {
            primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-600/20 forced-colors:bg-[Highlight]',
            secondary: 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/20',
            outline: 'border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-900',
            ghost: 'bg-transparent text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800',
            dark: 'bg-gray-900 text-white hover:bg-black dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200',
            white: 'bg-white text-gray-900 hover:bg-gray-50 shadow-xl'
        };

        const sizes = {
            xs: 'px-4 py-2 text-[10px] gap-1.5',
            sm: 'px-6 py-3 text-[10px] gap-2',
            md: 'px-8 py-4 text-xs gap-2',
            lg: 'px-10 py-5 text-sm gap-2.5',
            xl: 'px-12 py-6 text-base gap-3'
        };

        const widthStyles = fullWidth ? 'w-full' : '';

        return (
            <button
                ref={ref}
                disabled={disabled || loading}
                className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyles} ${className}`}
                {...props}
            >
                {loading ? (
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                ) : (
                    <>
                        {Icon && iconPosition === 'left' && <Icon className="w-4 h-4" />}
                        {children}
                        {Icon && iconPosition === 'right' && <Icon className="w-4 h-4" />}
                    </>
                )}
            </button>
        );
    }
);

Button.displayName = 'Button';

export default Button;
