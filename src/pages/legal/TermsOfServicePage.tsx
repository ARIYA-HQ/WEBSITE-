import React from 'react';
import SEO from '../../components/common/SEO';

const sections = [
    {
        id: 'acceptance',
        title: '1. Acceptance of Terms',
        content: 'By accessing and using ÀRIYÁ, you agree to be bound by these Terms of Service. Our platform provides tools for event planning, vendor discovery, and team collaboration. If you do not agree to these terms, please do not use our services.'
    },
    {
        id: 'user-conduct',
        title: '2. User Accounts & Conduct',
        content: 'You are responsible for maintaining the confidentiality of your ÀRIYÁ account. You agree to provide accurate information for your events and vendor interactions. Any misuse of the platform, including data scraping or fraudulent bookings, will result in immediate account termination.'
    },
    {
        id: 'ai-tools',
        title: '3. AI Features & Content',
        content: 'ÀRIYÁ provides AI-powered planning assistance and contract analysis. While our AI is designed to suggest the best paths for your events, we recommend reviewing all AI-generated advice. ÀRIYÁ does not provide legal or financial advice; decisions based on AI insights are at the user\'s discretion.'
    },
    {
        id: 'marketplace',
        title: '4. Vendor Marketplace',
        content: 'ÀRIYÁ acts as a facilitator between planners and vendors. While we perform high-level verification of vendors, the final contract for services is between the User and the Vendor. ÀRIYÁ is not liable for the performance or quality of services provided by third-party vendors.'
    },
    {
        id: 'intellectual-property',
        title: '5. Ownership & IP',
        content: 'You retain all rights to the event data and guest lists you upload. ÀRIYÁ retains all rights to the platform\'s technology, AI models, and brand assets. You grant ÀRIYÁ a limited license to host and process your data solely to provide the services requested.'
    },
    {
        id: 'liability',
        title: '6. Limitation of Liability',
        content: 'To the maximum extent permitted by law, ÀRIYÁ shall not be liable for any indirect, incidental, or consequential damages arising from your use of the platform. We strive for 99.9% uptime but do not guarantee uninterrupted service during maintenance or unforeseen outages.'
    },
];

export default function TermsOfServicePage() {
    return (
        <main className="pt-32 pb-24 bg-white dark:bg-gray-950 min-h-screen">
            <SEO
                title="Terms of Service"
                description="Read the Terms of Service for ÀRIYÁ to understand your rights and obligations."
            />

            <div className="max-w-4xl mx-auto px-8">
                <div className="mb-16">
                    <span className="section-label">Legal</span>
                    <h1 className="text-5xl font-black tracking-tighter mt-4 mb-6">Terms of Service</h1>
                    <p className="text-gray-500 dark:text-gray-400 font-medium">Last updated: February 5, 2026</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <aside className="hidden md:block">
                        <nav className="sticky top-32 space-y-4">
                            {sections.map((section) => (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    className="block text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-primary-600 transition-colors"
                                >
                                    {section.title}
                                </a>
                            ))}
                        </nav>
                    </aside>

                    <div className="md:col-span-3 space-y-12">
                        {sections.map((section) => (
                            <section key={section.id} id={section.id} className="scroll-mt-32">
                                <h2 className="text-xl font-black uppercase tracking-widest mb-6 text-gray-900 dark:text-white">
                                    {section.title}
                                </h2>
                                <div className="prose prose-gray dark:prose-invert max-w-none">
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                                        {section.content}
                                    </p>
                                </div>
                            </section>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
