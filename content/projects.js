// Projects shown on the home page and /projects.
// Each `title` / `summary` is an object keyed by locale.
// Set `featured: true` to show on the homepage grid.

const projects = [
  {
    id: 'vortex-simulator',
    featured: true,
    href: 'https://github.com/vortexntnu',
    repo: null,
    tags: ['ROS2', 'C++', 'Stonefish', 'Robotics'],
    title: {
      en: 'Underwater drone simulation',
      es: 'Simulaci\u00F3n de dron submarino',
      zh: '\u6C34\u4E0B\u65E0\u4EBA\u673A\u4EFF\u771F',
    },
    summary: {
      en: 'Contributing to Vortex NTNU\u2019s simulation workflow: synthetic image capture, stereo + sonar data fusion investigations, and Stonefish-based scenarios.',
      es: 'Colaboraci\u00F3n con el flujo de simulaci\u00F3n de Vortex NTNU: captura de im\u00E1genes sint\u00E9ticas, investigaci\u00F3n de fusi\u00F3n de c\u00E1mara est\u00E9reo y s\u00F3nar, y escenarios en Stonefish.',
      zh: '\u53C2\u4E0E Vortex NTNU \u7684\u4EFF\u771F\u5DE5\u4F5C\u6D41\uFF1A\u91C7\u96C6\u5408\u6210\u56FE\u50CF\u6570\u636E\u3001\u7814\u7A76\u7ACB\u4F53\u76F8\u673A\u4E0E\u58F0\u7EB3\u6570\u636E\u878D\u5408\uFF0C\u4EE5\u53CA\u57FA\u4E8E Stonefish \u7684\u4EFF\u771F\u573A\u666F\u3002',
    },
  },
  {
    id: 'snow-pole',
    featured: true,
    href: 'https://github.com/liangjizhu',
    repo: null,
    tags: ['Computer Vision', 'YOLO', 'RF-DETR', 'Python'],
    title: {
      en: 'Snow pole detection',
      es: 'Detecci\u00F3n de balizas de nieve',
      zh: '\u96EA\u6746\u68C0\u6D4B',
    },
    summary: {
      en: 'Real-time snow pole detection for winter driving. Experiments with YOLO and RF-DETR object-detection pipelines and their trade-offs.',
      es: 'Detecci\u00F3n de balizas de nieve en tiempo real para conducci\u00F3n invernal. Experimentos con detectores YOLO y RF-DETR y sus compromisos.',
      zh: '\u9762\u5411\u51AC\u5B63\u9A7E\u9A76\u7684\u5B9E\u65F6\u96EA\u6746\u68C0\u6D4B\u3002\u6BD4\u8F83 YOLO \u4E0E RF-DETR \u76EE\u6807\u68C0\u6D4B\u7BA1\u9053\u7684\u4F18\u52A3\u3002',
    },
  },
  {
    id: 'distributed-files',
    featured: true,
    href: 'https://github.com/liangjizhu/labs_sistemas_distribuidos',
    repo: 'liangjizhu/labs_sistemas_distribuidos',
    tags: ['C', 'Python', 'RPC', 'REST'],
    title: {
      en: 'Distributed file sharing',
      es: 'Compartici\u00F3n distribuida de archivos',
      zh: '\u5206\u5E03\u5F0F\u6587\u4EF6\u5171\u4EAB\u7CFB\u7EDF',
    },
    summary: {
      en: 'Peer-to-peer file sharing system. C server components with Python services, client-to-client transfers over RPC and REST.',
      es: 'Sistema peer-to-peer con servidor en C y servicios en Python. Transferencias entre clientes sobre RPC y REST.',
      zh: '\u70B9\u5BF9\u70B9\u6587\u4EF6\u5171\u4EAB\u7CFB\u7EDF\uFF1A\u57FA\u4E8E C \u7684\u670D\u52A1\u5668\u7EC4\u4EF6\u4E0E Python \u670D\u52A1\uFF0C\u4F7F\u7528 RPC \u548C REST \u8FDB\u884C\u5BA2\u6237\u7AEF\u95F4\u4F20\u8F93\u3002',
    },
  },
  {
    id: 'heuristica',
    featured: false,
    href: 'https://github.com/liangjizhu/heuristica',
    repo: 'liangjizhu/heuristica',
    tags: ['Python', 'Algorithms'],
    title: {
      en: 'Heur\u00EDstica',
      es: 'Heur\u00EDstica',
      zh: '\u542F\u53D1\u5F0F\u7B97\u6CD5',
    },
    summary: {
      en: 'Heuristic algorithms and problem-solving techniques for combinatorial problems.',
      es: 'Algoritmos heur\u00EDsticos y t\u00E9cnicas de resoluci\u00F3n para problemas combinatorios.',
      zh: '\u9762\u5411\u7EC4\u5408\u4F18\u5316\u95EE\u9898\u7684\u542F\u53D1\u5F0F\u7B97\u6CD5\u4E0E\u6C42\u89E3\u6280\u5DE7\u3002',
    },
  },
  {
    id: 'riscv',
    featured: false,
    href: 'https://github.com/liangjizhu/riscv',
    repo: 'liangjizhu/riscv',
    tags: ['RISC-V', 'Assembly', 'Computer architecture'],
    title: {
      en: 'RISC-V exercises',
      es: 'Ejercicios RISC-V',
      zh: 'RISC-V \u7EC3\u4E60',
    },
    summary: {
      en: 'Small RISC-V assembly projects focused on computer architecture fundamentals.',
      es: 'Peque\u00F1os proyectos en ensamblador RISC-V centrados en los fundamentos de arquitectura de computadores.',
      zh: '\u805A\u7126\u4E8E\u8BA1\u7B97\u673A\u4F53\u7CFB\u7ED3\u6784\u57FA\u7840\u7684\u5C0F\u578B RISC-V \u6C47\u7F16\u7EC3\u4E60\u3002',
    },
  },
  {
    id: 'compilers',
    featured: false,
    href: 'https://github.com/100495680/Compiladores',
    repo: '100495680/Compiladores',
    tags: ['C', 'Compilers', 'Parsing'],
    title: {
      en: 'Compiler design',
      es: 'Dise\u00F1o de compiladores',
      zh: '\u7F16\u8BD1\u5668\u8BBE\u8BA1',
    },
    summary: {
      en: 'Compiler components and language-processing exercises written in C.',
      es: 'Componentes de compiladores y ejercicios de procesamiento de lenguajes en C.',
      zh: '\u4F7F\u7528 C \u8BED\u8A00\u5B9E\u73B0\u7684\u7F16\u8BD1\u5668\u7EC4\u4EF6\u4E0E\u8BED\u8A00\u5904\u7406\u7EC3\u4E60\u3002',
    },
  },
];

export default projects;
