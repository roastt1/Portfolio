# Portfolio Project - Claude Code Guidelines

## Project
Personal portfolio website built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS.

## Key Skills
- **`nextjs-guidelines`** — Always apply when working on components, pages, or styles
- **`skill-developer`** — Use when creating or modifying skills

## Tech Stack
- Next.js 16 + App Router
- React 19
- TypeScript (strict)
- Tailwind CSS with `darkMode: "class"`
- Framer Motion + GSAP for animations
- Package manager: **npm**

## Important Rules

### Always
- Use `"use client"` for interactive components (hooks, event handlers, animations)
- Include `dark:` Tailwind variants for any new bg/text colors
- Use `<Image>` (next/image) not `<img>`
- Use `<Link>` (next/link) for internal navigation

### Never
- Use MUI, styled-components, or CSS-in-JS
- Use inline styles when a Tailwind class exists
- Skip TypeScript types

## After Changes
Run TypeScript check: `npx tsc --noEmit`
Run dev server: `npm run dev`

## Structure
```
app/                  # Next.js App Router pages & components
constants/            # Static data (projects, skills)
types/                # TypeScript type definitions
.claude/
  skills/             # Claude skills (nextjs-guidelines, skill-developer)
  hooks/              # Auto-run hooks (skill activation, tsc check)
  commands/           # /dev-docs, /dev-docs-update
```
