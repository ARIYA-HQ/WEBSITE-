import React from 'react';
import { Globe, Shield, Zap, BarChart3, Users2 } from 'lucide-react';

export default function AgenciesPage() {
    return (
        <main className="pt-24 bg-white dark:bg-gray-950 min-h-screen">
            {/* Hero */}
            <section className="relative py-32 px-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-[50vw] h-full bg-primary-50/50 skew-x-12 translate-x-32 -z-10" />
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-primary-600 mb-6">For Agencies & Venues</div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-gray-900 dark:text-white leading-none">
                            Scale Your <br /> Empire
                        </h1>
                        <p className="text-xl text-gray-500 dark:text-gray-400 mb-10 leading-relaxed max-w-lg">
                            The all-in-one platform designed to manage complex teams, multiple properties, and high-volume event businesses.
                        </p>
                        <button className="bg-black text-white dark:bg-white dark:text-black font-black uppercase tracking-widest px-10 py-5 rounded-full text-sm hover:translate-x-2 transition-transform">
                            Book a Demo
                        </button>
                    </div>
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 mt-12">
                                <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 animate-in slide-in-from-bottom-5 duration-1000">
                                    <BarChart3 className="w-8 h-8 text-primary-600 mb-4" />
                                    <div className="font-bold text-lg text-gray-900 dark:text-white">Global Analytics</div>
                                    <div className="text-xs text-gray-400">Real-time revenue tracking</div>
                                </div>
                                <div className="bg-gray-900 p-6 rounded-2xl shadow-xl text-white animate-in slide-in-from-bottom-5 duration-1000 delay-100">
                                    <Shield className="w-8 h-8 text-primary-400 mb-4" />
                                    <div className="font-bold text-lg">Enterprise Security</div>
                                    <div className="text-xs text-gray-400">SOC2 Compliant</div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-primary-600 p-6 rounded-2xl shadow-xl text-white animate-in slide-in-from-bottom-5 duration-1000 delay-200">
                                    <Users2 className="w-8 h-8 text-white mb-4" />
                                    <div className="font-bold text-lg">Team Roles</div>
                                    <div className="text-xs text-white/60">Granular permissions</div>
                                </div>
                                <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 animate-in slide-in-from-bottom-5 duration-1000 delay-300">
                                    <Zap className="w-8 h-8 text-yellow-500 mb-4" />
                                    <div className="font-bold text-lg text-gray-900 dark:text-white">Automation</div>
                                    <div className="text-xs text-gray-400">Zero-touch workflows</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* White Label Section */}
            <section className="py-24 bg-gray-900 dark:bg-black text-white">
                <div className="max-w-7xl mx-auto px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8">Your Brand, Not Ours.</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-16 text-lg">
                        Deliver a fully branded client experience. Custom domains, white-labeled portals, and your logo everywhere.
                    </p>
                    <div className="relative w-full max-w-4xl mx-auto h-[400px] border border-gray-800 rounded-2xl bg-gray-800/50 flex items-center justify-center">
                        <span className="text-gray-600 font-bold uppercase tracking-widest">Client Portal Preview</span>
                        {/* Abstract visual representation of white labeling */}
                        <div className="absolute top-8 left-8 w-32 h-8 bg-gray-700 rounded-lg animate-pulse" />
                        <div className="absolute top-24 left-8 right-8 h-2 bg-gray-700/50 rounded-full" />
                        <div className="absolute top-32 left-8 right-8 h-2 bg-gray-700/50 rounded-full w-2/3" />
                        <div className="absolute bottom-8 right-8 w-12 h-12 bg-primary-600/20 rounded-full border-2 border-primary-600 flex items-center justify-center">
                            <div className="w-2 h-2 bg-primary-600 rounded-full" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
