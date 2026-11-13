---
description: "Use when creating or updating AriyaHQ marketing pages, SEO landing pages, content pillars, or local wedding/event planning pages. Covers UI consistency, factual product claims, route metadata, internal links, and mobile-first content."
applyTo: ["src/pages/**/*.tsx", "src/seo/**/*.ts", "scripts/prerender-seo.ts"]
---

# AriyaHQ Marketing Page Guidelines

## Product and visual consistency

- This website is a Vite + React + React Router app, not Next.js. Follow the existing route, layout, and SEO patterns.
- Public pages render inside `PublicLayout`, which already supplies the shared header, footer, and cookie banner. Do not duplicate those elements.
- Match the established AriyaHQ UI: Tailwind utility classes, primary orange accents, neutral/beige surfaces, dark-mode support, strong editorial headings, generous spacing, rounded cards, and restrained transitions. Check nearby pages and shared components before introducing new styles or dependencies.
- Design mobile-first. Check for horizontal overflow, readable line lengths, touch-friendly controls, and responsive image behavior at narrow widths.
- Use semantic landmarks and heading order, with one clear H1 per page. Prefer real links and buttons with one interactive element per control; avoid clickable-looking dead ends and nested buttons inside links.
- Reuse existing brand assets and approved site imagery. Do not copy or hotlink images from research documents. Add alt text for meaningful images and empty alt text for decoration.

## SEO and route wiring

- For each new indexable page, update all relevant surfaces together: React Router in `src/App.tsx`, route title/description and indexability in `src/seo/routes.ts`, sitemap URLs in `src/seo/sitemap.ts`, and static HTML generation as appropriate. Confirm the VPS and any supported deployment serve the generated page correctly.
- Use a unique, accurate title and description, a self-referencing canonical on `https://ariyahq.com`, and useful Open Graph/Twitter metadata in the initial HTML. Keep client-side metadata consistent with prerendered metadata.
- Exclude private, unavailable, duplicate, or unfinished routes from the sitemap. Unknown routes must remain 404/noindex.
- Link only to routes and product destinations that actually exist. Proposed future paths such as `/wedding-budget/`, `/wedding-website/`, `/digital-invitations/`, `/event-rsvp/`, and `/gift-registry/` are not automatically valid: verify their implementation before linking. Use descriptive anchor text and sensible links to existing relevant pages.
- Add structured data only when it accurately describes visible page content. Validate generated JSON-LD and keep FAQ markup aligned with the actual on-page questions and answers.

## Content quality and claims

- Write for people first: satisfy the page's search intent with practical, locally relevant guidance, scannable sections, useful examples, and clear next steps. Use target phrases naturally; do not keyword-stuff or present unvalidated search volumes/difficulty as facts.
- Verify every AriyaHQ capability, price, fee, availability, and product claim against the current app or an authoritative project source before publishing. Do not promise planned or unavailable functionality. In particular, do not claim AriyaHQ offers a catalogue of gifts.
- Keep calls to action specific and point them to a working, relevant destination, reusing `src/config/links.ts` for product sign-up links.
- Do not imply that a checklist, download, calculator, or other resource exists unless it has actually been created and its link works. Identify authorship, review dates, or sources only when verified.

## Wedding-planning pillar brief

When implementing the supplied Nigerian wedding-planning pillar, use this brief as the content direction:

- Audience: engaged couples, families, and wedding planners in Nigeria; informational and commercial intent.
- Primary topic: wedding planning in Nigeria. Cover traditional and white weddings, realistic budgeting, timelines/checklists, venues, vendors, guest lists, invitations/event websites, day-of schedules, contingencies, and planning tools.
- Include Nigerian context thoughtfully, acknowledging that customs and requirements vary by families, communities, religion, city, and ceremony. Avoid presenting one group's customs as universal.
- Present AriyaHQ naturally as a relevant option only for capabilities verified in the current product. Do not invent keyword metrics, pricing, vendor guarantees, legal/religious requirements, or product features.
- Treat the proposed supporting-page links in the source brief as a future content-cluster plan. Until those routes exist, link to the closest real, relevant AriyaHQ pages without suggesting that a missing guide is available.

## Validation

- Run the smallest relevant test/type-check and production build after code changes.
- Inspect generated HTML for the new page's title, description, canonical, robots policy, social tags, and structured data; check sitemap inclusion and route status.
- If browser validation is available, check the page at mobile and desktop widths and verify internal links navigate to real destinations.
