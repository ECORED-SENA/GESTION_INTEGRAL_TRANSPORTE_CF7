<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Costos y gastos
    
    p.mb-5 Inicialmente, es necesario conocer los términos contables que a diario se utilizan y de los cuales resulta útil conocer su diferenciación. En este componente formativo se encontrarán frecuentemente los términos costo y gasto, he aquí su diferencia:

    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-4
        .row.justify-content-center.align-items-center
          .col-4(data-aos="fade-right")
            img(src='@/assets/curso/tema2/img01.png')
          .col-8
            p El costo se presenta por causa directa del producto o servicio generado y el Gasto es debido a las gestiones administrativas y comerciales de la empresa.
      .col-lg-6
        .row.justify-content-center.align-items-center
          .col-4(data-aos="fade-left")
            img(src='@/assets/curso/tema2/img02.png')
          .col-8
            p El costo hace parte integrante del producto terminado, puede verse en dicho producto, mientras que el gasto no es percibido en el producto.
    
    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Tabla 1
      span Cómo definir los gastos de su empresa
    
    .tabla-a.color-secundario.mb-5(data-aos="zoom-in")
      table.mb-4
        caption Nota.  Secretaría Distrital de Desarrollo Económico y Cámara de Comercio de Bogotá. (2009).
        thead
          tr
            th(style="background-color: #FFDAD2;" colspan="12").text-center Clasificación de los gastos operacionales
        tbody
          tr
            th(style="background-color: #F2EDFF;" colspan="2").text-center Clase
            th(style="background-color: #F2EDFF;" colspan="3").text-center Definición
            th(style="background-color: #F2EDFF;" colspan="7").text-center Conceptos
          tr
            th(colspan="2").text-center Administrativos
            td(colspan="3") Son salidas o giros de dinero para administrar eficientemente la empresa.
            td(colspan="7") Se presentan con ocasión de:<br>a) Pago de salarios del personal dedicado a administrar, como a: gerente, secretarios, tesoreros, jefes de cartera, aseadoras, entre otras. <br>b) Pago de otros conceptos como: servicios públicos, vigilancia, depreciación de equipo de cómputo y muebles y enseres, aseo, cafetería, correos, papelería, asesorías contables, financieras y tributarias, impuestos, entre otros.
          tr
            th(style="background-color: #F3F9FF;" colspan="2").text-center De ventas
            td(style="background-color: #F3F9FF;" colspan="3") Son salidas o giros de dinero para efectuar labores de promoción, venta y distribución de los productos fabricados de las mercancías y de los servicios prestados por cada empresa, según su actividad.
            td(style="background-color: #F3F9FF;" colspan="7") Se presenta con ocasión de:<br>a) Pago de salarios del personal dedicado a vender, gerente de ventas, vendedores en punto de venta, agentes comerciales, comisiones sobre ventas, empacadores, repartidores, entre otros. <br>b) Pago de otros conceptos como: publicidad, propaganda, servicios al cliente, entre otros.
          tr
            th(colspan="2").text-center Financieros
            td(colspan="3") Son salidas o giros de dinero que  ocurren por las relaciones que la empresa tiene con las instituciones bancarias y extrabancarias.
            td(colspan="7") Se presentan con ocasión del pago de: intereses corrientes, intereses moratorios, chequeras, comisiones por giros y remesas, entre otros.

    figure.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/tema2/img03.jpg')

    p A continuación se presentará información sobre costos fijos y costos variables:       

    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .row.justify-content-center.BGIMG03.py-3.py-lg-4(titulo="Costos fijos")
        .col-lg-6.order-lg-1.order-2
          p Con el objetivo de dar claridad al concepto es necesario indicar que la palabra #[strong COSTO] se utiliza para nombrar el desembolso económico que se lleva a cabo para adquirir o mantener un producto o un servicio y por otra parte, algo #[strong FIJO] es lo que es invariable o tiene estabilidad. 
          p Económicamente hablando, los costos fijos son aquellos desembolsos de la actividad empresarial que no dependen del nivel de producción, es decir, estos componen aquellos rubros que la empresa debe pagar independientemente de su nivel de operación, es decir, produzca o no debe cumplir con estos pagos.
          p Este tipo de costos implican gastos periódicos (mensuales, anuales, etc.) que pueden preverse, pero las empresas deben hacer todo lo posible por disminuirlos, ya que una reducción de costos fijos, le permitirá adaptarse a los altibajos operativos y manejar una adecuada gestión de costos. 
        .col-lg-4.col-8.mb-4.mb-lg-0.order-lg-2.order-1
          figure
            img(src='@/assets/curso/tema2/img04.png')
            figcaption Nota. http://www.enciclopediafinanciera.com
      .row.justify-content-center.BGIMG03.py-3.py-lg-4(titulo="Costos variables")
        .col-lg-6.order-lg-1.order-2
          p Los costos variables cambian en proporción a la actividad productiva de la empresa. Estos costos cambian según la cantidad de unidades producidas y se relacionan directamente con el uso de los recursos variables como la mano de obra y la cantidad de materia prima. 
          p En el transporte, la mano de obra se encuentra directamente asociada con el conductor y la materia prima con los gastos necesarios para la operación de los equipos, dentro de los cuales se encuentran, combustible, peajes, llantas, lubricación, etc.
        .col-lg-4.col-8.mb-4.mb-lg-0.order-lg-2.order-1
          figure
            img(src='@/assets/curso/tema2/img05.png')
            figcaption Nota. http://www.enciclopediafinanciera.com
      .row.justify-content-center.BGIMG03.py-3.py-lg-4(titulo="Costos de capital")
        .col-lg-6.order-lg-1.order-2
          p Corresponde a esa tasa mínima de rendimiento requerida por la empresa con el fin de definir un costo a los recursos financieros del proyecto de inversión, en este caso de una empresa o negocio de transporte.
          p Este costo de rendimiento, es el que la empresa debe pagar a sus inversionistas, ya sea los accionistas que financian mediante el denominado “capital social”, es decir sus aportes para la creación de la compañía o el costo de su financiación si es a través de deuda.
        .col-lg-4.col-8.mb-4.mb-lg-0.order-lg-2.order-1
          figure
            img(src='@/assets/curso/tema2/img06.png')

    p.mb-5 En los costos de capital se pueden evidenciar los siguientes términos:

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-md-4.col-6
        h4.mb-0.text-center Amortización y Depreciación
        figure
          img(src='@/assets/curso/tema2/img08.png')

    .row.justify-content-center.mb-5
      .col-md-6.col-10.BG02.p-4.mb-md-0.mb-4(data-aos="fade-right")
        p Se asocian con el deterioro o desgaste que sufre un activo en el tiempo y por tanto su pérdida de valor que debe ser registrada en libros contables, como ejemplo se puede revisar el contenido de la figura 3.
        p.mb-0 La amortización se encuentra relacionada con la pérdida de valor en el tiempo de aquello activos intangibles, es decir, aquellos que no se pueden palpar y están asociados con temas como la marca, el derecho intelectual, los acuerdos contractuales, entre otros y los activos diferibles por los cuales la empresa paga sin que necesariamente ya exista uso del bien adquirido.
      .col-md-6.col-10.BG03.p-4(data-aos="fade-left")
        p Por otra parte, la depreciación, igualmente busca registrar contablemente la pérdida de valor en el tiempo, pero en este caso de los activos fijos, los cuales son palpables como la maquinaria, los equipos, las construcciones, etc. Valga aclarar que los terrenos ni se amortizan, ni se deprecian ya que son los únicos activos que no pierden valor en el tiempo.
        p.mb-0 El costo de financiarse con el crédito de los proveedores es denominado el costo de oportunidad pero implica no tener los descuentos por el pronto pago que estos ofrecen. El patrimonio es la fuente más costosa para la empresa, generalmente el costo de capital se calcula como un costo efectivo después de impuestos.

    .row.justify-content-center.mb-5
      .col-md-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 3
          span Amortización y depreciación
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema2/img09.svg')
        .BGR05.p-3
          .row.align-items-center
            .col-lg-1.col-2
              img(src='@/assets/curso/tema2/img10.svg')
            .col
              p.mb-0 <span style="color:#CC573C">#[b Depreciación]</span> se aplica al activo fijo tangible, ya que con el uso estos bienes valen menos, es decir, se deprecian.
        .BGR05A.p-3
          .row.align-items-center
            .col-lg-1.col-2
              img(src='@/assets/curso/tema2/img11.svg')
            .col
              p.mb-0 <span style="color:#CC573C">#[b Amortización]</span> solo se aplica a los activos diferidos o intangibles. Por ejemplo, si se ha comprado una marca comercial, esta con el paso del tiempo no baja o se deprecia, por lo que amortización significará el cargo anual para recuperar esa inversión.
        .BG06.p-3
          p.mb-0 Nota. Fragoso, W., Garrido, E. y Solano, J. (2014).

</template>

<script>
export default {
  name: 'Tema2',
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
