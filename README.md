# namangoyal.me

This repository contains the source of my website, [namangoyal.me](https://namangoyal.me).
It is built with [Astro](https://astro.build) and deployed to GitHub Pages every time something is pushed to `main`.

## Updating the content

All the content is in `src/content`. Each page reads from one of these files.

| File | What it holds |
|---|---|
| `pages/home.md` | The text on the home page |
| `news.yaml` | The news list on the home page |
| `education.yaml` | Education, used on the home page and the CV page |
| `experience.yaml` | Work and leadership roles |
| `projects.yaml` | Selected projects on the experience page |
| `papers.yaml` | Papers on the research page |
| `research.yaml` | Research projects on the research page |
| `achievements.yaml` | Everything on the achievements page |
| `skills.yaml` | The skills list on the CV page |
| `puzzles.yaml` | The Jane Street puzzle table on the writing page |
| `writing/` | Posts. Each post is a folder with an `index.md` and its images |

Entries show up in the same order as in the file.
Short text in the YAML files can use `**bold**`, `*italic*`, `[links](/research/)` and HTML such as `<sup>`.
The name, email, links and SEO text are in `src/site.config.ts`.

To add a post, make a new folder in `src/content/writing/` with an `index.md` like the existing one.
A post with `draft: true` only shows up when running locally.
To link a puzzle to its write-up, set `post:` in `puzzles.yaml` to the folder name.

The CV is `public/Naman_Goyal_CV.pdf`.
After changing the photo, run `node scripts/og.mjs` to rebuild the link preview image.

## Running it locally

```
npm install
npm run dev
```

`npm run build` checks every content file against the schemas in `src/content.config.ts` and fails if something is missing or has the wrong type, so a mistake does not reach the live site.
