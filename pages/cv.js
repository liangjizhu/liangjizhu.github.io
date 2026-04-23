import Layout from '../components/Layout';
import SectionHeading from '../components/SectionHeading';
import CVViewer from '../components/CVViewer';
import { useT } from '../lib/i18n';

export default function CVPage() {
  const t = useT();
  return (
    <Layout title={t('cv.title')}>
      <section className="container-page py-10 sm:py-14">
        <SectionHeading
          eyebrow="// cv"
          title={t('cv.title')}
          hint={t('cv.subtitle')}
        />
        <div className="card p-5 sm:p-6">
          <CVViewer />
        </div>
      </section>
    </Layout>
  );
}
