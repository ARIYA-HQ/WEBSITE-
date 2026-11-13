import { useState } from 'react';
import { ArrowRight, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import AccountActionModal from '../../components/common/AccountActionModal';
import { STUDIO_DESIGNS } from '../../config/studioDesigns';

const categories = ['Invitation Cards', 'Save the Date', 'Access Cards', 'Thank You Cards', 'Table Numbers', 'Place Cards'];

export default function StudioDesignsPage() {
    const [selectedDesign, setSelectedDesign] = useState<string | null>(null);

    return (
        <main className="min-h-screen bg-white pt-24 dark:bg-gray-950">
            <section className="relative isolate overflow-hidden bg-[#fbf6ef] dark:bg-gray-900">
                <div aria-hidden="true" className="absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-primary-400/20 blur-3xl" />
                <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 md:px-10 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-16">
                    <div className="max-w-2xl">
                        <span className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white/80 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-primary-700 shadow-sm dark:border-primary-900 dark:bg-gray-950/70 dark:text-primary-300">
                            <Palette className="h-3.5 w-3.5" /> Ariya Studio · Paper & details
                        </span>
                        <h1 className="mt-6 font-serif text-5xl leading-[1.04] tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl">The little details they’ll remember.</h1>
                        <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg">
                            Explore invitation, access-card and stationery designs created to bring your celebration together.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <a href="#design-collection" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary-600 px-7 py-4 text-xs font-black uppercase tracking-widest text-white shadow-lg shadow-primary-600/20 transition hover:-translate-y-0.5 hover:bg-primary-700">
                                Browse the collection <ArrowRight className="h-4 w-4" />
                            </a>
                            <Link to="/product/invitations" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-gray-300 bg-white/70 px-7 py-4 text-xs font-black uppercase tracking-widest text-gray-800 transition hover:border-primary-500 dark:border-gray-700 dark:bg-gray-950/60 dark:text-white">
                                Invitation designs <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                    <div className="relative mx-auto w-full max-w-xl">
                        <div aria-hidden="true" className="absolute inset-8 rounded-[2.5rem] bg-primary-200/70 -rotate-3 dark:bg-primary-950/50" />
                        <div className="relative grid grid-cols-2 gap-3 rounded-[2rem] border border-white/80 bg-white/80 p-4 shadow-2xl shadow-gray-900/10 backdrop-blur dark:border-gray-700 dark:bg-gray-950/80 sm:p-6">
                            {STUDIO_DESIGNS.slice(0, 3).map((design, index) => (
                                <div key={design.image} className={`relative overflow-hidden rounded-2xl bg-[#f7f1e8] dark:bg-gray-800 ${index === 0 ? 'row-span-2 min-h-72' : 'min-h-32'}`}>
                                    <img src={`/images/ariya-studio/references/${design.image}`} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
                                </div>
                            ))}
                            <div className="col-span-2 flex items-center justify-between rounded-2xl bg-[#fbf6ef] px-4 py-3 dark:bg-gray-800">
                                <span className="font-serif text-lg text-gray-800 dark:text-gray-100">Thoughtful from first glance</span>
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary-700 dark:bg-gray-900"><Palette className="h-4 w-4" /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="design-collection" className="scroll-mt-24 px-6 py-14 md:px-10 md:py-20">
                <div className="mx-auto max-w-7xl">
                    <nav aria-label="Design categories" className="mb-10 flex flex-wrap justify-center gap-2">
                        {categories.map((category) => (
                            <a key={category} href={`#${category.toLowerCase().replaceAll(' ', '-')}`} className="whitespace-nowrap rounded-full border border-gray-200 px-4 py-2 text-xs font-bold text-gray-700 transition hover:border-primary-500 hover:text-primary-700 dark:border-gray-700 dark:text-gray-200 dark:hover:text-primary-300">
                                {category}
                            </a>
                        ))}
                    </nav>
                    <div className="space-y-14">
                        {categories.map((category) => {
                            const designs = STUDIO_DESIGNS.filter((design) => design.category === category);
                            return (
                                <section key={category} id={category.toLowerCase().replaceAll(' ', '-')} className="scroll-mt-28">
                                    <div className="mb-5 flex items-center justify-between">
                                        <h2 className="font-serif text-2xl tracking-tight text-gray-900 dark:text-white">{category}</h2>
                                        <span className="rounded-full bg-[#fbf6ef] px-3 py-1 text-[10px] font-bold text-gray-500 dark:bg-gray-900 dark:text-gray-400">{designs.length} designs</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                                        {designs.map((design) => (
                                            <article key={design.image} className="group overflow-hidden rounded-[1.4rem] border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-900/10 dark:border-gray-800 dark:bg-gray-900 dark:hover:shadow-black/30">
                                                <div className="aspect-[3/4] overflow-hidden bg-[#f7f1e8] dark:bg-gray-950">
                                                    <img src={`/images/ariya-studio/references/${design.image}`} alt={`${design.name} Ariya Studio design`} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
                                                </div>
                                                <div className="p-4">
                                                    <h3 className="text-sm font-bold text-gray-900 dark:text-white">{design.name}</h3>
                                                    <button type="button" onClick={() => setSelectedDesign(design.name)} className="mt-3 inline-flex min-h-9 items-center gap-2 rounded-full bg-primary-50 px-3 text-[9px] font-black uppercase tracking-wider text-primary-800 transition hover:bg-primary-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:bg-primary-950/60 dark:text-primary-200 dark:hover:bg-primary-700">
                                                        Make it yours <ArrowRight className="h-3 w-3" />
                                                    </button>
                                                </div>
                                            </article>
                                        ))}
                                    </div>
                                </section>
                            );
                        })}
                    </div>
                    <div className="mt-16 rounded-3xl bg-gray-50 p-8 text-center dark:bg-gray-900">
                        <h2 className="text-2xl font-black text-gray-900 dark:text-white">Looking for wedding invitations?</h2>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Browse invitation designs on their own page, or explore the guide to digital invitations.</p>
                        <Link to="/product/invitations" className="mt-5 inline-flex items-center gap-2 whitespace-nowrap text-sm font-bold text-primary-700 dark:text-primary-300">
                            Browse invitation designs <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link to="/digital-wedding-invitations" className="mt-4 flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold text-gray-600 dark:text-gray-300">
                            Read the digital invitation guide <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                    <div className="mt-6 rounded-3xl bg-gray-50 p-8 text-center dark:bg-gray-900">
                        <h2 className="text-2xl font-black text-gray-900 dark:text-white">Looking for event website themes?</h2>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Website themes live on their own page, separate from Studio’s invitation designs.</p>
                        <Link to="/product/websites" className="mt-5 inline-flex items-center gap-2 whitespace-nowrap text-sm font-bold text-primary-700 dark:text-primary-300">
                            Browse website themes <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>
            {selectedDesign && (
                <AccountActionModal
                    title={`Make ${selectedDesign} yours`}
                    description="Create an account or log in to personalize this Studio design for your celebration."
                    onClose={() => setSelectedDesign(null)}
                    createAccountLabel="Start your design"
                />
            )}
        </main>
    );
}
