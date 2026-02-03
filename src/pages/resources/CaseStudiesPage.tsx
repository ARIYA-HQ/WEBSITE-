import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { cmsService } from '../../services/cmsService';
import { CaseStudy } from '../../types/cms';

export default function CaseStudiesPage() {
    const [studies, setStudies] = useState<CaseStudy[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        cmsService.getCaseStudies()
            .then(data => {
                setStudies(data);
            })
            .catch(error => {
                console.error('Failed to fetch case studies:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <main className="pt-24 bg-white dark:bg-gray-950 min-h-screen flex items-center justify-center">
                <div className="animate-pulse flex flex-col items-center">
                    <div className="h-4 w-32 bg-gray-200 dark:bg-gray-800 rounded mb-4"></div>
                </div>
            </main>
        );
    }

    return (
        <main className="pt-24 bg-white dark:bg-gray-950 min-h-screen">
            {/* Hero */}
            <section className="py-24 px-8 text-center max-w-5xl mx-auto">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary-600 mb-4 block animate-in fade-in slide-in-from-bottom-4 duration-700">Success Stories</span>
                <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 text-gray-900 dark:text-white animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                    Real Results, <br /> <span className="italic font-serif text-primary-600">Real Impact</span>.
                </h1>
                <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                    See how top planners, agencies, and couples are using Ariya to create unforgettable moments.
                </p>
            </section>

            {/* Case Study Grid */}
            <section className="max-w-7xl mx-auto px-8 pb-32">
                <div className="space-y-24">
                    {studies.map((study, idx) => (
                        <div key={study.id} className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                            {/* Image Side */}
                            <div className="w-full lg:w-1/2 aspect-[4/3] relative group">
                                <div className="absolute inset-0 bg-primary-200 dark:bg-primary-900/30 rounded-[2.5rem] transform rotate-3 transition-transform group-hover:rotate-6 opacity-50" />
                                <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl">
                                    <img
                                        src={study.image}
                                        alt={study.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full lg:w-1/2">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center font-black text-[10px] text-gray-900 dark:text-white">
                                        {study.logo}
                                    </span>
                                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">{study.client} • {study.industry}</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 leading-tight text-gray-900 dark:text-white">
                                    {study.title}
                                </h2>
                                <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 leading-relaxed max-w-xl">
                                    {study.desc}
                                </p>

                                {/* Metrics */}
                                <div className="grid grid-cols-3 gap-8 border-y border-gray-100 dark:border-gray-800 py-8 mb-10">
                                    {study.metrics.map((metric, mIdx) => (
                                        <div key={mIdx}>
                                            <div className="text-2xl md:text-3xl font-black text-primary-600 mb-1">{metric.value}</div>
                                            <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">{metric.label}</div>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    to={`/resources/case-studies/${study.id}`}
                                    className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-8 py-4 rounded-full hover:bg-primary-600 dark:hover:bg-primary-400 dark:hover:text-white transition-colors group"
                                >
                                    Read Story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    ))}

                    {studies.length === 0 && !loading && (
                        <div className="text-center py-24">
                            <p className="text-gray-400">No case studies found. Check back soon!</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gray-900 dark:bg-black text-white text-center rounded-t-[3rem] mt-12">
                <div className="max-w-4xl mx-auto px-8">
                    <TrendingUp className="w-12 h-12 text-primary-500 mx-auto mb-8" />
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">Ready to write your own success story?</h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-gray-900 dark:bg-primary-600 dark:text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-primary-500 hover:text-white transition-colors">
                            Start Free Trial
                        </button>
                        <button className="border border-white/30 px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-colors">
                            Book a Demo
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
