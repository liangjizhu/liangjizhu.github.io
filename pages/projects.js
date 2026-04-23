import Layout from '../components/Layout';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import projects from '../content/projects';
import { useT } from '../lib/i18n';

export default function ProjectsPage() {
  const t = useT();
  return (
    <Layout title={t('projects.title')}>
      <section className="container-page py-10 sm:py-14">
        <SectionHeading
          eyebrow="// projects"
          title={t('projects.title')}
          hint={t('projects.subtitle')}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
