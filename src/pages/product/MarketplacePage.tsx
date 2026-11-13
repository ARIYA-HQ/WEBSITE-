import { useEffect, useState } from 'react';
import { MapPin, Search, ArrowRight, Star } from 'lucide-react';
import AccountActionModal from '../../components/common/AccountActionModal';
import { EVENT_IMAGES } from '../../config/eventImages';
import { loadPublicVendors, type PublicVendor } from '../../services/publicMarketplace';

const cleanLocation = (value: string) =>
    value.split(',')
        .map((part) => part.trim())
        .filter((part, index, parts) =>
            part && parts.findIndex((candidate) => candidate.toLocaleLowerCase() === part.toLocaleLowerCase()) === index,
        )
        .join(', ');

const vendorLocation = (vendor: PublicVendor) =>
    cleanLocation(vendor.city?.trim() || vendor.location_base?.trim() || '');

const formatCategory = (category: string) =>
    category ? category.charAt(0).toUpperCase() + category.slice(1) : category;

export default function MarketplacePage() {
    const [vendors, setVendors] = useState<PublicVendor[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [query, setQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedVendor, setSelectedVendor] = useState<string | null>(null);
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

    const categories = [...new Set(vendors.map((vendor) => vendor.category?.trim()).filter((value): value is string => Boolean(value)))]
        .sort((a, b) => a.localeCompare(b));
    const locations = [...new Set(vendors.map(vendorLocation).filter(Boolean))]
        .sort((a, b) => a.localeCompare(b));
    const filteredVendors = vendors.filter((vendor) => {
        const matchesQuery = `${vendor.business_name} ${vendor.category ?? ''} ${vendor.city ?? ''} ${vendor.location_base ?? ''}`
            .toLowerCase()
            .includes(query.trim().toLowerCase());
        const matchesCategory = !selectedCategory || vendor.category?.trim() === selectedCategory;
        const matchesLocation = !selectedLocation || vendorLocation(vendor) === selectedLocation;
        return matchesQuery && matchesCategory && matchesLocation;
    });

    return (
        <main className="pt-24 bg-white dark:bg-gray-950 min-h-screen">
            {/* Hero */}
            <section className="relative isolate overflow-hidden bg-[#fbf6ef] dark:bg-gray-900">
                <div aria-hidden="true" className="absolute -left-32 -top-32 -z-10 h-96 w-96 rounded-full bg-pink-300/25 blur-3xl dark:bg-pink-950/30" />
                <div aria-hidden="true" className="absolute -bottom-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-primary-400/15 blur-3xl" />
                <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 md:px-10 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-16">
                    <div className="max-w-2xl">
                        <span className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/80 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-pink-700 shadow-sm dark:border-pink-900 dark:bg-gray-950/70 dark:text-pink-300">
                            <Star className="h-3.5 w-3.5" /> The Ariya vendor edit
                        </span>
                        <h1 className="mt-6 font-serif text-5xl leading-[1.04] tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl">
                            Find the people who make it unforgettable.
                        </h1>
                        <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg">
                            Discover event professionals, compare their public details and find the right fit for your celebration.
                        </p>
                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <a href="#vendor-list" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary-600 px-7 py-4 text-xs font-black uppercase tracking-widest text-white shadow-lg shadow-primary-600/20 transition hover:-translate-y-0.5 hover:bg-primary-700">
                                Explore vendors <ArrowRight className="h-4 w-4" />
                            </a>
                            {!loading && !error && <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">{vendors.length} {vendors.length === 1 ? 'vendor' : 'vendors'} listed</span>}
                        </div>
                        <div className="mt-9 flex flex-wrap gap-2 text-xs font-semibold text-gray-600 dark:text-gray-300">
                            {['Browse by category', 'Explore by location', 'Compare public listings'].map((label) => (
                                <span key={label} className="rounded-full border border-white/80 bg-white/70 px-4 py-2 shadow-sm dark:border-gray-700 dark:bg-gray-950/60">{label}</span>
                            ))}
                        </div>
                    </div>
                    <div className="relative mx-auto w-full max-w-xl">
                        <div aria-hidden="true" className="absolute inset-8 rounded-[2.5rem] bg-pink-200/70 rotate-3 dark:bg-pink-950/50" />
                        <div className="relative rounded-[2rem] border border-white/80 bg-white/80 p-4 shadow-2xl shadow-gray-900/10 backdrop-blur dark:border-gray-700 dark:bg-gray-950/80 sm:p-6">
                            <div className="grid grid-cols-2 gap-3">
                                <div className="relative row-span-2 min-h-64 overflow-hidden rounded-2xl bg-pink-100 dark:bg-gray-800">
                                    <img src={EVENT_IMAGES.florist} alt="Florist preparing flowers for a celebration" className="absolute inset-0 h-full w-full object-cover" />
                                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-12 text-white">
                                        <span className="text-[9px] font-black uppercase tracking-[0.18em]">Find your team</span>
                                        <p className="mt-1 font-serif text-xl">People who make it happen</p>
                                    </div>
                                </div>
                                <div className="relative min-h-32 overflow-hidden rounded-2xl bg-rose-100 dark:bg-gray-800">
                                    <img src={EVENT_IMAGES.eventPlanner} alt="Event planner coordinating a celebration" className="absolute inset-0 h-full w-full object-cover" />
                                </div>
                                <div className="relative min-h-32 overflow-hidden rounded-2xl bg-orange-100 dark:bg-gray-800">
                                    <img src={EVENT_IMAGES.coupleReception} alt="A couple celebrating with their event team" className="absolute inset-0 h-full w-full object-cover" />
                                </div>
                            </div>
                            <div className="mt-4 flex items-center justify-between rounded-2xl bg-[#fbf6ef] px-4 py-3 dark:bg-gray-800">
                                <span className="text-xs font-bold text-gray-700 dark:text-gray-200">Your celebration, your people</span>
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-pink-600 dark:bg-gray-900"><Star className="h-4 w-4" /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="vendor-list" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-14 md:px-8 md:py-16">
                <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-700 dark:text-primary-300">Meet your event team</span>
                        <h2 className="mt-2 font-serif text-3xl tracking-tight text-gray-900 dark:text-white sm:text-4xl">Vendors on Ariya</h2>
                        <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500 dark:text-gray-400">
                            Published vendor profiles with active listings and starting prices. Vendor names, details and images come from their public Ariya profiles.
                        </p>
                    </div>
                    {!loading && !error && <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{vendors.length} {vendors.length === 1 ? 'vendor' : 'vendors'}</span>}
                </div>
                <div className="mb-7 rounded-3xl border border-gray-100 bg-[#fdfbf8] p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-5">
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[minmax(16rem,2fr)_1fr_1fr_auto]">
                    <label className="flex min-h-12 items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-500 dark:border-gray-800 dark:bg-gray-950">
                        <Search className="h-4 w-4 shrink-0" aria-hidden="true" />
                        <span className="sr-only">Search vendors</span>
                        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by name, category or location" className="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400 dark:text-white" />
                    </label>
                    <label className="rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-200">
                        <span className="sr-only">Filter vendors by category</span>
                        <select value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)} className="w-full bg-transparent outline-none">
                            <option value="">All categories</option>
                            {categories.map((category) => <option key={category} value={category}>{formatCategory(category)}</option>)}
                        </select>
                    </label>
                    <label className="rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-200">
                        <span className="sr-only">Filter vendors by location</span>
                        <select value={selectedLocation} onChange={(event) => setSelectedLocation(event.target.value)} className="w-full bg-transparent outline-none">
                            <option value="">All locations</option>
                            {locations.map((location) => <option key={location} value={location}>{location}</option>)}
                        </select>
                    </label>
                    {(selectedCategory || selectedLocation || query) && (
                        <button
                            type="button"
                            onClick={() => { setQuery(''); setSelectedCategory(''); setSelectedLocation(''); }}
                            className="min-h-12 whitespace-nowrap rounded-2xl border border-gray-200 px-4 text-sm font-bold text-gray-700 hover:border-pink-500 hover:text-pink-700 dark:border-gray-800 dark:text-gray-200"
                        >
                            Clear filters
                        </button>
                    )}
                    </div>
                </div>
                {loading && <p role="status" className="py-12 text-center text-sm text-gray-500">Loading live vendor listings…</p>}
                {error && <div role="alert" className="rounded-2xl border border-red-200 bg-red-50 p-6 text-sm text-red-800 dark:border-red-900 dark:bg-red-950/30 dark:text-red-200"><p>{error}</p><button type="button" onClick={() => setRetry((value) => value + 1)} className="mt-3 font-bold underline">Try again</button></div>}
                {!loading && !error && filteredVendors.length > 0 && (
                    <p className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400" aria-live="polite">
                        Showing {filteredVendors.length} of {vendors.length} {vendors.length === 1 ? 'vendor' : 'vendors'}
                    </p>
                )}
                {!loading && !error && filteredVendors.length === 0 && (
                    <p className="rounded-3xl border border-dashed border-gray-300 bg-gray-50 px-6 py-16 text-center text-sm text-gray-500 dark:border-gray-700 dark:bg-gray-900">{vendors.length === 0 ? 'There are no published vendor listings available right now.' : 'No vendors match those filters. Try another search or location.'}</p>
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
                                <article key={vendor.id} className="group overflow-hidden rounded-[1.6rem] border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-900/10 dark:border-gray-800 dark:bg-gray-900 dark:hover:shadow-black/30">
                                    <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-orange-50 to-[#fbf6ef] dark:from-gray-800 dark:via-gray-900 dark:to-gray-950">
                                        <span aria-hidden="true" className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-2xl font-black uppercase text-pink-700 shadow-sm dark:bg-gray-800 dark:text-pink-300">{vendor.business_name.slice(0, 1)}</span>
                                        {image && <img src={image} alt={`${vendor.business_name} profile`} onError={(event) => { event.currentTarget.style.display = 'none'; }} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />}
                                        <span className="absolute left-4 top-4 rounded-full border border-white/60 bg-white/85 px-3 py-1.5 text-[9px] font-black uppercase tracking-wider text-gray-700 shadow-sm backdrop-blur dark:bg-gray-950/75 dark:text-gray-200">{formatCategory(vendor.category || 'Event vendor')}</span>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-start justify-between gap-3">
                                            <div>
                                                <h3 className="text-lg font-black text-gray-900 dark:text-white">{vendor.business_name}</h3>
                                                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-pink-700 dark:text-pink-300">{vendor.category ? formatCategory(vendor.category) : 'Event vendor'}</p>
                                            </div>
                                            {rating > 0 && <span className="inline-flex items-center gap-1 whitespace-nowrap text-sm font-bold text-gray-700 dark:text-gray-200"><Star className="h-4 w-4 fill-amber-400 text-amber-400" />{rating.toFixed(1)}{reviews > 0 && <span className="font-normal text-gray-500">({reviews})</span>}</span>}
                                        </div>
                                        {location && <p className="mt-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"><MapPin className="h-4 w-4 shrink-0" />{vendorLocation(vendor) || location}</p>}
                                        {price > 0 && <p className="mt-4 text-sm font-bold text-gray-900 dark:text-white">Starting at ₦{price.toLocaleString('en-NG')}</p>}
                                        <button type="button" onClick={() => setSelectedVendor(vendor.business_name)} className="mt-5 inline-flex min-h-10 items-center gap-2 rounded-full bg-pink-50 px-4 text-xs font-black uppercase tracking-wider text-pink-800 transition hover:bg-pink-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 dark:bg-pink-950/50 dark:text-pink-200 dark:hover:bg-pink-700">View vendor <ArrowRight className="h-4 w-4" /></button>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                )}
            </section>
            {selectedVendor && (
                <AccountActionModal
                    title={`Meet ${selectedVendor}`}
                    description="Create an account or log in to continue to vendor details and connect about your celebration."
                    onClose={() => setSelectedVendor(null)}
                    createAccountLabel="Create your account"
                />
            )}
        </main>
    );
}
