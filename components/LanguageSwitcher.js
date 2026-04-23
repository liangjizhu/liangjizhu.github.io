import { useLanguage } from '../lib/i18n';
import { locales, localeLabels } from '../content/translations';

export default function LanguageSwitcher({ compact = false }) {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t('language.switch')}
      className="inline-flex items-center gap-1 p-1 rounded-full border border-ink-line bg-ink-soft/70 backdrop-blur"
    >
      {locales.map((code) => {
        const active = code === locale;
        return (
          <button
            key={code}
            onClick={() => setLocale(code)}
            aria-pressed={active}
            aria-label={localeLabels[code].native}
            className={`text-xs font-mono px-2.5 py-1 rounded-full transition-colors ${
              active
                ? 'bg-ocean text-ink font-semibold'
                : 'text-slate-muted hover:text-ivory'
            }`}
          >
            {compact ? localeLabels[code].short : localeLabels[code].native}
          </button>
        );
      })}
    </div>
  );
}
