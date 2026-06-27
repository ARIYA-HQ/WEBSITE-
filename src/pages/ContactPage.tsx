import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactPage() {
    const [form, setForm] = useState({ firstName: '', lastName: '', email: '', topic: 'General Inquiry', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMsg('');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            if (res.ok) {
                setStatus('success');
                setForm({ firstName: '', lastName: '', email: '', topic: 'General Inquiry', message: '' });
            } else {
                const data = await res.json().catch(() => ({}));
                setStatus('error');
                setErrorMsg(data.error || 'Failed to send message. Please try again.');
            }
        } catch {
            setStatus('error');
            setErrorMsg('Network error. Please try again.');
        }
    };

    return (
        <main className="pt-24 bg-white dark:bg-gray-950 min-h-screen">
            <section className="relative py-20 bg-gray-900 dark:bg-black text-white overflow-hidden">
                <div className="absolute inset-0 bg-primary-900/20" />
                <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">We're Here For You</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Whether you're planning a wedding, a corporate gala, or just have a question, our team is ready to help.
                    </p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-8 py-20 -mt-10 relative z-20">
                <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-2xl dark:shadow-none overflow-hidden flex flex-col md:flex-row border border-gray-100 dark:border-gray-800">
                    {/* Contact Form */}
                    <div className="flex-1 p-12 md:p-16">
                        <h3 className="text-2xl font-black uppercase tracking-widest mb-8 text-gray-900 dark:text-white">Send us a message</h3>

                        {status === 'success' ? (
                            <div className="flex flex-col items-center justify-center py-16 text-center">
                                <CheckCircle2 className="w-16 h-16 text-green-500 mb-6" />
                                <h4 className="text-xl font-black text-gray-900 dark:text-white mb-2">Message Sent!</h4>
                                <p className="text-gray-500 dark:text-gray-400 mb-8">We'll get back to you within 24 hours.</p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="text-sm font-bold uppercase tracking-widest text-primary-600 hover:text-primary-700 transition-colors"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500">First Name</label>
                                        <input
                                            type="text" name="firstName" required
                                            value={form.firstName} onChange={handleChange}
                                            className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-600 transition-colors text-gray-900 dark:text-white"
                                            placeholder="Jane"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Last Name</label>
                                        <input
                                            type="text" name="lastName" required
                                            value={form.lastName} onChange={handleChange}
                                            className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-600 transition-colors text-gray-900 dark:text-white"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                                    <input
                                        type="email" name="email" required
                                        value={form.email} onChange={handleChange}
                                        className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-600 transition-colors text-gray-900 dark:text-white"
                                        placeholder="jane@example.com"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Topic</label>
                                    <select
                                        name="topic" value={form.topic} onChange={handleChange}
                                        className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-600 transition-colors text-gray-900 dark:text-white"
                                    >
                                        <option>General Inquiry</option>
                                        <option>Vendor Support</option>
                                        <option>Planner Support</option>
                                        <option>Press & Media</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
                                    <textarea
                                        rows={4} name="message" required
                                        value={form.message} onChange={handleChange}
                                        className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-600 transition-colors text-gray-900 dark:text-white"
                                        placeholder="How can we help?"
                                    />
                                </div>

                                {status === 'error' && (
                                    <div className="flex items-center gap-2 text-red-500 text-xs font-bold">
                                        <AlertCircle className="w-4 h-4 shrink-0" /> {errorMsg}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="bg-primary-600 text-white font-black uppercase tracking-widest px-8 py-4 rounded-full text-sm hover:bg-primary-700 transition-colors w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {status === 'loading' ? (
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <>Send Message <Send className="w-4 h-4" /></>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Contact Info Side */}
                    <div className="w-full md:w-[400px] bg-beige-50 dark:bg-gray-800/50 p-12 md:p-16 flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-black uppercase tracking-widest mb-8 text-gray-900 dark:text-white">Contact Info</h3>
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center text-primary-600 shadow-sm shrink-0">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Email</div>
                                        <div className="font-medium text-gray-900 dark:text-gray-200">ariyainfoteam@gmail.com</div>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center text-primary-600 shadow-sm shrink-0">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">HQ</div>
                                        <div className="font-medium text-gray-900 dark:text-gray-200">17, Damole, Bariga</div>
                                        <div className="font-medium text-gray-900 dark:text-gray-200">Lagos, Nigeria</div>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center text-primary-600 shadow-sm shrink-0">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Phone</div>
                                        <div className="font-medium text-gray-900 dark:text-gray-200">09055380387</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">Mon-Fri, 9am - 6pm WAT</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Follow Us</div>
                            <div className="flex gap-4">
                                {[
                                    { name: 'Instagram', href: 'https://www.instagram.com/ariya_hq/' },
                                    { name: 'Twitter', href: 'https://x.com/Ariya_HQ' },
                                    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/111719206/' }
                                ].map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-900 dark:text-white hover:text-primary-600 transition-colors font-bold text-sm"
                                    >
                                        {social.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
