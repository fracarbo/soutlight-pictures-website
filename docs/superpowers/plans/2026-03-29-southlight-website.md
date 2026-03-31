# SouthLight Pictures Website — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rewrite all components of the SouthLight Pictures website with Amber Gold branding, hybrid page architecture, and cinematic dark aesthetic.

**Architecture:** Astro 5 static site with Tailwind CSS. Homepage shows hero + section previews. Dedicated pages for `/projects`, `/about`, `/contact`. Shared mock data in `src/data/projects.ts`. All components rewritten from scratch.

**Tech Stack:** Astro 5, Tailwind CSS 3, TypeScript

**Spec:** `docs/superpowers/specs/2026-03-29-southlight-website-design.md`

---

## File Structure

```
src/
├── data/
│   └── projects.ts              # Shared mock project data (NEW)
├── components/
│   ├── Header.astro             # Fixed nav with mobile overlay (REWRITE)
│   ├── Hero.astro               # Video splash placeholder (REWRITE)
│   ├── Projects.astro           # Homepage highlights, 3 items (REWRITE)
│   ├── ProjectsFull.astro       # Full project list (NEW)
│   ├── About.astro              # Homepage preview (REWRITE)
│   ├── AboutFull.astro          # Full about page content (NEW)
│   ├── Contact.astro            # Homepage CTA (NEW)
│   ├── ContactFull.astro        # Full contact form (NEW)
│   └── Footer.astro             # Footer with branding (REWRITE)
├── layouts/
│   └── Layout.astro             # HTML wrapper (REWRITE)
├── pages/
│   ├── index.astro              # Homepage (REWRITE)
│   ├── projects.astro           # Projects page (NEW)
│   ├── about.astro              # About page (NEW)
│   └── contact.astro            # Contact page (NEW)
tailwind.config.mjs              # Add amber color tokens (MODIFY)
```

**Delete:** `src/components/Welcome.astro`

---

### Task 1: Tailwind Config — Add Amber Color Tokens

**Files:**
- Modify: `tailwind.config.mjs`

- [ ] **Step 1: Update tailwind.config.mjs with amber color palette**

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        amber: {
          DEFAULT: '#D9A938',
          dark: '#B8912E',
          glow: 'rgba(217,169,56,0.15)',
        },
      },
    },
  },
  plugins: [],
}
```

- [ ] **Step 2: Verify config is valid**

Run: `npx tailwindcss --help`
Expected: No errors (confirms Tailwind can load)

- [ ] **Step 3: Commit**

```bash
git add tailwind.config.mjs
git commit -m "feat: add amber color tokens to Tailwind config"
```

---

### Task 2: Shared Data — Mock Projects

**Files:**
- Create: `src/data/projects.ts`

- [ ] **Step 1: Create the data directory**

Run: `mkdir -p src/data`

- [ ] **Step 2: Write src/data/projects.ts**

```ts
export interface Project {
  title: string;
  category: string;
  year: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: 'The Shadows Within',
    category: 'Horror Feature',
    year: '2024',
    image: 'https://images.pexels.com/photos/1666471/pexels-photo-1666471.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Echoes of Silence',
    category: 'Thriller Series',
    year: '2024',
    image: 'https://images.pexels.com/photos/2249528/pexels-photo-2249528.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Nightmare Protocol',
    category: 'Sci-Fi Horror',
    year: '2023',
    image: 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'The Last Séance',
    category: 'Supernatural',
    year: '2023',
    image: 'https://images.pexels.com/photos/1310532/pexels-photo-1310532.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Dark Waters Rise',
    category: 'Horror Feature',
    year: '2023',
    image: 'https://images.pexels.com/photos/1619569/pexels-photo-1619569.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'The Forgotten Room',
    category: 'Mystery Thriller',
    year: '2022',
    image: 'https://images.pexels.com/photos/3593922/pexels-photo-3593922.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];
```

- [ ] **Step 3: Commit**

```bash
git add src/data/projects.ts
git commit -m "feat: add shared mock project data"
```

---

### Task 3: Layout.astro — Rewrite HTML Wrapper

**Files:**
- Rewrite: `src/layouts/Layout.astro`

- [ ] **Step 1: Rewrite Layout.astro**

```astro
---
interface Props {
  title?: string;
}

const { title = 'SouthLight Pictures' } = Astro.props;
---

<!doctype html>
<html lang="en" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <meta name="description" content="SouthLight Pictures — An American production company specializing in horror and thriller content." />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="generator" content={Astro.generator} />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
    <title>{title}</title>
  </head>
  <body class="bg-black text-white antialiased">
    <slot />
  </body>
</html>
```

- [ ] **Step 2: Verify the dev server starts**

Run: `npm run dev`
Expected: Server starts without errors on localhost

- [ ] **Step 3: Commit**

```bash
git add src/layouts/Layout.astro
git commit -m "feat: rewrite Layout.astro with SouthLight branding"
```

---

### Task 4: Header.astro — Fixed Nav with Mobile Overlay

**Files:**
- Rewrite: `src/components/Header.astro`

- [ ] **Step 1: Rewrite Header.astro**

```astro
---
const currentPath = Astro.url.pathname;

const navLinks = [
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
---

<header class="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
  <nav class="container mx-auto px-6 py-4">
    <div class="flex items-center justify-between">
      <a href="/" class="text-2xl font-black tracking-tighter hover:text-amber transition-colors">
        SOUTHLIGHT
      </a>

      <div class="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => (
          <a
            href={link.href}
            class:list={[
              'text-sm font-medium transition-colors',
              currentPath === link.href || currentPath === link.href + '/'
                ? 'text-amber border-b border-amber pb-1'
                : 'text-gray-400 hover:text-white',
            ]}
          >
            {link.label}
          </a>
        ))}
      </div>

      <button
        id="mobile-menu-btn"
        class="md:hidden text-white"
        aria-label="Toggle menu"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </nav>
