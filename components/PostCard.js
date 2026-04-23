import Link from 'next/link';
import { useLanguage } from '../lib/i18n';
import { defaultLocale } from '../content/translations';

function formatDate(dateStr, locale) {
  if (!dateStr) return '';
  try {
    const d = new Date(dateStr);
    const lc = locale === 'zh' ? 'zh-CN' : locale;
    return d.toLocaleDateString(lc, { year: 'numeric', month: 'short', day: 'numeric' });
  } catch {
    return dateStr;
  }
}

export default function PostCard({ post, compact = false }) {
  const { locale, t } = useLanguage();
  const localeToUse = post.localized[locale] ? locale : post.originalLocale || defaultLocale;
  const loc = post.localized[localeToUse] || post.localized[post.availableLocales[0]];
  if (!loc) return null;

  const isTranslated = localeToUse !== locale;

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block card p-5 sm:p-6 hover:border-ocean/60 transition-colors"
    >
      <div className="flex items-center gap-2 text-xs font-mono text-slate-deep mb-3">
        <span>{formatDate(post.date, localeToUse)}</span>
        <span className="text-ink-line">/</span>
        <span>{t('common.readingTime')(loc.readingMinutes)}</span>
        {isTranslated && (
          <>
            <span className="text-ink-line">/</span>
            <span className="text-amber">
              {post.availableLocales.includes(locale)
                ? ''
                : `\u2192 ${localeToUse.toUpperCase()}`}
            </span>
          </>
        )}
      </div>

      <h3 className={`font-display ${compact ? 'text-lg' : 'text-xl'} font-semibold text-ivory group-hover:text-ocean transition-colors`}>
        {loc.title}
      </h3>

      {!compact && loc.excerpt && (
        <p className="mt-2 text-ivory/75 leading-relaxed">{loc.excerpt}</p>
      )}

      {post.tags && post.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="chip">#{tag}</span>
          ))}
        </div>
      )}
    </Link>
  );
}
