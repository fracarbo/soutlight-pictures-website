# SouthLight Pictures — Website Design Spec

## Overview

Complete rewrite of the SouthLight Pictures website, an American horror/thriller production company founded by Alex Caruso. The site is inspired by [atomicmonster.com](https://www.atomicmonster.com) with a dark cinematic aesthetic and Amber Gold accent color.

**Tech stack:** Astro 5 + Tailwind CSS 3 + TypeScript
**Font:** Inter (Google Fonts)
**Approach:** Full component rewrite (no incremental rebrand)

## Site Architecture

Hybrid structure: single-page homepage with section highlights, plus dedicated pages for each section.

### Pages

| Route | Purpose |
|-------|---------|
| `/` | Homepage — Hero + Projects highlights (3) + About preview + Contact preview + Footer |
| `/projects` | Full project list — full-bleed images, all mock projects |
| `/about` | Company story, Alex Caruso bio, stats |
| `/contact` | Contact form (name, email, message) — backend TBD |

### Navigation

Fixed header with logo and 3 nav links:

```
SOUTHLIGHT          Projects  About  Contact
```

- **Projects** → `/projects`
- **About** → `/about`
- **Contact** → `/contact`

Mobile: hamburger menu with slide-out or overlay nav.

## Color Palette — Amber Gold

| Token | Value | Usage |
|-------|-------|-------|
| Black | `#000000` | Primary background |
| Near Black | `#0A0A0A` | Section backgrounds |
| Dark Gray | `#111111` | Card/elevated surfaces |
| White | `#FFFFFF` | Primary text, headings |
| Gray 400 | `#9CA3AF` | Body text |
| Gray 600 | `#4B5563` | Muted text, labels |
| Amber | `#D9A938` | Primary accent — stats, highlights, active states, CTA buttons |
| Amber Dark | `#B8912E` | Hover state for amber elements |
| Amber Glow | `rgba(217,169,56,0.15)` | Subtle background glow effects |

## Typography

- **Headings:** Inter Black (900), tight tracking (`tracking-tighter`)
- **Body:** Inter Light (300), relaxed leading
- **Labels/Caps:** Inter, small size, wide letter-spacing (`tracking-widest`)
- **Logo:** Inter Black, uppercase, `SOUTHLIGHT` with `PICTURES` below in lighter weight

## Components

### Layout.astro (rewrite)

- HTML wrapper with meta tags for SouthLight Pictures
- Google Fonts preconnect for Inter
- `<body class="bg-black text-white antialiased">`
- Smooth scroll behavior
- Slot for page content

### Header.astro (rewrite)

- Fixed top, `bg-black/80 backdrop-blur-md`
- Logo: `SOUTHLIGHT` text (font-bold, tracking-tighter)
- Nav links: Projects, About, Contact — all linking to dedicated pages
- Mobile hamburger button (functionality: toggle fullscreen overlay menu)
- Active state: amber underline on current page link

### Hero.astro (rewrite)

- Full-screen section (`min-h-screen`)
- Video splash placeholder: CSS animation simulating a cinematic logo reveal
  - Centered `SOUTHLIGHT PICTURES` logo with fade-in + subtle scale animation
  - Ambient amber glow pulsing in the background
  - Dark gradient overlay
- Scroll-down indicator at bottom (animated bounce arrow)
- When a real video is available, replace the CSS animation with a `<video>` element

### Projects.astro (rewrite)

Homepage version — shows 3 featured projects as full-bleed cards with:
- Background image covering full width
- Gradient overlay (bottom-to-top, black)
- Project title, category, year
- Hover: image scale, reveal "Learn More" link
- "View All Projects" CTA button at bottom linking to `/projects`

### ProjectsFull.astro (new component)

Used on `/projects` page — shows all projects in full-bleed list:
- Same card style as homepage but all projects shown
- Page title section: "Our Work" heading + subtitle

### About.astro (rewrite)

Homepage version — condensed preview:
- Short company description (1 paragraph)
- Stats row: Productions, Awards, Viewers (amber accent numbers)
- "Learn More" CTA linking to `/about`

### AboutFull.astro (new component)

Used on `/about` page — full content:
- Company story (multiple paragraphs)
- Alex Caruso section (founder bio)
- Stats with amber accent
- Image placeholder

### Contact.astro (new component)

Homepage version — condensed:
- "Get In Touch" heading
- Brief text + "Contact Us" CTA linking to `/contact`

### ContactFull.astro (new component)

Used on `/contact` page — full form:
- Fields: Name, Email, Subject, Message
- Submit button (amber background, black text)
- Form is frontend-only for now (no backend wired up)
- Styled with Tailwind: dark inputs with border, focus ring in amber

### Footer.astro (rewrite)

- Company logo + tagline
- Nav links: Projects, About, Contact
- Social media placeholder icons (no links yet — channels not created)
- Copyright: `© 2026 SouthLight Pictures. All rights reserved.`
- Legal placeholder links: Privacy Policy, Terms of Service

### Files to Delete

- `src/components/Welcome.astro` — unused Astro default template

## Pages Structure

### pages/index.astro (rewrite)

```
Layout
  Header
  Hero
  Projects (highlights, 3 items)
  About (preview)
  Contact (preview)
  Footer
```

### pages/projects.astro (new)

```
Layout
  Header
  ProjectsFull (all items)
  Footer
```

### pages/about.astro (new)

```
Layout
  Header
  AboutFull
  Footer
```

### pages/contact.astro (new)

```
Layout
  Header
  ContactFull
  Footer
```

## Shared Data

Mock project data lives in `src/data/projects.ts` as a single exported array. Both `Projects.astro` (homepage, first 3) and `ProjectsFull.astro` (all) import from this file to avoid duplication.

## Mock Content

All project data is placeholder. Six mock projects:

1. The Shadows Within — Horror Feature, In development
2. Echoes of Silence — Thriller Series, In development
3. Nightmare Protocol — Sci-Fi Horror, 2023
4. The Last Séance — Supernatural, 2023
5. Dark Waters Rise — Horror Feature, 2023
6. The Forgotten Room — Mystery Thriller, 2022

Images: Pexels URLs (existing placeholders).

Stats (mock): 50+ Productions, 25+ Awards, 100M+ Viewers.

## Animations & Interactions

- **Hero:** CSS fade-in + scale for logo, pulsing amber glow, bounce arrow
- **Project cards:** Image scale on hover (duration-700), title translate-y, "Learn More" fade-in
- **Header:** Backdrop blur, semi-transparent on scroll
- **Page transitions:** None for v1 (keep simple)
- **Smooth scroll:** Enabled via `scroll-smooth` on html

## Responsive Behavior

- **Mobile:** Single column layouts, hamburger nav, reduced heading sizes
- **Tablet:** Intermediate sizing
- **Desktop:** Full layouts as designed

## Out of Scope

- Real video for hero (placeholder CSS animation for now)
- Social media links (channels not yet created)
- Contact form backend (frontend only)
- News section (removed from scope)
- TV section (removed — only Projects)
- SEO optimization beyond basic meta tags
- Analytics
- Deployment configuration