</header>

<!-- Mobile overlay menu -->
<div id="mobile-menu" class="fixed inset-0 z-[60] bg-black/95 backdrop-blur-lg hidden flex-col items-center justify-center">
  <button
    id="mobile-menu-close"
    class="absolute top-6 right-6 text-white"
    aria-label="Close menu"
  >
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>

  <nav class="flex flex-col items-center space-y-8">
    {navLinks.map((link) => (
      <a
        href={link.href}
        class:list={[
          'text-3xl font-black tracking-tighter transition-colors',
          currentPath === link.href || currentPath === link.href + '/'
            ? 'text-amber'
            : 'text-white hover:text-amber',
        ]}
      >
        {link.label}
      </a>
    ))}
  </nav>
</div>

<script>
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const close = document.getElementById('mobile-menu-close');

  btn?.addEventListener('click', () => {
    menu?.classList.remove('hidden');
    menu?.classList.add('flex');
  });

  close?.addEventListener('click', () => {
    menu?.classList.add('hidden');
    menu?.classList.remove('flex');
  });

  menu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu?.classList.add('hidden');
      menu?.classList.remove('flex');
    });
  });
</script>
```

- [ ] **Step 2: Verify header renders on dev server**

Run: `npm run dev`
Check: Header visible at top, nav links present, mobile hamburger shows on narrow viewport

- [ ] **Step 3: Commit**

```bash
git add src/components/Header.astro
git commit -m "feat: rewrite Header with SouthLight nav and mobile overlay"
```

---

### Task 5: Hero.astro — Video Splash Placeholder

**Files:**
- Rewrite: `src/components/Hero.astro`

- [ ] **Step 1: Rewrite Hero.astro**

```astro
---
---

<section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
  <!-- Ambient glow -->
  <div class="absolute inset-0">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-glow rounded-full blur-3xl animate-pulse"></div>
  </div>

  <!-- Dark overlay -->
  <div class="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>

  <!-- Logo reveal -->
  <div class="relative z-10 text-center animate-fade-in">
    <p class="text-xs tracking-[0.4em] text-gray-600 mb-4 uppercase">A Production Company</p>
    <h1 class="text-7xl md:text-9xl font-black tracking-tighter text-white">SOUTHLIGHT</h1>
    <p class="text-sm md:text-base tracking-[0.5em] text-gray-500 mt-2">PICTURES</p>
    <div class="w-12 h-[2px] bg-amber mx-auto mt-8"></div>
  </div>

  <!-- Scroll indicator -->
  <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
    <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  </div>
