# liangjizhu.github.io

Personal blog of **Liang Ji Zhu** / **朱良继** — Computer Science student, robotics
simulator engineer, trilingual wanderer between Madrid and Trondheim.

Built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/) and
[Framer Motion](https://www.framer.com/motion/). Statically exported and deployed to
GitHub Pages.

- **English** (default), **Español** and **简体中文** — fully translated UI.
- Blog posts are per-locale Markdown files.
- Site content (profile, projects, timeline) is centralised in `content/` so it is
  easy to customize without touching pages.

## Getting started

```bash
npm install
npm run dev
```

The site runs at <http://localhost:3000>.

To build the static export that is deployed to GitHub Pages:

```bash
npm run export
```

The result lands in `./out`.

## Project structure

```
.
├── components/           Reusable UI (Nav, Hero, PostCard, CVViewer, ...)
├── content/              Site data — the only place you usually need to edit
│   ├── site.js           Profile, socials, CV files, about-page content
│   ├── projects.js       Projects list (per-locale titles & summaries)
│   ├── translations.js   UI strings for EN / ES / ZH
│   └── posts/<slug>/     One folder per blog post
│       ├── meta.json     date, tags, originalLocale
│       ├── en.md         (optional) English version
│       ├── es.md         (optional) Spanish version
│       └── zh.md         (optional) Simplified Chinese version
├── lib/
│   ├── i18n.js           React context + useT() hook
│   └── posts.js          Markdown post loader (runs at build time)
├── pages/                Next.js routes (home, blog, projects, about, cv, 404)
├── public/               Static assets: CV PDFs, avatar, favicon
└── styles/globals.css    Tailwind + custom CSS
```

## Adding a new blog post

1. Create a folder: `content/posts/my-slug/`.
2. Add `meta.json`:

   ```json
   {
     "date": "2026-05-01",
     "tags": ["robotics", "notes"],
     "originalLocale": "en"
   }
   ```

3. Write any subset of `en.md`, `es.md`, `zh.md`. Each file starts with YAML
   frontmatter:

   ```md
   ---
   title: "Your title"
   excerpt: "One-sentence summary shown in lists."
   ---

   Your post content in **Markdown**. Code blocks, tables and links are supported.
   ```

4. Restart `npm run dev`. The post is auto-discovered and sorted by date.

Posts do not need to exist in all three languages. Readers see posts in their
current language, with others listed under "Also available in".

## Editing profile content

- **`content/site.js`** — name, email, socials, CV file paths, timeline,
  about-me story and values.
- **`content/projects.js`** — project cards with per-locale titles and summaries.
- **`content/translations.js`** — every UI string. Keys are identical across
  `en` / `es` / `zh`; edit values freely.

## CV PDFs

The three CV PDFs live in `public/`:

- `/cv2026.pdf` — English
- `/cv2026_es.pdf` — Spanish
- `/cv2026_zh.pdf` — Simplified Chinese

The `/cv` page serves the PDF that matches the current language.

## Deploying

`.github/workflows/deploy.yml` builds and deploys to GitHub Pages on every push
to `main`. Because the repo is named `liangjizhu.github.io`, the site is served
at the root — no `basePath` needed.

## License

Code is MIT-licensed. Personal content (text, photos, CV) is &copy; Liang Ji Zhu.
