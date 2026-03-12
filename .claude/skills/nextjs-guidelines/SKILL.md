# Next.js Portfolio Development Guidelines

## Project Overview

Personal portfolio built with **Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS**.

## Tech Stack

- **Framework**: Next.js 16 with App Router (`app/` directory)
- **UI**: React 19 + Tailwind CSS (`darkMode: "class"`)
- **Animations**: Framer Motion, GSAP, AOS (scroll animations)
- **Icons**: Lucide React
- **Language**: TypeScript (strict mode)
- **Package Manager**: npm
- **Font**: Noto Sans KR (Google Fonts)

## Project Structure

```
app/
  layout.tsx              # Root layout
  page.tsx                # Home redirect / entry
  ClientLayout.tsx        # Client-side layout wrapper
  globals.css             # Global styles + CSS variables
  components/             # Shared components
    Header.tsx            # Navigation header
    Footer.tsx
    DarkMode.tsx          # Dark mode toggle
    MobileMenuButton.tsx
    ScrollToTopButton.tsx
  home/
    page.tsx
    components/HomeSection.tsx, CodeTerminal.tsx
  about/
    page.tsx
    components/About.tsx, AboutCard.tsx, ProfileImageStacks.tsx
  projects/
    page.tsx
    components/Projects.tsx, ProjectCard.tsx, ProjectModal.tsx, Badge.tsx
  skills/
    page.tsx
    components/Skills.tsx, SkillCard.tsx
constants/                # Data constants (project/skill data)
types/                    # TypeScript type definitions
```

## Key Rules

### Tailwind CSS (NOT MUI)

- Use Tailwind utility classes, NOT any CSS-in-JS or component libraries
- Dark mode: use `dark:` prefix classes. Theme is toggled via `class` on `<html>`
- Custom Tailwind keyframes defined in `tailwind.config.js`

### TypeScript

- Strict mode enabled — always type props, state, and return values
- Use `interface` for component props
- Run `npx tsc --noEmit` to check types before finishing

### Component Patterns

```tsx
// Functional component with typed props
interface MyComponentProps {
    title: string;
    isVisible?: boolean;
}

export default function MyComponent({
    title,
    isVisible = true,
}: MyComponentProps) {
    return <div className="flex flex-col">{isVisible && <h1>{title}</h1>}</div>;
}
```

### Dark Mode Pattern

Dark mode is toggled via `class` on `<html>`. Uses **custom colors** defined in `tailwind.config.js`:

| Class              | Value     | Usage                     |
| ------------------ | --------- | ------------------------- |
| `dark:bg-dark-100` | `#1d1d1d` | Header/navbar background  |
| `dark:bg-dark-200` | `#353535` | Main page background      |
| `dark:bg-dark-300` | `#575757` | Cards, secondary elements |
| `dark:bg-dark-400` | `#8d8d8d` | Subtle/muted elements     |

```tsx
// Header example (actual pattern in codebase)
<header className="bg-white dark:bg-dark-100 dark:text-white">
// Body/main background
<body className="dark:bg-dark-200">
// Mobile menu
<nav className="bg-white dark:bg-dark-100">
```

Dark mode state is managed in `DarkMode.tsx` via `localStorage` + `document.documentElement.classList.toggle("dark")`.

### Animation Patterns

**Custom Tailwind animations** (defined in `tailwind.config.js`):

- `animate-slide-up` — fade in from below
- `animate-slide-left-fade` — fade in from right
- `animate-slide-right-fade` — fade in from left
- `animate-fly-in` / `animate-fly-out` — DarkMode icon swap
- `animate-rise-in` / `animate-set-out` — DarkMode icon rotation
- `animate-expand-width` — width expansion (0% → 100%)
- `animate-glow` / `animate-darkglow` — drop-shadow pulse
- `animate-slideBgFast` / `animate-slideBgSlow` — background scroll

**AOS (Animate On Scroll)** — initialized in layout, applied via `data-aos` attribute:

```tsx
<div data-aos="fade-up" data-aos-delay="100">
    ...
</div>
```

**Framer Motion** — for complex interactive animations:

```tsx
import { motion } from "framer-motion";
<motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
/>;
```

### "use client" Directive

- Add `"use client"` for components that use: hooks, event handlers, browser APIs, animations
- Server components (no directive) for: static content, data fetching, layouts

### File Naming

- Components: PascalCase (`MyComponent.tsx`)
- Pages: `page.tsx` in route folder
- Constants: camelCase in `constants/`

## Common Pitfalls

- ❌ Do NOT use `<img>` — use Next.js `<Image>` from `next/image`
- ❌ Do NOT use `<a>` for internal links — use Next.js `<Link>` from `next/link`
- ❌ Do NOT use inline styles when Tailwind class exists
- ✅ Always handle `dark:` variant when adding new background/text colors
- ✅ Use `"use client"` for any interactive component
