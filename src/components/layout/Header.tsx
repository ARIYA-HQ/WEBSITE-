import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import NavDropdown from '../NavDropdown';
import MobileNav from './MobileNav';
import { ThemeToggle } from '../ThemeToggle';
import { NAVIGATION_CONFIG } from '../../config/navigation';
import type { NavigationItem } from '../../config/navigation';
import { EVENT_IMAGES } from '../../config/eventImages';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';
import { APP_LINKS } from '../../config/links';

const menuSpotlights: Record<string, { eyebrow: string; title: string; description: string; href: string; image: string }> = {
    'Plan an Event': {
        eyebrow: 'Start with a plan',
        title: 'Make room for the moments that matter.',
        description: 'Explore practical planning guides, checklists and budget tools.',
        href: '/wedding-planning',
        image: EVENT_IMAGES.eventPlanner,
    },
    'Find Vendors': {
        eyebrow: 'Meet your event team',
        title: 'Find the people who make it unforgettable.',
        description: 'Browse public event vendor listings on Ariya.',
        href: '/product/marketplace',
        image: EVENT_IMAGES.florist,
    },
    'Websites & Invitations': {
        eyebrow: 'Set the scene',
        title: 'A beautiful first hello to your celebration.',
        description: 'Explore event website themes and invitation designs.',
        href: '/product/invitations',
        image: EVENT_IMAGES.coupleWalking,
    },
    'Guests & RSVPs': {
        eyebrow: 'Every guest, in the know',
        title: 'Bring the important details together.',
        description: 'Find guidance for invitations, guest lists and responses.',
        href: '/wedding-rsvp-guest-management',
        image: EVENT_IMAGES.coupleReceptionGuests,
    },
    'Gift Registry': {
        eyebrow: 'The Ariya gift edit',
        title: 'Gifts for the life you’re building together.',
        description: 'Discover gift ideas for your event wishlist.',
        href: '/product/wishlist',
        image: EVENT_IMAGES.pinkGeleCelebration,
    },
    'Ideas & Advice': {
        eyebrow: 'Find a little inspiration',
        title: 'Ideas to help bring your celebration to life.',
        description: 'Browse guides and stories from the Ariya journal.',
        href: '/resources/guides',
        image: EVENT_IMAGES.womenCelebrating,
    },
};

const itemAccents = [
    'bg-primary-50 text-primary-700 group-hover:bg-primary-100 dark:bg-primary-900/30 dark:text-primary-300',
    'bg-rose-50 text-rose-700 group-hover:bg-rose-100 dark:bg-rose-950/50 dark:text-rose-300',
    'bg-amber-50 text-amber-700 group-hover:bg-amber-100 dark:bg-amber-950/40 dark:text-amber-300',
    'bg-emerald-50 text-emerald-700 group-hover:bg-emerald-100 dark:bg-emerald-950/40 dark:text-emerald-300',
    'bg-violet-50 text-violet-700 group-hover:bg-violet-100 dark:bg-violet-950/40 dark:text-violet-300',
];

