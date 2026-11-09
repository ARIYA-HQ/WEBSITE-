import React from 'react';
import { ArrowRight, BadgeCheck, Banknote, CalendarClock, Link2, ShieldCheck, Users } from 'lucide-react';
import { APP_LINKS } from '../config/links';

const steps = [
    {
        number: '01',
        title: 'Create an Ariya account',
        description: 'Sign up or log in. You do not need to be a planner or vendor to become an ambassador.',
        icon: Users,
    },
    {
        number: '02',
        title: 'Apply in your dashboard',
        description: 'Open Dashboard → Ambassador, review the programme terms, and enrol while pilot applications are open.',
        icon: BadgeCheck,
    },
    {
        number: '03',
        title: 'Share your personal link',
        description: 'Invite new people in your community to create an Ariya account through your unique referral link.',
        icon: Link2,
    },
];

const eligibleActivity = [
    'Verified ticket purchases',
    'Paid guest QR-pass purchases',
    'Cash-fund contributions through a registry',
];

export default function AmbassadorsPage() {
    return (
        <main className="min-h-screen bg-white text-gray-900 selection:bg-primary-600 selection:text-white dark:bg-gray-950 dark:text-white">
            <section className="relative overflow-hidden bg-gray-950 px-6 py-24 text-white sm:px-10 sm:py-32">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-700/30 via-transparent to-transparent" />
                <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                    <div>
                        <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary-400/20 bg-primary-500/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-primary-300">
                            <Users className="h-4 w-4" /> Ariya community programme
                        </span>
                        <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tighter sm:text-7xl">
                            Bring your people. <span className="text-primary-400">Grow with Ariya.</span>
                        </h1>
                        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
                            Help friends and communities discover a simpler way to plan celebrations. Share your invite link and earn rewards when eligible activity from new referrals is verified.
                        </p>
                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                            <a href={APP_LINKS.ambassador} className="inline-flex items-center justify-center gap-3 rounded-full bg-primary-600 px-8 py-4 text-xs font-black uppercase tracking-widest text-white shadow-xl shadow-primary-950/30 transition hover:bg-primary-500">
                                Create an account and apply <ArrowRight className="h-4 w-4" />
                            </a>
                            <a href="#how-it-works" className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 text-xs font-black uppercase tracking-widest text-white transition hover:bg-white/5">
                                See how it works
                            </a>
                        </div>
                        <p className="mt-5 max-w-2xl text-xs leading-relaxed text-gray-400">
                            Already have an account? The same link takes you to your Ambassador dashboard. Enrollment depends on the current pilot window and available places.
                        </p>
                    </div>

                    <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-7 shadow-2xl shadow-black/10 backdrop-blur dark:shadow-none sm:p-10">
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-primary-300">A clear, simple referral</p>
                        <div className="mt-7 space-y-5">
                            <div className="flex gap-4">
                                <div className="rounded-xl bg-primary-500/10 p-3 text-primary-300"><Link2 className="h-5 w-5" /></div>
                                <div><h2 className="font-bold">Your own invite link</h2><p className="mt-1 text-sm leading-relaxed text-gray-400">New signups are attributed to you when they register through your link.</p></div>
                            </div>
                            <div className="flex gap-4">
                                <div className="rounded-xl bg-primary-500/10 p-3 text-primary-300"><Banknote className="h-5 w-5" /></div>
                                <div><h2 className="font-bold">Up to 0.5% on eligible activity</h2><p className="mt-1 text-sm leading-relaxed text-gray-400">Rewards are capped by Ariya’s approved net revenue for each transaction. Signups alone do not earn rewards.</p></div>
                            </div>
                            <div className="flex gap-4">
                                <div className="rounded-xl bg-primary-500/10 p-3 text-primary-300"><ShieldCheck className="h-5 w-5" /></div>
                                <div><h2 className="font-bold">Tracked and reviewed</h2><p className="mt-1 text-sm leading-relaxed text-gray-400">Verified activity, holds, adjustments and payouts are shown in your dashboard.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="how-it-works" className="scroll-mt-24 px-6 py-20 sm:px-10 sm:py-28">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto mb-14 max-w-3xl text-center">
                        <span className="mb-4 block text-xs font-black uppercase tracking-[0.24em] text-primary-600">Getting started</span>
                        <h2 className="text-4xl font-black tracking-tight sm:text-5xl">Three steps to join</h2>
                        <p className="mt-5 text-base leading-relaxed text-gray-500 dark:text-gray-400">The ambassador programme is a separate part of your Ariya account. It does not change your account role.</p>
                    </div>
                    <div className="grid gap-5 md:grid-cols-3">
                        {steps.map(({ number, title, description, icon: Icon }) => (
                            <article key={number} className="rounded-[2.5rem] border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-primary-900 sm:p-10">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-black tracking-widest text-primary-600">{number}</span>
                                    <Icon className="h-6 w-6 text-primary-600" />
                                </div>
                                <h3 className="mt-8 text-xl font-black">{title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400">{description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 px-6 py-20 dark:bg-gray-900/60 sm:px-10 sm:py-24">
                <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
                    <div>
                        <span className="mb-4 block text-xs font-black uppercase tracking-[0.24em] text-primary-600">What can earn a reward?</span>
                        <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Only verified, eligible activity</h2>
                        <p className="mt-5 max-w-xl leading-relaxed text-gray-500 dark:text-gray-400">A referral must be a new Ariya account linked to your code at signup. Rewards are based on qualifying purchases by that account—not simply on registration or on activity by someone else.</p>
                        <ul className="mt-7 space-y-4">
                            {eligibleActivity.map((activity) => (
                                <li key={activity} className="flex items-start gap-3 text-sm font-semibold"><BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />{activity}</li>
                            ))}
                        </ul>
                        <p className="mt-5 text-sm leading-relaxed text-gray-500 dark:text-gray-400">Physical gifts, shipping, failed or test payments, refunded transactions, and duplicate purchases are excluded.</p>
                    </div>
                    <div className="rounded-[2.5rem] border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-950 sm:p-10">
                        <div className="flex items-center gap-3"><CalendarClock className="h-6 w-6 text-primary-600" /><h3 className="text-xl font-black">When are rewards available?</h3></div>
                        <p className="mt-4 text-sm leading-relaxed text-gray-500 dark:text-gray-400">The standard rate is 0.5% of eligible value, capped at the net revenue available after applicable costs. A reward may be lower or zero if the margin does not support it.</p>
                        <p className="mt-4 text-sm leading-relaxed text-gray-500 dark:text-gray-400">Rewards stay pending until the transaction clears its verification, refund and release checks. The standard holding period is 14 days after the event is completed for ticket sales, or after settlement for QR-pass and cash-fund payments.</p>
                        <div className="mt-6 rounded-2xl border border-orange-100 bg-orange-50 p-5 text-sm leading-relaxed text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100">
                            Withdrawals require at least <strong>₦10,000</strong> in available rewards and a verified bank account. Refunds or chargebacks can reverse unpaid rewards or create an adjustment.
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-6 py-20 sm:px-10 sm:py-28">
                <div className="mx-auto max-w-4xl rounded-[2.5rem] bg-gray-950 px-7 py-12 text-center text-white sm:px-14 sm:py-16">
                    <h2 className="text-3xl font-black tracking-tight sm:text-5xl">Ready to apply?</h2>
                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base">Create an Ariya account or sign in, then open the Ambassador dashboard to review the terms and apply. If pilot enrollment is closed, check back when applications reopen.</p>
                    <a href={APP_LINKS.ambassador} className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-primary-600 px-8 py-4 text-xs font-black uppercase tracking-widest transition hover:bg-primary-500">
                        Continue to Ambassador signup <ArrowRight className="h-4 w-4" />
                    </a>
                    <p className="mx-auto mt-5 max-w-2xl text-[11px] leading-relaxed text-gray-400">Participation and rewards are subject to pilot availability, programme terms, transaction verification and required launch approvals. Earnings are not guaranteed.</p>
                </div>
            </section>
        </main>
    );
}
