import React from 'react';
import { Download, FileText, CheckSquare, Layers } from 'lucide-react';
import { Resource } from '../../types/cms';

interface ResourceCardProps {
    resource: Resource;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
    return (
        <div className="group bg-white dark:bg-gray-900 rounded-[2rem] p-4 hover:shadow-2xl hover:shadow-gray-200/50 dark:hover:shadow-none hover:border-primary-500 transition-all duration-500 flex flex-col border border-transparent dark:border-gray-800">
            <div className="aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-6 relative">
                <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-900 flex items-center gap-2">
                    {resource.type === "Guide" && <FileText className="w-3 h-3 text-primary-600" />}
                    {resource.type === "Template" && <Layers className="w-3 h-3 text-blue-600" />}
                    {resource.type === "Checklist" && <CheckSquare className="w-3 h-3 text-green-600" />}
                    {resource.type}
                </div>
            </div>
            <div className="px-4 pb-4 flex-1 flex flex-col">
                <h3 className="text-xl font-bold tracking-tight mb-3 leading-tight group-hover:text-primary-600 transition-colors text-gray-900 dark:text-white">
                    {resource.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed flex-1">
                    {resource.desc}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-gray-800">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                        {resource.format} • {resource.size}
                    </span>
                    <button className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-900 dark:text-white hover:bg-gray-900 dark:hover:bg-primary-600 hover:text-white transition-all">
                        <Download className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
