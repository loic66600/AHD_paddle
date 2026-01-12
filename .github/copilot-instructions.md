# AHD Paddle Copilot Instructions

## Architecture & Layout

- Astro 4 static site under [src](src) with a single top-level layout in [src/layouts/Layout.astro](src/layouts/Layout.astro) wrapping all pages.
- Layout imports Porsche Design System partials (`getMetaTagsAndIconLinks`, `getLoaderScript`, etc.) so every page must hydrate `p-*` web components via the injected loader script at the end of `<body>`.
- French locale is enforced in Layout (`lang="fr"`); keep new UI copy in French unless a change request states otherwise.
- Home page content lives in [src/pages/index.astro](src/pages/index.astro) and relies heavily on Tailwind utility classes plus Porsche custom elements (`p-header`, `p-footer`, `p-button`).

## Known File Quirks

- Several files were created through PowerShell helpers and currently include `@"` ... `"@ | Out-File` wrappers (see [astro.config.mjs](astro.config.mjs) and [src/layouts/Layout.astro](src/layouts/Layout.astro)); when editing, strip those wrappers so the files contain only valid Astro/JS.
- Tailwind config ([tailwind.config.ts](tailwind.config.ts)) and global stylesheet ([src/styles/global.css](src/styles/global.css)) are placeholders; add real content rather than leaving new utilities inline.
- Image references in [src/pages/index.astro](src/pages/index.astro) point to `/ahd-*.jpg`; drop matching assets into [public](public) or update paths to avoid broken hero sections.

## Styling & Components

- Tailwind is the primary styling tool; prefer utility classes but move shared rules into [src/styles/global.css](src/styles/global.css) when reused.
- Porsche Design System components require the head partials already provided by Layout; do not remove them or the components lose styling and JS behavior.
- When creating new pages, always wrap content with `Layout` so meta tags, fonts, and Porsche assets load consistently.

## Dev & Build Workflow

- Install dependencies and run the dev server locally: `npm install` then `npm run dev` (defaults to `http://localhost:4321`).
- Docker workflow mirrors local dev; `docker compose up --build` mounts the repo into `/app` and exposes port 4321 for live reload.
- Astro output is configured as `static`; when adding SSR-only features, revisit [astro.config.mjs](astro.config.mjs).

## Testing & QA

- No automated tests exist; verify changes manually in the dev server, especially Porsche web component interactions and responsive Tailwind layouts.
- Check for hydration warnings in the browser console; missing loader scripts or incorrect component usage surface there first.

## Contribution Tips

- Keep Porsche component imports centralized in Layout; individual pages should only use the custom elements.
- Maintain consistent hero/section structure from the homepage when building additional product pages to preserve Porsche-inspired visual rhythm.
- Update this file when you add workflows (linting, testing) or introduce new architectural patterns so future agents stay aligned.
