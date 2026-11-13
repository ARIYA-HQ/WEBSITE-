import { useEffect, useRef } from 'react';
import { ArrowRight, Heart, X } from 'lucide-react';
import { APP_LINKS } from '../../config/links';

interface AccountActionModalProps {
    title: string;
    description: string;
    onClose: () => void;
    createAccountLabel?: string;
}

export default function AccountActionModal({
    title,
    description,
    onClose,
    createAccountLabel = 'Create a free account',
}: AccountActionModalProps) {
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const dialogRef = useRef<HTMLElement>(null);
    const onCloseRef = useRef(onClose);

    useEffect(() => {
        onCloseRef.current = onClose;
    }, [onClose]);

    useEffect(() => {
        const previousOverflow = document.body.style.overflow;
        const previouslyFocused = document.activeElement instanceof HTMLElement
            ? document.activeElement
            : null;
        document.body.style.overflow = 'hidden';
        closeButtonRef.current?.focus();

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onCloseRef.current();
                return;
            }
            if (event.key !== 'Tab' || !dialogRef.current) return;

            const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
                'a[href], button:not([disabled])',
            );
            const first = focusableElements.item(0);
            const last = focusableElements.item(focusableElements.length - 1);
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        };
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', handleKeyDown);
            window.requestAnimationFrame(() => previouslyFocused?.focus());
        };
    }, []);

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-950/60 p-4 backdrop-blur-sm"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) onClose();
            }}
        >
            <section
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="account-action-title"
                aria-describedby="account-action-description"
                className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-white/60 bg-white shadow-2xl shadow-black/25 dark:border-gray-700 dark:bg-gray-900"
            >
                <div className="relative overflow-hidden bg-[#fbf6ef] px-7 pb-7 pt-8 dark:bg-gray-800 sm:px-9">
                    <div aria-hidden="true" className="absolute -right-10 -top-14 h-40 w-40 rounded-full bg-primary-400/20 blur-2xl" />
                    <button
                        ref={closeButtonRef}
                        type="button"
                        onClick={onClose}
                        aria-label="Close dialog"
                        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-gray-600 transition hover:bg-white hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 dark:bg-gray-900/80 dark:text-gray-300 dark:hover:text-white"
                    >
                        <X className="h-4 w-4" />
                    </button>
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-primary-700 shadow-sm dark:bg-gray-900 dark:text-primary-300">
                        <Heart className="h-6 w-6" />
                    </div>
                    <p className="relative mt-5 text-[10px] font-black uppercase tracking-[0.18em] text-primary-700 dark:text-primary-300">Make it yours</p>
                    <h2 id="account-action-title" className="relative mt-2 font-serif text-3xl leading-tight text-gray-900 dark:text-white">{title}</h2>
                    <p id="account-action-description" className="relative mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">{description}</p>
                </div>
                <div className="space-y-3 p-7 sm:p-9">
                    <a
                        href={APP_LINKS.signup}
                        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary-600 px-6 py-4 text-xs font-black uppercase tracking-widest text-white shadow-lg shadow-primary-600/20 transition hover:-translate-y-0.5 hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                    >
                        {createAccountLabel} <ArrowRight className="h-4 w-4" />
                    </a>
                    <a
                        href={APP_LINKS.login}
                        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-gray-200 px-6 py-4 text-xs font-black uppercase tracking-widest text-gray-800 transition hover:border-primary-400 hover:bg-primary-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-800"
                    >
                        Log in to your account
                    </a>
                    <button
                        type="button"
                        onClick={onClose}
                        className="w-full py-2 text-xs font-semibold text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                        Keep browsing
                    </button>
                </div>
            </section>
        </div>
    );
}
