import { ArrowRight, Check, ClipboardList } from 'lucide-react';
import { Link } from 'react-router-dom';
import { APP_LINKS } from '../../config/links';
import { trackEvent } from '../../analytics/analytics';
import { eventFeaturePages } from '../../seo/event-feature-pages-content';

type EventFeaturePath = keyof typeof eventFeaturePages;

export default function EventFeaturePage({ path }: { path: EventFeaturePath }) {
    const content = eventFeaturePages[path];
    if (!content) throw new Error(`Missing event feature page content for ${path}`);

    const trackCta = (placement: 'hero' | 'closing') =>
        trackEvent('event_feature_page_cta_clicked', {
            feature: content.path,
            placement,
        });

    return (
        <main className="bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
            <section className="relative isolate overflow-hidden bg-gray-950 pt-24 text-white">
                <img
                    src={content.image}
                    alt={content.imageAlt}
                    fetchPriority="high"
                    className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-40"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-950/95 via-gray-950/80 to-gray-950/45" />
                <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-24 lg:px-16">
                    <nav aria-label="Breadcrumb" className="mb-6 text-xs font-bold text-white/65">
                        <Link to="/" className="hover:text-white">Home</Link>
                        <span className="mx-2" aria-hidden="true">/</span>
                        <span>Event tools</span>
                        <span className="mx-2" aria-hidden="true">/</span>
                        <span aria-current="page" className="text-white">{content.eyebrow}</span>
                    </nav>
                    <div className="max-w-3xl">
                        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-orange-200">
                            <ClipboardList className="h-3.5 w-3.5" aria-hidden="true" />
                            {content.eyebrow}
                        </span>
                        <h1 className="text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
                            {content.title}
                        </h1>
                        <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
                            {content.intro}
                        </p>
                        <ul className="mt-6 grid gap-3 text-sm text-white/85 sm:grid-cols-2">
                            {content.highlights.map((highlight) => (
                                <li key={highlight} className="flex items-start gap-2">
                                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange-300" aria-hidden="true" />
                                    <span>{highlight}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <a
                                href={APP_LINKS.signup}
                                onClick={() => trackCta('hero')}
                                className="inline-flex min-h-12 min-w-0 w-full items-center justify-center gap-2 whitespace-normal rounded-full bg-primary-600 px-4 py-4 text-center text-xs font-black uppercase leading-5 tracking-widest text-white hover:bg-primary-500 sm:w-auto sm:whitespace-nowrap sm:px-7"
                            >
                                {content.ctaLabel}
                                <ArrowRight className="h-4 w-4 shrink-0" />
                            </a>
                            <a
                                href="#feature-content"
                                className="inline-flex min-h-12 min-w-0 w-full items-center justify-center whitespace-normal rounded-full border border-white/30 px-4 py-4 text-center text-xs font-black uppercase leading-5 tracking-widest text-white hover:bg-white/10 sm:w-auto sm:whitespace-nowrap sm:px-7"
                            >
                                Explore the features
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <nav aria-label="On this page" className="border-b border-gray-100 dark:border-gray-800">
                <div className="mx-auto flex max-w-7xl flex-wrap gap-2 px-5 py-4 text-xs font-bold text-gray-600 dark:text-gray-300 sm:px-6 sm:py-5 md:px-10 lg:px-16">
                    {content.sections.map(({ id, title }) => (
                        <a key={id} href={`#${id}`} className="rounded-full border border-gray-200 px-3 py-2 hover:border-primary-300 hover:text-primary-700 dark:border-gray-700 dark:hover:border-primary-700 dark:hover:text-primary-300">
                            {title}
                        </a>
                    ))}
                    <a href="#faqs" className="rounded-full border border-gray-200 px-3 py-2 hover:border-primary-300 hover:text-primary-700 dark:border-gray-700 dark:hover:border-primary-700 dark:hover:text-primary-300">FAQs</a>
                </div>
            </nav>

            <div id="feature-content">
                {content.sections.map((section, index) => (
                    <section
                        key={section.id}
                        id={section.id}
                        className={`scroll-mt-24 px-6 py-14 md:px-10 md:py-20 lg:px-16 ${index % 2 ? 'bg-[#fbf8f4] dark:bg-gray-900/60' : ''}`}
                    >
                        <div className="mx-auto min-w-0 max-w-7xl">
                            <div className="max-w-3xl">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">
                                    {content.eyebrow}
                                </span>
                                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                                    {section.title}
                                </h2>
                                {section.intro && (
                                    <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-base">
                                        {section.intro}
                                    </p>
                                )}
                            </div>

                            {section.type === 'cards' && (
                                <div className="mt-8 grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                    {section.items.map(({ title, description }, itemIndex) => (
                                        <article
                                            key={title}
                                            className="min-w-0 rounded-3xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-950"
                                        >
                                            <span className="text-xs font-black uppercase tracking-widest text-primary-600">
                                                {String(itemIndex + 1).padStart(2, '0')}
                                            </span>
                                            <h3 className="mt-3 text-lg font-bold">{title}</h3>
                                            <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                                                {description}
                                            </p>
                                        </article>
                                    ))}
                                </div>
                            )}

                            {section.type === 'steps' && (
                                <ol className="mt-8 grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                    {section.items.map(({ title, description }, itemIndex) => (
                                        <li
                                            key={title}
                                            className="min-w-0 rounded-3xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-950"
                                        >
                                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-50 text-sm font-black text-primary-700 dark:bg-primary-950 dark:text-primary-300">
                                                {itemIndex + 1}
                                            </span>
                                            <h3 className="mt-4 font-bold">{title}</h3>
                                            <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                                                {description}
                                            </p>
                                        </li>
                                    ))}
                                </ol>
                            )}

                            {section.type === 'bullets' && (
                                <ul className="mt-8 grid gap-3 md:grid-cols-2">
                                    {section.items.map((item) => (
                                        <li
                                            key={item}
                                            className="flex min-w-0 gap-3 rounded-2xl border border-gray-100 bg-white p-5 text-sm leading-6 text-gray-700 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-300"
                                        >
                                            <Check className="mt-1 h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
                                            <span className="min-w-0 break-words">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {section.type === 'comparison' && (
                                <div className="mt-8 overflow-hidden rounded-3xl border border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-950">
                                    <div className="hidden overflow-x-auto md:block">
                                    <table className="w-full min-w-[42rem] text-left text-sm">
                                        <thead className="bg-gray-50 text-xs font-black uppercase tracking-wide text-gray-600 dark:bg-gray-900 dark:text-gray-300">
                                            <tr>
                                                <th scope="col" className="px-5 py-4">Consideration</th>
                                                <th scope="col" className="px-5 py-4">{section.leftTitle}</th>
                                                <th scope="col" className="px-5 py-4">{section.rightTitle}</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                                            {section.items.map(({ topic, left, right }) => (
                                                <tr key={topic}>
                                                    <th scope="row" className="px-5 py-4 font-bold">{topic}</th>
                                                    <td className="px-5 py-4 leading-6 text-gray-600 dark:text-gray-300">{left}</td>
                                                    <td className="px-5 py-4 leading-6 text-gray-600 dark:text-gray-300">{right}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    </div>
                                    <ul className="divide-y divide-gray-100 dark:divide-gray-800 md:hidden">
                                        {section.items.map(({ topic, left, right }) => (
                                            <li key={topic} className="space-y-3 px-4 py-4">
                                                <h3 className="text-sm font-bold text-gray-900 dark:text-white">{topic}</h3>
                                                <div className="grid gap-3">
                                                    <div className="rounded-xl bg-gray-50 p-3 dark:bg-gray-900">
                                                        <p className="text-[10px] font-black uppercase tracking-wider text-primary-700 dark:text-primary-400">{section.leftTitle}</p>
                                                        <p className="mt-1 text-xs leading-5 text-gray-600 dark:text-gray-300">{left}</p>
                                                    </div>
                                                    <div className="rounded-xl bg-gray-50 p-3 dark:bg-gray-900">
                                                        <p className="text-[10px] font-black uppercase tracking-wider text-primary-700 dark:text-primary-400">{section.rightTitle}</p>
                                                        <p className="mt-1 text-xs leading-5 text-gray-600 dark:text-gray-300">{right}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </section>
                ))}
            </div>

            <section id="faqs" className="scroll-mt-24 border-t border-gray-100 px-6 py-14 dark:border-gray-800 md:px-10 md:py-20 lg:px-16">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-center text-3xl font-black tracking-tight sm:text-4xl">
                        Frequently asked questions
                    </h2>
                    <div className="mt-8 divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800">
                        {content.faqs.map(({ question, answer }) => (
                            <details key={question} className="group py-5">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left font-bold">
                                    <span>{question}</span>
                                    <span className="text-xl text-primary-600 group-open:rotate-45" aria-hidden="true">+</span>
                                </summary>
                                <p className="max-w-3xl pt-4 text-sm leading-7 text-gray-600 dark:text-gray-300">
                                    {answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-gray-950 px-6 py-14 text-white dark:bg-black md:px-10 md:py-20 lg:px-16">
                <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-center">
                    <div className="min-w-0 max-w-3xl">
                        <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{content.closingTitle}</h2>
                        <p className="mt-4 text-sm leading-7 text-gray-300 sm:text-base">
                            {content.closingDescription}
                        </p>
                        <nav aria-label="Related event tools" className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm font-bold text-white/80">
                            {content.related.map(({ label, href }) => (
                                <Link key={href} to={href} className="hover:text-white">{label}</Link>
                            ))}
                        </nav>
                    </div>
                    <a
                        href={APP_LINKS.signup}
                        onClick={() => trackCta('closing')}
                        className="inline-flex min-h-12 min-w-0 w-full items-center justify-center gap-2 whitespace-normal rounded-full bg-primary-600 px-5 py-4 text-center text-xs font-black uppercase leading-5 tracking-widest text-white hover:bg-primary-500 md:w-auto md:whitespace-nowrap"
                    >
                        {content.ctaLabel}
                        <ArrowRight className="h-4 w-4 shrink-0" />
                    </a>
                </div>
            </section>
        </main>
    );
}
