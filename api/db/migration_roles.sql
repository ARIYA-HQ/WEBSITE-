
-- Migration to update waitlist role constraints
-- The previous constraint was ('individual', 'agency', 'vendor')
-- The new requirement allows ('individual', 'pro', 'vendor')

-- Drop the existing check constraint
ALTER TABLE waitlist DROP CONSTRAINT IF EXISTS waitlist_role_check;

-- Add the new check constraint
ALTER TABLE waitlist ADD CONSTRAINT waitlist_role_check 
  CHECK (role IN ('individual', 'pro', 'vendor'));
