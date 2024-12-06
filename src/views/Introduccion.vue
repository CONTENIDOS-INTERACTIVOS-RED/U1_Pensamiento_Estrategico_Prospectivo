<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    p.mb-4 En un mundo en constante cambio, desarrollar un pensamiento estratégico resulta fundamental para tomar decisiones efectivas y anticiparse a escenarios futuros. El reto para profesionales de todos los sectores, conlleva a que esta habilidad sea indispensable en su formación cualificada dando respuesta a la demanda del actual mercado y sus incuestionables necesidades.
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        p.mb-4 Durante esta unidad, se estudia qué es el pensamiento estratégico y cómo éste difiere de la planificación tradicional. Además, se profundizará en las habilidades y competencias del pensamiento estratégico; viendo cómo estas habilidades son útiles tanto en entornos profesionales, como en situaciones cotidianas, promoviendo una perspectiva amplia y consciente en la toma de decisiones en diversos contextos laborales.
          br
          br
          | Al finalizar esta unidad, el estudiante estará en la capacidad de aprobar el resultado de aprendizaje: 
        .bg-color-1.p-4(data-aos="fade-left" style="background-color: #DAF6FA")
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/temas/1.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 “Comprende los principios del pensamiento estratégico y explica su relevancia en la toma de decisiones informadas en diversos contextos”.
      .col-lg-5.col-7: img(src='@/assets/curso/temas/2.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-5.col-7: img(src='@/assets/curso/temas/3.png', alt='')
      .col-lg-7
        p.mb-4 Incorporando entonces, el pensamiento estratégico como una herramienta clave en sus labores profesionales y cotidianas, permitiendo así la capacidad de prever tendencias, visualizar posibles escenarios y tomar decisiones fundamentadas. Esta es la esencia del pensamiento estratégico, una habilidad que distingue a las personas en cualquier ámbito y que fomenta la resolución innovadora de problemas y el liderazgo frente a desafíos complejos.
        .p-4(style="background-color: #F8EAE9 ")
          p.mb-0 Es importante una participación activa, y lectura del contenido, así como del material de apoyo sugerido; de esta forma, se logrará un mayor aprovechamiento de esta unidad.
  
    
</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import Muestras from '../components/muestras/Muestras.vue'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
    Muestras,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
