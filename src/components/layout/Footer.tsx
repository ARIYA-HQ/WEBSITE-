import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { FOOTER_CONFIG } from '../../config/footer';

export default function Footer() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');
        try {
            const response = await fetch('/api/waitlist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, role: 'subscriber' })
            });

            if (response.ok) {
                setStatus('success');
                setMessage('Successfully subscribed!');
                setEmail('');
            } else {
                const data = await response.json();
                setStatus('error');
                setMessage(data.error || 'Failed to subscribe');
            }
        } catch (error) {
            setStatus('error');
            setMessage('Network error. Please try again.');
        }
    };

    return (
        <footer className="mt-auto border-t border-white/10 bg-neutral-900 px-6 pb-8 pt-14 text-white sm:px-8 sm:pt-16">
            <div className="mx-auto mb-12 grid max-w-[1440px] grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                {/* Brand Column */}
                <div className="sm:col-span-2 lg:col-span-1">
                    <Link to="/" aria-label={`${FOOTER_CONFIG.brand.name} home`} className="mb-5 block w-fit">
                        <img src={`${import.meta.env.BASE_URL}brand/ariya-horizontal-reverse.svg`} alt={FOOTER_CONFIG.brand.name} className="h-9 w-auto" />
                    </Link>
                    <p className="mb-6 max-w-sm font-medium leading-relaxed text-gray-300">
                        {FOOTER_CONFIG.brand.description}
                    </p>
                    <div className="flex gap-3">
                        {FOOTER_CONFIG.brand.socials.map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:scale-105 hover:bg-primary-600"
                                aria-label={label}
                            >
                                <Icon className="w-4 h-4" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Links Columns */}
                {FOOTER_CONFIG.columns.map((column, idx) => (
                    <div key={column.title} className="min-w-0">
                        <h5 className="mb-4 text-[10px] font-black uppercase tracking-[0.16em] text-[#E18A32]">{column.title}</h5>
                        <ul className="space-y-2.5 text-sm font-medium text-gray-300">
                            {column.links.map((link) => (
                                <li key={link.href}>
                                    {link.href.startsWith('/') ? (
                                        <Link to={link.href} className="flex items-start gap-2 transition-colors duration-200 hover:text-white">
                                            {link.label}
                                        </Link>
                                    ) : (
                                        <a href={link.href} target={link.href.startsWith('mailto:') ? undefined : '_blank'} rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'} className="flex items-start gap-2 transition-colors duration-200 hover:text-white">
                                            {link.label}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                {/* Newsletter Column */}
                <div className="sm:col-span-2 lg:col-span-1">
                    <h5 className="mb-4 text-[10px] font-black uppercase tracking-[0.16em] text-[#E18A32]">{FOOTER_CONFIG.newsletter.title}</h5>
                    <p className="mb-5 text-sm leading-6 text-gray-300">
                        {FOOTER_CONFIG.newsletter.description}
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-3">
                        <div className="flex flex-col gap-2">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                                disabled={status === 'loading' || status === 'success'}
                                className="min-h-11 w-full rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30 disabled:opacity-50"
                            />
                            <button
                                type="submit"
                                disabled={status === 'loading' || status === 'success'}
                                className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-neutral-900 transition-all duration-300 hover:bg-primary-600 hover:text-white disabled:opacity-50"
                            >
                                {status === 'loading' ? (
                                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-neutral-900/30 border-t-neutral-900" />
                                ) : 'Subscribe'}
                            </button>
                        </div>
                        {status === 'success' && (
                            <div className="flex items-center gap-2 text-green-500 text-xs font-bold animate-in fade-in slide-in-from-top-1">
                                <CheckCircle2 className="w-3.5 h-3.5" /> {message}
                            </div>
                        )}
                        {status === 'error' && (
                            <div className="flex items-center gap-2 text-red-500 text-xs font-bold animate-in fade-in slide-in-from-top-1">
                                <AlertCircle className="w-3.5 h-3.5" /> {message}
                            </div>
                        )}
                    </form>
                </div>
            </div>

            <div className="mx-auto flex max-w-[1440px] flex-col gap-4 border-t border-white/10 pt-6 text-[10px] font-bold uppercase tracking-wider text-gray-400 sm:flex-row sm:items-center sm:justify-between">
                <p>{FOOTER_CONFIG.legal.copyright}</p>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {FOOTER_CONFIG.legal.links.map((link) => (
                        <Link key={link.href} to={link.href} className="transition-colors hover:text-white">{link.label}</Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}
