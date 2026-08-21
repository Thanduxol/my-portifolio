# Thanduxolo Tshiba — Developer Portfolio

A modern, dark-themed personal portfolio for Thanduxolo Tshiba: aspiring software developer, AI enthusiast, and problem solver. The site tells a single-page story — who I am, what I know, my journey, what I've built, what I've learned, and what's next — built to be easy to keep up to date as new projects, certificates, and skills are added.

## Key technologies

- [TanStack Start](https://tanstack.com/start) (React 19) for routing and server rendering
- Tailwind CSS v4 for styling, with a custom deep maroon / rich green / charcoal / warm cream theme
- Netlify Forms for the contact form (no backend code required)
- Lucide icons

## Editing content

All editable content — personal info, skills, experience, projects, certificates, education, and what's currently being learned — lives in one file:

```
src/data/portfolio.ts
```

Update the exported objects/arrays there to change anything on the site (e.g. add a new project by adding an entry to the `projects` array using the existing `Project` shape, or add a certificate to the `certificates` array). No other files need to change.

Static assets (profile photo, CV, certificate PDFs) live in `public/images`, `public/documents`, and `public/certificates`.

## Running locally

```bash
pnpm install
pnpm dev
```

The dev server runs on port 3000 by default. When testing Netlify-specific features (like the contact form), use the Netlify CLI instead:

```bash
netlify dev
```

## Building

```bash
pnpm build
```
