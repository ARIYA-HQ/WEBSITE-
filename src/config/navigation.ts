import {
    LayoutDashboard, Kanban, Bot, Store, Calculator, Globe,
    Search, UserPlus, FileText, Copy, Award,
    LifeBuoy, HelpCircle
} from 'lucide-react';
import { APP_LINKS } from './links';
import { SHOW_CASE_STUDIES } from './features';

export const NAVIGATION_CONFIG = {
    product: {
        title: "Product",
        sections: [
            {
                label: "Platform Overview",
                items: [
                    {
                        title: "Overview",
                        description: "The complete platform summary",
                        href: "/product/overview",
                        icon: LayoutDashboard,
                        color: "orange"
                    },
                    {
                        title: "Planning Dashboard",
                        description: "Your central command center",
                        href: "/product/planning",
                        icon: Kanban,
                        color: "purple"
                    },
                    {
                        title: "AI Planning",
                        description: "Smart assistance & insights",
                        href: "/product/ai-planning",
                        icon: Bot,
                        color: "blue"
                    },
                    {
                        title: "Vendor Marketplace",
                        description: "Connect with top pros",
                        href: "/product/marketplace",
                        icon: Store,
                        color: "pink"
                    },
                    {
                        title: "Budget & Guest List",
                        description: "Manage finances & RSVPs",
                        href: "/product/finance",
                        icon: Calculator,
                        color: "green"
                    },
                    {
                        title: "Websites & Wishlist",
                        description: "Share your story",
                        href: "/product/websites",
                        icon: Globe,
                        color: "indigo"
                    }
                ]
            }
        ],
        featured: {
            label: "Featured",
            title: "AI Planning",
            description: "Draft timelines, budgets, and vendor shortlists in minutes.",
            cta: "Learn More",
            href: "/product/ai-planning"
        }
    },
    solutions: {
        title: "Solutions",
        sections: [
            {
                label: "Solutions",
                items: [
                    {
                        title: "For Agencies",
                        description: "Scale your business with ease",
                        href: "/solutions/agencies"
                    },
                    {
                        title: "For Vendors",
                        description: "Get booked and paid faster",
                        href: "/solutions/vendors"
                    },
                    {
                        title: "Enterprise",
                        description: "Custom solutions for large teams",
                        href: "/solutions/enterprise"
                    }
                ]
            }
        ],
        sidebar: {
            label: "Industries",
            items: ["Weddings", "Corporate", "Non-Profit", "Festivals"]
        }
    },
    vendors: {
        title: "Vendors",
        sections: [
            {
                label: "Marketplace",
                items: [
                    {
                        title: "Browse Vendors",
                        description: "Find vendors by category and city",
                        href: APP_LINKS.vendors,
                        icon: Search,
                        color: "orange"
                    },
                    {
                        title: "Become a Vendor",
                        description: "Create your free vendor profile",
                        href: APP_LINKS.vendorSignup,
                        icon: UserPlus,
                        color: "green"
                    }
                ]
            }
        ],
        featured: {
            title: "For Vendors",
            description: "Get discovered by planners. No subscription — 7% only on completed bookings.",
            cta: "Learn More",
            href: "/solutions/vendors"
        }
    },
    resources: {
        title: "Resources",
        sections: [
            {
                label: "Learn & Grow",
                items: [
                    {
                        title: "Blog & Insights",
                        description: "Industry news",
                        href: "/resources/blog",
                        icon: FileText,
                        color: "pink"
                    },
                    {
                        title: "Guides & Templates",
                        description: "Downloadable resources",
                        href: "/resources/guides",
                        icon: Copy,
                        color: "teal"
                    },
                    ...(SHOW_CASE_STUDIES ? [{
                        title: "Case Studies",
                        description: "Success stories",
                        href: "/resources/case-studies",
                        icon: Award,
                        color: "yellow"
                    }] : []),
                    {
                        title: "Help Center",
                        description: "Get support",
                        href: "/resources/help-center",
                        icon: LifeBuoy,
                        color: "indigo"
                    },
                    {
                        title: "FAQs",
                        description: "Quick answers",
                        href: "/resources/faq",
                        icon: HelpCircle,
                        color: "gray"
                    }
                ]
            }
        ],
        featured: {
            label: "Trend Report",
            title: "2026 Event Trends",
            description: "Discover what's hot this season in our annual report.",
            cta: "Read Report",
            href: "/resources/guides"
        }
    }
};
