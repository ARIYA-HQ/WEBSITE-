import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Save, Plus, Eye, X } from 'lucide-react';
import { cmsService } from '../../services/cmsService';
import { Resource } from '../../types/cms';
import ResourceCard from '../../components/resources/ResourceCard';

export default function ResourceEditorPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const isEditMode = Boolean(id);
    const [loading, setLoading] = useState(false);
    const [showPreview, setShowPreview] = useState(false);

    const [formData, setFormData] = useState<Partial<Resource>>({
        title: '',
        desc: '',
        type: 'Guide',
        format: 'PDF',
        size: '1 MB',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2070',
        downloadUrl: '#',
        status: 'published'
    });

    useEffect(() => {
        if (isEditMode && id) {
            cmsService.getResourceById(parseInt(id)).then(item => {
                if (item) setFormData(item);
            });
        }
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (isEditMode && id) {
                await cmsService.updateResource(parseInt(id), formData);
            } else {
                await cmsService.createResource(formData as Omit<Resource, 'id'>);
            }
            navigate('/admin');
        } catch (error) {
            alert('Failed to save');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <main className="pt-8 bg-gray-50 dark:bg-gray-950 min-h-screen pb-24 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary-100/30 dark:bg-primary-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-orange-100/30 dark:bg-orange-900/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

            {/* Preview Modal */}
            {showPreview && (
                <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
                    <div className="bg-gray-50 dark:bg-gray-950 rounded-[2.5rem] p-8 max-w-2xl w-full relative shadow-2xl">
                        <button
                            onClick={() => setShowPreview(false)}
                            className="absolute top-4 right-4 z-[60] bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700 group"
                        >
                            <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                        </button>

                        <div className="text-center mb-8">
                            <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2">Card Preview</h3>
                            <p className="text-sm text-gray-500">This is how the card will appear on the resources page.</p>
                        </div>

                        <div className="max-w-md mx-auto transform hover:scale-105 transition-transform duration-500">
                            <ResourceCard resource={formData as Resource} />
                        </div>
                    </div>
                </div>
            )}

            <div className="max-w-6xl mx-auto px-8 relative z-10">
                {/* Header Actions */}
                <div className="flex items-center justify-between mb-8">
                    <button onClick={() => navigate('/admin')} className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition-colors group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Dashboard
                    </button>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setShowPreview(true)}
                            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 transition-all hover:shadow-lg flex items-center gap-2"
                        >
                            <Eye className="w-4 h-4" /> Preview
                        </button>
                        <button
                            onClick={handleSubmit}
                            disabled={loading}
                            className="bg-primary-600 text-white px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-primary-700 transition-all hover:shadow-lg hover:shadow-primary-600/30 flex items-center gap-2 transform active:scale-95"
                        >
                            <Save className="w-4 h-4" /> {loading ? 'Saving...' : 'Save Resource'}
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white dark:bg-gray-900 p-8 rounded-[2rem] shadow-xl border border-gray-100 dark:border-gray-800">
                            <h1 className="text-2xl font-black text-gray-900 dark:text-white mb-8 border-b border-gray-100 dark:border-gray-800 pb-4">
                                {isEditMode ? 'Edit Resource' : 'New Resource'}
                            </h1>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Title</label>
                                    <input
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        className="w-full bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-primary-500 rounded-xl px-4 py-3 text-lg font-bold text-gray-900 dark:text-white transition-all outline-none"
                                        placeholder="e.g. The 2026 Event Trends Report"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Description</label>
                                    <textarea
                                        name="desc"
                                        value={formData.desc}
                                        onChange={handleChange}
                                        rows={5}
                                        className="w-full bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-primary-500 rounded-xl px-4 py-3 text-gray-900 dark:text-white transition-all outline-none resize-none"
                                        placeholder="Briefly describe what this resource offers..."
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Type</label>
                                        <div className="relative">
                                            <select
                                                name="type"
                                                value={formData.type}
                                                onChange={handleChange}
                                                className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-xl px-4 py-3 text-gray-900 dark:text-white appearance-none cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                            >
                                                <option value="Guide">Guide</option>
                                                <option value="Template">Template</option>
                                                <option value="Checklist">Checklist</option>
                                            </select>
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Status</label>
                                        <div className="relative">
                                            <select
                                                name="status"
                                                value={formData.status}
                                                onChange={handleChange}
                                                className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-xl px-4 py-3 text-gray-900 dark:text-white appearance-none cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                            >
                                                <option value="published">Published</option>
                                                <option value="draft">Draft</option>
                                                <option value="archived">Archived</option>
                                            </select>
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* File Link Section */}
                        <div className="bg-white dark:bg-gray-900 p-8 rounded-[2rem] shadow-xl border border-gray-100 dark:border-gray-800">
                            <h2 className="text-lg font-black text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                                <span className="bg-blue-100 text-blue-600 p-2 rounded-lg"><Plus className="w-4 h-4" /></span>
                                Download Source
                            </h2>

                            <div className="space-y-4">
                                <div className="border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-xl p-8 text-center hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors relative cursor-pointer group">
                                    <input
                                        type="file"
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                        onChange={async (e) => {
                                            const file = e.target.files?.[0];
                                            if (!file) return;

                                            setLoading(true);
                                            try {
                                                const url = await cmsService.uploadFile(file);
                                                setFormData(prev => ({
                                                    ...prev,
                                                    downloadUrl: url,
                                                    size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
                                                    format: file.name.split('.').pop()?.toUpperCase() || 'FILE'
                                                }));
                                            } catch (err) {
                                                alert('Upload failed');
                                            } finally {
                                                setLoading(false);
                                            }
                                        }}
                                    />
                                    <div className="flex flex-col items-center">
                                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                            <Plus className="w-6 h-6" />
                                        </div>
                                        <p className="text-sm font-bold text-gray-900 dark:text-white">Click to upload file</p>
                                        <p className="text-xs text-gray-500 mt-1">PDF, DOCX, ZIP up to 50MB</p>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Or enter external URL</label>
                                    <input
                                        name="downloadUrl"
                                        value={formData.downloadUrl}
                                        onChange={handleChange}
                                        className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-xl px-4 py-3 text-blue-600 dark:text-blue-400 font-mono text-sm"
                                        placeholder="https://..."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Media */}
                    <div className="space-y-6">
                        <div className="bg-white dark:bg-gray-900 p-6 rounded-[2rem] shadow-xl border border-gray-100 dark:border-gray-800 sticky top-8">
                            <h2 className="text-lg font-black text-gray-900 dark:text-white mb-6">Cover Image</h2>

                            <div className="mb-6">
                                <div className="aspect-video w-full rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-200 dark:border-gray-700 relative group">
                                    {formData.image ? (
                                        <>
                                            <img src={formData.image} alt="Preview" className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700" />
                                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <p className="text-white font-bold text-sm">Change URL below box</p>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="flex flex-col items-center justify-center h-full text-gray-400">
                                            <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 mb-2"></div>
                                            <span className="text-xs uppercase font-bold tracking-wider">No Image</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="mb-8">
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Image URL</label>
                                <input
                                    name="image"
                                    value={formData.image}
                                    onChange={handleChange}
                                    className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-xl px-4 py-3 text-xs"
                                    placeholder="https://..."
                                />
                            </div>

                            <div className="border-t border-gray-100 dark:border-gray-800 pt-6 space-y-4">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Format</label>
                                    <input
                                        name="format"
                                        value={formData.format}
                                        onChange={handleChange}
                                        className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-xl px-4 py-3"
                                        placeholder="PDF"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">File Size</label>
                                    <input
                                        name="size"
                                        value={formData.size}
                                        onChange={handleChange}
                                        className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-xl px-4 py-3"
                                        placeholder="12 MB"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
