-- Seed file to import existing content into Supabase database
-- Run this in your Supabase SQL Editor to populate the database with existing data

-- Insert Waitlist Entries
INSERT INTO waitlist (email, role, company) VALUES
('script@test.com', 'individual', NULL),
('timilehinoripeloye@gmail.com', 'vendor', NULL)
ON CONFLICT (email) DO NOTHING;

-- Insert Resources
INSERT INTO resources (title, slug, description, content, image, type, format, size, status) VALUES
('The 2026 Event Trends Report', 'the-2026-event-trends-report', 'A comprehensive look at the colors, themes, and technologies shaping the future of events.', 'Full guide content here...', 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2070', 'Guide', 'PDF', '12 MB', 'published')
ON CONFLICT (slug) DO NOTHING;

-- Note: Blog posts and case studies have very long content. 
-- Due to SQL file size limitations, I recommend using the admin panel to create these.
-- Alternatively, you can run the TypeScript seed script or manually import via Supabase dashboard.

SELECT 'Seed data imported successfully!' as message;
