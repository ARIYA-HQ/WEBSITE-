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
        <footer className="bg-neutral-900 border-t border-white/10 pt-20 pb-10 px-8 text-white mt-auto">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                {/* Brand Column */}
                <div className="md:col-span-4">
                    <Link to="/" className="text-3xl font-black tracking-tighter mb-6 text-primary-600 block">{FOOTER_CONFIG.brand.name}</Link>
                    <p className="text-gray-400 max-w-sm mb-8 font-medium leading-relaxed">
                        {FOOTER_CONFIG.brand.description}
                    </p>
                    <div className="flex space-x-4">
                        {FOOTER_CONFIG.brand.socials.map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary-600 hover:scale-110 transition-all duration-300"
                                aria-label={label}
                            >
                                <Icon className="w-4 h-4" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Links Columns */}
                {FOOTER_CONFIG.columns.map((column, idx) => (
                    <div key={idx} className="md:col-span-2">
                        <h5 className="text-[10px] font-black uppercase tracking-widest text-[#D0771E] mb-6">{column.title}</h5>
                        <ul className="space-y-4 text-sm font-medium text-gray-400">
                            {column.links.map((link, i) => (
                                <li key={i}>
                                    {link.href.startsWith('/') ? (
                                        <Link to={link.href} className="hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2">
                                            {link.label}
                                        </Link>
                                    ) : (
                                        <a href={link.href} className="hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2">
                                            {link.label}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                {/* Newsletter Column */}
                <div className="md:col-span-4">
                    <h5 className="text-[10px] font-black uppercase tracking-widest text-[#D0771E] mb-6">{FOOTER_CONFIG.newsletter.title}</h5>
                    <p className="text-gray-400 text-sm mb-6">
                        {FOOTER_CONFIG.newsletter.description}
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-3">
                        <div className="flex gap-2">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                                disabled={status === 'loading' || status === 'success'}
                                className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-primary-600 transition-colors disabled:opacity-50"
                            />
                            <button
                                type="submit"
                                disabled={status === 'loading' || status === 'success'}
                                className="bg-white text-neutral-900 rounded-full px-6 py-3 text-sm font-bold hover:bg-primary-600 hover:text-white transition-all duration-300 disabled:opacity-50"
                            >
                                {status === 'loading' ? '...' : 'Subscribe'}
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

            <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-widest text-gray-500">
                <p>{FOOTER_CONFIG.legal.copyright}</p>
                <div className="flex gap-8 mt-4 md:mt-0">
                    {FOOTER_CONFIG.legal.links.map((link, i) => (
                        <Link key={i} to={link.href} className="hover:text-white transition-colors">{link.label}</Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}
