# SouthLight Pictures - Website

## Project Overview

Official website for **SouthLight Pictures**, an American production company founded by **Alex Caruso**, specializing in **horror and thriller** content. The site is inspired by [atomicmonster.com](https://www.atomicmonster.com) — dark cinematic aesthetic, video-forward hero, clean navigation, professional film industry presence.

## Tech Stack

- **Framework**: Astro 5
- **Styling**: Tailwind CSS 3
- **Language**: TypeScript (strict mode)
- **Font**: Inter (Google Fonts)
- **Package manager**: npm

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run preview` — Preview production build

## Project Structure

```
src/
├── assets/          # SVGs and static assets
├── components/      # Astro components (Header, Hero, Projects, About, Footer)
├── layouts/         # Layout wrapper (Layout.astro)
└── pages/           # Route pages (index.astro)
public/              # Static files (favicon)
```

## Site Architecture

Single-page site with anchor navigation. Sections:
- **Header** — Fixed navbar with logo + nav links (Film, TV, News, About, Contact)
- **Hero** — Full-screen with video splash or animated background
- **Projects** — Featured work grid (mock content for now)
- **About** — Company story, stats, team info
- **Footer** — Social links, legal links, copyright

## Branding

- **Company name**: SouthLight Pictures (NOT "Atomic Monster" — replace all references)
- **Founder**: Alex Caruso
- **Genres**: Horror, Thriller, Supernatural, Sci-Fi Horror
- **Tone**: Dark, cinematic, bold, professional
- **Color palette**: Black backgrounds, white text, red/orange accents
- **Typography**: Heavy/black weights for headings, light weights for body text

## Content Status

All project/film content is currently **mock/placeholder**. No real productions to showcase yet. Social media channels not yet created.

## Design Reference

Inspired by atomicmonster.com:
- Dark cinematic aesthetic
- Video hero section with logo animation
- Clean minimal navigation (Film, TV, News, About, Contact)
- Full-bleed project imagery
- Professional film industry look and feel
- Social links in footer
- Legal/privacy links in footer

## Coding Conventions

- Use Astro components (`.astro` files) for all UI
- Style with Tailwind utility classes — no custom CSS unless absolutely necessary
- Keep components self-contained with data defined in frontmatter
- Mobile-first responsive design
- Smooth scroll behavior enabled
- All text in English

## Important Notes

- `src/components/Welcome.astro` is an unused Astro default template — can be deleted
- Images currently use external Pexels URLs as placeholders
- Deployment platform not yet decided
