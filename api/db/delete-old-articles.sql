-- Delete any blog_posts whose slug is NOT one of the 20 Ariya Journal articles.
-- The DB already holds exactly the 20 journal articles as of 2026-10-30,
-- so this script is a no-op unless old content reappears.
-- Safe to run multiple times (idempotent).

DELETE FROM blog_posts
WHERE slug NOT IN (
  'the-new-nigerian-wedding-why-couples-are-doing-things-differently',
  'your-next-event-might-be-planned-by-ai-here-s-what-that-actually-means',
  'the-billion-naira-business-behind-nigerian-weddings',
  'the-hidden-mental-load-of-planning-a-wedding-nobody-talks-about',
  'from-14-whatsapp-groups-to-one-dashboard-rethinking-how-we-plan-events',
  'are-big-nigerian-weddings-slowly-going-out-of-fashion',
  'why-talented-event-vendors-struggle-to-get-bookings-and-how-to-change-that',
  'the-art-of-planning-an-event-without-losing-your-mind',
  'the-death-of-paper-invitations-how-digital-experiences-are-changing-events',
  'why-the-event-industry-in-africa-is-a-bigger-opportunity-than-most-people-realise',
  'the-rise-of-cash-gifts-are-wedding-registries-changing-african-gift-culture',
  'what-really-goes-into-planning-a-500-guest-nigerian-wedding',
  'why-great-events-are-built-on-systems-not-last-minute-miracles',
  'your-wedding-is-one-day-your-marriage-is-a-lifetime-are-we-getting-the-balance-wrong',
  'what-if-every-event-had-its-own-website',
  'how-event-vendors-can-turn-one-booking-into-five-more',
  'the-economics-of-an-event-who-really-makes-money-when-you-throw-a-party',
  'the-instagram-effect-how-social-media-is-changing-what-we-expect-from-weddings',
  'anatomy-of-a-stress-free-wedding-what-happens-when-everything-is-organised-early',
  'the-80-20-rule-of-event-planning-what-actually-deserves-your-attention'
);

-- Verify: should return 0 rows after deletion
SELECT COUNT(*) AS remaining_non_journal_posts
FROM blog_posts
WHERE slug NOT IN (
  'the-new-nigerian-wedding-why-couples-are-doing-things-differently',
  'your-next-event-might-be-planned-by-ai-here-s-what-that-actually-means',
  'the-billion-naira-business-behind-nigerian-weddings',
  'the-hidden-mental-load-of-planning-a-wedding-nobody-talks-about',
  'from-14-whatsapp-groups-to-one-dashboard-rethinking-how-we-plan-events',
  'are-big-nigerian-weddings-slowly-going-out-of-fashion',
  'why-talented-event-vendors-struggle-to-get-bookings-and-how-to-change-that',
  'the-art-of-planning-an-event-without-losing-your-mind',
  'the-death-of-paper-invitations-how-digital-experiences-are-changing-events',
  'why-the-event-industry-in-africa-is-a-bigger-opportunity-than-most-people-realise',
  'the-rise-of-cash-gifts-are-wedding-registries-changing-african-gift-culture',
  'what-really-goes-into-planning-a-500-guest-nigerian-wedding',
  'why-great-events-are-built-on-systems-not-last-minute-miracles',
  'your-wedding-is-one-day-your-marriage-is-a-lifetime-are-we-getting-the-balance-wrong',
  'what-if-every-event-had-its-own-website',
  'how-event-vendors-can-turn-one-booking-into-five-more',
  'the-economics-of-an-event-who-really-makes-money-when-you-throw-a-party',
  'the-instagram-effect-how-social-media-is-changing-what-we-expect-from-weddings',
  'anatomy-of-a-stress-free-wedding-what-happens-when-everything-is-organised-early',
  'the-80-20-rule-of-event-planning-what-actually-deserves-your-attention'
);
