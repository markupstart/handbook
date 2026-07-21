# Hall's Kitchen Handbook

This repository contains the Docusaurus site that hosts the handbook for Hall's Kitchen

## Deployment

This site is deployed from GitHub to Cloudflare Pages and served at `https://hallskitchenhandbook.com`.

Current production setup:

1. Content is edited in this GitHub repository.
2. Pushes to `master` trigger a Cloudflare Pages build.
3. Cloudflare serves the live site at `hallskitchenhandbook.com`.

Important Docusaurus settings for the current live site:

- `url: 'https://hallskitchenhandbook.com'`
- `baseUrl: '/'`

If deployment changes again in the future, update these values to match the live host before publishing.