function DesktopMenuItem({ item, index }: { item: NavigationItem; index: number }) {
    const accent = itemAccents[index % itemAccents.length];
    const content = (
        <>
            <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition ${accent}`}>
                <item.icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="min-w-0">
                <span className="block text-sm font-bold text-gray-900 group-hover:text-primary-700 dark:text-white dark:group-hover:text-primary-300">{item.title}</span>
                <span className="mt-1 block text-xs leading-5 text-gray-500 dark:text-gray-400">{item.description}</span>
            </span>
            <ArrowRight className="ml-auto mt-1 h-4 w-4 shrink-0 text-gray-300 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100 group-hover:text-primary-600" aria-hidden="true" />
        </>
    );
    const className = 'group flex items-start gap-3 rounded-2xl border border-transparent p-3 transition hover:border-gray-100 hover:bg-white hover:shadow-sm dark:hover:border-gray-700 dark:hover:bg-gray-800';

    return item.href.startsWith('http')
        ? <a href={item.href} className={className}>{content}</a>
        : <Link to={item.href} className={className}>{content}</Link>;
}

function SpotlightCard({ menuTitle }: { menuTitle: string }) {
    const spotlight = menuSpotlights[menuTitle];

    return (
        <Link to={spotlight.href} className="group relative flex min-h-full overflow-hidden rounded-[1.35rem] bg-gray-900 p-5 text-white">
            <img src={spotlight.image} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-75 transition duration-500 group-hover:scale-105" />
            <span className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/35 to-gray-900/5" />
            <span className="relative mt-auto">
                <span className="inline-flex rounded-full border border-white/30 bg-white/15 px-3 py-1 text-[9px] font-black uppercase tracking-[0.18em] backdrop-blur">{spotlight.eyebrow}</span>
                <span className="mt-3 block font-serif text-2xl leading-tight">{spotlight.title}</span>
                <span className="mt-2 block text-xs leading-5 text-white/80">{spotlight.description}</span>
                <span className="mt-4 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white">
                    Explore <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                </span>
            </span>
        </Link>
    );
}

export default function Header() {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    return (
        <header className="fixed top-0 z-50 w-full border-b border-gray-200/80 bg-white/95 shadow-sm backdrop-blur-2xl dark:border-gray-800/80 dark:bg-gray-950/95">
            <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 2xl:px-8">
                <Link to="/" aria-label="Àríyá home" className="flex shrink-0 items-center">
                    <img
                        src={`${import.meta.env.BASE_URL}brand/ariya-horizontal-primary.svg`}
                        alt="Àríyá"
                        className="h-6 w-auto dark:hidden sm:h-7"
                    />
                    <img
                        src={`${import.meta.env.BASE_URL}brand/ariya-horizontal-reverse.svg`}
                        alt="Àríyá"
                        className="hidden h-6 w-auto dark:block sm:h-7"
                    />
                </Link>

                <nav aria-label="Main navigation" className="hidden items-center gap-2 xl:flex 2xl:gap-3">
                    {NAVIGATION_CONFIG.map((menu) => (
                        <NavDropdown
                            key={menu.title}
                            title={menu.title}
                            activeDropdown={activeDropdown}
                            setActiveDropdown={setActiveDropdown}
                            transparent={false}
                        >
                                <div className="grid w-[min(94vw,980px)] grid-cols-[minmax(0,1fr)_280px] gap-5 rounded-[1.7rem] bg-[#fdfbf8] p-5 dark:bg-gray-900">
                                    <div>
                                        <div className="mb-4 flex items-end justify-between px-1">
                                            <div>
                                                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-primary-700 dark:text-primary-300">Explore Ariya</p>
                                                <h2 className="mt-1 font-serif text-2xl text-gray-900 dark:text-white">{menu.title}</h2>
                                            </div>
                                            <span className="rounded-full bg-white px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-gray-500 shadow-sm dark:bg-gray-800 dark:text-gray-300">{menu.items.length} destinations</span>
                                        </div>
                                        <div className="grid gap-2 sm:grid-cols-2">
                                            {menu.items.map((item, index) => <DesktopMenuItem key={item.href} item={item} index={index} />)}
                                        </div>
                                    </div>
                                    <SpotlightCard menuTitle={menu.title} />
                                </div>
                        </NavDropdown>
                    ))}
                    <Link
                        to="/pricing"
                        className="whitespace-nowrap px-1 text-xs font-semibold text-gray-800 transition-colors hover:text-primary-600 dark:text-gray-100"
                    >
                        Pricing
                    </Link>
                </nav>

                <nav aria-label="Account" className="hidden shrink-0 items-center gap-4 xl:flex 2xl:gap-6">
                    <ThemeToggle />
                    <a href={APP_LINKS.login} className="whitespace-nowrap text-sm font-semibold text-gray-900 transition-colors hover:text-primary-600 dark:text-white">Log In</a>
                    <a href={APP_LINKS.signup} className="whitespace-nowrap">
                        <Button size="sm" tabIndex={-1}>Start Free</Button>
                    </a>
                </nav>

                <div className="xl:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileNavOpen(true)}
                        className="-mr-2 p-2 text-gray-700 transition-colors hover:text-primary-700 dark:text-gray-200 dark:hover:text-primary-300"
                        aria-label="Open menu"
                        aria-expanded={mobileNavOpen}
                    >
                        <Menu className="h-6 w-6" />
                    </button>
                </div>
            </div>
            <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
        </header>
    );
}
