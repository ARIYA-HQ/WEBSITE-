import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Plus, Save, Eye, Hash, Image as ImageIcon, FileText, Calendar, User, Layout, X } from 'lucide-react';
import { cmsService } from '../../services/cmsService';
import { BlogPost } from '../../types/cms';
import RichTextEditor from '../../components/admin/RichTextEditor';
import BlogPostDetailView from '../../components/resources/BlogPostDetailView';

export default function PostEditorPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const isEditMode = Boolean(id);

    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(isEditMode);

    const [formData, setFormData] = useState<Partial<BlogPost>>({
        title: '',
        excerpt: '',
        category: 'General',
        author: 'Admin',
        readTime: '5 min read',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2069',
        content: '',
        tags: [],
        status: 'published'
    });
    const [tagInput, setTagInput] = useState('');
    const [activeTab, setActiveTab] = useState<'edit' | 'preview'>('edit');
    const [showPreviewModal, setShowPreviewModal] = useState(false);

    useEffect(() => {
        if (isEditMode && id) {
            const fetchPost = async () => {
                try {
                    const post = await cmsService.getBlogPostById(parseInt(id));
                    if (post) {
                        setFormData(post);
                    } else {
                        alert('Post not found');
                        navigate('/admin');
                    }
                } catch (error) {
                    console.error('Failed to load post');
                } finally {
                    setFetching(false);
                }
            };
            fetchPost();
        }
    }, [id, isEditMode, navigate]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleAddTag = () => {
        if (tagInput.trim()) {
            setFormData(prev => ({
                ...prev,
                tags: [...(prev.tags || []), tagInput.trim()]
            }));
            setTagInput('');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (isEditMode && id) {
                await cmsService.updateBlogPost(parseInt(id), formData);
            } else {
                await cmsService.createBlogPost(formData as Omit<BlogPost, 'id'>);
            }
            navigate('/admin');
        } catch (error) {
            console.error('Failed to save post:', error);
            alert('Failed to save post. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    if (fetching) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            </div>
        );
    }

    return (
        <main className="pt-8 bg-gray-50 dark:bg-gray-950 min-h-screen pb-24 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary-100/30 dark:bg-primary-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-orange-100/30 dark:bg-orange-900/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 mt-8 md:mt-0">
                    <button onClick={() => navigate('/admin')} className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Dashboard
                    </button>
                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
                        <div className="flex bg-white dark:bg-gray-800 rounded-lg p-1 shadow-sm w-full sm:w-auto">
                            <button
                                onClick={() => setActiveTab('edit')}
                                className={`flex-1 sm:flex-none px-4 py-2 rounded-md text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'edit' ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400' : 'text-gray-500 hover:text-gray-900 dark:text-gray-400'}`}
                            >
                                Editor
                            </button>
                            <button
                                onClick={() => setActiveTab('preview')}
                                className={`flex-1 sm:flex-none px-4 py-2 rounded-md text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'preview' ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400' : 'text-gray-500 hover:text-gray-900 dark:text-gray-400'}`}
                            >
                                Preview
                            </button>
                        </div>
                        <button
                            onClick={handleSubmit}
                            disabled={loading}
                            className="w-full sm:w-auto bg-primary-600 text-white px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-primary-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50 whitespace-nowrap"
                        >
                            {loading ? <div className="animate-spin w-4 h-4 border-2 border-white/30 border-t-white rounded-full" /> : <Save className="w-4 h-4" />}
                            {isEditMode ? 'Update Post' : 'Publish Post'}
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content Area */}
                    <div className="lg:col-span-2 space-y-8">
                        {activeTab === 'edit' ? (
                            <>
                                <div className="bg-white dark:bg-gray-900 p-8 rounded-[2rem] shadow-xl border border-gray-100 dark:border-gray-800">
                                    <div className="mb-6">
                                        <input
                                            type="text"
                                            name="title"
                                            value={formData.title}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-transparent text-4xl font-black text-gray-900 dark:text-white placeholder:text-gray-300 dark:placeholder:text-gray-700 border-none focus:ring-0 px-0"
                                            placeholder="Enter Post Title..."
                                        />
                                    </div>
                                    <RichTextEditor
                                        content={formData.content || ''}
                                        onChange={(newContent) => setFormData(prev => ({ ...prev, content: newContent }))}
                                    />
                                </div>

                                <div className="bg-white dark:bg-gray-900 p-8 rounded-[2rem] shadow-xl border border-gray-100 dark:border-gray-800">
                                    <h3 className="text-sm font-black uppercase tracking-widest text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                                        <FileText className="w-4 h-4 text-primary-600" /> Excerpt
                                    </h3>
                                    <textarea
                                        name="excerpt"
                                        value={formData.excerpt}
                                        onChange={handleChange}
                                        rows={3}
                                        className="w-full bg-gray-50 dark:bg-gray-800/50 border-none rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-600 outline-none"
                                        placeholder="Short summary for preview cards..."
                                    />
                                </div>
                            </>
                        ) : (
                            // Preview Mode
                            <div className="bg-gray-50 dark:bg-gray-900 rounded-[2rem] shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden relative group">
                                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button
                                        onClick={() => setShowPreviewModal(true)}
                                        className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 backdrop-blur-sm transition-all"
                                        title="View Full Screen"
                                    >
                                        <Eye className="w-5 h-5" />
                                    </button>
                                </div>
                                <BlogPostDetailView post={formData as BlogPost} preview={true} />
                            </div>
                        )}
                    </div>
                    {/* Full Screen Preview Modal */}
                    {showPreviewModal && (
                        <div className="fixed inset-0 z-50 bg-white dark:bg-gray-950 overflow-y-auto">
                            <button
                                onClick={() => setShowPreviewModal(false)}
                                className="fixed top-6 right-6 z-[60] bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-3 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700 font-bold flex items-center gap-2 group"
                            >
                                <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                                <span className="text-xs uppercase tracking-widest hidden sm:inline">Close Preview</span>
                            </button>
                            <BlogPostDetailView post={formData as BlogPost} preview={true} />
                        </div>
                    )}

                    {/* Sidebar Settings */}
                    <div className="space-y-6">
                        <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800">
                            <h3 className="text-xs font-black uppercase tracking-widest text-gray-500 mb-6 flex items-center gap-2">
                                <Layout className="w-4 h-4" /> Publish Settings
                            </h3>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 mb-2">Status</label>
                                    <select
                                        name="status"
                                        value={formData.status}
                                        onChange={handleChange}
                                        className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-600 outline-none text-sm font-bold"
                                    >
                                        <option value="published">Published</option>
                                        <option value="draft">Draft</option>
                                        <option value="archived">Archived</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-gray-500 mb-2">Category</label>
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-600 outline-none text-sm"
                                    >
                                        <option value="General">General</option>
                                        <option value="Trends">Trends</option>
                                        <option value="Planning">Planning</option>
                                        <option value="Venues">Venues</option>
                                        <option value="Legal">Legal</option>
                                        <option value="Sustainability">Sustainability</option>
                                        <option value="Technology">Technology</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800">
                            <h3 className="text-xs font-black uppercase tracking-widest text-gray-500 mb-6 flex items-center gap-2">
                                <User className="w-4 h-4" /> Meta Data
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 mb-2">Author</label>
                                    <input
                                        type="text"
                                        name="author"
                                        value={formData.author}
                                        onChange={handleChange}
                                        className="w-full bg-gray-50 dark:bg-gray-800/50 border-none rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-600 outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 mb-2">Read Time</label>
                                    <input
                                        type="text"
                                        name="readTime"
                                        value={formData.readTime}
                                        onChange={handleChange}
                                        className="w-full bg-gray-50 dark:bg-gray-800/50 border-none rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-600 outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 mb-2">Cover Image</label>
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            name="image"
                                            value={formData.image}
                                            onChange={handleChange}
                                            className="w-full bg-gray-50 dark:bg-gray-800/50 border-none rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-600 outline-none"
                                        />
                                    </div>
                                    {formData.image && (
                                        <div className="mt-2 rounded-lg overflow-hidden h-32 w-full">
                                            <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800">
                            <h3 className="text-xs font-black uppercase tracking-widest text-gray-500 mb-6 flex items-center gap-2">
                                <Hash className="w-4 h-4" /> Tags
                            </h3>
                            <div className="flex gap-2 mb-3">
                                <input
                                    type="text"
                                    value={tagInput}
                                    onChange={(e) => setTagInput(e.target.value)}
                                    className="flex-1 bg-gray-50 dark:bg-gray-800/50 border-none rounded-xl px-4 py-2 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-600 outline-none"
                                    placeholder="Add tag..."
                                    onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                                />
                                <button type="button" onClick={handleAddTag} className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 p-2 rounded-xl transition-colors">
                                    <Plus className="w-4 h-4" />
                                </button>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {formData.tags?.map((tag, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-600 rounded-lg text-xs font-bold flex items-center gap-2">
                                        {tag}
                                        <button
                                            type="button"
                                            onClick={() => setFormData(prev => ({ ...prev, tags: prev.tags?.filter((_, i) => i !== idx) }))}
                                            className="hover:text-red-500"
                                        >
                                            ×
                                        </button>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
