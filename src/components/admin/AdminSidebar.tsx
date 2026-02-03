import React from 'react';
import { useNavigate, useLocation, Link, useSearchParams } from 'react-router-dom';
import { LayoutDashboard, FileText, Layout, Package, Settings, BarChart2, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { ThemeToggle } from '../ThemeToggle';

export default function AdminSidebar() {
    const { logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams] = useSearchParams();

    // Get active tab from URL or default to 'posts' if on dashboard root
    const currentTab = searchParams.get('tab') || 'posts';
    const isDashboardRoot = location.pathname === '/admin' && !searchParams.get('tab');

    const handleTabClick = (tab: string) => {
        navigate(`/admin?tab=${tab}`);
    };

    return (
        <aside className="w-72 h-screen sticky top-0 bg-white dark:bg-gray-900 border-r border-gray-100 dark:border-gray-800 flex flex-col p-6 hidden lg:flex transition-colors duration-300 z-50">
            {/* Logo Area */}
            <div className="mb-12 px-2 flex justify-between items-start">
                <Link to="/admin" className="block">
                    <h1 className="text-2xl font-black tracking-tighter text-gray-900 dark:text-white">ARIYA<span className="text-primary-600">.</span></h1>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mt-1">Admin Console</p>
                </Link>
                <div className="scale-75 origin-top-right">
                    <ThemeToggle />
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-2">
                <NavItem
                    icon={<LayoutDashboard className="w-5 h-5" />}
                    label="Dashboard"
                    active={location.pathname === '/admin' && !searchParams.get('tab')} // Only active on exactly /admin with no tab query or explicit dashboard tab if we had one
                    onClick={() => navigate('/admin')}
                />

                <div className="pt-4 pb-2 px-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Content</div>

                <NavItem
                    icon={<FileText className="w-5 h-5" />}
                    label="Blog Posts"
                    active={location.pathname === '/admin' && currentTab === 'posts'}
                    onClick={() => handleTabClick('posts')}
                />
                <NavItem
                    icon={<Layout className="w-5 h-5" />}
                    label="Case Studies"
                    active={location.pathname === '/admin' && currentTab === 'case-studies'}
                    onClick={() => handleTabClick('case-studies')}
                />
                <NavItem
                    icon={<Package className="w-5 h-5" />}
                    label="Resources"
                    active={location.pathname === '/admin' && currentTab === 'resources'}
                    onClick={() => handleTabClick('resources')}
                />
                <NavItem
                    icon={<BarChart2 className="w-5 h-5" />}
                    label="Waitlist"
                    active={location.pathname === '/admin' && currentTab === 'waitlist'}
                    onClick={() => handleTabClick('waitlist')}
                />

                <div className="pt-4 pb-2 px-4 text-[10px] font-black uppercase tracking-widest text-gray-400">System</div>

                <NavItem
                    icon={<BarChart2 className="w-5 h-5" />}
                    label="Analytics"
                    active={location.pathname === '/admin/analytics'}
                    onClick={() => navigate('/admin/analytics')}
                />
                <NavItem
                    icon={<Settings className="w-5 h-5" />}
                    label="Settings"
                    active={location.pathname === '/admin/settings'}
                    onClick={() => navigate('/admin/settings')}
                />
            </nav>

            {/* Profile / Logout */}
            <div className="border-t border-gray-100 dark:border-gray-800 pt-6 mt-4">
                <div className="flex items-center justify-between px-2">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary-600 to-orange-400 flex items-center justify-center text-white font-bold text-xs">
                            A
                        </div>
                        <div>
                            <div className="text-sm font-bold text-gray-900 dark:text-white">Admin User</div>
                            <div className="text-[10px] text-gray-500">Administrator</div>
                        </div>
                    </div>
                    <button
                        onClick={logout}
                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                        title="Log Out"
                    >
                        <LogOut className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </aside>
    );
}

function NavItem({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active: boolean, onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 group ${active
                ? 'bg-primary-600 text-white shadow-lg shadow-primary-900/20'
                : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                }`}
        >
            <span className={active ? 'text-white' : 'text-gray-400 group-hover:text-primary-600 dark:group-hover:text-white transition-colors'}>
                {icon}
            </span>
            {label}
        </button>
    );
}
