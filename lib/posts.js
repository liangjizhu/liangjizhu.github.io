import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts');
const LOCALES = ['en', 'es', 'zh'];

function readLocaleFile(slug, locale) {
  const file = path.join(POSTS_DIR, slug, `${locale}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, 'utf8');
  const parsed = matter(raw);
  return {
    title: parsed.data.title || slug,
    excerpt: parsed.data.excerpt || '',
    content: parsed.content.trim(),
  };
}

function computeReadingMinutes(text) {
  // Rough estimate: 220 English words per minute, or ~400 Chinese chars per minute.
  const words = text.trim().split(/\s+/).length;
  const chars = text.length;
  const fromWords = Math.ceil(words / 220);
  const fromChars = Math.ceil(chars / 400);
  return Math.max(1, Math.min(fromWords || 1, fromChars || 1));
}

export function getAllSlugs() {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);
}

export function getPostMeta(slug) {
  const metaFile = path.join(POSTS_DIR, slug, 'meta.json');
  if (!fs.existsSync(metaFile)) return null;
  const meta = JSON.parse(fs.readFileSync(metaFile, 'utf8'));

  const perLocale = {};
  const availableLocales = [];
  for (const loc of LOCALES) {
    const data = readLocaleFile(slug, loc);
    if (data) {
      perLocale[loc] = {
        title: data.title,
        excerpt: data.excerpt,
        readingMinutes: computeReadingMinutes(data.content),
      };
      availableLocales.push(loc);
    }
  }

  return {
    slug,
    date: meta.date || null,
    updated: meta.updated || null,
    tags: meta.tags || [],
    cover: meta.cover || null,
    originalLocale: meta.originalLocale || availableLocales[0] || 'en',
    availableLocales,
    localized: perLocale,
  };
}

export function getAllPostsMeta() {
  return getAllSlugs()
    .map((slug) => getPostMeta(slug))
    .filter(Boolean)
    .sort((a, b) => {
      const da = a.date ? new Date(a.date).getTime() : 0;
      const db = b.date ? new Date(b.date).getTime() : 0;
      return db - da;
    });
}

export function getPost(slug) {
  const meta = getPostMeta(slug);
  if (!meta) return null;
  const bodies = {};
  for (const loc of meta.availableLocales) {
    const data = readLocaleFile(slug, loc);
    if (data) bodies[loc] = data.content;
  }
  return { ...meta, bodies };
}

export function getAdjacentPosts(slug) {
  const all = getAllPostsMeta();
  const idx = all.findIndex((p) => p.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx < all.length - 1 ? all[idx + 1] : null,
    next: idx > 0 ? all[idx - 1] : null,
  };
}
