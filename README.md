# Shenkar & Co. Law Firm — lightweight rebuild

This is a simplified Next.js 14 App Router website for a bilingual boutique law firm.

## What changed compared to the heavier version

- No Framer Motion dependency.
- No `useDir` / MutationObserver language system.
- Hebrew pages are at `/`; English pages are under `/en`.
- Most pages/components are server/static components.
- Editable copy is centralized mainly in `src/data/content.ts` and `src/data/team.ts`.
- Images are served from `public/` and the hero uses `next/image` with `priority`.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production check

```bash
npm run build
npm run start
```

## Edit content

- General site copy, footer, practice areas, contact placeholders: `src/data/content.ts`
- Lawyers/team profiles: `src/data/team.ts`
- Logo / hero image / favicon: `public/`

## Before launch

1. Replace `https://shenkar-law.co.il` in:
   - `src/app/layout.tsx`
   - `src/app/sitemap.ts`
   - `src/app/robots.ts`
   - `src/data/content.ts`
2. Fill in phone, email, address and accessibility coordinator placeholders in `src/data/content.ts`.
3. Replace Unsplash placeholder lawyer photos in `src/data/team.ts` with real photos.
