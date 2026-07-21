# Hall's Kitchen Handbook

This repository contains the Docusaurus site that hosts the handbook for Hall's Kitchen

## Deployment

This site is set up as a static Docusaurus handbook.

## Future Cloudflare Deployment

If a dedicated domain such as `hallskitchenhandbook.com` is added later, this repo can use Cloudflare Pages as the host while GitHub remains the source of truth.

Recommended setup:

1. Keep editing and pushing this repository on GitHub.
2. Connect the GitHub repository to Cloudflare Pages.
3. Let Cloudflare Pages build and deploy automatically on pushes to `master`.
4. Point the custom domain at the Cloudflare Pages project.

Why this is useful:

- Simpler custom-domain setup
- Built-in SSL and CDN handling
- No GitHub project-page path requirement such as `/handbook/`
- Easier long-term deployment to a root domain

Important config change if moving from GitHub Pages to Cloudflare Pages:

- Current GitHub Pages configuration uses `url: 'https://markupstart.github.io'` and `baseUrl: '/handbook/'`
- A root-domain Cloudflare deployment would normally use `url: 'https://hallskitchenhandbook.com'` and `baseUrl: '/'`

Do not make that change until the site is actually being moved off GitHub Pages.
