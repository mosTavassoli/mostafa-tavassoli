# Repository guidance for coding agents

## Purpose

This repository contains Mostafa Tavassoli's personal website. It presents professional experience, technical writing, and open-source work without exposing confidential employer information.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4 plus custom global styles
- Markdown posts in `content/writing`
- Static server-rendered content where possible

## Commands

- `npm install` — install dependencies
- `npm run dev` — start local development
- `npm run lint` — run ESLint
- `npm run build` — create a production build

## Architecture

- Route files live in `src/app`.
- Shared visual components live in `src/components`.
- Professional data lives in `src/data/site.ts`.
- Markdown parsing lives in `src/lib/posts.ts`.
- Writing is authored as Markdown in `content/writing`.
- Product and content guidance lives in `docs`.

## Rules

1. Do not invent employers, projects, metrics, certifications, or technical claims.
2. Do not expose private contact information, employer code, internal architecture, incidents, or confidential data.
3. Keep employer-related descriptions high level and based only on approved public information.
4. Preserve accessible semantic HTML, keyboard navigation, readable contrast, and reduced-motion behavior.
5. Keep content useful without client-side JavaScript whenever practical.
6. Do not add a CMS, analytics provider, database, or third-party tracker without an explicit decision.
7. Update documentation when changing content structure or architectural boundaries.
8. Run both lint and production build before considering a change complete.

## Writing style

- Practical, specific, and honest
- Explain trade-offs rather than presenting certainty
- Avoid hype, vague AI language, and keyword stuffing
- Clearly separate personal learning from demonstrated production experience
