import React from 'react';
import { ArrowUp, ArrowDown, Users, Eye, Clock, MousePointer, TrendingUp, Calendar } from 'lucide-react';

export default function AnalyticsPage() {
    return (
        <div className="flex-1 px-4 md:px-8 py-8 h-screen overflow-y-auto relative bg-gray-50 dark:bg-gray-950">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-100/20 dark:bg-blue-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary-100/20 dark:bg-primary-900/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="mb-12">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-[10px] font-black uppercase tracking-widest text-gray-500">System</span>
                        <span className="text-gray-300 dark:text-gray-700">/</span>
                        <span className="text-xs font-bold text-gray-900 dark:text-gray-300 uppercase tracking-widest">Analytics</span>
                    </div>
                    <h1 className="text-4xl font-black text-gray-900 dark:text-white tracking-tighter mb-2">Analytics</h1>
                    <p className="text-gray-500 dark:text-gray-400 font-medium">Track your content performance and audience growth.</p>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <MetricCard
                        label="Total Views"
                        value="124.5K"
                        trend="+12%"
                        trendUp={true}
                        icon={<Eye className="w-5 h-5" />}
                        color="blue"
                    />
                    <MetricCard
                        label="Avg. Read Time"
                        value="4m 32s"
                        trend="+5%"
                        trendUp={true}
                        icon={<Clock className="w-5 h-5" />}
                        color="green"
                    />
                    <MetricCard
                        label="Click Rate"
                        value="12.8%"
                        trend="-2%"
                        trendUp={false}
                        icon={<MousePointer className="w-5 h-5" />}
                        color="purple"
                    />
                    <MetricCard
                        label="Active Users"
                        value="8,902"
                        trend="+24%"
                        trendUp={true}
                        icon={<Users className="w-5 h-5" />}
                        color="orange"
                    />
                </div>

                {/* Main Chart Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    <div className="lg:col-span-2 bg-white dark:bg-gray-900 p-6 md:p-10 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-800">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 md:mb-12">
                            <div>
                                <h2 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">Traffic Overview</h2>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Unique visitors across all pages</p>
                            </div>
                            <select className="bg-gray-50 dark:bg-gray-800 border-none rounded-xl px-4 py-2 text-xs font-black text-gray-500 uppercase tracking-widest cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors outline-none focus:ring-2 ring-primary-500/20">
                                <option>Last 7 Days</option>
                                <option>Last 30 Days</option>
                                <option>This Year</option>
                            </select>
                        </div>
                        {/* Improved Mock Chart Area */}
                        <div className="h-64 w-full flex items-end justify-between gap-3 px-4 relative">
                            {/* Grid Lines */}
                            <div className="absolute inset-0 flex flex-col justify-between py-2 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
                                {[1, 2, 3, 4].map(l => <div key={l} className="w-full border-t border-gray-900 dark:border-white" />)}
                            </div>

                            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95].map((h, i) => (
                                <div key={i} className="w-full bg-gray-50 dark:bg-gray-800/50 rounded-t-2xl relative group cursor-pointer h-full flex flex-col justify-end">
                                    <div
                                        className="w-full bg-gradient-to-t from-primary-600 to-primary-400 opacity-80 group-hover:opacity-100 transition-all duration-500 rounded-t-2xl relative"
                                        style={{ height: `${h}%` }}
                                    >
                                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-[10px] font-black py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-all transform group-hover:-translate-y-2 shadow-xl whitespace-nowrap z-20">
                                            {h * 100} Views
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between mt-8 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                            <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                        </div>
                    </div>

                    {/* Top Content List */}
                    <div className="bg-white dark:bg-gray-900 p-10 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-800">
                        <h2 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight mb-8">Top Content</h2>
                        <div className="space-y-6">
                            {[
                                { title: "2026 Event Trends Report", views: "12K", type: "Guide" },
                                { title: "ROI of Specialized Software", views: "8.5K", type: "Post" },
                                { title: "Gen Z Marketing Guide", views: "6.2K", type: "Post" },
                                { title: "Wedding Budget Template", views: "5.9K", type: "Resource" },
                                { title: "Automation Case Study", views: "4.1K", type: "Case Study" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between group cursor-pointer p-3 -mx-3 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                                    <div className="flex items-center gap-4">
                                        <span className="text-[10px] font-black text-gray-300 dark:text-gray-700 w-4">{i + 1}</span>
                                        <div>
                                            <h4 className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">{item.title}</h4>
                                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{item.type}</span>
                                        </div>
                                    </div>
                                    <span className="text-xs font-black text-gray-900 dark:text-gray-300">{item.views}</span>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-10 py-4 rounded-xl border border-gray-100 dark:border-gray-800 text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-all active:scale-95 shadow-sm">
                            View Detailed Report
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function MetricCard({ label, value, trend, trendUp, icon, color }: any) {
    const iconColors: any = {
        blue: 'text-blue-600',
        green: 'text-green-600',
        purple: 'text-purple-600',
        orange: 'text-orange-600',
    };

    return (
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-all group">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.1em] group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">{label}</h3>
                <div className={`${iconColors[color] || 'text-primary-600'} transition-transform group-hover:scale-110 duration-300`}>
                    {icon}
                </div>
            </div>
            <div className="flex items-end justify-between">
                <p className="text-3xl font-black text-gray-900 dark:text-white tracking-tighter">{value}</p>
                <div className={`flex items-center gap-1 text-[10px] font-black px-2 py-1 rounded-full ${trendUp ? 'bg-green-50 text-green-600 dark:bg-green-900/20' : 'bg-red-50 text-red-600 dark:bg-red-900/20'}`}>
                    {trendUp ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                    {trend}
                </div>
            </div>
        </div>
    );
}
