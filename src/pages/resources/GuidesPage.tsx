import React, { useState } from 'react';
import { Download, FileText, CheckSquare, Layers, ArrowRight, Filter } from 'lucide-react';

const resources = [
    {
        type: "Guide",
        title: "The 2026 Event Trends Report",
        desc: "A comprehensive look at the colors, themes, and technologies shaping the future of events.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2070",
        format: "PDF",
        size: "12 MB"
    },
    {
        type: "Template",
        title: "Ultimate Wedding Budget Spreadsheet",
        desc: "A detailed, formula-ready spreadsheet to track every penny. Includes categories for international events.",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2070",
        format: "Excel",
        size: "2 MB"
    },
    {
        type: "Checklist",
        title: "30-Day Launch Checklist",
        desc: "Don't miss a beat in the final month. A daily countdown of tasks for the perfect execution.",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=2072",
        format: "PDF",
        size: "1 MB"
    },
    {
        type: "Guide",
        title: "Vendor Negotiation Playbook",
        desc: "Scripts and strategies to get the best rates and terms from your event partners.",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2032",
        format: "PDF",
        size: "4 MB"
    },
    {
        type: "Template",
        title: "Run of Show Master Template",
        desc: "The industry standard for minute-by-minute event timing. Keeps everyone in sync.",
        image: "https://images.unsplash.com/photo-1505373877841-8d43f7d63e5e?auto=format&fit=crop&q=80&w=2075",
        format: "Word",
        size: "3 MB"
    },
    {
        type: "Checklist",
        title: "Venue Site Visit Inspection",
        desc: "The 100 questions you need to ask before signing a venue contract.",
        image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=2098",
        format: "PDF",
        size: "1.5 MB"
    }
];

export default function GuidesPage() {
    const [filter, setFilter] = useState("All");

    const filteredResources = filter === "All"
        ? resources
        : resources.filter(r => r.type.includes(filter));

    return (
        <main className="pt-24 bg-beige-50 min-h-screen">
            {/* Header */}
            <section className="py-24 px-8 text-center max-w-4xl mx-auto">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary-600 mb-4 block animate-in fade-in slide-in-from-bottom-4 duration-700">Resource Library</span>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-gray-900 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                    Tools for your <span className="italic font-serif text-primary-600 text-6xl md:text-8xl">Success</span>.
                </h1>
                <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
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
                                    ? 'bg-gray-900 text-white border-gray-900 shadow-lg'
                                    : 'bg-white text-gray-900 border-gray-200 hover:border-gray-900'
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
                        <div key={idx} className="group bg-white rounded-[2rem] p-4 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 flex flex-col">
                            <div className="aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-6 relative">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-900 flex items-center gap-2">
                                    {item.type === "Guide" && <FileText className="w-3 h-3 text-primary-600" />}
                                    {item.type === "Template" && <Layers className="w-3 h-3 text-blue-600" />}
                                    {item.type === "Checklist" && <CheckSquare className="w-3 h-3 text-green-600" />}
                                    {item.type}
                                </div>
                            </div>
                            <div className="px-4 pb-4 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold tracking-tight mb-3 leading-tight group-hover:text-primary-600 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-500 mb-6 leading-relaxed flex-1">
                                    {item.desc}
                                </p>
                                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                        {item.format} • {item.size}
                                    </span>
                                    <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-900 hover:bg-gray-900 hover:text-white transition-all">
                                        <Download className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
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
