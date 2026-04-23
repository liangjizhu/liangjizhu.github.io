import Layout from '../../components/Layout';
import SectionHeading from '../../components/SectionHeading';
import PostCard from '../../components/PostCard';
import { getAllPostsMeta } from '../../lib/posts';
import { useT, useLanguage } from '../../lib/i18n';

export async function getStaticProps() {
  return { props: { posts: getAllPostsMeta() } };
}

export default function BlogIndex({ posts }) {
  const t = useT();
  const { locale } = useLanguage();

  const inLocale = posts.filter((p) => p.availableLocales.includes(locale));
  const othersOnly = posts.filter((p) => !p.availableLocales.includes(locale));

  return (
    <Layout title={t('blog.title')}>
      <section className="container-page py-10 sm:py-14">
        <SectionHeading
          eyebrow="// blog"
          title={t('blog.title')}
          hint={t('blog.subtitle')}
        />

        {inLocale.length === 0 && othersOnly.length === 0 && (
          <div className="card p-6 text-slate-muted">{t('blog.empty')}</div>
        )}

        {inLocale.length > 0 && (
          <div className="grid md:grid-cols-2 gap-4">
            {inLocale.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        )}

        {othersOnly.length > 0 && (
          <div className="mt-10">
            <h3 className="text-sm font-mono uppercase tracking-widest text-slate-deep mb-3">
              {t('blog.availableIn')}
            </h3>
            <div className="grid md:grid-cols-2 gap-4 opacity-90">
              {othersOnly.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
}
