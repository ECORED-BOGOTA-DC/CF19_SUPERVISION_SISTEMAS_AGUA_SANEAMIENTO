<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Manejo de información de residuos
    
    .row
      .col-lg-5.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/1.png" data-aos="fade-right")
      .col-lg-7(style="place-self:center;")
        .cajon.cajon1.color-primario.p-4(style="background-color:#F7F8FB;")
          p.mb-0(data-aos="fade-up") Usualmente, se suele pensar que el manejo de residuos sólidos para disposición final implica solo el diseño y el seguimiento del proceso técnico para esa actividad; sin embargo, también incluye la gestión administrativa y de seguimiento de indicadores que compruebe o verifique que la técnica utilizada sea la más eficiente, de acuerdo con los objetivos propuestos al inicio del proyecto de disposición de residuos.
    
    Separador.mt-5

    .titulo-segundo
      h2#t_1_1 1.1 Técnicas de registro de datos
    
    p(data-aos="fade-up") Antes de la puesta en práctica de una tecnología de disposición final se debe realizar una recolección de datos e información pertinente y veraz, que permita hacer un análisis sobre la situación actual de la comunidad que será beneficiada y de sus condiciones particulares.

    p.mt-4(data-aos="zoom-in") Dentro de los datos que son requeridos para realizar un análisis previo se pueden contemplar los siguientes:

    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/2.png" data-aos="fade-right")
      .col-lg-8(style="place-self:center;")
        ul.lista-ul--separador
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            | Población del municipio (número de habitantes - DANE).
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            | Producción per cápita (Kg/día habitante).
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            | Determinación de parámetros de diseño (información secundaria - estudios similares realizados).
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            | Cantidad de residuos recolectados (Tn/día o m3/día - registros de empresas de aseo).
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            | Caracterización o composición de los residuos (% de componentes en los residuos- cuarteo).
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            | Determinación de parámetros de diseño (estudios secundarios realizados).
    
    .row.mt-5
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        ul.lista-ul--separador
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            | Precipitación pluvial (mm/año - estaciones meteorológicas próximas al lugar del proyecto). 
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            | Temperatura (dato de la estación meteorológica más próxima).
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            | Dirección predominante del viento (dato de la estación meteorológica más próxima).
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            | Dato de la estación meteorológica más próxima. 
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            | Planos y proyecciones (plano de crecimiento urbano, plan de urbanismo del municipio).
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            | Planes de ordenamiento territorial o planes básicos de ordenamiento territorial.
      .col-lg-4(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/3.png" data-aos="fade-left")
    
    p.mt-5(data-aos="fade-up") La recolección de los datos puede darse dependiendo de su forma de obtención:

    .row.mt-5
      .col-lg.p-0
        .h-100.p-4.pt-5.pb-5(style="background-color:#B0D0E7;border-radius:20px 0px 0px 20px;")
          .col-md-10.m-auto.text-center
            figure
              img(src="@/assets/curso/tema1/4.svg" data-aos="zoom-in-up" style="max-width:120px;display:inline;")
            h3.mt-4(data-aos="fade-up") Información primaria
            p.mt-4.mb-0(data-aos="fade-up") Implica la recolección de datos directa, por medio del uso de instrumentos como encuestas o tablas de registro en campo; sin embargo, para estas labores se debe contar con mucho personal y tiempo; por lo general, en proyectos de disposición de residuos sólidos, se usa información de entidades públicas o instituciones educativas denominada información secundaria.
      .col-lg.p-0
        .h-100.p-4.pt-5.pb-5(style="background-color:#B8E5FD;border-radius:0px 20px 20px 0px;")
          .col-md-10.m-auto.text-center
            figure
              img(src="@/assets/curso/tema1/5.svg" data-aos="zoom-in-up" style="max-width:120px;display:inline;")
            h3.mt-4(data-aos="fade-up") Información secundaria
            p.mt-4.mb-0(data-aos="fade-up") Es aquella que fue recolectada por otras instituciones o entidades, por lo general, que son reconocidas y su información fue tomada bajo criterios de veracidad, confiabilidad, credibilidad y que se usaron métodos científicos o metodologías estándar que dan mayor rigurosidad para tomar la información y usarla.
    
    h3.subtitulo_cf(data-aos="fade-up") Análisis de información y presentación de informes

    figure.mb-md-0.mt-5.mb-4
      img(src="@/assets/curso/tema1/6.png" data-aos="zoom-in-up")
    .col-lg-10.m-auto
      .p-4.cont_gradiente_gris
        p.mb-0(data-aos="fade-up") La información que se recolecta durante la fase de planeación y gestión busca brindar las condiciones esenciales que deben ser tenidas en cuenta antes de tomar decisiones, esta información es utilizada para la presentación de informes tanto a nivel organizacional como para las autoridades ambientales que requieran información, en caso de una ciudad o un municipio también se contempla los informes que se le transmiten a las alcaldías, gobernaciones, entre otras.
 
    .cont_gradiente3.mt-5.pt-5.pb-5
      p(data-aos="fade-up") Dentro de los análisis requeridos para los informes se encuentran temas relacionados con:

      .row.mt-4
        .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/7.svg" data-aos="fade-right")
        .col-lg-8(style="place-self:center;")
          TabsA.tabs1.color-acento-contenido
            .tarjeta.color-acento-botones.p-4(titulo="El área requerida para los rellenos sanitarios o la estrategia seleccionada para la disposición final de residuos sólidos" style="background-color:#E8E8E8;")
              h4(style="color:#12263F;") El área requerida para los rellenos sanitarios o la estrategia seleccionada para la disposición final de residuos sólidos
              p.mt-3(style="color:#12263F;") La información básica para obtener esta estimación es la población con servicio de recolección o el volumen de desechos sólidos recolectados (m#[sup(style="color:#12263F;") 3]/día), la tasa de crecimiento anual de la población y la densidad de los residuos sólidos compactados (tn/m#[sup(style="color:#12263F;") 3]).
            .tarjeta.color-acento-botones.p-4(titulo="La determinación de las variables para los estudios" style="background-color:#E8E8E8;")
              h4(style="color:#12263F;") La determinación de las variables para los estudios
              p.mt-3(style="color:#12263F;") Tanto la autoridad ambiental como las entidades territoriales solicitaron toda la información que logre consolidar estudios preliminares, topográficos, geológicos, geomorfológicos, de subsuelo, hidrogeológicos, hidrológicos y geotécnicos.
            .tarjeta.color-acento-botones.p-4(titulo="Información para los análisis técnicos" style="background-color:#E8E8E8;")
              h4(style="color:#12263F;") Información para los análisis técnicos
              p.mt-3(style="color:#12263F;") Relacionados con el análisis de estabilidad y el análisis de riesgo.
            .tarjeta.color-acento-botones.p-4(titulo="Diseños y cálculos" style="background-color:#E8E8E8;")
              h4(style="color:#12263F;") Diseños y cálculos
              p.mt-3(style="color:#12263F;") Enmarcado en información que puede ser analizada antes y durante la ejecución de la disposición final de residuos sólidos, entre ellos se puede mencionar, diseños de llenado, cálculos de las celdas de disposición, del drenaje, de lixiviados, de gases, canales de aguas lluvias, entre otros.
    
    .col-lg-10.m-auto.mt-2
      .tarjeta.color-primario.p-4(style="background: linear-gradient(180deg, rgba(66,165,227,1) 0%, rgba(48,118,182,1) 100%);")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/tema1/8.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1.text-white Decreto 1784, 2.3.2.3.11
                p.text-small.text-white Para ampliar la información sobre los diseños y cálculos se invita a leer el Decreto 1784, 2.3.2.3.11, que se encuentra en el material complementario.
              .col-sm-auto
                a.boton.color-primario(href="https://www.minvivienda.gov.co/tramites-y-servicios/consultas-publicas/por-la-cual-se-reglamenta-el-decreto-1784-del-2-de-noviembre-de-2017-en-lo-relativo-las-actividades-complementarias-de-tratamiento-y-disposicion-final" target="_blank")
                  span(style="color:#12263F !important;") Descargar
                  i.fas.fa-file-download(style="color:#12263F !important;")
    
    h3.subtitulo_cf(data-aos="fade-up") Manejo del conducto regular de la organización

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mt-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/9.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-up") Es importante entender que durante la ejecución de actividades de disposición final intervienen diferentes actores, tanto internos como externos, que pueden influir en la ejecución y mantenimiento del proyecto de disposición final; manejar el conducto regular con estos actores hace referencia a entender cuáles son las diferentes instancias que deben ser consultadas o informadas en el momento de la solicitud de información o del reporte de la misma.
    
    p.mt-5(Data-aos="fade-up") De acuerdo con el Ministerio de Vivienda, Ciudad y Territorio (2017), a manera externa se pueden describir a grandes rasgos los siguientes actores:

    .row.mt-5
      .col-lg-5.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/10.svg" data-aos="fade-right")
      .col-lg-7(style="place-self:center;")
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Gobierno Nacional") Coordina las diferentes entidades.
          p(numero="2" titulo="Ministerio de Vivienda, Ciudad y Territorio") Adopción de las políticas, programas, proyectos y regulación para el acceso de la población a agua potable y saneamiento básico, brinda legislación en materia de residuos sólidos.
          p(numero="3" titulo="Ministerio de Ambiente y Desarrollo Sostenible") Orientación y regulación del ordenamiento ambiental del territorio, definición de las políticas y regulaciones a las que se sujetarán la recuperación, conservación, protección, ordenamiento, manejo, uso y aprovechamiento sostenible de los recursos naturales renovables y del ambiente, además brinda legislación en materia de residuos sólidos.
          p(numero="4" titulo="Comisión de Regulación de Agua Potable y Saneamiento Básico (CRA)") Regulación de la actividad de los prestadores de los servicios públicos, brinda criterios para otorgar subsidios y metodologías para fijar tarifas.
          p(numero="5" titulo="Superintendencia de servicios públicos domiciliarios") Control de la fiscalización de las empresas prestadoras de servicios públicos, brinda protección de los derechos de los consumidores y apoya a las alcaldías.
          p(numero="6" titulo="Corporaciones Autónomas Regionales") Función de máxima autoridad ambiental en el área de su jurisdicción, ejerce las funciones de evaluación, control y seguimiento ambiental; otorga licencias y permisos ambientales en sus áreas de influencia.
          p(numero="7" titulo="Secretaría Distrital de Ambiente") En el caso de Bogotá, este es el ente que ejerce la función de máxima autoridad ambiental en el área de su jurisdicción, ejerce las funciones de evaluación, control y seguimiento ambiental.
    
    .row.mt-5
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="fade-up") El conducto regular se entiende como un medio óptimo que debe usarse para la comunicación dentro de la organización para reaccionar a diferentes requisitos: reclamos, informes, consultas o procedimientos de rutina para la ejecución de actividades como permisos o consultas con licencia; Hay varias consideraciones que deben tenerse en cuenta en el momento del cumplimiento del canal regular.
        .cajon.cajon1.color-primario.p-4.mt-4(style="background-color:#F7F8FB;")
          p.mb-0(data-aos="fade-up") A manera interna, el conducto regular se entiende como el medio óptimo que debe ser usado para comunicarse dentro de la organización para dar respuesta a diferentes necesidades: reclamos, informes, solicitudes o trámites rutinarios para la ejecución de actividades como solicitudes de permisos o licencias; existen diferentes consideraciones que deben ser tenidas en cuenta en el momento de acatar el conducto regular.
      .col-lg-4(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/11.png" data-aos="fade-left")
    
    .cont_gradiente3.mt-5
      .tarjeta.p-4.pt-5.pb-5(style="background-color:#F6F6F6;")
        SlyderA(tipo="b")
          .row
            .col-lg-6.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/12.png')
            .col-lg-6
              h3 Organización jerárquica
              p.mt-3 Usualmente, los conductos regulares de una organización son establecidos por la misma, dependiendo de los procedimientos preestablecidos, se debe recordar que la organización jerárquica de una empresa siempre se conforma en un organigrama que describe claramente quiénes tienen funciones gerenciales, de apoyo, asesoría, entre otros.
          .row
            .col-lg-6.mb-4.mb-lg-0
              h3 Comunicación vertical
              p.mt-3 Existe una comunicación que debe ser de arriba hacia abajo, es decir, las partes gerenciales y los altos mandos comunican a los niveles inferiores, usualmente usando medios formales como informales, reuniones, actas, boletines y correos electrónicos.
            .col-lg-6
              figure
                img(src='@/assets/curso/tema1/13.png')
          .row
            .col-lg-6.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/14.png')
            .col-lg-6
              h3 Revisión y aprobación
              p.mt-3 La comunicación de abajo hacia arriba, en este caso son documentos creados por los niveles operativos y de apoyo de una organización, en el caso de disposición final va muy relacionada con los estudios y análisis que se hacen en campo, este documento antes de ser remitido a cualquier actor externo debe subir en la cadena de mando para la revisión y aprobación, (dependiendo de los procedimientos internos).
          .row
            .col-lg-6.mb-4.mb-lg-0
              h3  Comunicación bidireccional
              p.mt-3 La comunicación bidireccional en el mismo nivel, es la más común, dada por los grupos de trabajo de las organizaciones y es la que se da durante la ejecución de las actividades diarias, en este caso, se suelen usar medios informales como la comunicación oral, correos electrónicos, entre otros.
            .col-lg-6
              figure
                img(src='@/assets/curso/tema1/15.png')
    
      .col-lg-10.m-auto.mt-5
        .row(style="background-color:#F6F6F6;border-radius:10px;box-shadow:rgba(0, 0, 0, 0.1) 0px 5px 9px 0px;")
          .col-auto.p-md-0.d-flex.align-items-center
            figure
              img(src="@/assets/curso/tema1/16.svg" data-aos="fade-right" style="margin-left: -47px;width: 100px;max-width: 100px;")
          .col.p-md-0
            .p-4.ps-2
              h4(data-aos="fade-up") Nota importante
              p(data-aos="fade-up") La relevancia del conducto regular es seguirlo a total cabalidad en cualquier organización para que la responsabilidad del documento que vaya a ser transmitido o entregado sea compartida, para la gestión de la disposición de residuos peligrosos y no peligrosos se debe acatar el conducto regular para garantizar que la información que será entregada a los diferentes actores sea acorde con las políticas de la empresa, además de ello, presenten datos verificados, reales y correctos.
              p.mb-0(data-aos="fade-up") Información no verificada o aprobada por las líneas superiores puede generar multas, requerimientos y hasta sanciones de diferente índole, ver figura.
    
    .col-lg-10.mt-5.m-auto
      .titulo-sexto.color-secundario
        h5 Figura 1
        span Ejemplo de organigrama empresa de disposición final
      figure.mt-5
        img(src="@/assets/curso/tema1/17.svg" data-aos="zoom-in-up" alt="Ejemplo de organigrama empresa de disposición final")
        figcaption.p-3.fw-normal.mt-3(style="background-color:#F6F6F6;") #[strong Nota:] Tomado del Ministerio de Vivienda. (2017). Guía de planeación estratégica para el manejo de residuos sólidos de pequeños municipios en Colombia. [Figura]. Diapositiva 52.
    
    Separador.mt-5

    .titulo-segundo
      h2#t_1_2 1.2 Manejo de insumos e inventarios
    
    p(data-aos="fade-up") Para realizar actividades de disposición final se requieren diferentes equipos e insumos que deben ser contemplados desde la separación de los residuos hasta la disposición final, aunque dependen del método o técnica seleccionada, la necesidad de los elementos, a manera general, se podrían tener en cuenta los siguientes:

    .col-lg-10.mt-5.m-auto
      .titulo-sexto.color-secundario
        h5 Tabla 1
        span  Ejemplo de equipos y elementos requeridos para la logística de residuos
      
      .tabla-a.color-secundario.mt-5
        table(alt="Ejemplo de equipos y elementos requeridos para la logística de residuos")
          caption.p-3.fw-normal.mt-3(style="background-color:#F6F6F6;") #[strong Nota:] SENA (s.f.).
          thead
            tr(style="background-color:#DBEFFC;")
              th Fase
              th Separación
              th Recolección y traslado
              th Clasificación y acopio
          tbody
            tr
              td.p-4.text-center.fw-bold Equipos
              td.p-4.text-center Contenedores #[br] Bolsas
              td.p-4.text-center Motocargas #[br] Carros #[br] Camionetas #[br] Camiones
              td.p-4.text-center Enfardadora #[br] Autoelevadores #[br] Cintas #[br] Transportadoras #[br] Camionetas #[br] Camiones
            tr
              td.p-4.text-center.fw-bold Elementos para rellenos sanitarios manuales
              td.p-4.text-center(colspan="3") Pala, azadón, barra, pico, rastrillo, pisón de mano, machete, sierra, carretilla, rodillo manual, entre otros.
            tr
              td.p-4.text-center.fw-bold Elementos para rellenos sanitarios automáticos
              td.p-4.text-center(colspan="3") Tractor compactador, tractor pequeño, volqueta, vehículos auxiliares y balanza registradora. 
    
    .col-lg-10.m-auto.mt-5
      .row(style="background-color:#F6F6F6;border-radius:10px;box-shadow:rgba(0, 0, 0, 0.1) 0px 5px 9px 0px;")
        .col-auto.p-0.d-flex.align-items-center
          figure
            img(src="@/assets/curso/tema1/16.svg" data-aos="fade-right" style="margin-left: -47px;width: 100px;max-width: 100px;")
        .col.p-0
          .p-4.ps-2
            h4(data-aos="fade-up") Es importante
            p.mb-0(data-aos="fade-up") Reconocer que todos los insumos deben mantenerse en óptimas condiciones para el mantenimiento de las técnicas y metodologías seleccionadas para la disposición final de residuos, se recomienda realizar un control de inventarios constante que permita verificar no solo los elementos que requieren recambio o se encuentran aptos para su uso, sino también inventarios de los residuos generados.
    
    h3.subtitulo_cf(data-aos="fade-up") Inventarios para residuos peligrosos (RESPEL)
    
    .col-lg-10.m-auto.mt-5
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema1/18.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0(data-aos="fade-up")  Son considerados los puntos de partida para la gestión adecuada de los residuos, en este caso su importancia radica en el hecho que permite contemplar una cantidad estimada de generación de residuos peligrosos y por ende, los que deberían pasar a un proceso de disposición final.
    
    .cont_gradiente3.mt-5
      .row
        .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
          p(data-aos="fade-up") Para las autoridades ambientales es de vital importancia impulsar un inventario de RESPEL que les permita identificar y conocer la realidad cualitativa y cuantitativa de la problemática en el área de su jurisdicción, también es una herramienta de gestión pública.
          .cajon.cajon1.color-primario.p-4.mt-4(style="background-color:#F7F8FB;")
            p.mb-0(data-aos="fade-up") Para elaborar los inventarios de RESPEL se pueden utilizar métodos directos o indirectos; pero por cualquiera de los dos métodos se debe garantizar que brinde al menos la siguiente información:
        .col-lg-5(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/19.png" data-aos="fade-left")
      
      .row.mt-5
        .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/20.svg" data-aos="fade-right")
        .col-lg-8(style="place-self:center;")
          .row
            .col-lg-6
              .row.mb-4(data-aos="fade-up")
                .col-auto.pe-0(style="width:fit-content;")
                  .h-100.text-center.p-2.ps-3.pe-3.d-flex.align-items-center.justify-content-center(style="background-color:#12263F;border-radius:5px;")
                    span.text-white.fw-bold(style="font-size:25px;") 01
                .col.ps-0
                  .h-100.p-3.d-flex.align-items-center(style="background-color:#F6F6F6;border-radius:0px 5px 5px 0px;box-shadow:-5px 4px 11px rgba(0,0,0,.16);")
                    p.mb-0.fw-bold Sector o actividad productiva.
              .row.mb-4(data-aos="fade-up")
                .col-auto.pe-0(style="width:fit-content;")
                  .h-100.text-center.p-2.ps-3.pe-3.d-flex.align-items-center.justify-content-center(style="background-color:#12263F;border-radius:5px;")
                    span.text-white.fw-bold(style="font-size:25px;") 02
                .col.ps-0
                  .h-100.p-3.d-flex.align-items-center(style="background-color:#F6F6F6;border-radius:0px 5px 5px 0px;box-shadow:-5px 4px 11px rgba(0,0,0,.16);")
                    p.mb-0.fw-bold Nombre del generador.
              .row.mb-4(data-aos="fade-up")
                .col-auto.pe-0(style="width:fit-content;")
                  .h-100.text-center.p-2.ps-3.pe-3.d-flex.align-items-center.justify-content-center(style="background-color:#12263F;border-radius:5px;")
                    span.text-white.fw-bold(style="font-size:25px;") 03
                .col.ps-0
                  .h-100.p-3.d-flex.align-items-center(style="background-color:#F6F6F6;border-radius:0px 5px 5px 0px;box-shadow:-5px 4px 11px rgba(0,0,0,.16);")
                    p.mb-0.fw-bold Ubicación del generador.
              .row.mb-4(data-aos="fade-up")
                .col-auto.pe-0(style="width:fit-content;")
                  .h-100.text-center.p-2.ps-3.pe-3.d-flex.align-items-center.justify-content-center(style="background-color:#12263F;border-radius:5px;")
                    span.text-white.fw-bold(style="font-size:25px;") 04
                .col.ps-0
                  .h-100.p-3.d-flex.align-items-center(style="background-color:#F6F6F6;border-radius:0px 5px 5px 0px;box-shadow:-5px 4px 11px rgba(0,0,0,.16);")
                    p.mb-0.fw-bold Tipo de residuo generado (nombre y clasificación). 
            .col-lg-6
              .row.mb-4(data-aos="fade-up")
                .col-auto.pe-0(style="width:fit-content;")
                  .h-100.text-center.p-2.ps-3.pe-3.d-flex.align-items-center.justify-content-center(style="background-color:#12263F;border-radius:5px;")
                    span.text-white.fw-bold(style="font-size:25px;") 05
                .col.ps-0
                  .h-100.p-3.d-flex.align-items-center(style="background-color:#F6F6F6;border-radius:0px 5px 5px 0px;box-shadow:-5px 4px 11px rgba(0,0,0,.16);")
                    p.mb-0.fw-bold Origen del residuo.
              .row.mb-4(data-aos="fade-up")
                .col-auto.pe-0(style="width:fit-content;")
                  .h-100.text-center.p-2.ps-3.pe-3.d-flex.align-items-center.justify-content-center(style="background-color:#12263F;border-radius:5px;")
                    span.text-white.fw-bold(style="font-size:25px;") 06
                .col.ps-0
                  .h-100.p-3.d-flex.align-items-center(style="background-color:#F6F6F6;border-radius:0px 5px 5px 0px;box-shadow:-5px 4px 11px rgba(0,0,0,.16);")
                    p.mb-0.fw-bold Cantidad mensual generada de cada residuo peligroso.
              .row(data-aos="fade-up")
                .col-auto.pe-0(style="width:fit-content;")
                  .h-100.text-center.p-2.ps-3.pe-3.d-flex.align-items-center.justify-content-center(style="background-color:#12263F;border-radius:5px;")
                    span.text-white.fw-bold(style="font-size:25px;") 07
                .col.ps-0
                  .h-100.p-3.d-flex.align-items-center(style="background-color:#F6F6F6;border-radius:0px 5px 5px 0px;box-shadow:-5px 4px 11px rgba(0,0,0,.16);")
                    p.mb-0.fw-bold Gestión realizada a cada uno de los residuos peligrosos.
    
    h3.subtitulo_cf(data-aos="fade-up") Métodos para realizar inventarios RESPEL

    .row.mt-5
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="fade-up") Existen dos métodos, directos o indirectos. En los primeros se realiza un registro directo de la información a través de encuestas, censos y visitas técnicas, y en los segundos, los métodos indirectos o de estimación de la generación, resultan ser prácticos y confiables en la medida en que se seleccionen métodos apropiados y datos iniciales (índices) acordes con la realidad de la región.
        .cajon.cajon1.color-primario.p-4.mt-4(style="background-color:#F7F8FB;")
          p.mb-0(data-aos="fade-up") Es importante aclarar que estos métodos son solo para el inicio de la estimación, una vez pasado el tiempo de establecer planes de gestión se deben realizar registros reales y pesajes constantes para identificar los datos de forma real.
      .col-lg-4(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/21.png" data-aos="fade-left")
    
    LineaTiempoD.color-secundario.mt-5
      p(numero="1" titulo="Método directo") Este procedimiento de inventario no resulta ser suficientemente práctico, ni exacto para obtener los datos necesarios a fin de diseñar planes de gestión o para dimensionar un mercado regional de servicios. Se considera que el inconveniente fundamental que puede presentar el método directo es su poca confiabilidad, ya que algunas veces los encuestados no brindan información cierta, ni completa por temor a requerimientos posteriores por parte de la autoridad ambiental, o simplemente, porque la información solicitada es de carácter restringido, igualmente, el diligenciamiento de encuestas puede representar una carga adicional para el generador.
      div(numero="2" titulo="Método indirecto")
        p Se fundamentan en la utilización de índices de generación de RESPEL establecidos en bancos de datos. En general, la metodología para la estimación es sencilla y corresponde a determinar los siguientes componentes: 
        .row.mt-5
          .col-lg-3.mb-4.mb-lg-0(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema1/22.svg")
          .col-lg-9(style="place-self:center;")
            .row.pb-3.m-0(style="border-bottom:2px #AFAFAF dotted;")
              .col-auto(style="place-self:center;")
                span.fw-bold(style="background-color:#4DB1F0;border-radius:50%;font-size:18px;padding:.7rem 1.1rem;") 1
              .col(style="place-self:center;")
                p.mb-0 Identificar las actividades productivas, procesos o servicios que se realizan en la región. 
            .row.pb-3.pt-3.m-0(style="border-bottom:2px #AFAFAF dotted;")
              .col-auto(style="place-self:center;")
                span.fw-bold(style="background-color:#FFA031;border-radius:50%;font-size:18px;padding:.7rem 1.1rem;") 2
              .col(style="place-self:center;")
                p.mb-0 Listar los tipos de RESPEL generados, a partir de información bibliográfica.
            .row.pb-3.m-0.pt-3(style="border-bottom:2px #AFAFAF dotted;")
              .col-auto(style="place-self:center;")
                span.fw-bold(style="background-color:#4DB1F0;border-radius:50%;font-size:18px;padding:.7rem 1.1rem;") 3
              .col(style="place-self:center;")
                p.mb-0 Calcular las cantidades de RESPEL a partir de la aplicación de índices de generación que pueden estar en función de la producción (insumos, materias primas y producto terminado). 
            .row.pt-3.m-0
              .col-auto(style="place-self:center;")
                span.fw-bold(style="background-color:#FFA031;border-radius:50%;font-size:18px;padding:.7rem 1.1rem;") 4
              .col(style="place-self:center;")
                p.mb-0 Ajustar los índices (o directamente las cantidades calculadas) con la información obtenida de la gestión de los RESPEL y con la información recopilada directamente, a través de visitas y encuestas documentadas en establecimientos preseleccionados.
    
    p.mt-5(data-aos="fade-up") Dentro de los índices que pueden ser usados por este método se encuentran:  

    .row.mt-5
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        ul.lista-ul--separador
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            | Los de población con base en datos estadísticos de la Organización para la Cooperación y el Desarrollo Económico OCDE.
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            | El Winvent (anteriormente Invent), que corresponde a un programa de cálculo que cuenta con una base de datos de tipos de RESPEL generados en las diferentes actividades industriales (clasificadas de acuerdo con el código de la Clasificación Industrial Internacional Uniforme CIIU), y otra base de datos con índices de generación de residuos por número de empleados.
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            | Control Integrado de la Contaminación Polución (IPC).
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            | Índice de generación de residuos denominado Canadá.
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            | Índice de la Universidad del Sur de California (IUSC).
      .col-lg-4(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/23.svg" data-aos="fade-left")

    .col-lg-10.m-auto.mt-5
      .tarjeta.color-primario.p-4(style="background: linear-gradient(180deg, rgba(66,165,227,1) 0%, rgba(48,118,182,1) 100%);")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/tema1/8.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1.text-white Gestión integral de residuos o desechos peligrosos
                p.text-small.text-white Para ampliar la información sobre los inventarios de #[em Respel] se invita a leer el documento “Gestión integral de residuos o desechos peligrosos”, páginas 79 -84, que se encuentra en el material complementario.
              .col-sm-auto
                a.boton.color-primario(href="https://www.corpamag.gov.co/archivos/tramites/RESPEL/Gestion_Integral_RESPEL_Bases_Conceptuales.pdf" target="_blank")
                  span(style="color:#12263F !important;") Descargar
                  i.fas.fa-file-download(style="color:#12263F !important;")






      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    indicadorTarjetaSlide: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass">
.lista-ol--separador li, .lista-ul--separador li
  border-bottom-width: 2px
  border-bottom-style: dotted
.tabs1 .tabs-a__tab
  background-color: #E8E8E8
.tabs1.tabs-a.color-acento-contenido .tabs-a__tab__selected:before
  background-color: #FF9A00
.tabs1 .tabs-a__tab__selected:after
  content: ''
  position: absolute
  width: 13px
  height: 100%
  right: 0
  top: 0
  background-color: #FF9A00
.linea-tiempo-d.color-secundario .linea-tiempo-d__item--selected .linea-tiempo-d__item__number
  background-color: #3076B6
  color: #fff
.slyder-a__btn--sigt, .slyder-a__btn--atrs
  background-color: #FFA031
.slyder-a__bullets__item
  background-color: #AFAFAF
.slyder-a__bullets__item--active
  background-color: #0098E8 !important
  border-color: #0098E8 !important
</style>
