import React, { useState } from 'react';
import { Save, User, Globe, Shield, Bell, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState('general');

    const tabs = [
        { id: 'general', label: 'General', icon: <Globe className="w-4 h-4" /> },
        { id: 'team', label: 'Team', icon: <User className="w-4 h-4" /> },
        { id: 'security', label: 'Security', icon: <Shield className="w-4 h-4" /> },
        { id: 'notifications', label: 'Notifications', icon: <Bell className="w-4 h-4" /> },
    ];

    return (
        <main className="bg-gray-50 dark:bg-gray-950 min-h-screen p-8 relative">
            <div className="max-w-4xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-4xl font-black text-gray-900 dark:text-white tracking-tighter mb-2">Settings</h1>
                    <p className="text-gray-500 dark:text-gray-400">Manage your workspace configuration and preferences.</p>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-[2rem] shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden min-h-[600px] flex flex-col md:flex-row">
                    {/* Sidebar Tabs */}
                    <div className="w-full md:w-64 bg-gray-50/50 dark:bg-gray-800/20 md:border-r border-gray-100 dark:border-gray-800 p-6 flex flex-col gap-2">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === tab.id
                                        ? 'bg-white dark:bg-gray-800 text-primary-600 shadow-md transform scale-105'
                                        : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                    }`}
                            >
                                {tab.icon}
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 p-8">
                        {activeTab === 'general' && <GeneralSettings />}
                        {activeTab === 'team' && <TeamSettings />}
                        {activeTab === 'security' && <SecuritySettings />}
                        {activeTab === 'notifications' && <NotificationSettings />}
                    </div>
                </div>
            </div>
        </main>
    );
}

function GeneralSettings() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Site Information</h2>
                <div className="space-y-6">
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Site Name</label>
                        <input defaultValue="Ariya HQ" className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-xl px-4 py-3 font-bold" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Site Description</label>
                        <textarea defaultValue="The new standard for event planning software." rows={3} className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-xl px-4 py-3 font-medium resize-none" />
                    </div>
                </div>
            </div>

            <div className="pt-8 border-t border-gray-100 dark:border-gray-800">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Social Connections</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <SocialInput icon={<Twitter className="w-4 h-4" />} placeholder="@ariya_hq" />
                    <SocialInput icon={<Instagram className="w-4 h-4" />} placeholder="@ariya.events" />
                    <SocialInput icon={<Linkedin className="w-4 h-4" />} placeholder="company/ariya" />
                    <SocialInput icon={<Github className="w-4 h-4" />} placeholder="ariya-dev" />
                </div>
            </div>

            <button className="bg-primary-600 text-white px-8 py-3 rounded-xl font-bold uppercase tracking-widest hover:bg-primary-700 transition-colors shadow-lg">
                Save Changes
            </button>
        </div>
    );
}

function SocialInput({ icon, placeholder }: any) {
    return (
        <div className="flex items-center bg-gray-50 dark:bg-gray-800 rounded-xl px-4 py-3 gap-3">
            <span className="text-gray-400">{icon}</span>
            <input placeholder={placeholder} className="bg-transparent border-none w-full outline-none text-sm font-medium" />
        </div>
    );
}

function TeamSettings() {
    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Team Members</h2>
                <button className="text-xs font-black text-primary-600 uppercase tracking-widest hover:underline">+ Invite Member</button>
            </div>

            {[
                { name: 'Sarah Jenkins', role: 'Admin', email: 'sarah@ariya.io', img: 'https://i.pravatar.cc/150?u=1' },
                { name: 'Michael Chen', role: 'Editor', email: 'mike@ariya.io', img: 'https://i.pravatar.cc/150?u=2' },
                { name: 'Elena R.', role: 'Viewer', email: 'elena@ariya.io', img: 'https://i.pravatar.cc/150?u=3' },
            ].map((member, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl">
                    <div className="flex items-center gap-4">
                        <img src={member.img} alt={member.name} className="w-10 h-10 rounded-full" />
                        <div>
                            <div className="font-bold text-gray-900 dark:text-white">{member.name}</div>
                            <div className="text-xs text-gray-500">{member.email}</div>
                        </div>
                    </div>
                    <span className="px-3 py-1 bg-white dark:bg-gray-700 rounded-lg text-xs font-bold text-gray-600 dark:text-gray-300 shadow-sm">{member.role}</span>
                </div>
            ))}
        </div>
    );
}

function SecuritySettings() {
    return (
        <div className="text-center py-20 animate-in fade-in slide-in-from-right-4 duration-500">
            <Shield className="w-16 h-16 text-gray-200 dark:text-gray-800 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Security Settings</h3>
            <p className="text-gray-500">Two-factor authentication and audit logs configuration.</p>
        </div>
    );
}

function NotificationSettings() {
    return (
        <div className="text-center py-20 animate-in fade-in slide-in-from-right-4 duration-500">
            <Bell className="w-16 h-16 text-gray-200 dark:text-gray-800 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Notifications</h3>
            <p className="text-gray-500">Manage your email and push notification preferences.</p>
        </div>
    );
}
