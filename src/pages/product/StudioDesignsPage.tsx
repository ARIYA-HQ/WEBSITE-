import { ArrowRight, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import { APP_LINKS } from '../../config/links';
import { STUDIO_DESIGNS } from '../../config/studioDesigns';

const categories = ['Invitation Cards', 'Save the Date', 'Access Cards', 'Thank You Cards', 'Table Numbers', 'Place Cards'];

export default function StudioDesignsPage() {
    return (
        <main className="min-h-screen bg-white pt-24 dark:bg-gray-950">
            <section className="bg-[#f8f5f0] px-6 py-20 dark:bg-gray-900 md:px-10 md:py-28">
                <div className="mx-auto max-w-5xl text-center">
                    <Palette className="mx-auto h-8 w-8 text-primary-600" aria-hidden="true" />
                    <span className="mt-5 block text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Ariya Studio</span>
                    <h1 className="mt-4 text-4xl font-black tracking-tight text-gray-900 dark:text-white sm:text-6xl">Designs for every part of your celebration</h1>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300">
                        Explore the current invitation, guest access, thank-you, table-number and place-card designs in Ariya Studio.
                    </p>
                    <a href={APP_LINKS.login} className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-600 px-7 py-4 text-xs font-black uppercase tracking-widest text-white transition hover:bg-primary-700">
                        Log in to customize a design <ArrowRight className="h-4 w-4" />
                    </a>
                </div>
            </section>

            <section className="px-6 py-16 md:px-10 md:py-20">
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
                                    <h2 className="mb-5 text-2xl font-black tracking-tight text-gray-900 dark:text-white">{category}</h2>
                                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                                        {designs.map((design) => (
                                            <a key={design.image} href={APP_LINKS.login} className="group overflow-hidden rounded-2xl border border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-900">
                                                <div className="aspect-[3/4] overflow-hidden bg-gray-100 dark:bg-gray-950">
                                                    <img src={`/images/ariya-studio/references/${design.image}`} alt={`${design.name} Ariya Studio design`} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
                                                </div>
                                                <div className="p-4">
                                                    <h3 className="text-sm font-bold text-gray-900 dark:text-white">{design.name}</h3>
                                                    <span className="mt-3 inline-flex items-center gap-2 whitespace-nowrap text-[10px] font-black uppercase tracking-wider text-primary-700 dark:text-primary-300">
                                                        Log in to customize <ArrowRight className="h-3 w-3" />
                                                    </span>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </section>
                            );
                        })}
                    </div>
                    <div className="mt-16 rounded-3xl bg-gray-50 p-8 text-center dark:bg-gray-900">
                        <h2 className="text-2xl font-black text-gray-900 dark:text-white">Looking for event website themes?</h2>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Website themes live on their own page, separate from Studio’s invitation designs.</p>
                        <Link to="/product/websites" className="mt-5 inline-flex items-center gap-2 whitespace-nowrap text-sm font-bold text-primary-700 dark:text-primary-300">
                            Browse website themes <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
