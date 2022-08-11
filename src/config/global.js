export default {
  global: {
    componenteFormativo: 'Costeo de la operación',
    descripcionCurso:
      'El presente componente de formación busca que el aprendiz logre identificar los valores y/o costos implicados en la actividad del transporte, mediante los cuales será viable determinar la rentabilidad del mismo y facilitar la toma de decisiones tanto administrativas como operativas durante la ejecución.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Historia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Elemntos a considerar',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Teorías',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Costos y gastos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Costos de los accidentes en el transporte',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Estados financieros',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Criterios de decisión',
        desarrolloContenidos: true,
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
      tema: '',
      referencia: '',
      tipo: '',
      link: 'https://www.google.com/',
    },
    {
      tema: '',
      referencia: '',
      tipo: '',
      descarga: '/downloads/prueba.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Activo',
      significado:
        'Corresponde a todas aquellas cuentas que reflejan los bienes y derechos de los que dispone la entidad. Todos los elementos del activo tienen el potencial de traer dinero a la empresa, ya sea mediante su uso, su venta o su intercambio.',
    },
    {
      termino: 'Egreso',
      significado:
        'Corresponde a la salida de dinero de una empresa ya sea para gastos o para el pago de inversiones.',
    },
    {
      termino: 'Logística',
      significado:
        'Procede del concepto militar francés <em>logistique</em>, utilizado para denominar el transporte, el suministro y el alojamiento de las tropas. Actualmente corresponde a las operaciones de transporte, almacenamiento y distribución que permiten llevar las materias primas desde su origen, pasando por el punto de transformación y hasta el consumidor final.',
    },
    {
      termino: 'Indivisible',
      significado:
        '1. Que no se puede dividir.<br>2. Dicho de una cosa: Que no admite división, ya por ser esta impracticable, ya porque impida o varíe sustancialmente su aptitud para el destino que tenía, ya porque desmerezca mucho con la división.',
    },
    {
      termino: 'Ingreso',
      significado:
        'Corresponde al incremento de los recursos económicos de una empresa. Los ingresos suponen incrementos en el patrimonio neto. Puede tratarse del aumento del valor de tus activos o la disminución de un pasivo.',
    },
    {
      termino: 'Pasivo',
      significado:
        'Cuenta que refleja todas las deudas y obligaciones económicas que tiene una empresa. Estas deudas permiten a la empresa financiar su actividad y le sirven para pagar su activo.',
    },
    {
      termino: 'Rentabilidad',
      significado:
        'Corresponde a los beneficios que se han obtenido o se pueden obtener de una inversión.',
    },
    {
      termino: 'Solidez',
      significado:
        'Se refiere al respaldo real que el patrimonio le ofrece al funcionamiento de la empresa y en el evento extremo de una liquidación, también al pago de sus acreedores.',
    },
    {
      termino: 'Utilidad',
      significado:
        'Es la diferencia entre los ingresos obtenidos por un negocio y todos los gastos incurridos en la generación de dichos ingresos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aeronáutica Civil de Colombia. (2016). Investigación de accidentes e incidentes graves.',
      link:
        'https://www.aerocivil.gov.co/autoridad-de-la-aviacion-civil/investigacion-de-accidentes-e-incidentes-graves',
    },
    {
      referencia:
        'Agencia Nacional de Seguridad Vial. (2019). Histórico Víctimas. Agencia Nacional de Seguridad vial.',
      link:
        'https://ansv.gov.co/es/observatorio/estad%C3%ADsticas/historico-victimas',
    },
    {
      referencia:
        'Duque, G. (2006). Fundamentos de economía y transportes. Parte III. Universidad Nacional de  Colombia Sede Manizales.',
    },
    {
      referencia:
        'De Rus, G., Campos, J. & Nombela, G. (2003). Economía del transporte. Antoni Bosch Editor.',
    },
    {
      referencia:
        'Carol, R. (2018). Análisis de los costos de accidentalidad y enfermedad laboral en una compañía metalmecánica en Bogotá. (Tesis de postgrado). Universidad Nacional. Bogotá.',
    },
    {
      referencia:
        'Fragoso, W., Garrido, E. y Solano, J. [edwin  garrido] (2014, diciembre 5). Amortización y depreciación [Presentación]. Slideshare.',
      link:
        'https://es.slideshare.net/edwingarrido399/amortizacin-y-depreciacion',
    },
    {
      referencia:
        'Gianonatti, M. (2017). Actualización estadística de siniestralidad marítima entre 2011 y 2015. (Tesis de pregrado). Universidad de La Laguna. España.',
    },
    {
      referencia:
        'Gutiérrez, I. (2020). ¿Qué es el costo de capital y cuál es su importancia?.  Muy Financiero.',
      link: 'http://www.muyfinanciero.com/conceptos/costo-de-capital/',
    },
    {
      referencia:
        'Mascareñas, J. (2008). El coste de capital. Universidad Complutense de Madrid.',
      link: 'http://textos.pucp.edu.pe/pdf/258.pdf',
    },
    {
      referencia:
        'Ministerio de Transportes, Movilidad y Agenda Urbana. (2021). Informes oficiales sobre accidentes marítimos. España.',
      link:
        'https://www.mitma.gob.es/marina-mercante/informes-oficiales-sobre-accidentes-maritimos/comision-permanente-de-investigacion-de-siniestros-maritimos',
    },
    {
      referencia:
        'Pérez, J., Merino, M. (2017). Definición de costo fijo. Definicion.de.',
      link: 'https://definicion.de/costo-fijo/',
    },
    {
      referencia:
        'Ramos, I. (2005). Transporte y Desarrollo Económico: Un Análisis Para Bolivia, Colombia y Venezuela. Universidad Complutense de Madrid.',
    },
    {
      referencia:
        'SALHER Soluciones Ambientales. (2019). Seguridad: Pirámide de control de riesgos. CLUSMIN Clúster Minero de Zacatecas.',
      link: 'https://clusmin.org/seguridad/',
    },
    {
      referencia:
        'Secretaría Distrital de Desarrollo Económico y Cámara de Comercio de Bogotá. (2009). Cartilla práctica. Cómo definir los costos de tu empresa. Secretaría Distrital de Desarrollo Económico y Cámara de Comercio de Bogotá.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edwin Humberto Jiménez Gómez',
        cargo: 'Experto Temático',
        centro:
          'Regional Distrito Capital - centro de electricidad, electrónica y Telecomunicaciones.',
      },
      {
        nombre: 'Claudia Milena Hernández Naranjo',
        cargo: 'Diseñador Instruccional',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica. ',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oscar Ivan Uribe Ortiz',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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
