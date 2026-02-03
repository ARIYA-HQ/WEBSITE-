
-- Migration script to update existing database schema
-- Run this in the Supabase SQL Editor

-- 1. Add 'name' column to waitlist table
ALTER TABLE waitlist ADD COLUMN IF NOT EXISTS name VARCHAR(255);

-- 2. Add 'download_url' column to resources table
ALTER TABLE resources ADD COLUMN IF NOT EXISTS download_url VARCHAR(500);

-- 3. Make 'content' optional in case_studies (it was NOT NULL)
ALTER TABLE case_studies ALTER COLUMN content DROP NOT NULL;

-- 4. Make 'content' optional in resources (it was NOT NULL)
ALTER TABLE resources ALTER COLUMN content DROP NOT NULL;
