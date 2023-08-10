export default {
  global: {
    componenteFormativo: 'Disposición final de residuos',
    descripcionCurso:
      'La última fase  con los residuos sólidos es conocida como la disposición final, considerada en la gestión integral; en el caso de que deba recurrirse a esta metodología debe realizarse con base en parámetros técnicos, de seguridad y salud en el trabajo acordes con la normatividad legal vigente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
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
        titulo: 'Manejo de información de residuos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Técnicas de registro de datos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Manejo de insumos e inventarios',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Impactos ambientales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Identificación de aspectos e impactos asociados a la disposición final',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Evaluación del impacto ambiental',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Medidas de mitigación y control',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Técnicas de disposición final',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Elementos de seguridad y salud en el trabajo requeridos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Estrategias de disposición final de residuos no peligrosos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Estrategias de disposición final de residuos peligrosos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Planes de manejo ambiental',
            hash: 't_3_4',
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
        download: 'downloads/921200_CF19_DU.pdf',
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
      tema: '2. Impactos ambientales',
      referencia:
        'Alcaldía Mayor de Bogotá. (2009). <em>Guía técnica para la elaboración de Planes de Manejo Ambiental (PMA).</em>',
      tipo: 'Guía técnica',
      link: 'https://oab.ambientebogota.gov.co/?post_type=dlm_download&p=3825',
    },
    {
      tema: '2. Impactos ambientales',
      referencia:
        'Decreto 1220 de 2005. [Presidencia de la República de Colombia] Por el cual se reglamenta el Título VIII de la Ley 99 de 1993 sobre licencias ambientales. Abril 21 de 2005.',
      tipo: 'Documento',
      link: 'https://www.icbf.gov.co/cargues/avance/docs/decreto_1220_2005.htm',
    },
    {
      tema: '1. Manejo de información de residuos',
      referencia:
        'Decreto 1784. [Ministerio de Vivienda, Ciudad y Territorio]. Por la cual se reglamenta el Decreto 1784 del 2 de noviembre de 2017 en lo relativo a las actividades complementarias de tratamiento y disposición final de residuos sólidos en el servicio público de aseo. Noviembre 2 2017.',
      tipo: 'Normatividad',
      link:
        'https://www.minvivienda.gov.co/tramites-y-servicios/consultas-publicas/por-la-cual-se-reglamenta-el-decreto-1784-del-2-de-noviembre-de-2017-en-lo-relativo-las-actividades-complementarias-de-tratamiento-y-disposicion-final',
    },
    {
      tema: '3. Técnicas de disposición final',
      referencia:
        'Alcaldía Mayor de Bogotá. (2013). Guía para elaborar planes de emergencia y contingencias.',
      tipo: 'Guía',
      link:
        'https://sig.sdis.gov.co/images/documentos_sig/procesos/gestion_de_talento_humano/documentos_asociados/20091203_guia_elaborar_planes_de_emergencia_y_contingencia.pdf',
    },
    {
      tema: '2. Impactos ambientales',
      referencia:
        'Ministerio del Ambiente Perú. (2012). <em>Guía para el diseño, construcción, operación, mantenimiento y monitoreo de relleno sanitario mecanizado</em>. MINAM.',
      tipo: 'Guía',
      link:
        'https://sinia.minam.gob.pe/documentos/guia-diseno-construccion-operacion-mantenimiento-monitoreo-relleno',
    },
    {
      tema: '3. Técnicas de disposición final',
      referencia:
        'Ministerio de Ambiente, Vivienda y Desarrollo Territorial. (2007). <em>Gestión integral de residuos o desechos peligrosos. Bases conceptuales</em>. Dirección de desarrollo sectorial sostenible.',
      tipo: 'Documento',
      link:
        'https://www.corpamag.gov.co/archivos/tramites/RESPEL/Gestion_Integral_RESPEL_Bases_Conceptuales.pdf',
    },
    {
      tema: 'Introducción',
      referencia:
        'El Tiempo (2022). <em>Alerta sanitaria y ambiental en rellenos sanitarios del país</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=1d5wV3apgxw&ab_channel=ELTIEMPO',
    },
  ],
  glosario: [
    {
      termino: 'Amenaza',
      significado:
        'condición latente derivada de la posible ocurrencia de un fenómeno físico de origen natural, socionatural o antrópico no intencional, que puede causar daño a la población y sus bienes, a la infraestructura, al ambiente y a la economía pública y privada. Es un factor de riesgo externo (DPAE, 2009).',
    },
    {
      termino: 'Celda',
      significado:
        'es uno de los elementos de la infraestructura del relleno sanitario donde se descargan, distribuyen y compactan los residuos sólidos, de acuerdo con los diseños y el reglamento operativo adoptado por la persona prestadora de la actividad de disposición final (Resolución 1784 de 2017).',
    },
    {
      termino: 'Centro de acopio',
      significado:
        'son las instalaciones de almacenamiento transitorio de residuos en los que, una vez realizada la separación en la fuente, se almacenan, seleccionan y/o acondicionan para facilitar su aprovechamiento, tratamiento o recolección selectiva. El acondicionamiento de un lugar de acopio permite que los procesos de separación y almacenamiento de residuos sólidos sean más eficaces. De esta forma se logra aumentar las cantidades de material reciclable y por tanto, disminuir los residuos ordinarios entregados para disposición en el relleno sanitario (Instituto Colombiano de Normas Técnicas y Certificación, GTC 24).',
    },
    {
      termino: 'Disposición final de residuos sólidos',
      significado:
        'es el proceso de aislar y confinar los residuos sólidos, en especial los no aprovechables, en forma definitiva, en lugares especialmente seleccionados y diseñados para evitar la contaminación, y los daños o riesgos a la salud humana y al ambiente (Decreto 1077 de 2015).',
    },
    {
      termino: 'Emergencia',
      significado:
        'todo evento identificable en el tiempo, que produce un estado de perturbación funcional en el sistema, por la ocurrencia de un evento indeseable, que en su momento exige una respuesta mayor a la establecida mediante los recursos normalmente disponibles, produciendo una modificación sustancial pero temporal, sobre el sistema involucrado, el cual compromete a la comunidad o al ambiente, alterando los servicios e impidiendo el normal desarrollo de las actividades esenciales (DPAE, 2009).',
    },
    {
      termino: 'Incidente',
      significado:
        'suceso de causa natural o por actividad humana que requiere la acción de personal de servicios de emergencias para proteger vidas, bienes y ambiente (DPAE, 2009).',
    },
    {
      termino: 'Lixiviado',
      significado:
        'es el líquido residual generado por la descomposición biológica de la parte orgánica o biodegradable de los residuos sólidos, está compuesto por el agua proveniente de precipitaciones pluviales, humedad de la basura y descomposición de la materia orgánica que arrastra materiales disueltos y suspendidos (Ministerio de Vivienda, 2017).',
    },
    {
      termino: 'Nivel freático',
      significado:
        'profundidad a la que se encuentran las aguas freáticas. Este nivel baja en tiempo de estiaje y sube en etapa de lluvias (Viceministerio de agua potable y saneamiento básico de Bolivia, 2012).',
    },
    {
      termino: 'Relleno sanitario',
      significado:
        'lugar técnicamente seleccionado, diseñado y operado para el confinamiento de los residuos sólidos municipales. Comprende el esparcimiento, acomodo y compactación de los residuos, su cobertura con tierra u otro material inerte, por lo menos diariamente, permite el control de los gases, lixiviados y la proliferación de vectores, a fin de evitar la contaminación del ambiente y proteger la salud de la población (Ministerio de vivienda, 2017).',
    },
    {
      termino: 'Riesgo',
      significado:
        'el daño potencial que sobre la población y sus bienes, la infraestructura, el ambiente y la economía pública y privada pueda causarse por la ocurrencia de amenazas de origen natural, socionatural o antrópico no intencional, que se extiende más allá de los espacios privados o actividades particulares de las personas y organizaciones, y que por su magnitud, velocidad y contingencia hace necesario un proceso de gestión que involucre al Estado y a la sociedad (DPAE, 2009).',
    },
    {
      termino: 'Talud',
      significado:
        'inclinación de un dique, terraplén o desmonte (Viceministerio de agua potable y saneamiento básico de Bolivia, 2012).',
    },
    {
      termino: 'Transferencia',
      significado:
        'es la actividad de trasladar los residuos sólidos de un vehículo a otro por medios mecánicos, evitando el contacto manual y el esparcimiento de los residuos (Ministerio de vivienda, 2017).',
    },
    {
      termino: 'Vulnerabilidad',
      significado:
        'característica propia de un elemento o grupo de elementos expuestos a una amenaza, relacionada con su incapacidad física, económica, política o social de anticipar, resistir y recuperarse del daño sufrido cuando opera esa amenaza. Es un factor de riesgo interno.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alcaldía Mayor de Bogotá. (2009). <em>Guía técnica para la elaboración de Planes de Manejo Ambiental PMA</em>. Alcaldía Mayor de Bogotá.',
      link: '',
    },
    {
      referencia:
        'Corantioquia. (s.f.). <em>Metodologías para la identificación y evaluación de impactos ambientales</em>. Corantioquia.',
      link: '',
    },
    {
      referencia:
        'Decreto 1784. [Ministerio de Vivienda, Ciudad y Territorio]. Por la cual se reglamenta el Decreto 1784 del 2 de noviembre de 2017 en lo relativo a las actividades complementarias de tratamiento y disposición final de residuos sólidos en el servicio público de aseo. Noviembre 2 de 2017.',
      link:
        'https://www.minvivienda.gov.co/tramites-y-servicios/consultas-publicas/por-la-cual-se-reglamenta-el-decreto-1784-del-2-de-noviembre-de-2017-en-lo-relativo-las-actividades-complementarias-de-tratamiento-y-disposicion-final',
    },
    {
      referencia:
        'Decreto 1220 de 2005. [Presidencia de la República de Colombia]. Por el cual se reglamenta el Título VIII de la Ley 99 de 1993 sobre licencias ambientales. Abril 21 de 2005.',
      link: 'https://www.icbf.gov.co/cargues/avance/docs/decreto_1220_2005.htm',
    },
    {
      referencia:
        'Decreto 838 de 2005. [Presidencia de la República de Colombia]. Por el cual se modifica el Decreto 1713 de 2002 sobre disposición final de residuos sólidos y se dictan otras disposiciones. Marzo 23 de 2005.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=16123',
    },
    {
      referencia:
        'Alcaldía Mayor de Bogotá. (2013). Guía para elaborar planes de emergencia y contingencias. ',
      link:
        'https://sig.sdis.gov.co/images/documentos_sig/procesos/gestion_de_talento_humano/documentos_asociados/20091203_guia_elaborar_planes_de_emergencia_y_contingencia.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente, Vivienda y Desarrollo Territorial. (2007). <em>Gestión integral de residuos o desechos peligrosos. Bases conceptuales</em>. Dirección de desarrollo sectorial sostenible.',
      link:
        'https://www.corpamag.gov.co/archivos/tramites/RESPEL/Gestion_Integral_RESPEL_Bases_Conceptuales.pdf',
    },
    {
      referencia:
        'Ministerio del Ambiente Perú. (2012). <em>Guía para el diseño, construcción, operación, mantenimiento y monitoreo de relleno sanitario mecanizado</em>. MINAM.',
      link:
        'https://sinia.minam.gob.pe/documentos/guia-diseno-construccion-operacion-mantenimiento-monitoreo-relleno',
    },
    {
      referencia:
        'Senado de Colombia. (2017). <em>Alerta sanitaria y ambiental en rellenos sanitarios del país</em> [video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=k8BouGzKtqA',
    },
    {
      referencia:
        'Superintendencia de Servicios Públicos Domiciliarios. (2016). <em>Disposición final de residuos sólidos informe nacional 2015</em>. Superintendencia de Servicios Públicos Domiciliarios.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General ',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón ',
          cargo: 'Responsable de línea de producción ',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nelly Parra Guarín ',
          cargo: 'Adecuación instruccional - 2023 ',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital ',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda ',
          cargo: 'Metodología para la formación virtual  ',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jesús Antonio Vecino Valero ',
          cargo: 'Diseñador web',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital ',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga ',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital ',
        },
        {
          nombre: 'Lady Adriana Ariza Luque ',
          cargo: 'Animación y producción audiovisual ',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital ',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo ',
          cargo: 'Animación y producción audiovisual  ',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital  ',
        },
        {
          nombre: 'Ernesto Navarro Jaimes  ',
          cargo: 'Animación y producción audiovisual ',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar ',
          cargo: 'Evaluación de contenidos inclusivos y accesibles ',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital ',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego ',
          cargo: 'Validación de recursos educativos digitales ',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital ',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez ',
          cargo: 'Validación de recursos educativos digitales ',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital ',
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
