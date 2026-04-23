import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useT } from '../lib/i18n';
import site from '../content/site';

const iconFor = (id) => {
  switch (id) {
    case 'github':
      return <FaGithub size={18} />;
    case 'linkedin':
      return <FaLinkedin size={18} />;
    case 'email':
      return <FaEnvelope size={18} />;
    default:
      return null;
  }
};

export default function Footer() {
  const t = useT();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-ink-line/60 bg-ink/60">
      <div className="container-page py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex items-center gap-4">
          <span className="font-display text-ivory">{site.name}</span>
          <span className="text-xs text-slate-deep font-mono">
            {`\u00A9 ${year} \u00B7 ${t('footer.rights')}`}
          </span>
        </div>

        <div className="flex items-center gap-4 text-slate-muted">
          {site.socials.map((s) => (
            <a
              key={s.id}
              href={s.href}
              target={s.id === 'email' ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="hover:text-ocean transition-colors"
            >
              {iconFor(s.id)}
            </a>
          ))}
          <a
            href={site.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono link-underline"
          >
            {t('footer.sourceCode')}
          </a>
        </div>
      </div>
      <div className="container-page pb-8 text-xs text-slate-deep font-mono">
        {t('footer.madeWith')}
      </div>
    </footer>
  );
}
