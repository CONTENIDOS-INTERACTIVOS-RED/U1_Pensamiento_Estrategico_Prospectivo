<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Habilidades y competencias del pensamiento estratégico '")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/20.png', alt='')
      .col-lg-8
        p.mb-0 Este tema se centra en las capacidades que permiten a los directivos  y equipos anticipar, adaptarse y prosperar en situaciones desafiantes.
          br
          br
          |Se exponen cinco habilidades que componen el pensamiento estratégico: la visión a largo plazo, la capacidad de adaptación y flexibilidad, la creatividad y resolución de problemas, las habilidades de análisis y síntesis, y la toma de riesgos informados. Cada una de estas competencias son importantes y al mismo tiempo interactúan de manera sinérgica para fortalecer la capacidad de un individuo o equipo para enfrentar los retos contemporáneos. Conozcamos cada una de ellas:
    .mn.p-5(style="background-color: #E3F3F4")
      SlyderA(tipo='b')
        .row.bg-white.p-5
          .col-md-6.mb-4.mb-md-0
            h4 Visión a largo plazo
            p La visión a largo plazo, se refiere a la capacidad de establecer metas y objetivos que trascienden el corto plazo, proporcionando dirección y propósito a las acciones estratégicas (Bas Amorós, 2013). Esta habilidad permite a los individuos y organizaciones, anticipar cambios en el entorno y adaptarse proactivamente. Una visión clara no solo motiva al equipo, sino que también ayuda a encaminar los esfuerzos hacia un futuro deseado, facilitando la toma de decisiones estratégicas que están en consonancia con los objetivos generales (Bas Amorós, 2013).
          .col-md-6
            figure
              img(src='@/assets/curso/temas/21.png', alt='Texto que describa la imagen')
        .row.bg-white.p-5
          .col-md-6.mb-4.mb-md-0
            h4 Capacidad de adaptación y flexibilidad
            p La capacidad de adaptación y flexibilidad, juega un papel protagónico en el pensamiento estratégico pues esta habilidad permite a las organizaciones responder eficazmente a nuevas circunstancias, ajustando sus estrategias y tácticas, según sea necesario (Bas Amorós, 2013). La flexibilidad se traduce en la disposición a reconsiderar enfoques y adoptar nuevas ideas, lo cual es fundamental para enfrentar desafíos imprevistos y aprovechar oportunidades emergentes (Bas Amorós, 2013).
          .col-md-6
            figure
              img(src='@/assets/curso/temas/22.png', alt='Texto que describa la imagen')
        .row.bg-white.p-5
          .col-md-6.mb-4.mb-md-0
            h4 Creatividad y resolución de problemas
            p La creatividad es la capacidad de generar ideas innovadoras y originales que pueden ser aplicadas para resolver problemas complejos (Bas Amorós, 2013). En el contexto del pensamiento estratégico, la creatividad se convierte en una herramienta vital para abordar desafíos de manera efectiva. La resolución de problemas, por su parte, implica un proceso estructurado de identificación, análisis y formulación de soluciones (Bas Amorós, 2013); estas habilidades facilitan a las organizaciones navegar por diversos contextos, encontrando respuestas eficaces y sostenibles.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/23.png', alt='Texto que describa la imagen')
        .row.bg-white.p-5
          .col-md-6.mb-4.mb-md-0
            h4 Habilidades de análisis y síntesis
            p Las habilidades de análisis y síntesis, representan una competencia sostenible para el pensamiento estratégico, pues estas permiten descomponer información compleja en partes manejables y luego combinar esos elementos en un todo coherente. El análisis implica evaluar datos y situaciones para comprender las dinámicas involucradas, mientras que la síntesis se refiere a la capacidad de integrar diversos elementos de información para formular conclusiones y recomendaciones estratégicas (Bas Amorós, 2013).
          .col-md-6
            figure
              img(src='@/assets/curso/temas/24.png', alt='Texto que describa la imagen')
        .row.bg-white.p-5
          .col-md-6.mb-4.mb-md-0
            h4 La toma de riesgos informados
            p La toma de riesgos informados es la habilidad de evaluar oportunidades y decidir actuar a pesar de la incertidumbre inherente (Bas Amorós, 2013). Esta competencia implica un análisis cuidadoso de las posibles consecuencias y beneficios de una decisión, permitiendo a las organizaciones adoptar enfoques estratégicos que pueden llevar a resultados positivos significativos. Al fomentar una cultura de toma de riesgos informados, las organizaciones pueden innovar y adaptarse más rápidamente a las condiciones cambiantes del mercado (Bas Amorós, 2013).
          .col-md-6
            figure
              img(src='@/assets/curso/temas/25.png', alt='Texto que describa la imagen')

    
</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema3',
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

<style lang="sass">
.material-complementario
  padding-top: 3rem
  border-top: 9px solid $color-sistema-e
</style>
