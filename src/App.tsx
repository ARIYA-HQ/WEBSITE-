import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Context
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { HelmetProvider } from 'react-helmet-async';


// Pages (Lazy Loaded)
const LandingPage = lazy(() => import('./pages/LandingPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const IndividualsPage = lazy(() => import('./pages/solutions/IndividualsPage'));
const PlannersPage = lazy(() => import('./pages/solutions/PlannersPage'));
const AgenciesPage = lazy(() => import('./pages/solutions/AgenciesPage'));
const VendorsPage = lazy(() => import('./pages/solutions/VendorsPage'));
const EnterprisePage = lazy(() => import('./pages/solutions/EnterprisePage'));
const OverviewPage = lazy(() => import('./pages/product/OverviewPage'));
const AIPlanningPage = lazy(() => import('./pages/product/AIPlanningPage'));
const PlanningPage = lazy(() => import('./pages/product/PlanningPage'));
const MarketplacePage = lazy(() => import('./pages/product/MarketplacePage'));
const FinancePage = lazy(() => import('./pages/product/FinancePage'));
const WebsitesPage = lazy(() => import('./pages/product/WebsitesPage'));
const BlogPage = lazy(() => import('./pages/resources/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/resources/BlogPostPage'));
const FAQPage = lazy(() => import('./pages/resources/FAQPage'));
const HelpCenterPage = lazy(() => import('./pages/resources/HelpCenterPage'));
const GuidesPage = lazy(() => import('./pages/resources/GuidesPage'));
const CaseStudiesPage = lazy(() => import('./pages/resources/CaseStudiesPage'));
const CaseStudyPage = lazy(() => import('./pages/resources/CaseStudyPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));

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
const WaitlistPage = lazy(() => import('./pages/WaitlistPage'));
const AdminLoginPage = lazy(() => import('./pages/admin/LoginPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));

// Components
import PublicLayout from './components/layout/PublicLayout';
import AdminLayout from './components/layout/AdminLayout';
import ProtectedRoute from './components/ProtectedRoute';

const PageLoader = () => (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-950 z-50">
        <div className="w-12 h-12 border-4 border-primary-500/20 border-t-primary-500 rounded-full animate-spin"></div>
    </div>
);

export default function App() {
    return (
        <HelmetProvider>
            <ThemeProvider defaultTheme="light" storageKey="ariya-ui-theme">
                <AuthProvider>
                    <Router basename={import.meta.env.BASE_URL}>
                        <Suspense fallback={<PageLoader />}>
                            <Routes>
                                {/* Public Routes - Wrapped in PublicLayout (Has Header/Footer) */}
                                <Route element={<PublicLayout />}>
                                    <Route path="/" element={<LandingPage />} />

                                    {/* Product Pages */}
                                    <Route path="/product/overview" element={<OverviewPage />} />
                                    <Route path="/product/planning" element={<PlanningPage />} />
                                    <Route path="/product/ai-planning" element={<AIPlanningPage />} />
                                    <Route path="/product/marketplace" element={<MarketplacePage />} />
                                    <Route path="/product/finance" element={<FinancePage />} />
                                    <Route path="/product/websites" element={<WebsitesPage />} />

                                    {/* Solutions Pages */}
                                    <Route path="/solutions/agencies" element={<AgenciesPage />} />
                                    <Route path="/solutions/vendors" element={<VendorsPage />} />
                                    <Route path="/solutions/enterprise" element={<EnterprisePage />} />

                                    {/* Resources Pages */}
                                    <Route path="/resources/blog" element={<BlogPage />} />
                                    <Route path="/resources/blog/:slug" element={<BlogPostPage />} />
                                    <Route path="/resources/case-studies" element={<CaseStudiesPage />} />
                                    <Route path="/resources/case-studies/:slug" element={<CaseStudyPage />} />
                                    <Route path="/resources/guides" element={<GuidesPage />} />
                                    <Route path="/resources/faq" element={<FAQPage />} />
                                    <Route path="/resources/help-center" element={<HelpCenterPage />} />

                                    <Route path="/pricing" element={<PricingPage />} />
                                    <Route path="/about" element={<AboutPage />} />

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
                    </Router>
                </AuthProvider>
            </ThemeProvider >
        </HelmetProvider>
    );
}
