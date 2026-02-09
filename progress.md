# Fermium Designs Website Redesign - Progress Log

Last Updated: 2026-02-09

## Goals
- Build a bold, editorial website for Fermium Designs (Dubai) with a "Refined Brutalism Meets Warm Luxury" aesthetic.
- Implement the full multi-page spec: Home, About, Services, Fitout, Approvals, Structurals, Blog, Contact.
- Use Next.js 14 App Router, Tailwind CSS + CSS Modules, Framer Motion + GSAP.
- Maintain high performance targets (Lighthouse 95+).

## Key Design Direction
- Monochrome base with warm gold/brass accents.
- Oversized architectural typography and generous negative space.
- Full-bleed imagery, asymmetric layouts, curated gallery feel.
- Motion as signature: scroll reveals, parallax, marquee, magnetic buttons.

## Design Tokens

### Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| Primary BG | `#0A0A0A` | Deep charcoal/black |
| Secondary BG | `#F5F2ED` | Warm off-white/cream |
| Accent Primary | `#C9A962` | Warm gold/brass |
| Accent Secondary | `#8B7355` | Bronze/taupe |
| Text Primary | `#FFFFFF` | Pure white |
| Text Secondary | `#A0A0A0` | Soft gray |

### Typography
| Element | Font | Weight | Usage |
|---------|------|--------|-------|
| Display/Hero | Playfair Display / Editorial New | 400-700 | Large headlines |
| Body | Satoshi / Inter | 400-500 | Readability |
| Accent/Labels | Space Grotesk | 500-600 | Captions, technical details |
| Numbers/Stats | Cabinet Grotesk | 700 | Statistics, years |

## Pages Summary
1. **Home** — Single-page scroll: hero video/slider, stats bar, philosophy, services horizontal scroll (pinned), projects masonry, testimonials marquee, blog grid, footer curtain reveal
2. **About** — Story-driven: hero split, timeline (1999→present), team grid (B&W→color hover), values SVG animation, certifications
3. **Services** — Interactive expandable list (01 INTERIOR FITOUT, etc.), gold fill hover, process sticky scroll
4. **Fitout** — Before/after slider, bento capability grid, case study (challenge→solution→result)
5. **Approvals** — Accordion (DM, CD, NOCs, DEWA, Trakhees), compliance badges, trust signals
6. **Structurals** — Optional 3D wireframe (Three.js) or photo hero, technical standards grid
7. **Blog** — Editorial masonry, sidebar, single post template with pull quotes
8. **Contact** — Split layout (form left, typography right), floating label inputs, WhatsApp button, styled map

## Global Features
- Custom cursor (default → "View" on project hover)
- Magnetic buttons (50px radius)
- Page transitions (fade + Y-axis, 400ms)
- Gold scroll progress bar
- Parallax on hero images (0.5x)
- Fade-up reveal (30px, Intersection Observer)
- Smooth scrolling (Lenis or native)
- `prefers-reduced-motion` support
- Mobile: full-screen overlay menu, swipeable galleries
- Breakpoints: 1440+ / 1024-1439 / 768-1023 / <768 / <480

## Current Status
- All 8 pages built and compiling successfully (build passes clean).
- Repository initialized with remote set to `https://github.com/ilyas-thinkin/fermium.git`.
- No commits yet — all code is local, uncommitted.

## Decisions
- Progress tracking file will live at repo root as `progress.md`.
- Fonts decided: Playfair Display (display), Inter (body), Space Grotesk (accent/labels).
- Animation stack: Framer Motion + Lenis (smooth scroll). GSAP installed but not yet used.
- No React Three Fiber yet — using CSS patterns for hero backgrounds as placeholders.

