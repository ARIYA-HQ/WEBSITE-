import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AdminSidebar from '../admin/AdminSidebar';

export default function AdminLayout() {
    const location = useLocation();
    const isLoginPage = location.pathname === '/admin/login';

    return (
        <div className="min-h-screen bg-beige-100 dark:bg-gray-950 dark:text-gray-100 font-sans selection:bg-primary-600 selection:text-white transition-colors duration-300 flex">
            {!isLoginPage && <AdminSidebar />}
            <div className={`flex-1 overflow-hidden relative ${!isLoginPage ? 'bg-gray-50 dark:bg-gray-950' : ''}`}>
                {/* The overflow-hidden here ensures the content area can scroll independently if pages set h-screen,
                    or expands naturally. Most admin pages currently have h-screen + overflow-y-auto. 
                    Let's just provide the container.*/}
                <Outlet />
            </div>
        </div>
    );
}
