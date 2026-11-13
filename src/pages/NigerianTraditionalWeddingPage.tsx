import { Link } from 'react-router-dom';
import { ArrowRight, Check, HeartHandshake, Users } from 'lucide-react';
import { APP_LINKS } from '../config/links';
import { EVENT_IMAGES } from '../config/eventImages';
import { trackEvent } from '../analytics/analytics';
import { nigerianTraditionalWeddingFaqs } from '../seo/nigerian-traditional-wedding-content';

const planningChecklist = [
    'Ask both families how they would like the ceremony to be conducted.',
    'Agree on the date, location, guest numbers and responsibilities.',
    'Discuss any engagement list or customary requests together.',
    'Set a budget and agree who is contributing to each expense.',
    'Confirm attire, measurements, fittings and delivery dates.',
    'Choose a venue and plan for guest access, comfort and logistics.',
    'Agree the ceremony programme, speakers, family representatives and roles.',
    'Book the vendors you need and confirm their scope in writing.',
    'Share invitations and guest information early enough for travel planning.',
    'Prepare a contact list, schedule and contingency arrangements.',
];

const traditions = [
    {
        title: 'Yoruba wedding customs',
        subtitle: 'Family introductions, engagement proceedings and celebration',
        description: 'Some Yoruba traditional weddings include an introduction between families, an engagement list, an Alaga who guides parts of the proceedings, prayers or blessings, and formal greetings such as prostration. Couples may choose coordinated aso-ebi and attire such as agbada, iro and buba or other styles selected by the families.',
        note: 'The order, language, roles and specific customs vary across Yoruba communities and families. Ask family representatives how they want the ceremony to proceed.',
    },
    {
        title: 'Igbo wedding customs',
        subtitle: 'Family agreement, customary gifts and Igba Nkwu',
        description: 'Some Igbo traditional weddings include family introductions, discussions or presentation of customary items, blessings and a celebration often associated with Igba Nkwu. A widely recognised version of the wine-carrying ceremony has the bride carry palm wine, identify the groom and present the cup to him.',
        note: 'Customs and ceremony order differ among Igbo communities and families. Confirm what is meaningful and expected for the families involved rather than assuming one format.',
    },
    {
        title: 'Hausa wedding customs',
        subtitle: 'Family arrangements, religious considerations and celebration',
        description: 'Hausa wedding arrangements may include family discussions, religious considerations and different stages of celebration. Attire can include carefully styled fabrics and embroidery; a bride may choose a hijab or other modest styling, while a groom may wear garments such as a baban riga.',
        note: 'Practices vary by family, locality, religion and personal preference. Discuss the ceremony and attire directly with the couple and their families.',
    },
];

function trackTraditionalCta(placement: 'hero' | 'closing') {
    trackEvent('nigerian_traditional_wedding_cta_clicked', { placement });
}

