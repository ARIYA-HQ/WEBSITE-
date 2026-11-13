import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, Gift, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { APP_LINKS } from '../../config/links';
import { loadPublicCatalog, type PublicCatalogItem } from '../../services/publicMarketplace';

export default function WishlistCataloguePage() {
    const [items, setItems] = useState<PublicCatalogItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [query, setQuery] = useState('');
    const [retry, setRetry] = useState(0);

    useEffect(() => {
        let cancelled = false;
        setLoading(true);
        setError('');
        loadPublicCatalog()
            .then((result) => {
                if (!cancelled) setItems(result);
            })
            .catch((cause: unknown) => {
                if (!cancelled) setError(cause instanceof Error ? cause.message : 'The catalogue could not be loaded.');
            })
            .finally(() => {
                if (!cancelled) setLoading(false);
            });
        return () => { cancelled = true; };
    }, [retry]);

    const filteredItems = useMemo(() => {
        const search = query.trim().toLowerCase();
        if (!search) return items;
        return items.filter((item) =>
            `${item.name} ${item.brand} ${item.category} ${item.description ?? ''}`.toLowerCase().includes(search),
        );
    }, [items, query]);

    return (
        <main className="min-h-screen bg-white pt-24 dark:bg-gray-950">
            <section className="bg-[#fbf8f4] px-6 py-14 dark:bg-gray-900/60 md:py-20">
                <div className="mx-auto max-w-5xl text-center">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Ariya wishlist catalogue</span>
                    <h1 className="mt-3 text-4xl font-black tracking-tight text-gray-900 dark:text-white sm:text-6xl">Browse gifts for your wishlist</h1>
                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-base">
                        Explore the current items available on Ariya. Sign in when you’re ready to add gifts to your wishlist.
                    </p>
                    {!loading && !error && <p className="mt-4 text-xs font-bold uppercase tracking-wider text-gray-500">{items.length} {items.length === 1 ? 'item' : 'items'} in the catalogue</p>}
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-10 md:px-8 md:py-14">
                <label className="mx-auto mb-8 flex max-w-xl items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-500 dark:border-gray-800 dark:bg-gray-900">
                    <Search className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span className="sr-only">Search catalogue</span>
                    <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by item, brand or category" className="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400 dark:text-white" />
                </label>
                {loading && <p role="status" className="py-12 text-center text-sm text-gray-500">Loading Ariya’s current catalogue…</p>}
                {error && <div role="alert" className="mx-auto max-w-2xl rounded-2xl border border-red-200 bg-red-50 p-6 text-sm text-red-800 dark:border-red-900 dark:bg-red-950/30 dark:text-red-200"><p>{error}</p><button type="button" onClick={() => setRetry((value) => value + 1)} className="mt-3 font-bold underline">Try again</button></div>}
                {!loading && !error && filteredItems.length === 0 && <p className="rounded-2xl bg-gray-50 px-6 py-12 text-center text-sm text-gray-500 dark:bg-gray-900">{items.length === 0 ? 'There are no active catalogue items available right now.' : 'No items match that search.'}</p>}
                {!loading && !error && filteredItems.length > 0 && (
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {filteredItems.map((item) => (
                            <article key={item.id} className="overflow-hidden rounded-3xl border border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-900">
                                <div className="relative flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-primary-600/10 to-amber-100 dark:to-gray-800">
                                    <Gift className="h-10 w-10 text-primary-600/60" aria-hidden="true" />
                                    {item.imageUrl && <img src={item.imageUrl} alt={item.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover" onError={(event) => { event.currentTarget.style.display = 'none'; }} />}
                                </div>
                                <div className="p-5">
                                    <p className="text-[10px] font-black uppercase tracking-wider text-primary-700 dark:text-primary-300">{item.brand} · {item.category}</p>
                                    <h2 className="mt-2 text-lg font-black text-gray-900 dark:text-white">{item.name}</h2>
                                    {item.description && <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600 dark:text-gray-300">{item.description}</p>}
                                    <p className="mt-4 text-base font-black text-gray-900 dark:text-white">₦{Number(item.price).toLocaleString('en-NG')}</p>
                                    <a href={APP_LINKS.login} className="mt-4 inline-flex items-center gap-2 whitespace-nowrap text-xs font-black uppercase tracking-wider text-primary-700 dark:text-primary-300">Log in to add <ArrowRight className="h-3.5 w-3.5" /></a>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </section>

            <p className="pb-12 text-center text-sm text-gray-500 dark:text-gray-400">
                Need planning tips? <Link to="/wedding-wishlist" className="font-bold text-primary-700 underline dark:text-primary-300">Read the wedding wishlist guide</Link>.
            </p>
        </main>
    );
}
