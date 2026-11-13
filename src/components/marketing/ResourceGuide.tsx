import { ArrowRight, Check, ClipboardList } from 'lucide-react';
import { Link } from 'react-router-dom';
import { APP_LINKS } from '../../config/links';
import { trackEvent } from '../../analytics/analytics';

export interface ResourceGuideContent {
    path: string;
    title: string;
    eyebrow: string;
    intro: string;
    image: string;
    imageAlt: string;
    sections: {
        id: string;
        title: string;
        paragraphs: string[];
        bullets?: string[];
    }[];
    faqs: { question: string; answer: string }[];
    related: { label: string; href: string }[];
    cta: string;
    pricingSummary?: {
        title: string;
        description: string;
        items: { label: string; value: string; detail: string }[];
    };
}

export default function ResourceGuide({ content }: { content: ResourceGuideContent }) {
    const trackCta = () => trackEvent('resource_guide_cta_clicked', { guide: content.path });
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
                <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24 lg:px-16">
                    <nav aria-label="Breadcrumb" className="mb-6 text-xs font-bold text-white/65">
                        <Link to="/" className="hover:text-white">Home</Link>
                        <span className="mx-2" aria-hidden="true">/</span>
                        <Link to="/resources/guides" className="hover:text-white">Guides</Link>
                        <span className="mx-2" aria-hidden="true">/</span>
                        <span aria-current="page" className="text-white">{content.eyebrow}</span>
                    </nav>
                    <div className="max-w-3xl">
                        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-orange-200">
                            <ClipboardList className="h-3.5 w-3.5" aria-hidden="true" />
                            {content.eyebrow}
                        </span>
                        <h1 className="text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">{content.title}</h1>
                        <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">{content.intro}</p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <a
                                href={APP_LINKS.signup}
                                onClick={trackCta}
                                className="inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-600 px-4 py-4 text-xs font-black uppercase tracking-widest text-white hover:bg-primary-500 sm:w-auto sm:px-7"
                            >
                                {content.cta} <ArrowRight className="h-4 w-4 shrink-0" />
                            </a>
                            <a href="#guide-content" className="inline-flex min-h-12 w-full items-center justify-center whitespace-nowrap rounded-full border border-white/30 px-4 py-4 text-xs font-black uppercase tracking-widest text-white hover:bg-white/10 sm:w-auto sm:px-7">
                                Explore the guide
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <nav aria-label="On this page" className="border-b border-gray-100 dark:border-gray-800">
                <div className="mx-auto flex max-w-7xl flex-wrap gap-x-6 gap-y-3 px-6 py-5 text-xs font-bold text-gray-600 dark:text-gray-300 md:px-10 lg:px-16">
                    {content.sections.map(({ id, title }) => <a key={id} href={`#${id}`} className="hover:text-primary-600">{title}</a>)}
                    {content.pricingSummary && <a href="#product-pricing" className="hover:text-primary-600">Ariya pricing</a>}
                    <a href="#faqs" className="hover:text-primary-600">FAQs</a>
                </div>
            </nav>

            <div id="guide-content">
                {content.sections.map((section, index) => (
                    <section key={section.id} id={section.id} className={`scroll-mt-24 px-6 py-14 md:px-10 md:py-20 lg:px-16 ${index % 2 ? 'bg-[#fbf8f4] dark:bg-gray-900/60' : ''}`}>
                        <div className="mx-auto grid min-w-0 max-w-7xl gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
                            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{section.title}</h2>
                            <article className="min-w-0 rounded-3xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-950 sm:p-8">
                                {section.paragraphs.map((paragraph) => <p key={paragraph} className="mb-4 break-words text-sm leading-7 text-gray-600 last:mb-0 dark:text-gray-300 sm:text-base">{paragraph}</p>)}
                                {section.bullets && (
                                    <ul className="mt-5 space-y-3">
                                        {section.bullets.map((bullet) => <li key={bullet} className="flex min-w-0 gap-3 text-sm leading-6 text-gray-700 dark:text-gray-300"><Check className="mt-1 h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" /><span className="min-w-0 break-words">{bullet}</span></li>)}
                                    </ul>
                                )}
                            </article>
                        </div>
                    </section>
                ))}
            </div>

            {content.pricingSummary && (
                <section id="product-pricing" className="scroll-mt-24 bg-[#fbf8f4] px-6 py-14 dark:bg-gray-900/60 md:px-10 md:py-20 lg:px-16">
                    <div className="mx-auto max-w-5xl">
                        <div className="max-w-3xl">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">AriyaHQ pricing</span>
                            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">{content.pricingSummary.title}</h2>
                            <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-base">{content.pricingSummary.description}</p>
                        </div>
                        <div className="mt-8 grid gap-4 md:grid-cols-2">
                            {content.pricingSummary.items.map(({ label, value, detail }) => (
                                <article key={label} className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
                                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                                        <h3 className="font-bold">{label}</h3>
                                        <p className="font-black text-primary-700 dark:text-primary-300">{value}</p>
                                    </div>
                                    <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">{detail}</p>
                                </article>
                            ))}
                        </div>
                        <p className="mt-5 text-xs leading-5 text-gray-500 dark:text-gray-400">
                            Checkout shows the applicable charges before you confirm a payment. See the full <Link to="/pricing" className="font-bold text-primary-700 underline dark:text-primary-300">AriyaHQ pricing page</Link>.
                        </p>
                    </div>
                </section>
            )}

            <section id="faqs" className="scroll-mt-24 border-t border-gray-100 px-6 py-14 dark:border-gray-800 md:px-10 md:py-20 lg:px-16">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-center text-3xl font-black tracking-tight sm:text-4xl">Frequently asked questions</h2>
                    <div className="mt-8 divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800">
                        {content.faqs.map(({ question, answer }) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left font-bold"><span>{question}</span><span className="text-xl text-primary-600 group-open:rotate-45" aria-hidden="true">+</span></summary><p className="max-w-3xl pt-4 text-sm leading-7 text-gray-600 dark:text-gray-300">{answer}</p></details>)}
                    </div>
                </div>
            </section>

            <section className="bg-gray-950 px-6 py-14 text-white dark:bg-black md:px-10 md:py-20 lg:px-16">
                <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-center">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Put your event details in one place.</h2>
                        <p className="mt-4 text-sm leading-7 text-gray-300 sm:text-base">Explore AriyaHQ and choose the tools that fit your event and the people you are organising it with.</p>
                        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm font-bold text-white/80">
                            {content.related.map(({ label, href }) => <Link key={href} to={href} className="hover:text-white">{label}</Link>)}
                        </div>
                    </div>
                    <a href={APP_LINKS.signup} onClick={trackCta} className="inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-600 px-5 py-4 text-xs font-black uppercase tracking-widest text-white hover:bg-primary-500 md:w-auto">
                        {content.cta} <ArrowRight className="h-4 w-4 shrink-0" />
                    </a>
                </div>
            </section>
        </main>
    );
}
