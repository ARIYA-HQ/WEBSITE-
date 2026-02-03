import React, { useEffect, useState } from 'react';
import { Download, FileText, CheckSquare, Layers, ArrowRight, Filter } from 'lucide-react';
import { cmsService } from '../../services/cmsService';
import { Resource } from '../../types/cms';
import ResourceCard from '../../components/resources/ResourceCard';

export default function GuidesPage() {
    const [resources, setResources] = useState<Resource[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState("All");

    useEffect(() => {
        cmsService.getResources().then(data => {
            setResources(data);
            setLoading(false);
        });
    }, []);

    const filteredResources = filter === "All"
        ? resources
        : resources.filter(r => r.type === filter); // Exact match for type

    return (
        <main className="pt-24 bg-beige-50 dark:bg-gray-950 min-h-screen">
            {/* Header */}
            <section className="py-24 px-8 text-center max-w-4xl mx-auto">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary-600 mb-4 block animate-in fade-in slide-in-from-bottom-4 duration-700">Resource Library</span>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-gray-900 dark:text-white animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                    Tools for your <span className="italic font-serif text-primary-600 text-6xl md:text-8xl">Success</span>.
                </h1>
                <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                    Download expert-crafted guides, templates, and checklists to streamline your planning process.
                </p>
            </section>

            {/* Filters */}
            <section className="px-8 mb-16">
                <div className="flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                    {["All", "Guide", "Template", "Checklist"].map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest border transition-all duration-300 ${filter === f
                                ? 'bg-gray-900 text-white border-gray-900 shadow-lg dark:bg-white dark:text-gray-900'
                                : 'bg-white text-gray-900 border-gray-200 hover:border-gray-900 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-800 dark:hover:border-white'
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </section>

            {/* Grid */}
            <section className="max-w-7xl mx-auto px-8 pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredResources.map((item, idx) => (
                        <ResourceCard key={idx} resource={item} />
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-primary-600 mx-4 md:mx-8 rounded-[3rem] text-center text-white relative overflow-hidden mb-12">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                <div className="relative z-10 max-w-2xl mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">Unlock Full Access</h2>
                    <p className="text-primary-100 text-lg mb-8 font-medium">
                        Get unlimited access to over 500+ premium templates and tools when you join Ariya Pro.
                    </p>
                    <button className="bg-white text-primary-900 px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-gray-100 transition-colors shadow-xl">
                        Start Free Trial
                    </button>
                </div>
            </section>
        </main>
    );
}
