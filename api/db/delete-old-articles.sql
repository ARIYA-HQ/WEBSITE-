-- Delete the 11 original blog articles that were in the DB before the Ariya Journal import.
-- These are any blog_posts whose slug is NOT one of the 20 Ariya Journal articles.
-- Safe to run multiple times (DELETE … WHERE NOT IN is idempotent if already deleted).

DELETE FROM blog_posts
WHERE slug NOT IN (
  'nigerian-wedding-traditions-to-keep-and-ditch',
  'ai-in-event-planning-what-it-means-for-nigeria',
  'how-much-does-a-nigerian-wedding-really-cost',
  'mental-load-of-wedding-planning',
  'event-communication-strategies',
  'are-big-nigerian-weddings-going-out-of-fashion',
  'why-event-vendors-struggle-to-get-bookings',
  'art-of-planning-without-losing-your-mind',
  'digital-vs-paper-invitations',
  'event-industry-africa-opportunity',
  'wedding-registries-in-nigeria',
  'planning-a-500-guest-nigerian-wedding',
  'great-events-built-on-systems',
  'your-wedding-is-one-day-your-marriage-is-a-lifetime',
  'every-event-needs-its-own-website',
  'how-vendors-turn-one-booking-into-five',
  'economics-of-an-event-who-makes-money',
  'instagram-effect-on-nigerian-weddings',
  'anatomy-of-a-stress-free-wedding',
  'the-80-20-rule-of-event-planning'
);

-- Verify: should return 0 rows after deletion
SELECT COUNT(*) AS remaining_non_journal_posts
FROM blog_posts
WHERE slug NOT IN (
  'nigerian-wedding-traditions-to-keep-and-ditch',
  'ai-in-event-planning-what-it-means-for-nigeria',
  'how-much-does-a-nigerian-wedding-really-cost',
  'mental-load-of-wedding-planning',
  'event-communication-strategies',
  'are-big-nigerian-weddings-going-out-of-fashion',
  'why-event-vendors-struggle-to-get-bookings',
  'art-of-planning-without-losing-your-mind',
  'digital-vs-paper-invitations',
  'event-industry-africa-opportunity',
  'wedding-registries-in-nigeria',
  'planning-a-500-guest-nigerian-wedding',
  'great-events-built-on-systems',
  'your-wedding-is-one-day-your-marriage-is-a-lifetime',
  'every-event-needs-its-own-website',
  'how-vendors-turn-one-booking-into-five',
  'economics-of-an-event-who-makes-money',
  'instagram-effect-on-nigerian-weddings',
  'anatomy-of-a-stress-free-wedding',
  'the-80-20-rule-of-event-planning'
);
