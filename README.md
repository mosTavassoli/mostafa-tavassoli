# Mostafa Tavassoli — Personal website

A content-first personal website for professional experience, technical writing, and open-source work.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Markdown writing with `gray-matter` and `remark`

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

- Pages: `src/app`
- Professional data and project listings: `src/data/site.ts`
- Writing: `content/writing/*.md`
- Agent guidance: `AGENTS.md`
- Architecture and content guidance: `docs`

## Quality checks

```bash
npm run lint
npm run build
```

## Deploy on Vercel

For a personal portfolio, [Vercel Hobby](https://vercel.com/docs/plans/hobby)
provides free hosting and a `*.vercel.app` address. A purchased domain is optional.

1. In Vercel, choose **Add New → Project** and import
   `mosTavassoli/mostafa-tavassoli` from GitHub.
2. Use the **Next.js** framework preset and leave the root directory and build
   settings at their defaults. No environment variables are required.
3. Choose **Deploy**. Vercel will show the assigned URL and automatically
   redeploy when `main` changes.
