// Global site configuration.
// Edit this file to customize profile, socials, CV links, and timeline.

const site = {
  name: 'Liang Ji Zhu',
  nameZh: '\u6731\u826F\u7EE7',
  handle: 'liangjizhu',
  email: 'liangjizhu29@gmail.com',
  url: 'https://liangjizhu.github.io',
  avatar: '/IMG_0521.jpg',
  ogImage: '/IMG_0521.jpg',
  locations: ['Madrid, Spain', 'Trondheim, Norway'],

  socials: [
    { id: 'github', label: 'GitHub', href: 'https://github.com/liangjizhu' },
    { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/liangjizhu' },
    { id: 'email', label: 'Email', href: 'mailto:liangjizhu29@gmail.com' },
  ],

  repoUrl: 'https://github.com/liangjizhu/liangjizhu.github.io',

  cvFiles: {
    en: '/cv2026.pdf',
    es: '/cv2026_es.pdf',
    zh: '/cv2026_zh.pdf',
  },

  // The "about" story, translated per locale.
  about: {
    story: {
      en: [
        "I grew up in Madrid, studied Computer Science at UC3M, and I\u2019m currently on an Erasmus year at NTNU in Trondheim, Norway.",
        "I care about software that is reliable, readable, and honest about what it does. I like systems you can reason about, code you can re-read six months later, and teammates you can ship with.",
        "Outside of coursework I contribute to Vortex NTNU\u2019s underwater-robot simulation stack, work through distributed-systems and compilers material on the side, and play esports competitively with Iberian Raiders.",
      ],
      es: [
        "Crec\u00ED en Madrid, estudio Ingenier\u00EDa Inform\u00E1tica en la UC3M y este curso estoy de Erasmus en NTNU, Trondheim (Noruega).",
        "Me importa el software fiable, legible y honesto con lo que hace. Me gustan los sistemas sobre los que se puede razonar, el c\u00F3digo que se entiende medio a\u00F1o despu\u00E9s y los equipos con los que se puede entregar de verdad.",
        "Fuera de las asignaturas colaboro con Vortex NTNU en su pila de simulaci\u00F3n de robots submarinos, repaso sistemas distribuidos y compiladores por mi cuenta, y compito en esports con Iberian Raiders.",
      ],
      zh: [
        "\u6211\u5728\u9A6C\u5FB7\u91CC\u957F\u5927\uFF0C\u5728\u5361\u6D1B\u65AF\u4E09\u4E16\u5927\u5B66\uFF08UC3M\uFF09\u4E3B\u4FEE\u8BA1\u7B97\u673A\u4E13\u4E1A\uFF0C\u76EE\u524D\u6B63\u5728\u632A\u5A01\u79D1\u6280\u5927\u5B66\uFF08NTNU\uFF09\u4EA4\u6362\u5B66\u4E60\u3002",
        "\u6211\u5728\u610F\u4EE3\u7801\u662F\u5426\u53EF\u9760\u3001\u6613\u8BFB\u3001\u8D28\u671F\u8BDA\u5B9E\u3002\u6211\u559C\u6B22\u53EF\u4EE5\u63A8\u5BFC\u7684\u7CFB\u7EDF\uFF0C\u559C\u6B22\u534A\u5E74\u540E\u91CD\u8BFB\u4ECD\u80FD\u770B\u61C2\u7684\u4EE3\u7801\uFF0C\u559C\u6B22\u80FD\u4E00\u8D77\u4EA4\u4ED8\u7684\u961F\u53CB\u3002",
        "\u8BFE\u7A0B\u4E4B\u5916\uFF0C\u6211\u53C2\u4E0E Vortex NTNU \u7684\u6C34\u4E0B\u673A\u5668\u4EBA\u4EFF\u771F\u6846\u67B6\u5F00\u53D1\uFF0C\u81EA\u5B66\u5206\u5E03\u5F0F\u7CFB\u7EDF\u548C\u7F16\u8BD1\u539F\u7406\uFF0C\u5E76\u4F5C\u4E3A Iberian Raiders \u7684\u9009\u624B\u53C2\u52A0\u7535\u7ADE\u8054\u8D5B\u3002",
      ],
    },

    values: {
      en: [
        { title: 'Reliability over cleverness', text: 'I\u2019d rather ship something simple that holds than something clever that surprises you at 3am.' },
        { title: 'Clarity for future me', text: 'Code, commits and docs should make sense to the teammate I\u2019ll be in six months.' },
        { title: 'Ask good questions', text: 'Debugging, research and exchange life all reward the same skill: asking a sharper question.' },
        { title: 'Show up for the team', text: 'Volunteering at UKA and playing in Iberian Raiders taught me the same thing \u2014 reliability compounds.' },
      ],
      es: [
        { title: 'Fiable antes que ingenioso', text: 'Prefiero entregar algo simple que aguante a algo brillante que falle a las tres de la ma\u00F1ana.' },
        { title: 'Claridad para mi yo futuro', text: 'El c\u00F3digo, los commits y la documentaci\u00F3n deben entenderse dentro de medio a\u00F1o.' },
        { title: 'Hacer mejores preguntas', text: 'Depurar, investigar y vivir un Erasmus recompensan lo mismo: afinar la pregunta.' },
        { title: 'Estar ah\u00ED para el equipo', text: 'Lo aprend\u00ED siendo voluntario en UKA y jugando con Iberian Raiders \u2014 la fiabilidad suma.' },
      ],
      zh: [
        { title: '\u53EF\u9760\u6BD4\u806A\u660E\u91CD\u8981', text: '\u6BD4\u8D77\u5728\u51CC\u6668\u4E09\u70B9\u8BA9\u4EBA\u5403\u60CA\u7684\u7CBE\u5999\u65B9\u6848\uFF0C\u6211\u5B81\u613F\u4EA4\u4ED8\u4E00\u4E2A\u7B80\u5355\u3001\u7A33\u5B9A\u7684\u65B9\u6848\u3002' },
        { title: '\u4E3A\u672A\u6765\u7684\u81EA\u5DF1\u5199\u6E05\u695A', text: '\u4EE3\u7801\u3001\u63D0\u4EA4\u4FE1\u606F\u4E0E\u6587\u6863\u90FD\u5E94\u8BE5\u8BA9\u534A\u5E74\u540E\u7684\u81EA\u5DF1\u80FD\u770B\u61C2\u3002' },
        { title: '\u63D0\u95EE\u66F4\u597D\u7684\u95EE\u9898', text: '\u8C03\u8BD5\u3001\u7814\u7A76\u4E0E\u4EA4\u6362\u751F\u6D3B\u5956\u52B1\u7684\u662F\u540C\u4E00\u79CD\u80FD\u529B\uFF1A\u5C06\u95EE\u9898\u95EE\u5F97\u66F4\u51C6\u3002' },
        { title: '\u4E3A\u56E2\u961F\u5145\u5F53\u6267\u884C\u8005', text: '\u5728 UKA \u505A\u5FD7\u613F\u8005\uFF0C\u5728 Iberian Raiders \u6253\u6BD4\u8D5B\uFF0C\u6559\u6211\u7684\u662F\u540C\u4E00\u4EF6\u4E8B\uFF1A\u53EF\u9760\u662F\u590D\u5229\u7684\u3002' },
      ],
    },

    stack: [
      { group: 'Languages', items: ['C++', 'Python', 'C', 'JavaScript', 'Bash'] },
      { group: 'Robotics', items: ['ROS2', 'Stonefish', 'OpenCV'] },
      { group: 'Systems', items: ['Linux', 'Git', 'Docker', 'gdb'] },
      { group: 'Areas', items: ['Algorithms', 'Distributed systems', 'Simulation', 'Computer vision'] },
    ],

    languages: [
      { code: 'zh', labelEn: 'Chinese (Mandarin)', labelEs: 'Chino (mandar\u00EDn)', labelZh: '\u4E2D\u6587\uFF08\u666E\u901A\u8BDD\uFF09', levelEn: 'Native', levelEs: 'Nativo', levelZh: '\u6BCD\u8BED' },
      { code: 'es', labelEn: 'Spanish', labelEs: 'Espa\u00F1ol', labelZh: '\u897F\u73ED\u7259\u8BED', levelEn: 'Native / bilingual', levelEs: 'Nativo / biling\u00FCe', levelZh: '\u6BCD\u8BED / \u53CC\u8BED\u6C34\u5E73' },
      { code: 'en', labelEn: 'English', labelEs: 'Ingl\u00E9s', labelZh: '\u82F1\u8BED', levelEn: 'B2 certified', levelEs: 'B2 certificado', levelZh: 'B2 \u8BC1\u4E66' },
    ],

    timeline: [
      {
        year: '2025\u20132026',
        titleEn: 'Erasmus \u00B7 NTNU, Trondheim',
        titleEs: 'Erasmus \u00B7 NTNU, Trondheim',
        titleZh: 'Erasmus \u4EA4\u6362 \u00B7 \u632A\u5A01\u79D1\u6280\u5927\u5B66',
        textEn: 'Studying at NTNU and building underwater-robot simulation with Vortex NTNU (ROS2, C++, Stonefish).',
        textEs: 'Estudio en NTNU y desarrollo simulaci\u00F3n de robots submarinos con Vortex NTNU (ROS2, C++, Stonefish).',
        textZh: '\u5728 NTNU \u5B66\u4E60\uFF0C\u5E76\u4E0E Vortex NTNU \u5408\u4F5C\u5F00\u53D1\u6C34\u4E0B\u673A\u5668\u4EBA\u4EFF\u771F\uFF08ROS2\u3001C++\u3001Stonefish\uFF09\u3002',
      },
      {
        year: '2021\u20132025',
        titleEn: 'CS Bachelor \u00B7 UC3M Madrid',
        titleEs: 'Grado en Inform\u00E1tica \u00B7 UC3M',
        titleZh: '\u8BA1\u7B97\u673A\u5B66\u58EB \u00B7 UC3M',
        textEn: 'Bachelor in Computer Science and Engineering. Also worked part-time as a shop assistant while studying.',
        textEs: 'Grado en Ingenier\u00EDa Inform\u00E1tica. En paralelo trabaj\u00E9 como dependiente para compaginar con los estudios.',
        textZh: '\u8BA1\u7B97\u673A\u4E0E\u5DE5\u7A0B\u5B66\u58EB\u3002\u5728\u6B64\u671F\u95F4\u4EA6\u4EE5\u5E97\u5458\u8EAB\u4EFD\u517C\u804C\u3002',
      },
      {
        year: '2020',
        titleEn: 'Science & Technology Baccalaureate',
        titleEs: 'Bachillerato de Ciencias y Tecnolog\u00EDa',
        titleZh: '\u79D1\u6280\u9AD8\u4E2D\u6BD5\u4E1A',
        textEn: 'Colegio Villa de M\u00F3stoles. Final grade 9.60.',
        textEs: 'Colegio Villa de M\u00F3stoles. Nota final 9,60.',
        textZh: 'Colegio Villa de M\u00F3stoles\uFF0C\u6700\u7EC8\u6210\u7EE9 9.60\u3002',
      },
    ],
  },
};

export default site;
