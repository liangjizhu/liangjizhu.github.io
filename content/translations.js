// UI translations for the blog interface.
// Add or edit strings here — keys must mirror across locales.

export const locales = ['en', 'es', 'zh'];
export const defaultLocale = 'en';

export const localeLabels = {
  en: { native: 'English', short: 'EN' },
  es: { native: 'Español', short: 'ES' },
  zh: { native: '简体中文', short: '中文' },
};

export const translations = {
  en: {
    site: {
      title: 'Liang Ji Zhu',
      tagline: 'Computer Science student, robotics tinkerer, trilingual wanderer.',
      description:
        'Personal blog and notes by Liang Ji Zhu — writing about software, robotics, and life between Madrid and Trondheim.',
    },
    nav: {
      home: 'Home',
      blog: 'Blog',
      projects: 'Projects',
      about: 'About',
      cv: 'CV',
    },
    hero: {
      greeting: 'Hi, I am Liang Ji —',
      rotating: [
        'a CS student.',
        'a robotics sim engineer.',
        'a trilingual wanderer.',
        'a curious builder.',
      ],
      intro:
        'I study Computer Science at UC3M Madrid and I\u2019m currently on Erasmus in Trondheim, Norway, working on underwater-robot simulation with Vortex NTNU. This is where I write about what I build, break, and learn.',
      ctaBlog: 'Read the blog',
      ctaProjects: 'See projects',
      location: 'Madrid \u00B7 Trondheim',
    },
    home: {
      latestPosts: 'Latest writing',
      latestPostsHint: 'Notes from the lab, the terminal, and life between two cities.',
      featuredProjects: 'Featured projects',
      featuredProjectsHint: 'A few things I\u2019ve built or am actively tinkering with.',
      nowTitle: 'What I\u2019m up to now',
      nowItems: [
        'Simulating underwater drones with ROS2, C++ and Stonefish.',
        'Exploring stereo camera and sonar data fusion.',
        'Studying distributed systems and compiler fundamentals.',
        'Keeping up my Norwegian survival phrases.',
      ],
      readMore: 'Read more',
      viewAll: 'View all',
    },
    blog: {
      title: 'Blog',
      subtitle: 'Thoughts, notes, and experiments — written in the language I\u2019m thinking in.',
      empty: 'No posts in this language yet. Try another language or check back soon.',
      minRead: 'min read',
      writtenIn: 'Written in',
      availableIn: 'Also available in',
      back: 'Back to blog',
      next: 'Next post',
      prev: 'Previous post',
      tags: 'Tags',
      publishedOn: 'Published on',
      updatedOn: 'Updated on',
    },
    projects: {
      title: 'Projects',
      subtitle: 'Selected work. Most of it lives on GitHub; demos and write-ups follow when I have time.',
      viewOnGithub: 'View on GitHub',
      readCaseStudy: 'Read post',
    },
    about: {
      title: 'About me',
      subtitle: 'The short version is on my CV. Here is a slightly longer one.',
      storyHeading: 'My story',
      valuesHeading: 'What I value',
      stackHeading: 'What I work with',
      languagesHeading: 'Languages I speak',
      timelineHeading: 'Timeline',
    },
    cv: {
      title: 'CV',
      subtitle: 'Choose a language. The PDF is the source of truth.',
      download: 'Download PDF',
      expand: 'Expand',
      close: 'Close',
      openInTab: 'Open in new tab',
    },
    footer: {
      madeWith: 'Built with Next.js and a lot of tea.',
      sourceCode: 'Source on GitHub',
      rights: 'All rights reserved.',
    },
    language: {
      switch: 'Language',
    },
    notFound: {
      title: 'This page drifted away',
      subtitle: 'The link you followed may be broken or the page may have been moved.',
      home: 'Go home',
    },
    common: {
      readingTime: (min) => `${min} min read`,
    },
  },

  es: {
    site: {
      title: 'Liang Ji Zhu',
      tagline: 'Estudiante de Inform\u00E1tica, cacharreador de rob\u00F3tica, viajero triling\u00FCe.',
      description:
        'Blog personal y notas de Liang Ji Zhu — software, rob\u00F3tica y la vida entre Madrid y Trondheim.',
    },
    nav: {
      home: 'Inicio',
      blog: 'Blog',
      projects: 'Proyectos',
      about: 'Sobre m\u00ED',
      cv: 'CV',
    },
    hero: {
      greeting: 'Hola, soy Liang Ji —',
      rotating: [
        'estudiante de Inform\u00E1tica.',
        'ingeniero de simulaci\u00F3n rob\u00F3tica.',
        'viajero triling\u00FCe.',
        'constructor curioso.',
      ],
      intro:
        'Estudio Ingenier\u00EDa Inform\u00E1tica en la UC3M de Madrid y ahora mismo estoy de Erasmus en Trondheim (Noruega) trabajando en simulaci\u00F3n de drones submarinos con Vortex NTNU. Aqu\u00ED escribo sobre lo que construyo, lo que rompo y lo que aprendo por el camino.',
      ctaBlog: 'Leer el blog',
      ctaProjects: 'Ver proyectos',
      location: 'Madrid \u00B7 Trondheim',
    },
    home: {
      latestPosts: '\u00DAltimas entradas',
      latestPostsHint: 'Notas del laboratorio, de la terminal y de vivir entre dos ciudades.',
      featuredProjects: 'Proyectos destacados',
      featuredProjectsHint: 'Algunas cosas que he construido o que sigo trasteando.',
      nowTitle: 'En qu\u00E9 ando ahora',
      nowItems: [
        'Simulando drones submarinos con ROS2, C++ y Stonefish.',
        'Investigando la fusi\u00F3n de datos de c\u00E1mara est\u00E9reo y s\u00F3nar.',
        'Repasando sistemas distribuidos y fundamentos de compiladores.',
        'Manteniendo a flote mis frases de supervivencia en noruego.',
      ],
      readMore: 'Leer m\u00E1s',
      viewAll: 'Ver todo',
    },
    blog: {
      title: 'Blog',
      subtitle: 'Pensamientos, notas y experimentos — escritos en el idioma en el que pienso.',
      empty: 'A\u00FAn no hay entradas en este idioma. Prueba con otro o vuelve pronto.',
      minRead: 'min de lectura',
      writtenIn: 'Escrito en',
      availableIn: 'Tambi\u00E9n disponible en',
      back: 'Volver al blog',
      next: 'Siguiente entrada',
      prev: 'Entrada anterior',
      tags: 'Etiquetas',
      publishedOn: 'Publicado el',
      updatedOn: 'Actualizado el',
    },
    projects: {
      title: 'Proyectos',
      subtitle: 'Trabajos seleccionados. La mayor\u00EDa vive en GitHub; los art\u00EDculos llegar\u00E1n cuando el tiempo lo permita.',
      viewOnGithub: 'Ver en GitHub',
      readCaseStudy: 'Leer entrada',
    },
    about: {
      title: 'Sobre m\u00ED',
      subtitle: 'La versi\u00F3n corta est\u00E1 en mi CV. Esta es un poco m\u00E1s larga.',
      storyHeading: 'Mi historia',
      valuesHeading: 'Lo que valoro',
      stackHeading: 'Con qu\u00E9 trabajo',
      languagesHeading: 'Idiomas que hablo',
      timelineHeading: 'Cronolog\u00EDa',
    },
    cv: {
      title: 'CV',
      subtitle: 'Elige un idioma. El PDF es la fuente oficial.',
      download: 'Descargar PDF',
      expand: 'Expandir',
      close: 'Cerrar',
      openInTab: 'Abrir en otra pesta\u00F1a',
    },
    footer: {
      madeWith: 'Hecho con Next.js y mucho t\u00E9.',
      sourceCode: 'C\u00F3digo en GitHub',
      rights: 'Todos los derechos reservados.',
    },
    language: {
      switch: 'Idioma',
    },
    notFound: {
      title: 'Esta p\u00E1gina se ha ido a la deriva',
      subtitle: 'El enlace puede estar roto o la p\u00E1gina se ha movido.',
      home: 'Ir al inicio',
    },
    common: {
      readingTime: (min) => `${min} min de lectura`,
    },
  },

  zh: {
    site: {
      title: '\u6731\u826F\u7EE7',
      tagline: '\u8BA1\u7B97\u673A\u5B66\u751F\uFF0C\u673A\u5668\u4EBA\u4EFF\u771F\u7231\u597D\u8005\uFF0C\u4E09\u8BED\u884C\u8005\u3002',
      description:
        '\u6731\u826F\u7EE7\u7684\u4E2A\u4EBA\u535A\u5BA2\u4E0E\u7B14\u8BB0\u2014\u2014\u8BB0\u5F55\u8F6F\u4EF6\u3001\u673A\u5668\u4EBA\uFF0C\u4EE5\u53CA\u5FAA\u8FF9\u9A6C\u5FB7\u91CC\u4E0E\u7279\u9686\u8D6B\u59C6\u4E4B\u95F4\u7684\u751F\u6D3B\u3002',
    },
    nav: {
      home: '\u9996\u9875',
      blog: '\u535A\u5BA2',
      projects: '\u9879\u76EE',
      about: '\u5173\u4E8E',
      cv: '\u7B80\u5386',
    },
    hero: {
      greeting: '\u4F60\u597D\uFF0C\u6211\u662F\u826F\u7EE7\u2014',
      rotating: [
        '\u8BA1\u7B97\u673A\u5B66\u751F\u3002',
        '\u673A\u5668\u4EBA\u4EFF\u771F\u5DE5\u7A0B\u5E08\u3002',
        '\u4E09\u8BED\u884C\u8005\u3002',
        '\u7231\u6298\u817E\u7684\u6784\u9020\u8005\u3002',
      ],
      intro:
        '\u6211\u5728\u9A6C\u5FB7\u91CC\u5361\u6D1B\u65AF\u4E09\u4E16\u5927\u5B66\uFF08UC3M\uFF09\u5C31\u8BFB\u8BA1\u7B97\u673A\u4E13\u4E1A\uFF0C\u76EE\u524D\u6B63\u5728\u632A\u5A01\u7279\u9686\u8D6B\u59C6\u53C2\u52A0 Erasmus \u4EA4\u6362\u9879\u76EE\uFF0C\u4E0E Vortex NTNU \u4E00\u8D77\u505A\u6C34\u4E0B\u65E0\u4EBA\u673A\u4EFF\u771F\u3002\u8FD9\u91CC\u8BB0\u5F55\u6211\u6784\u5EFA\u3001\u7834\u574F\u548C\u5B66\u5230\u7684\u4E00\u5207\u3002',
      ctaBlog: '\u9605\u8BFB\u535A\u5BA2',
      ctaProjects: '\u67E5\u770B\u9879\u76EE',
      location: '\u9A6C\u5FB7\u91CC \u00B7 \u7279\u9686\u8D6B\u59C6',
    },
    home: {
      latestPosts: '\u6700\u65B0\u6587\u7AE0',
      latestPostsHint: '\u6765\u81EA\u5B9E\u9A8C\u5BA4\u3001\u7EC8\u7AEF\u4EE5\u53CA\u4E24\u5EA7\u57CE\u5E02\u751F\u6D3B\u7684\u7B14\u8BB0\u3002',
      featuredProjects: '\u7CBE\u9009\u9879\u76EE',
      featuredProjectsHint: '\u90A3\u4E9B\u6B63\u5728\u6784\u5EFA\u6216\u4ECD\u5728\u6298\u817E\u7684\u5C0F\u4E1C\u897F\u3002',
      nowTitle: '\u6700\u8FD1\u5728\u5FD9',
      nowItems: [
        '\u4F7F\u7528 ROS2\u3001C++ \u548C Stonefish \u4EFF\u771F\u6C34\u4E0B\u65E0\u4EBA\u673A\u3002',
        '\u7814\u7A76\u7ACB\u4F53\u76F8\u673A\u4E0E\u58F0\u7EB3\u6570\u636E\u7684\u878D\u5408\u3002',
        '\u590D\u4E60\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E0E\u7F16\u8BD1\u539F\u7406\u7684\u57FA\u7840\u77E5\u8BC6\u3002',
        '\u7EE7\u7EED\u7EC3\u4E60\u632A\u5A01\u8BED\u7684\u65E5\u5E38\u7528\u8BED\u3002',
      ],
      readMore: '\u9605\u8BFB\u5168\u6587',
      viewAll: '\u67E5\u770B\u5168\u90E8',
    },
    blog: {
      title: '\u535A\u5BA2',
      subtitle: '\u60F3\u6CD5\u3001\u7B14\u8BB0\u4E0E\u5C0F\u5B9E\u9A8C\u2014\u2014\u7528\u5F53\u4E0B\u601D\u8003\u7684\u8BED\u8A00\u4E66\u5199\u3002',
      empty: '\u76EE\u524D\u8FD8\u6CA1\u6709\u8BE5\u8BED\u8A00\u7684\u6587\u7AE0\u3002\u8BF7\u5207\u6362\u8BED\u8A00\u6216\u7A0D\u540E\u518D\u6765\u3002',
      minRead: '\u5206\u949F\u9605\u8BFB',
      writtenIn: '\u64B0\u5199\u8BED\u8A00\uFF1A',
      availableIn: '\u5176\u4ED6\u8BED\u8A00\uFF1A',
      back: '\u8FD4\u56DE\u535A\u5BA2',
      next: '\u4E0B\u4E00\u7BC7',
      prev: '\u4E0A\u4E00\u7BC7',
      tags: '\u6807\u7B7E',
      publishedOn: '\u53D1\u5E03\u4E8E',
      updatedOn: '\u66F4\u65B0\u4E8E',
    },
    projects: {
      title: '\u9879\u76EE',
      subtitle: '\u7CBE\u9009\u4F5C\u54C1\u3002\u7EDD\u5927\u591A\u6570\u4EE3\u7801\u5B58\u4E8E GitHub\uFF0C\u8BE6\u7EC6\u8BB0\u5F55\u4F1A\u9646\u7EED\u8865\u4E0A\u3002',
      viewOnGithub: '\u67E5\u770B GitHub',
      readCaseStudy: '\u9605\u8BFB\u6587\u7AE0',
    },
    about: {
      title: '\u5173\u4E8E\u6211',
      subtitle: '\u7B80\u77ED\u7248\u5728\u7B80\u5386\u4E2D\uFF0C\u8FD9\u91CC\u662F\u7565\u957F\u7248\u3002',
      storyHeading: '\u6211\u7684\u6545\u4E8B',
      valuesHeading: '\u6211\u6240\u91CD\u89C6\u7684',
      stackHeading: '\u5E38\u7528\u5DE5\u5177',
      languagesHeading: '\u4F1A\u8BF4\u7684\u8BED\u8A00',
      timelineHeading: '\u65F6\u95F4\u7EBF',
    },
    cv: {
      title: '\u7B80\u5386',
      subtitle: '\u9009\u62E9\u8BED\u8A00\uFF0CPDF \u4E3A\u51C6\u3002',
      download: '\u4E0B\u8F7D PDF',
      expand: '\u5168\u5C4F',
      close: '\u5173\u95ED',
      openInTab: '\u5728\u65B0\u6807\u7B7E\u9875\u6253\u5F00',
    },
    footer: {
      madeWith: '\u4F7F\u7528 Next.js \u548C\u4E00\u5927\u676F\u8336\u6784\u5EFA\u3002',
      sourceCode: 'GitHub \u6E90\u7801',
      rights: '\u7248\u6743\u6240\u6709\u3002',
    },
    language: {
      switch: '\u8BED\u8A00',
    },
    notFound: {
      title: '\u8FD9\u4E2A\u9875\u9762\u8D70\u4E22\u4E86',
      subtitle: '\u94FE\u63A5\u53EF\u80FD\u5DF2\u5931\u6548\uFF0C\u6216\u9875\u9762\u5DF2\u88AB\u79FB\u52A8\u3002',
      home: '\u8FD4\u56DE\u9996\u9875',
    },
    common: {
      readingTime: (min) => `${min} \u5206\u949F\u9605\u8BFB`,
    },
  },
};
