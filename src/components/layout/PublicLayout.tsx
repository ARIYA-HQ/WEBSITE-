import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CookieBanner from '../common/CookieBanner';

export default function PublicLayout() {
    return (
        <div className="min-h-screen bg-beige-100 dark:bg-gray-950 dark:text-gray-100 font-sans selection:bg-primary-600 selection:text-white transition-colors duration-300 flex flex-col">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
            <CookieBanner />
        </div>
    );
}
