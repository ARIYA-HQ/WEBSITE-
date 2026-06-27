import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3001';
const TOKEN_KEY = 'ariya_admin_token';

interface AdminUser { email: string; role: string; }

interface AuthContextType {
    isAuthenticated: boolean;
    user: AdminUser | null;
    session: { access_token: string } | null;
    login: (email: string, password: string) => Promise<{ error: any }>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<AdminUser | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const stored = localStorage.getItem(TOKEN_KEY);
        if (!stored) { setIsLoading(false); return; }
        fetch(`${API_BASE}/api/admin/me`, {
            headers: { Authorization: `Bearer ${stored}` },
        })
            .then(r => r.ok ? r.json() : null)
            .then(data => {
                if (data?.user) { setToken(stored); setUser(data.user); }
                else localStorage.removeItem(TOKEN_KEY);
            })
            .catch(() => localStorage.removeItem(TOKEN_KEY))
            .finally(() => setIsLoading(false));
    }, []);

    const login = async (email: string, password: string) => {
        try {
            const res = await fetch(`${API_BASE}/api/admin/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            const data = await res.json();
            if (!res.ok) return { error: data.error || 'Login failed' };
            localStorage.setItem(TOKEN_KEY, data.token);
            setToken(data.token);
            setUser(data.user);
            return { error: null };
        } catch (e: any) {
            return { error: e.message || 'Network error' };
        }
    };

    const logout = async () => {
        localStorage.removeItem(TOKEN_KEY);
        setToken(null);
        setUser(null);
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950">
                <div className="w-12 h-12 border-4 border-primary-500/20 border-t-primary-500 rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <AuthContext.Provider value={{
            isAuthenticated: !!token,
            user,
            session: token ? { access_token: token } : null,
            login,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) throw new Error('useAuth must be used within an AuthProvider');
    return context;
}
