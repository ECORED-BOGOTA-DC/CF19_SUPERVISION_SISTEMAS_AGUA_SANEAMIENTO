<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Impactos ambientales

    .row
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/1.png" data-aos="fade-right")
      .col-lg-8(style="place-self:center;")
        p(data-aos="fade-up") La finalidad que tiene la disposición final es la de aislar y confinar de forma definitiva los residuos sólidos, especialmente los que son no aprovechables, debido a esto se pueden generar diferentes impactos ambientales negativos asociados a la naturaleza de cada residuo.
        .cajon.cajon1.color-primario.p-4.mt-4(style="background-color:#F7F8FB;")
          p.mb-0(data-aos="fade-up") Para disminuir estos impactos, la disposición final debe hacerse en sitios especialmente seleccionados y diseñados para evitar riesgos a la salud humana y al medio ambiente, al tiempo que se busca minimizar los costos.
    
    Separador.mt-5

    .titulo-segundo
      h2#t_2_1 2.1 Identificación de aspectos e impactos asociados a la disposición final
    
    figure.mb-md-0.mb-4
      img(src="@/assets/curso/tema2/2.png" data-aos="zoom-in-up")
    .col-lg-10.m-auto
      .p-4.cont_gradiente_gris
        p.mb-0(data-aos="fade-up") Es de vital importancia, ya que permite hacer una evaluación, posterior mitigación y control de los mismos; los impactos se pueden dividir en:
    
    h3.subtitulo_cf(data-aos="fade-up") Impactos a la salud humana

    p.mt-4(data-aos="fade-up") La mala disposición de residuos sólidos afecta la salud y puede propagar enfermedades a través de animales e insectos, además de contaminar el aire y agua. También puede tener un impacto negativo en el medio ambiente al afectar a la flora y fauna y liberar gases tóxicos al aire. Es importante una gestión adecuada de los residuos sólidos para evitar estos riesgos.

    .cont_1.p-4.mt-4
      .row
        .col-lg-1.col-md-3.text-center.mb-4.mb-md-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema2/3.svg" data-aos="fade-right" style="display:inline;max-width:100px;")
        .col-lg-11.col-md-9(style="place-self:center;")
          p.mb-0(data-aos="fade-left") Una gestión inadecuada de la disposición final de los residuos sólidos tiene un impacto directo en la salud de las personas, ya que se pueden presentar situaciones como por ejemplo:
    
    .row.mt-5
      .col-lg.mb-4.mb-lg-0
        .tarjeta.tarjeta1_1.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/4.png')})`}")
              h5.mb-0.p-3.w-100(style="position:absolute;bottom:0;background-color:rgba(0,118,168,.95);") Quema no controlada de los residuos
            .tarjeta-flip__contenido
              .p-4.p-xl-5.h-100.d-flex.align-items-center.flex-wrap.align-content-center(style="background-color: rgba(11,111,155,.95) !important")
                p.fw-bold.mb-0 Quema no controlada de los residuos
                p.mt-3.mb-0 Genera emisiones con contaminantes que pueden ser inhalados por la población cercana al lugar donde se realice la disposición final, estos contaminantes tales como material articulado y compuestos orgánicos presentan características cancerígenas, por lo que representa un alto riesgo  para la salud pública, adicional a esto, en lugares donde se presentan emisiones por combustión se diagnostica un número mayor de infecciones respiratorias agudas y otras enfermedades asociadas a las vías respiratorias.
      .col-lg.mb-4.mb-lg-0
        .tarjeta.tarjeta2_2.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/5.png')})`}")
              h5.mb-0.p-3.w-100(style="position:absolute;bottom:0;background-color:rgba(0,139,138,.95);") Reproducción de vectores
            .tarjeta-flip__contenido
              .p-4.p-xl-5.h-100.d-flex.align-items-center.flex-wrap.align-content-center(style="background-color: rgba(0,139,138,.95) !important")
                p.fw-bold.mb-0 Reproducción de vectores
                p.mt-3.mb-0 La acumulación de residuos y la posibilidad de que estos bloqueen drenajes en caso de que la disposición se haga de forma inadecuada permite la reproducción de vectores que incrementa el número de casos de enfermedades infecciosas dentro de la población, entre otras, las enfermedades que se presentan con mayor frecuencia son el cólera y el dengue.
      .col-lg
        .tarjeta.tarjeta3_3.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/6.png')})`}")
              h5.mb-0.p-3.w-100(style="position:absolute;bottom:0;background-color:rgba(0,118,168,.95);") Contaminación de aguas
            .tarjeta-flip__contenido
              .p-4.p-xl-5.h-100.d-flex.align-items-center.flex-wrap.align-content-center(style="background-color: rgba(11,111,155,.95) !important")
                p.fw-bold.mb-0 Contaminación de aguas
                p.mt-3.mb-0 Una incorrecta disposición de los residuos sólidos permitiría que los lixiviados generados se mezclen con aguas subterráneas que pueden ser consumidas posteriormente por la población, incrementando de este modo los casos por indigestión, intoxicación con metales pesados (en el caso de lixiviados de residuos peligrosos) e incluso la muerte.
    
    h3.subtitulo_cf(data-aos="fade-up") Impactos al medio ambiente

    p.mt-4(data-aos="fade-up") La acumulación de residuos sólidos trae dos consecuencias intrínsecas, la primera es la generación de gases y la segunda es la generación de lixiviados, esto implica:

    .cont_gradiente3.mt-5
      .row
        .col-lg-5.mb-4.mb-lg-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema2/7.svg" data-aos="fade-right")
        .col-lg-7(style="place-self:center;")
          LineaTiempoD.color-secundario
            p(numero="1" titulo="Efecto invernadero") El principal componente en las emisiones que se generan al disponer los residuos sólidos es el metano, este gas tiene un potencial de calentamiento superior al del dióxido de carbono, por lo que su emisión contribuye en gran parte a la problemática mundial de efecto invernadero.
            p(numero="2" titulo="Agotamiento de la capa de ozono") Adicional a las problemáticas de efecto invernadero causadas por el metano, este gas tiene la propiedad de reaccionar con los radicales libres presentes en la capa de ozono, generando oxígeno y disminuyendo así la concentración de ozono.
            p(numero="3" titulo="Olor") Los procesos biológicos realizados por microorganismos generan olores ofensivos que pueden afectar a la comunidad que habita cerca a los lugares donde se disponen los residuos sólidos, el componente que mayor afectación genera es el gas sulfhídrico H#[sub 2]S.
            p(numero="4" titulo="Daño en la vegetación y ecotoxicidad") Los lixiviados generados por los residuos sólidos no peligrosos normalmente tienen un pH ácido, por lo que puede afectar a ciertas especies de plantas, así mismo, los generados por residuos peligrosos normalmente tienen compuestos que generan toxicidad al suelo, agua y afectan las especies vegetales.
    
    h3.subtitulo_cf(data-aos="fade-up") Impactos socioeconómicos

    p.mt-4(data-aos="fade-up") La disposición final de los residuos requiere de espacios, políticas, obras en los que la comunidad se ve involucrada directamente, por ello, se ven algunos impactos que los afectan:

    .col-11.m-auto.mt-4
      .row(style="background: linear-gradient(180deg, rgba(222,222,222,1) 0%, rgba(255,255,255,1) 50%, rgba(222,222,222,1) 100%);border-radius:8px;")
        .col-auto.p-0.d-flex.align-items-center
          figure
            img(src="@/assets/curso/tema2/8.svg" data-aos="fade-right" style="margin-left: -47px;width: 100px;max-width: 100px;")
        .col.p-0
          .p-4.ps-4
            h5(data-aos="fade-up") Pérdida del valor del suelo
            p.mb-0(data-aos="fade-up") Debido a la adquisición de terrenos que realizan las empresas para poder disponer los residuos sólidos y los impactos generados por esta actividad, los predios que colindan con la organización tienden a perder valor catastral, afectando así a sus propietarios.
    
    .col-11.m-auto.mt-4
      .row(style="background: linear-gradient(180deg, rgba(222,222,222,1) 0%, rgba(255,255,255,1) 50%, rgba(222,222,222,1) 100%);border-radius:8px;")
        .col-auto.p-0.d-flex.align-items-center
          figure
            img(src="@/assets/curso/tema2/9.svg" data-aos="fade-right" style="margin-left: -47px;width: 100px;max-width: 100px;")
        .col.p-0
          .p-4.ps-4
            h5(data-aos="fade-up") Generación de empleo
            p.mb-0(data-aos="fade-up") Para realizar las diferentes actividades relacionadas con la disposición final de los residuos sólidos se requiere personal capacitado, por lo que aumenta el nivel de ingresos de la población.
    
    Separador.mt-5

    .titulo-segundo
      h2#t_2_2 2.2 Evaluación del impacto ambiental
    
    .cont_gradiente4
      figure.mb-md-0.mb-4
        img(src="@/assets/curso/tema2/10.png" data-aos="zoom-in-up")
      .col-lg-10.m-auto
        .p-4.cont_gradiente_gris
          p.mb-0(data-aos="fade-up") El objetivo principal es establecer a través de los factores ambientales considerados los indicadores que sean capaces de medirlo, las unidades y las magnitudes, representando así el impacto neto sobre el medio ambiente.
      
      .row.mt-5
        .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema2/12.png" data-aos="fade-right")
        .col-lg-8(style="place-self:center;")
          p(data-aos="fade-up") Para evaluar el impacto ambiental se debe hacer una valoración cualitativa de estos, posteriormente un análisis general de la disposición de los residuos donde se tienen en cuenta las áreas afectadas y la relación de la actividad con los impactos generados y finalmente, se debe hacer una definición del área de influencia directa e indirecta haciendo una descripción del medio físico, biótico y abiótico.
          .cajon.cajon1.color-primario.p-4.mt-4(style="background-color:#DBF5FF;")
            p.mb-0(data-aos="fade-up") Una de las metodologías más utilizadas para la evaluación del impacto ambiental generado por la disposición de los residuos sólidos es la de Vicente Conesa, allí los impactos obtienen un nivel de importancia de acuerdo con las siguientes variables:
      .row.mt-5
        .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
          ul.lista-ul--separador
            li(data-aos="fade-up")
              i.fas.fa-check-circle(style="color:#4DB1F0;")
              | #[strong Signo:] identifica si el impacto es positivo (+) o si es negativo (-).
            li(data-aos="fade-up")
              i.fas.fa-check-circle(style="color:#4DB1F0;")
              | #[strong Intensidad:] nivel de incidencia de la acción sobre el medio ambiente (1 poca incidencia, 12 destrucción total).
            li(data-aos="fade-up")
              i.fas.fa-check-circle(style="color:#4DB1F0;")
              | #[strong Extensión:] área de influencia teórica del impacto (1 puntual, 12 crítico).
            li(data-aos="fade-up")
              i.fas.fa-check-circle(style="color:#4DB1F0;")
              | #[strong Momento:] tiempo en el que un impacto se manifiesta una vez se realiza la acción que lo genera (1 largo plazo, 8 crítico).
            li(data-aos="fade-up")
              i.fas.fa-check-circle(style="color:#4DB1F0;")
              | #[strong Persistencia:] tiempo de permanencia del impacto una vez aparece (1 fugaz, 4 permanente).
            li(data-aos="fade-up")
              i.fas.fa-check-circle(style="color:#4DB1F0;")
              | #[strong Reversibilidad:] es la posibilidad de reconstrucción del factor afectado a sus condiciones iniciales por medios naturales (1 corto plazo, 4 irreversible).
        .col-lg-4(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema2/13.svg" data-aos="fade-left")
    
    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/14.svg" data-aos="fade-right")
      .col-lg-8(style="place-self:center;")
        ul.lista-ul--separador
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            | #[strong Recuperabilidad:] es la posibilidad de reconstrucción del factor afectado a sus condiciones iniciales por la acción del ser humano (1 recuperación inmediata, 4 irrecuperable).
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            | #[strong Sinergia:] es el reforzamiento de dos o más efectos simples (1 sin sinergismo, 4 muy sinérgico).
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            | #[strong Acumulación:] es el incremento progresivo de los efectos, incluso cuando se deja de hacer la acción que lo genera (1 simple, 4 acumulativo).
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            | #[strong Efecto:] es la forma de manifestación de un impacto (1 indirecto, 4 directo).
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            | #[strong Periodicidad:] regularidad de la manifestación de los efectos (1 irregular, 4 continuo).
    
    .cont_gradiente5.pt-5
      p(data-aos="fade-up") De este modo, la importancia se obtiene a partir de la ecuación:
      .col-lg-6.m-auto.mt-5
        .p-4(style="background: linear-gradient(180deg, rgba(222,222,222,1) 0%, rgba(255,255,255,1) 50%, rgba(222,222,222,1) 100%);border-radius: 10px;box-shadow: 0px 0px 10px 5px rgba(0,0,0,.055)")
          h3.mb-0.text-center(data-aos="fade-up") I= ± [3i +2EX+MO+PE +RV +SI +AC +EF+ PR +MC]
      p.mt-5(data-aos="fade-up") Los resultados se pueden interpretar de la siguiente manera:

      .col-lg-8.mt-5.m-auto
        .titulo-sexto.color-secundario
          h5.d-block Tabla 2
          span Niveles de importancia
        .tabla-a.color-secundario.mt-4
          table
            caption.p-3.fw-normal.mt-3(style="background-color:#F6F6F6;") #[strong Nota:] SENA (s.f.).
            thead
              tr(style="background-color:#DBEFFC;")
                th Importancia
                th Calificación
                th Significado
            tbody
              tr.bg-white
                td.p-4.text-center.fw-bold < 25
                td.p-4 Bajo
                td.p-4 La afectación que se realiza es irrelevante en comparación a los objetivos de la disposición de los residuos.
              tr(style="background-color:#F6FBFF;")
                td.p-4.text-center.fw-bold 25b≥ < 50
                td.p-4 Moderado
                td.p-4 La afectación que realiza la disposición de los residuos no precisa prácticas correctoras o protectoras intensivas.
              tr.bg-white
                td.p-4.text-center.fw-bold 50 ≥ < 75
                td.p-4 Severo
                td.p-4 La disposición de los residuos exige la recuperación de condiciones del medio afectado.
              tr(style="background-color:#F6FBFF;")
                td.p-4.text-center.fw-bold ≥ 75
                td.p-4 Crítico
                td.p-4 Se superó el umbral aceptable, hay pérdida permanente de condiciones ambientales. No hay posibilidad de recuperación.
    
    .cajon.cajon1.color-primario.p-4.mt-5(style="background-color:#F6F6F6;")
      p.mb-0(data-aos="fade-up") La matriz de Vicente Conesa es una de las metodologías más utilizadas; sin embargo, para hacer la evaluación de impactos ambientales por la disposición final de los residuos sólidos existen otras metodologías matriciales entre las que se encuentran:
    
    p.mt-5(data-aos="fade-up") #[strong Matriz de Leopold], desarrollada en los años 70 por el Dr. Luna Leopold y colaboradores, de acuerdo con el documento de Corantioquia, Metodologías para la identificación y evaluación de impactos ambientales, la matriz de Leopold es un método de identificación de impactos ambientales y valoración cualitativa, esta matriz relaciona 100 acciones con 90 factores ambientales, fue desarrollado por el Doctor Luna Leopold y colaboradores en los años 70, es útil para la evaluación preliminar de aquellos proyectos en los que se prevén grandes impactos ambientales, esta matriz solo identifica el impacto y su origen; pero no les proporciona ningún valor, para utilizar la matriz se debe:

    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/16.svg" data-aos="fade-right")
      .col-lg-8(style="place-self:center;")
        ul.lista-ul--separador
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            | Delimitar el área de influencia.
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            | Determinar las acciones que ejercerá el proyecto sobre el área. 
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            | Determinar para cada acción qué elementos se afectan. Esto se logra mediante el rayado correspondiente a la cuadrícula de interacción. 
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            | Determinar la importancia de cada elemento en una escala de 1 a 10.
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            | Determinar la magnitud de cada acción sobre cada elemento, en una escala de 1 a 10.
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            | Determinar si la magnitud es positiva o negativa. 
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            | Determinar cuántas acciones del proyecto afectan al ambiente, desglosadas en positivas y negativas. 
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            | Agregar los resultados para las acciones. 
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            | Determinar cuántos elementos del ambiente son afectados por el proyecto, desglosados en positivos y negativos. 
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#4DB1F0;")
            | Agregar los resultados para los elementos del ambiente. 
    
    p.mt-5(data-aos="fade-up") La metodología original propuesta por Leopold considera para cada una de las celdillas un número fraccionario en donde la magnitud es el numerador y la importancia el denominador.

    .row.mt-4
      .col-lg.mb-4.mb-lg-0
        .col-11.m-auto
          .row(style="background-color:#F6F6F6;border-radius:10px;box-shadow:rgba(0, 0, 0, 0.1) 0px 5px 9px 0px;")
            .col-auto.p-0.d-flex.align-items-center
              figure
                img(src="@/assets/curso/tema2/17.svg" data-aos="fade-right" style="margin-left: -47px;width: 100px;max-width: 100px;")
            .col.p-0
              .p-4.ps-2
                h5(data-aos="fade-up") Matriz de grandes presas
                p.mb-0(data-aos="fade-up") Es una modificación de la matriz de Leopold que introduce variables de certidumbre, duración y plazo de manifestación.
      .col-lg
        .col-11.m-auto
          .row(style="background-color:#F6F6F6;border-radius:10px;box-shadow:rgba(0, 0, 0, 0.1) 0px 5px 9px 0px;")
            .col-auto.p-0.d-flex.align-items-center
              figure
                img(src="@/assets/curso/tema2/17.svg" data-aos="fade-right" style="margin-left: -47px;width: 100px;max-width: 100px;")
            .col.p-0
              .p-4.ps-2
                h5(data-aos="fade-up") Matriz de importancia
                p.mb-0(data-aos="fade-up") En esta metodología se miden los impactos de forma cualitativa, teniendo en cuenta la importancia de los mismos.
    
    p.mt-5(data-aos="fade-up") Adicionalmente,  a las metodologías matriciales también se pueden utilizar otras metodologías para la evaluación de los impactos ambientales, entre los que se encuentran:

    .tarjeta.p-4.pt-5.pb-5.mt-5(style="background-color:#F6F6F6;")
      SlyderA(tipo="b")
        .row
          .col-lg-5.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/18.svg')
          .col-lg-7
            h3 Listas de control
            p.mt-3 Es un método relativamente sencillo, está en uso desde 1978 cuando Clarck lo propuso como solución a la identificación cualitativa de los impactos ambientales, tienen varias ventajas, entre estas representan el conocimiento profesional colectivo, presentan enfoques sistemáticos, direccionan al equipo de discusión y su desarrollo implica la inclusión de argumentos técnicos; sin embargo, al ser un método sencillo no se interpretan efectos indirectos, tampoco plazos, probabilidades, ni riesgos asociados, así como una dificultad en la interrelación de los componentes ambientales.
        .row
          .col-lg-7.mb-4.mb-lg-0
            h3 Superposición de mapas
            p.mt-3 Es un método propuesto por Mc Hang en 1968, se emplea en la evaluación de impactos ambientales de usos del territorio, consiste en superponer sobre un mapa del área de estudio subdividido en transparencias que indican el impacto previsible de cada subzona mediante colores o simbologías, tiene varias ventajas como la agregación de impacto en una misma zona, permite crear corredores de bajo o alto impacto, permitiendo hacer seguimiento y revisión de estos. La principal desventaja es que limita el número de impactos.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema2/19.svg')
        .row
          .col-lg-5.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/20.svg')
          .col-lg-7
            h3 Diagramas de redes
            p.mt-3  Permite determinar las relaciones causa - efecto a través de sistemas gráficos que interrelacionan los distintos componentes, es una técnica visual por lo que es fácil de comprender; sin embargo, en proyectos que son grandes tanta información puede generar dificultad al lector.
    
    Separador.mt-5

    .titulo-segundo
      h2#t_2_3 2.3	Medidas de mitigación y control

    .row
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/21.png" data-aos="fade-right")
      .col-lg-8(style="place-self:center;")
        p(data-aos="fade-up") Los sitios autorizados para la disposición final de los residuos sólidos deben tener una infraestructura y estrategias que permitan mitigar los impactos ambientales asociados a su actividad, adicional a los permisos y licencias que otorgan las autoridades ambientales en el país.
        .cajon.cajon1.color-primario.p-4.mt-4(style="background-color:#F6F6F6;")
          p.mb-0(data-aos="fade-up") Se debe tener en cuenta que independiente a la infraestructura que se construya, esta va a tener una vida útil, por lo que desde el inicio de la operación se debe hacer una visualización de los posibles escenarios que puedan suceder con el lugar de disposición final. Para ello, se hace necesario:
    
    AcordionA.mt-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row.col-lg-11.m-auto(titulo="Información para la inspección, vigilancia, control y toma de decisión")
        .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
          p Se debe contar con los registros por parte de los generadores, transportadores y receptores, la información debe coincidir, esto permite medir el grado de cumplimiento en la reducción de la cantidad de residuos generados, así como el porcentaje de residuos que se están disponiendo adecuadamente comparado con la cantidad total de residuos generados. 
        .col-lg-4(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema2/22.png")
        p.mt-4 Adicional a la inspección y vigilancia que permite conocer la información en los registros, también se puede conocer realmente la capacidad actual de un sitio de disposición, su gestión y las decisiones que se deben tomar de acuerdo con la capacidad instalada y la capacidad ocupada.
        p.mt-2 La entidad encargada debe optimizar el terreno en el cual es construida la infraestructura que permite la disposición final de residuos sólidos.
      .row.col-lg-11.m-auto(titulo="Vida útil de los sitios de disposición final")
        p Con el fin de aumentar la vida útil de los sitios de disposición final se deben promover estrategias que permitan la reducción en masa de los residuos que son dispuestos, se debe aumentar los porcentajes de aprovechamiento de cada residuo, así como educar a los generadores para que realicen una minimización de la cantidad de residuos que generan.
        p.mt-2 Con el propósito de evitar una posible saturación de la infraestructura dispuesta a la disposición se debe iniciar la construcción de un nuevo sitio de disposición antes de que el primero cumpla con su vida útil.
      .row.col-lg-11.m-auto(titulo="Disposición no adecuada")
        p Se deben establecer políticas públicas que permitan que cada municipio cuente con un sitio de disposición final de sus residuos sólidos, con el fin de minimizar los impactos ambientales generados por los mismos.
        p.mt-2 Asimismo, se deben hacer procedimientos legales para cerrar los lugares donde se haga disposición no adecuada, generar la cultura de la correcta disposición e informar a la comunidad sobre los riesgos que los pueden afectar al permitir la disposición no adecuada cerca de sus viviendas.








    

    
  

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicador: true,
    mostrarIndicador2: true,
    indicadorTarjetaFlip: true,
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
.tarjeta1_1.tarjeta-flip .tarjeta-flip__contenido
  background: url(../assets/curso/tema2/4.png)
  background-position: center
  background-size: cover
.tarjeta2_2.tarjeta-flip .tarjeta-flip__contenido
  background: url(../assets/curso/tema2/5.png)
  background-position: center
  background-size: cover
.tarjeta3_3.tarjeta-flip .tarjeta-flip__contenido
  background: url(../assets/curso/tema2/6.png)
  background-position: center
  background-size: cover
.linea-tiempo-d.color-secundario .linea-tiempo-d__item--selected .linea-tiempo-d__item__number
  background-color: #3076B6
  color: #fff
.lista-ol--separador li, .lista-ul--separador li
  border-bottom-width: 2px
  border-bottom-style: dotted
.slyder-a__btn--sigt, .slyder-a__btn--atrs
  background-color: #FFA031
.slyder-a__bullets__item
  background-color: #AFAFAF
.slyder-a__bullets__item--active
  background-color: #0098E8 !important
  border-color: #0098E8 !important
.tarjeta.tarjeta--azul.acordion__activo
  background-color: #EDF7FE
</style>
