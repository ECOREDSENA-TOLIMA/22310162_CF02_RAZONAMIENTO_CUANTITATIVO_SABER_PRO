<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right")
        p Este componente formativo se centra en el desarrollo integral de competencias en pensamiento matemático, espacial y estadístico. Su propósito es proporcionar a los aprendices las habilidades necesarias para resolver problemas complejos en diversos contextos, utilizando herramientas clave como la lógica matemática, la trigonometría y la estadística. A lo largo del curso, se explorarán técnicas de modelación, análisis y razonamiento que permitirán aplicar conceptos matemáticos de manera efectiva en situaciones tanto teóricas como prácticas. De esta manera, los aprendices no solo comprenderán los fundamentos matemáticos, sino que también estarán capacitados para utilizarlos en la solución de problemas reales, mejorando así su capacidad de pensamiento crítico y su precisión analítica.
    
    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/pi3uWjaVE6c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
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
