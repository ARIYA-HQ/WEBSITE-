import { ArrowRight, Check, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import { APP_LINKS } from '../../config/links';
import { trackEvent } from '../../analytics/analytics';
import type { TraditionalWeddingGuideContent } from '../../seo/traditional-wedding-guides-content';

const guides = [
    { href: '/nigerian-traditional-wedding', label: 'Nigerian traditional wedding overview' },
    { href: '/yoruba-traditional-wedding', label: 'Yoruba traditional wedding' },
    { href: '/igbo-traditional-wedding', label: 'Igbo traditional wedding' },
    { href: '/hausa-traditional-wedding', label: 'Hausa traditional wedding' },
    { href: '/nigerian-wedding-engagement-list', label: 'Wedding engagement list guide' },
];

export default function TraditionalWeddingGuide({
    content,
}: {
    content: TraditionalWeddingGuideContent;
}) {
    const trackCta = (placement: 'hero' | 'closing') => {
        trackEvent('traditional_wedding_guide_cta_clicked', {
            placement,
            guide: content.path,
        });
    };

    return (
        <main className="bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
            <section className="relative isolate overflow-hidden bg-gray-950 pt-24 text-white">
                <img
                    src={content.image}
                    alt={content.imageAlt}
                    fetchPriority="high"
                    className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-45"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-950/95 via-gray-950/80 to-gray-950/45" />
                <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24 lg:px-16">
                    <nav aria-label="Breadcrumb" className="mb-6 text-xs font-bold text-white/65">
                        <Link to="/" className="transition hover:text-white">Home</Link>
                        <span className="mx-2" aria-hidden="true">/</span>
                        <Link to="/nigerian-traditional-wedding" className="transition hover:text-white">Traditional wedding</Link>
                        <span className="mx-2" aria-hidden="true">/</span>
                        <span aria-current="page" className="text-white">{content.eyebrow}</span>
                    </nav>
                    <div className="max-w-3xl">
                        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-orange-200 backdrop-blur">
                            <HeartHandshake className="h-3.5 w-3.5" aria-hidden="true" />
                            {content.eyebrow}
                        </span>
                        <h1 className="text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
                            {content.title}
                        </h1>
                        <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
                            {content.intro}
                        </p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <a
                                href={APP_LINKS.signup}
                                onClick={() => trackCta('hero')}
                                className="inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-600 px-4 py-4 text-xs font-black uppercase tracking-widest text-white transition hover:bg-primary-500 sm:w-auto sm:px-7"
                            >
                                Start planning <ArrowRight className="h-4 w-4 shrink-0" />
                            </a>
                            <a
                                href="#guide-content"
                                className="inline-flex min-h-12 w-full items-center justify-center whitespace-nowrap rounded-full border border-white/30 bg-white/5 px-4 py-4 text-xs font-black uppercase tracking-widest text-white transition hover:bg-white/15 sm:w-auto sm:px-7"
                            >
                                Explore the guide
                            </a>
                        </div>
                        {content.image === '/images/nigerian-events/event-planner.jpg' && (
                            <p className="mt-5 text-xs font-medium text-white/65">
                                Planning imagery; ceremony details vary by family and community.
                            </p>
                        )}
                    </div>
                </div>
            </section>

            <nav aria-label="On this page" className="border-b border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-950">
                <div className="mx-auto flex max-w-7xl flex-wrap gap-x-6 gap-y-3 px-6 py-5 text-xs font-bold text-gray-600 dark:text-gray-300 md:px-10 lg:px-16">
                    {content.sections.map(({ id, title }) => (
                        <a key={id} className="hover:text-primary-600" href={`#${id}`}>{title}</a>
                    ))}
                    <a className="hover:text-primary-600" href="#faqs">FAQs</a>
                </div>
            </nav>

            <div id="guide-content">
                {content.sections.map(({ id, title, paragraphs, bullets, note }, index) => (
                    <section
                        key={id}
                        id={id}
                        className={`scroll-mt-24 px-6 py-14 md:px-10 md:py-20 lg:px-16 ${index % 2 === 1 ? 'bg-[#fbf8f4] dark:bg-gray-900/60' : ''}`}
                    >
                        <div className="mx-auto grid min-w-0 max-w-7xl gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
                            <div className="min-w-0">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">
                                    {content.eyebrow}
                                </span>
                                <h2 className="mt-3 break-words text-3xl font-black tracking-tight sm:text-4xl">
                                    {title}
                                </h2>
                            </div>
                            <article className="min-w-0 rounded-3xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-950 sm:p-8">
                                <div className="space-y-4">
                                    {paragraphs.map((paragraph) => (
                                        <p key={paragraph} className="break-words text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-base">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                                {bullets && (
                                    <ul className="mt-6 space-y-3">
                                        {bullets.map((bullet) => (
                                            <li key={bullet} className="flex min-w-0 gap-3 text-sm leading-6 text-gray-700 dark:text-gray-300">
                                                <Check className="mt-1 h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
                                                <span className="min-w-0 break-words">{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {note && (
                                    <p className="mt-6 border-l-2 border-orange-400 pl-4 text-sm leading-6 text-gray-500 dark:text-gray-400">
                                        {note}
                                    </p>
                                )}
                            </article>
                        </div>
                    </section>
                ))}
            </div>

            <section id="faqs" className="scroll-mt-24 border-t border-gray-100 px-6 py-16 dark:border-gray-800 md:px-10 md:py-24 lg:px-16">
                <div className="mx-auto max-w-4xl">
                    <div className="text-center">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Helpful answers</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                            {content.eyebrow} FAQs
                        </h2>
                    </div>
                    <div className="mt-10 divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800">
                        {content.faqs.map(({ question, answer }) => (
                            <details key={question} className="group py-5">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left font-bold marker:hidden">
                                    <span className="min-w-0">{question}</span>
                                    <span className="shrink-0 text-xl text-primary-600 transition group-open:rotate-45" aria-hidden="true">+</span>
                                </summary>
                                <p className="max-w-3xl break-words pt-4 text-sm leading-7 text-gray-600 dark:text-gray-300">
                                    {answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-gray-950 px-6 py-16 text-white dark:bg-black md:px-10 md:py-20 lg:px-16">
                <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                    <div className="max-w-2xl">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-300">Plan together, celebrate with meaning</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Keep family traditions and practical plans in view.</h2>
                        <p className="mt-4 text-sm leading-7 text-gray-300 sm:text-base">
                            Confirm the details with the people involved and organise the
                            arrangements that matter to your celebration.
                        </p>
                    </div>
                    <div className="flex w-full flex-col gap-4 sm:w-auto">
                        <a
                            href={APP_LINKS.signup}
                            onClick={() => trackCta('closing')}
                            className="inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-600 px-4 py-4 text-xs font-black uppercase tracking-widest text-white transition hover:bg-primary-500 sm:w-auto sm:px-7"
                        >
                            Explore AriyaHQ <ArrowRight className="h-4 w-4 shrink-0" />
                        </a>
                        <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-bold text-white/80">
                            {guides.filter((guide) => guide.href !== content.path).map(({ href, label }) => (
                                <Link key={href} className="break-words hover:text-white" to={href}>{label}</Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
