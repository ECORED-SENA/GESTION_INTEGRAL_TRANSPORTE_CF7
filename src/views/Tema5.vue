<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Criterios de decisión
    
    p Gracias a la lectura de los documentos financieros anteriormente mencionados, principalmente el #[i Balance General y el Estado de Resultados], es viable para los encargados de la administración y operación de las empresas tomar decisiones que contribuyan a la generación de resultados positivos en torno a la rentabilidad y por tanto el logro de beneficios tanto para los accionistas como para los trabajadores.

    .BG04.p-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema5/img01.png')
        .col-lg-8(data-aos="fade-left")
          p Al dar lectura al balance general, se pueden evidenciar los activos que permiten tener claridad respecto a los recursos con los cuales cuenta la compañía para su operación, por otra parte, se evidencian los pasivos, principalmente las deudas con las cuales cuenta, por las cuales es necesario responder. Estas cifras conllevan a generar:
          ul.lista-ul
            <li style="margin-bottom: 2px">
              <i class="fas fa-circle" style="color: #FF6D4B; font-size: x-small"></i>
              |	Una estrategia financiera para la inversión.
            </li>
            <li style="margin-bottom: 2px">
              <i class="fas fa-circle" style="color: #FF6D4B; font-size: x-small"></i>
              |	Una estrategia financiera para el cubrimiento de las deudas.
            </li>
            <li style="margin-bottom: 2px">
              <i class="fas fa-circle" style="color: #FF6D4B; font-size: x-small"></i>
              |	Un panorama que permita definir la solidez de la empresa para su funcionamiento y participación en un proceso contractual.
            </li>

    p La lectura del estado de resultados, el cual puede ser emitido anualmente para la junta directiva de las compañías, pero que es costumbre en muchas de ellas realizarlo con una periodicidad menor, incluso mensualmente, permite mantener una trazabilidad de la operación, evidenciando los ingresos periódicos, a los cuales se descuentan los gastos y nos genera el resultado inicial de la operación. Posteriormente a dicho resultado se hace necesario descontar lo correspondiente a los gastos financieros por concepto del apalancamiento económico para la operación (cuotas por préstamos y sus correspondientes intereses). Finalmente, al resultado anteriormente obtenido se descuentan los valores correspondientes a los impuestos para obtener el resultado completo de dicha operación.
    
    .row.justify-content-center.mb-4
      .col-md-10
        hr(style="border-color: #5B4794 !important;")
        .row.justify-content-center.align-items-center
          .col-md-1.col-2(data-aos="fade-right")
            img(src='@/assets/curso/tema5/img02.svg')
          .col-md-11.col-10
            p.mb-0 Si el resultado es positivo, la operación fue rentable. En este caso es necesario verificar si la rentabilidad fue la esperada.
        hr(style="border-color: #5B4794 !important;")
        .row.justify-content-center.align-items-center
          .col-md-1.col-2(data-aos="fade-right")
            img(src='@/assets/curso/tema5/img03.svg')
          .col-md-11.col-10
            p.mb-0 Si el resultado fue negativo, la operación fue deficitaria y se deben tomar acciones para reducir el gasto o incrementar los ingresos.
        hr(style="border-color: #5B4794 !important;")
        .row.justify-content-center.align-items-center
          .col-md-1.col-2(data-aos="fade-right")
            img(src='@/assets/curso/tema5/img04.svg')
          .col-md-11.col-10
            p.mb-0 Si el resultado fue cero, la operación se encuentra en punto de equilibrio, es decir, ni gana ni pierde con la operación que se realiza y se debe tomar una decisión que permita pasar dicho resultado a un estado positivo.
        hr(style="border-color: #5B4794 !important;")

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-md-4.col-6
        h4.mb-0.text-center Economía de escala
        figure
          img(src='@/assets/curso/tema2/img08.png')

    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/24y3mUUQwbI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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