## Completed Steps
- [x] Full design brief reviewed and understood (Session 1, Claude Opus 4.6)
- [x] Progress tracking file created
- [x] Repository structure inspected — confirmed empty (no commits)
- [x] Initialized Next.js 16 project with TypeScript, Tailwind CSS v4, App Router
- [x] Configured Tailwind with custom color palette (CSS custom properties in globals.css)
- [x] Set up font loading: Playfair Display, Inter, Space Grotesk via next/font/google
- [x] Created base layout: Header (desktop + mobile overlay menu), Footer (CTA + grid + bottom bar)
- [x] Implemented custom cursor component (data-cursor attribute system)
- [x] Implemented scroll progress bar (gold, fixed top)
- [x] Implemented smooth scrolling (Lenis)
- [x] Built reusable animation components: FadeUp, TextReveal, ParallaxImage, PageTransition, MagneticButton
- [x] Built Home page: HeroSection, StatsBar, PhilosophySection, ServicesScroll (horizontal pinned), ProjectsGrid (masonry + filters), TestimonialsMarquee, BlogPreview
- [x] Built About page: AboutHero (split), Timeline (vertical alternating), TeamSection (click for bio), ValuesSection (icon cards), CertificationsSection
- [x] Built Services page: ServicesHero, ServicesList (expandable accordion with gold hover fill, process steps, gallery placeholders), ProcessSection (sticky left + scrolling right with progress line)
- [x] Built Fitout page: FitoutHero (before/after slider), CapabilitiesGrid (bento), CaseStudy (challenge/solution/result)
- [x] Built Approvals page: ApprovalsHero (blueprint grid), ApprovalTypes (accordion with docs + FAQ), ComplianceBadges
- [x] Built Structurals page: StructuralsHero, StructuralServices (numbered cards), TechnicalStandards (code grid)
- [x] Built Blog page: BlogHero, BlogGrid (filterable masonry with featured post)
- [x] Built Contact page: ContactHero (floating label form + info + WhatsApp button + map placeholder)
- [x] Full build passing — all 8 routes generated as static pages
- [x] Replaced text logo with actual `public/logo/logo.png` in Header and Footer (inverted white via CSS for dark bg)
- [x] Configured for Vercel deployment: image optimization (AVIF/WebP), metadataBase, OG/Twitter metadata, favicon
- [x] Cleaned up default Next.js placeholder SVGs from public/
- [x] Removed X-Powered-By header for security

## File Structure
```
src/
├── app/
│   ├── fonts.ts
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx (Home)
│   ├── about/page.tsx
│   ├── approvals/page.tsx
│   ├── blog/page.tsx
│   ├── contact/page.tsx
│   ├── fitout/page.tsx
│   ├── services/page.tsx
│   └── structurals/page.tsx
├── components/
│   ├── animations/ (FadeUp, TextReveal, ParallaxImage, PageTransition)
│   ├── layout/ (Header, Footer)
│   ├── ui/ (CustomCursor, MagneticButton, ScrollProgress, SmoothScroll)
│   ├── home/ (HeroSection, StatsBar, PhilosophySection, ServicesScroll, ProjectsGrid, TestimonialsMarquee, BlogPreview)
│   ├── about/ (AboutHero, Timeline, TeamSection, ValuesSection, CertificationsSection)
│   ├── services/ (ServicesHero, ServicesList, ProcessSection)
│   ├── fitout/ (FitoutHero, CapabilitiesGrid, CaseStudy)
│   ├── approvals/ (ApprovalsHero, ApprovalTypes, ComplianceBadges)
│   ├── structurals/ (StructuralsHero, StructuralServices, TechnicalStandards)
│   ├── blog/ (BlogHero, BlogGrid)
│   └── contact/ (ContactHero)
```

## Next Steps
1. [ ] Replace placeholder images/gradients with actual project photography
2. [ ] Add blog single post template (`/blog/[id]/page.tsx`)
3. [ ] Mobile responsive polish pass on all pages
4. [ ] Footer curtain reveal effect
5. [ ] Add GSAP ScrollTrigger for horizontal scroll pinning (currently using Framer Motion)
6. [ ] Performance optimization pass
7. [ ] Lighthouse audit and fixes
8. [ ] CMS integration (Sanity.io or Contentful) — Phase 2
9. [ ] Connect contact form to backend/email service
10. [ ] Embed Google Maps on contact page
11. [ ] Add actual social media links
12. [x] SEO: Open Graph metadata, Twitter cards, favicon (done — custom OG image still needed)
13. [ ] Deploy to Vercel and set `NEXT_PUBLIC_SITE_URL` env var to production domain
14. [ ] Create proper OG image (1200x630) for social sharing

## Open Questions
- None pending.

## Agent Handoff Notes
- Code is fully functional but uses placeholder images (gradient backgrounds with text labels like "Project Image").
- All animations use Framer Motion; GSAP is installed but not yet utilized.
- Lenis handles smooth scrolling globally.
- The `data-cursor` attribute on any element triggers the custom cursor hover state with optional text.
- Tailwind v4 uses `@theme inline` in globals.css for custom tokens — different from v3 config file approach.
- Build passes cleanly with `npx next build` — all pages are statically generated.
- **Deployment**: Configured for Vercel. Push to `main` branch triggers auto-deploy.
- **Logo**: Uses `public/logo/logo.png` with `brightness-0 invert` CSS to make it white on dark background.
- **metadataBase**: Set to `NEXT_PUBLIC_SITE_URL` env var (fallback: `https://fermium.vercel.app`). Update this in Vercel dashboard if using a custom domain.
- Keep updates in this file after each meaningful change.

