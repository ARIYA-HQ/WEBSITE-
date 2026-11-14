import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, User, Twitter, Facebook, Linkedin } from 'lucide-react';
import { BlogPost } from '../../types/cms';
import DOMPurify from 'dompurify';
import ReaderPoll from './ReaderPoll';

interface BlogPostDetailViewProps {
    post: BlogPost;
    preview?: boolean;
}

export default function BlogPostDetailView({ post, preview = false }: BlogPostDetailViewProps) {
    const articleRef = useRef<HTMLElement>(null);
    const [readingProgress, setReadingProgress] = useState(0);
    const contentSegments = post.content.split(/<!-- ariya-poll:(ariya-poll-\d+) -->/g);
    const parsedDate = post.date ? new Date(post.date) : null;
    const dateLabel = parsedDate && !Number.isNaN(parsedDate.getTime())
        ? new Intl.DateTimeFormat('en-NG', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(parsedDate)
        : post.date;

    useEffect(() => {
        if (preview) return;

        const updateProgress = () => {
            const article = articleRef.current;
            if (!article) return;

            const articleTop = article.getBoundingClientRect().top + window.scrollY;
            const scrollableDistance = article.offsetHeight - window.innerHeight;
            const progress = scrollableDistance <= 0
                ? (window.scrollY >= articleTop ? 100 : 0)
                : ((window.scrollY - articleTop) / scrollableDistance) * 100;

            setReadingProgress(Math.min(100, Math.max(0, progress)));
        };

        updateProgress();
        window.addEventListener('scroll', updateProgress, { passive: true });
        window.addEventListener('resize', updateProgress);
        return () => {
            window.removeEventListener('scroll', updateProgress);
            window.removeEventListener('resize', updateProgress);
        };
    }, [preview, post.slug, post.id]);

    return (
        <article ref={articleRef} className={`bg-white dark:bg-gray-950 min-h-screen ${preview ? '' : 'pt-24'}`}>
            {!preview && (
                <div
                    className="fixed left-0 right-0 top-[73px] z-[51] h-1 bg-gray-300/80 dark:bg-gray-700/80"
                    role="progressbar"
                    aria-label="Article reading progress"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={Math.round(readingProgress)}
                >
                    <div
                        className="h-full origin-left bg-primary-600 transition-transform duration-100"
                        style={{ transform: `scaleX(${readingProgress / 100})` }}
                    />
                </div>
            )}
            <div className="max-w-4xl mx-auto px-8 py-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
                {!preview && (
                    <Link to="/resources/blog" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-primary-600 mb-12 transition-colors group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Journal
                    </Link>
                )}

                <header className="mb-16 text-center">
                    <div className="text-[10px] font-black uppercase tracking-widest text-primary-600 mb-6">{post.category} • {dateLabel}</div>
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
                    </div>
                </header>

                <div className="w-full aspect-[21/9] rounded-[2.5rem] overflow-hidden mb-16 shadow-2xl">
                    <img
                        src={post.image}
                        className="w-full h-full object-cover"
                        alt={post.imageAlt || post.title}
                    />
                </div>

                {/* Render HTML content safely */}
                <div className="article-content">
                    {contentSegments.map((segment, index) => {
                        if (index % 2 === 1) {
                            return <ReaderPoll key={`${segment}-${index}`} pollId={segment} />;
                        }

                        return (
                            <div
                                key={`article-content-${index}`}
                                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(segment) }}
                            />
                        );
                    })}
                </div>

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
