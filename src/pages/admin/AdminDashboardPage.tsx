import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Plus, Edit2, Trash2, CheckCircle, Clock, Search as SearchIcon, FileText, Layers, Layout, Package, BarChart2, Download, Users, Settings } from 'lucide-react';
import { cmsService } from '../../services/cmsService';
import { BlogPost, CaseStudy, Resource, WaitlistEntry } from '../../types/cms';

type TabView = 'overview' | 'posts' | 'case-studies' | 'resources' | 'waitlist';

export default function AdminDashboardPage() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    // Default view is overview
    const view = (searchParams.get('tab') as TabView) || 'overview';

    // Helper to change view if needed, though sidebar handles this now
    const setView = (newView: TabView) => {
        setSearchParams({ tab: newView });
    };

    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
    const [resources, setResources] = useState<Resource[]>([]);
    const [waitlist, setWaitlist] = useState<WaitlistEntry[]>([]);

    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState<'all' | 'published' | 'draft' | 'archived'>('all');

    const fetchData = async () => {
        setLoading(true);
        try {
            if (view === 'overview') {
                const [p, cs, r, w] = await Promise.all([
                    cmsService.getBlogPosts(true),
                    cmsService.getCaseStudies(true),
                    cmsService.getResources(true),
                    cmsService.getWaitlist()
                ]);
                setPosts(p);
                setCaseStudies(cs);
                setResources(r);
                setWaitlist(w);
            } else if (view === 'posts') {
                const data = await cmsService.getBlogPosts(true);
                setPosts(data);
            } else if (view === 'case-studies') {
                const data = await cmsService.getCaseStudies(true);
                setCaseStudies(data);
            } else if (view === 'resources') {
                const data = await cmsService.getResources(true);
                setResources(data);
            } else if (view === 'waitlist') {
                const data = await cmsService.getWaitlist();
                setWaitlist(data);
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
        if (view === 'waitlist') result = waitlist;

        if (statusFilter !== 'all') {
            if (view === 'waitlist') {
                result = result.filter(item => item.role === statusFilter);
            } else {
                result = result.filter(item => item.status === statusFilter);
            }
        }

        if (searchQuery) {
            const lower = searchQuery.toLowerCase();
            if (view === 'waitlist') {
                result = result.filter(item =>
                    item.name.toLowerCase().includes(lower) ||
                    item.email.toLowerCase().includes(lower) ||
                    item.role.toLowerCase().includes(lower)
                );
            } else {
                result = result.filter(item => item.title.toLowerCase().includes(lower));
            }
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
            if (view === 'waitlist') await cmsService.deleteWaitlistEntry(id);
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
        if (view === 'waitlist') alert('Waitlist entries are created by users on the public site.');
    };

    const handleEdit = (id: any) => {
        if (view === 'posts') navigate(`/admin/posts/${id}/edit`);
        if (view === 'case-studies') navigate(`/admin/case-studies/${id}/edit`);
        if (view === 'resources') navigate(`/admin/resources/${id}/edit`);
    };

    const handleExportCSV = () => {
        if (view !== 'waitlist' || filteredItems.length === 0) return;

        const headers = ['ID', 'Name', 'Email', 'Role', 'Date Joined'];
        const csvRows = filteredItems.map((entry: any) => [
            entry.id,
            `"${entry.name || 'Anonymous'}"`,
            entry.email,
            entry.role,
            new Date(entry.timestamp).toLocaleDateString()
        ].join(','));

        const csvContent = [headers.join(','), ...csvRows].join('\n');
        const fileName = statusFilter === 'all' ? 'ariya_waitlist_full' : `ariya_waitlist_${statusFilter}`;

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', `${fileName}_${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
        <div className="flex-1 px-4 md:px-8 py-8 h-screen overflow-y-auto overflow-x-hidden relative">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary-100/30 dark:bg-primary-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-orange-100/30 dark:bg-orange-900/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-8 md:mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-[10px] font-black uppercase tracking-widest text-gray-500">Dashboard</span>
                            <span className="text-gray-300 dark:text-gray-700">/</span>
                            <span className="text-xs font-bold text-gray-900 dark:text-gray-300 uppercase tracking-widest">{view === 'overview' ? 'Overview' : view}</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-black tracking-tighter text-gray-900 dark:text-white">
                            {view === 'overview' && 'Console Overview'}
                            {view === 'posts' && 'Blog Posts'}
                            {view === 'case-studies' && 'Case Studies'}
                            {view === 'resources' && 'Resources'}
                            {view === 'waitlist' && 'Waitlist Entries'}
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400 mt-2 font-medium">
                            {view === 'overview' && 'Welcome back, Admin. Here is what is happening today.'}
                            {view === 'waitlist' && 'View and manage users who joined the waitlist.'}
                            {view === 'posts' || view === 'case-studies' || view === 'resources' ? 'Manage and organize your website content.' : ''}
                        </p>
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-auto">
                        {view === 'waitlist' && (
                            <button
                                onClick={handleExportCSV}
                                className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 transition-all hover:bg-gray-50 dark:hover:bg-gray-700 active:scale-95 shadow-sm whitespace-nowrap w-full md:w-auto"
                            >
                                <Download className="w-4 h-4" /> Export CSV
                            </button>
                        )}
                        {view !== 'waitlist' && view !== 'overview' && (
                            <button
                                onClick={handleCreate}
                                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary-600/20 hover:scale-105 active:scale-95 whitespace-nowrap w-full md:w-auto"
                            >
                                <Plus className="w-4 h-4" /> Create New
                            </button>
                        )}
                    </div>
                </div>

                {/* Overview Landing */}
                {view === 'overview' && !loading && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
                            <QuickStat cardId="posts" label="Total Posts" value={posts.length} icon={<FileText />} color="blue" onClick={() => setView('posts')} />
                            <QuickStat cardId="case-studies" label="Case Studies" value={caseStudies.length} icon={<Layout />} color="purple" onClick={() => setView('case-studies')} />
                            <QuickStat cardId="waitlist" label="Signups" value={waitlist.length} icon={<Users className="w-4 h-4" />} color="orange" onClick={() => setView('waitlist')} />
                            <QuickStat cardId="resources" label="Resources" value={resources.length} icon={<Package />} color="green" onClick={() => setView('resources')} />
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                            <div className="lg:col-span-2 space-y-8">
                                <div className="bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden relative">
                                    <div className="absolute top-0 right-0 p-8 opacity-5">
                                        <BarChart2 className="w-32 h-32" />
                                    </div>
                                    <h3 className="text-xl font-black text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                                        <Clock className="w-5 h-5 text-primary-600" />
                                        Recent Activity
                                    </h3>
                                    <div className="space-y-4">
                                        {waitlist.slice(0, 5).map((entry: any) => (
                                            <div key={entry.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl hover:bg-white dark:hover:bg-gray-800 transition-all border border-transparent hover:border-gray-100 dark:hover:border-gray-700">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600">
                                                        <Users className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-gray-900 dark:text-white">{entry.name || 'Anonymous'} joined the waitlist</div>
                                                        <div className="text-xs text-gray-500">{new Date(entry.timestamp).toLocaleDateString()} • {entry.role}</div>
                                                    </div>
                                                </div>
                                                <button onClick={() => setView('waitlist')} className="text-[10px] font-black uppercase tracking-widest text-primary-600">View</button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div className="bg-primary-600 p-8 rounded-[2.5rem] text-white shadow-2xl shadow-primary-600/30 relative overflow-hidden group">
                                    <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                                    <h3 className="text-xl font-black mb-4">Quick Actions</h3>
                                    <div className="space-y-3 relative z-10">
                                        <button onClick={() => navigate('/admin/posts/new')} className="w-full bg-white/10 hover:bg-white/20 p-4 rounded-2xl flex items-center justify-between transition-colors font-bold text-sm">
                                            <span>Draft New Post</span>
                                            <Plus className="w-4 h-4" />
                                        </button>
                                        <button onClick={() => setView('waitlist')} className="w-full bg-white/10 hover:bg-white/20 p-4 rounded-2xl flex items-center justify-between transition-colors font-bold text-sm">
                                            <span>Manage Waitlist</span>
                                            <Users className="w-4 h-4" />
                                        </button>
                                        <button onClick={() => navigate('/admin/settings')} className="w-full bg-white/10 hover:bg-white/20 p-4 rounded-2xl flex items-center justify-between transition-colors font-bold text-sm">
                                            <span>Update Settings</span>
                                            <Settings className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] shadow-lg border border-gray-100 dark:border-gray-800">
                                    <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-6">Live Status</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between text-sm font-bold">
                                            <span className="text-gray-500">API Health</span>
                                            <span className="flex items-center gap-1.5 text-green-500">
                                                <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                                                Online
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between text-sm font-bold">
                                            <span className="text-gray-500">Database</span>
                                            <span className="text-gray-900 dark:text-white">Connected</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Content views */}
                {view !== 'overview' && (
                    <>
                        {/* Stats / Overview (Only for content views) */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xs font-black uppercase tracking-widest text-gray-500">
                                        {view === 'waitlist' ? 'Total Signups' : 'Total Items'}
                                    </h3>
                                    <Layers className="w-4 h-4 text-primary-600" />
                                </div>
                                <div className="text-3xl font-black text-gray-900 dark:text-white">{filteredItems.length}</div>
                            </div>
                            {view !== 'waitlist' ? (
                                <>
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
                                </>
                            ) : (
                                <>
                                    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-xs font-black uppercase tracking-widest text-gray-500">Planners</h3>
                                            <FileText className="w-4 h-4 text-primary-600" />
                                        </div>
                                        <div className="text-3xl font-black text-gray-900 dark:text-white">{filteredItems.filter(i => i.role === 'individual').length}</div>
                                    </div>
                                    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-xs font-black uppercase tracking-widest text-gray-500">Vendors/Agencies</h3>
                                            <Package className="w-4 h-4 text-orange-500" />
                                        </div>
                                        <div className="text-3xl font-black text-gray-900 dark:text-white">{filteredItems.filter(i => i.role !== 'individual').length}</div>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Filters & Search (Only for content views) */}
                        <div className="bg-white dark:bg-gray-900 p-2 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="flex p-1 bg-gray-50 dark:bg-gray-800/50 rounded-xl overflow-x-auto max-w-full no-scrollbar">
                                {view !== 'waitlist' ? (
                                    (['all', 'published', 'draft', 'archived'] as const).map(status => (
                                        <button
                                            key={status}
                                            onClick={() => setStatusFilter(status)}
                                            className={`px-4 md:px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap ${statusFilter === status ? 'bg-white dark:bg-gray-800 text-primary-600 shadow-sm' : 'text-gray-500 hover:text-gray-900 dark:text-gray-400'}`}
                                        >
                                            {status.charAt(0).toUpperCase() + status.slice(1)}
                                        </button>
                                    ))
                                ) : (
                                    (['all', 'individual', 'pro', 'vendor'] as const).map(role => (
                                        <button
                                            key={role}
                                            onClick={() => setStatusFilter(role as any)}
                                            className={`px-4 md:px-6 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${statusFilter === role ? 'bg-white dark:bg-gray-800 text-primary-600 shadow-sm' : 'text-gray-500 hover:text-gray-900 dark:text-gray-400'}`}
                                        >
                                            {role === 'all' ? 'All Roles' : (role === 'individual' ? 'Planners' : (role === 'pro' ? 'Agencies' : 'Vendors'))}
                                        </button>
                                    ))
                                )}
                            </div>

                            <div className="relative w-full md:w-80 px-2">
                                <SearchIcon className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder={view === 'waitlist' ? "Search subscribers..." : "Search content..."}
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
                            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800 overflow-x-auto">
                                <table className="w-full text-left border-collapse min-w-[800px]">
                                    <thead className="bg-gray-50/50 dark:bg-gray-800/30 border-b border-gray-100 dark:border-gray-800">
                                        <tr>
                                            <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">
                                                {view === 'waitlist' ? 'Subscriber' : 'Content Details'}
                                            </th>
                                            <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">
                                                {view === 'waitlist' ? 'Role' : 'Status'}
                                            </th>
                                            <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Date Joined</th>
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
                                                            {view === 'waitlist' && <BarChart2 className="w-5 h-5" />}
                                                        </div>
                                                        <div>
                                                            <div className="font-bold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors mb-1">
                                                                {view === 'waitlist' ? item.name || 'Anonymous' : item.title}
                                                            </div>
                                                            <div className="text-xs text-gray-500 dark:text-gray-500 line-clamp-1">
                                                                {view === 'waitlist' ? item.email : (item.excerpt ? `${item.excerpt.substring(0, 60)}...` : '')}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-8 py-6">
                                                    {view === 'waitlist' ? (
                                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400`}>
                                                            {item.role}
                                                        </span>
                                                    ) : (
                                                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${getStatusColor(item.status)}`}>
                                                            <span className="w-1.5 h-1.5 rounded-full bg-current" />
                                                            {item.status}
                                                        </span>
                                                    )}
                                                </td>
                                                <td className="px-8 py-6">
                                                    <div className="text-xs font-medium text-gray-500 dark:text-gray-400 flex items-center gap-2">
                                                        <Clock className="w-3 h-3" />
                                                        {view === 'waitlist' ? new Date(item.timestamp).toLocaleDateString() : new Date().toLocaleDateString()}
                                                    </div>
                                                </td>
                                                <td className="px-8 py-6">
                                                    <div className="flex items-center justify-end gap-2">
                                                        {view !== 'waitlist' && (
                                                            <button
                                                                onClick={() => handleEdit(item.id)}
                                                                className="p-2 hover:bg-white dark:hover:bg-gray-700 text-gray-500 hover:text-primary-600 rounded-lg transition-colors shadow-sm cursor-pointer"
                                                                title="Edit"
                                                            >
                                                                <Edit2 className="w-4 h-4" />
                                                            </button>
                                                        )}
                                                        <button
                                                            onClick={() => handleDelete(item.id)}
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
                    </>
                )}
            </div>
        </div>
    );
}

function QuickStat({ label, value, icon, color, onClick, cardId }: { label: string, value: number, icon: any, color: string, onClick: () => void, cardId: string }) {
    const iconColors: any = {
        blue: 'text-blue-600',
        purple: 'text-purple-600',
        orange: 'text-orange-600',
        green: 'text-green-600',
    };

    return (
        <button
            onClick={onClick}
            id={`stat-${cardId}`}
            className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-gray-200 dark:hover:border-gray-700 transition-all text-left group overflow-hidden"
        >
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-[10px] font-black uppercase tracking-[0.1em] text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                    {label}
                </h3>
                <div className={`${iconColors[color]} transition-transform group-hover:scale-110 duration-300`}>
                    {icon}
                </div>
            </div>
            <div className="text-3xl font-black text-gray-900 dark:text-white tracking-tighter">{value}</div>
        </button>
    );
}
