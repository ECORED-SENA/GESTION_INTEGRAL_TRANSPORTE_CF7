<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Estados financieros
    
    p Corresponde a una serie de informes que permiten ver en cifras el funcionamiento de una empresa. Al ser analizados correctamente, las cifras permitirán obtener información pertinente para la toma de decisiones sobre el futuro de la compañía.
    p Los estados financieros deben ser elaborados por personas idóneas que garanticen el cumplimiento de tres características primordiales: confiabilidad, equidad y comprensibilidad.

    .row.justify-content-center.align-items-center.BG04.p-4.mb-4
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema4/img01.jpg')
      .col-lg-6(data-aos="fade-left")
        p Los estados financieros básicos de una empresa son, ver la figura 6:
        ul.lista-ul
          <li style="margin-bottom: 2px"> 
            <i class="fas fa-circle" style="color: #FF6D4B; font-size: x-small"></i>
            |	Balance general.
          </li>
          <li style="margin-bottom: 2px"> 
            <i class="fas fa-circle" style="color: #FF6D4B; font-size: x-small"></i>
            |	Estado de resultados.
          </li>
          <li style="margin-bottom: 2px"> 
            <i class="fas fa-circle" style="color: #FF6D4B; font-size: x-small"></i>
            |	Estado de cambios en el patrimonio.
          </li>
          <li style="margin-bottom: 2px"> 
            <i class="fas fa-circle" style="color: #FF6D4B; font-size: x-small"></i>
            |	Estado de cambios en la situación financiera.
          </li>
          <li style="margin-bottom: 2px"> 
            <i class="fas fa-circle" style="color: #FF6D4B; font-size: x-small"></i>
            |	Estado de flujos de efectivo.
          </li>

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Figura 6
      span Estados financieros
    
    .row.justify-content-center.mb-4
      .col-md-10(data-aos="zoom-in")
        img(src='@/assets/curso/tema4/img02.svg')
    
    p.text-center A continuación se puede revisar:

    .row.justify-content-center.mb-5
      .col-md-6.col-10.BG02.p-4.mb-md-0.mb-4(data-aos="fade-right")
        .row.justify-content-center.mb-4
          .col-md-3.col-5.mb-4
            img(src='@/assets/curso/tema4/img03.png')
          .col-md-10
            .h4 Balance general
            p.mb-0 Mediante este documento es posible evidenciar la situación financiera de una empresa, ya que allí se plasman los activos, pasivos y el patrimonio durante un periodo específico, es decir, lo que la empresa tiene, lo que debe y los aportes de los socios.
        .row.justify-content-center.color-acento-botones
          .col-auto
            a.boton.indicador__container(@click="modal1 = true")
              span Observar
              <i class="fas fa-search" style="color: #73E8DC; background-color: #000; padding: 3px; border-radius: 5px"></i>
              .indicador--click(v-if="mostrarIndicador")  
        ModalA(:abrir-modal.sync="modal1")
          .row.align-items-center
            .col-md-11
              figure
                img(src='@/assets/curso/tema4/img05.svg')
                figcaption Nota. https://finanzasparaemprendedores.com/finanzas/que-es-el-balance-general/
      .col-md-6.col-10.BG03.p-4(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-md-3.col-5.mb-4
            img(src='@/assets/curso/tema4/img04.png')
          .col-md-10
            .h4 Estado de resultados
            p.mb-0 En este documento se evidencia el detalle de la operación, es decir de la aplicación del objeto social de la empresa, evidenciando los costos, los gastos y los ingresos que permiten evidenciar posteriormente la rentabilidad y la utilidad. Es también conocido como Estado de pérdidas y ganancias.
        .row.justify-content-center
          .col-auto
            a.boton.color-acento-botones.indicador__container(@click="modal2 = true")
              span Observar
              <i class="fas fa-search" style="color: #73E8DC; background-color: #000; padding: 3px; border-radius: 5px"></i>
        ModalA(:abrir-modal.sync="modal2")
          .row.align-items-center
            .col-md-11
              figure
                img(src='@/assets/curso/tema4/img06.svg')
                figcaption Nota. https://finanzasparaemprendedores.com/finanzas/que-es-el-balance-general/

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    modal1: false,
    modal2: false,
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