export default function NigerianTraditionalWeddingPage() {
    return (
        <main className="bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
            <section className="relative isolate overflow-hidden bg-gray-950 pt-24 text-white">
                <img
                    src={EVENT_IMAGES.yorubaCouple}
                    alt="A Nigerian couple celebrating in traditional wedding attire"
                    fetchPriority="high"
                    className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-50"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-950/95 via-gray-950/75 to-gray-950/35" />
                <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-16">
                    <div className="max-w-3xl">
                        <nav aria-label="Breadcrumb" className="mb-6 text-xs font-bold text-white/65">
                            <Link to="/" className="transition hover:text-white">Home</Link>
                            <span className="mx-2" aria-hidden="true">/</span>
                            <span aria-current="page" className="text-white">Nigerian traditional wedding</span>
                        </nav>
                        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-orange-200 backdrop-blur">
                            <HeartHandshake className="h-3.5 w-3.5" aria-hidden="true" />
                            A guide for couples and families
                        </span>
                        <h1 className="text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
                            Nigerian Wedding Traditions and Customs: A Guide to Traditional Weddings
                        </h1>
                        <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
                            Explore family preparations, engagement lists, attire and ceremony
                            planning—with examples from Yoruba, Igbo and Hausa celebrations.
                            Customs are not one-size-fits-all: the people and families involved
                            should guide the details.
                        </p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <a
                                href={APP_LINKS.signup}
                                onClick={() => trackTraditionalCta('hero')}
                                className="inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-600 px-3 py-4 text-xs font-black uppercase tracking-widest text-white transition hover:bg-primary-500 sm:w-auto sm:px-7"
                            >
                                Start planning <ArrowRight className="h-4 w-4 shrink-0" />
                            </a>
                            <a
                                href="#planning-checklist"
                                className="inline-flex min-h-12 w-full items-center justify-center whitespace-nowrap rounded-full border border-white/30 bg-white/5 px-3 py-4 text-xs font-black uppercase tracking-widest text-white transition hover:bg-white/15 sm:w-auto sm:px-7"
                            >
                                View the checklist
                            </a>
                        </div>
                        <p className="mt-5 text-xs font-medium text-white/65">
                            The examples in this guide are not universal rules. Confirm customs
                            with both families and community representatives.
                        </p>
                    </div>
                    <aside className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-md sm:p-8">
                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-300/15 text-orange-200">
                                <Users className="h-5 w-5" aria-hidden="true" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-200">Start with conversation</p>
                                <h2 className="mt-1 text-xl font-black">Let the families guide the customs.</h2>
                            </div>
                        </div>
                        <p className="mt-5 text-sm leading-6 text-white/75">
                            Talk through expectations, priorities, costs and responsibilities
                            early. A respectful conversation helps the couple shape a celebration
                            that reflects the people and traditions involved.
                        </p>
                        <div className="mt-6 rounded-2xl bg-black/20 p-4">
                            <span className="text-[10px] font-black uppercase tracking-widest text-white/55">A useful principle</span>
                            <p className="mt-2 text-sm font-bold">Ask, confirm and plan together.</p>
                        </div>
                    </aside>
                </div>
            </section>

            <nav aria-label="On this page" className="border-b border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-950">
                <div className="mx-auto flex max-w-7xl flex-wrap gap-x-6 gap-y-3 px-6 py-5 text-xs font-bold text-gray-600 dark:text-gray-300 md:px-10 lg:px-16">
                    <a className="hover:text-primary-600" href="#meaning">What it means</a>
                    <a className="hover:text-primary-600" href="#traditions">Cultural examples</a>
                    <a className="hover:text-primary-600" href="#engagement-list">Engagement lists</a>
                    <a className="hover:text-primary-600" href="#attire">Attire and aso-ebi</a>
                    <a className="hover:text-primary-600" href="#planning-checklist">Planning checklist</a>
                    <a className="hover:text-primary-600" href="#faqs">FAQs</a>
                </div>
            </nav>

            <section id="meaning" className="scroll-mt-24 px-6 py-16 md:px-10 md:py-24 lg:px-16">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Families, identity and celebration</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">What is a Nigerian traditional wedding?</h2>
                    </div>
                    <div className="space-y-5 leading-7 text-gray-600 dark:text-gray-300">
                        <p>
                            A traditional wedding is a celebration shaped by the customs and
                            family practices recognised by the couple and their communities. It
                            may bring families together through introductions, agreed ceremonial
                            proceedings, blessings, attire, music, food and hospitality.
                        </p>
                        <p>
                            Nigeria is culturally diverse, and traditions differ across ethnic
                            groups, regions, religious communities and individual families. Even
                            within the same community, there may be different ways to conduct a
                            ceremony. No single checklist can define what every couple must do.
                        </p>
                        <p>
                            Some couples hold a traditional ceremony alongside a religious or
                            civil marriage; others hold separate celebrations or choose a
                            different arrangement. Discuss applicable legal or religious
                            requirements with the relevant registry, institution or adviser.
                        </p>
                    </div>
                </div>
            </section>

            <section id="traditions" className="scroll-mt-24 bg-[#fbf8f4] px-6 py-16 dark:bg-gray-900/60 md:px-10 md:py-24 lg:px-16">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-3xl">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Examples, not rules</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Traditional wedding customs across Nigerian communities</h2>
                        <p className="mt-5 leading-7 text-gray-600 dark:text-gray-300">
                            These brief descriptions introduce some practices commonly
                            associated with Yoruba, Igbo and Hausa weddings. They are not
                            exhaustive or universal. Ask the families involved to explain the
                            traditions they wish to include.
                        </p>
                    </div>
                    <div className="mt-9 grid gap-5 lg:grid-cols-3">
                        {traditions.map(({ title, subtitle, description, note }) => (
                            <article key={title} className="rounded-3xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-950 sm:p-7">
                                <span className="text-[10px] font-black uppercase tracking-[0.17em] text-primary-600">{subtitle}</span>
                                <h3 className="mt-3 text-2xl font-black tracking-tight">{title}</h3>
                                <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-300">{description}</p>
                                <p className="mt-5 border-l-2 border-orange-400 pl-4 text-xs leading-6 text-gray-500 dark:text-gray-400">{note}</p>
                            </article>
                        ))}
                    </div>
                    <p className="mt-7 text-sm leading-7 text-gray-600 dark:text-gray-400">
                        Nigeria’s wedding traditions extend well beyond these examples. Couples
                        from other communities—and couples with different family backgrounds—can
                        shape ceremonies around their own heritage, beliefs and preferences.
                    </p>
                </div>
            </section>

            <section id="engagement-list" className="scroll-mt-24 px-6 py-16 md:px-10 md:py-24 lg:px-16">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Discuss expectations early</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Understanding the Nigerian engagement list</h2>
                        <p className="mt-5 leading-7 text-gray-600 dark:text-gray-300">
                            In some communities and families, an engagement list outlines
                            customary requests or items connected with the wedding proceedings.
                            It may include food, drinks, gifts, clothing or other provisions.
                            Contents, meaning and presentation vary, and there is no single
                            nationwide list.
                        </p>
                        <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                            Ask the relevant family representatives to explain each request,
                            quantities, timing and who is responsible. If anything is unclear,
                            discuss it respectfully before making purchases so the couple and
                            families have a shared understanding.
                        </p>
                    </div>
                    <div className="rounded-[2rem] border border-gray-100 bg-[#fbf8f4] p-7 dark:border-gray-800 dark:bg-gray-900 sm:p-9">
                        <h3 className="text-xl font-black">A practical way to organise it</h3>
                        <ol className="mt-6 space-y-4">
                            {[
                                'Request the current details from the family representatives.',
                                'Clarify quantities, acceptable alternatives and delivery arrangements.',
                                'Assign responsibility for each agreed item.',
                                'Add confirmed costs to the wedding budget.',
                                'Check what is already arranged before buying anything.',
                            ].map((item, index) => (
                                <li key={item} className="flex gap-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-600 text-xs font-black text-white">{index + 1}</span>
                                    <span className="pt-0.5">{item}</span>
                                </li>
                            ))}
                        </ol>
                        <Link to="/wedding-budget" className="mt-7 inline-flex items-center gap-2 text-sm font-black text-primary-700 hover:text-primary-600 dark:text-primary-300">
                            Plan your wedding budget <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            <section id="attire" className="scroll-mt-24 bg-gray-950 px-6 py-16 text-white dark:bg-black md:px-10 md:py-24 lg:px-16">
                <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-300">Celebrate personal and family style</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Traditional wedding attire and aso-ebi</h2>
                        <p className="mt-5 leading-7 text-gray-300">
                            Wedding attire may reflect a couple’s heritage, family preferences,
                            faith and personal style. Coordinate early with designers or tailors
                            about fabric, measurements, fittings, accessories and delivery dates.
                            For custom outfits, leave time to address adjustments.
                        </p>
                        <p className="mt-4 leading-7 text-gray-300">
                            Aso-ebi is coordinated clothing worn by a group of family members or
                            guests at some celebrations. If you choose it, communicate the fabric,
                            cost, ordering arrangements and deadlines clearly. Guests should know
                            whether participation is optional and how to ask questions.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                            <h3 className="text-lg font-black text-orange-200">Agree before ordering</h3>
                            <p className="mt-3 text-sm leading-7 text-gray-300">Confirm who is sourcing fabric, how orders and payments will be handled, the delivery timeline and the point of contact for guests.</p>
                        </article>
                        <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                            <h3 className="text-lg font-black text-orange-200">Plan fittings and accessories</h3>
                            <p className="mt-3 text-sm leading-7 text-gray-300">Share measurements accurately, schedule fittings with a buffer and check that all ceremony outfits and accessories are ready before the event week.</p>
                        </article>
                        <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                            <h3 className="text-lg font-black text-orange-200">Make room for individual choices</h3>
                            <p className="mt-3 text-sm leading-7 text-gray-300">Coordinate where it is meaningful, while respecting personal, religious, cultural and comfort preferences.</p>
                        </article>
                    </div>
                </div>
            </section>

            <section id="planning-checklist" className="scroll-mt-24 px-6 py-16 md:px-10 md:py-24 lg:px-16">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-3xl">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Plan with both families</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Traditional wedding planning checklist</h2>
                        <p className="mt-5 leading-7 text-gray-600 dark:text-gray-300">
                            Use these prompts to organise conversations and practical decisions.
                            Adapt them to your ceremony rather than treating them as mandatory
                            customs.
                        </p>
                    </div>
                    <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                        {planningChecklist.map((item) => (
                            <li key={item} className="flex gap-3 rounded-2xl border border-gray-100 bg-white p-4 text-sm leading-6 text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
                                <Check className="mt-1 h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm font-black text-primary-700 dark:text-primary-300">
                        <Link className="inline-flex items-center gap-2 hover:text-primary-600" to="/wedding-checklist-timeline">Use the full wedding checklist <ArrowRight className="h-4 w-4" /></Link>
                        <Link className="inline-flex items-center gap-2 hover:text-primary-600" to="/wedding-vendors-nigeria">Research Nigerian wedding vendors <ArrowRight className="h-4 w-4" /></Link>
                        <Link className="inline-flex items-center gap-2 hover:text-primary-600" to="/wedding-venues-nigeria">Explore wedding venue planning <ArrowRight className="h-4 w-4" /></Link>
                        <Link className="inline-flex items-center gap-2 hover:text-primary-600" to="/digital-wedding-invitations">Plan digital wedding invitations <ArrowRight className="h-4 w-4" /></Link>
                    </div>
                </div>
            </section>

            <section className="border-y border-gray-100 bg-[#fbf8f4] px-6 py-16 dark:border-gray-800 dark:bg-gray-900/60 md:px-10 md:py-20 lg:px-16">
                <div className="mx-auto grid min-w-0 max-w-7xl gap-8 lg:grid-cols-2">
                    <article className="min-w-0 rounded-[2rem] border border-gray-100 bg-white p-7 dark:border-gray-800 dark:bg-gray-950 sm:p-9">
                        <h2 className="break-words text-2xl font-black tracking-tight">Traditional wedding or white wedding?</h2>
                        <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                            A traditional wedding reflects customs and family practices chosen
                            by the couple and their families. A white wedding commonly refers to
                            a Christian ceremony. Couples may hold one, both, or other forms of
                            celebration. A civil marriage has distinct legal procedures, so
                            confirm applicable requirements with the registry or relevant
                            authority.
                        </p>
                    </article>
                    <article className="min-w-0 rounded-[2rem] border border-gray-100 bg-white p-7 dark:border-gray-800 dark:bg-gray-950 sm:p-9">
                        <h2 className="break-words text-2xl font-black tracking-tight">Make the celebration your own</h2>
                        <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                            Respectful planning makes room for family heritage and the couple’s
                            preferences. Decide together which customs to include, explain
                            practical arrangements clearly and keep communication open when
                            expectations differ.
                        </p>
                        <Link to="/wedding-planning" className="mt-5 inline-flex items-center gap-2 text-sm font-black text-primary-700 hover:text-primary-600 dark:text-primary-300">
                            Read our Nigerian wedding planning guide <ArrowRight className="h-4 w-4" />
                        </Link>
                        <div className="mt-5 flex min-w-0 flex-wrap gap-x-5 gap-y-3 text-sm font-bold text-primary-700 dark:text-primary-300">
                            <Link className="min-w-0 break-words hover:text-primary-600" to="/yoruba-traditional-wedding">Yoruba wedding customs</Link>
                            <Link className="min-w-0 break-words hover:text-primary-600" to="/igbo-traditional-wedding">Igbo wedding customs</Link>
                            <Link className="min-w-0 break-words hover:text-primary-600" to="/hausa-traditional-wedding">Hausa wedding customs</Link>
                            <Link className="min-w-0 break-words hover:text-primary-600" to="/nigerian-wedding-engagement-list">Engagement list guide</Link>
                        </div>
                    </article>
                </div>
            </section>

            <section id="faqs" className="scroll-mt-24 border-t border-gray-100 px-6 py-16 dark:border-gray-800 md:px-10 md:py-24 lg:px-16">
                <div className="mx-auto max-w-4xl">
                    <div className="text-center">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600">Helpful answers</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Nigerian traditional wedding FAQs</h2>
                    </div>
                    <div className="mt-10 divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800">
                        {nigerianTraditionalWeddingFaqs.map(({ question, answer }) => (
                            <details key={question} className="group py-5">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left font-bold marker:hidden">
                                    <span>{question}</span>
                                    <span className="text-xl text-primary-600 transition group-open:rotate-45" aria-hidden="true">+</span>
                                </summary>
                                <p className="max-w-3xl pt-4 text-sm leading-7 text-gray-600 dark:text-gray-300">{answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-gray-950 px-6 py-16 text-white dark:bg-black md:px-10 md:py-20 lg:px-16">
                <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                    <div className="max-w-2xl">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-300">Plan together, celebrate with meaning</span>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Bring your wedding plans and people together.</h2>
                        <p className="mt-4 text-sm leading-7 text-gray-300 sm:text-base">
                            Keep important details organised as you prepare for a celebration
                            shaped by your family, culture and preferences.
                        </p>
                    </div>
                    <div className="flex w-full flex-col gap-4 sm:w-auto">
                        <a
                            href={APP_LINKS.signup}
                            onClick={() => trackTraditionalCta('closing')}
                            className="inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-600 px-3 py-4 text-xs font-black uppercase tracking-widest text-white transition hover:bg-primary-500 sm:w-auto sm:px-7"
                        >
                            Explore AriyaHQ <ArrowRight className="h-4 w-4 shrink-0" />
                        </a>
                        <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-bold text-white/80">
                            <Link className="hover:text-white" to="/wedding-planning">Wedding planning guide</Link>
                            <Link className="hover:text-white" to="/wedding-budget">Wedding budget guide</Link>
                            <Link className="hover:text-white" to="/wedding-checklist-timeline">Wedding checklist</Link>
                            <Link className="hover:text-white" to="/wedding-rsvp-guest-management">Guest management guide</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
