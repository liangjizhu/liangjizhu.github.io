import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPinIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../lib/i18n';
import site from '../content/site';

function TypingRotator({ phrases }) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!phrases || phrases.length === 0) return;
    const current = phrases[idx % phrases.length];
    let timeout;
    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), 1400);
    } else if (deleting && text === '') {
      setDeleting(false);
      setIdx((i) => i + 1);
    } else {
      const step = Array.from(current);
      const len = text.length + (deleting ? -1 : 1);
      timeout = setTimeout(
        () => setText(step.slice(0, Math.max(0, len)).join('')),
        deleting ? 30 : 55
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, idx, phrases]);

  return (
    <span className="text-ocean">
      {text}
      <span className="inline-block w-[2px] h-[1em] bg-ocean align-[-0.15em] ml-0.5 animate-blink" />
    </span>
  );
}

export default function Hero() {
  const { locale, t } = useLanguage();
  const phrases = t('hero.rotating');

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-50 pointer-events-none" />
      <div className="container-page relative pt-14 pb-16 sm:pt-20 sm:pb-20">
        <div className="grid md:grid-cols-[1fr,auto] gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 chip mb-5">
              <MapPinIcon className="w-3.5 h-3.5 text-ocean" />
              <span>{t('hero.location')}</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] tracking-tight text-balance">
              <span className="text-ivory">{t('hero.greeting')}</span>{' '}
              <span className="block sm:inline">
                <TypingRotator phrases={phrases} />
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-ivory/80 text-lg leading-relaxed text-balance">
              {t('hero.intro')}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/blog" className="btn btn-primary">
                {t('hero.ctaBlog')}
              </Link>
              <Link href="/projects" className="btn btn-ghost">
                {t('hero.ctaProjects')}
              </Link>
            </div>
            {locale !== 'en' && (
              <div className="mt-6 text-xs font-mono text-slate-deep">
                {locale === 'zh' ? site.nameZh : site.name}
                <span className="mx-2 text-ink-line">|</span>
                <a href={`mailto:${site.email}`} className="hover:text-ocean">
                  {site.email}
                </a>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="justify-self-center md:justify-self-end"
          >
            <div className="relative w-44 h-44 sm:w-52 sm:h-52">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-ocean/30 via-seafoam/20 to-amber/20 blur-xl" />
              <div className="relative w-full h-full rounded-full overflow-hidden border border-ink-line shadow-2xl shadow-black/40">
                <Image
                  src={site.avatar}
                  alt={site.name}
                  fill
                  sizes="208px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
