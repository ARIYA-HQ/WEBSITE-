import React from 'react';
import { Kanban, Calendar, CheckSquare, Clock, ArrowRight, Users, List, BarChart } from 'lucide-react';

export default function PlanningPage() {
    return (
        <main className="pt-24 bg-white dark:bg-gray-950 min-h-screen">
            {/* Hero */}
            <section className="relative py-24 px-8 overflow-hidden bg-purple-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-purple-600 mb-4 block animate-in fade-in slide-in-from-bottom-4 duration-700">Planning Dashboard</span>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-gray-900 dark:text-white leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                            Your central <br /><span className="text-purple-600">command center</span>.
                        </h1>
                        <p className="text-xl text-gray-500 dark:text-gray-400 mb-10 font-medium max-w-lg animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                            Manage tasks, timelines, and team collaboration in one unified view. Keep every detail on track, from the big picture to the smallest minute.
                        </p>
                        <button className="bg-purple-600 text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-purple-700 transition-colors shadow-lg shadow-purple-200 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                            Start Planning Free
                        </button>
                    </div>
                    <div className="lg:w-1/2 animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
                        <div className="bg-white dark:bg-gray-800 rounded-[2rem] p-6 shadow-2xl border border-purple-100 dark:border-gray-700 rotate-2 hover:rotate-0 transition-transform duration-500">
                            {/* Mock Kanban Board UI */}
                            <div className="flex gap-4 overflow-hidden">
                                <div className="w-48 bg-gray-50 dark:bg-gray-900 rounded-xl p-4 shrink-0">
                                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">To Do</div>
                                    <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 mb-3 text-sm font-bold text-gray-900 dark:text-white">Book Venue</div>
                                    <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 mb-3 text-sm font-bold text-gray-900 dark:text-white">Send Invites</div>
                                </div>
                                <div className="w-48 bg-purple-50/50 dark:bg-purple-900/10 rounded-xl p-4 shrink-0">
                                    <div className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-4">In Progress</div>
                                    <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm border border-purple-100 dark:border-purple-900 mb-3 text-sm font-bold border-l-4 border-purple-500 text-gray-900 dark:text-white">Tasting Menu</div>
                                </div>
                                <div className="w-48 bg-gray-50 dark:bg-gray-900 rounded-xl p-4 shrink-0">
                                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Done</div>
                                    <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 mb-3 text-sm font-bold line-through text-gray-400 dark:text-gray-500">Budget Approval</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        {
                            icon: List,
                            title: "Smart Checklists",
                            desc: "Pre-loaded templates for every event type. customized to your timeline."
                        },
                        {
                            icon: Clock,
                            title: "Run of Show",
                            desc: "Minute-by-minute schedules that sync with your team and vendors."
                        },
                        {
                            icon: Users,
                            title: "Team Collaboration",
                            desc: "Assign tasks, @mention team members, and track progress in real-time."
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="group">
                            <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{item.title}</h3>
                            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Views Section */}
            <section className="bg-gray-900 dark:bg-black text-white py-24 px-8 rounded-[3rem] mx-4 mb-12 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-[100px] opacity-20" />
                <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-16">
                    <div className="md:w-1/2">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="p-2 rounded-lg bg-white/10"><Kanban className="w-5 h-5" /></span>
                            <span className="p-2 rounded-lg bg-white/10"><Calendar className="w-5 h-5" /></span>
                            <span className="p-2 rounded-lg bg-white/10"><List className="w-5 h-5" /></span>
                        </div>
                        <h2 className="text-4xl font-black tracking-tight mb-6">Work the way you think.</h2>
                        <p className="text-gray-400 text-lg mb-8">
                            Switch instantly between Kanban board, Calendar view, and List view. Ariya adapts to your preferred workflow style.
                        </p>
                        <button className="flex items-center gap-2 text-purple-400 font-bold uppercase tracking-widest text-xs hover:text-white transition-colors">
                            Explore Views <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="md:w-1/2">
                        {/* Placeholder for view switcher animation */}
                        <div className="aspect-[4/3] bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm flex items-center justify-center">
                            <span className="font-mono text-gray-500">Interactive View Demo</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
