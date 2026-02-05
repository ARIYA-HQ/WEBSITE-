-- Create Admin User for ÀRIYÁ Platform
-- This script creates an admin user with proper authentication and role assignment

-- Step 1: Create the admin user in Supabase Auth
-- You need to run this via Supabase Dashboard > SQL Editor or via API

-- Note: Supabase doesn't allow direct password insertion via SQL for security reasons
-- You have two options:

-- OPTION 1: Use Supabase Dashboard (Recommended)
-- 1. Go to: https://supabase.com/dashboard/project/tmnnwuuqtqcndvbywfsg/auth/users
-- 2. Click "Add User" > "Create new user"
-- 3. Enter:
--    - Email: admin@ariya.io
--    - Password: ariya2026
--    - Auto Confirm User: YES (check this box)
-- 4. Click "Create user"
-- 5. Copy the user UUID that appears

-- OPTION 2: Use Supabase Auth API (via script)
-- After user is created via Dashboard or API, run this to assign admin role:

-- Step 2: Assign admin role to the user
-- Replace 'USER_UUID_HERE' with the actual UUID from Step 1

-- First, ensure the profiles table exists and has the role column
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID REFERENCES auth.users(id) PRIMARY KEY,
    email TEXT,
    role TEXT DEFAULT 'user',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create policy to allow users to read their own profile
CREATE POLICY "Users can view own profile" ON public.profiles
    FOR SELECT USING (auth.uid() = id);

-- Create policy to allow users to update their own profile
CREATE POLICY "Users can update own profile" ON public.profiles
    FOR UPDATE USING (auth.uid() = id);

-- Create policy to allow service role to insert profiles
CREATE POLICY "Service role can insert profiles" ON public.profiles
    FOR INSERT WITH CHECK (true);

-- After creating the user in Supabase Dashboard, insert the profile with admin role
-- IMPORTANT: Replace 'USER_UUID_HERE' with the actual UUID from the created user
-- Example: INSERT INTO public.profiles (id, email, role) 
-- VALUES ('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'admin@ariya.io', 'admin');

-- You can find the UUID by running:
-- SELECT id, email FROM auth.users WHERE email = 'admin@ariya.io';
