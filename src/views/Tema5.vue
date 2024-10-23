<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Técnicas estadísticas de conteo y muestreo
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="zoom-in")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Las técnicas estadísticas permiten a los matemáticos, científicos y analistas estudiar y extraer información de grandes cantidades de datos de manera eficiente y precisa. Estas técnicas incluyen la organización, el conteo y la selección de muestras representativas de una población más amplia, lo que permite realizar estimaciones, analizar tendencias y hacer predicciones sobre fenómenos observados. Además, estas herramientas son fundamentales para entender la variabilidad inherente de los datos y reducir el sesgo en los análisis. Se aplican en una amplia gama de disciplinas, tales como biología, economía, investigación social, y sistemas de inteligencia artificial, donde el análisis estadístico es clave para la toma de decisiones.
    
    
    separador 

    .titulo-segundo.color-acento-contenido(data-aos="flip-up")
      #t_5_1.h2 5.1 Técnicas de conteo y muestreo
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p Las técnicas de conteo son herramientas matemáticas que permiten calcular cuántas maneras diferentes existen para organizar, seleccionar o agrupar elementos en un conjunto. Entre estas técnicas se encuentran las permutaciones, combinaciones, y el principio fundamental de conteo.
        p Las permutaciones se refieren al número de formas en que se pueden organizar un conjunto de elementos cuando el orden es importante. Las combinaciones, por otro lado, cuentan las maneras en que se pueden seleccionar subconjuntos de elementos cuando el orden no importa.
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema5/img2.svg', alt='Imagen decorativa')
    
    .row.justify-content-center.align-items-center.mb-3.mt-5
      .col-lg-6
        .tarjeta-avatar-b.mb-5.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema5/img3.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h4 Ejemplo de conteo
              p ¿Cuántas formas diferentes hay de ordenar tres libros de un estante que contiene cinco libros diferentes?
                  
      .col-lg-6
        .tarjeta-avatar-b.mb-5.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema5/img4.svg' alt='AvatarTop')          
          .tarjeta.tarjeta--azul
            .p-4
              h4 Solución
              p Las permutaciones de 5 elementos tomados de 3 en 3 se calculan como: 
              p #[b P(5, 3) = 5! / (5 − 3)! = 5 × 4 × 3 = 60 maneras.]
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8
        p El muestreo es un proceso estadístico mediante el cual se selecciona una parte representativa de una población más grande. Existen varios tipos de muestreo, como el muestreo aleatorio simple, el muestreo estratificado y el muestreo sistemático.
    .row.justify-content-center.align-items-center.mb-3.mt-5
      .col-lg-6
        .tarjeta-avatar-b.mb-5.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema5/img5.svg' alt='AvatarTop')          
          .tarjeta.tarjeta--azul
            .p-4
              h4 Ejemplo de muestreo
              p En una encuesta de 100 aprendices del Sena, se elige una muestra de 10 aprendices para participar en un estudio de hábitos alimenticios.
      .col-lg-6
        .tarjeta-avatar-b.mb-5.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema5/img6.svg' alt='AvatarTop')          
          .tarjeta.tarjeta--azul
            .p-4
              h4 Solución
              p Si el muestreo es aleatorio, cada aprendiz tiene la misma probabilidad de ser seleccionado.
    
    separador 

    .titulo-segundo.color-acento-contenido(data-aos="flip-up")
      #t_5_2.h2 5.2 Estimador puntual y de intervalos
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema5/img7.png', alt='Imagen decorativa')
      .col-lg-7(data-aos="fade-right")
        p(data-aos="fade-right") Un estimador puntual es un valor único que proporciona una aproximación del valor real de un parámetro poblacional, como la media o la varianza. Por ejemplo, la media de una muestra se utiliza como estimador puntual de la media de la población. Sin embargo, debido a la variabilidad de las muestras, el estimador puntual puede no ser completamente exacto, lo que lleva a la necesidad de los estimadores por intervalos.
        .cajon.color-primario.p-4.mb-4(data-aos="fade-right")
          p.mb-0 El estimador por intervalos establece un rango de valores, llamado intervalo de confianza, que contiene al parámetro real de la población con una probabilidad o nivel de confianza determinado (comúnmente 95 % o 99 %). Este intervalo refleja la precisión del estimador y la incertidumbre asociada a la variabilidad de los datos.
    
    .tarjeta--container.row.mb-5
      .col-lg.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-5
          .col-3
            figure
              img(src='@/assets/curso/temas/tema5/img8.svg', alt='Imagen Decorativa')
        h4.text-center Ejemplo de estimador puntual
        p Si en un estudio se encuentra que el peso promedio de una muestra de 50 estudiantes universitarios es de 70 kg, ese valor es el estimador puntual del peso promedio de toda la población universitaria.
      .col-lg.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-5
          .col-3
            figure
              img(src='@/assets/curso/temas/tema5/img9.svg', alt='Imagen Decorativa')
        h4.text-center Ejemplo de intervalo de confian
        p Si se calcula un intervalo de confianza del 95 % para el peso promedio de 68 kg a 72 kg, significa que hay un 95 % de probabilidad de que el peso promedio real de todos los estudiantes esté en ese rango.
      
      
    separador 

    .titulo-segundo.color-acento-contenido(data-aos="flip-up")
      #t_5_3.h2 5.3 Variables cuantitativas
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12(data-aos="fade-right")
        p Las variables cuantitativas son aquellas que toman valores numéricos y se pueden medir o contar. Estas variables se dividen en dos tipos:
    
    TabsC.color-acento-botones.mb-5
      .py-4.py-99.py-md-5(titulo="Pensamiento numérico")
        .row
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema5/img10.png', alt='Imagen decorativa')
          .col-md-8.mb-4.mb-md-0.p-4
            h4
            p Son aquellas que solo pueden tomar un número finito o contable de valores. Ejemplos incluyen el número de hijos en una familia o el número de autos vendidos en un mes.
            p #[b -	Ejemplo:] el número de autos vendidos por una concesionaria cada mes es una variable cuantitativa discreta, ya que el número puede ser contado y toma valores enteros (por ejemplo, 3, 5, 8 autos).
      .py-4.py-99.py-md-5(titulo="Pensamiento espacial")
        .row
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema5/img11.png', alt='Imagen decorativa')
          .col-md-8.mb-4.mb-md-0.p-4
            h4
            p Son aquellas que pueden tomar cualquier valor dentro de un rango determinado. Ejemplos de variables continuas incluyen el peso, la altura y el tiempo.
            p #[b -	Ejemplo:] el tiempo que tarda un corredor en completar una maratón es una variable cuantitativa continua, ya que puede medirse con precisión y tomar cualquier valor dentro de un intervalo (por ejemplo, 3 horas, 3 horas y 10 minutos, o 3 horas y 10.5 minutos).
      
    .row.justify-content-center.align-items-center
      .col-lg-12(data-aos="fade-right")
        p Las variables cuantitativas son fundamentales en los análisis estadísticos, ya que permiten realizar cálculos precisos y medir relaciones entre distintos fenómenos.

</template>

<script>
export default {
  name: 'Tema5',
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
