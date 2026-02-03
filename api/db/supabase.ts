import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseKey) {
    console.warn('⚠️  Supabase credentials not found. Database features will be limited.');
}

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
        persistSession: false, // Disable session persistence for server-side
    },
    db: {
        schema: 'public',
    },
});

// Database types
export interface WaitlistEntry {
    id?: string;
    email: string;
    role: 'individual' | 'agency' | 'vendor';
    company?: string;
    created_at?: string;
}

export interface BlogPost {
    id?: number;
    title: string;
    slug?: string;
    excerpt?: string;
    content: string;
    image?: string;
    category?: string;
    author?: string;
    date?: string;
    read_time?: string;
    tags?: string[];
    status?: 'draft' | 'published';
    created_at?: string;
    updated_at?: string;
}

export interface CaseStudy {
    id?: number;
    title: string;
    slug?: string;
    description?: string;
    content: string;
    image?: string;
    logo?: string;
    client?: string;
    industry?: string;
    metrics?: any; // JSONB
    challenge?: string;
    solution?: string;
    result?: string;
    testimonial?: any; // JSONB
    status?: 'draft' | 'published';
    created_at?: string;
    updated_at?: string;
}

export interface Resource {
    id?: number;
    title: string;
    slug?: string;
    description?: string;
    content: string;
    image?: string;
    type?: 'Guide' | 'Template' | 'Checklist';
    format?: string;
    size?: string;
    status?: 'draft' | 'published';
    created_at?: string;
    updated_at?: string;
}

// Helper functions for database operations
export const db = {
    // Waitlist operations
    waitlist: {
        async getAll() {
            const { data, error } = await supabase
                .from('waitlist')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            return data || [];
        },

        async create(entry: WaitlistEntry) {
            const { data, error } = await supabase
                .from('waitlist')
                .insert([entry])
                .select()
                .single();

            if (error) throw error;
            return data;
        },

        async getByEmail(email: string) {
            const { data, error } = await supabase
                .from('waitlist')
                .select('*')
                .eq('email', email)
                .single();

            if (error && error.code !== 'PGRST116') throw error; // PGRST116 = not found
            return data;
        },

        async delete(id: string) {
            const { error } = await supabase
                .from('waitlist')
                .delete()
                .eq('id', id);

            if (error) throw error;
        },
    },

    // Blog posts operations
    blogPosts: {
        async getAll(includeUnpublished = false) {
            let query = supabase
                .from('blog_posts')
                .select('*')
                .order('created_at', { ascending: false });

            if (!includeUnpublished) {
                query = query.eq('status', 'published');
            }

            const { data, error } = await query;
            if (error) throw error;
            return data || [];
        },

        async getById(id: number) {
            const { data, error } = await supabase
                .from('blog_posts')
                .select('*')
                .eq('id', id)
                .single();

            if (error) throw error;
            return data;
        },

        async create(post: BlogPost) {
            const { data, error } = await supabase
                .from('blog_posts')
                .insert([post])
                .select()
                .single();

            if (error) throw error;
            return data;
        },

        async update(id: number, post: Partial<BlogPost>) {
            const { data, error } = await supabase
                .from('blog_posts')
                .update(post)
                .eq('id', id)
                .select()
                .single();

            if (error) throw error;
            return data;
        },

        async delete(id: number) {
            const { error } = await supabase
                .from('blog_posts')
                .delete()
                .eq('id', id);

            if (error) throw error;
        },
    },

    // Case studies operations
    caseStudies: {
        async getAll(includeUnpublished = false) {
            let query = supabase
                .from('case_studies')
                .select('*')
                .order('created_at', { ascending: false });

            if (!includeUnpublished) {
                query = query.eq('status', 'published');
            }

            const { data, error } = await query;
            if (error) throw error;
            return data || [];
        },

        async getById(id: string) {
            const { data, error } = await supabase
                .from('case_studies')
                .select('*')
                .eq('id', id)
                .single();

            if (error) throw error;
            return data;
        },

        async create(study: CaseStudy) {
            const { data, error } = await supabase
                .from('case_studies')
                .insert([study])
                .select()
                .single();

            if (error) throw error;
            return data;
        },

        async update(id: string, study: Partial<CaseStudy>) {
            const { data, error } = await supabase
                .from('case_studies')
                .update(study)
                .eq('id', id)
                .select()
                .single();

            if (error) throw error;
            return data;
        },

        async delete(id: string) {
            const { error } = await supabase
                .from('case_studies')
                .delete()
                .eq('id', id);

            if (error) throw error;
        },
    },

    // Resources operations
    resources: {
        async getAll(includeUnpublished = false) {
            let query = supabase
                .from('resources')
                .select('*')
                .order('created_at', { ascending: false });

            if (!includeUnpublished) {
                query = query.eq('status', 'published');
            }

            const { data, error } = await query;
            if (error) throw error;
            return data || [];
        },

        async getById(id: number) {
            const { data, error } = await supabase
                .from('resources')
                .select('*')
                .eq('id', id)
                .single();

            if (error) throw error;
            return data;
        },

        async create(resource: Resource) {
            const { data, error } = await supabase
                .from('resources')
                .insert([resource])
                .select()
                .single();

            if (error) throw error;
            return data;
        },

        async update(id: number, resource: Partial<Resource>) {
            const { data, error } = await supabase
                .from('resources')
                .update(resource)
                .eq('id', id)
                .select()
                .single();

            if (error) throw error;
            return data;
        },

        async delete(id: number) {
            const { error } = await supabase
                .from('resources')
                .delete()
                .eq('id', id);

            if (error) throw error;
        },
    },
};

// Test database connection
export async function testConnection() {
    try {
        const { data, error } = await supabase.from('waitlist').select('count');
        if (error) throw error;
        console.log('✅ Supabase connection successful');
        return true;
    } catch (error) {
        console.error('❌ Supabase connection failed:', error);
        return false;
    }
}
