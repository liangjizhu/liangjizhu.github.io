import { useState } from 'react';
import { useLanguage } from '../lib/i18n';
import site from '../content/site';
import { ArrowTopRightOnSquareIcon, ArrowDownTrayIcon, ArrowsPointingOutIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function CVViewer() {
  const { locale, t } = useLanguage();
  const file = site.cvFiles[locale] || site.cvFiles.en;
  const [expanded, setExpanded] = useState(false);

  const Toolbar = () => (
    <div className="flex flex-wrap items-center gap-2">
      <a href={file} download className="btn btn-primary">
        <ArrowDownTrayIcon className="w-4 h-4" />
        {t('cv.download')}
      </a>
      <a href={file} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
        <ArrowTopRightOnSquareIcon className="w-4 h-4" />
        {t('cv.openInTab')}
      </a>
      <button
        onClick={() => setExpanded((e) => !e)}
        className="btn btn-ghost"
      >
        {expanded ? <XMarkIcon className="w-4 h-4" /> : <ArrowsPointingOutIcon className="w-4 h-4" />}
        {expanded ? t('cv.close') : t('cv.expand')}
      </button>
    </div>
  );

  return (
    <div>
      <Toolbar />
      <div
        className={
          expanded
            ? 'fixed inset-0 z-50 bg-ink/95 p-4 flex flex-col'
            : 'mt-4'
        }
      >
        {expanded && (
          <div className="mb-3 flex justify-end">
            <button onClick={() => setExpanded(false)} className="btn btn-ghost">
              <XMarkIcon className="w-4 h-4" />
              {t('cv.close')}
            </button>
          </div>
        )}
        <iframe
          key={file}
          src={file}
          title="CV PDF"
          className={`w-full rounded-xl border border-ink-line bg-ink-soft ${
            expanded ? 'flex-1' : 'h-[70vh] mt-0'
          }`}
        />
      </div>
    </div>
  );
}
