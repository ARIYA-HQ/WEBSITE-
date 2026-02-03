import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, Twitter, Facebook, Linkedin } from 'lucide-react';
import { BlogPost } from '../../types/cms';

interface BlogPostDetailViewProps {
    post: BlogPost;
    preview?: boolean;
}

export default function BlogPostDetailView({ post, preview = false }: BlogPostDetailViewProps) {
    return (
        <article className={`bg-white dark:bg-gray-950 min-h-screen ${preview ? '' : 'pt-24'}`}>
            <div className="max-w-4xl mx-auto px-8 py-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
                {!preview && (
                    <Link to="/resources/blog" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-primary-600 mb-12 transition-colors group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Journal
                    </Link>
                )}

                <header className="mb-16 text-center">
                    <div className="text-[10px] font-black uppercase tracking-widest text-primary-600 mb-6">{post.category} • {post.date}</div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight text-gray-900 dark:text-white">
                        {post.title}
                    </h1>
                    <div className="flex items-center justify-center gap-8 text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 border-y border-gray-100 dark:border-gray-800 py-6">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center overflow-hidden text-xs text-gray-900 dark:text-gray-200">
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
                    className="prose prose-lg prose-gray dark:prose-invert mx-auto prose-headings:font-black prose-headings:tracking-tight prose-a:text-primary-600 hover:prose-a:text-primary-700"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <hr className="my-16 border-gray-100 dark:border-gray-800" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex gap-2">
                        {post.tags && post.tags.map(tag => (
                            <span key={tag} className="px-4 py-2 bg-gray-50 dark:bg-gray-900 rounded-full text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                                #{tag}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center gap-6">
                        <div className="text-sm font-bold uppercase tracking-widest text-gray-500">Share</div>
                        <div className="flex gap-4">
                            <button className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 hover:border-gray-900 dark:hover:border-white transition-all dark:text-gray-400">
                                <Twitter className="w-4 h-4" />
                            </button>
                            <button className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 hover:border-gray-900 dark:hover:border-white transition-all dark:text-gray-400">
                                <Facebook className="w-4 h-4" />
                            </button>
                            <button className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 hover:border-gray-900 dark:hover:border-white transition-all dark:text-gray-400">
                                <Linkedin className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
