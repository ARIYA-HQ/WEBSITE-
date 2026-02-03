import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, User, Clock, Tag, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cmsService } from '../../services/cmsService';
import { BlogPost } from '../../types/cms';

export default function BlogPage() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        const fetchPosts = async () => {
            const data = await cmsService.getBlogPosts();
            setPosts(data);
            setLoading(false);
        };
        fetchPosts();
    }, []);

    const categories = ['All', ...Array.from(new Set(posts.map(post => post.category)))];

    const filteredPosts = selectedCategory === 'All'
        ? posts
        : posts.filter(post => post.category === selectedCategory);

    const featuredPost = posts[0];

    if (loading) {
        return (
            <main className="pt-24 bg-white dark:bg-gray-950 min-h-screen">
                <div className="max-w-7xl mx-auto px-8 py-24">
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
            <section className="relative py-24 px-8 bg-gray-50 dark:bg-gray-900 mb-16 md:mb-24">
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
                <section className="max-w-7xl mx-auto px-8 mb-24">
                    <Link to={`/resources/blog/${featuredPost.id}`} className="group block relative rounded-[3rem] overflow-hidden aspect-[16/9] md:aspect-[21/9]">
                        <img
                            src={featuredPost.image}
                            alt={featuredPost.title}
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
                                <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {featuredPost.readTime}</span>
                            </div>
                        </div>
                    </Link>
                </section>
            )}

            {/* Post Grid */}
            <section className="max-w-7xl mx-auto px-8 mb-24">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
                    <h2 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white">Latest Stories</h2>
                    <div className="flex flex-wrap gap-2 md:gap-4">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest border transition-all duration-300 ${selectedCategory === cat
                                    ? 'bg-gray-900 text-white border-gray-900 shadow-lg transform scale-105 dark:bg-white dark:text-gray-900'
                                    : 'bg-white text-gray-900 border-gray-200 hover:border-gray-900 hover:bg-gray-50 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-800 dark:hover:border-white dark:hover:bg-gray-800'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredPosts.map((post) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={post.id}
                            >
                                <Link to={`/resources/blog/${post.id}`} className="group h-full flex flex-col">
                                    <div className="aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 bg-gray-100 dark:bg-gray-800 relative">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {post.category}
                                        </div>
                                    </div>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3 flex items-center gap-2">
                                        <span className="text-primary-600">{post.category}</span>
                                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <h3 className="text-2xl font-black tracking-tight mb-3 group-hover:text-primary-600 transition-colors leading-tight text-gray-900 dark:text-white">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-relaxed mb-4 line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors mt-auto">
                                        Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </section>

            {/* Newsletter */}
            <section className="py-24 bg-gray-900 dark:bg-black text-white text-center">
                <div className="max-w-3xl mx-auto px-8">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">Stay In The Know</h2>
                    <p className="text-gray-400 mb-10 text-lg">
                        Get the latest trends, tips, and industry secrets delivered straight to your inbox every week.
                    </p>
                    <div className="flex gap-2 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-primary-600 transition-colors"
                        />
                        <button className="bg-primary-600 text-white font-black uppercase tracking-widest px-8 py-4 rounded-full text-xs hover:bg-primary-700 transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
