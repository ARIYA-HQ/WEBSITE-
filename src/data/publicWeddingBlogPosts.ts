import type { BlogPost } from '../types/cms';
import weddingSeoSeries from './nigerianWeddingSeoSeries.json';

export const publicWeddingSeoPosts: BlogPost[] = weddingSeoSeries.map((post, index) => ({
    id: -(index + 1),
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    content: post.content,
    image: post.image,
    category: post.category,
    author: post.author,
    date: post.date,
    readTime: post.read_time,
    imageAlt: post.imageAlt,
    tags: post.tags,
    status: 'published',
}));

export function mergePublicWeddingSeoPosts(posts: BlogPost[]): BlogPost[];
export function mergePublicWeddingSeoPosts<T extends { slug?: string | null }>(posts: T[]): (T | BlogPost)[];
export function mergePublicWeddingSeoPosts<T extends { slug?: string | null }>(posts: T[]) {
    const existingSlugs = new Set(posts.map((post) => post.slug).filter(Boolean));
    const additions = publicWeddingSeoPosts.filter((post) => !existingSlugs.has(post.slug));
    return [...additions, ...posts];
}
