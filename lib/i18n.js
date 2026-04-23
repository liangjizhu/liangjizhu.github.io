import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { translations, locales, defaultLocale } from '../content/translations';

const LanguageContext = createContext({
  locale: defaultLocale,
  setLocale: () => {},
  t: (key) => key,
});

const STORAGE_KEY = 'ljz.locale';

function resolveInitialLocale() {
  if (typeof window === 'undefined') return defaultLocale;
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved && locales.includes(saved)) return saved;
  const nav = (window.navigator.language || '').toLowerCase();
  if (nav.startsWith('zh')) return 'zh';
  if (nav.startsWith('es')) return 'es';
  return defaultLocale;
}

function getByPath(obj, path) {
  return path.split('.').reduce((acc, key) => (acc && acc[key] != null ? acc[key] : undefined), obj);
}

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState(defaultLocale);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const next = resolveInitialLocale();
    setLocaleState(next);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch (_) {}
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale === 'zh' ? 'zh-CN' : locale;
    }
  }, [locale, hydrated]);

  const setLocale = useCallback((next) => {
    if (locales.includes(next)) setLocaleState(next);
  }, []);

  const t = useCallback(
    (key, fallback) => {
      const dict = translations[locale] || translations[defaultLocale];
      const value = getByPath(dict, key);
      if (value != null) return value;
      const enValue = getByPath(translations[defaultLocale], key);
      return enValue != null ? enValue : fallback != null ? fallback : key;
    },
    [locale]
  );

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, hydrated }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function useT() {
  return useContext(LanguageContext).t;
}

export function pickLocalized(obj, locale, fallbackLocale = defaultLocale) {
  if (!obj) return undefined;
  if (obj[locale] != null) return obj[locale];
  if (obj[fallbackLocale] != null) return obj[fallbackLocale];
  const firstKey = Object.keys(obj)[0];
  return firstKey ? obj[firstKey] : undefined;
}

export { locales, defaultLocale };
