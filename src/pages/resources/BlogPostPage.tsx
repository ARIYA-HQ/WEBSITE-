import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, Share2, Facebook, Twitter, Linkedin, AlertCircle } from 'lucide-react';
import { blogPosts } from '../../data/blogPosts';

export default function BlogPostPage() {
    const { id } = useParams();
    // Find the post by ID (convert id to number since useParams returns string)
    const post = blogPosts.find(p => p.id === Number(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!post) {
        return (
            <main className="pt-32 bg-white min-h-screen flex flex-col items-center justify-center text-center px-4">
                <AlertCircle className="w-16 h-16 text-gray-300 mb-6" />
                <h1 className="text-4xl font-black tracking-tight mb-4">Article Not Found</h1>
                <p className="text-gray-500 mb-8 max-w-md">We couldn't find the article you're looking for. It might have been moved or deleted.</p>
                <Link to="/resources/blog" className="bg-black text-white px-8 py-3 rounded-full text-sm font-black uppercase tracking-widest hover:bg-primary-600 transition-colors">
                    Back to Journal
                </Link>
            </main>
        );
    }

    // Filter relevant related posts (same category, not current post)
    const relatedPosts = blogPosts
        .filter(p => p.category === post.category && p.id !== post.id)
        .slice(0, 3);

    // If not enough related posts, just fill with others
    if (relatedPosts.length < 3) {
        const remaining = blogPosts.filter(p => p.id !== post.id && !relatedPosts.includes(p));
        relatedPosts.push(...remaining.slice(0, 3 - relatedPosts.length));
    }

    return (
        <main className="pt-24 bg-white min-h-screen">
            <article className="max-w-4xl mx-auto px-8 py-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
                <Link to="/resources/blog" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-primary-600 mb-12 transition-colors group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Journal
                </Link>

                <header className="mb-16 text-center">
                    <div className="text-[10px] font-black uppercase tracking-widest text-primary-600 mb-6">{post.category} • {post.date}</div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight text-gray-900">
                        {post.title}
                    </h1>
                    <div className="flex items-center justify-center gap-8 text-sm font-bold uppercase tracking-widest text-gray-500 border-y border-gray-100 py-6">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden text-xs">
                                <User className="w-4 h-4" />
                            </div>
                            <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                        </div>
                    </div>
                </header>

                <div className="w-full aspect-[21/9] rounded-[2.5rem] overflow-hidden mb-16 shadow-2xl">
                    <img
                        src={post.image}
                        className="w-full h-full object-cover"
                        alt={post.title}
                    />
                </div>

                {/* Render HTML content safely */}
                <div
                    className="prose prose-lg prose-gray mx-auto prose-headings:font-black prose-headings:tracking-tight prose-a:text-primary-600 hover:prose-a:text-primary-700"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <hr className="my-16 border-gray-100" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex gap-2">
                        {post.tags.map(tag => (
                            <span key={tag} className="px-4 py-2 bg-gray-50 rounded-full text-xs font-bold uppercase tracking-widest text-gray-500">
                                #{tag}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center gap-6">
                        <div className="text-sm font-bold uppercase tracking-widest text-gray-500">Share</div>
                        <div className="flex gap-4">
                            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all">
                                <Twitter className="w-4 h-4" />
                            </button>
                            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all">
                                <Facebook className="w-4 h-4" />
                            </button>
                            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all">
                                <Linkedin className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </article>

            {/* Read Next */}
            <section className="py-24 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-8">
                    <h3 className="text-2xl font-black tracking-tight mb-12">Read Next</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relatedPosts.map((related) => (
                            <Link to={`/resources/blog/${related.id}`} key={related.id} className="group cursor-pointer">
                                <div className="aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-4 bg-gray-200 relative">
                                    <img
                                        src={related.image}
                                        alt={related.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-primary-600">
                                        {related.category}
                                    </div>
                                </div>
                                <h4 className="font-bold text-lg leading-tight group-hover:text-primary-600 transition-colors">{related.title}</h4>
                                <div className="text-xs text-gray-500 mt-2 font-bold uppercase tracking-widest">{related.readTime}</div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
