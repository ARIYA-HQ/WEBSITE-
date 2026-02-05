import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Quote, CheckCircle2, AlertCircle } from 'lucide-react';
import { cmsService } from '../../services/cmsService';
import { CaseStudy } from '../../types/cms';
import CaseStudyDetailView from '../../components/resources/CaseStudyDetailView';
import SEO from '../../components/common/SEO';

export default function CaseStudyPage() {
    const { slug } = useParams();
    const [study, setStudy] = useState<CaseStudy | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStudy = async () => {
            setLoading(true);
            if (slug) {
                try {
                    const data = await cmsService.getCaseStudyById(slug);
                    setStudy(data || null);
                } catch (err) {
                    console.error(err);
                }
            }
            setLoading(false);
            window.scrollTo(0, 0);
        };
        fetchStudy();
    }, [slug]);

    if (loading) {
        return (
            <main className="pt-24 min-h-screen flex items-center justify-center bg-white dark:bg-gray-950">
                <div className="animate-pulse space-y-4">
                    <div className="h-4 w-32 bg-gray-200 dark:bg-gray-800 rounded mx-auto"></div>
                    <div className="h-8 w-64 bg-gray-200 dark:bg-gray-800 rounded mx-auto"></div>
                </div>
            </main>
        );
    }

    if (!study) {
        return (
            <main className="pt-32 min-h-screen flex flex-col items-center justify-center text-center px-4 bg-white dark:bg-gray-900">
                <AlertCircle className="w-16 h-16 text-gray-300 mb-6" />
                <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-4">Case Study Not Found</h1>
                <Link to="/resources/case-studies" className="text-primary-600 underline mt-4 block font-bold">Back to All Stories</Link>
            </main>
        );
    }

    return (
        <main className="pt-24 bg-white dark:bg-gray-950 min-h-screen">
            <SEO
                title={`${study.client} Case Study`}
                description={study.desc || study.challenge.substring(0, 160)}
                image={study.image}
            />
            <CaseStudyDetailView study={study} />
        </main>
    );
}

