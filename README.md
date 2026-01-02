Muhammad Usman — Portfolio (Frontend)

This repository contains a personal portfolio site built with React, TypeScript and Vite. It is a statically built SPA with a contact form that uses EmailJS in the current setup.

Quick Links
- Dev server: `npm run dev`
- Production build: `npm run build`
- Serve production locally: `npm run preview`

Tech stack
- React 18 + TypeScript
- Vite (dev server + build)
- Tailwind CSS (styling)
- shadcn-ui + Radix primitives (UI components)
- Framer Motion (page/element animations)
- EmailJS (`@emailjs/browser`) for client-side email sending (see Security below)

Project layout (important files)
- `index.html` — root HTML and global meta tags
- `src/main.tsx` — app entry
- `src/App.tsx` — main App wrapper + routes
- `src/pages/` — page components (Index, About, Projects, Contact, etc.)
- `src/components/` — shared components and UI primitives
- `src/data/` — content, images and project metadata
- `src/lib/utils.ts` — utility helpers
- `public/` — static files (robots, icons)
- `dist/` — production build output (do not commit)

Example important source path: `src/pages/Contact.tsx` (contact form using EmailJS)

Environment variables
Create a `.env` at project root (a `.env.example` is provided). Local development may use a local `.env`; do NOT commit real secrets.

Required variables used by the client contact form:
- `VITE_EMAILJS_PUBLIC_KEY`
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`

Add them to Vercel (or your hosting provider) under project Environment Variables for production builds. In Vercel, set the variables in the dashboard (do not commit `.env`).

Important: Vite exposes `VITE_` prefixed variables to client bundles. Do not place any non-public secret in `VITE_*` variables — instead use a serverless function for private keys.

Local development
1. Install dependencies
```bash
npm install
```
2. Start dev server
```bash
npm run dev
```
3. Open http://localhost:5173 (the terminal will show the exact URL/port)

Build & preview
```bash
npm run build
npm run preview
```

Deploy (Vercel recommended)
1. Push your source code (do not push `dist/`) to GitHub/GitLab.
2. Create a project in Vercel and connect the repo.
3. In Vercel Project Settings > Environment Variables, add the three `VITE_EMAILJS_...` variables.
4. Use the default build command: `npm run build` and output directory `dist`.

Security note for Vercel: Vercel will build your site using these env vars at build time. If your client code contains the literal secret values (or you commit a `dist/` build that already contains them), they can be leaked. Ensure no sensitive keys are committed.

Security & Secrets (important)
- Never commit `.env` or any file containing secret values. This repo already includes `.env` in `.gitignore`.
- The contact form currently uses EmailJS which requires public keys in the client. For true secret protection, move email-sending to a serverless function (Vercel Function or other) that keeps credentials server-side.
- If you previously built the project with secrets inlined, delete any built artifacts (e.g. `dist/`) that contain the values, then rebuild after fixing env usage.

Note: a built bundle in `dist/assets` was sanitized to remove embedded EmailJS keys. Rebuild locally after setting environment variables in your build system.

Testing, linting & type checks
- TypeScript: `npm run tsc` (or `npm run typecheck` if configured)
- Linting: `npm run lint` (if ESLint scripts exist)

Troubleshooting
- Contact form not sending in production: check that Vercel env variables are set and that the published build does not contain plaintext keys. Consider switching to server-side email.
- 404s on routes after deploy: ensure your hosting is configured to serve `index.html` for unknown routes (Vercel handles this automatically for SPA projects).
- Styling differences between dev and prod: ensure the PostCSS/Tailwind build runs during `npm run build` and the `dist` assets are generated.

Next recommended improvements
- Move email sending to a serverless endpoint to avoid exposing any keys to the client.
- Add a CI step to run `npm run build` and scan `dist` for known secrets before merging.
- Add unit tests and E2E tests for the contact form and critical flows.

Contributing / Editing content
- Project content (projects, images, copy) is stored under `src/data/` and `src/assets/projects/`. Update those files and the page components under `src/pages/`.

Contact / Support
If you want me to run a production build locally and scan `dist/` for secrets, or scaffold a Vercel serverless endpoint for safer email sending, tell me and I will implement it.
