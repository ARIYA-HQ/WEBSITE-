import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Save, Plus, Trash2, Eye, X } from 'lucide-react';
import { cmsService } from '../../services/cmsService';
import { CaseStudy } from '../../types/cms';
import CaseStudyDetailView from '../../components/resources/CaseStudyDetailView';

export default function CaseStudyEditorPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const isEditMode = Boolean(id);
    const [loading, setLoading] = useState(false);
    const [showPreview, setShowPreview] = useState(false);

    const [formData, setFormData] = useState<Partial<CaseStudy>>({
        id: '',
        title: '',
        client: '',
        industry: '',
        desc: '',
        status: 'published',
        metrics: [{ label: '', value: '' }],
        testimonial: { quote: '', author: '', role: '' },
        image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=2069',
        logo: 'CS',
        challenge: '',
        solution: '',
        result: ''
    });

    useEffect(() => {
        if (isEditMode && id) {
            cmsService.getCaseStudyById(id).then(item => {
                if (item) setFormData(item);
            });
        }
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.title?.trim()) {
            alert('Title is required');
            return;
        }

        setLoading(true);
        try {
            if (isEditMode && id) {
                await cmsService.updateCaseStudy(id, formData);
            } else {
                await cmsService.createCaseStudy(formData as Omit<CaseStudy, 'id'>);
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

    const handleMetricChange = (index: number, field: 'label' | 'value', value: string) => {
        const newMetrics = [...(formData.metrics || [])];
        newMetrics[index] = { ...newMetrics[index], [field]: value };
        setFormData(prev => ({ ...prev, metrics: newMetrics }));
    };

    const addMetric = () => {
        setFormData(prev => ({ ...prev, metrics: [...(prev.metrics || []), { label: '', value: '' }] }));
    };

    const removeMetric = (index: number) => {
        setFormData(prev => ({ ...prev, metrics: prev.metrics?.filter((_, i) => i !== index) }));
    };

    return (
        <main className="pt-8 bg-gray-50 dark:bg-gray-950 min-h-screen pb-24 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary-100/30 dark:bg-primary-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-orange-100/30 dark:bg-orange-900/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

            {/* Preview Modal */}
            {showPreview && (
                <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm overflow-y-auto">
                    <div className="min-h-screen relative bg-white dark:bg-gray-950">
                        {/* Close Preview Button */}
                        <button
                            onClick={() => setShowPreview(false)}
                            className="fixed top-6 right-6 z-[60] bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-3 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700 font-bold flex items-center gap-2 group"
                        >
                            <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                            <span className="text-xs uppercase tracking-widest hidden sm:inline">Close Preview</span>
                        </button>

                        {/* Render View */}
                        <CaseStudyDetailView study={formData as CaseStudy} preview={true} />
                    </div>
                </div>
            )}

            <div className="max-w-4xl mx-auto px-8 relative z-10">
                <div className="flex items-center justify-between mb-8">
                    <button onClick={() => navigate('/admin')} className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Dashboard
                    </button>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setShowPreview(true)}
                            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 transition-colors flex items-center gap-2"
                        >
                            <Eye className="w-4 h-4" /> Preview
                        </button>
                        <button
                            onClick={handleSubmit}
                            disabled={loading}
                            className="bg-primary-600 text-white px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-primary-700 transition-colors flex items-center gap-2"
                        >
                            <Save className="w-4 h-4" /> Save Case Study
                        </button>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-900 p-8 rounded-[2rem] shadow-xl border border-gray-100 dark:border-gray-800 space-y-8">
                    <h1 className="text-2xl font-black text-gray-900 dark:text-white mb-8">{isEditMode ? 'Edit Case Study' : 'New Case Study'}</h1>

                    {/* Basic Info */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-black uppercase tracking-widest text-gray-400">Basic Info</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Title</label>
                                <input name="title" value={formData.title} onChange={handleChange} className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-xl px-4 py-3 text-gray-900 dark:text-white" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Slug (URL ID)</label>
                                <input
                                    name="id"
                                    value={formData.id || ''}
                                    onChange={handleChange}
                                    placeholder="e.g. lux-gala"
                                    className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-xl px-4 py-3 text-gray-900 dark:text-white"
                                    disabled={isEditMode} // Disable editing slug once created to keep it simple for now
                                />
                                {isEditMode && <p className="text-[10px] text-gray-400 mt-1">Slug cannot be changed after creation.</p>}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Client</label>
                                <input name="client" value={formData.client} onChange={handleChange} className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-xl px-4 py-3 text-gray-900 dark:text-white" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Industry</label>
                                <input name="industry" value={formData.industry} onChange={handleChange} className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-xl px-4 py-3 text-gray-900 dark:text-white" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Status</label>
                            <select name="status" value={formData.status} onChange={handleChange} className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-xl px-4 py-3 text-gray-900 dark:text-white">
                                <option value="published">Published</option>
                                <option value="draft">Draft</option>
                                <option value="archived">Archived</option>
                            </select>
                        </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-black uppercase tracking-widest text-gray-400">Details</h3>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Description (Summary)</label>
                            <textarea name="desc" value={formData.desc} onChange={handleChange} rows={2} className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-xl px-4 py-3 text-gray-900 dark:text-white" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Challenge</label>
                            <textarea name="challenge" value={formData.challenge} onChange={handleChange} rows={4} className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-xl px-4 py-3 text-gray-900 dark:text-white" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Solution</label>
                            <textarea name="solution" value={formData.solution} onChange={handleChange} rows={4} className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-xl px-4 py-3 text-gray-900 dark:text-white" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Result</label>
                            <textarea name="result" value={formData.result} onChange={handleChange} rows={4} className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-xl px-4 py-3 text-gray-900 dark:text-white" />
                        </div>
                    </div>

                    {/* Metric & Image Info omitted for brevity in replacement search but included in full content */}
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h3 className="text-sm font-black uppercase tracking-widest text-gray-400">Key Metrics</h3>
                            <button type="button" onClick={addMetric} className="text-xs font-bold text-primary-600 flex items-center gap-1"><Plus className="w-3 h-3" /> Add Metric</button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {formData.metrics?.map((metric, idx) => (
                                <div key={idx} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl relative group">
                                    <button type="button" onClick={() => removeMetric(idx)} className="absolute top-2 right-2 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100"><Trash2 className="w-3 h-3" /></button>
                                    <input placeholder="Value (e.g. 40%)" value={metric.value} onChange={e => handleMetricChange(idx, 'value', e.target.value)} className="w-full bg-transparent border-b border-gray-200 dark:border-gray-700 mb-2 font-black text-xl text-primary-600" />
                                    <input placeholder="Label" value={metric.label} onChange={e => handleMetricChange(idx, 'label', e.target.value)} className="w-full bg-transparent text-xs font-bold uppercase tracking-widest text-gray-500" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-sm font-black uppercase tracking-widest text-gray-400">Assets & Branding</h3>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Hero Image URL</label>
                                <input name="image" value={formData.image} onChange={handleChange} className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-xl px-4 py-3 text-gray-900 dark:text-white" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Logo Text/Emoji</label>
                                <input name="logo" value={formData.logo} onChange={handleChange} className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-xl px-4 py-3 text-gray-900 dark:text-white" />
                            </div>
                        </div>
                    </div>

                    {/* Testimonial */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-black uppercase tracking-widest text-gray-400">Testimonial</h3>
                        <textarea placeholder="Quote" value={formData.testimonial?.quote} onChange={e => setFormData(prev => ({ ...prev, testimonial: { ...prev.testimonial!, quote: e.target.value } }))} rows={3} className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-xl px-4 py-3 text-gray-900 dark:text-white mb-4" />
                        <div className="grid grid-cols-2 gap-6">
                            <input placeholder="Author" value={formData.testimonial?.author} onChange={e => setFormData(prev => ({ ...prev, testimonial: { ...prev.testimonial!, author: e.target.value } }))} className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-xl px-4 py-3 text-gray-900 dark:text-white" />
                            <input placeholder="Role" value={formData.testimonial?.role} onChange={e => setFormData(prev => ({ ...prev, testimonial: { ...prev.testimonial!, role: e.target.value } }))} className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-xl px-4 py-3 text-gray-900 dark:text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
