# CLAUDE.md — Personal Portfolio: Huỳnh Minh Khánh

## Project Overview

Personal portfolio website for Huỳnh Minh Khánh — introducing the person, skills, and personal projects. Design: dark, minimal, modern, professional. Inspired by yasio.dev aesthetic.

## Owner / Subject

| Field | Info |
|---|---|
| Full name | Huỳnh Minh Khánh |
| Education | Sinh viên năm 4 — Đại học Công nghiệp TP. Hồ Chí Minh (IUH) |
| Major | Kỹ thuật phần mềm (Software Engineering) |
| Email | khanhhuynh10102005@gmail.com |

## Personal Projects

Projects to showcase on the portfolio. More will be added later.

| # | Project | Description | Status |
|---|---|---|---|
| 1 | Hệ thống quản lý nhà hàng | Restaurant management system | Details TBD |
| 2 | Hệ thống mua bán tài liệu & dụng cụ học tập IUH | Marketplace for IUH students to buy/sell study materials and supplies | Details TBD |

> **Note**: Tech stack, screenshots, and repo links for each project will be added later. Use placeholder cards in the UI until then. Do NOT use lorem ipsum — leave fields visibly empty or use a "Coming soon" label.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS + CSS custom properties for design tokens
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Font**: Geist or Inter (system-level precision), monospace for code elements
- **Deployment**: Vercel

## Design System

### Color Palette
```
--bg-primary:     #0a0a0f   /* near-black base */
--bg-secondary:   #111118   /* card/section backgrounds */
--bg-elevated:    #1a1a24   /* elevated surfaces */
--accent:         #7c5cfc   /* primary purple accent */
--accent-blue:    #4f8ef7   /* secondary blue accent */
--text-primary:   #f0f0f0   /* headings */
--text-secondary: #888899   /* body, labels */
--text-muted:     #444455   /* de-emphasized */
--border:         #222233   /* subtle dividers */
```

### Typography
- Headings: bold, large-scale, tight letter-spacing (`tracking-tight`)
- Body: light weight, generous line-height
- Code/terminal blocks: monospace, green-on-dark (`#00ff88` or `#a8ff78`)
- Section labels: uppercase, small, wide letter-spacing (`tracking-widest`)

### Layout Principles
- Full-width dark canvas
- Content max-width: `1200px`, centered
- Generous vertical whitespace between sections (`py-32` or more)
- Project cards: scattered/asymmetric grid, not rigid columns
- No rounded corners on major containers (sharp edges feel more editorial)
- Subtle noise/grain texture on background (CSS or SVG filter)

### Motion / Animation
- Scroll-triggered fade+slide-up for content blocks
- Cursor follower (subtle glow dot)
- Project image hover: slight scale + reveal overlay
- Page load: staggered text entrance animation
- Keep animations purposeful — never decorative noise

## Site Structure

```
/                   Hero + intro
  ↓ scroll
  About             Short bio, skills as tags
  Work              Project showcase (scattered layout)
  Showreel          Video embed or gif loop (optional)
  Contact           Email + social links
```

### Hero Section
- Full-viewport height
- Bold greeting: "Hi, my name is **Huỳnh Minh Khánh**"
- Subtitle with role: "I design and develop [animated role]"
- Subtle animated background (particles or gradient mesh)

### About Section
- 2–3 sentences bio
- Skills displayed as compact tags/chips, not bullet lists
- Keep it tight — personality over CV

### Work / Projects Section
- 4–8 featured projects
- Each project: title, short description, tech stack tags, live link + repo link
- Layout: asymmetric masonry or staggered grid
- Project image/screenshot as card background with overlay on hover
- Large typographic section label (e.g., "WORK" in background, oversized)

### Contact Section
- Minimal: email address (clickable) + icon links (GitHub, LinkedIn, etc.)
- Optional: short CTA sentence

## Content Guidelines

- Language: Vietnamese or English — pick one and be consistent (recommend English for international reach)
- Tone: confident, direct, no filler words
- Project descriptions: one sentence max per project in the card view
- Avoid: long paragraphs, stock phrases like "passionate developer"

## File Structure

```
src/
  app/
    layout.tsx          root layout, metadata, fonts
    page.tsx            home page (all sections)
    globals.css         CSS custom properties, base styles
  components/
    Hero.tsx
    About.tsx
    ProjectCard.tsx
    ProjectGrid.tsx
    Contact.tsx
    CursorFollower.tsx
    SectionLabel.tsx    reusable oversized background text
  data/
    projects.ts         project data array
    skills.ts           skills list
  lib/
    utils.ts
public/
  images/
    projects/           project screenshots
```

## Data Shape

```typescript
// data/projects.ts
interface Project {
  id: string
  title: string
  description: string       // one sentence
  tags: string[]            // tech stack
  image: string             // path to screenshot
  url?: string              // live site
  repo?: string             // github
  featured: boolean
  year: number
}
```

## Code Standards

- No `any` in TypeScript
- Components are pure/functional, no class components
- Tailwind for layout/spacing; CSS variables for theme tokens
- Framer Motion variants defined outside component body
- Images: use `next/image` with proper `alt` text and `sizes`
- No unused dependencies

## Performance Targets

- Lighthouse score ≥ 90 across all categories
- LCP < 2.5s
- No layout shift from fonts (use `font-display: swap` + preload)
- Images: WebP, lazy-loaded below the fold

## What to Avoid

- Generic Bootstrap/Material UI components — everything custom
- Carousel/slider for projects — static grid is cleaner
- Excessive micro-animations that compete with content
- Light mode (dark-only is intentional)
- Lorem ipsum — use real content from day one

---

## Mandatory Rules (Non-Negotiable)

### 1. Screenshot After Every Major Change
After every significant UI change (new section, layout adjustment, color/typography update), take a screenshot of the result and compare it against the reference design (yasio.dev style). Only proceed when the visual direction is aligned.

Use: `npx playwright screenshot` or browser DevTools screenshot — save to `design-review/` folder.

### 2. Mobile-First, Fully Responsive
Every layout must work on:
- Mobile: 375px (iPhone SE baseline)
- Tablet: 768px
- Desktop: 1280px+

Rules:
- Use Tailwind responsive prefixes (`sm:`, `md:`, `lg:`) — never fixed pixel widths for layout
- Touch targets ≥ 44px
- Test all breakpoints before marking any section done
- The scattered/asymmetric project grid must gracefully collapse to a single column on mobile

### 3. Scroll Animations on Every Section
Every section (`About`, `Work`, `Contact`, and any future sections) **must** have a Framer Motion scroll-triggered animation. Minimum standard:

```tsx
// Minimum per section — fade + slide up on enter
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}
// Use with useInView or whileInView prop
```

Individual elements within a section should stagger (`staggerChildren: 0.1`) rather than all animate at once.
