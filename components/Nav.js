import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useT } from '../lib/i18n';
import LanguageSwitcher from './LanguageSwitcher';

const links = [
  { href: '/', tKey: 'nav.home' },
  { href: '/blog', tKey: 'nav.blog' },
  { href: '/projects', tKey: 'nav.projects' },
  { href: '/about', tKey: 'nav.about' },
  { href: '/cv', tKey: 'nav.cv' },
];

function isActive(pathname, href) {
  if (href === '/') return pathname === '/' || pathname === '';
  return pathname.startsWith(href);
}

export default function Nav() {
  const t = useT();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-ink-line/60 bg-ink/80 backdrop-blur">
      <div className="container-page flex items-center justify-between py-3">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="font-display text-lg font-semibold tracking-tight hover:text-ocean transition-colors"
        >
          <span className="text-ocean">{'{'}</span>
          <span className="px-1 text-ivory">liang</span>
          <span className="text-ocean">{'}'}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                isActive(router.pathname, link.href)
                  ? 'text-ocean bg-ocean/10'
                  : 'text-slate-muted hover:text-ivory'
              }`}
            >
              {t(link.tKey)}
            </Link>
          ))}
          <div className="ml-3">
            <LanguageSwitcher compact />
          </div>
        </nav>

        <div className="flex md:hidden items-center gap-2">
          <LanguageSwitcher compact />
          <button
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="p-2 rounded-full border border-ink-line text-ivory hover:text-ocean"
          >
            {open ? <XMarkIcon className="w-5 h-5" /> : <Bars3Icon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-ink-line/60 bg-ink">
          <nav className="container-page py-3 flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`px-3 py-2 rounded-lg text-sm ${
                  isActive(router.pathname, link.href)
                    ? 'text-ocean bg-ocean/10'
                    : 'text-slate-muted hover:text-ivory'
                }`}
              >
                {t(link.tKey)}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
