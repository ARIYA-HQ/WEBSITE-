import type { BlogPost } from '../types/cms';

export interface ArticleSection {
    id: string;
    title: string;
}

export function formatBlogDate(date?: string | null): string | null {
    if (!date) return null;
    const parsedDate = new Date(date);
    if (Number.isNaN(parsedDate.getTime())) return null;
    return new Intl.DateTimeFormat('en-NG', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        timeZone: 'UTC',
    }).format(parsedDate);
}

export function prepareArticleSections(segments: string[]) {
    let sectionNumber = 0;
    const sections: ArticleSection[] = [];
    const preparedSegments = segments.map((segment, segmentIndex) => {
        if (segmentIndex % 2 === 1) return segment;

        return segment.replace(/<h2\b[^>]*>([\s\S]*?)<\/h2>/gi, (_heading, content: string) => {
            sectionNumber += 1;
            const title = content
                .replace(/<[^>]*>/g, '')
                .replace(/&(?:amp|lt|gt|quot|apos|nbsp|#39);|&#\d+;|&#x[\da-f]+;/gi, (entity) => {
                    const entities: Record<string, string> = {
                        '&amp;': '&',
                        '&lt;': '<',
                        '&gt;': '>',
                        '&quot;': '"',
                        '&apos;': "'",
                        '&nbsp;': ' ',
                        '&#39;': "'",
                    };
                    const named = entities[entity.toLowerCase()];
                    if (named !== undefined) return named;
                    const codePoint = entity.startsWith('&#x')
                        ? Number.parseInt(entity.slice(3, -1), 16)
                        : Number.parseInt(entity.slice(2, -1), 10);
                    return Number.isFinite(codePoint) ? String.fromCodePoint(codePoint) : entity;
                })
                .trim();
            const id = `article-section-${sectionNumber}`;
            sections.push({ id, title });
            return `<h2 id="${id}" class="scroll-mt-28">${content}</h2>`;
        });
    });

    return { sections, segments: preparedSegments };
}

export function getRelatedBlogPosts(
    post: BlogPost,
    posts: BlogPost[],
    limit = 3,
): BlogPost[] {
    const currentTags = new Set((post.tags ?? []).map((tag) => tag.trim().toLowerCase()));

    return posts
        .filter((candidate) => candidate.id !== post.id)
        .map((candidate, index) => {
            const categoryMatch = candidate.category === post.category;
            const sharedTags = (candidate.tags ?? []).filter((tag) =>
                currentTags.has(tag.trim().toLowerCase()),
            ).length;
            return {
                candidate,
                index,
                score: (categoryMatch ? 4 : 0) + sharedTags * 2,
            };
        })
        .filter(({ score }) => score > 0)
        .sort((a, b) => {
            if (a.score !== b.score) return b.score - a.score;
            const aDate = Date.parse(a.candidate.date);
            const bDate = Date.parse(b.candidate.date);
            const validADate = Number.isNaN(aDate) ? 0 : aDate;
            const validBDate = Number.isNaN(bDate) ? 0 : bDate;
            return validBDate - validADate || a.index - b.index;
        })
        .slice(0, limit)
        .map(({ candidate }) => candidate);
}
