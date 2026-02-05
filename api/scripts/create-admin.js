// Script to create admin user in Supabase
// Run with: node api/scripts/create-admin.js

import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
    console.error('❌ Missing Supabase credentials in .env.local');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false
    }
});

async function createAdminUser() {
    console.log('🚀 Creating admin user for ÀRIYÁ...\n');

    const adminEmail = 'admin@ariya.io';
    const adminPassword = 'ariya2026';

    try {
        // Create the user using Supabase Auth Admin API
        const { data: userData, error: userError } = await supabase.auth.admin.createUser({
            email: adminEmail,
            password: adminPassword,
            email_confirm: true, // Auto-confirm the email
            user_metadata: {
                role: 'admin',
                name: 'ÀRIYÁ Admin'
            }
        });

        if (userError) {
            console.error('❌ Error creating user:', userError.message);
            return;
        }

        console.log('✅ Admin user created successfully!');
        console.log('📧 Email:', adminEmail);
        console.log('🔑 Password:', adminPassword);
        console.log('🆔 User ID:', userData.user.id);
        console.log('\n📝 Creating profile entry...\n');

        // Create profile entry with admin role
        const { error: profileError } = await supabase
            .from('profiles')
            .insert({
                id: userData.user.id,
                email: adminEmail,
                role: 'admin'
            });

        if (profileError) {
            console.warn('⚠️  Profile creation warning:', profileError.message);
            console.log('You may need to create the profiles table first using create_admin_user.sql');
        } else {
            console.log('✅ Profile created with admin role!');
        }

        console.log('\n🎉 Setup complete! You can now login with:');
        console.log('   Email: admin@ariya.io');
        console.log('   Password: ariya2026');

    } catch (error) {
        console.error('❌ Unexpected error:', error);
    }
}

createAdminUser();
