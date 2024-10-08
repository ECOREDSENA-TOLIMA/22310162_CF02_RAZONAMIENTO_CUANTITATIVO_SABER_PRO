<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5(data-aos="fade-right") Este componente formativo aborda una amplia gama de conceptos fundamentales en matemáticas avanzadas y su aplicación práctica. Comienza con las competencias matemáticas y la modelación, proporcionando una base teórica sólida para abordar problemas complejos mediante el uso de herramientas como la lógica, los conjuntos, la trigonometría, los números complejos y los patrones inductivos. A partir de estos fundamentos, se introducen problemas prácticos que refuerzan el pensamiento lógico, numérico y espacial, clave para la resolución de problemas en áreas como la lógica y la trigonometría. Finalmente, se exploran técnicas estadísticas de conteo y muestreo, junto con estimadores puntuales, intervalos de confianza y el manejo de variables cuantitativas, esenciales para el análisis y la interpretación de datos.

    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis del componente formativo Pensamiento matemático, espacial y estadístico, se abordan una amplia gama de conceptos fundamentales en matemáticas avanzadas y su aplicación práctica, esenciales para el análisis y el desarrollo intelectual.")
      .col-auto(data-aos="fade-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
