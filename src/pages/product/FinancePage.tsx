import React from 'react';
import { Calculator, Users, PieChart, CreditCard, Mail, ArrowRight } from 'lucide-react';

export default function FinancePage() {
    return (
        <main className="pt-24 bg-white dark:bg-gray-950 min-h-screen">
            {/* Hero */}
            <section className="relative py-24 px-8 overflow-hidden bg-green-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-green-600 mb-4 block animate-in fade-in slide-in-from-bottom-4 duration-700">Budget & Guest List</span>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-gray-900 dark:text-white leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                            Control expenses, <br /> manage the crowd.
                        </h1>
                        <p className="text-xl text-gray-500 dark:text-gray-400 mb-10 font-medium max-w-lg animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                            Keep your budget in the green and your guest list organized. Track payments, collect RSVPs, and assign seats with ease.
                        </p>
                        <button className="bg-green-600 text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-green-700 transition-colors shadow-lg shadow-green-200 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                            Try Budget Tool
                        </button>
                    </div>
                    <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
                        {/* Mock Charts */}
                        <div className="bg-white dark:bg-gray-800 rounded-[2rem] p-8 shadow-2xl border border-green-100 dark:border-green-900 space-y-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">Total Budget</div>
                                    <div className="text-3xl font-black text-gray-900 dark:text-white">$150,000</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">Remaining</div>
                                    <div className="text-3xl font-black text-green-600">$24,500</div>
                                </div>
                            </div>
                            <div className="h-4 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-full w-[85%] bg-green-500 rounded-full" />
                            </div>
                            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                                <div className="text-center">
                                    <div className="text-lg font-black text-gray-900 dark:text-white">142</div>
                                    <div className="text-[10px] text-gray-400 font-bold uppercase">Confirmed</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-lg font-black text-gray-900 dark:text-white">12</div>
                                    <div className="text-[10px] text-gray-400 font-bold uppercase">Pending</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-lg font-black text-gray-900 dark:text-white">5</div>
                                    <div className="text-[10px] text-gray-400 font-bold uppercase">Declined</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Split */}
            <section className="py-24 px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Finance Side */}
                    <div className="group border border-gray-100 dark:border-gray-800 rounded-[3rem] p-10 hover:shadow-2xl hover:shadow-green-900/10 transition-all duration-500 bg-white dark:bg-gray-900">
                        <div className="w-16 h-16 rounded-2xl bg-green-100 dark:bg-green-900/20 flex items-center justify-center text-green-600 mb-8">
                            <PieChart className="w-8 h-8" />
                        </div>
                        <h3 className="text-3xl font-black tracking-tight mb-6 text-gray-900 dark:text-white">Master Your Money</h3>
                        <ul className="space-y-4 text-gray-500 dark:text-gray-400 font-medium">
                            <li className="flex items-start gap-4">
                                <CreditCard className="w-6 h-6 text-green-500 shrink-0" />
                                Track payments and due dates automatically.
                            </li>
                            <li className="flex items-start gap-4">
                                <Calculator className="w-6 h-6 text-green-500 shrink-0" />
                                Calculate costs per head instantly.
                            </li>
                            <li className="flex items-start gap-4">
                                <PieChart className="w-6 h-6 text-green-500 shrink-0" />
                                Visualize spending breakdown by category.
                            </li>
                        </ul>
                    </div>

                    {/* Guests Side */}
                    <div className="group border border-gray-100 dark:border-gray-800 rounded-[3rem] p-10 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 bg-white dark:bg-gray-900">
                        <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 mb-8">
                            <Users className="w-8 h-8" />
                        </div>
                        <h3 className="text-3xl font-black tracking-tight mb-6 text-gray-900 dark:text-white">Guest Experience</h3>
                        <ul className="space-y-4 text-gray-500 dark:text-gray-400 font-medium">
                            <li className="flex items-start gap-4">
                                <Mail className="w-6 h-6 text-blue-500 shrink-0" />
                                Send digital invites and track opens.
                            </li>
                            <li className="flex items-start gap-4">
                                <Users className="w-6 h-6 text-blue-500 shrink-0" />
                                Drag-and-drop seating chart builder.
                            </li>
                            <li className="flex items-start gap-4">
                                <Users className="w-6 h-6 text-blue-500 shrink-0" />
                                Collect dietary restrictions and +1s.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}
