<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Técnicas de disposición final
    
    .col-lg-10.m-auto
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mt-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema3/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0(data-aos="fade-up") El manejo integral de los residuos implica acciones desde la generación hasta la disposición final de los mismos, de manera general, se podría contemplar la siguiente jerarquía en la gestión de residuos:
    
      .row.mt-5
        .col-lg.mb-4.mb-lg-0
          .h-100(style="background-color:#3076B6;border-radius:6px;")
            figure.text-center.p-4.pb-5.bg-white(style="border:3px #12263F solid;border-bottom:0;border-radius:6px 6px 0px 0px;")
              img(src="@/assets/curso/tema3/2.svg" data-aos="zoom-in-up" style="display:inline;max-width:150px;")
            p.mb-0.fw-bold.p-3.text-center.text-white(data-aos="fade-up") Prevenir y minimizar la generación
        .col-lg.mb-4.mb-lg-0
          .h-100(style="background-color:#008B8A;border-radius:6px;")
            figure.text-center.p-4.pb-5.bg-white(style="border:3px #12263F solid;border-bottom:0;border-radius:6px 6px 0px 0px;")
              img(src="@/assets/curso/tema3/3.svg" data-aos="zoom-in-up" style="display:inline;max-width:150px;")
            p.mb-0.fw-bold.p-3.text-center(data-aos="fade-up") Reutilizar los residuos
        .col-lg.mb-4.mb-lg-0
          .h-100(style="background-color:#3076B6;border-radius:6px;")
            figure.text-center.p-4.pb-5.bg-white(style="border:3px #12263F solid;border-bottom:0;border-radius:6px 6px 0px 0px;")
              img(src="@/assets/curso/tema3/4.svg" data-aos="zoom-in-up" style="display:inline;max-width:150px;")
            p.mb-0.fw-bold.p-3.text-center.text-white(data-aos="fade-up") Aprovechar y valorizar los residuos
        .col-lg.mb-4.mb-lg-0
          .h-100(style="background-color:#008B8A;border-radius:6px;")
            figure.text-center.p-4.pb-5.bg-white(style="border:3px #12263F solid;border-bottom:0;border-radius:6px 6px 0px 0px;")
              img(src="@/assets/curso/tema3/5.svg" data-aos="zoom-in-up" style="display:inline;max-width:150px;")
            p.mb-0.fw-bold.p-3.text-center(data-aos="fade-up") Tratar los residuos
        .col-lg
          .h-100(style="background-color:#3076B6;border-radius:6px;")
            figure.text-center.p-4.pb-5.bg-white(style="border:3px #12263F solid;border-bottom:0;border-radius:6px 6px 0px 0px;")
              img(src="@/assets/curso/tema3/6.svg" data-aos="zoom-in-up" style="display:inline;max-width:150px;")
            p.mb-0.fw-bold.p-3.text-center.text-white(data-aos="fade-up") Disponer los residuos
    
    Separador.mt-5

    .titulo-segundo
      h2#t_3_1 3.1 Elementos de seguridad y salud en el trabajo requeridos
    
    .cont_gradiente3
      .row
        .col-lg-5.mb-4.mb-lg-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema3/7.svg" data-aos="fade-right")
        .col-lg-7(style="place-self:center;")
          p(data-aos="fade-up") Las actividades que se deben realizar para la disposición final de residuos incluyen la manipulación de diferentes elementos que pueden generar un riesgo para el personal, es por ello que se debe velar por la seguridad de los trabajadores, para ello, se debe cumplir con toda la normatividad vigente en tema de seguridad y salud en el trabajo. 
          .cajon.cajon1.color-primario.p-4.mt-4(style="background-color:#F6F6F6;")
            p.mb-0(data-aos="fade-up") De acuerdo con el Decreto 1748 (2017), se específica que hay que disponer de los elementos de seguridad industrial y salud ocupacional, para el personal operativo, administrativo y visitantes, acorde con lo establecido en el reglamento operativo y la normatividad vigente. 
          p.mt-4(data-aos="fade-up") Algunos de los elementos de protección que se deben considerar son los siguientes:
          .row.mt-4
            .col-lg.mb-4.mb-lg-0.col-md-6.text-center
              figure.text-center
                img(src="@/assets/curso/tema3/8.svg" data-aos="fade-up" style="display:inline;width:100px;")
              p(data-aos="fade-up") Overoles
            .col-lg.mb-4.mb-lg-0.col-md-6.text-center
              figure.text-center
                img(src="@/assets/curso/tema3/9.svg" data-aos="fade-up" style="display:inline;width:80px;")
              p(data-aos="fade-up") Impermeable
            .col-lg.mb-4.mb-lg-0.col-md-6.text-center
              figure.text-center
                img(src="@/assets/curso/tema3/10.svg" data-aos="fade-up" style="display:inline;width:100px;")
              p(data-aos="fade-up") Guantes
            .col-lg.mb-4.mb-lg-0.col-md-6.text-center
              figure.text-center
                img(src="@/assets/curso/tema3/11.svg" data-aos="fade-up" style="display:inline;width:100px;")
              p(data-aos="fade-up") Botas de seguridad
            .col-lg.mb-4.mb-lg-0.col-md-6.text-center
              figure.text-center
                img(src="@/assets/curso/tema3/12.svg" data-aos="fade-up" style="display:inline;width:100px;")
              p(data-aos="fade-up") Botas de goma
            .col-lg.mb-4.mb-lg-0.col-md-6.text-center
              figure.text-center
                img(src="@/assets/curso/tema3/13.svg" data-aos="fade-up" style="display:inline;width:100px;")
              p(data-aos="fade-up") Caretas
            .col-lg.col-md-6.text-center
              figure.text-center
                img(src="@/assets/curso/tema3/14.svg" data-aos="fade-up" style="display:inline;width:100px;")
              p(data-aos="fade-up") Tapabocas
    
    Separador.mt-5

    .titulo-segundo
      h2#t_3_2 3.2 Estrategias de disposición final de residuos no peligrosos
    
    p(data-aos="fade-up") Teniendo en cuenta  el número de habitantes y la caracterización de los residuos sólidos de un municipio, se deben tener en cuenta las consideraciones técnicas para la construcción de un lugar para la disposición final de los residuos sólidos no peligrosos.  Según las características de los residuos sólidos municipales, debemos tener en cuenta las consideraciones técnicas relacionadas con la construcción de residuos sólidos inusuales.
    p.mt-4(data-aos="fade-up") Existen diferentes técnicas de disposición, entre las cuales se encuentran:

    .row.mt-5
      .col-lg.p-0
        .h-100.p-4.pt-5.text-center.text-white(style="background-color:#3076B6;border-radius:20px 0px 0px 20px;")
          figure.text-center
            img(src="@/assets/curso/tema3/15.svg" data-aos="zoom-in-up" style="display:inline;max-width:120px;")
          h3.mt-4(data-aos="fade-up") Relleno sanitario manual
          p.mb-0(data-aos="fade-up") Que no excedan las 20 toneladas de residuos al día, en esta técnica no se utilizan máquinas para disponer los residuos, para su manejo se utilizan herramientas menores tales como pala, carretilla, pico y rastrillo, se puede contar con mano de obra no calificada y la impermeabilización de la celda normalmente se realiza con arcilla; sin embargo, se debe contar con sistemas de captación y tratamiento primario de lixiviados, así como con pozos de monitoreo de las aguas subterráneas.
      .col-lg.p-0
        .h-100.p-4.pt-5.text-center.text-white(style="background-color:#008B8A;")
          figure.text-center
            img(src="@/assets/curso/tema3/16.svg" data-aos="zoom-in-up" style="display:inline;max-width:120px;")
          h3.mt-4(data-aos="fade-up") Relleno sanitario semimecanizado
          p.mb-0(data-aos="fade-up") Recomendado para municipios donde se generan entre 20 y 40 toneladas de residuos al día, se utiliza de forma parcial maquinaria para el compactado y la cobertura de los residuos, tales como bulldozer u orugas de cadena, este tipo de relleno no permite la contratación de mano de obra no calificada, la impermeabilización no se hace natural con arcilla sino que se utilizan materiales artificiales como geosintéticos o geomembranas, en este tipo de relleno el biogás generado se capta y se ventea; pero no se le realiza un tratamiento)
      .col-lg.p-0
        .h-100.p-4.pt-5.text-center.text-white(style="background-color:#4DB1F0;border-radius:0px 20px 20px 0px;")
          figure.text-center
            img(src="@/assets/curso/tema3/17.svg" data-aos="zoom-in-up" style="display:inline;max-width:120px;")
          h3.mt-4(data-aos="fade-up") Relleno mecanizado
          p.mb-0(data-aos="fade-up") Recomendado para municipios que excedan las 40 toneladas de residuos al día, se utiliza continuamente maquinaria pesada en la operación, normalmente esta maquinaría consta de tractor compactador, bulldozer, retroexcavadora cargadora o de pala frontal y camiones cisterna o de volquete, cumple con todas las condiciones técnicas del relleno semimecanizado; pero adicionalmente se hace tratamiento del biogás generado por los residuos sólidos.
    
    p.mt-5(data-aos="fade-up") El Ministerio de Vivienda, Ciudad y Territorio (2017) en su Guía de planeación estratégica para el manejo de residuos sólidos de pequeños municipios en Colombia establece que los rellenos sanitarios deben cumplir con las siguientes características:

    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/18.svg" data-aos="fade-right")
      .col-lg-8(style="place-self:center;")
        ul.lista-ul--separador
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            | Fácilmente accesible por los vehículos durante las operaciones y en cualquier estado del tiempo.
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            | Contar con medidas de seguridad contra la potencial contaminación del agua superficial y subterránea.
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            | Contar con medidas de seguridad contra el movimiento incontrolado del gas originado por los residuos sólidos depositados.
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            | Contar con la cantidad adecuada de material de cobertura, de fácil manejo y compactación.
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            | Estar ubicado en un área donde la operación del relleno no impactará en forma negativa los recursos sensibles del ambiente.
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            | Ser lo suficientemente grande para recibir los residuos de la comunidad durante un intervalo de tiempo razonable. 
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            | Ser el sitio más económico disponible y cumplir con los requisitos para la disposición de residuos sólidos, conforme a las restricciones de la legislación aplicable.
    
    .cajon.cajon1.color-primario.p-4.mt-5(style="background-color:#F6F6F6;")
      p.mb-0(data-aos="fade-up") Con el fin de poder cumplir con todas las características técnicas que se deben tener dentro del relleno sanitario, se deben hacer diferentes estudios a fin de garantizar el cumplimiento en el largo tiempo, algunos de estos estudios son:

    
    .cont_gradiente6.mt-5
      .row
        .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
          LineaTiempoD.color-secundario
            p(numero="1" titulo="Estudios topográficos") Permiten definir las características de los diferentes perfiles del terreno para calificarlos según la pendiente, esto permite identificar el área ideal para el relleno, así como el material para la cobertura. Dentro de este estudio se tienen en cuenta las curvas de nivel, la planimetría, la altimetría y la escala.
            div(numero="2" titulo="Estudios geotécnicos")
              p Se recaban datos correspondientes a las propiedades de los suelos y la solución de los posibles problemas que se puedan presentar durante las excavaciones. El objetivo de estos estudios es predecir el comportamiento mecánico del suelo donde se va a construir el relleno, teniendo en cuenta variables como la resistencia, la elasticidad, entre otros. 
              p.mt-4  Para realizar el estudio geotécnico se tienen en cuenta la composición y tipos de suelo, su textura, el perfil, granulometría, compactación, permeabilidad, humedad natural, densidad y tipos de roca presentes.
            p(numero="3" titulo="Estudios hidrogeológicos") A través de estos estudios se localizan los mantos acuíferos y se conoce información de escurrimiento, velocidad, dirección del movimiento y cortes estratigráficos de los suelos, para ello deben hacerse estudios geofísicos con la ubicación de piezómetros o pozo de monitoreo. Existen técnicas como el sondeo eléctrico vertical donde se utilizan electrodos para determinar la resistividad del subsuelo a diferentes profundidades y así poder inferir la composición litológica del mismo y el tipo de fluidos que contiene.
            p(numero="4" titulo="Estudio hidrológico") Es el estudio del agua presente tanto en la atmósfera como en la corteza terrestre del lugar donde se construirá el relleno sanitario, se deben tener registros continuos sobre las cuencas, aguas superficiales y aguas subterráneas que puedan ser afectadas de alguna medida con los residuos. Dentro de estos estudios se tienen en cuenta la precipitación pluvial, la evaporación y transpiración.
        .col-lg-4(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema3/19.svg" data-aos="fade-left")

    .row.mt-5
      .col-lg-3.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/21.svg" data-aos="fade-right")
      .col-lg-9(style="place-self:center;")
        p(data-aos="fade-up") Otro aspecto que se considera relevante es la categorización de los rellenos sanitarios. El Ministerio de Vivienda, Ciudad y Territorio definirá las condiciones mínimas de diseño y operación que deberán ser utilizadas de acuerdo con la siguiente categorización para los sitios de disposición final, a partir del promedio diario registrado durante el último año.
        .row.mt-4.ps-0.ps-lg-4
          .col-lg-6
            ul.lista-ul--separador
              li(data-aos="fade-up")
                i.fas.fa-check-circle(style="color:#4DB1F0;")
                | Categoría I. De 0 a 50 ton/día. 
              li(data-aos="fade-up")
                i.fas.fa-check-circle(style="color:#4DB1F0;")
                | Categoría II. Mayor de 50 hasta 500 ton/día. 
              li(data-aos="fade-up")
                i.fas.fa-check-circle(style="color:#4DB1F0;")
                | Categoría III. Mayor de 500 hasta 3000 ton/día. 
              li(data-aos="fade-up")
                i.fas.fa-check-circle(style="color:#4DB1F0;")
                | Categoría IV. Mayor de 3000 ton/día (Resolución 1784, 2017).
    
    h3.subtitulo_cf(data-aos="fade-up") Métodos de construcción de rellenos sanitarios

    p.mt-4(data-aos="fade-up") Debido a las diferentes condiciones del terreno que se pueden presentar en los lotes dispuestos y la variabilidad de la cantidad de residuos que generan los habitantes de un municipio se han establecido diferentes métodos de construcción de rellenos sanitarios, a fin de minimizar al máximo el impacto ambiental y optimizando recursos.
    .cajon.cajon1.color-primario.p-4.mt-4(style="background-color:#F6F6F6;")
      p.mb-0(data-aos="fade-up") Con el fin de cumplir con las características técnicas que se deben tener dentro del relleno sanitario, se deben hacer diferentes estudios a fin de garantizar el cumplimiento en el largo tiempo, algunos de estos estudios son:

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen) 
    
    .col-lg-10.m-auto.mt-5
      .tarjeta.color-primario.p-4(style="background: linear-gradient(180deg, rgba(66,165,227,1) 0%, rgba(48,118,182,1) 100%);")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/tema1/8.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1.text-white Método de relleno por zanjas mecánico y manual
                p.text-small.text-white Tomado del Ministerio del Ambiente (2012). Guía el cierre técnico de botaderos. Si es de su interés ampliar la información puede ir al siguiente enlace:
              .col-sm-auto
                a.boton.color-primario(href="https://sinia.minam.gob.pe/documentos/guia-diseno-construccion-operacion-mantenimiento-monitoreo-relleno" target="_blank")
                  span(style="color:#12263F !important;") Ir a página
                  i.fas.fa-link(style="color:#12263F !important;")
    
    h3.subtitulo_cf(data-aos="fade-up") Manejo y tratamiento de lixiviados

    p.mt-4(data-aos="fade-up") Indistintamente del método que se utilice en la construcción del relleno sanitario debido al agua presente en los residuos, las entradas de aguas subterráneas y la infiltración del agua lluvia generan lixiviados que deben ser manejados y tratados.

    .row.mt-5
      .col-lg-3.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/22.svg" data-aos="fade-right")
      .col-lg-9(style="place-self:center;")
        p(data-aos="fade-up") Los lixiviados generados por la disolución de los compuestos presentes en los residuos sólidos al contacto con el agua contienen una gran cantidad de materia orgánica altamente contaminante, así como sólidos en suspensión, debido al impacto que pueden generar estos deben contemplarse siempre al diseñar y construir un relleno sanitario. 
        .cajon.cajon1.color-primario.p-4.mt-4(style="background-color:#F6F6F6;")
          p.mb-0(data-aos="fade-up") Además de la materia orgánica y los sólidos suspendidos, cuando se hace un análisis detallado de las características fisicoquímicas de los lixiviados se encuentran compuestos orgánicos volátiles como amonio y metales pesados, lo que hace que el líquido tenga una Demanda Química de Oxígeno (DQO) y una Demanda Bioquímica de Oxígeno (DBO) alta, adicional al riesgo biológico que conlleva por la naturaleza de reproducción de los seres patógenos que pueden estar en este medio acuoso. 
        p.mt-4(data-aos="fade-up") Para ello, existen diferentes métodos de control entre los que se encuentran la evaporación, estabilización, recirculación, procesos biológicos, procesos fisicoquímicos y tecnologías de membranas.
    
    h3.subtitulo_cf(data-aos="fade-up") Operación y mantenimiento del relleno sanitario

    .row.mt-4
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/23.png" data-aos="fade-right")
      .col-lg-8(style="place-self:center;")
        p(data-aos="fade-up") Para poder hacer una operación adecuada se debe contar con los recursos necesarios de acuerdo con la cantidad de residuos sólidos que se disponen en el relleno sanitario, teniendo en cuenta los recursos técnicos y humanos donde existe personal calificado (jefe del relleno sanitario, jefe de laboratorios, técnicos químicos, técnicos del relleno) y el no calificado (choferes de vehículos, portería y labores varias).
        .cajon.cajon1.color-primario.p-4.mt-4(style="background-color:#F6F6F6;")
          p.mb-0(data-aos="fade-up") Las instrucciones y medidas que permitan disponer y almacenar los residuos sólidos, con técnicas sanitarias idóneas, en sitios que reúnan las condiciones físicas y de adecuación, donde la peligrosidad y biodegradabilidad no originen riesgos para la salud de la comunidad ni deterioro del medio ambiente y de los recursos naturales deben incluir los siguientes componentes:
    
    AcordionA.mt-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .col-lg-11.m-auto(titulo="Herramientas")
        p Independiente si el relleno sanitario es semimecanizado o mecanizado se debe contar con una serie de herramientas que pueden ser de apoyo en la operación diaria, entre las que están:
        .row.mt-4
          .col-lg-9.mb-4.mb-lg-0.ps-0.ps-lg-5(style="place-self:center;")
             ul.lista-ul--separador
                li
                  i.fas.fa-check-circle(style="color:#FFA031;")
                  | #[strong Pala:] se utiliza para cargar, descargar y colocar residuos, así como para el mantenimiento de piscinas de lixiviados.
                li
                  i.fas.fa-check-circle(style="color:#FFA031;")
                  | #[strong Azadón o barra:] funcionan para aflojar el terreno, hacer trabajos de arborización y mantenimiento de cunetas.
                li
                  i.fas.fa-check-circle(style="color:#FFA031;")
                  | #[strong Pica:] remover el terreno para excavaciones.
                li
                  i.fas.fa-check-circle(style="color:#FFA031;")
                  | #[strong Rastrillo:] sirve para colocar la cobertura de forma homogénea.
                li
                  i.fas.fa-check-circle(style="color:#FFA031;")
                  | #[strong Machete:] afila herramientas de madera.
                li
                  i.fas.fa-check-circle(style="color:#FFA031;")
                  | #[strong Carretilla:] sirve para transportar los residuos y material de cobertura de forma interna.
          .col-lg-3(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema3/24.png")
      .col-lg-11.m-auto(titulo="Planificación de orden construcción de celdas")
        p El terreno debe ser dispuesto de tal forma que permita la optimización de los recorridos de los vehículos transportadores y de los residuos sólidos hasta la celda donde se van a disponer, al tiempo que se maximiza la vida útil del relleno sanitario.
      .col-lg-11.m-auto(titulo="Registro de los residuos sólidos")
        p De acuerdo con la Presidencia de la República de Colombia (2005) en su Decreto 838 todos los residuos sólidos que ingresen a los rellenos deben ser registrados para totalizar la cantidad del relleno sanitario, la forma más sencilla de hacerlo es a través de una báscula al ingreso de los vehículos donde se evidencia la cantidad de toneladas que este tiene.
      .col-lg-11.m-auto(titulo="Descarga de los residuos")
        .row
          .col-lg-3.mb-4.mb-lg-0(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema3/25.png")
          .col-lg-9(style="place-self:center;")
            p Los residuos se deben descargar lo más cerca posible a la celda donde se dispondrán, con el fin de evitar la dispersión de estos por la acción del viento y minimizar la proliferación de vectores, dependiendo del tipo de relleno serán las condiciones de descarga, por ejemplo, en rellenos manuales los trabajadores depositan los residuos en capas delgadas de un espesor máximo de 30 cm, posterior a ello se debe compactar con una capa de entre 10 a 15 centímetros de tierra. Cuando el relleno es semimecanizado o mecanizado las capas de residuos pueden tener entre 50 y 100 centímetros, lo que permite obtener mejores resultados de compactación. La cobertura se calcula a partir del volumen de los residuos depositados en relación 1:3, es decir, si se depositan 50 m3 de residuos se debe utilizar 16 m3 de tierra para la cobertura.
      .col-lg-11.m-auto(titulo="Compactación de los residuos")
        .row
          .col-lg-9.mb-4.mb-lg-0(style="place-self:center;")
            p Para realizar la compactación se pueden utilizar diferentes tipos de maquinaria entre las que se encuentran los compactadores con ruedas metálicas, cuya principal característica son los dientes en forma de V que hacen presión a los residuos. Los cargadores con ruedas son un equipo tractor, que tiene un cucharón de gran tamaño en su extremo frontal y puede generar presión sobre los residuos. El cargador de orugas es otra de las maquinarias utilizadas para la compactación de residuos, ya que puede excavar, acarrear, apilar, cargar, cubrir, separar, desgarrar, explanar, compactar y nivelar residuos.
          .col-lg-3(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema3/26.png")
      
    p.mt-5(data-aos="fade-up") Adicionalmente, a los compactadores se pueden operar también minicargadores, retroexcavadoras, volquetas, bulldozer y tractores.

    Separador.mt-5

    .titulo-segundo
      h2#t_3_3 3.3 Estrategias de disposición final de residuos peligrosos
    
    .row
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/27.png" data-aos="fade-right")
      .col-lg-8(style="place-self:center;")
        .cajon.cajon1.color-primario.p-4(style="background-color:#F6F6F6;")
          p.mb-0(data-aos="fade-up") Esta es la última opción dentro de la jerarquización del manejo de residuos peligrosos, dado que por sus características de peligrosidad lo que se busca es siempre hacer un tratamiento; sin embargo, pueda que este no sea posible y allí se debe pasar a otros mecanismos:
        ul.lista-ul.mt-4
          li.d-flex(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            p.mb-0 #[strong Celda de seguridad:] cuando los residuos peligrosos no pueden tener un tratamiento por sus características de peligrosidad son llevados a una celda de seguridad (relleno de seguridad), que es un sistema tecnificado para poder disponer de forma controlada y ambientalmente segura los residuos peligrosos.

    .cont_gradiente6.mt-5
      .row
        .col-lg-9.mb-md-0.mb-4.col-md-7(style="place-self:center;")
          .cont_3_1.p-4
            p.mb-0(data-aos="fade-up") De acuerdo con el entonces Ministerio de Ambiente, Vivienda y Desarrollo Territorial (2007), en el documento gestión integral de residuos o desechos peligrosos, un relleno de seguridad es una obra de ingeniería diseñada, construida y operada para confinar los residuos peligrosos en el terreno, a manera general consiste en una o varias celdas para la disposición con elementos de recepción y acondicionamiento del residuo, este relleno suele contar con por lo menos los siguientes sistemas: sistema de impermeabilización de base y taludes de doble barrera, sistema de captación, conducción y tratamiento de lixiviados, sistema de detección de pérdidas y sistema de captación, conducción y manejo de gases, entre otros, ver figura.
        .col-lg-3.col-md-5(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema3/28.svg" data-aos="fade-left" style="position:relative;")
      .col-lg-8.mt-5.m-auto
        .titulo-sexto.color-secundario
          h5.d-block Figura 4
          span  Celda de seguridad
        figure.mt-5
          img(src="@/assets/curso/tema3/29.png" data-aos="zoom-in-up")
          figcaption.p-3.fw-normal.mt-3(style="background-color:#F6F6F6;") #[strong Nota.] Cartilla para la adecuada gestión de residuos y/o desechos peligrosos - aaud
    
    .col-11.m-auto.mt-5
      .row(style="background-color:#F6F6F6;border-radius:10px;box-shadow:rgba(0, 0, 0, 0.1) 0px 5px 9px 0px;")
        .col-auto.p-0.d-flex.align-items-center
          figure
            img(src="@/assets/curso/tema3/30.svg" data-aos="fade-right" style="margin-left: -47px;width: 100px;max-width: 100px;")
        .col.p-0
          .p-4.ps-2
            p.mb-0(data-aos="fade-up") Este tipo de rellenos que contienen residuos peligrosos, deben garantizar el cumplimiento de todos los criterios de aceptación en cuanto a temas de las características de las celdas y la compatibilidad entre los residuos a disponer, además de ello, debe tener un plan de contingencia y un programa de monitoreo ambiental, dado que las autoridades ambientales pueden realizar controles, con el fin de prevenir y minimizar los riesgos de una instalación de este tipo.
    
    Separador.mt-5

    .titulo-segundo
      h2#t_3_4 3.4 Planes de manejo ambiental
    
    p(data-aos="fade-up") De acuerdo con la Alcaldía Mayor de Bogotá (2009), en el documento Guía técnica para la elaboración de Planes de Manejo Ambiental (PMA).

    .row.mt-4
      .col-lg-5.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/31.png" data-aos="fade-right")
      .col-lg-7(style="place-self:center;")
        .cajon.cajon1.color-primario.p-4(style="background-color:#F6F6F6;")
          p.mb-0(data-aos="fade-up") Un PMA es el conjunto detallado de actividades, que producto de una evaluación ambiental, están orientadas a prevenir, mitigar, corregir o compensar los impactos y efectos ambientales que se causen por el desarrollo de un proyecto, obra o actividad. Incluye los planes de seguimiento, monitoreo, contingencia y abandono según la naturaleza del proyecto, obra o actividad (p. 2).
        p.mt-4(data-aos="fade-up") La complejidad de un PMA la define la extensión y el tipo de proyecto a desarrollar, por ello, no existe un estándar exacto que involucre las variables que se deben contemplar para un PMA; sin embargo, a manera general se podría establecer los siguientes pasos metodológicos mínimos para desarrollarlo:
    
    .cont_gradiente3.mt-5
      .col-lg-10.m-auto
        PasosA.color-primario.mb-5(tipo="n")
          .row
            .col-lg-2.col-md-4.mb-4.mb-md-0(style="place-self:center;")
              figure.text-center
                img(src='@/assets/curso/tema3/32.svg' data-aos="fade-right" style="max-width:80px;display:inline;")
            .col-lg-10.col-md-8(style="place-self:center;")
              div(data-aos="fade-left")
                h5 Datos generales de la organización
                p Toda la información que identifique totalmente quién va a planear y a implementar el PMA.
          .row
            .col-lg-10.col-md-8.mb-4.mb-md-0(style="place-self:center;")
              .text-start(data-aos="fade-right")
                h5 Disponer de su ficha de datos de seguridad (FDS) u hoja de seguridad
                p Es una síntesis del trabajo, su objetivo es permitir que el lector tenga una visión general del documento. Describe las actividades a ejecutar y los resultados esperados, prestando particular atención a las medidas formuladas para mitigar o eliminar los impactos ambientales negativos que la actividad puede causar sobre el medio ambiente y la comunidad; también describe los programas de implementación y cronogramas correspondientes (Alcaldía Mayor de Bogotá, 2009).
            .col-lg-2.col-md-4(style="place-self:center;")
              figure.text-center
                img(src='@/assets/curso/tema3/33.svg' data-aos="fade-left" style="max-width:80px;display:inline;")
          .row
            .col-lg-2.col-md-4.mb-4.mb-md-0(style="place-self:center;")
              figure.text-center
                img(src='@/assets/curso/tema3/34.svg' data-aos="fade-right" style="max-width:80px;display:inline;")
            .col-lg-10.col-md-8(style="place-self:center;")
              div(data-aos="fade-left")
                h5 Marco legal
                p Incluir toda la base legal que sustente el plan de manejo, citando los artículos o partes que deben ser aplicados en la obra o proyecto, esto es de vital importancia para toda la organización, pues es la base legal la que brinda la amplitud, extensión y rigurosidad de los programas que se planteen.
          .row
            .col-lg-10.col-md-8.mb-4.mb-md-0(style="place-self:center;")
              .text-start(data-aos="fade-right")
                h5 Objetivos
                p Teniendo en cuenta que el PMA busca eliminar o mitigar progresivamente en plazos racionales los impactos ambientales negativos causados por una actividad en desarrollo, aplicando prioritariamente actividades de prevención de la contaminación, por ello se debe establecer objetivos claros, medibles y verificables que den respuesta real a los impactos esperados.
            .col-lg-2.col-md-4(style="place-self:center;")
              figure.text-center
                img(src='@/assets/curso/tema3/35.svg' data-aos="fade-left" style="max-width:80px;display:inline;")
          .row
            .col-lg-2.col-md-4.mb-4.mb-md-0(style="place-self:center;")
              figure.text-center
                img(src='@/assets/curso/tema3/36.svg' data-aos="fade-right" style="max-width:80px;display:inline;")
            .col-lg-10.col-md-8(style="place-self:center;")
              div(data-aos="fade-left")
                h5 Política ambiental
                p Una política que esté encaminada a ser la base del compromiso organizacional de cumplimiento de los lineamientos ambientales usualmente debe estar acompañada de objetivos ambientales que puedan ser medidos.
          .row
            .col-lg-10.col-md-8.mb-4.mb-md-0(style="place-self:center;")
              .text-start(data-aos="fade-right")
                h5 Descripción del área de influencia
                p La zona de influencia se delimitará con respecto a la ubicación y amplitud de los componentes ambientales con los que el proyecto tendrá alguna interacción.
            .col-lg-2.col-md-4(style="place-self:center;")
              figure.text-center
                img(src='@/assets/curso/tema3/37.svg' data-aos="fade-left" style="max-width:80px;display:inline;")
          .row
            .col-lg-2.col-md-4.mb-4.mb-md-0(style="place-self:center;")
              figure.text-center
                img(src='@/assets/curso/tema3/38.svg' data-aos="fade-right" style="max-width:80px;display:inline;")
            .col-lg-10.col-md-8(style="place-self:center;")
              div(data-aos="fade-left")
                h5 Identificación y evaluación de impactos y riesgos
                p Usar metodologías de evaluación que logren determinar o categorizar tanto los impactos como los riesgos más relevantes y de mayor importancia.
          .row
            .col-lg-10.col-md-8.mb-4.mb-md-0(style="place-self:center;")
              .text-start(data-aos="fade-right")
                h5 Sistema de indicadores
                p Los indicadores corresponden a parámetros e índices que permiten evaluar la calidad de los principales elementos ambientales afectados por las actividades humanas, así como sobre la cantidad y calidad de recursos naturales seleccionados (Alcaldía Mayor de Bogotá, 2009, p. 20).
            .col-lg-2.col-md-4(style="place-self:center;")
              figure.text-center
                img(src='@/assets/curso/tema3/39.svg' data-aos="fade-left" style="max-width:80px;display:inline;")
          .row
            .col-lg-2.col-md-4.mb-4.mb-md-0(style="place-self:center;")
              figure.text-center
                img(src='@/assets/curso/tema3/40.svg' data-aos="fade-right" style="max-width:80px;display:inline;")
            .col-lg-10.col-md-8(style="place-self:center;")
              div(data-aos="fade-left")
                h5 Programas
                p Definir la cantidad de programas necesarios para la gestión es elemental en un plan de manejo, estas son las herramientas que se aplican para contrarrestar los posibles impactos y sus efectos, dentro de los más comunes se encuentran el programa de mitigación, programa de medidas compensatorias, programa de contingencias y riesgos, programa de seguimiento, evaluación y control, programa de capacitación.
    
    .col-lg-10.m-auto.mt-5
      .tarjeta.color-primario.p-4(style="background: linear-gradient(180deg, rgba(66,165,227,1) 0%, rgba(48,118,182,1) 100%);")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/tema1/8.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1.text-white Guía técnica para la elaboración de Planes de Manejo Ambiental (PMA)
                p.text-small.text-white Para ampliar la información sobre los planes de manejo ambiental se invita a leer el documento, que se encuentra en el material complementario.
              .col-sm-auto
                a.boton.color-primario(href="https://oab.ambientebogota.gov.co/?post_type=dlm_download&p=3825" target="_blank")
                  span(style="color:#12263F !important;") Descargar
                  i.fas.fa-file-download(style="color:#12263F !important;")
    
    h3.subtitulo_cf(data-aos="fade-up")  Planes de contingencia

    p.mt-4(data-aos="fade-up") Uno de los elementos más importantes en el manejo de los residuos es el denominado plan de contingencia, el cual es un elemento que se encuentra inmerso dentro del plan de emergencias de toda entidad.

    .row.mt-4
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/41.svg" data-aos="fade-right")
      .col-lg-8(style="place-self:center;")
        p(data-aos="fade-up") De acuerdo con la Dirección de Prevención y Atención de Emergencias -DPAE- (2009), en su documento Guía para elaborar planes de emergencia y contingencias, describe este documento como el instrumento principal que define las políticas, los sistemas de organización y los procedimientos generales aplicables para enfrentar de manera oportuna, eficiente y eficaz las situaciones de calamidad, desastre o emergencia en sus distintas fases, con el fin de mitigar o reducir los efectos negativos o lesivos de las situaciones que se presenten en la organización (p.18).
        .cajon.cajon1.color-primario.p-4.mt-4(style="background-color:#F6F6F6;")
          p.mb-0(data-aos="fade-up") En el caso específico de planes de contingencia el mismo documento brinda una definición indicando que es el que desarrolla en detalle aspectos pertinentes para la respuesta que solo son propios del riesgo y del territorio al que esté referido. Los planes de contingencia se organizan por tipo de riesgo, tales como deslizamientos, inundaciones, incendios forestales, materiales peligrosos y aglomeraciones de público, entre otros. Los planes de contingencia pueden ser desarrollados por la administración distrital en sus diferentes niveles (central, institucional o local), por el sector privado y por la comunidad (p.14).

    p.mt-5(data-aos="fade-up") En este caso se podría resumir que los planes de contingencia se deben basar en los potenciales escenarios de riesgo del sistema de disposición final o de gestión de los residuos, los cuales deben obtenerse del análisis de vulnerabilidad realizado, de acuerdo con las amenazas que pueden afectar a la organización durante su funcionamiento, razón para analizar los siguientes puntos:

    .row.mt-5
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        LineaTiempoD.color-secundario
          div(numero="1" titulo="Partes del plan de contingencia")
            p Debe incluir procedimientos generales de atención de emergencias y procedimientos específicos para cada escenario de riesgo identificado, dando cumplimiento a los siguientes parámetros mínimos:
            ul.lista-ul--separador.mt-3
              li
                i.fas.fa-check-circle(style="color:#FFA031;")
                | Análisis de riesgo.
              li
                i.fas.fa-check-circle(style="color:#FFA031;")
                | Identificación y caracterización de peligros y amenazas.
              li
                i.fas.fa-check-circle(style="color:#FFA031;")
                | Análisis de vulnerabilidad por amenazas.
              li
                i.fas.fa-check-circle(style="color:#FFA031;")
                | Definición de los escenarios de riesgo.
              li
                i.fas.fa-check-circle(style="color:#FFA031;")
                | Organización del plan de emergencias.
              li
                i.fas.fa-check-circle(style="color:#FFA031;")
                | Puesta en marcha del plan de emergencias.
              li
                i.fas.fa-check-circle(style="color:#FFA031;")
                | Responsables de la elaboración y puesta en marcha del plan de contingencias.
          div(numero="2" titulo="Análisis de riesgos")
            p Los riesgos se analizan a través de una evaluación que estima la probabilidad de ocurrencia de un evento no deseado, según la obtención de la severidad y de las consecuencias en la seguridad, salud, medio ambiente y/o bienestar público.
            p.mt-3 Según la Dirección de Prevención y Atención de Emergencias DPAE (2009) la evaluación considera la naturaleza del riesgo, su facilidad de acceso o vía de contacto, las características del sector y/o población expuesta, la posibilidad de que ocurra y la magnitud de exposición y sus consecuencias, permitiendo definir medidas que minimicen los impactos que puedan generarse. 
          div(numero="3" titulo="Identificación de amenazas")
            p Se entiende por amenaza, la probabilidad de que un fenómeno de origen natural o humano eventualmente cause daño y genere pérdidas, y que se produzca en un determinado tiempo y lugar.
            p.mt-3 La descripción de la amenaza debe detallarse al máximo posible y esta incluye el punto crítico y definir si es de origen interno o externo. 
          div(numero="4" titulo="Análisis de vulnerabilidad por amenaza")
            p Proceso donde se determina el nivel de exposición y predisposición a la pérdida de uno o varios elementos ante una amenaza específica. El grado de vulnerabilidad que se tiene frente a una amenaza específica está relacionado con la organización interna para prevenir o controlar aquellos factores que originan el peligro, al igual que su preparación para minimizar las consecuencias.
            p.mt-3 El Reglamento Técnico del Sector Agua Potable y Saneamiento Básico (RAS) en su título G, establece una metodología para realizar un análisis de vulnerabilidad.
          div(numero="5" titulo="Definición de los escenarios de riesgo")
            p Los resultados del análisis de riesgos determinan los escenarios en los que se prioriza la intervención. Las matrices de severidad del riesgo y de niveles de planificación permiten desarrollar planes de gestión. 
            p.mt-3 Los riesgos más comunes asociados a sitios de disposición de residuos se pueden encontrar:
            ul.lista-ul--separador.mt-4.ps-0.ps-lg-4
              li
                i.fas.fa-check-circle(style="color:#FFA031;")
                | Filtración de lixiviados en aguas subterráneas.
              li
                i.fas.fa-check-circle(style="color:#FFA031;")
                | Escape de agua superficial contaminada hacia el suelo y hacia el recurso hídrico.
              li
                i.fas.fa-check-circle(style="color:#FFA031;")
                | Combustión incontrolada.
              li
                i.fas.fa-check-circle(style="color:#FFA031;")
                | Migración de gas hacia el suelo y el aire.
              li
                i.fas.fa-check-circle(style="color:#FFA031;")
                | Desestabilización de suelos por residuos inestables. 
          div(numero="6" titulo="Organización del plan de emergencias")
            p Una vez obtenida la información de las posibles contingencias se debe proceder a realizar las acciones encaminadas a un plan de emergencia general, dentro de las que se pueden mencionar las siguientes:
            ul.lista-ul--separador.mt-4.ps-0.ps-lg-4
              li
                i.fas.fa-check-circle(style="color:#FFA031;")
                | Aislamiento.
              li
                i.fas.fa-check-circle(style="color:#FFA031;")
                | Señalización.
              li
                i.fas.fa-check-circle(style="color:#FFA031;")
                | Definición de puntos de encuentro y vías de escape.
              li
                i.fas.fa-check-circle(style="color:#FFA031;")
                | Determinación de la cantidad y localización estratégica de equipos de seguridad y protección individual.
              li
                i.fas.fa-check-circle(style="color:#FFA031;")
                | Definición de procedimientos contra derrames, fugas e incendios.
      .col-lg-4(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/42.svg" data-aos="fade-left")
    
    .col-lg-10.m-auto.mt-5
      .tarjeta.color-primario.p-4(style="background: linear-gradient(180deg, rgba(66,165,227,1) 0%, rgba(48,118,182,1) 100%);")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/tema1/8.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1.text-white Guía para elaborar planes de emergencia y contingencia
                p.text-small.text-white Para ampliar la información de planes de emergencia y contingencia se invita a consultar el documento, que se encuentra en el material complementario:
              .col-sm-auto
                a.boton.color-primario(href="https://bibliotecadigital.ccb.org.co/bitstream/handle/11520/14249/Gu%c3%ada%20para%20elaborar%20planes%20de%20emergencia.pdf?sequence=1&isAllowed=y" target="_blank")
                  span(style="color:#12263F !important;") Descargar
                  i.fas.fa-file-download(style="color:#12263F !important;")
    
    h3.subtitulo_cf(data-aos="fade-up") Permisos y licencias

    p.mt-4(data-aos="fade-up") De acuerdo con la superintendencia de servicios públicos domiciliarios (2016), en su documento Disposición final de residuos sólidos informe nacional 2015, la disposición final de los residuos sólidos es una actividad de interés nacional por lo que se hace necesaria la creación de diferentes leyes, decretos y resoluciones que permitan regular esta actividad. Dentro de la regulación creada se planteó otorgar permisos y licencias a las empresas que cumplan con las condiciones técnicas, a fin de poder mejorar la calidad de la disposición que se realiza en el país.

    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/43.png" data-aos="fade-right")
      .col-lg-1
      .col-lg-7(style="place-self:center;")
        .h-100.p-4.p-lg-5.cont_arrow1(style="background-color:#EAF4FB;border-radius:10px;")
          p.mb-0(data-aos="fade-up") Desde el Departamento Nacional de Planeación (DNP) con el Plan Nacional de Desarrollo (PND) 2014 - 2018 Todos por un nuevo país (2015), promulgado desde la Ley 1753 de 2015, se busca fortalecer la gestión de residuos sólidos en todos sus componentes, inicialmente se busca que cada vez sean menos los municipios que disponen sus residuos sólidos en lugares no autorizados o que incumplan los requerimientos técnicos para realizar esta labor.
    
    p.mt-5(data-aos="fade-up") Adicionalmente a esto se busca el aprovechamiento de los residuos sólidos, con el objetivo de minimizar los impactos ambientales, al tiempo que se extiende la vida útil de los rellenos sanitarios que cumplen con las condiciones técnicas hoy en día.

    .row.mt-5
      .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
        .h-100.p-4.p-lg-5.cont_arrow2(style="background-color:#EAF4FB;border-radius:10px;")
          p.mb-0(data-aos="fade-up") Con el fin de evitar que un residuo generado con potencial de aprovechamiento sea dispuesto en un relleno sanitario, el documento CONPES 3874 actualizó la política nacional para la Gestión Integral de Residuos Sólidos (PGIRS), enfocando las prioridades en la jerarquía de la gestión de residuos en la prevención de la generación de los residuos, su aprovechamiento, tratamiento y dejando como última opción la disposición final.
      .col-lg-1
      .col-lg-4(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/44.png" data-aos="fade-left")
    
    p.mt-5(data-aos="fade-up") Para lograr una mejor gestión, desde la Ley 142 de 1994 se estableció que las empresas que presten servicio público están obligadas a obtener los permisos ambientales y sanitarios que la actividad que presten haga necesario.

    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/45.svg" data-aos="fade-right")
      .col-lg-8(style="place-self:center;")
        p(data-aos="fade-up") De este modo, teniendo en cuenta el régimen normativo ambiental y los impactos ambientales que genera la acción de residuos sólidos, los rellenos sanitarios requieren de una licencia ambiental para poder operar; sin embargo, se debe hacer una especificación que los rellenos sanitarios que iniciaron operación antes del año 1993 no requerían de licencia ambiental puesto que estas no existían, así pues, pueden operar con un Plan de Manejo Ambiental (PMA) aunque están en un régimen de transición ambiental. 
        .cajon.cajon1.color-primario.p-4.mt-4(style="background-color:#F6F6F6;")
          p.mb-0(data-aos="fade-up") De acuerdo con el Decreto 1220 de 2005 la Presidencia de la República  de Colombia establece la licencia ambiental como una autorización que otorga la autoridad ambiental competente para la ejecución de un proyecto, obra o actividad. Esta licencia no se otorga a cualquier empresa, ni a cualquier proyecto, solo se tienen en cuenta aquellos que pueden producir un deterioro grave a los recursos naturales o al medio ambiente, una vez se logre obtener la licencia ambiental se deben cumplir con todos los requisitos, términos, condiciones y obligaciones relacionadas con la prevención, mitigación, corrección, compensación y manejo de los efectos ambientales.
    
    .row.mt-5
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="fade-up") La licencia ambiental se exige para la construcción y operación de rellenos sanitarios de acuerdo con lo estipulado por la Presidencia de la República, a través del Decreto 1220 de 2005 en su Artículo 9, así mismo, en el Parágrafo 6 cita que #[strong #[em “cuando el aprovechamiento o el almacenamiento temporal de residuos sólidos requieran del uso y aprovechamiento de los recursos naturales, deberán contar con los permisos, concesiones o autorizaciones necesarias. Asimismo, la disposición final de los subproductos no aprovechables que se generen en desarrollo de estas actividades, deberá realizarse en un sistema de disposición final autorizado por la autoridad ambiental competente”]].
        .cajon.cajon1.color-primario.p-4.mt-4(style="background-color:#F6F6F6;")
          p.mb-0(data-aos="fade-up") La licencia ambiental se otorga al proyecto de forma global y por toda su vida útil, desde la construcción y montaje hasta el desmantelamiento y abandono, debido a esto lleva implícitos todos los permisos, autorizaciones y concesiones para el uso de los recursos naturales.
      .col-lg-4(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/46.png" data-aos="fade-left")

    .col-lg-10.m-auto.mt-5
      .tarjeta.color-primario.p-4(style="background: linear-gradient(180deg, rgba(66,165,227,1) 0%, rgba(48,118,182,1) 100%);")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/tema1/8.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1.text-white Decreto 1220 de 2005
                p.text-small.text-white Para ampliar la información de permisos y licencias se invita a consultar el Decreto, que se encuentra en el material complementario.
              .col-sm-auto
                a.boton.color-primario(href="https://www.icbf.gov.co/cargues/avance/docs/decreto_1220_2005.ht" target="_blank")
                  span(style="color:#12263F !important;") Descargar
                  i.fas.fa-file-download(style="color:#12263F !important;")




</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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
.linea-tiempo-d.color-secundario .linea-tiempo-d__item--selected .linea-tiempo-d__item__number
  background-color: #3076B6
  color: #fff
.tarjeta.tarjeta--azul.acordion__activo
  background-color: #EDF7FE
.cont_3_1, .cont_3_1 *
  position: relative
.cont_3_1:before
  content: ''
  position: absolute
  top: 0
  border-radius: 50px 0px 0px 0px
  width: 115%
  left: 0
  height: 100%
  background-color: #F6F6F6
.pasos-a__linea__esquina__linea
  border-radius: 0px
.pasos-a.color-primario .pasos-a__linea .hor-line
  border-top-color: #12263F
.pasos-a.color-primario .pasos-a__linea__esquina__linea
  border-color: #12263F
.pasos-a.color-primario .pasos-a__numero::after
  border-left-color: #12263F
.pasos-a.color-primario .pasos-a__circle
  background-color: #fff
  border: 6px #FFA031 solid
.cont_arrow1, .cont_arrow1 *
  position: relative
.cont_arrow1:before
  content: ''
  position: absolute
  width: 150px
  height: 150px
  left: -70px
  top: 20%
  background-color: #EAF4FB
  transform: rotate(45deg)
.cont_arrow2, .cont_arrow2 *
  position: relative
.cont_arrow2:before
  content: ''
  position: absolute
  width: 150px
  height: 150px
  right: -70px
  top: 20%
  background-color: #EAF4FB
  transform: rotate(45deg)
@media screen and (max-width: 992px)
  .cont_arrow1:before, .cont_arrow2:before
    display: none
</style>
