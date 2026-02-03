import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Plus, Edit2, Trash2, CheckCircle, Clock, Search as SearchIcon, FileText, Layers, Layout, Package } from 'lucide-react';
import { cmsService } from '../../services/cmsService';
import { BlogPost, CaseStudy, Resource } from '../../types/cms';

type TabView = 'posts' | 'case-studies' | 'resources';

export default function AdminDashboardPage() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    // Default view is posts
    const view = (searchParams.get('tab') as TabView) || 'posts';

    // Helper to change view if needed, though sidebar handles this now
    const setView = (newView: TabView) => {
        setSearchParams({ tab: newView });
    };

    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
    const [resources, setResources] = useState<Resource[]>([]);

    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState<'all' | 'published' | 'draft' | 'archived'>('all');

    const fetchData = async () => {
        setLoading(true);
        try {
            if (view === 'posts') {
                const data = await cmsService.getBlogPosts(true);
                setPosts(data);
            } else if (view === 'case-studies') {
                const data = await cmsService.getCaseStudies(true);
                setCaseStudies(data);
            } else if (view === 'resources') {
                const data = await cmsService.getResources(true);
                setResources(data);
            }
        } catch (error) {
            console.error('Failed to fetch data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
        // Reset filters when view changes
        setSearchQuery('');
        setStatusFilter('all');
    }, [view]);

    // Derived filtered lists
    const getFilteredData = () => {
        let result: any[] = [];
        if (view === 'posts') result = posts;
        if (view === 'case-studies') result = caseStudies;
        if (view === 'resources') result = resources;

        if (statusFilter !== 'all') {
            result = result.filter(item => item.status === statusFilter);
        }

        if (searchQuery) {
            const lower = searchQuery.toLowerCase();
            result = result.filter(item => item.title.toLowerCase().includes(lower));
        }
        return result;
    };

    const filteredItems = getFilteredData();

    const handleDelete = async (id: any) => {
        if (!window.confirm('Are you sure? This cannot be undone.')) return;
        try {
            if (view === 'posts') await cmsService.deleteBlogPost(id);
            if (view === 'case-studies') await cmsService.deleteCaseStudy(id);
            if (view === 'resources') await cmsService.deleteResource(id);
            fetchData(); // Refresh
        } catch (e: any) {
            console.error(e);
            alert(`Failed to delete: ${e.message}`);
        }
    };

    const handleCreate = () => {
        if (view === 'posts') navigate('/admin/posts/new');
        if (view === 'case-studies') navigate('/admin/case-studies/new');
        if (view === 'resources') navigate('/admin/resources/new');
    };

    const handleEdit = (id: any) => {
        if (view === 'posts') navigate(`/admin/posts/${id}/edit`);
        if (view === 'case-studies') navigate(`/admin/case-studies/${id}/edit`);
        if (view === 'resources') navigate(`/admin/resources/${id}/edit`);
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'published': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
            case 'draft': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
            case 'archived': return 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400';
            default: return 'bg-gray-100 text-gray-600';
        }
    };

    return (
        <div className="flex-1 px-8 py-8 h-screen overflow-y-auto relative">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary-100/30 dark:bg-primary-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-orange-100/30 dark:bg-orange-900/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />


            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-[10px] font-black uppercase tracking-widest text-gray-500">Dashboard</span>
                            <span className="text-gray-300 dark:text-gray-700">/</span>
                            <span className="text-xs font-bold text-gray-900 dark:text-gray-300 uppercase tracking-widest">{view}</span>
                        </div>
                        <h1 className="text-4xl font-black tracking-tighter text-gray-900 dark:text-white">
                            {view === 'posts' && 'Blog Posts'}
                            {view === 'case-studies' && 'Case Studies'}
                            {view === 'resources' && 'Resources'}
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400 mt-2 font-medium">Manage and organize your website content.</p>
                    </div>
                    <button
                        onClick={handleCreate}
                        className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center gap-2 transition-all shadow-lg shadow-primary-600/20 hover:scale-105 active:scale-95"
                    >
                        <Plus className="w-4 h-4" /> Create New
                    </button>
                </div>

                {/* Stats / Overview (Optional Placeholder for improved design) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xs font-black uppercase tracking-widest text-gray-500">Total Items</h3>
                            <Layers className="w-4 h-4 text-primary-600" />
                        </div>
                        <div className="text-3xl font-black text-gray-900 dark:text-white">{filteredItems.length}</div>
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xs font-black uppercase tracking-widest text-gray-500">Published</h3>
                            <CheckCircle className="w-4 h-4 text-green-500" />
                        </div>
                        <div className="text-3xl font-black text-gray-900 dark:text-white">{filteredItems.filter(i => i.status === 'published').length}</div>
                    </div>
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xs font-black uppercase tracking-widest text-gray-500">Drafts</h3>
                            <Edit2 className="w-4 h-4 text-yellow-500" />
                        </div>
                        <div className="text-3xl font-black text-gray-900 dark:text-white">{filteredItems.filter(i => i.status === 'draft').length}</div>
                    </div>
                </div>

                {/* Filters & Search */}
                <div className="bg-white dark:bg-gray-900 p-2 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex p-1 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                        {(['all', 'published', 'draft', 'archived'] as const).map(status => (
                            <button
                                key={status}
                                onClick={() => setStatusFilter(status)}
                                className={`px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${statusFilter === status ? 'bg-white dark:bg-gray-800 text-primary-600 shadow-sm' : 'text-gray-500 hover:text-gray-900 dark:text-gray-400'}`}
                            >
                                {status.charAt(0).toUpperCase() + status.slice(1)}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full md:w-80 px-2">
                        <SearchIcon className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search content..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-transparent border-none pl-10 pr-4 py-2 text-sm text-gray-900 dark:text-white focus:ring-0 placeholder:text-gray-400 outline-none"
                        />
                    </div>
                </div>

                {/* Content Table */}
                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
                    </div>
                ) : (
                    <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-gray-50/50 dark:bg-gray-800/30 border-b border-gray-100 dark:border-gray-800">
                                <tr>
                                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Content Details</th>
                                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Status</th>
                                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Date</th>
                                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                                {filteredItems.map((item: any) => (
                                    <tr key={item.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors group">
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex-shrink-0 flex items-center justify-center text-gray-400">
                                                    {view === 'posts' && <FileText className="w-5 h-5" />}
                                                    {view === 'case-studies' && <Layout className="w-5 h-5" />}
                                                    {view === 'resources' && <Package className="w-5 h-5" />}
                                                </div>
                                                <div>
                                                    <div className="font-bold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors mb-1">{item.title}</div>
                                                    {item.excerpt && <div className="text-xs text-gray-500 dark:text-gray-500 line-clamp-1">{item.excerpt.substring(0, 60)}...</div>}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${getStatusColor(item.status)}`}>
                                                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                                                {item.status}
                                            </span>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="text-xs font-medium text-gray-500 dark:text-gray-400 flex items-center gap-2">
                                                <Clock className="w-3 h-3" />
                                                {new Date().toLocaleDateString()}
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex items-center justify-end gap-2">
                                                <button
                                                    onClick={() => {
                                                        console.log('Editing', item.id);
                                                        handleEdit(item.id);
                                                    }}
                                                    className="p-2 hover:bg-white dark:hover:bg-gray-700 text-gray-500 hover:text-primary-600 rounded-lg transition-colors shadow-sm cursor-pointer"
                                                    title="Edit"
                                                >
                                                    <Edit2 className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        console.log('Deleting', item.id);
                                                        handleDelete(item.id);
                                                    }}
                                                    className="p-2 hover:bg-white dark:hover:bg-gray-700 text-gray-500 hover:text-red-500 rounded-lg transition-colors shadow-sm cursor-pointer"
                                                    title="Delete"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {filteredItems.length === 0 && (
                            <div className="p-20 text-center">
                                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                                    <Layers className="w-8 h-8 opacity-50" />
                                </div>
                                <h3 className="text-gray-900 dark:text-white font-bold mb-2">No content found</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">Try adjusting your filters or create a new item.</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
