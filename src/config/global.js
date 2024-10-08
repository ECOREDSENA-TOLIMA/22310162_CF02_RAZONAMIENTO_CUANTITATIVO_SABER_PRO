export default {
  global: {
    componenteFormativo: 'Pensamiento matemático, espacial y estadístico',
    descripcionCurso:
      'Este componente formativo aborda las competencias matemáticas esenciales, la lógica y la trigonometría, aplicando estos conceptos a problemas prácticos. Además, desarrolla el pensamiento lógico, numérico y espacial, y explora técnicas estadísticas clave. Todo ello facilita la comprensión y aplicación efectiva de principios matemáticos en contextos reales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Competencias matemáticas y modelación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Competencias matemáticas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Modelación en matemáticas',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Fundamentos de matemáticas avanzadas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Lógica',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Conjuntos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Trigonometría',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Números complejos',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Patrón lógico inductivo',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Aplicaciones prácticas en lógica y trigonometría',
        desarrolloContenidos: true,

        subMenu: [
          {
            numero: '3.1',
            titulo: 'Problema de lógica',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Problema de conjunto',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Problema de razón trigonométrica',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Problema de ecuación trigonométrica',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Problema de número complejo',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Problema de patrón lógico inductivo',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Desarrollo del pensamiento lógico, numérico y espacial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Pensamiento lógico',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Razonamiento numérico',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Razonamiento espacial',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Técnicas estadísticas de conteo y muestreo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Técnicas de conteo y muestreo',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Estimador puntual y de intervalos',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Variables cuantitativas',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/material.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Fundamentos de matemáticas avanzadas',
      referencia:
        'Bloque 10 Unimagdalena. (2022). Lo que debes saber del módulo de razonamiento cuantitativo. Saber Pro se acerca ¡prepárate!',
      tipo: 'Página web',
      link:
        'https://bloque10.unimagdalena.edu.co/lo-que-debes-saber-del-modulo-de-razonamiento-cuantitativo-saber-pro-se-acerca-preparate/',
    },
    {
      tema: 'Fundamentos de matemáticas avanzadas',
      referencia:
        'Ministerio de Educación Icfes. (2015). Módulo de razonamiento cuantitativo Saber Pro 2015-1.',
      tipo: 'PDF',
      link: 'Modulo_de_Razonamiento_cuantitativo_Saber_Pro_2015-1',
    },
    {
      tema: 'Fundamentos de matemáticas avanzadas',
      referencia:
        'Ministerio de Educación Icfes. (2015). Módulo de razonamiento cuantitativo Saber Pro 2015-2.',
      tipo: 'PDF',
      link: 'Modulo_de_Razonamiento_cuantitativo_Saber_Pro_2015-2',
    },
    {
      tema: 'Aplicaciones prácticas en lógica y trigonometría',
      referencia:
        'Ministerio de Educación Icfes. (2015). Banco de preguntas de matemáticas.',
      tipo: 'PDF',
      link: 'Banco_de_preguntas_de_matematicas',
    },
  ],
  glosario: [
    {
      termino: 'Ángulo',
      significado:
        'figura geométrica formada por dos rectas o dos planos que se cortan respectivamente en una superficie o en el espacio.',
    },
    {
      termino: 'Contexto',
      significado:
        'entorno físico o de situación político histórico cultural o de cualquier otra índole en el que se considera un hecho.',
    },
    {
      termino: 'Ecuación',
      significado: 'igualdad que contiene una o más incógnitas.',
    },
    {
      termino: 'Función',
      significado:
        'relación entre dos conjuntos que asigna a cada elemento del primero un elemento del segundo o ninguno.',
    },
    {
      termino: 'Inductivo',
      significado:
        'extraer a partir de determinadas observaciones o experiencias particulares el principio general implícito en ellas.',
    },
    {
      termino: 'Intervalo',
      significado:
        'conjunto de los valores que toma una magnitud entre dos límites dados.',
    },
    {
      termino: 'Patrón',
      significado: 'modelo que sirve de muestra para sacar otra cosa igual.',
    },
    {
      termino: 'Proposición',
      significado:
        'enunciación de una verdad demostrada o que se trata de demostrar.',
    },
    {
      termino: 'Temporal',
      significado: 'que pasa con el tiempo que no es eterno.',
    },
    {
      termino: 'Trigonometría',
      significado:
        'estudio de las relaciones numéricas entre los elementos que forman los triángulos planos y esféricos.',
    },
    {
      termino: 'Permutación',
      significado:
        'cada una de las ordenaciones posibles de los elementos de un conjunto finito.',
    },
  ],
  referencias: [
    {
      referencia:
        'Canal Díaz N. (2006). Técnicas de muestreo: Sesgos más frecuentes.',
      link: 'http://www.revistaseden.org/files/9-CAP%209.pdf',
    },
    {
      referencia:
        'Cobo B. & Batanero C. (2004). Razonamiento numérico en problemas promedios.',
      link: '',
    },
    {
      referencia:
        'Corporación Educacional Colegio “Sao Paulo”. (n.d.). Módulo de autoaprendizaje Nº4. Tema: Tablas de verdad.',
      link:
        'https://colegiosaopaulo.cl/wp-content/uploads/2021/03/Ma4_Pensamientocomputacionalyprogramacion.pdf',
    },
    {
      referencia:
        'Estimación puntual y estimación por intervalos de confianza. (n.d.). Universitat Oberta de Catalunya.',
      link: '',
    },
    {
      referencia:
        'Números complejos y trigonometría. (n.d.). Universidad de Puerto Rico.',
      link: '',
    },
    {
      referencia: 'Teoría de conjuntos. (n.d.). Wikipedia.',
      link: 'https://es.wikipedia.org/wiki/Teor%C3%ADa_de_conjuntos',
    },
    {
      referencia:
        'UNID. (n.d.). Estadística para la toma de decisiones. Universidad Interamericana para el Desarrollo.',
      link: '',
    },
    {
      referencia:
        'Vasco U. C. E. (2010). El pensamiento variacional y la modelación matemática.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Hugo García Calderón',
          cargo: 'Experto temático',
          centro: 'Centro de Diseño Tecnológico Industrial - Regional Valle',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Claudia Milena Hernández Naranjo',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Viviana Herrera Quiñonez',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Melendez',
          cargo: 'Desarrollador <em>Full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>Full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
