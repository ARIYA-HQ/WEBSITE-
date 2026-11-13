import { useState } from 'react';
import { ArrowRight, Mail, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import AccountActionModal from '../../components/common/AccountActionModal';
import { STUDIO_DESIGNS } from '../../config/studioDesigns';

const invitationDesigns = STUDIO_DESIGNS.filter((design) => design.category === 'Invitation Cards');

export default function InvitationDesignsPage() {
    const [selectedDesign, setSelectedDesign] = useState<string | null>(null);

    return (
        <main className="min-h-screen bg-white pt-24 text-gray-900 dark:bg-gray-950 dark:text-white">
            <section className="relative isolate overflow-hidden bg-[#fbf6ef] dark:bg-gray-900">
                <div aria-hidden="true" className="absolute -left-32 -top-32 -z-10 h-96 w-96 rounded-full bg-rose-300/25 blur-3xl dark:bg-rose-950/30" />
                <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 md:px-10 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-16">
                    <div className="max-w-2xl">
                        <span className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-rose-700 shadow-sm dark:border-rose-900 dark:bg-gray-950/70 dark:text-rose-300">
                            <Mail className="h-3.5 w-3.5" /> Ariya Studio · Wedding invitations
                        </span>
                        <h1 className="mt-6 font-serif text-5xl leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">A first impression that feels like you.</h1>
                        <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg">
                            Set the tone for your celebration with a thoughtful invitation design from Ariya Studio.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <a href="#invitation-collection" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary-600 px-7 py-4 text-xs font-black uppercase tracking-widest text-white shadow-lg shadow-primary-600/20 transition hover:-translate-y-0.5 hover:bg-primary-700">
                                Explore the designs <ArrowRight className="h-4 w-4" />
                            </a>
                            <Link to="/digital-wedding-invitations" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-gray-300 bg-white/70 px-7 py-4 text-xs font-black uppercase tracking-widest text-gray-800 transition hover:border-primary-500 dark:border-gray-700 dark:bg-gray-950/60 dark:text-white">
                            Invitation planning guide <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                    <div className="relative mx-auto w-full max-w-xl">
                        <div aria-hidden="true" className="absolute inset-8 rounded-[2.5rem] bg-rose-200/70 rotate-3 dark:bg-rose-950/50" />
                        <div className="relative grid grid-cols-2 gap-3 rounded-[2rem] border border-white/80 bg-white/80 p-4 shadow-2xl shadow-gray-900/10 backdrop-blur dark:border-gray-700 dark:bg-gray-950/80 sm:p-6">
                            {invitationDesigns.slice(0, 3).map((design, index) => (
                                <div key={design.image} className={`relative overflow-hidden rounded-2xl bg-rose-50 dark:bg-gray-800 ${index === 0 ? 'row-span-2 min-h-72' : 'min-h-32'}`}>
                                    <img src={`/images/ariya-studio/references/${design.image}`} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
                                </div>
                            ))}
                            <div className="col-span-2 flex items-center justify-between rounded-2xl bg-[#fbf6ef] px-4 py-3 dark:bg-gray-800">
                                <span className="font-serif text-lg text-gray-800 dark:text-gray-100">Made for your moment</span>
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-rose-600 dark:bg-gray-900"><Mail className="h-4 w-4" /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="invitation-collection" className="scroll-mt-24 px-6 py-14 md:px-10 md:py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary-600"><Palette className="h-4 w-4" /> Invitation collection</span>
                            <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">Wedding invitation designs</h2>
                            <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">Explore the collection and choose a design to make your own.</p>
                        </div>
                        <span className="rounded-full bg-[#fbf6ef] px-4 py-2 text-xs font-bold text-gray-600 dark:bg-gray-900 dark:text-gray-300">{invitationDesigns.length} designs</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                        {invitationDesigns.map((design) => (
                            <article key={design.image} className="group overflow-hidden rounded-[1.5rem] border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-900/10 dark:border-gray-800 dark:bg-gray-900 dark:hover:shadow-black/30">
                                <div className="aspect-[3/4] overflow-hidden bg-[#f7f1e8] dark:bg-gray-950">
                                    <img
                                        src={`/images/ariya-studio/references/${design.image}`}
                                        alt={`${design.name} wedding invitation design`}
                                        loading="lazy"
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-sm font-bold">{design.name}</h3>
                                    <button type="button" onClick={() => setSelectedDesign(design.name)} className="mt-3 inline-flex min-h-10 items-center gap-2 rounded-full bg-rose-50 px-4 text-[10px] font-black uppercase tracking-wider text-rose-800 transition hover:bg-rose-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 dark:bg-rose-950/50 dark:text-rose-200 dark:hover:bg-rose-700">
                                        Make it yours <ArrowRight className="h-3 w-3" />
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                    <div className="mt-12 rounded-3xl border border-gray-100 bg-gray-50 p-7 dark:border-gray-800 dark:bg-gray-900 sm:p-9">
                        <h2 className="text-xl font-black">Need more than an invitation card?</h2>
                        <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600 dark:text-gray-300">
                            A wedding website can hold event details and updates, while a digital invitation guide can help you choose how to share your invite.
                        </p>
                        <div className="mt-5 flex flex-wrap gap-5">
                            <Link to="/product/websites" className="inline-flex items-center gap-2 text-sm font-bold text-primary-700 dark:text-primary-300">
                                Browse event website themes <ArrowRight className="h-4 w-4" />
                            </Link>
                            <Link to="/digital-wedding-invitations" className="inline-flex items-center gap-2 text-sm font-bold text-primary-700 dark:text-primary-300">
                                Read the digital invitation guide <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {selectedDesign && (
                <AccountActionModal
                    title={`Make ${selectedDesign} yours`}
                    description="Create an account or log in to personalize this invitation with your wedding details."
                    onClose={() => setSelectedDesign(null)}
                    createAccountLabel="Start your invitation"
                />
            )}
        </main>
    );
}
