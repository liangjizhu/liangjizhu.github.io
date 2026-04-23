import Link from 'next/link';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import PostCard from '../components/PostCard';
import ProjectCard from '../components/ProjectCard';
import { getAllPostsMeta } from '../lib/posts';
import projects from '../content/projects';
import { useT } from '../lib/i18n';

export async function getStaticProps() {
  const posts = getAllPostsMeta().slice(0, 3);
  return { props: { posts } };
}

export default function Home({ posts }) {
  const t = useT();
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  const nowItems = t('home.nowItems');

  return (
    <Layout>
      <Hero />

      <section className="container-page py-10">
        <SectionHeading
          eyebrow="// now"
          title={t('home.nowTitle')}
        />
        <ul className="grid sm:grid-cols-2 gap-3">
          {Array.isArray(nowItems) &&
            nowItems.map((item, idx) => (
              <li
                key={idx}
                className="card p-4 flex items-start gap-3"
              >
                <span className="mt-1 w-2 h-2 rounded-full bg-ocean shrink-0" />
                <span className="text-ivory/85 leading-relaxed">{item}</span>
              </li>
            ))}
        </ul>
      </section>

      <section className="container-page py-10">
        <SectionHeading
          eyebrow="// posts"
          title={t('home.latestPosts')}
          hint={t('home.latestPostsHint')}
          action={
            <Link href="/blog" className="text-sm link-underline font-mono">
              {`${t('home.viewAll')} \u2192`}
            </Link>
          }
        />
        {posts.length === 0 ? (
          <div className="card p-6 text-slate-muted">{t('blog.empty')}</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((p) => (
              <PostCard key={p.slug} post={p} compact />
            ))}
          </div>
        )}
      </section>

      <section className="container-page py-10">
        <SectionHeading
          eyebrow="// projects"
          title={t('home.featuredProjects')}
          hint={t('home.featuredProjectsHint')}
          action={
            <Link href="/projects" className="text-sm link-underline font-mono">
              {`${t('home.viewAll')} \u2192`}
            </Link>
          }
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
