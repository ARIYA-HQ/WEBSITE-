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
        <div className="flex-1 px-4 md:px-8 py-8 h-screen overflow-y-auto relative bg-gray-50 dark:bg-gray-950">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-orange-100/20 dark:bg-orange-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="mb-12">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-[10px] font-black uppercase tracking-widest text-gray-500">System</span>
                        <span className="text-gray-300 dark:text-gray-700">/</span>
                        <span className="text-xs font-bold text-gray-900 dark:text-gray-300 uppercase tracking-widest">Settings</span>
                    </div>
                    <h1 className="text-4xl font-black text-gray-900 dark:text-white tracking-tighter mb-2">Settings</h1>
                    <p className="text-gray-500 dark:text-gray-400 font-medium">Manage your workspace configuration and preferences.</p>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden min-h-[600px] flex flex-col md:flex-row">
                    {/* Sidebar Tabs */}
                    <div className="w-full md:w-72 bg-gray-50/50 dark:bg-gray-800/20 md:border-r border-gray-100 dark:border-gray-800 p-8 flex flex-col gap-2">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-3 px-5 py-4 rounded-2xl text-sm font-bold transition-all duration-300 ${activeTab === tab.id
                                    ? 'bg-white dark:bg-gray-800 text-primary-600 shadow-xl transform scale-[1.02]'
                                    : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                    }`}
                            >
                                <span className={activeTab === tab.id ? 'text-primary-600' : 'text-gray-400'}>{tab.icon}</span>
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 p-10">
                        {activeTab === 'general' && <GeneralSettings />}
                        {activeTab === 'team' && <TeamSettings />}
                        {activeTab === 'security' && <SecuritySettings />}
                        {activeTab === 'notifications' && <NotificationSettings />}
                    </div>
                </div>
            </div>
        </div>
    );
}

function GeneralSettings() {
    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-500">
            <div>
                <h2 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight mb-8">Site Information</h2>
                <div className="space-y-8 max-w-2xl">
                    <div>
                        <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-3">Site Name</label>
                        <input defaultValue="Ariya HQ" className="w-full bg-gray-50 dark:bg-gray-800/50 border border-transparent focus:border-primary-500/30 rounded-2xl px-5 py-4 font-bold text-gray-900 dark:text-white outline-none transition-all focus:ring-4 ring-primary-500/5" />
                    </div>
                    <div>
                        <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-3">Site Description</label>
                        <textarea defaultValue="The new standard for event planning software." rows={3} className="w-full bg-gray-50 dark:bg-gray-800/50 border border-transparent focus:border-primary-500/30 rounded-2xl px-5 py-4 font-medium text-gray-900 dark:text-white outline-none transition-all focus:ring-4 ring-primary-500/5 resize-none" />
                    </div>
                </div>
            </div>

            <div className="pt-10 border-t border-gray-100 dark:border-gray-800">
                <h2 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight mb-8">Social Connections</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
                    <SocialInput icon={<Twitter className="w-4 h-4" />} placeholder="@ariya_hq" />
                    <SocialInput icon={<Instagram className="w-4 h-4" />} placeholder="@ariya.events" />
                    <SocialInput icon={<Linkedin className="w-4 h-4" />} placeholder="company/ariya" />
                    <SocialInput icon={<Github className="w-4 h-4" />} placeholder="ariya-dev" />
                </div>
            </div>

            <button className="bg-primary-600 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-primary-700 transition-all shadow-xl shadow-primary-600/30 active:scale-95">
                Save Changes
            </button>
        </div>
    );
}

function SocialInput({ icon, placeholder }: any) {
    return (
        <div className="flex items-center bg-gray-50 dark:bg-gray-800/50 border border-transparent focus-within:border-primary-500/30 rounded-2xl px-5 py-4 gap-4 transition-all focus-within:ring-4 ring-primary-500/5 group">
            <span className="text-gray-400 group-focus-within:text-primary-600 transition-colors">{icon}</span>
            <input placeholder={placeholder} className="bg-transparent border-none w-full outline-none text-sm font-bold text-gray-900 dark:text-white placeholder:text-gray-400" />
        </div>
    );
}

function TeamSettings() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-10">
                <h2 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">Team Members</h2>
                <button className="text-[10px] font-black text-primary-600 uppercase tracking-widest hover:underline transition-all ring-offset-4 rounded">+ Invite Member</button>
            </div>

            <div className="grid gap-4">
                {[
                    { name: 'Sarah Jenkins', role: 'Admin', email: 'sarah@ariya.io', img: 'https://i.pravatar.cc/150?u=1' },
                    { name: 'Michael Chen', role: 'Editor', email: 'mike@ariya.io', img: 'https://i.pravatar.cc/150?u=2' },
                    { name: 'Elena R.', role: 'Viewer', email: 'elena@ariya.io', img: 'https://i.pravatar.cc/150?u=3' },
                ].map((member, i) => (
                    <div key={i} className="flex items-center justify-between p-5 bg-gray-50 dark:bg-gray-800/30 rounded-2xl hover:bg-white dark:hover:bg-gray-800 transition-all border border-transparent hover:border-gray-100 dark:hover:border-gray-700 group">
                        <div className="flex items-center gap-4">
                            <img src={member.img} alt={member.name} className="w-12 h-12 rounded-full ring-2 ring-white dark:ring-gray-700 shadow-sm" />
                            <div>
                                <div className="font-bold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">{member.name}</div>
                                <div className="text-xs text-gray-500 font-medium">{member.email}</div>
                            </div>
                        </div>
                        <span className="px-4 py-1.5 bg-white dark:bg-gray-900 rounded-xl text-[10px] font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 shadow-sm border border-gray-100 dark:border-gray-800">{member.role}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

function SecuritySettings() {
    return (
        <div className="text-center py-20 animate-in fade-in slide-in-from-right-4 duration-500 bg-gray-50/50 dark:bg-gray-800/20 rounded-[2rem] border-2 border-dashed border-gray-100 dark:border-gray-800">
            <div className="w-20 h-20 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl border border-gray-50 dark:border-gray-800">
                <Shield className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight mb-2">Security Settings</h3>
            <p className="text-gray-500 dark:text-gray-400 font-medium">Enhanced protection for your workspace coming soon.</p>
        </div>
    );
}

function NotificationSettings() {
    return (
        <div className="text-center py-20 animate-in fade-in slide-in-from-right-4 duration-500 bg-gray-50/50 dark:bg-gray-800/20 rounded-[2rem] border-2 border-dashed border-gray-100 dark:border-gray-800">
            <div className="w-20 h-20 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl border border-gray-50 dark:border-gray-800">
                <Bell className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight mb-2">Notifications</h3>
            <p className="text-gray-500 dark:text-gray-400 font-medium">Manage how you want to be notified about updates.</p>
        </div>
    );
}
