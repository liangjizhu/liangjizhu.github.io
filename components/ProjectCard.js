import { FaGithub } from 'react-icons/fa';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { useLanguage, pickLocalized } from '../lib/i18n';

export default function ProjectCard({ project }) {
  const { locale, t } = useLanguage();
  const title = pickLocalized(project.title, locale);
  const summary = pickLocalized(project.summary, locale);

  return (
    <div className="card p-5 sm:p-6 flex flex-col h-full hover:border-ocean/60 transition-colors">
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="font-display text-xl font-semibold text-ivory">{title}</h3>
      </div>
      <p className="text-ivory/75 leading-relaxed flex-1">{summary}</p>
      {project.tags && project.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="chip">{tag}</span>
          ))}
        </div>
      )}
      <div className="mt-5 flex items-center gap-4 text-sm">
        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-ocean hover:text-seafoam font-medium"
          >
            {project.repo ? (
              <>
                <FaGithub size={14} />
                {t('projects.viewOnGithub')}
              </>
            ) : (
              <>
                {t('projects.viewOnGithub')}
                <ArrowTopRightOnSquareIcon className="w-4 h-4" />
              </>
            )}
          </a>
        )}
      </div>
    </div>
  );
}
