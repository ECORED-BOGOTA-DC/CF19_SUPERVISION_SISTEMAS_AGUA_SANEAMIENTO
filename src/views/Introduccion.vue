<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .cont_gradiente1
      figure.mb-md-0.mb-4
        img(src="@/assets/curso/intro2.png" data-aos="zoom-in-up")
      .col-lg-10.m-auto
        .p-4.cont_gradiente_gris
          p.mb-0(data-aos="fade-up") En este componente se abordarán saberes relacionados con  la disposición final de los residuos, considerada la última opción en la gestión integral para organizar las actividades de transporte, preservación, almacenamiento y recepción de las muestras de tal forma que estas no sean alteradas. #[strong A continuación, se puede contextualizar a través de la revisión de las tarjetas animadas.]
    
    .row.mt-5
      .col-lg.mb-4.mb-lg-0
        .tarjeta.tarjeta1.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/intro3.png')})`}")
              h5.mb-0.text-white.text-center.p-3.w-100(style="position:absolute;bottom:0;background-color:rgba(0,118,168,.9);") Personas
            .tarjeta-flip__contenido.text-center
              .p-4.p-xl-5.h-100.d-flex.align-items-center(style="background-color: rgba(11,111,155,.9) !important")
                p.mb-0.text-white Las #[strong.text-white personas] generan una cantidad de residuos de diferente índole, que, si no son tratados o reincorporados en los procesos productivos, deberán ser dispuestos según técnicas ambientalmente sostenibles que reduzcan la posibilidad de generación de impactos que afecten a la naturaleza y a la salud humana.
      .col-lg.mb-4.mb-lg-0
        .tarjeta.tarjeta2.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/intro4.png')})`}")
              h5.mb-0.text-white.text-center.p-3.w-100(style="position:absolute;bottom:0;background-color:rgba(0,139,138,.9);") Crecimiento poblacional
            .tarjeta-flip__contenido.text-center
              .p-4.p-xl-5.h-100.d-flex.align-items-center(style="background-color: rgba(0,139,138,.9) !important")
                p.mb-0.text-white Por el #[strong.text-white crecimiento poblacional] exponencial y la alta demanda de recursos para satisfacer diferentes necesidades humanas, la cantidad de residuos generados por la comunidad ha aumentado constantemente.
      .col-lg.mb-4.mb-lg-0
        .tarjeta.tarjeta3.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/intro5.png')})`}")
              h5.mb-0.text-white.text-center.p-3.w-100(style="position:absolute;bottom:0;background-color:rgba(0,118,168,.9);") Métodos actuales
            .tarjeta-flip__contenido.text-center
              .p-4.p-xl-5.h-100.d-flex.align-items-center(style="background-color: rgba(11,111,155,.9) !important")
                p.mb-0.text-white Algunas ciudades reportan que los #[strong.text-white métodos actuales] de disposición presentan una vida útil ya establecida y que la misma se ha reducido por el aumento de toneladas de residuos que se aportan día a día.
      .col-lg.mb-4.mb-lg-0
        .tarjeta.tarjeta4.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/intro6.png')})`}")
              h5.mb-0.text-white.text-center.p-3.w-100(style="position:absolute;bottom:0;background-color:rgba(0,139,138,.9);") Conceptos asociados
            .tarjeta-flip__contenido.text-center
              .p-4.p-xl-5.h-100.d-flex.align-items-center(style="background-color: rgba(0,139,138,.9) !important")
                p.mb-0.text-white De acuerdo a lo anterior, se estudiarán algunos #[strong.text-white conceptos asociados] para la inspección y disposición final según procedimientos técnicos para los residuos, en el sector productivo los supervisores podrán aplicar en su desempeño.
    
    .col-lg-10.m-auto.mt-5
      .tarjeta.color-primario.p-4(style="background: linear-gradient(180deg, rgba(66,165,227,1) 0%, rgba(48,118,182,1) 100%);")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/intro7.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1.text-white Alarmantes cifras en Colombia por los rellenos sanitarios
                p.text-small.text-white Para ampliar la información se invita a observar el siguiente video:
              .col-sm-auto
                a.boton.color-primario(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                  span(style="color:#12263F !important;") Ir a página
                  i.fas.fa-link(style="color:#12263F !important;")
    
   
    

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    indicadorTarjetaFlip: true,
  }),
}
</script>
<style lang="sass">
.tarjeta1.tarjeta-flip .tarjeta-flip__contenido
  background: url(../assets/curso/intro3.png)
  background-position: center
  background-size: cover
.tarjeta2.tarjeta-flip .tarjeta-flip__contenido
  background: url(../assets/curso/intro4.png)
  background-position: center
  background-size: cover
.tarjeta3.tarjeta-flip .tarjeta-flip__contenido
  background: url(../assets/curso/intro5.png)
  background-position: center
  background-size: cover
.tarjeta4.tarjeta-flip .tarjeta-flip__contenido
  background: url(../assets/curso/intro6.png)
  background-position: center
  background-size: cover
</style>
