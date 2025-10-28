# Next Steps & Enhancements

Suggested roadmap to evolve the portfolio closer to the style and depth of marclou.com.

## Visual & Theming
- Switch to light default theme (minimal white background) and offer dark mode toggle.
- Refine typography scales (tight leading for headings, comfortable body text line-height ~1.65).
- Add subtle grid / section separators using `divide-y` or faint borders.

## Content Features
- Timeline / journey section (e.g., milestones, launches, pivots) under About page.
- "Now" section: current focus, learning, experiments (can live on homepage or about).
- Newsletter subscription form (use a placeholder action now; integrate with Buttondown/Substack later).
- Projects filtering by tag and status (active, archived, sold) with simple client-side state.
- Uses page: break down hardware, dev stack, productivity, analytics, indie hacking ops.

## Blog Enhancements
- MDX integration for rich content (`@next/mdx`) and custom components (Callout, CodeBlock, Note).
- Generate RSS feed and sitemap automatically.
- Add reading time and published date formatting.
- Tag pages (list posts by tag).

## Performance & SEO
- Prefetch internal links via Next.js defaults.
- Add Open Graph image generation route (using @vercel/og or Satori).
- Structured data (JSON-LD) for articles & person schema.

## DX Improvements
- Aliases already set; add absolute imports for content components.
- Add Playwright or Cypress for basic E2E (navigation, project details, blog post render).
- Add GitHub Actions workflow for lint + test + build.

## Dark Mode Toggle
- Use DaisyUI theme swap: store preference in `localStorage`, hydrate with small inline script to avoid flash.

## Data & CMS
- Option to migrate posts/projects to Markdown/MDX files or a simple headless CMS (Contentlayer, Sanity, or Supabase).

## Monetization / Indie Hacking Extras
- Add a "Stack / Tools" affiliate section.
- Add a "Products" page with pricing cards & feature comparison.

## Progressive Enhancements
- Add `prefers-reduced-motion` adjustments for animations.
- Lazy-load non-critical sections (e.g. blog preview) via dynamic import.

---
Replace placeholder links & email before launch. Prioritize Node upgrade (>18.18) to run dev server.
