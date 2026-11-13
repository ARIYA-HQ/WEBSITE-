import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight, ChevronDown, Gift, Heart, Search, Sparkles, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { APP_LINKS } from '../../config/links';
import { loadPublicCatalog, type PublicCatalogItem } from '../../services/publicMarketplace';

const formatNaira = (price: number) => `₦${price.toLocaleString('en-NG')}`;

export default function WishlistCataloguePage() {
    const [items, setItems] = useState<PublicCatalogItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('All gifts');
    const [sortOrder, setSortOrder] = useState('featured');
    const [itemToAdd, setItemToAdd] = useState<PublicCatalogItem | null>(null);
    const [retry, setRetry] = useState(0);
    const closeModalRef = useRef<HTMLButtonElement>(null);
    const dialogRef = useRef<HTMLElement>(null);
    const lastTriggerRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!itemToAdd) return;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        closeModalRef.current?.focus();
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setItemToAdd(null);
                window.requestAnimationFrame(() => lastTriggerRef.current?.focus());
                return;
            }
            if (event.key !== 'Tab' || !dialogRef.current) return;

            const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
                'a[href], button:not([disabled])',
            );
            const first = focusableElements.item(0);
            const last = focusableElements.item(focusableElements.length - 1);
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [itemToAdd]);

    const closeAddModal = () => {
        setItemToAdd(null);
        window.requestAnimationFrame(() => lastTriggerRef.current?.focus());
    };

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

    const categories = useMemo(() => [
        'All gifts',
        ...new Set(items.map((item) => item.category?.trim()).filter((value): value is string => Boolean(value))),
    ], [items]);

    const filteredItems = useMemo(() => {
        const search = query.trim().toLowerCase();
        const filtered = items.filter((item) => {
            const matchesSearch = !search
                || `${item.name} ${item.brand} ${item.category} ${item.description ?? ''}`.toLowerCase().includes(search);
            const matchesCategory = category === 'All gifts' || item.category?.trim() === category;
            return matchesSearch && matchesCategory;
        });
        if (sortOrder === 'price-low') return filtered.sort((a, b) => Number(a.price) - Number(b.price));
        if (sortOrder === 'price-high') return filtered.sort((a, b) => Number(b.price) - Number(a.price));
        return filtered;
    }, [items, query, category, sortOrder]);

    return (
        <main className="min-h-screen bg-white pt-24 dark:bg-gray-950">
            <section className="relative isolate overflow-hidden bg-[#fbf6ef] dark:bg-gray-900">
                <div aria-hidden="true" className="absolute -right-28 -top-32 -z-10 h-96 w-96 rounded-full bg-primary-500/10 blur-3xl" />
                <div aria-hidden="true" className="absolute -bottom-40 left-1/4 -z-10 h-80 w-80 rounded-full bg-rose-300/20 blur-3xl dark:bg-rose-900/20" />
                <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 md:px-10 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-16">
                    <div className="max-w-2xl">
                        <span className="inline-flex items-center gap-2 rounded-full border border-primary-200/80 bg-white/70 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-primary-700 shadow-sm dark:border-primary-800 dark:bg-gray-950/60 dark:text-primary-300">
                            <Sparkles className="h-3.5 w-3.5" /> The Ariya gift edit
                        </span>
                        <h1 className="mt-6 font-serif text-5xl leading-[1.04] tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl">
                            Gifts for the life you’re building together.
                        </h1>
                        <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg">
                            Find thoughtful picks for your celebration and make a wishlist that feels like you.
                        </p>
                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <a href="#gift-collection" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary-600 px-7 py-4 text-xs font-black uppercase tracking-widest text-white shadow-lg shadow-primary-600/20 transition hover:-translate-y-0.5 hover:bg-primary-700">
                                Explore the collection <ArrowRight className="h-4 w-4" />
                            </a>
                            {!loading && !error && (
                                <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                                    {items.length} {items.length === 1 ? 'gift' : 'gifts'} to discover
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="relative mx-auto w-full max-w-xl">
                        <div aria-hidden="true" className="absolute inset-8 rounded-[2.5rem] bg-primary-200/60 rotate-3 dark:bg-primary-950/60" />
                        <div className="relative rounded-[2rem] border border-white/80 bg-white/80 p-4 shadow-2xl shadow-gray-900/10 backdrop-blur dark:border-gray-700 dark:bg-gray-950/80 sm:p-6">
                            <div className="flex items-center justify-between px-1 pb-4">
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-primary-700 dark:text-primary-300">A little inspiration</p>
                                    <p className="mt-1 text-sm font-bold text-gray-800 dark:text-gray-100">Made for your next chapter</p>
                                </div>
                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300">
                                    <Heart className="h-5 w-5" />
                                </span>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                {items.slice(0, 3).map((item, index) => (
                                    <div key={item.id} className={`relative overflow-hidden rounded-2xl bg-[#f7f1e8] dark:bg-gray-800 ${index === 0 ? 'row-span-2 min-h-64' : 'min-h-28'}`}>
                                        {item.imageUrl ? (
                                            <img src={item.imageUrl} alt={item.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                                        ) : (
                                            <div className="flex h-full min-h-28 items-center justify-center text-primary-500/60">
                                                <Gift className="h-8 w-8" aria-hidden="true" />
                                            </div>
                                        )}
                                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 pt-10 text-white">
                                            <p className="line-clamp-1 text-xs font-bold">{item.name}</p>
                                        </div>
                                    </div>
                                ))}
                                {items.length === 0 && !loading && (
                                    <div className="col-span-2 flex min-h-64 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-100 to-rose-100 text-primary-700 dark:from-primary-950 dark:to-rose-950 dark:text-primary-300">
                                        <Gift className="h-14 w-14" aria-hidden="true" />
                                    </div>
                                )}
                                {loading && (
                                    <div className="col-span-2 flex min-h-64 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-100 to-rose-100 text-primary-700 dark:from-primary-950 dark:to-rose-950 dark:text-primary-300">
                                        <Gift className="h-14 w-14" aria-hidden="true" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="gift-collection" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-12 md:px-8 md:py-16">
                <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-700 dark:text-primary-300">The collection</span>
                        <h2 className="mt-2 font-serif text-3xl tracking-tight text-gray-900 dark:text-white sm:text-4xl">Find your something special</h2>
                    </div>
                    {!loading && !error && <p className="text-sm text-gray-500 dark:text-gray-400">{filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}</p>}
                </div>
                <div className="mb-8 rounded-3xl border border-gray-100 bg-[#fdfbf8] p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-5">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                        <label className="flex min-h-12 w-full items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 text-gray-500 transition focus-within:border-primary-400 focus-within:ring-4 focus-within:ring-primary-500/10 dark:border-gray-700 dark:bg-gray-950 lg:max-w-md">
                            <Search className="h-4 w-4 shrink-0" aria-hidden="true" />
                            <span className="sr-only">Search catalogue</span>
                            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search gifts, brands or categories" className="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400 dark:text-white" />
                        </label>
                        <label className="flex min-h-12 items-center justify-between gap-3 rounded-2xl border border-gray-200 bg-white px-4 text-sm text-gray-700 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-200 lg:min-w-52">
                            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">Sort by</span>
                            <span className="relative flex items-center">
                                <select value={sortOrder} onChange={(event) => setSortOrder(event.target.value)} className="appearance-none bg-transparent pr-6 text-sm font-bold outline-none">
                                    <option value="featured">Recommended</option>
                                    <option value="price-low">Price: low to high</option>
                                    <option value="price-high">Price: high to low</option>
                                </select>
                                <ChevronDown className="pointer-events-none absolute right-0 h-4 w-4" aria-hidden="true" />
                            </span>
                        </label>
                    </div>
                    <div className="mt-4 flex gap-2 overflow-x-auto pb-1" aria-label="Gift categories">
                        {categories.map((itemCategory) => (
                            <button
                                key={itemCategory}
                                type="button"
                                onClick={() => setCategory(itemCategory)}
                                aria-pressed={category === itemCategory}
                                className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold transition ${category === itemCategory ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900' : 'border border-gray-200 bg-white text-gray-600 hover:border-primary-400 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-300 dark:hover:text-primary-300'}`}
                            >
                                {itemCategory}
                            </button>
                        ))}
                    </div>
                </div>
                {loading && <p role="status" className="py-12 text-center text-sm text-gray-500">Finding thoughtful gifts…</p>}
                {error && <div role="alert" className="mx-auto max-w-2xl rounded-2xl border border-red-200 bg-red-50 p-6 text-sm text-red-800 dark:border-red-900 dark:bg-red-950/30 dark:text-red-200"><p>{error}</p><button type="button" onClick={() => setRetry((value) => value + 1)} className="mt-3 font-bold underline">Try again</button></div>}
                {!loading && !error && filteredItems.length === 0 && <p className="rounded-3xl border border-dashed border-gray-300 bg-gray-50 px-6 py-16 text-center text-sm text-gray-500 dark:border-gray-700 dark:bg-gray-900">{items.length === 0 ? 'There are no active catalogue items available right now.' : 'No gifts match those filters. Try another search or category.'}</p>}
                {!loading && !error && filteredItems.length > 0 && (
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {filteredItems.map((item) => (
                            <article key={item.id} className="group overflow-hidden rounded-[1.5rem] border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-900/10 dark:border-gray-800 dark:bg-gray-900 dark:hover:shadow-black/30">
                                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#f7efe5] to-[#f4e3df] dark:from-gray-800 dark:to-gray-900">
                                    <div className="flex h-full items-center justify-center text-primary-500/50"><Gift className="h-12 w-12" aria-hidden="true" /></div>
                                    {item.imageUrl && <img src={item.imageUrl} alt={item.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" onError={(event) => { event.currentTarget.style.display = 'none'; }} />}
                                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1.5 text-[9px] font-black uppercase tracking-wider text-gray-700 shadow-sm backdrop-blur dark:bg-gray-950/80 dark:text-gray-200">{item.category}</span>
                                </div>
                                <div className="p-5">
                                    <p className="text-[10px] font-black uppercase tracking-[0.14em] text-primary-700 dark:text-primary-300">{item.brand}</p>
                                    <h3 className="mt-2 min-h-12 text-base font-bold leading-6 text-gray-900 dark:text-white">{item.name}</h3>
                                    {item.description && <p className="mt-2 line-clamp-2 min-h-10 text-xs leading-5 text-gray-500 dark:text-gray-400">{item.description}</p>}
                                    <div className="mt-4 flex items-center justify-between gap-3 border-t border-gray-100 pt-4 dark:border-gray-800">
                                        <p className="text-base font-black text-gray-900 dark:text-white">{formatNaira(Number(item.price))}</p>
                                        <button
                                            type="button"
                                            onClick={(event) => {
                                                lastTriggerRef.current = event.currentTarget;
                                                setItemToAdd(item);
                                            }}
                                            className="inline-flex min-h-10 items-center gap-2 rounded-full bg-primary-50 px-4 text-[10px] font-black uppercase tracking-wider text-primary-800 transition hover:bg-primary-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:bg-primary-900/30 dark:text-primary-200 dark:hover:bg-primary-600"
                                        >
                                            <Heart className="h-3.5 w-3.5" /> Add to wishlist
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </section>

            <p className="pb-12 text-center text-sm text-gray-500 dark:text-gray-400">
                Need planning tips? <Link to="/wedding-wishlist" className="font-bold text-primary-700 underline dark:text-primary-300">Read the wedding wishlist guide</Link>.
            </p>

            {itemToAdd && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-950/60 p-4 backdrop-blur-sm"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) closeAddModal();
                    }}
                >
                    <section
                        ref={dialogRef}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="wishlist-auth-title"
                        aria-describedby="wishlist-auth-description"
                        className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-white/60 bg-white shadow-2xl shadow-black/25 dark:border-gray-700 dark:bg-gray-900"
                    >
                        <div className="relative overflow-hidden bg-[#fbf6ef] px-7 pb-7 pt-8 dark:bg-gray-800 sm:px-9">
                            <div aria-hidden="true" className="absolute -right-10 -top-14 h-40 w-40 rounded-full bg-primary-400/20 blur-2xl" />
                            <button
                                ref={closeModalRef}
                                type="button"
                                onClick={closeAddModal}
                                aria-label="Close dialog"
                                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-gray-600 transition hover:bg-white hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 dark:bg-gray-900/80 dark:text-gray-300 dark:hover:text-white"
                            >
                                <X className="h-4 w-4" />
                            </button>
                            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-primary-700 shadow-sm dark:bg-gray-900 dark:text-primary-300">
                                <Heart className="h-6 w-6" />
                            </div>
                            <p className="relative mt-5 text-[10px] font-black uppercase tracking-[0.18em] text-primary-700 dark:text-primary-300">Your wishlist starts here</p>
                            <h2 id="wishlist-auth-title" className="relative mt-2 font-serif text-3xl leading-tight text-gray-900 dark:text-white">
                                Save this gift for your celebration
                            </h2>
                            <p id="wishlist-auth-description" className="relative mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                                Create an account or log in to add <span className="font-bold text-gray-900 dark:text-white">{itemToAdd.name}</span> to your wishlist.
                            </p>
                        </div>
                        <div className="space-y-3 p-7 sm:p-9">
                            <a
                                href={APP_LINKS.signup}
                                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary-600 px-6 py-4 text-xs font-black uppercase tracking-widest text-white shadow-lg shadow-primary-600/20 transition hover:-translate-y-0.5 hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                            >
                                Create a free account <ArrowRight className="h-4 w-4" />
                            </a>
                            <a
                                href={APP_LINKS.login}
                                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-gray-200 px-6 py-4 text-xs font-black uppercase tracking-widest text-gray-800 transition hover:border-primary-400 hover:bg-primary-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-800"
                            >
                                Log in to your account
                            </a>
                            <button
                                type="button"
                                onClick={closeAddModal}
                                className="w-full py-2 text-xs font-semibold text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                                Keep browsing gifts
                            </button>
                        </div>
                    </section>
                </div>
            )}
        </main>
    );
}
