import Layout from '../components/Layout';
import SectionHeading from '../components/SectionHeading';
import { useLanguage, pickLocalized } from '../lib/i18n';
import site from '../content/site';

export default function AboutPage() {
  const { locale, t } = useLanguage();

  const story = pickLocalized(site.about.story, locale);
  const values = pickLocalized(site.about.values, locale);

  const labelKey = locale === 'es' ? 'labelEs' : locale === 'zh' ? 'labelZh' : 'labelEn';
  const levelKey = locale === 'es' ? 'levelEs' : locale === 'zh' ? 'levelZh' : 'levelEn';
  const titleKey = locale === 'es' ? 'titleEs' : locale === 'zh' ? 'titleZh' : 'titleEn';
  const textKey = locale === 'es' ? 'textEs' : locale === 'zh' ? 'textZh' : 'textEn';

  return (
    <Layout title={t('about.title')}>
      <section className="container-page py-10 sm:py-14">
        <SectionHeading eyebrow="// about" title={t('about.title')} hint={t('about.subtitle')} />

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 card p-6 sm:p-8 space-y-4">
            <h3 className="font-display text-xl text-ivory">{t('about.storyHeading')}</h3>
            {Array.isArray(story) && story.map((p, i) => (
              <p key={i} className="text-ivory/85 leading-relaxed">{p}</p>
            ))}
          </div>

          <div className="card p-6 sm:p-8">
            <h3 className="font-display text-xl text-ivory mb-4">{t('about.languagesHeading')}</h3>
            <ul className="space-y-3">
              {site.about.languages.map((l) => (
                <li key={l.code} className="flex items-center justify-between gap-3">
                  <span className="text-ivory/90">{l[labelKey]}</span>
                  <span className="chip">{l[levelKey]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {Array.isArray(values) && values.map((v, i) => (
            <div key={i} className="card p-5 sm:p-6">
              <div className="text-xs font-mono text-ocean mb-2">{`0${i + 1} /`}</div>
              <h4 className="font-display text-lg text-ivory mb-1">{v.title}</h4>
              <p className="text-ivory/80 leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <SectionHeading eyebrow="// stack" title={t('about.stackHeading')} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {site.about.stack.map((group) => (
              <div key={group.group} className="card p-5">
                <h4 className="text-sm font-mono uppercase tracking-widest text-slate-deep mb-3">
                  {group.group}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="chip">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <SectionHeading eyebrow="// timeline" title={t('about.timelineHeading')} />
          <ol className="relative border-l border-ink-line pl-6 space-y-6">
            {site.about.timeline.map((item, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-[33px] top-1 w-3 h-3 rounded-full bg-ocean shadow-[0_0_0_4px_rgba(0,168,232,0.15)]" />
                <div className="text-xs font-mono text-ocean">{item.year}</div>
                <div className="font-display text-lg text-ivory">{item[titleKey]}</div>
                <p className="text-ivory/80 leading-relaxed">{item[textKey]}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </Layout>
  );
}
