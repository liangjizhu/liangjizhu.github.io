import Link from 'next/link';
import Layout from '../components/Layout';
import { useT } from '../lib/i18n';

export default function NotFound() {
  const t = useT();
  return (
    <Layout title="404" noIndex>
      <section className="container-page py-24 text-center">
        <div className="text-xs font-mono text-ocean mb-4">404</div>
        <h1 className="font-display text-4xl sm:text-5xl text-ivory mb-4">
          {t('notFound.title')}
        </h1>
        <p className="text-slate-muted max-w-md mx-auto">{t('notFound.subtitle')}</p>
        <div className="mt-8">
          <Link href="/" className="btn btn-primary">
            {t('notFound.home')}
          </Link>
        </div>
      </section>
    </Layout>
  );
}
