import React, { createContext, useContext, useState, useCallback } from 'react';

interface CmsState {
    isLoading: boolean;
    error: string | null;
    isSyncing: boolean;
}

interface CmsContextType extends CmsState {
    setError: (error: string | null) => void;
    performAction: <T>(action: () => Promise<T>) => Promise<T | undefined>;
}

const CmsContext = createContext<CmsContextType | undefined>(undefined);

export const CmsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, setState] = useState<CmsState>({
        isLoading: false,
        error: null,
        isSyncing: false,
    });

    const setError = useCallback((error: string | null) => {
        setState(prev => ({ ...prev, error }));
    }, []);

    const performAction = useCallback(async <T,>(action: () => Promise<T>): Promise<T | undefined> => {
        setState(prev => ({ ...prev, isLoading: true, error: null }));
        try {
            const result = await action();
            return result;
        } catch (err: any) {
            const errorMessage = err.message || 'An unexpected CMS error occurred';
            setState(prev => ({ ...prev, error: errorMessage }));
            return undefined;
        } finally {
            setState(prev => ({ ...prev, isLoading: false }));
        }
    }, []);

    const value = {
        ...state,
        setError,
        performAction,
    };

    return (
        <CmsContext.Provider value={value}>
            {children}
        </CmsContext.Provider>
    );
};

export const useCms = () => {
    const context = useContext(CmsContext);
    if (context === undefined) {
        throw new Error('useCms must be used within a CmsProvider');
    }
    return context;
};
