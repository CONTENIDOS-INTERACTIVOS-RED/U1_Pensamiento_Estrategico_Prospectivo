<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Introducción al pensamiento estratégico '")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .row.justify-content-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/4.svg', alt='')
      .col-lg-7
        p.mb-4 En el contexto actual, caracterizado por su dinamismo y constante evolución, el pensamiento estratégico se ha consolidado como una habilidad fundamental que deben poseer los profesionales de todos los sectores.
        .bg-color-1.p-4.mb-4(data-aos="fade-left" style="background-color: #DAF6FA")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Este enfoque va más allá de la mera planificación; implica una visión a largo plazo, la capacidad de anticipar cambios en el entorno y la habilidad para tomar decisiones informadas que permitan a organizaciones e individuos adaptarse exitosamente a los desafíos futuros.
        p.mb-0 Esto representa una necesidad, tanto para quienes lideran las empresas, como para cualquier profesional que busque destacar en su campo.
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 #[span 1.1] Historia y evolución de la planeación estratégica 
    .p-4(style="background-color: #FFFBE8 ").mb-4
      .row.justify-content-center.align-items-center
            .col-lg-7
              p.mb-4(data-aos="fade-right") La planificación estratégica ha evolucionado desde sus raíces en la gestión mecanicista del taylorismo hasta convertirse en una disciplina integral que responde a las demandas de mercados competitivos y entornos dinámicos. El PDF Historia y evolución de la planeación estratégica , analiza cómo conceptos como las teorías X, Y y Z, así como el desarrollo organizacional, han transformado la planeación empresarial, integrando perspectivas centradas en los empleados y la cultura corporativa. Estudiar esta evolución es clave para comprender el surgimiento del pensamiento estratégico y su relevancia en la construcción de organizaciones sostenibles y adaptables.

              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_Estrategia.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Historia y evolución de la planeación estratégica.

            .col-lg-5
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/6.png', alt='')
    p.mb-4 La siguiente figura presenta un resumen de la historia y evolución de la planeación estratégica hacia el pensamiento estratégico.
    .row.justify-content-center.mb-5
      .col-lg-11
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 1.
          span Historia y evolución de la planeación estratégica hacia el pensamiento estratégico
        img(src='@/assets/curso/temas/7.svg', alt='')
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 #[span 1.2] Concepto de pensamiento estratégico     
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        p.mb-0 El pensamiento estratégico, es una habilidad crítica que permite a los individuos y organizaciones anticipar, analizar y responder proactivamente, a los desafíos y oportunidades del entorno. Esto no solo implica la identificación de metas y objetivos, sino también la evaluación de los recursos y capacidades disponibles, así como el análisis de las tendencias y dinámicas del entorno.
          br
          br
          | Según Chávez Martínez (2003), el pensamiento estratégico puede definirse como un enfoque mental que busca comprender y gestionar la complejidad de los entornos organizacionales, mediante la identificación de patrones, tendencias y relaciones causales. Este enfoque permite a los líderes y gerentes, tomar decisiones informadas y en concordancia con la misión y visión de la organización.
      .col-lg-5.col-7: img(src='@/assets/curso/temas/8.png', alt='')
    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/9.svg', alt='Texto que describa la imagen')
      .tarjeta.p-3(x="26.5%" y="45%" numero="+" style="background-color: #C8F1F8")
        .h5.mb-2 Colaboración
        p Reconoce la importancia de trabajar en equipo y de involucrar a diferentes partes interesadas en el proceso de toma de decisiones.
      .tarjeta.p-3(x="34.6%" y="84.5%" numero="+" style="background-color: #C8F1F8")
        .h5.mb-2 Creatividad e innovación
        p Fomenta la generación de ideas nuevas y soluciones creativas.
      .tarjeta.p-3(x="65.3%" y="86%" numero="+" style="background-color: #C8F1F8")
        .h5.mb-2 Flexibilidad
        p Capacidad de ajustar planes y acciones en respuesta a nuevas informaciones y situaciones diversas.
      .tarjeta.p-3(x="73.5%" y="45%" numero="+" style="background-color: #C8F1F8")
        .h5.mb-2 Análisis del contexto
        p Comprensión del entorno, tanto interno como externo, incluyendo factores económicos, sociales, tecnológicos y competitivos.
      .tarjeta.p-3(x="49.9%" y="21%" numero="+" style="background-color: #C8F1F8")
        .h5.mb-2 Visión
        p Capacidad de prever y planificar para el futuro, considerando escenarios posibles y la adaptación a cambios inesperados.
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 #[span 1.3] Importancia del pensamiento estratégico
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        p.mb-4 El pensamiento estratégico representa una habilidad indispensable para organizaciones y profesionales que buscan responder a los retos y demandas de un entorno dinámico y competitivo. 
          br
          br
          |En la actualidad, es importante planificar acciones, y prever tendencias, para poder diseñar estrategias adaptativas que posicionen a la organización, en una ventaja competitiva sostenible.
        .p-4(style="background-color: #FFF4C0")
          p.mb-0 Este tipo de pensamiento facilita una comprensión profunda de los factores que influyen en el entorno empresarial, como la globalización, los avances tecnológicos y los cambios en las expectativas de los consumidores. 
      .col-lg-5.col-7: img(src='@/assets/curso/temas/10.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/11.png', alt='')
      .col-lg-7
        p.mb-0 El pensamiento estratégico conlleva a las organizaciones, tanto a sus directivos como a sus equipos de trabajo, a desarrollar una visión a largo plazo, a evaluar posibles escenarios y a tomar decisiones basadas con la misión y visión organizacional (Chávez Martínez, 2003). Esta habilidad es también clave para fomentar la innovación, alentar la colaboración y coordinar esfuerzos para alcanzar metas comunes. Por lo tanto, la aplicación de un pensamiento estratégico, fortalece la adaptabilidad organizacional y permite responder efectivamente ante circunstancias inciertas.
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