## Update - 2026-02-09 (Light Theme Migration)
- Switched global theme tokens to a light, premium palette in `src/app/globals.css` (light backgrounds, dark text, gold accents, new border/card tokens).
- Updated About components (Values, Team, Certifications) to use light card backgrounds and `border-border`.
- Updated Services Process section line styling and placeholder text in ServicesList.
- Updated Fitout components (Hero slider, Capabilities grid, Case Study gallery) for light backgrounds and contrast.
- Updated Blog filter pills and cards for light theme, including tag backgrounds and hover borders.
- Updated Contact form inputs/selects, submit button text color, and map placeholder for light theme.
- Header/Footer previously adjusted: header uses native logo on light bg; footer stays dark with inverted logo.
- Remaining: run `npx next build` to verify after all light-theme edits.

## Update - 2026-02-09 (Navigation)
- Moved Fitout, Approvals, and Structurals into a Services dropdown in the navbar.
- Desktop: hover dropdown under Services with light-theme panel.
- Mobile: Services shows sub-links within the overlay menu.

## Update - 2026-02-09 (Header CTA + Logo Visibility)
- Adjusted header background to a light, blurred premium panel for better logo contrast.
- Upgraded the "Start a Project" CTA to a clear button style with gold fill, border, and soft shadow.

## Update - 2026-02-09 (Hero Offset)
- Added top padding to the Home hero so it clears the fixed navbar.

## Update - 2026-02-09 (Navbar Styling)
- Removed the thin bottom border line under the navbar.
- Kept the header in a light, premium theme with soft blur and shadow.

## Update - 2026-02-09 (Light White Theme)
- Adjusted global background tokens to a brighter, white-based palette for a lighter overall feel.

## Update - 2026-02-09 (Services Scroll Spacing)
- Reduced empty space after the horizontal services scroller by making its scroll track height dynamic based on card count.

## Update - 2026-02-09 (Hero Background + Modern Cards)
- Set Home hero background to use `public/herobg.png` with modern light overlays for readability.
- Refreshed key cards (Services scroll, Projects grid, Testimonials) with rounded corners, softer shadows, and subtle hover lift for a more modern feel.

## Update - 2026-02-09 (Hero Readability)
- Reduced hero headline sizes and softened scroll fade/translate so the CTA and copy remain visible longer while scrolling.

## Update - 2026-02-09 (Hero Fit)
- Reduced hero headline sizes and tightened spacing to fit comfortably within the viewport.

## Update - 2026-02-09 (Premium Light Redesign)
- Removed the custom cursor from the layout.
- Shifted global tokens to a cleaner, brighter white-based palette with warmer gold accents.
- Redesigned the Home hero into a glassy, premium panel layout with lighter typography and a refined CTA.
- Refined Home sections (Stats, Philosophy, Projects, Blog preview) with rounded surfaces and softer shadows.
- Updated the footer to a light, premium layout to match the new theme.

## Update - 2026-02-09 (Hero Viewport Fit)
- Set Home hero height to `100svh` with top/bottom padding so it fully fits within the viewport on load.

## Update - 2026-02-09 (Hero Redesign)
- Rebuilt the Home hero layout into a split, modern composition with a glassy content panel and a premium stats stack.
- Kept the hero fully within the viewport while improving visual hierarchy and readability.

## Update - 2026-02-09 (Hero Redesign - Luxury Showcase)
- Reworked the hero into a full-bleed cinematic layout with dark overlay and minimal, high-contrast typography.
- Removed the card-and-stats layout in favor of a clean, premium showcase style.

## Update - 2026-02-09 (Hero Button)
- Removed the magnetic button interaction in the hero CTA and replaced it with a subtle lift + shadow change on hover.

## Update - 2026-02-09 (Philosophy Fit)
- Reduced Philosophy section spacing and image size so the content fits within the viewport.

## Update - 2026-02-09 (Philosophy + Services Spacing)
- Increased Philosophy image width by changing the aspect ratio to 4:3 and adjusting grid balance.
- Reduced spacing between the Services heading and cards.

## Update - 2026-02-09 (Offerings Section)
- Added a new “What Fermium Designs Offers” grid section with premium card styling.
- Placed it between the Services scroll section and the Projects grid on the Home page.

## Update - 2026-02-09 (Offerings Card Motion)
- Added subtle image zoom on hover and moved the arrow button to the bottom of each card.

## Update - 2026-02-09 (Offerings Card Shape)
- Reduced the image height and made the offering cards square for a tighter, more consistent layout.

## Update - 2026-02-09 (Netlify Repo Prep Fix)
- Removed the large PDF from `public/` to avoid Netlify repo preparation failures.
