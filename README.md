# ReyasHey Portfolio

![Version](https://img.shields.io/badge/version-2.1.1-0A7EA4?label=version)
![Stack](https://img.shields.io/badge/stack-Next.js%20%7C%20React%20%7C%20TypeScript-000?logo=nextdotjs)
![Deploy](https://img.shields.io/badge/deploy-Netlify-00ad9f?logo=netlify)

A fast-loading personal portfolio for Reyas, built with Next.js and TypeScript. The site highlights key projects, the tech stack, and contact options, with lightweight UI components and a cookies notice for analytics consent.

## Local development
1. Install dependencies: `npm install`
2. Start the dev server: `npm run dev`
3. Visit `http://localhost:3000`

## Tech highlights
- Next.js pages with custom layout components for hero, tech stack, and project showcases.
- TypeScript throughout the project for type safety.
- Cypress configuration included for end-to-end checks.

## Deployment
Netlify builds the site with `npm run build` and serves the generated `.next` output. The included `netlify.toml` also wires in the Cypress Netlify build plugin for test automation during deploys.
