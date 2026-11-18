import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, User, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';
import { cmsService } from '../../services/cmsService';
import { BlogPost } from '../../types/cms';
import { trackConversion } from '../../analytics/analytics';
import { formatBlogDate } from '../../data/blogExperience';

export default function BlogPage() {
    const { data: posts = [], isLoading } = useQuery({
        queryKey: ['blog-posts', 'published'],
        queryFn: () => cmsService.getBlogPosts({ status: 'published' })
    });

    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [email, setEmail] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setSubmitting(true);
        try {
            const response = await fetch('/api/waitlist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, role: 'subscriber' })
            });

            if (response.ok) {
                toast.success('Successfully subscribed!');
                trackConversion('generate_lead', { method: 'newsletter' });
                setEmail('');
            } else {
                const data = await response.json();
                toast.error(data.error || 'Failed to subscribe');
            }
        } catch (error) {
            toast.error('Network error. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };


    const categories = ['All', ...Array.from(new Set(posts.map(post => post.category)))];

    const query = searchQuery.trim().toLocaleLowerCase();
    const filteredPosts = posts.filter((post) => {
        const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
        const searchableText = [
            post.title,
            post.excerpt,
            post.category,
            post.author,
            ...(post.tags ?? []),
            post.content.replace(/<[^>]*>/g, ' '),
        ].join(' ').toLocaleLowerCase();
        return matchesCategory && (!query || searchableText.includes(query));
    });

    const featuredPost = filteredPosts[0];
    const latestPosts = filteredPosts.filter((post) => post.id !== featuredPost?.id);

    if (isLoading) {
        return (
            <main className="pt-24 bg-white dark:bg-gray-950 min-h-screen">
                <div className="max-w-7xl mx-auto px-8 py-24">
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 text-gray-900 dark:text-white">
                        Insights from the <span className="italic font-serif text-primary-600">Front Row</span>.
                    </h1>
                    <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mb-12 font-medium">
                        Expert advice, trend reports, and inspiration for the modern event planner.
                    </p>
                    <div className="animate-pulse space-y-8">
                        <div className="h-64 bg-gray-200 dark:bg-gray-800 rounded-[3rem]"></div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="h-96 bg-gray-200 dark:bg-gray-800 rounded-[2rem]"></div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="pt-24 bg-white dark:bg-gray-950 min-h-screen">
            {/* Hero */}
            <section className="relative py-28 px-6 md:px-8 bg-gray-50 dark:bg-gray-900 mb-20 md:mb-28">
                <div className="max-w-7xl mx-auto text-center">
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary-600 mb-4 block animate-in fade-in slide-in-from-bottom-4 duration-700">Ariya Journal</span>
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 text-gray-900 dark:text-white animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                        Insights from the <br /><span className="italic font-serif text-primary-600">Front Row</span>.
                    </h1>
                    <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                        Expert advice, trend reports, and inspiration for the modern event planner.
                    </p>
                </div>
            </section>

            {/* Featured Post */}
            {featuredPost && (
                <section className="max-w-7xl mx-auto px-6 md:px-8 mb-28">
                    <Link to={`/resources/blog/${featuredPost.slug || featuredPost.id}`} className="group block relative rounded-[3rem] overflow-hidden aspect-[16/9] md:aspect-[21/9]">
                        <img
                            src={featuredPost.image}
                            alt={featuredPost.imageAlt || featuredPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-8 md:p-16 text-white max-w-4xl">
                            <div className="inline-block px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-xs font-black uppercase tracking-widest mb-6">
                                Editors Pick
                            </div>
                            <h2 className="text-3xl md:text-6xl font-black tracking-tight mb-6 leading-tight group-hover:underline decoration-2 underline-offset-8">
                                {featuredPost.title}
                            </h2>
                            <div className="flex items-center gap-6 text-sm font-bold uppercase tracking-widest text-white/80">
                                <span className="flex items-center gap-2"><User className="w-4 h-4" /> {featuredPost.author}</span>
                                {formatBlogDate(featuredPost.date) && <span>{formatBlogDate(featuredPost.date)}</span>}
                                {featuredPost.readTime && <span>{featuredPost.readTime}</span>}
                            </div>
                        </div>
                    </Link>
                </section>
            )}

            {/* Post Grid */}
            <section className="max-w-7xl mx-auto px-6 md:px-8 mb-28">
                <div className="mb-8 flex flex-col gap-6 md:mb-10 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-primary-600">The Ariya Journal</p>
                        <h2 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white">Latest Stories</h2>
                    </div>
                    <div className="relative block w-full md:max-w-md">
                        <label htmlFor="blog-search" className="sr-only">Search all blog articles</label>
                        <Search aria-hidden="true" className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        <input
                            id="blog-search"
                            type="search"
                            value={searchQuery}
                            onChange={(event) => setSearchQuery(event.target.value)}
                            placeholder="Search articles, topics, or keywords"
                            className="w-full rounded-2xl border border-gray-200 bg-white py-4 pl-14 pr-12 text-sm font-medium text-gray-900 shadow-sm outline-none transition focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                        />
                        {searchQuery && (
                            <button
                                type="button"
                                onClick={() => setSearchQuery('')}
                                aria-label="Clear search"
                                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
                            >
                                <X aria-hidden="true" className="h-4 w-4" />
                            </button>
                        )}
                    </div>
                </div>

                <div className="mb-12 rounded-3xl border border-gray-200/80 bg-gray-50/80 p-5 dark:border-gray-800 dark:bg-gray-900/70 md:mb-16 md:p-7">
                    <div className="mb-4 flex items-center justify-between gap-4">
                        <h3 className="text-xs font-black uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400">Browse by topic</h3>
                        <span className="text-xs font-semibold text-gray-400">{categories.length - 1} topics</span>
                    </div>
                    <div className="flex flex-wrap gap-2.5 md:gap-3">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                aria-pressed={selectedCategory === cat}
                                className={`min-h-11 rounded-full border px-5 py-2.5 text-xs font-bold tracking-wide transition-colors duration-200 ${selectedCategory === cat
                                    ? 'border-gray-900 bg-gray-900 text-white shadow-sm dark:border-white dark:bg-white dark:text-gray-900'
                                    : 'border-gray-200 bg-white text-gray-700 hover:border-primary-500 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-300 dark:hover:border-primary-500 dark:hover:text-primary-400'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <p className="mb-8 text-sm font-medium text-gray-500 dark:text-gray-400" aria-live="polite">
                    {filteredPosts.length === 0
                        ? 'No stories match your search.'
                        : `Showing ${filteredPosts.length} ${filteredPosts.length === 1 ? 'story' : 'stories'}${query ? ` for “${searchQuery.trim()}”` : ''}${selectedCategory !== 'All' ? ` in ${selectedCategory}` : ''}.`}
                </p>

                {filteredPosts.length > 0 ? (
                    <motion.div
                        layout
                        className="grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 lg:grid-cols-3"
                    >
                        <AnimatePresence mode="popLayout">
                            {latestPosts.map((post) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    key={post.id}
                                >
                                    <Link to={`/resources/blog/${post.slug || post.id}`} className="group flex h-full flex-col">
                                        <div className="relative mb-7 aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-gray-100 dark:bg-gray-800">
                                            <img
                                                src={post.image}
                                                alt={post.imageAlt || post.title}
                                                loading="lazy"
                                                decoding="async"
                                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-primary-600 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                                                {post.category}
                                            </div>
                                        </div>
                                        <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] font-black uppercase tracking-widest text-gray-400">
                                            <span className="text-primary-600">{post.category}</span>
                                            {formatBlogDate(post.date) && <span aria-label="Published date">{formatBlogDate(post.date)}</span>}
                                            {post.readTime && <span aria-label="Reading time">{post.readTime}</span>}
                                        </div>
                                        <h3 className="mb-4 text-2xl font-black leading-tight tracking-tight text-gray-900 transition-colors group-hover:text-primary-600 dark:text-white">
                                            {post.title}
                                        </h3>
                                        <p className="mb-6 line-clamp-3 text-sm font-medium leading-relaxed text-gray-500 dark:text-gray-400">
                                            {post.excerpt}
                                        </p>
                                        <div className="mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 transition-colors group-hover:text-gray-900 dark:group-hover:text-white">
                                            Read Article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                ) : (
                    <div className="rounded-3xl border border-dashed border-gray-300 px-6 py-16 text-center dark:border-gray-700">
                        <Search aria-hidden="true" className="mx-auto mb-4 h-8 w-8 text-gray-400" />
                        <h3 className="mb-2 text-xl font-black text-gray-900 dark:text-white">No stories found</h3>
                        <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">Try another search or clear the selected topic.</p>
                        <button
                            type="button"
                            onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                            className="rounded-full bg-gray-900 px-5 py-3 text-xs font-black uppercase tracking-widest text-white transition hover:bg-primary-600 dark:bg-white dark:text-gray-900"
                        >
                            Clear filters
                        </button>
                    </div>
                )}
            </section>

            {/* Newsletter */}
            <section className="py-24 bg-gray-900 dark:bg-black text-white text-center">
                <div className="max-w-3xl mx-auto px-8">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">Stay In The Know</h2>
                    <p className="text-gray-400 mb-10 text-lg">
                        Get the latest trends, tips, and industry secrets delivered straight to your inbox every week.
                    </p>
                    <div className="max-w-lg mx-auto space-y-4">
                        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                                disabled={submitting}
                                className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-primary-600 transition-colors disabled:opacity-50 min-w-0"
                            />
                            <button
                                type="submit"
                                disabled={submitting}
                                className="shrink-0 bg-primary-600 text-white font-black uppercase tracking-widest px-8 py-4 rounded-full text-xs hover:bg-primary-700 transition-colors disabled:opacity-50 whitespace-nowrap"
                            >
                                {submitting ? '...' : 'Subscribe'}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}
