import React from 'react';
import { ArrowUp, ArrowDown, Users, Eye, Clock, MousePointer, TrendingUp, Calendar } from 'lucide-react';

export default function AnalyticsPage() {
    return (
        <main className="bg-gray-50 dark:bg-gray-950 min-h-screen p-8 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="mb-12">
                    <h1 className="text-4xl font-black text-gray-900 dark:text-white tracking-tighter mb-2">Analytics</h1>
                    <p className="text-gray-500 dark:text-gray-400">Track your content performance and audience growth.</p>
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
                    <div className="lg:col-span-2 bg-white dark:bg-gray-900 p-8 rounded-[2rem] shadow-xl border border-gray-100 dark:border-gray-800">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Traffic Overview</h2>
                            <select className="bg-gray-50 dark:bg-gray-800 border-none rounded-lg px-4 py-2 text-xs font-bold text-gray-500 uppercase tracking-widest cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                <option>Last 7 Days</option>
                                <option>Last 30 Days</option>
                                <option>This Year</option>
                            </select>
                        </div>
                        {/* Mock Chart Area */}
                        <div className="h-64 w-full flex items-end justify-between gap-2 px-4">
                            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95].map((h, i) => (
                                <div key={i} className="w-full bg-gray-100 dark:bg-gray-800 rounded-t-xl relative group overflow-hidden">
                                    <div
                                        className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-primary-600 to-primary-400 opacity-80 group-hover:opacity-100 transition-all duration-500 rounded-t-xl"
                                        style={{ height: `${h}%` }}
                                    ></div>
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                        {h * 100}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between mt-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
                            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                            <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                        </div>
                    </div>

                    {/* Top Content List */}
                    <div className="bg-white dark:bg-gray-900 p-8 rounded-[2rem] shadow-xl border border-gray-100 dark:border-gray-800">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Top Content</h2>
                        <div className="space-y-6">
                            {[
                                { title: "2026 Event Trends Report", views: "12K", type: "Guide" },
                                { title: "ROI of Specialized Software", views: "8.5K", type: "Post" },
                                { title: "Gen Z Marketing Guide", views: "6.2K", type: "Post" },
                                { title: "Wedding Budget Template", views: "5.9K", type: "Resource" },
                                { title: "Automation Case Study", views: "4.1K", type: "Case Study" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between group cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        <span className="text-xs font-black text-gray-300 w-4">{i + 1}</span>
                                        <div>
                                            <h4 className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">{item.title}</h4>
                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.type}</span>
                                        </div>
                                    </div>
                                    <span className="text-xs font-bold text-gray-900 dark:text-gray-300">{item.views}</span>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-8 py-3 rounded-xl border border-gray-100 dark:border-gray-800 text-xs font-black uppercase tracking-widest text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            View All Report
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}

function MetricCard({ label, value, trend, trendUp, icon, color }: any) {
    const colors: any = {
        blue: 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400',
        green: 'bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400',
        purple: 'bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400',
        orange: 'bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400',
    };

    return (
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 hover:transform hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${colors[color]}`}>
                    {icon}
                </div>
                <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-lg ${trendUp ? 'bg-green-100 text-green-700 dark:bg-green-900/30' : 'bg-red-100 text-red-700 dark:bg-red-900/30'}`}>
                    {trendUp ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                    {trend}
                </div>
            </div>
            <div>
                <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">{label}</h3>
                <p className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">{value}</p>
            </div>
        </div>
    );
}