</section>

<style>
  @keyframes fade-in {
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  .animate-fade-in {
    animation: fade-in 2s ease-out forwards;
  }
</style>
```

- [ ] **Step 2: Verify hero renders**

Run: `npm run dev`
Check: Full-screen hero with SOUTHLIGHT PICTURES centered, amber glow pulsing, fade-in animation plays

- [ ] **Step 3: Commit**

```bash
git add src/components/Hero.astro
git commit -m "feat: rewrite Hero with cinematic logo reveal and amber glow"
```

---

### Task 6: Projects.astro — Homepage Highlights (3 Items)

**Files:**
- Rewrite: `src/components/Projects.astro`

- [ ] **Step 1: Rewrite Projects.astro**

```astro
---
import { projects } from '../data/projects';

const featured = projects.slice(0, 3);
---

<section id="projects" class="bg-black">
  <div class="mb-16 px-6 pt-24 container mx-auto">
    <h2 class="text-5xl md:text-7xl font-black tracking-tighter mb-4">FEATURED WORK</h2>
    <p class="text-xl text-gray-400">Stories that haunt, thrill, and inspire</p>
  </div>

  <div class="space-y-1">
    {featured.map((project) => (
      <div class="group relative overflow-hidden cursor-pointer h-96 md:h-[500px]">
        <img
          src={project.image}
          alt={project.title}
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-80 transition-opacity" />

        <div class="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
          <p class="text-sm md:text-base text-gray-300 mb-2">{project.category} &bull; {project.year}</p>
          <h3 class="text-3xl md:text-5xl font-black tracking-tight mb-4 transition-transform duration-500 group-hover:-translate-y-1">
            {project.title}
          </h3>
          <div class="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <span class="inline-flex items-center text-sm font-semibold text-amber">
              Learn More
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>

  <div class="container mx-auto px-6 py-16 text-center">
    <a
      href="/projects"
      class="inline-block px-8 py-4 bg-amber text-black font-semibold rounded-full hover:bg-amber-dark transition-colors"
    >
      View All Projects
    </a>
  </div>
</section>
```

- [ ] **Step 2: Verify on dev server**

Check: 3 project cards render with images, hover effects work, "View All Projects" button visible

- [ ] **Step 3: Commit**

```bash
git add src/components/Projects.astro
git commit -m "feat: rewrite Projects with shared data and amber accents"
```

---

### Task 7: ProjectsFull.astro — Full Project List

**Files:**
- Create: `src/components/ProjectsFull.astro`

- [ ] **Step 1: Write ProjectsFull.astro**

```astro
---
import { projects } from '../data/projects';
---

<section class="bg-black pt-24">
  <div class="mb-16 px-6 container mx-auto">
    <h1 class="text-5xl md:text-7xl font-black tracking-tighter mb-4">OUR WORK</h1>
    <p class="text-xl text-gray-400">Every project tells a story</p>
  </div>

  <div class="space-y-1">
    {projects.map((project) => (
      <div class="group relative overflow-hidden cursor-pointer h-96 md:h-[500px]">
        <img
          src={project.image}
          alt={project.title}
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-80 transition-opacity" />

        <div class="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
          <p class="text-sm md:text-base text-gray-300 mb-2">{project.category} &bull; {project.year}</p>
          <h3 class="text-3xl md:text-5xl font-black tracking-tight mb-4 transition-transform duration-500 group-hover:-translate-y-1">
            {project.title}
          </h3>
          <div class="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <span class="inline-flex items-center text-sm font-semibold text-amber">
              Learn More
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/ProjectsFull.astro
git commit -m "feat: add ProjectsFull component for /projects page"
```

---

### Task 8: About.astro — Homepage Preview

**Files:**
- Rewrite: `src/components/About.astro`

- [ ] **Step 1: Rewrite About.astro**

```astro
---
---

<section id="about" class="py-24 bg-gradient-to-b from-black via-[#0A0A0A] to-black">
  <div class="container mx-auto px-6 text-center max-w-3xl">
    <h2 class="text-5xl md:text-7xl font-black tracking-tighter mb-8">WHO WE ARE</h2>
    <p class="text-lg text-gray-400 leading-relaxed mb-8">
      SouthLight Pictures is an American production company founded by Alex Caruso, dedicated to creating compelling horror and thriller content that pushes the boundaries of storytelling. We craft experiences that haunt, thrill, and resonate with audiences around the globe.
    </p>
    <div class="flex justify-center gap-12 mb-12">
      <div>
        <div class="text-4xl font-black text-amber mb-2">50+</div>
        <div class="text-sm text-gray-500">Productions</div>
      </div>
      <div>
        <div class="text-4xl font-black text-amber mb-2">25+</div>
        <div class="text-sm text-gray-500">Awards</div>
      </div>
      <div>
        <div class="text-4xl font-black text-amber mb-2">100M+</div>
        <div class="text-sm text-gray-500">Viewers</div>
      </div>
    </div>
    <a
      href="/about"
      class="inline-block px-8 py-4 border-2 border-amber text-amber font-semibold rounded-full hover:bg-amber hover:text-black transition-all"
    >
      Learn More
    </a>
  </div>
</section>
```

- [ ] **Step 2: Verify on dev server**

Check: Section renders with stats in amber, CTA button visible

- [ ] **Step 3: Commit**

```bash
git add src/components/About.astro
git commit -m "feat: rewrite About with SouthLight branding and amber stats"
```

---

### Task 9: AboutFull.astro — Full About Page Content

**Files:**
- Create: `src/components/AboutFull.astro`

- [ ] **Step 1: Write AboutFull.astro**

```astro
---
---

<section class="pt-24 pb-24 bg-black">
  <div class="container mx-auto px-6">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <h1 class="text-5xl md:text-7xl font-black tracking-tighter mb-8">WHO WE ARE</h1>
        <div class="space-y-6 text-lg text-gray-400 leading-relaxed">
          <p>
            SouthLight Pictures is an American production company founded by Alex Caruso, dedicated to creating compelling stories that push the boundaries of horror and thriller entertainment.
          </p>
          <p>
            From spine-chilling horror to thought-provoking thrillers, we craft experiences that resonate with audiences around the globe. Our team of visionary creators, producers, and storytellers work to bring fresh perspectives to the screen.
          </p>
          <p>
            We believe in the power of narrative to inspire, terrify, and move people. With a commitment to quality and innovation, we constantly evolve and challenge the conventions of storytelling.
          </p>
        </div>
        <div class="mt-12 grid grid-cols-3 gap-8">
          <div>
            <div class="text-4xl font-black text-amber mb-2">50+</div>
            <div class="text-sm text-gray-500">Productions</div>
          </div>
          <div>
            <div class="text-4xl font-black text-amber mb-2">25+</div>
            <div class="text-sm text-gray-500">Awards</div>
          </div>
          <div>
            <div class="text-4xl font-black text-amber mb-2">100M+</div>
            <div class="text-sm text-gray-500">Viewers</div>
          </div>
        </div>
      </div>

      <div class="relative">
        <div class="aspect-square rounded-2xl overflow-hidden">
          <img
            src="https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="SouthLight Pictures Production"
            class="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div class="absolute -bottom-8 -left-8 w-64 h-64 bg-amber-glow rounded-full blur-3xl"></div>
      </div>
    </div>

    <!-- Founder Section -->
    <div class="mt-24 border-t border-white/10 pt-16">
      <h2 class="text-3xl md:text-5xl font-black tracking-tighter mb-8">THE FOUNDER</h2>
      <div class="max-w-3xl">
        <h3 class="text-2xl font-bold text-amber mb-4">Alex Caruso</h3>
        <p class="text-lg text-gray-400 leading-relaxed">
          Alex Caruso is the founder and driving force behind SouthLight Pictures. With a passion for horror and thriller storytelling, Alex has built SouthLight Pictures into a production company dedicated to crafting unforgettable cinematic experiences that captivate audiences worldwide.
        </p>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/AboutFull.astro
git commit -m "feat: add AboutFull component with founder section"
```

---

### Task 10: Contact.astro — Homepage CTA

**Files:**
- Create: `src/components/Contact.astro`

- [ ] **Step 1: Write Contact.astro**

```astro
---
---

<section id="contact" class="py-24 bg-black">
  <div class="container mx-auto px-6 text-center max-w-2xl">
    <h2 class="text-5xl md:text-7xl font-black tracking-tighter mb-6">GET IN TOUCH</h2>
    <p class="text-lg text-gray-400 mb-10">
      Interested in working with us? We'd love to hear from you.
    </p>
    <a
      href="/contact"
      class="inline-block px-8 py-4 bg-amber text-black font-semibold rounded-full hover:bg-amber-dark transition-colors"
    >
      Contact Us
    </a>
  </div>
</section>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Contact.astro
git commit -m "feat: add Contact homepage CTA component"
```

---

### Task 11: ContactFull.astro — Full Contact Form

**Files:**
- Create: `src/components/ContactFull.astro`

- [ ] **Step 1: Write ContactFull.astro**

```astro
---
---

<section class="pt-24 pb-24 bg-black">
  <div class="container mx-auto px-6 max-w-2xl">
    <h1 class="text-5xl md:text-7xl font-black tracking-tighter mb-4">CONTACT</h1>
    <p class="text-lg text-gray-400 mb-12">
      Have a project in mind? Drop us a line and we'll get back to you.
    </p>

    <form class="space-y-6">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-400 mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          class="w-full px-4 py-3 bg-[#111] border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-400 mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          class="w-full px-4 py-3 bg-[#111] border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent transition-colors"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label for="subject" class="block text-sm font-medium text-gray-400 mb-2">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          class="w-full px-4 py-3 bg-[#111] border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent transition-colors"
          placeholder="What's this about?"
        />
      </div>

      <div>
        <label for="message" class="block text-sm font-medium text-gray-400 mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          rows="6"
          required
          class="w-full px-4 py-3 bg-[#111] border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent transition-colors resize-none"
          placeholder="Tell us about your project..."
        ></textarea>
      </div>

      <button
        type="submit"
        class="w-full py-4 bg-amber text-black font-semibold rounded-lg hover:bg-amber-dark transition-colors"
      >
        Send Message
      </button>
    </form>
  </div>
</section>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/ContactFull.astro
git commit -m "feat: add ContactFull component with form"
```

---

### Task 12: Footer.astro — Rewrite with SouthLight Branding

**Files:**
- Rewrite: `src/components/Footer.astro`

- [ ] **Step 1: Rewrite Footer.astro**

```astro
---
---

<footer class="bg-black border-t border-white/10 py-16">
  <div class="container mx-auto px-6">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
      <div class="md:col-span-2">
        <h3 class="text-3xl font-black tracking-tighter mb-4">SOUTHLIGHT</h3>
        <p class="text-gray-500 mb-6 max-w-md">
          Creating unforgettable stories that captivate and inspire audiences worldwide.
        </p>
        <div class="flex space-x-4">
          <!-- Instagram placeholder -->
          <span class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-500 cursor-default">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </span>
          <!-- LinkedIn placeholder -->
          <span class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-500 cursor-default">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </span>
        </div>
      </div>

      <div>
        <h4 class="font-bold mb-4">Company</h4>
        <ul class="space-y-2 text-gray-500">
          <li><a href="/about" class="hover:text-white transition-colors">About Us</a></li>
          <li><a href="/projects" class="hover:text-white transition-colors">Projects</a></li>
          <li><a href="/contact" class="hover:text-white transition-colors">Contact</a></li>
        </ul>
      </div>

      <div>
        <h4 class="font-bold mb-4">Legal</h4>
        <ul class="space-y-2 text-gray-500">
          <li><a href="#" class="hover:text-white transition-colors">Privacy Policy</a></li>
          <li><a href="#" class="hover:text-white transition-colors">Terms of Service</a></li>
        </ul>
      </div>
    </div>

    <div class="pt-8 border-t border-white/10 text-center text-gray-600 text-sm">
      <p>&copy; 2026 SouthLight Pictures. All rights reserved.</p>
    </div>
  </div>
</footer>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Footer.astro
git commit -m "feat: rewrite Footer with SouthLight branding"
```

---

### Task 13: Homepage — Assemble index.astro

**Files:**
- Rewrite: `src/pages/index.astro`

- [ ] **Step 1: Rewrite index.astro**

```astro
---
import Layout from '../layouts/Layout.astro';
import Header from '../components/Header.astro';
import Hero from '../components/Hero.astro';
import Projects from '../components/Projects.astro';
import About from '../components/About.astro';
import Contact from '../components/Contact.astro';
import Footer from '../components/Footer.astro';
---

<Layout title="SouthLight Pictures — Horror & Thriller Production">
  <Header />
  <Hero />
  <Projects />
  <About />
  <Contact />
  <Footer />
</Layout>
```

- [ ] **Step 2: Verify homepage on dev server**

Run: `npm run dev`
Check: All sections render in order — Hero, Featured Work (3 projects), About with stats, Contact CTA, Footer

- [ ] **Step 3: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: assemble homepage with all SouthLight sections"
```

---

### Task 14: Projects Page — /projects

**Files:**
- Create: `src/pages/projects.astro`

- [ ] **Step 1: Write pages/projects.astro**

```astro
---
import Layout from '../layouts/Layout.astro';
import Header from '../components/Header.astro';
import ProjectsFull from '../components/ProjectsFull.astro';
import Footer from '../components/Footer.astro';
---

<Layout title="Projects — SouthLight Pictures">
  <Header />
  <ProjectsFull />
  <Footer />
</Layout>
```

- [ ] **Step 2: Verify /projects page**

Run: `npm run dev`
Navigate to: `http://localhost:4321/projects`
Check: All 6 projects render with full-bleed images, "Projects" nav link is active (amber underline)

- [ ] **Step 3: Commit**

```bash
git add src/pages/projects.astro
git commit -m "feat: add /projects page"
```

---

### Task 15: About Page — /about

**Files:**
- Create: `src/pages/about.astro`

- [ ] **Step 1: Write pages/about.astro**

```astro
---
import Layout from '../layouts/Layout.astro';
import Header from '../components/Header.astro';
import AboutFull from '../components/AboutFull.astro';
import Footer from '../components/Footer.astro';
---

<Layout title="About — SouthLight Pictures">
  <Header />
  <AboutFull />
  <Footer />
</Layout>
```

- [ ] **Step 2: Verify /about page**

Navigate to: `http://localhost:4321/about`
Check: Full about content with founder section, stats in amber, image placeholder

- [ ] **Step 3: Commit**

```bash
git add src/pages/about.astro
git commit -m "feat: add /about page"
```

---

### Task 16: Contact Page — /contact

**Files:**
- Create: `src/pages/contact.astro`

- [ ] **Step 1: Write pages/contact.astro**

```astro
---
import Layout from '../layouts/Layout.astro';
import Header from '../components/Header.astro';
import ContactFull from '../components/ContactFull.astro';
import Footer from '../components/Footer.astro';
---

<Layout title="Contact — SouthLight Pictures">
  <Header />
  <ContactFull />
  <Footer />
</Layout>
```

- [ ] **Step 2: Verify /contact page**

Navigate to: `http://localhost:4321/contact`
Check: Form renders with all fields, amber focus rings, submit button styled

- [ ] **Step 3: Commit**

```bash
git add src/pages/contact.astro
git commit -m "feat: add /contact page"
```

---

### Task 17: Cleanup — Delete Unused Files

**Files:**
- Delete: `src/components/Welcome.astro`

- [ ] **Step 1: Delete Welcome.astro**

Run: `rm -f src/components/Welcome.astro`

- [ ] **Step 2: Verify build succeeds**

Run: `npm run build`
Expected: Build completes with no errors

- [ ] **Step 3: Commit**

```bash
git add -u src/components/Welcome.astro
git commit -m "chore: remove unused Welcome.astro template"
```

---

### Task 18: Final Verification

- [ ] **Step 1: Run full production build**

Run: `npm run build`
Expected: Build succeeds, no errors or warnings

- [ ] **Step 2: Preview production build**

Run: `npm run preview`
Check all pages:
- `/` — Hero, 3 projects, about, contact CTA, footer
- `/projects` — All 6 projects, active nav
- `/about` — Full content with founder, active nav
- `/contact` — Form with all fields, active nav
- Mobile responsive: hamburger menu works, layouts stack vertically

- [ ] **Step 3: Final commit if any fixes needed**

```bash
git add -A
git commit -m "fix: final adjustments from review"
```
