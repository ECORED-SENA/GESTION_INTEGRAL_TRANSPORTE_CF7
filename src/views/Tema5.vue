<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Criterios de decisión
    
    p contribuyan a la generación de resultados positivos en torno a la rentabilidad y por tanto el logro de beneficios tanto para los accionistas como para los trabajadores.

    .row.justify-content-center.BG04.p-4.mb-4
      .col-md-3.col-6.mb-md-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema5/img01.png')
      .col-md-8(data-aos="fade-left")
        p Al dar lectura al Balance General, se pueden evidenciar los activos que permiten tener claridad respecto a los recursos con los cuales cuenta la compañía para su operación, por otra parte, se evidencian los pasivos, principalmente las deudas con las cuales cuenta, por las cuales es necesario responder. Estas cifras conllevan a generar:
        ul.lista-ul
          li 
            i.fas.fad.fa-circle(style="color: #FF6D4B;")
            |	Una estrategia financiera para la inversión.
          li 
            i.fas.fad.fa-circle(style="color: #FF6D4B;")
            |	Una estrategia financiera para el cubrimiento de las deudas
          li 
            i.fas.fad.fa-circle(style="color: #FF6D4B;")
            |	Un panorama que permita definir la solidez de la empresa para su funcionamiento y participación en un proceso contractual

    p La lectura del Estado de Resultados, el cual puede ser emitido anualmente para la junta directiva de las compañías, pero que es costumbre en muchas de ellas realizarlo con una periodicidad menor, incluso mensualmente, permite mantener una trazabilidad de la operación, evidenciando los ingresos periódicos, a los cuales se descuentan los gastos y nos genera el resultado inicial de la operación. Posteriormente a dicho resultado se hace necesario descontar lo correspondiente a los gastos financieros por concepto del apalancamiento económico para la operación (cuotas por préstamos y sus correspondientes intereses). Finalmente, al resultado anteriormente obtenido se descuentan los valores correspondientes a los impuestos para obtener el resultado completo de dicha operación.
    
    .row.justify-content-center.mb-4
      .col-md-10
        hr(style="border-color: #5B4794 !important;")
        .row.justify-content-center.align-items-center
          .col-md-1.col-2(data-aos="fade-right")
            img(src='@/assets/curso/tema5/img02.png')
          .col-md-11.col-10
            p Si el resultado es positivo, la operación fue rentable. En este caso es necesario verificar si la rentabilidad fue la esperada.
        hr(style="border-color: #5B4794 !important;")
        .row.justify-content-center.align-items-center
          .col-md-1.col-2(data-aos="fade-right")
            img(src='@/assets/curso/tema5/img03.png')
          .col-md-11.col-10
            p Si el resultado fue negativo, la operación fue deficitaria y se deben tomar acciones para reducir el gasto o incrementar los ingresos.
        hr(style="border-color: #5B4794 !important;")
        .row.justify-content-center.align-items-center
          .col-md-1.col-2(data-aos="fade-right")
            img(src='@/assets/curso/tema5/img02.png')
          .col-md-11.col-10
            p Si el resultado fue cero, la operación se encuentra en punto de equilibrio, es decir, ni gana ni pierde con la operación que se realiza y se debe tomar una decisión que permita pasar dicho resultado a un estado positivo.
        hr(style="border-color: #5B4794 !important;")

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-md-4.col-6
        h4.mb-0.text-center Economía de escala
        figure
          img(src='@/assets/curso/tema2/img08.png')

    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Tema5',
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

<style lang="sass"></style>
