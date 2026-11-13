import { useEffect, useState } from 'react';
import { MapPin, Search, ArrowRight, Star } from 'lucide-react';
import { APP_LINKS } from '../../config/links';
import { loadPublicVendors, type PublicVendor } from '../../services/publicMarketplace';

export default function MarketplacePage() {
    const [vendors, setVendors] = useState<PublicVendor[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [query, setQuery] = useState('');
    const [retry, setRetry] = useState(0);

    useEffect(() => {
        let cancelled = false;
        setLoading(true);
        setError('');
        loadPublicVendors()
            .then((result) => {
                if (!cancelled) setVendors(result);
            })
            .catch((cause: unknown) => {
                if (!cancelled) setError(cause instanceof Error ? cause.message : 'Vendor listings could not be loaded.');
            })
            .finally(() => {
                if (!cancelled) setLoading(false);
            });
        return () => { cancelled = true; };
    }, [retry]);

    const filteredVendors = vendors.filter((vendor) =>
        `${vendor.business_name} ${vendor.category ?? ''} ${vendor.city ?? ''} ${vendor.location_base ?? ''}`
            .toLowerCase()
            .includes(query.trim().toLowerCase()),
    );

    return (
        <main className="pt-24 bg-white dark:bg-gray-950 min-h-screen">
            {/* Hero */}
            <section className="relative overflow-hidden bg-pink-50 px-6 py-16 dark:bg-gray-900 md:px-8 md:py-20">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-[10px] font-black uppercase tracking-widest text-pink-600 mb-4 block animate-in fade-in slide-in-from-bottom-4 duration-700">Vendor Marketplace</span>
                    <h1 className="text-4xl font-black tracking-tighter text-gray-900 dark:text-white sm:text-6xl md:text-7xl">
                        Find event vendors
                    </h1>
                    <p className="mx-auto mb-8 mt-5 max-w-2xl text-base font-medium text-gray-500 dark:text-gray-400 sm:text-lg">
                        Explore published Ariya vendors with active listings, real profile details and starting prices.
                    </p>
                    <a
                        href="#vendor-list"
                        className="inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-pink-600 px-8 py-4 text-xs font-black uppercase tracking-widest text-white shadow-xl shadow-pink-200/50 transition hover:bg-pink-700 dark:shadow-none"
                    >
                        <Search className="h-4 w-4" /> Browse vendor listings <ArrowRight className="h-4 w-4" />
                    </a>
                </div>
            </section>

            <section id="vendor-list" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-14 md:px-8 md:py-16">
                <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                    <div>
                        <h2 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white">Vendors on Ariya</h2>
                        <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500 dark:text-gray-400">
                            Published vendor profiles with active listings and starting prices. Vendor names, details and images come from their public Ariya profiles.
                        </p>
                    </div>
                    {!loading && !error && <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{vendors.length} {vendors.length === 1 ? 'vendor' : 'vendors'}</span>}
                </div>
                <label className="mb-7 flex max-w-lg items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-500 dark:border-gray-800 dark:bg-gray-900">
                    <Search className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span className="sr-only">Search vendors</span>
                    <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by name, category or location" className="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400 dark:text-white" />
                </label>
                {loading && <p role="status" className="py-12 text-center text-sm text-gray-500">Loading live vendor listings…</p>}
                {error && <div role="alert" className="rounded-2xl border border-red-200 bg-red-50 p-6 text-sm text-red-800 dark:border-red-900 dark:bg-red-950/30 dark:text-red-200"><p>{error}</p><button type="button" onClick={() => setRetry((value) => value + 1)} className="mt-3 font-bold underline">Try again</button></div>}
                {!loading && !error && filteredVendors.length === 0 && (
                    <p className="rounded-2xl bg-gray-50 px-6 py-12 text-center text-sm text-gray-500 dark:bg-gray-900">{vendors.length === 0 ? 'There are no published vendor listings available right now.' : 'No vendors match that search.'}</p>
                )}
                {!loading && !error && filteredVendors.length > 0 && (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredVendors.map((vendor) => {
                            const profile = vendor.user?.profile;
                            const image = profile?.businessLogo || profile?.business_logo || profile?.profileImage || profile?.profile_image || profile?.avatarUrl || profile?.avatar;
                            const price = Number(vendor.starting_price ?? vendor.price ?? 0);
                            const rating = Number(vendor.rating_avg ?? 0);
                            const reviews = Number(vendor.review_count ?? 0);
                            const location = [...new Set([vendor.city, vendor.location_base].filter(Boolean))].join(', ');
                            return (
                                <article key={vendor.id} className="overflow-hidden rounded-3xl border border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-900">
                                    <div className="relative flex h-48 items-center justify-center bg-gradient-to-br from-pink-50 to-orange-50 dark:from-gray-800 dark:to-gray-900">
                                        <span aria-hidden="true" className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-2xl font-black uppercase text-pink-700 shadow-sm dark:bg-gray-800 dark:text-pink-300">{vendor.business_name.slice(0, 1)}</span>
                                        {image && <img src={image} alt={`${vendor.business_name} profile`} onError={(event) => { event.currentTarget.style.display = 'none'; }} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />}
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-start justify-between gap-3">
                                            <div>
                                                <h3 className="text-lg font-black text-gray-900 dark:text-white">{vendor.business_name}</h3>
                                                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-pink-700 dark:text-pink-300">{vendor.category || 'Event vendor'}</p>
                                            </div>
                                            {rating > 0 && <span className="inline-flex items-center gap-1 whitespace-nowrap text-sm font-bold text-gray-700 dark:text-gray-200"><Star className="h-4 w-4 fill-amber-400 text-amber-400" />{rating.toFixed(1)}{reviews > 0 && <span className="font-normal text-gray-500">({reviews})</span>}</span>}
                                        </div>
                                        {location && <p className="mt-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"><MapPin className="h-4 w-4 shrink-0" />{location}</p>}
                                        {price > 0 && <p className="mt-4 text-sm font-bold text-gray-900 dark:text-white">Starting at ₦{price.toLocaleString('en-NG')}</p>}
                                        <a href={APP_LINKS.login} className="mt-5 inline-flex items-center gap-2 whitespace-nowrap text-xs font-black uppercase tracking-wider text-pink-700 dark:text-pink-300">View profile <ArrowRight className="h-4 w-4" /></a>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                )}
            </section>

        </main>
    );
}
