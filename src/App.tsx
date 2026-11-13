import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { SHOW_CASE_STUDIES } from './config/features';
import { AnimatePresence } from 'framer-motion';

// lib & Providers
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { HelmetProvider } from 'react-helmet-async';
import RouteSEO from './components/common/RouteSEO';
import AnalyticsTracker from './components/common/AnalyticsTracker';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';
import { Toaster } from 'sonner';


// Pages (Lazy Loaded)
const LandingPage = lazy(() => import('./pages/LandingPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const AmbassadorsPage = lazy(() => import('./pages/AmbassadorsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const IndividualsPage = lazy(() => import('./pages/solutions/IndividualsPage'));
const PlannersPage = lazy(() => import('./pages/solutions/PlannersPage'));
const AgenciesPage = lazy(() => import('./pages/solutions/AgenciesPage'));
const VendorsPage = lazy(() => import('./pages/solutions/VendorsPage'));
const EnterprisePage = lazy(() => import('./pages/solutions/EnterprisePage'));
const MarketplacePage = lazy(() => import('./pages/product/MarketplacePage'));
const WishlistCataloguePage = lazy(() => import('./pages/product/WishlistCataloguePage'));
const WebsitesPage = lazy(() => import('./pages/product/WebsitesPage'));
const InvitationDesignsPage = lazy(() => import('./pages/product/InvitationDesignsPage'));
const StudioDesignsPage = lazy(() => import('./pages/product/StudioDesignsPage'));
const BlogPage = lazy(() => import('./pages/resources/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/resources/BlogPostPage'));
const FAQPage = lazy(() => import('./pages/resources/FAQPage'));
const HelpCenterPage = lazy(() => import('./pages/resources/HelpCenterPage'));
const GuidesPage = lazy(() => import('./pages/resources/GuidesPage'));
const CaseStudiesPage = lazy(() => import('./pages/resources/CaseStudiesPage'));
const CaseStudyPage = lazy(() => import('./pages/resources/CaseStudyPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Legal Pages (Lazy Loaded)
const PrivacyPolicyPage = lazy(() => import('./pages/legal/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('./pages/legal/TermsOfServicePage'));
const CookieSettingsPage = lazy(() => import('./pages/legal/CookieSettingsPage'));

// Admin Pages (Lazy Loaded)
const AdminDashboardPage = lazy(() => import('./pages/admin/AdminDashboardPage'));
const PostEditorPage = lazy(() => import('./pages/admin/PostEditorPage'));
const CaseStudyEditorPage = lazy(() => import('./pages/admin/CaseStudyEditorPage'));
const ResourceEditorPage = lazy(() => import('./pages/admin/ResourceEditorPage'));
const AnalyticsPage = lazy(() => import('./pages/admin/AnalyticsPage'));
const SettingsPage = lazy(() => import('./pages/admin/SettingsPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const WeddingPlanningPage = lazy(() => import('./pages/WeddingPlanningPage'));
const WeddingWebsitePage = lazy(() => import('./pages/WeddingWebsitePage'));
const WeddingBudgetPage = lazy(() => import('./pages/WeddingBudgetPage'));
const AsoEbiNigeriaPage = lazy(() => import('./pages/AsoEbiNigeriaPage'));
const WeddingInvitationCardsNigeriaPage = lazy(() => import('./pages/WeddingInvitationCardsNigeriaPage'));
const WeddingGiftRegistryNigeriaPage = lazy(() => import('./pages/WeddingGiftRegistryNigeriaPage'));
const WeddingWishlistPage = lazy(() => import('./pages/WeddingWishlistPage'));
const EventTicketingNigeriaPage = lazy(() => import('./pages/EventTicketingNigeriaPage'));
const EventRegistrationNigeriaPage = lazy(() => import('./pages/EventRegistrationNigeriaPage'));
const DigitalWeddingInvitationsPage = lazy(() => import('./pages/DigitalWeddingInvitationsPage'));
const WeddingRsvpGuestManagementPage = lazy(() => import('./pages/WeddingRsvpGuestManagementPage'));
const WeddingVendorsNigeriaPage = lazy(() => import('./pages/WeddingVendorsNigeriaPage'));
const WeddingVenuesNigeriaPage = lazy(() => import('./pages/WeddingVenuesNigeriaPage'));
const WeddingChecklistTimelinePage = lazy(() => import('./pages/WeddingChecklistTimelinePage'));
const NigerianTraditionalWeddingPage = lazy(() => import('./pages/NigerianTraditionalWeddingPage'));
const YorubaTraditionalWeddingPage = lazy(() => import('./pages/YorubaTraditionalWeddingPage'));
const IgboTraditionalWeddingPage = lazy(() => import('./pages/IgboTraditionalWeddingPage'));
const HausaTraditionalWeddingPage = lazy(() => import('./pages/HausaTraditionalWeddingPage'));
const NigerianWeddingEngagementListPage = lazy(() => import('./pages/NigerianWeddingEngagementListPage'));
const WaitlistPage = lazy(() => import('./pages/WaitlistPage'));
const AdminLoginPage = lazy(() => import('./pages/admin/LoginPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));

// Components
import PublicLayout from './components/layout/PublicLayout';
import AdminLayout from './components/layout/AdminLayout';
import ProtectedRoute from './components/ProtectedRoute';
import ErrorBoundary from './components/common/ErrorBoundary';
import { CmsProvider } from './context/CmsContext';

const PageLoader = () => (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-950 z-50">
        <div className="w-12 h-12 border-4 border-primary-500/20 border-t-primary-500 rounded-full animate-spin"></div>
    </div>
);

export default function App() {
    return (
        <HelmetProvider>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider defaultTheme="light" storageKey="ariya-ui-theme">
                    <AuthProvider>
                        <CmsProvider>
                            <Router basename={import.meta.env.BASE_URL}>
                                <ErrorBoundary>
                                    <RouteSEO />
                                    <AnalyticsTracker />
                                    <Suspense fallback={<PageLoader />}>
                                        <Routes>
                                            {/* Public Routes - Wrapped in PublicLayout (Has Header/Footer) */}
                                            <Route element={<PublicLayout />}>
                                                <Route path="/" element={<LandingPage />} />

                                                {/* Product Pages */}
                                                <Route path="/product/overview" element={<Navigate to="/" replace />} />
                                                <Route path="/product/planning" element={<Navigate to="/wedding-planning" replace />} />
                                                <Route path="/product/ai-planning" element={<Navigate to="/wedding-planning" replace />} />
                                                <Route path="/product/marketplace" element={<MarketplacePage />} />
                                                <Route path="/product/wishlist" element={<WishlistCataloguePage />} />
                                                <Route path="/product/finance" element={<Navigate to="/wedding-budget" replace />} />
                                                <Route path="/product/websites" element={<WebsitesPage />} />
                                                <Route path="/product/invitations" element={<InvitationDesignsPage />} />
                                                <Route path="/product/studio-designs" element={<StudioDesignsPage />} />

                                                {/* Solutions Pages */}
                                                <Route path="/solutions/agencies" element={<AgenciesPage />} />
                                                <Route path="/solutions/vendors" element={<VendorsPage />} />
                                                <Route path="/solutions/enterprise" element={<EnterprisePage />} />
                                                <Route path="/solutions/individuals" element={<IndividualsPage />} />
                                                <Route path="/solutions/planners" element={<PlannersPage />} />

                                                {/* Resources Pages */}
                                                <Route path="/resources/blog" element={<BlogPage />} />
                                                <Route path="/resources/blog/:slug" element={<BlogPostPage />} />
                                                <Route path="/resources/case-studies" element={SHOW_CASE_STUDIES ? <CaseStudiesPage /> : <Navigate to="/resources/blog" replace />} />
                                                <Route path="/resources/case-studies/:slug" element={SHOW_CASE_STUDIES ? <CaseStudyPage /> : <Navigate to="/resources/blog" replace />} />
                                                <Route path="/resources/guides" element={<GuidesPage />} />
                                                <Route path="/resources/faq" element={<FAQPage />} />
                                                <Route path="/resources/help-center" element={<HelpCenterPage />} />

                                                <Route path="/pricing" element={<PricingPage />} />
                                                <Route path="/wedding-planning" element={<WeddingPlanningPage />} />
                                                <Route path="/wedding-budget" element={<WeddingBudgetPage />} />
                                                <Route path="/aso-ebi-in-nigeria" element={<AsoEbiNigeriaPage />} />
                                                <Route path="/wedding-invitation-cards-nigeria" element={<WeddingInvitationCardsNigeriaPage />} />
                                                <Route path="/wedding-gift-registry-nigeria" element={<WeddingGiftRegistryNigeriaPage />} />
                                                <Route path="/wedding-wishlist" element={<WeddingWishlistPage />} />
                                                <Route path="/event-ticketing-nigeria" element={<EventTicketingNigeriaPage />} />
                                                <Route path="/event-registration-nigeria" element={<EventRegistrationNigeriaPage />} />
                                                <Route path="/wedding-website" element={<WeddingWebsitePage />} />
                                                <Route path="/digital-wedding-invitations" element={<DigitalWeddingInvitationsPage />} />
                                                <Route path="/wedding-rsvp-guest-management" element={<WeddingRsvpGuestManagementPage />} />
                                                <Route path="/wedding-vendors-nigeria" element={<WeddingVendorsNigeriaPage />} />
                                                <Route path="/wedding-venues-nigeria" element={<WeddingVenuesNigeriaPage />} />
                                                <Route path="/wedding-checklist-timeline" element={<WeddingChecklistTimelinePage />} />
                                                <Route path="/nigerian-traditional-wedding" element={<NigerianTraditionalWeddingPage />} />
                                                <Route path="/yoruba-traditional-wedding" element={<YorubaTraditionalWeddingPage />} />
                                                <Route path="/igbo-traditional-wedding" element={<IgboTraditionalWeddingPage />} />
                                                <Route path="/hausa-traditional-wedding" element={<HausaTraditionalWeddingPage />} />
                                                <Route path="/nigerian-wedding-engagement-list" element={<NigerianWeddingEngagementListPage />} />
                                                <Route path="/about" element={<AboutPage />} />
                                                <Route path="/ambassadors" element={<AmbassadorsPage />} />

                                                {/* CMS / Blog Routes */}
                                                <Route path="/contact" element={<ContactPage />} />
                                                <Route path="/careers" element={<CareersPage />} />
                                                <Route path="/login" element={<LoginPage />} />

                                                {/* Legal Routes */}
                                                <Route path="/legal/privacy" element={<PrivacyPolicyPage />} />
                                                <Route path="/legal/terms" element={<TermsOfServicePage />} />
                                                <Route path="/legal/cookies" element={<CookieSettingsPage />} />

                                                <Route path="*" element={<NotFoundPage />} />
                                            </Route>

                                            <Route path="/waitlist" element={<WaitlistPage />} />

                                            {/* Admin Routes - Wrapped in AdminLayout (NO Header/Footer) */}
                                            <Route element={<AdminLayout />}>
                                                <Route path="/admin/login" element={<AdminLoginPage />} />

                                                <Route element={<ProtectedRoute />}>
                                                    <Route path="/admin" element={<AdminDashboardPage />} />
                                                    <Route path="/admin/analytics" element={<AnalyticsPage />} />
                                                    <Route path="/admin/settings" element={<SettingsPage />} />
                                                    <Route path="/admin/posts/new" element={<PostEditorPage />} />
                                                    <Route path="/admin/posts/:id/edit" element={<PostEditorPage />} />
                                                    <Route path="/admin/case-studies/new" element={<CaseStudyEditorPage />} />
                                                    <Route path="/admin/case-studies/:id/edit" element={<CaseStudyEditorPage />} />
                                                    <Route path="/admin/resources/new" element={<ResourceEditorPage />} />
                                                    <Route path="/admin/resources/:id/edit" element={<ResourceEditorPage />} />
                                                </Route>
                                            </Route>
                                        </Routes>
                                    </Suspense>
                                </ErrorBoundary>
                            </Router>
                        </CmsProvider>
                    </AuthProvider>
                </ThemeProvider >
                <Toaster richColors position="top-right" />
            </QueryClientProvider>
        </HelmetProvider>
    );
}
