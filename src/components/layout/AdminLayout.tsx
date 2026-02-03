import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AdminSidebar from '../admin/AdminSidebar';

export default function AdminLayout() {
    const location = useLocation();
    const isLoginPage = location.pathname === '/admin/login';

    const [sidebarOpen, setSidebarOpen] = React.useState(false);

    return (
        <div className="min-h-screen bg-beige-100 dark:bg-gray-950 dark:text-gray-100 font-sans selection:bg-primary-600 selection:text-white transition-colors duration-300 flex">
            {!isLoginPage && (
                <>
                    {/* Mobile Header Toggle */}
                    <div className="fixed top-4 right-4 z-[60] lg:hidden">
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="p-3 bg-white dark:bg-gray-900 rounded-full shadow-lg border border-gray-100 dark:border-gray-800 text-gray-500 hover:text-primary-600 dark:text-white transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        </button>
                    </div>

                    <AdminSidebar
                        isOpen={sidebarOpen}
                        onClose={() => setSidebarOpen(false)}
                    />
                </>
            )}
            <div className={`flex-1 overflow-hidden relative ${!isLoginPage ? 'bg-gray-50 dark:bg-gray-950' : ''}`}>
                <Outlet />
            </div>
        </div>
    );
}
