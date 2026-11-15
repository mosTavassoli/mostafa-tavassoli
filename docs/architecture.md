# Website architecture

The website is a content-first Next.js application.

## Current decisions

- The App Router provides pages and metadata.
- Markdown files are the source of truth for writing.
- Professional history is a small typed data module.
- The website deploys as a conventional Next.js application without a database.
- No analytics or tracking is enabled initially.

## Change points

- A CMS can replace Markdown later if editing workflow becomes a real problem.
- Newsletter, services, and product pages can be added without restructuring existing content.
- The project page can link to separate open-source repositories.
- Hosting is intentionally undecided; providers should be evaluated before deployment.

## Content safety

All work descriptions must be based on public, approved information. Technical writing must use generic examples and must not reconstruct confidential employer systems.
