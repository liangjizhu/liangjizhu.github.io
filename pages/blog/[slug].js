import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import Layout from '../../components/Layout';
import { getAllSlugs, getPost, getAdjacentPosts } from '../../lib/posts';
import { useLanguage, defaultLocale } from '../../lib/i18n';
import { locales, localeLabels } from '../../content/translations';

export async function getStaticPaths() {
  return {
    paths: getAllSlugs().map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = getPost(params.slug);
  if (!post) return { notFound: true };
  const { prev, next } = getAdjacentPosts(params.slug);
  return { props: { post, prev, next } };
}

function formatDate(dateStr, locale) {
  if (!dateStr) return '';
  try {
    const lc = locale === 'zh' ? 'zh-CN' : locale;
    return new Date(dateStr).toLocaleDateString(lc, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

export default function BlogPost({ post, prev, next }) {
  const { locale, t, setLocale } = useLanguage();

  const localeToUse = post.availableLocales.includes(locale)
    ? locale
    : post.originalLocale || post.availableLocales[0] || defaultLocale;

  const body = post.bodies[localeToUse] || '';
  const info = post.localized[localeToUse];
  const isTranslated = localeToUse !== locale;

  const otherLocales = post.availableLocales.filter((l) => l !== localeToUse);

  return (
    <Layout title={info ? info.title : post.slug} description={info ? info.excerpt : ''}>
      <article className="container-page py-10 sm:py-14">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm font-mono text-slate-muted hover:text-ocean mb-6"
        >
          {`\u2190 ${t('blog.back')}`}
        </Link>

        <header className="mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-deep mb-3">
            <span>{formatDate(post.date, localeToUse)}</span>
            {info && (
              <>
                <span className="text-ink-line">/</span>
                <span>{t('common.readingTime')(info.readingMinutes)}</span>
              </>
            )}
            {post.updated && (
              <>
                <span className="text-ink-line">/</span>
                <span>{`${t('blog.updatedOn')} ${formatDate(post.updated, localeToUse)}`}</span>
              </>
            )}
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-semibold leading-tight text-ivory text-balance">
            {info ? info.title : post.slug}
          </h1>

          {info && info.excerpt && (
            <p className="mt-4 text-lg text-ivory/80 max-w-3xl">{info.excerpt}</p>
          )}

          {post.tags && post.tags.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="chip">#{tag}</span>
              ))}
            </div>
          )}

          {isTranslated && (
            <div className="mt-6 card p-4 text-sm text-slate-muted flex items-center gap-3">
              <span className="text-amber font-mono text-xs">
                {localeLabels[localeToUse]?.short}
              </span>
              <span>
                {`${t('blog.writtenIn')} ${localeLabels[localeToUse]?.native}.`}
              </span>
            </div>
          )}
        </header>

        <div className="prose-blog">
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {body}
          </ReactMarkdown>
        </div>

        {otherLocales.length > 0 && (
          <div className="mt-12 card p-5">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-deep mb-3">
              {t('blog.availableIn')}
            </div>
            <div className="flex flex-wrap gap-2">
              {otherLocales.map((lc) => (
                <button
                  key={lc}
                  onClick={() => locales.includes(lc) && setLocale(lc)}
                  className="chip hover:text-ocean hover:border-ocean/60 transition-colors"
                >
                  {localeLabels[lc]?.native}
                </button>
              ))}
            </div>
          </div>
        )}

        <nav className="mt-10 grid sm:grid-cols-2 gap-4">
          {prev ? (
            <Link href={`/blog/${prev.slug}`} className="card p-4 hover:border-ocean/60">
              <div className="text-xs font-mono text-slate-deep">{t('blog.prev')}</div>
              <div className="mt-1 text-ivory font-medium">
                {(prev.localized[locale] || prev.localized[prev.availableLocales[0]])?.title}
              </div>
            </Link>
          ) : <span />}
          {next ? (
            <Link href={`/blog/${next.slug}`} className="card p-4 hover:border-ocean/60 sm:text-right">
              <div className="text-xs font-mono text-slate-deep">{t('blog.next')}</div>
              <div className="mt-1 text-ivory font-medium">
                {(next.localized[locale] || next.localized[next.availableLocales[0]])?.title}
              </div>
            </Link>
          ) : <span />}
        </nav>
      </article>
    </Layout>
  );
}
