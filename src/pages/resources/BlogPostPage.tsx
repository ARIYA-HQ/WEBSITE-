import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, Share2, Facebook, Twitter, Linkedin, AlertCircle } from 'lucide-react';
import { cmsService } from '../../services/cmsService';
import { BlogPost } from '../../types/cms';
import BlogPostDetailView from '../../components/resources/BlogPostDetailView';
import SEO from '../../components/common/SEO';

export default function BlogPostPage() {
    const { slug } = useParams();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true);
            try {
                if (slug) {
                    const numericId = parseInt(slug);
                    // Try to find by ID first if numeric
                    let fetchedPost: BlogPost | undefined;
                    if (!isNaN(numericId)) {
                        fetchedPost = await cmsService.getBlogPostById(numericId);
                    }

                    setPost(fetchedPost || null);

                    // Fetch related if post found
                    if (fetchedPost) {
                        const allPosts = await cmsService.getBlogPosts();
                        let related = allPosts
                            .filter(p => p.category === fetchedPost!.category && p.id !== fetchedPost!.id)
                            .slice(0, 3);

                        if (related.length < 3) {
                            const remaining = allPosts.filter(p => p.id !== fetchedPost!.id && !related.find(r => r.id === p.id));
                            related.push(...remaining.slice(0, 3 - related.length));
                        }
                        setRelatedPosts(related);
                    }
                }
            } catch (error) {
                console.error('Failed to fetch blog post:', error);
            } finally {
                setLoading(false);
            }
            window.scrollTo(0, 0);
        };

        fetchPost();
    }, [slug]);

    if (loading) {
        return (
            <main className="pt-24 bg-white dark:bg-gray-950 min-h-screen flex items-center justify-center">
                <div className="animate-pulse flex flex-col items-center">
                    <div className="w-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-full mb-4"></div>
                    <div className="h-4 w-32 bg-gray-200 dark:bg-gray-800 rounded"></div>
                </div>
            </main>
        );
    }

    if (!post) {
        return (
            <main className="pt-32 bg-white dark:bg-gray-950 min-h-screen flex flex-col items-center justify-center text-center px-4">
                <AlertCircle className="w-16 h-16 text-gray-300 mb-6" />
                <h1 className="text-4xl font-black tracking-tight mb-4 text-gray-900 dark:text-white">Article Not Found</h1>
                <p className="text-gray-500 mb-8 max-w-md">We couldn't find the article you're looking for. It might have been moved or deleted.</p>
                <Link to="/resources/blog" className="bg-black text-white dark:bg-white dark:text-black px-8 py-3 rounded-full text-sm font-black uppercase tracking-widest hover:bg-primary-600 dark:hover:bg-primary-400 transition-colors">
                    Back to Journal
                </Link>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white dark:bg-gray-950">
            <SEO
                title={post.title}
                description={post.excerpt || post.content.substring(0, 160)}
                image={post.image}
                article={true}
            />
            <BlogPostDetailView post={post} />

            {/* Read Next (kept outside of DetailView to let DetailView be pure for preview) */}

            {/* Read Next */}
            {relatedPosts.length > 0 && (
                <section className="py-24 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                    <div className="max-w-7xl mx-auto px-8">
                        <h3 className="text-2xl font-black tracking-tight mb-12 text-gray-900 dark:text-white">Read Next</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedPosts.map((related) => (
                                <Link to={`/resources/blog/${related.id}`} key={related.id} className="group cursor-pointer">
                                    <div className="aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-4 bg-gray-200 dark:bg-gray-800 relative">
                                        <img
                                            src={related.image}
                                            alt={related.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-primary-600">
                                            {related.category}
                                        </div>
                                    </div>
                                    <h4 className="font-bold text-lg leading-tight group-hover:text-primary-600 transition-colors text-gray-900 dark:text-white">{related.title}</h4>
                                    <div className="text-xs text-gray-500 mt-2 font-bold uppercase tracking-widest">{related.readTime}</div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
}
