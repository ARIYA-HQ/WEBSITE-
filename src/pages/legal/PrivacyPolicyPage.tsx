import React from 'react';
import SEO from '../../components/common/SEO';

const sections = [
    {
        id: 'introduction',
        title: '1. Introduction and Scope',
        content: 'Welcome to ÀRIYÁ, the premier ecosystem for modern event planning and vendor management. At ÀRIYÁ, we recognize that your privacy is of paramount importance. This comprehensive Privacy Policy is designed to provide users, planners, and vendors within our ecosystem with a transparent and detailed overview of our data practices. We are deeply committed to maintaining the trust and confidence of our community by ensuring that all personal information is handled with the highest degree of care and in strict accordance with global data protection standards. This policy applies to all interactions within the ÀRIYÁ platform, including our specialized AI-driven planning tools, the comprehensive vendor marketplace, and all associated communication channels. By engaging with our services, you acknowledge the processing of your data as described herein.'
    },
    {
        id: 'data-collection',
        title: '2. Detailed Data Collection Categories',
        content: 'To facilitate a seamless and high-premium event planning experience, ÀRIYÁ collects a diverse array of information provided directly by our users. This includes, but is not limited to, core Account Data (full name, verified email addresses, password hashes), and specific Event Meta-Data (proposed dates, geographic locations, detailed budget allocations, and thematic preferences). For planners, we categorize supplemental data such as guest list hierarchies, dietary requirements for attendees, and intricate seating arrangements. When utilizing our marketplace, we also collect Technical Infrastructure Data, including IP address geo-signatures, browser fingerprints, and device telemetry. Furthermore, we monitor specific Usage Patterns through our AI interface to better understand the nuances of how you interact with our automated planning suggestions and vendor matching algorithms.'
    },
    {
        id: 'ai-processing',
        title: '3. Artificial Intelligence and Sophisticated Data Processing',
        content: 'ÀRIYÁ leverages state-of-the-art generative and analytical AI models to revolutionize the planning journey. The processing of your data through these models is conducted with architectural rigor. We utilize your historical preference data and current event inputs to train localized recommendation engines that suggest optimal vendor pairings and venue selections. This processing includes high-level sentiment analysis on vendor contract structures to identify potential risks or hidden fee structures, protecting you from common industry pitfalls. It is critical to note that while we use data to improve our proprietary AI models, we implement robust de-identification techniques to ensure that no individual user or specific event detail can be reverse-engineered from our generalized model weights. Your data is used exclusively to refine the precision of the ÀRIYÁ intelligence layer.'
    },
    {
        id: 'data-sharing',
        title: '4. Third-Party Disclosures and Marketplace Dynamics',
        content: 'A fundamental aspect of the ÀRIYÁ platform is connecting planners with the world’s most elite event vendors. Consequently, when a user initiates a query or soft-booking through the ÀRIYÁ Marketplace, we share a necessary subset of Personal and Event Information with the identified vendor. This disclosure is bounded by our Vendor Participant Agreement, which legally mandates that vendors only use your data for the specific purpose of the inquiry or booking fulfillment. We may also disclose data to professional service providers who assist in our operations, such as payment processors for secure transaction handling, cloud infrastructure providers for redundant data storage, and compliance auditors who verify our adherence to security standards. We do not engage in the sale of user contact lists to third-party marketing aggregates under any circumstances.'
    },
    {
        id: 'security',
        title: '5. Advanced Security Protocols and Data Hosting',
        content: 'Our security architecture is built on a foundation of "Privacy by Design." We implement multi-layered encryption protocols including Transport Layer Security (TLS 1.3) for all data in transit across our public and private networks. At the persistence layer, all sensitive data is protected using Advanced Encryption Standard (AES-256) at rest. Our centralized backend infrastructure is hosted on Supabase, leveraging AWS-grade physical security and data centers that maintain SOC 2 Type II, ISO 27001, and HIPAA compliance certifications. We maintain granular internal access controls, ensuring that only authorized ÀRIYÁ personnel with a verified "need to know" can access specific database fragments for maintenance or support purposes. Regular penetration testing and vulnerability scans are conducted to ensure our defenses remain resilient against evolving cyber threats.'
    },
    {
        id: 'global-rights',
        title: '6. Rights, Access, and Global Compliance Standards',
        content: 'ÀRIYÁ is a global platform, and as such, we align our data protection practices with the most rigorous international frameworks, including the General Data Protection Regulation (GDPR) for our European users and the California Consumer Privacy Act (CCPA) for those in North America. Regardless of your physical jurisdiction, ÀRIYÁ provides every user with the capability to exercise their fundamental data rights. This includes the Right to Portability (exporting your event data in a machine-readable format), the Right to Rectification (correcting inaccuracies in your profile), and the Right to Erasure (the "Right to be Forgotten"). You may manage these rights directly through your centralized Privacy Dashboard or by reaching out to our dedicated Data Protection Officer. We also maintain a strictly enforced data retention policy, ensuring that account and event data are only stored for the duration necessary to satisfy the purposes for which they were collected or as required by statutory legal mandates.'
    },
];

export default function PrivacyPolicyPage() {
    return (
        <main className="pt-32 pb-24 bg-white dark:bg-gray-950 min-h-screen">
            <SEO
                title="Privacy Policy"
                description="Learn about how ÀRIYÁ collects, uses, and protects your personal data."
            />

            <div className="max-w-4xl mx-auto px-8">
                <div className="mb-16">
                    <span className="section-label">Legal</span>
                    <h1 className="text-5xl font-black tracking-tighter mt-4 mb-6">Privacy Policy</h1>
                    <p className="text-gray-500 dark:text-gray-400 font-medium">Last updated: February 5, 2026</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Navigation Sidebar */}
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

                    {/* Content */}
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
