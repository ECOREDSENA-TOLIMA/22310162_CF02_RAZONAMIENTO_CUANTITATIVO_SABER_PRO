<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Desarrollo del pensamiento lógico, numérico y espacial
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema4/img1.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center
      .col-lg-12(data-aos="fade-right")
        p El desarrollo del pensamiento lógico, numérico y espacial es fundamental en la resolución de problemas en matemáticas, ciencias y muchas otras disciplinas. Estas habilidades permiten analizar situaciones desde diferentes perspectivas, encontrar soluciones eficaces y entender relaciones complejas entre los elementos de un problema. El pensamiento lógico se enfoca en la coherencia de las ideas, el numérico en la manipulación de números y operaciones, y el espacial en la visualización y análisis de objetos o estructuras geométricas.
    
    separador 

    .titulo-segundo.color-acento-contenido(data-aos="flip-up")
      #t_4_1.h2 4.1 Pensamiento lógico

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-lg-1.order-2
        p(data-aos="fade-right") El pensamiento lógico implica la habilidad de razonar de manera coherente, utilizando principios de deducción e inducción para llegar a conclusiones. Este tipo de pensamiento es fundamental para resolver problemas complejos, ya que permite identificar patrones, relaciones y reglas que gobiernan el comportamiento de los elementos dentro de un sistema.
        .cajon.color-secundario.p-4.mb-4(data-aos="fade-right")
          p.mb-0 Se desarrolla a través de la identificación de premisas y la aplicación de reglas que permiten inferir conclusiones correctas. El razonamiento deductivo parte de hechos o verdades generales para llegar a conclusiones particulares, mientras que el razonamiento inductivo va de lo particular a lo general, buscando patrones en los datos.
        
      .col-lg-5.col-md-10.mb-lg-0.mb-4.order-lg-2.order-1(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema4/img2.png', alt='Imagen decorativa')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-md-10.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema4/img3.svg', alt='Imagen decorativa')

      .col-lg-6
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-12
            .tarjeta.p-3.divformu
              p.mb-1.text-center Ejemplo: en el Sena, se sabe que, si un aprendiz entrega todas sus evidencias, aprobará el curso. Pedro entregó todas sus evidencias. ¿Aprobará el curso?
        .row.justify-content-center.align-items-center
          .col-lg-12
            .tarjeta.p-3.divformu
              p.mb-1.text-center Solución: sí, Pedro aprobará el curso porque cumple con la premisa general (si se entregan todas las evidencias, se aprueba el curso).
    
    .row.justify-content-center.align-items-center
      .col-lg-12(data-aos="fade-right")
        p El desarrollo de esta habilidad es clave en áreas como la programación, la toma de decisiones, y la resolución de problemas científicos y filosóficos.
    separador 

    .titulo-segundo.color-acento-contenido(data-aos="flip-up")
      #t_4_2.h2 4.2 Razonamiento numérico
    
    .row.justify-content-center.align-items-center
      .col-lg-12(data-aos="fade-right")
        p El razonamiento numérico es la capacidad para entender y trabajar con números, realizar operaciones matemáticas y usar los números para interpretar datos y tomar decisiones. Este tipo de razonamiento incluye no solo la capacidad para realizar cálculos básicos (como sumas y multiplicaciones), sino también para entender proporciones, escalas, probabilidades y distribuciones de datos.
    
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El razonamiento numérico es crucial para la vida cotidiana, ya que se utiliza en situaciones tan diversas como la administración financiera, el cálculo de probabilidades en juegos de azar, o la interpretación de estadísticas en informes y medios de comunicación. En el contexto académico, es esencial en disciplinas como la economía, la ingeniería, la física y la informática.
    
    .row.justify-content-center.align-items-center.mb-3.mt-5
      .col-lg-6
        .tarjeta-avatar-b.mb-5.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema4/img5.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h4 Ejemplo
              p Una tienda ofrece un descuento del 20 % en un producto que cuesta $ 50. ¿Cuál es el precio final del producto?
                  
      .col-lg-6
        .tarjeta-avatar-b.mb-5.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema4/img6.svg' alt='AvatarTop')          
          .tarjeta.tarjeta--azul
            .p-4
              h4 Solución
              p El descuento es 50 × 0.20 = 10. El precio final del producto es 50 – 10 = 40 dólares.



    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right")
        p Este tipo de problemas fomenta el desarrollo de habilidades analíticas y cuantitativas, esenciales para el razonamiento lógico y la toma de decisiones informadas.
    
    separador 

    .titulo-segundo.color-acento-contenido(data-aos="flip-up")
      #t_4_3.h2 4.3 Razonamiento espacial

    .row.justify-content-center.align-items-center
      .col-lg-12(data-aos="fade-right")
        p El razonamiento espacial se refiere a la capacidad de visualizar y manipular objetos y sus relaciones en el espacio. Incluye la habilidad de percibir cómo se verán los objetos cuando se muevan, giren o cambien de tamaño. Este tipo de razonamiento es crucial en campos como la arquitectura, el diseño, la ingeniería, la biología (al estudiar estructuras celulares o anatómicas), y en la resolución de problemas geométricos.
    
    .bg--gradientBlue.mb-4.p-4
      .row
        .col-10
          .row.justify-content-center.align-items-center.mb-3(style="margin-inline:3em;")
            .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/tema4/img7.png', alt='Imagen decorativa')
            .col-lg-8.mb-lg-0.mb-4(data-aos="fade-right")
              p Las habilidades espaciales permiten a las personas entender mapas, planos, diagramas y modelos tridimensionales. También facilitan la comprensión de conceptos geométricos y trigonómicos, como las transformaciones geométricas (rotación, traslación, etc.) y la comprensión de gráficos o representaciones de datos.
              ul.lista-ul
                li(data-aos="fade-right")
                  i.fas.fa-angle-right(style="color:#6FD9FB")
                  p-mb-0 #[b Ejemplo:] si se corta un cubo en diagonal, ¿cuál es la forma de la sección transversal?
                li(data-aos="fade-right")
                  i.fas.fa-angle-right(style="color:#6FD9FB")
                  p-mb-0 #[b Solución:] la sección transversal de un cubo cortado en diagonal será un hexágono, lo que demuestra cómo una figura tridimensional puede dar lugar a una figura plana compleja dependiendo de la orientación del corte.
                 

</template>

<script>
export default {
  name: 'Tema4',
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
