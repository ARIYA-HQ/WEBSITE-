import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-[400px] flex items-center justify-center p-8 text-center">
                    <div className="max-w-md">
                        <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-2xl flex items-center justify-center text-red-600 dark:text-red-400 mx-auto mb-6">
                            <AlertTriangle className="w-8 h-8" />
                        </div>
                        <h2 className="text-2xl font-black mb-4 text-gray-900 dark:text-white">Something went wrong</h2>
                        <p className="text-gray-500 dark:text-gray-400 mb-8">
                            We encountered an unexpected error. Don't worry, your data is safe. Please try refreshing the page.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-black dark:hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 mx-auto shadow-xl"
                        >
                            <RefreshCw className="w-4 h-4" /> Refresh Page
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
