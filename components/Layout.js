import Head from 'next/head';
import Nav from './Nav';
import Footer from './Footer';
import { useLanguage } from '../lib/i18n';
import site from '../content/site';
import { translations } from '../content/translations';

export default function Layout({ children, title, description, noIndex }) {
  const { locale } = useLanguage();
  const dict = translations[locale] || translations.en;
  const siteTitle = dict.site.title;
  const siteDescription = description || dict.site.description;
  const pageTitle = title ? `${title} \u00B7 ${siteTitle}` : `${siteTitle} \u2014 ${dict.site.tagline}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={site.ogImage} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        {noIndex && <meta name="robots" content="noindex" />}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
