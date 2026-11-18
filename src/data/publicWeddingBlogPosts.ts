import type { BlogPost } from '../types/cms';
import weddingSeoSeries from './nigerianWeddingSeoSeries.json';
import eventManagementSeoSeries from './eventManagementSeoSeries.json';

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

export const publicEventManagementSeoPosts: BlogPost[] = eventManagementSeoSeries.map((post, index) => ({
    id: -(index + 101),
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
    const additions = [...publicWeddingSeoPosts, ...publicEventManagementSeoPosts]
        .filter((post) => !existingSlugs.has(post.slug));
    return [...additions, ...posts].sort((a, b) => {
        const aDate = Date.parse('date' in a && typeof a.date === 'string' ? a.date : '');
        const bDate = Date.parse('date' in b && typeof b.date === 'string' ? b.date : '');
        const validADate = Number.isNaN(aDate) ? 0 : aDate;
        const validBDate = Number.isNaN(bDate) ? 0 : bDate;
        return validBDate - validADate;
    });
}
