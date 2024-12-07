export default {
  global: {
    componenteFormativo: 'Componente Formativo ',
    descripcionCurso:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],
    numeroUnidad: '1',
    tituloUnidad: 'Introducción al pensamiento estratégico',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Introducción al pensamiento estratégico ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Historia y evolución de la planeación estratégica',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Concepto de pensamiento estratégico',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Importancia del pensamiento estratégico',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Diferencias entre planificación tradicional y pensamiento estratégico',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Diferencias conceptuales',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Diferencias claves',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Ventajas y desventajas',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Casos y ejemplos',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Habilidades y competencias del pensamiento estratégico ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Análisis de la toma de decisiones estratégicas en diferentes áreas profesionales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'López Segrera, F. Luis Grosso, J. (Coord.) & José Mojica, F. (Coord.). (2004). América Latina y el Caribe en el siglo XXI: perspectiva y prospectiva de la globalización: (ed.). Editorial Miguel Ángel Porrúa.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/75157',
    },
    {
      referencia:
        'Perilla Maluche, R. B. Orjuela Garzón, W. A. & Parra Moreno, C. (2020). Análisis de futuro: algunos métodos alternativos a la "caja de herramientas" de la prospectiva francesa: (1 ed.). Sello Editorial Universidad del Tolima.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/228417',
    },
    {
      referencia:
        'Sánchez González, M. (2018). Gestión estratégica, innovación y prospectiva en comunicación: bases, técnicas y casos prácticos: (ed.). Editorial UOC.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/59107',
    },
    {
      referencia:
        'Saldaña Almazán, J. & Niño Gutiérrez, N. S. (2017). Strategic planning at UAGro: (ed.). Ediciones y Gráficos Eón.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/120296',
    },
    {
      referencia:
        'Abad, F. (Coord.). (2014). Dentro de 15 años: ¿Escenarios improbables?: (1 ed.). LID Editorial España.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/271461',
    },
    {
      referencia:
        'Bas Amorós, E. (2013). Prospectiva e innovación (Vol. 1: visiones): (ed.). Plaza y Valdés (España).',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/42001',
    },
    {
      referencia:
        'Boada, A. J. & Cardona Montoya, G. Y. M. (2020). La prospectiva: más allá de las proyecciones: (1 ed.). Fondo Editorial CEIPA.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/217714',
    },
    {
      referencia:
        'Chávez Martínez, G. (2003). El pensamiento del estratega: (ed.). Plaza y Valdés (México).',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/75568',
    },
    {
      referencia:
        'López Fernández, R. (2016). Expertos y prospectiva en la investigación pedagógica: (ed.). Editorial Universo Sur.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/71774',
    },
  ],
  glosario: [
    {
      termino: 'Flexibilidad',
      significado:
        'capacidad de ajustar las estrategias y planes en función de los cambios en el entorno o la organización.',
    },
    {
      termino: 'Prospectiva',
      significado:
        'técnica que se utiliza para prever y planificar escenarios futuros basados en el análisis de tendencias y eventos actuales.',
    },
    {
      termino: 'Colaboración interdepartamental',
      significado:
        'cooperación entre diferentes áreas o departamentos dentro de una organización para mejorar la toma de decisiones estratégicas.',
    },
    {
      termino: 'Visión sistémica',
      significado:
        'capacidad de entender cómo las diferentes partes de un sistema o situación interactúan entre sí para influir en los resultados globales.',
    },
    {
      termino: 'Análisis FODA',
      significado:
        'herramienta que evalúa Fortalezas, Oportunidades, Debilidades y Amenazas en un contexto estratégico.',
    },
    {
      termino: 'Análisis crítico',
      significado:
        'proceso de evaluación objetiva de información para fundamentar decisiones estratégicas.',
    },
    {
      termino: 'Adaptabilidad',
      significado:
        'capacidad de ajustar estrategias y acciones en respuesta a cambios en el entorno o condiciones internas.',
    },
    {
      termino: 'Planificación lineal',
      significado:
        'método tradicional de planificación que sigue un enfoque secuencial y rígido, basado en supuestos de estabilidad.',
    },
    {
      termino: 'Innovación disruptiva',
      significado:
        'introducción de nuevas ideas, productos o servicios que cambian de manera significativa las reglas del mercado o sector.',
    },
    {
      termino: 'Ética en la estrategia',
      significado:
        'consideración de los efectos sociales y ambientales de las decisiones estratégicas para garantizar un impacto sostenible.',
    },
    {
      termino: 'Competencias estratégicas',
      significado:
        'habilidades que permiten evaluar, planificar y ejecutar acciones que alinean los objetivos a largo plazo con la realidad actual.',
    },
    {
      termino: 'Visión a largo plazo',
      significado:
        'habilidad para considerar los impactos futuros de las decisiones presentes y planificar en consecuencia.',
    },
    {
      termino: 'Toma de decisiones',
      significado:
        'proceso mediante el cual se elige una opción entre varias posibles para resolver un problema o aprovechar una oportunidad.',
    },
    {
      termino: 'Proactividad',
      significado:
        'acción de anticiparse a los problemas y oportunidades para evitar impactos negativos o aprovechar ventajas.',
    },
    {
      termino: 'Liderazgo estratégico',
      significado:
        'capacidad de guiar a un equipo u organización hacia el logro de metas a largo plazo mediante la visión y adaptación.',
    },
    {
      termino: 'Innovación',
      significado:
        'proceso de introducir nuevas ideas o métodos que mejoren productos, servicios o procesos estratégicos.',
    },
    {
      termino: 'Habilidades analíticas',
      significado:
        'competencias necesarias para descomponer y evaluar situaciones complejas, facilitando la toma de decisiones.',
    },
    {
      termino: 'Resiliencia',
      significado:
        'capacidad de adaptarse y recuperarse ante situaciones adversas o cambios imprevistos en el entorno.',
    },
    {
      termino: 'Anticipación',
      significado:
        'habilidad para prever y preparar para posibles escenarios futuros antes de que sucedan.',
    },
  ],
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: ['Nombre 1', 'Nombre 2'],
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
