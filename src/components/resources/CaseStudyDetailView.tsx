import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Quote, CheckCircle2 } from 'lucide-react';
import { CaseStudy } from '../../types/cms';

interface CaseStudyDetailViewProps {
    study: CaseStudy;
    preview?: boolean;
}

export default function CaseStudyDetailView({ study, preview = false }: CaseStudyDetailViewProps) {
    return (
        <div className="bg-white dark:bg-gray-950 min-h-screen">
            {/* Header */}
            <header className="max-w-5xl mx-auto px-8 pt-12 pb-24 text-center">
                {!preview && (
                    <Link to="/resources/case-studies" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-gray-900 dark:hover:text-white mb-12 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Stories
                    </Link>
                )}
                {preview && (
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 mb-12 opacity-50 cursor-not-allowed">
                        <ArrowLeft className="w-4 h-4" /> Back to Stories
                    </div>
                )}

                <div className="flex items-center justify-center gap-3 mb-8">
                    <span className="w-10 h-10 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center font-black text-xs text-white dark:text-gray-900">
                        {study.logo}
                    </span>
                    <span className="text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-white">{study.client}</span>
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-12 text-gray-900 dark:text-white leading-[1.1]">
                    {study.title}
                </h1>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-12 max-w-3xl mx-auto">
                    {study.metrics?.map((metric, idx) => (
                        <div key={idx} className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6">
                            <div className="text-3xl md:text-4xl font-black text-primary-600 mb-2">{metric.value}</div>
                            <div className="text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-400 font-bold">{metric.label}</div>
                        </div>
                    ))}
                </div>
            </header>

            {/* Hero Image */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
                <div className="w-full aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl">
                    <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
                </div>
            </div>

            {/* Content Body */}
            <article className="max-w-4xl mx-auto px-8 pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
                    <div>
                        <h3 className="text-2xl font-black tracking-tight mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
                            <span className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600"><CheckCircle2 className="w-5 h-5" /></span>
                            The Challenge
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-lg">{study.challenge}</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-black tracking-tight mb-4 flex items-center gap-3 text-gray-900 dark:text-white">
                            <span className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600"><CheckCircle2 className="w-5 h-5" /></span>
                            The Solution
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-lg">{study.solution}</p>
                    </div>
                </div>

                {study.testimonial && (
                    <div className="bg-gray-900 dark:bg-gray-800 text-white rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden mb-24">
                        <Quote className="w-24 h-24 text-white/10 absolute top-8 left-8" />
                        <blockquote className="relative z-10 text-2xl md:text-4xl font-bold leading-tight mb-8">
                            "{study.testimonial.quote}"
                        </blockquote>
                        <div className="relative z-10">
                            <div className="font-bold text-lg">{study.testimonial.author}</div>
                            <div className="text-primary-500 text-sm font-bold uppercase tracking-widest">{study.testimonial.role}</div>
                        </div>
                    </div>
                )}

                <div className="max-w-2xl mx-auto">
                    <h3 className="text-2xl font-black tracking-tight mb-6 text-gray-900 dark:text-white">The Result</h3>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-lg mb-12">
                        {study.result}
                    </p>
                    <div className="h-px bg-gray-100 dark:bg-gray-800 w-full mb-12" />
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-primary-50 dark:bg-primary-900/10 p-8 rounded-3xl">
                        <div>
                            <div className="font-bold text-xl mb-1 text-gray-900 dark:text-white">Get similar results</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">See what Ariya can do for you.</div>
                        </div>
                        <button className="bg-primary-600 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-700 transition-colors">
                            Book a Demo
                        </button>
                    </div>
                </div>
            </article>
        </div>
    );
}
