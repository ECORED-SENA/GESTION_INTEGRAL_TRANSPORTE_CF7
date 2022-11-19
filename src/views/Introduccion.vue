<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p A continuación, se presentará el video que hará una breve introducción del presente componente formativo:

    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/YbsKSuLl8eI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row.BGIMG01.p-4.justify-content-center.mb-4
      p Cuando se abordan temas relacionados con los costos en el transporte, es necesario indicar que existe la economía del transporte, la cual es una rama de la teoría económica que se ocupa del sector transporte y estudia el conjunto de elementos y principios que rigen el transporte de personas y bienes.
      p.mb-5 El transporte es considerado como una actividad que demanda valores económicos significativos y por tanto, cualquier cambio que se presente resulta contraproducente o no para dicha área y posteriormente para la cadena productiva en general. Dicha afectación significativa se presenta por cuanto la actividad de trasladar personas o cosas de un lugar a otro resulta imprescindible para cualquier actividad cuyo potencial pueda generar ingresos, así como se infiere de la figura 1.
      .col-md-10(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 1
          span Costos en el transporte
        figure
          img(src='@/assets/curso/intro/img01.jpg')

    .row.justify-content-center.mb-4
      .col-md-10
        p.mb-5 A lo largo del tiempo el transporte ha demostrado ser un facilitador para el intercambio comercial, lo cual, finalmente repercute en el desarrollo de las regiones, con el desarrollo también llegan los cambios y al tener infraestructuras para el transporte también se debe pensar e invertir en la movilidad.
        .cajon.color-primario.p-4(data-aos="fade-right")
          p.mb-0 Cuando se facilita la movilidad, es decir, que se crean estrategias y se implementan acciones para que exista mayor fluidez en el movimiento de los actores viales, principalmente los vehículos, la economía mejora e incrementa los niveles de productividad, por tanto la resolución de las externalidades del transporte como son la congestión, contaminación ambiental y la accidentalidad, se torna indispensable. Adicionalmente el creciente aumento poblacional ha generado aumento en la demanda de productos y servicios, los cuales requieren del transporte a lo largo de sus procesos productivos: explotación, transformación, comercialización y consumo.

    p Es importante resaltar que cuando se habla de los niveles de consumo energético, se logra evidenciar que el transporte público masivo, es decir, aquel que transporta mayor cantidad de usuarios utilizando un mismo vehículo repercute en una mayor eficiencia, ya que se obtienen mejores beneficios en cuanto a la relación con el transporte individual, ya sea privado o público, si el nivel de ocupación espacial por pasajero es menor, los niveles de contaminación por vehículo, logran que la relación sea menor, es decir, resulta más benéfico para el medio ambiente movilizar un vehículo de transporte masivo que 160 automotores individuales. Finalmente, al hablar de costos, resultan más económicas las intervenciones de un vehículo de transporte masivo que para 160 automotores individuales, lo cual sugiere que los costos de mantenimiento por pasajero son menores. El aéreo es el modo de transporte más contaminante y costoso por pasajero pero el más rápido a distancia, mientras el más económico y eficiente es el transporte por agua.
    p Al tener en cuenta lo anterior se pueden considerar como importantes conceptos como “la economía de escala” presentada en la figura 2, cuyo principio busca la reducción de costos e incremento de la eficiencia productiva.

    .row.justify-content-center.mb-4
      .col-lg-10.BG01.p-4
        .row.justify-content-center.align-items-center
          .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
            .titulo-sexto.color-acento-contenido
              h5 Figura 2
              span Economía de escala
            figure
              img(src='@/assets/curso/intro/img02.jpg')
          .col-lg-6(data-aos="fade-left")
            p El transporte representa sin duda un factor decisivo en la estructuración de la economía, ya que permite inversión, dinámica de los sectores empresariales, activación o reactivación de las regiones, beneficios socioculturales expansión de mercados, aumento de productividad, especialización e incremento de ingresos, principalmente y por tanto las decisiones que se tomen en torno a la operación del transporte serán determinantes para el costo de los diferentes actores de la cadena.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
