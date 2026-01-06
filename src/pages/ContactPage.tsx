import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function ContactPage() {
    return (
        <main className="pt-24 bg-white min-h-screen">
            <section className="relative py-20 bg-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-primary-900/20" />
                <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">We're Here For You</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Whether you're planning a wedding, a corporate gala, or just have a question, our team is ready to help.
                    </p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-8 py-20 -mt-10 relative z-20">
                <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
                    {/* Contact Form */}
                    <div className="flex-1 p-12 md:p-16">
                        <h3 className="text-2xl font-black uppercase tracking-widest mb-8 text-gray-900">Send us a message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">First Name</label>
                                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-600 transition-colors" placeholder="Jane" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Last Name</label>
                                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-600 transition-colors" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                                <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-600 transition-colors" placeholder="jane@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Topic</label>
                                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-600 transition-colors">
                                    <option>General Inquiry</option>
                                    <option>Vendor Support</option>
                                    <option>Planner Support</option>
                                    <option>Press & Media</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
                                <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-600 transition-colors" placeholder="How can we help?" />
                            </div>
                            <button className="bg-primary-600 text-white font-black uppercase tracking-widest px-8 py-4 rounded-full text-sm hover:bg-primary-700 transition-colors w-full flex items-center justify-center gap-2">
                                Send Message <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>

                    {/* Contact Info Side */}
                    <div className="w-full md:w-[400px] bg-beige-50 p-12 md:p-16 flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-black uppercase tracking-widest mb-8 text-gray-900">Contact Info</h3>
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary-600 shadow-sm shrink-0">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Email</div>
                                        <div className="font-medium text-gray-900">hello@ariya.io</div>
                                        <div className="font-medium text-gray-900">support@ariya.io</div>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary-600 shadow-sm shrink-0">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">HQ</div>
                                        <div className="font-medium text-gray-900">123 Event Horizon Way</div>
                                        <div className="font-medium text-gray-900">San Francisco, CA 94103</div>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary-600 shadow-sm shrink-0">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Phone</div>
                                        <div className="font-medium text-gray-900">+1 (555) 123-4567</div>
                                        <div className="text-sm text-gray-500">Mon-Fri, 9am - 6pm PST</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Follow Us</div>
                            <div className="flex gap-4">
                                {['Instagram', 'Twitter', 'LinkedIn', 'Facebook'].map((social) => (
                                    <a key={social} href="#" className="text-gray-900 hover:text-primary-600 font-bold text-sm transition-colors">{social}</a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
