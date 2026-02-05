import React, { useState, useEffect } from 'react';
import SEO from '../../components/common/SEO';
import { Shield, Bell, BarChart, Settings as SettingsIcon } from 'lucide-react';

interface CookiePreference {
    id: string;
    title: string;
    description: string;
    icon: any;
    required: boolean;
    enabled: boolean;
}

export default function CookieSettingsPage() {
    const [preferences, setPreferences] = useState<CookiePreference[]>([
        {
            id: 'essential',
            title: 'Essential Cookies',
            description: 'These cookies are necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you which amount to a request for services.',
            icon: Shield,
            required: true,
            enabled: true
        },
        {
            id: 'analytics',
            title: 'Analytics Cookies',
            description: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular.',
            icon: BarChart,
            required: false,
            enabled: true
        },
        {
            id: 'marketing',
            title: 'Marketing Cookies',
            description: 'These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.',
            icon: Bell,
            required: false,
            enabled: false
        },
        {
            id: 'preferences',
            title: 'Preference Cookies',
            description: 'These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third party providers whose services we have added to our pages.',
            icon: SettingsIcon,
            required: false,
            enabled: true
        }
    ]);

    const [saved, setSaved] = useState(false);

    useEffect(() => {
        const savedPrefs = localStorage.getItem('cookie-preferences');
        if (savedPrefs) {
            try {
                const parsed = JSON.parse(savedPrefs);
                setPreferences(prev => prev.map(p => ({
                    ...p,
                    enabled: p.required ? true : (parsed[p.id] ?? p.enabled)
                })));
            } catch (e) {
                console.error('Failed to parse cookie preferences');
            }
        }
    }, []);

    const togglePreference = (id: string) => {
        setPreferences(prev => prev.map(p => {
            if (p.id === id && !p.required) {
                return { ...p, enabled: !p.enabled };
            }
            return p;
        }));
        setSaved(false);
    };

    const handleSave = () => {
        const prefObj = preferences.reduce((acc, p) => ({ ...acc, [p.id]: p.enabled }), {});
        localStorage.setItem('cookie-preferences', JSON.stringify(prefObj));
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    return (
        <main className="pt-32 pb-24 bg-white dark:bg-gray-950 min-h-screen">
            <SEO
                title="Cookie Settings"
                description="Manage your privacy and cookie preferences on ÀRIYÁ."
            />

            <div className="max-w-3xl mx-auto px-8">
                <div className="mb-16">
                    <span className="section-label">Privacy</span>
                    <h1 className="text-5xl font-black tracking-tighter mt-4 mb-6">Cookie Settings</h1>
                    <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed max-w-2xl">
                        We use cookies to enhance your experience, analyze site traffic, and serve targeted advertisements.
                        You can manage your preferences below.
                    </p>
                </div>

                <div className="space-y-6 mb-12">
                    {preferences.map((pref) => (
                        <div
                            key={pref.id}
                            className={`p-8 rounded-[2rem] border transition-all duration-300 ${pref.enabled
                                    ? 'bg-white dark:bg-gray-900 border-primary-600/20 shadow-xl shadow-primary-900/5'
                                    : 'bg-gray-50 dark:bg-gray-900/50 border-gray-100 dark:border-gray-800'
                                }`}
                        >
                            <div className="flex items-start justify-between gap-6">
                                <div className="flex gap-6">
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${pref.enabled
                                            ? 'bg-primary-600 text-white'
                                            : 'bg-gray-200 dark:bg-gray-800 text-gray-400'
                                        }`}>
                                        <pref.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-black uppercase tracking-widest text-gray-900 dark:text-white mb-2">
                                            {pref.title}
                                            {pref.required && (
                                                <span className="ml-3 text-[10px] bg-gray-100 dark:bg-gray-800 text-gray-400 px-2 py-1 rounded-full">Required</span>
                                            )}
                                        </h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                                            {pref.description}
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={() => togglePreference(pref.id)}
                                    disabled={pref.required}
                                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${pref.enabled ? 'bg-primary-600' : 'bg-gray-200 dark:bg-gray-700'
                                        } ${pref.required ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    <span
                                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${pref.enabled ? 'translate-x-5' : 'translate-x-0'
                                            }`}
                                    />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 bg-gray-900 rounded-[2.5rem] text-white">
                    <p className="text-sm font-medium text-gray-400 italic">
                        Your preferences will be saved for this browser.
                    </p>
                    <button
                        onClick={handleSave}
                        className={`px-10 py-4 rounded-full text-sm font-black uppercase tracking-widest transition-all ${saved
                                ? 'bg-green-600 text-white'
                                : 'bg-white text-gray-900 hover:bg-primary-600 hover:text-white'
                            }`}
                    >
                        {saved ? 'Preferences Saved!' : 'Save Preferences'}
                    </button>
                </div>
            </div>
        </main>
    );
}
