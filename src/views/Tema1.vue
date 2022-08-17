<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Historia
    
    p A continuación se presenta una breve contextualización del desarrollo del transporte en nuestra historia:

    SlyderA.slyder01.BGIMG02.p-4(tipo="b")(data-aos="fade-right")
      .row.justify-content-center.align-items-center
        .col-md-6.col-10.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/tema1/img02.png')
            figcaption Nota. Barco mercante fenicio. 
        .col-md-6
          p Siglos atrás, los peajes instalados en los cursos de agua navegables, condujo a que los mercaderes prefirieran trasladarse por vías terrestres, lo cual les implicaba paradas, pérdidas de tiempo, escalas, etc.
          p A través de los medios fluviales se movilizaron grandes cantidades de mercancías, pero este medio estuvo condicionado a características climatológicas, geográficas y por los impedimentos creados por el hombre. 
          p La relevancia del transporte marítimo data de la época de los cretenses, fenicios, griegos y romanos, pues los egipcios, que fueron los primeros en realizar avances en la navegación, no llegaron a desarrollar su comercio porque su economía era autosuficiente. 
      .row.justify-content-center.align-items-center
        .col-md-6.col-10.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/tema1/img03.png')
            figcaption Nota. Comercio en el imperio romano 
        .col-md-6
          p Con la llegada del imperio romano se logró instaurar una paz y un orden que era favorable a la prosperidad y extensión del comercio. Como consecuencia de esta práctica, nacieron nuevas ciudades y aumentó la oferta laboral.
          p Los cambios registrados durante la Revolución Industrial repercutieron enormemente sobre la economía y la sociedad, pues los avances producidos en los distintos modos de desplazamiento modificaron las formas de movilidad de mercancías y personas. Las innovaciones producidas en estos medios de comunicación incidieron tanto en el sector primario (materia prima) como en el secundario (transformación) y se agilizó la unión de los centros productivos con los de consumo, esto permitió la expansión de los mercados y la reducción de los costos.
      .row.justify-content-center.align-items-center
        .col-md-6.col-10.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/tema1/img04.png')
            figcaption Nota. Producción en serie
        .col-md-6
          p A partir del siglo XVIII y en especial durante el siglo XIX, las nuevas técnicas de construcción de vías garantizaron mejor drenaje vial, mejoras en las superficies de pavimento y optimización de los tiempos de viaje permitiendo mayor facilidad en la realización de viajes, mejora en la capacidad de carga de los vehículos utilizados y aumento de la velocidad de los mismos.
          p A finales del siglo XIX, la motorización mediante combustión interna estimuló la ampliación de las redes viales con nuevas posibilidades de accesibilidad, difusión y reducción de costos. El motor de explosión constituyó un elemento esencial para el transporte, pero fue necesario esperar, ya que solo hasta 1914 se dio inicio a la producción en masa del automóvil. La importancia que adquirieron estos vehículos después de la Segunda Guerra Mundial fue decisiva en la transformación de las estructuras económicas y sociales de los países desarrollados.
      .row.justify-content-center.align-items-center
        .col-md-6.col-10.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/tema1/img05.png')
            figcaption Nota. Transporte ferroviario
        .col-md-6
          p El tráfico por las vías acuáticas se redujo hacia la mitad del siglo XIX por los innumerables peajes y controles que establecieron las compañías de canales, adicionalmente, el mal estado de las carreteras, fueron escenario propicio para el auge del transporte ferroviario. Inicialmente, las líneas férreas se construyeron como complemento a los sistemas vial y acuático para transportar el carbón, pero a partir de 1830, el transporte de pasajeros cobró suma importancia. Una primera consecuencia de la revolución causada con la expansión de las vías férreas fue el decrecimiento en el costo de transporte. 
          p Más adelante, en el transporte marítimo, el aumento de la capacidad de carga debido a los tamaños de los equipos y las mejoras tecnológicas y el aumento de velocidades, lo anterior, conlleva a mejores “economías de escala”; se redujeron los costos de transporte y los tiempos de viajes. Adicionalmente se presentó una especialización de los buques los cuales contaban con características funcionales particulares para el tipo de mercancía transportada.
      .row.justify-content-center.align-items-center
        .col-md-6.col-10.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/tema1/img06.png')
            figcaption Nota. Transporte de carga por carretera
        .col-md-6
          p La fabricación del camión de carga, es decir, una plataforma de carga que se montó sobre el bastidor de un vehículo ordinario cobró gran importancia en el siglo XX para el movimiento de mercancías por vía terrestre. Con el paso de los años, el espacio de la carga y el peso máximo autorizado por las normas han aumentado y el peso propio del vehículo ha disminuido gracias a los diferentes avances en su construcción (materiales, componentes, aerodinámica, especialización de carga, etc.) facilitando la dinamización del transporte de carga por carretera.
      .row.justify-content-center.align-items-center
        .col-md-6.col-10.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/tema1/img07.png')
            figcaption Nota. Comercio en el imperio Romano 
        .col-md-6
          p El transporte aéreo, ha significado costos muy superiores a los de otros medios de transporte, aunque los avances tecnológicos han conllevado ganancias de productividad al conseguir incrementar el volumen de las mercancías que pueden ser transportadas por este medio, adicionalmente ha supuesto un beneficio para el transporte de pasajeros y para las cargas perecederas, frágiles, de alto valor y urgentes.

    .BGIMG01.p-4.mb-4
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Elementos a considerar
      p.text-center Al analizar el transporte, se hace necesario considerar temas relevantes como:

      SlyderB.mb-5(:datos="datosSlyder")

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Teorías 
    
    p El transporte es base para la economía, ya que las materias primas deben ser transportadas con el fin de facilitar su transformación en el producto final y a un consumo; alrededor del transporte se denotan diferentes teorías importantes, es así que con el propósito de identificar las implicaciones económicas del mismo se deben considerar puntualmente: costos fijos, costos variables y costos de capital.

    .row.justify-content-center
      .col-md-10(data-aos="zoom-in")
        img(src='@/assets/curso/tema1/img13.png')

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        texto:
          '<b>Tecnología de producción infraestructura y servicios</b>. Formas de financiación (impuestos, fondos especiales, transferencias, subvenciones, precios y tasas, Deuda Pública, bonos, fondos propios, mercados de capitales, concesiones, etc.), diseño, construcción, operación y mantenimiento. Es un elemento a considerar ya que su costo repercute en la economía de acuerdo con la escala considerada.<br><br><b>El tiempo de los usuarios como “<em>input</em>” (dato de entrada)</b>. Cada modo de transporte se diferencia de los demás por sus diferentes características, cada uno tiene ventajas y desventajas diferentes a los demás. En la actualidad el nivel de servicio es medido por indicadores tales como el denominado “<em>Just at time</em>” (justo a tiempo) que finalmente direcciona y condiciona la demanda de los servicios de transporte principalmente en su relacionamiento directo con el tiempo ya que este concepto tiene relación directa con la vida útil de los productos y el tiempo de los pasajeros.',
        imagen: require('@/assets/curso/tema1/img08.jpg'),
      },
      {
        texto:
          '<b>Carácter no almacenable e indivisible de los servicios</b>. Tamaño de vehículos y frecuencia de viajes, son factores que inciden en la calidad pero también en los costos del servicio. Al tener el almacenamiento un costo, este repercute en el transporte ya que algunos elementos transportados no pueden ser almacenados (perecederos) o fraccionados (seres humanos).<br><br><b>Inversión óptima en infraestructura</b>. La planeación deberá tener enfoques de largo plazo y propender por la modulación y escalonamiento de los proyectos, cuando no sea factible la utilización de fondos de fomento. Las inversiones tienen relación directa con el flujo de capitales.',
        imagen: require('@/assets/curso/tema1/img09.jpg'),
      },
      {
        texto:
          '<b>Competencia ilimitada y necesidad de regulación</b>. El transporte es una necesidad básica, si lo analizamos en detalle, encontraremos que el transporte juega un papel fundamental en cualquier tipo de negocio, el transporte siempre es necesario y por tanto, requiere del uso de la infraestructura vial y del espacio público destinado para la locomoción. Al ser un servicio público se hace necesaria la participación de los entes reguladores por parte del Estado, ya que el hecho de existir libre competencia no significa que las empresas puedan incurrir en malas prácticas de mercado que pueden resultar lesivas para las demás empresas (competidores) o para sí misma. Lo anterior de cualquier modo sugiere que la libre competencia busca y/o genera la optimización de costos y la mejora en la calidad, llevando estos dos conceptos a la dinámica económica del transporte.<br><br><b>Efectos de red</b>. El efecto de red, se traduce en economías de costos cuando crece el número de usuarios, lo que facilita mayores frecuencias que reducen los tiempos de espera, y en la obtención de economías de escala asociadas al diseño de líneas troncalizadas con sistema de alimentación.',
        imagen: require('@/assets/curso/tema1/img10.jpg'),
      },
      {
        texto:
          '<b>Costos del productor, del usuario y sociales ¿Quién paga?</b> Lo justo es que quien obtenga los beneficios, no se desentienda de los costos y que quien contamine pague. Lo anterior se traduce en movimiento de capitales en torno al transporte.<br><br><b>Obligaciones asociadas al carácter de servicio público</b>. Al ser el transporte un servicio público esencial, el estado y las empresas prestadoras del servicio, se encuentran abocadas a garantizar la permanencia y continuidad del servicio, ya sea que sea necesario compensar rutas deficitarias con rutas rentables. Incluso el estado puede llegar a participar con fondos destinados a la generación de subsidios que permitan prestar servicios que económicamente no son rentables, pero que socialmente son necesarios y significan calidad de vida para los usuarios.',
        imagen: require('@/assets/curso/tema1/img11.jpg'),
      },
      {
        texto:
          '<b>Infraestructura y crecimiento</b>. Enfoques macro y micro: la inversión en infraestructura para países pobres, que al ser intensiva en mano de obra eleva el ingreso per cápita y resuelve problemas estructurales, antes que ser inflacionaria, es factor de desarrollo.<br><br><b>Externalidades negativas</b>. Costo social y humano derivado de los accidentes provocados por diversas causas, contaminación ambiental y accidentalidad.',
        imagen: require('@/assets/curso/tema1/img12.jpg'),
      },
    ],
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
