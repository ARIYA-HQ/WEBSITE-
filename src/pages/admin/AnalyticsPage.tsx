import React, { useState, useEffect } from 'react';
import { ArrowUp, ArrowDown, Users, Eye, Clock, MousePointer, TrendingUp, Calendar, Loader2 } from 'lucide-react';
import { cmsService } from '../../services/cmsService';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    Cell
} from 'recharts';

export default function AnalyticsPage() {
    const [overview, setOverview] = useState<any>(null);
    const [growth, setGrowth] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const [ovData, growthData] = await Promise.all([
                    cmsService.getAnalyticsOverview(),
                    cmsService.getWaitlistGrowth()
                ]);
                setOverview(ovData);
                setGrowth(growthData);
            } catch (err) {
                console.error('Failed to fetch analytics:', err);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);

    if (isLoading) {
        return (
            <div className="flex-1 flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-950">
                <Loader2 className="w-8 h-8 text-primary-600 animate-spin" />
            </div>
        );
    }

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
                        label="Waitlist Total"
                        value={overview?.waitlist || 0}
                        trend="+100%"
                        trendUp={true}
                        icon={<Users className="w-5 h-5" />}
                        color="orange"
                    />
                    <MetricCard
                        label="Blog Posts"
                        value={overview?.blogPosts || 0}
                        trend={`${overview?.publishedPosts || 0} Live`}
                        trendUp={true}
                        icon={<Eye className="w-5 h-5" />}
                        color="blue"
                    />
                    <MetricCard
                        label="Resources"
                        value={overview?.resources || 0}
                        trend="Active"
                        trendUp={true}
                        icon={<Clock className="w-5 h-5" />}
                        color="green"
                    />
                    <MetricCard
                        label="Case Studies"
                        value={overview?.caseStudies || 0}
                        trend="Total"
                        trendUp={true}
                        icon={<MousePointer className="w-5 h-5" />}
                        color="purple"
                    />
                </div>

                {/* Main Chart Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    <div className="lg:col-span-2 bg-white dark:bg-gray-900 p-6 md:p-10 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-800">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 md:mb-12">
                            <div>
                                <h2 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">Waitlist Growth</h2>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Signups categorized by date</p>
                            </div>
                        </div>

                        <div className="h-72 w-full">
                            {growth.length > 0 ? (
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={growth}>
                                        <defs>
                                            <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                                                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <XAxis
                                            dataKey="date"
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ fill: '#9ca3af', fontSize: 10, fontWeight: 900 }}
                                            dy={10}
                                        />
                                        <YAxis hide />
                                        <Tooltip
                                            contentStyle={{
                                                backgroundColor: '#111827',
                                                border: 'none',
                                                borderRadius: '8px',
                                                fontSize: '10px',
                                                fontWeight: '900',
                                                color: '#fff'
                                            }}
                                            itemStyle={{ color: '#fff' }}
                                        />
                                        <Area
                                            type="monotone"
                                            dataKey="count"
                                            stroke="#8b5cf6"
                                            strokeWidth={3}
                                            fillOpacity={1}
                                            fill="url(#colorCount)"
                                        />
                                    </AreaChart>
                                </ResponsiveContainer>
                            ) : (
                                <div className="h-full flex items-center justify-center text-gray-400 font-bold italic">
                                    No waitlist data available yet
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Content Distribution */}
                    <div className="bg-white dark:bg-gray-900 p-10 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-800">
                        <h2 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight mb-8">Composition</h2>
                        <div className="space-y-6">
                            {[
                                { title: "Blog Posts", val: overview?.blogPosts || 0, color: '#3b82f6' },
                                { title: "Case Studies", val: overview?.caseStudies || 0, color: '#a855f7' },
                                { title: "Resources", val: overview?.resources || 0, color: '#10b981' },
                            ].map((item, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs font-black text-gray-500 uppercase tracking-widest">{item.title}</span>
                                        <span className="text-sm font-black text-gray-900 dark:text-white">{item.val}</span>
                                    </div>
                                    <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                                        <div
                                            className="h-full transition-all duration-1000"
                                            style={{
                                                width: `${(item.val / ((overview?.blogPosts || 0) + (overview?.caseStudies || 0) + (overview?.resources || 0) || 1)) * 100}%`,
                                                backgroundColor: item.color
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-12 p-6 rounded-2xl bg-primary-50 dark:bg-primary-900/10 border border-primary-100 dark:border-primary-900/20">
                            <h4 className="text-xs font-black text-primary-600 dark:text-primary-400 uppercase tracking-widest mb-2">Total Managed Assets</h4>
                            <p className="text-3xl font-black text-gray-900 dark:text-white">{(overview?.blogPosts || 0) + (overview?.caseStudies || 0) + (overview?.resources || 0)}</p>
                        </div>
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
                    {trendUp ? <TrendingUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                    {trend}
                </div>
            </div>
        </div>
    );
}

