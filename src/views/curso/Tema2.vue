<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Diferencias entre planificación tradicional y pensamiento estratégico'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.bg-fondo-1 
    p.mb-4 Para poder comprender el tema “Diferencias entre planificación tradicional y pensamiento estratégico”, se hace necesario profundizar en varios aspectos importantes. 
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 Diferencias conceptuales
    p.mb-4 Primero, conozcamos cuáles son las diferencias conceptuales de estos dos términos:
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-4(data-aos="zoom-in-up")
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/temas/12.png" alt="")
          .custom-image-card__text.p-5
            h4.mb-2 Planificación tradicional
            p.mb-0 Se enfoca en la creación de planes detallados, normalmente enfocados en el corto y mediano plazo, con una estructura rígida y basada en la estabilidad y previsibilidad del entorno.
      .col-lg-6.mb-4(data-aos="zoom-in-up")
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/temas/13.png" alt="")
          .custom-image-card__text.p-5
            h4.mb-2 Pensamiento estratégico
            p.mb-0 Es más flexible y adaptable, orientado al largo plazo, y resalta la capacidad de anticiparse a cambios y tendencias, lo que permite a las organizaciones responder de forma rápida y efectiva.
    .row.justify-content-center.mb-5
      .col-lg-10
        .bg-color-1.p-4.mb-4(data-aos="fade-left" style="background-color: #DAF6FA")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/14.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Los pensadores estratégicos evalúan las variables de su entorno y están en constante búsqueda de oportunidades, para innovar y obtener ventaja competitiva. 
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2 Diferencias claves
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        p.mb-4 Ahora, se pueden analizar las características específicas que diferencian ambos conceptos:
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Horizonte temporal")
            p.mb-0 La planificación tradicional se enfoca en el corto plazo en su mayoría, mientras que el pensamiento estratégico da miras hacia el largo plazo.
          div(titulo="Flexibilidad")
            p.mb-0 La planificación tradicional tiende a ser rígida y detallada, lo que dificulta los ajustes. El pensamiento estratégico, es en cambio, dinámico y permite ajustes constantes, según el contexto.
          div(titulo="Orientación")
            p.mb-0 La planificación tradicional está orientada hacia la ejecución de tareas y cumplimiento de metas específicas; el pensamiento estratégico, se enfoca en la adaptación y crecimiento sostenible
          div(titulo="Metodología")
            p.mb-0 La planificación tradicional sigue un enfoque secuencial, mientras que el pensamiento estratégico utiliza análisis de escenarios y anticipación.
      .col-lg-5.col-7: img(src='@/assets/curso/temas/15.svg', alt='')
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3 Ventajas y desventajas
    p.mb-4 Es importante reconocer que cada enfoque tiene sus limitaciones, en esta parte expondremos las principales:
    TabsC.color-primario.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Planificación tradicional" :icon="require('@/assets/curso/temas/icon2.svg')" style="background-color: #F3F3F3")
        .row
          .col-md-6.col-lg-7.col-xl-7.mb-4.mb-md-0
            h4 Ventajas
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-circle.fa-xs
                p.mb-0 Proporciona estructura y claridad en los objetivos a corto plazo.
              li.d-flex
                i.fas.fa-circle.fa-xs
                p.mb-0 Facilita el control y seguimiento de actividades.
              li.d-flex
                i.fas.fa-circle.fa-xs
                p.mb-0 Es útil en entornos estables y predecibles.
            h4 Desventajas
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-circle.fa-xs
                p.mb-0 Rigidez ante cambios en el entorno.
              li.d-flex
                i.fas.fa-circle.fa-xs
                p.mb-0 Limitada capacidad para adaptarse a situaciones imprevistas.
              li.d-flex
                i.fas.fa-circle.fa-xs
                p.mb-0 Promueve menos innovación y creatividad, al centrarse en cumplir con un plan específico.
          .col-md-6.col-lg-5.col-xl-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/16.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Pensamiento estratégico" :icon="require('@/assets/curso/temas/icon2.svg')" style="background-color: #F3F3F3")
        .row
          .col-md-6.col-lg-7.col-xl-7.mb-4.mb-md-0
            h4 Ventajas
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-circle.fa-xs
                p.mb-0 Apoya la innovación y la adaptabilidad.
              li.d-flex
                i.fas.fa-circle.fa-xs
                p.mb-0 Permite anticipar y responder a cambios en el entorno.
              li.d-flex
                i.fas.fa-circle.fa-xs
                p.mb-0 Mejora la competitividad y facilita una visión integral de la organización.
            h4 Desventajas
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-circle.fa-xs
                p.mb-0 Requiere una mentalidad flexible y una capacitación constante.
              li.d-flex
                i.fas.fa-circle.fa-xs
                p.mb-0 Su implementación puede requerir tiempo.
              li.d-flex
                i.fas.fa-circle.fa-xs
                p.mb-0 En ocasiones, puede resultar difícil medir su éxito a corto plazo.
          .col-md-6.col-lg-5.col-xl-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/17.png', alt='')
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.4 Casos y ejemplos
    p.mb-4 Estudiemos primero los casos nacionales:
    .row.justify-content-center.mb-4
      .col-lg-7.mb-lg-0.mb-3
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Caso de planificación tradicional")
            p.mb-0 #[b Ecopetrol], la principal empresa petrolera de Colombia, ha utilizado históricamente la planificación tradicional para organizar sus operaciones de extracción y refinación de petróleo. En un entorno relativamente estable en términos de infraestructura y operaciones, esta estrategia ha permitido a Ecopetrol cumplir con sus objetivos de producción y distribución. Sin embargo, en años recientes, la empresa ha comenzado a integrar elementos de pensamiento estratégico, especialmente al explorar energías renovables y considerar el impacto de los cambios climáticos y regulatorios.
          div(titulo="Caso de pensamiento estratégico")
            p.mb-0 Bancolombia ha adoptado un enfoque de pensamiento estratégico en su transformación digital y en su enfoque al cliente. Al anticipar la creciente demanda de servicios digitales, Bancolombia ha invertido en plataformas y tecnologías innovadoras, para ofrecer servicios de banca en línea y móvil, buscando mejorar la experiencia del cliente y adaptarse a un mercado cada vez más digitalizado. Esta estrategia le ha permitido mantenerse y responder proactivamente a los cambios en las necesidades de sus clientes.
      .col-lg-5.col-7: img(src='@/assets/curso/temas/18.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/19.png', alt='')
      .col-lg-7
        p.mb-4 Estudiemos primero los casos nacionales:
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Caso de planificación tradicional")
            p.mb-0 #[b Toyota], el gigante automotriz japonés, es conocido por su método de producción "justo a tiempo" y su riguroso sistema de control de calidad, ambos basados en un enfoque de planificación tradicional. En un contexto donde la eficiencia y el control de costos son primordiales, Toyota ha utilizado esta estrategia para maximizar la productividad y reducir el desperdicio. Este enfoque ha sido muy exitoso en mantener altos estándares de calidad y en establecer un modelo de producción replicable en otros mercados.
          div(titulo="Caso de pensamiento estratégico")
            p.mb-0 #[b Apple Inc.] Apple es un ejemplo destacado de pensamiento estratégico a nivel global. La compañía ha logrado anticiparse a las tendencias tecnológicas y a las demandas del mercado, lanzando productos innovadores que redefinen categorías enteras, como el iPhone o el iPad. Apple no solo se adapta a los cambios en el mercado, sino que también crea nuevas necesidades a través de un enfoque de innovación constante y adaptación rápida, lo que le permite mantener su liderazgo en la industria tecnológica.






</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
