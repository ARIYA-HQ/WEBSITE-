import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Context
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';


// Pages
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CareersPage from './pages/CareersPage';
import IndividualsPage from './pages/solutions/IndividualsPage';
import PlannersPage from './pages/solutions/PlannersPage';
import AgenciesPage from './pages/solutions/AgenciesPage';
import VendorsPage from './pages/solutions/VendorsPage';
import EnterprisePage from './pages/solutions/EnterprisePage';
import OverviewPage from './pages/product/OverviewPage';
import AIPlanningPage from './pages/product/AIPlanningPage';
import PlanningPage from './pages/product/PlanningPage';
import MarketplacePage from './pages/product/MarketplacePage';
import FinancePage from './pages/product/FinancePage';
import WebsitesPage from './pages/product/WebsitesPage';
import BlogPage from './pages/resources/BlogPage';
import BlogPostPage from './pages/resources/BlogPostPage';
import FAQPage from './pages/resources/FAQPage';
import HelpCenterPage from './pages/resources/HelpCenterPage';
import GuidesPage from './pages/resources/GuidesPage';
import CaseStudiesPage from './pages/resources/CaseStudiesPage';
import CaseStudyPage from './pages/resources/CaseStudyPage';
import NotFoundPage from './pages/NotFoundPage';
import PricingPage from './pages/PricingPage';

// Components
// Components
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import PostEditorPage from './pages/admin/PostEditorPage';
import CaseStudyEditorPage from './pages/admin/CaseStudyEditorPage';
import ResourceEditorPage from './pages/admin/ResourceEditorPage';
import AnalyticsPage from './pages/admin/AnalyticsPage';
import SettingsPage from './pages/admin/SettingsPage';
import WaitlistPage from './pages/WaitlistPage';
import LoginPage from './pages/admin/LoginPage';
import PublicLayout from './components/layout/PublicLayout';
import AdminLayout from './components/layout/AdminLayout';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
    return (
        <ThemeProvider defaultTheme="light" storageKey="ariya-ui-theme">
            <AuthProvider>
                <Router basename={import.meta.env.BASE_URL}>
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

                            <Route path="*" element={<NotFoundPage />} />
                        </Route>

                        <Route path="/waitlist" element={<WaitlistPage />} />

                        {/* Admin Routes - Wrapped in AdminLayout (NO Header/Footer) */}
                        <Route element={<AdminLayout />}>
                            <Route path="/admin/login" element={<LoginPage />} />

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
                </Router>
            </AuthProvider>
        </ThemeProvider >
    );
}
