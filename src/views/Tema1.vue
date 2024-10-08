<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Competencias matemáticas y modelación
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        .cajon.color-primario.p-4.mb-4(data-aos="fade-right")
          p.mb-0 En la última década, los avances tecnológicos han transformado profundamente el ámbito educativo, exigiendo una revisión crítica y una actualización de los métodos de enseñanza y aprendizaje. Este cambio ha llevado a un enfoque que va más allá de la simple transmisión de conocimientos, buscando desarrollar competencias que permitan a los individuos adaptarse y desempeñarse eficazmente en un entorno en constante evolución. En este contexto, la competencia matemática se ha convertido en una habilidad fundamental, no solo para la resolución de problemas, sino para la adaptación a los desafíos que presenta el mundo moderno.
        p(data-aos="fade-right") Este apartado explora la competencia matemática desde una perspectiva integral, considerando los cinco tipos de pensamiento que la constituyen: numérico, espacial, métrico, aleatorio y variacional. Cada uno de estos tipos de pensamiento contribuye a una comprensión más profunda y a una aplicación más efectiva de las matemáticas en situaciones reales, facilitando el desarrollo de habilidades para enfrentar problemas complejos y modelar situaciones en contextos variados.
         
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema1/img1.png', alt='Imagen decorativa')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="zoom-in")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img2.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La modelación matemática juega un papel crucial en este proceso, permitiendo a los aprendices traducir problemas del mundo real en modelos matemáticos que pueden ser analizados y resueltos. La modelación no solo facilita la resolución de problemas básicos, sino que también prepara a las personas para enfrentar problemas más complejos y abstractos al proporcionarles herramientas y metodologías para el análisis y la interpretación de datos en diversos contextos.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right")
        p Este enfoque integrado busca no solo fortalecer las habilidades matemáticas fundamentales, sino también preparar a las personas para aplicar estos conocimientos de manera práctica y efectiva en sus futuros roles profesionales y académicos, asegurando su capacidad para enfrentar con éxito los retos de un entorno en constante cambio.

    separador 

    .titulo-segundo.color-acento-contenido(data-aos="flip-up")
      #t_1_1.h2 1.1 Competencias matemáticas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right")
        p Este enfoque integrado busca no solo fortalecer las habilidades matemáticas fundamentales, sino también preparar a las personas para aplicar estos conocimientos de manera práctica y efectiva en sus futuros roles profesionales y académicos, asegurando su capacidad para enfrentar con éxito los retos de un entorno en constante cambio.
    
    TabsC.color-acento-botones.mb-5
      .py-4.py-99.py-md-5(titulo="Pensamiento numérico")
        .row
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/tema1/img3.png', alt='Imagen decorativa')
          .col-lg-8.mb-4.mb-md-0.p-4
            h4
            p Relacionado con los números y sus estructuras, abarca operaciones fundamentales como suma, multiplicación, resta y división. Este pensamiento facilita una comprensión profunda de las propiedades y aplicaciones de los números.
            li
              | #[b Ejemplo]: ¿Cuántas naranjas tiene un agricultor si cosechó 120 naranjas en 5 días, recolectando la misma cantidad cada día?
            li
              | #[b Aplicación]: se utiliza el pensamiento numérico para realizar la operación de división: 120 naranjas / 5 días = 24 naranjas por día.
      .py-4.py-99.py-md-5(titulo="Pensamiento espacial")
        .row
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/tema1/img4.png', alt='Imagen decorativa')
          .col-lg-8.mb-4.mb-md-0.p-4
            h4
            p Se enfoca en la representación y relación de objetos en el espacio, utilizando la geometría para analizar y entender las configuraciones espaciales.
            li
              | #[b Ejemplo]: determinar el área de un terreno rectangular para planificar la construcción de una casa.
            li
              | #[b Aplicación]: aquí se emplea el pensamiento espacial para calcular el área multiplicando la longitud por el ancho del terreno, y considerar cómo se dispondrán los espacios dentro de la construcción.
      .py-4.py-99.py-md-5(titulo="Pensamiento métrico")
        .row
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/tema1/img5.png', alt='Imagen decorativa')
          .col-lg-8.mb-4.mb-md-0.p-4
            h4
            p Se ocupa de la medición y manejo de equivalencias en los sistemas de medida, siendo crucial para la construcción y transformación de objetos en el entorno.
            li
              | #[b Ejemplo]: convertir 5 kilómetros a metros para comparar la distancia recorrida en diferentes unidades de medida.
            li
              | #[b Aplicación]: el pensamiento métrico permite realizar la conversión mediante la multiplicación: 5 km × 1.000 m/km = 5.000 metros.
      .py-4.py-99.py-md-5(titulo="Pensamiento aleatorio")
        .row
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/tema1/img6.png', alt='Imagen decorativa')
          .col-lg-8.mb-4.mb-md-0.p-4
            h4
            p Aborda situaciones de incertidumbre, azar y riesgo, empleando estructuras matemáticas para obtener información precisa en contextos de ambigüedad.
            li
              | #[b Ejemplo]: calcular la probabilidad de obtener un número par al lanzar un dado.
            li
              | #[b Aplicación]: se utiliza el pensamiento aleatorio para identificar que hay 3 números pares (2, 4, 6) en un dado de 6 caras, lo que da una probabilidad de 3 / 6 o 1 / 2.
      .py-4.py-99.py-md-5(titulo="Pensamiento variacional")
        .row
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/tema1/img7.png', alt='Imagen decorativa')
          .col-md-8.mb-4.mb-md-0.p-4
            h4
            p Se centra en la variación y el cambio, fundamentado en el estudio de sistemas algebraicos y analíticos, esencial para la modelación matemática que se explora en la siguiente sección.
            li
              | #[b Ejemplo]: analizar cómo cambia el área de un círculo al aumentar el radio.
            li
              | #[b Aplicación]: el pensamiento variacional se aplica para comprender que, al duplicar el radio, el área (πr²) se cuadruplica, lo que muestra la relación entre las variables y cómo una afecta a la otra.
    separador 

    .titulo-segundo.color-acento-contenido(data-aos="flip-up")
      #t_1_2.h2 1.2 Modelación en matemáticas
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-10.order-lg-1.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema1/img8.png', alt='Imagen decorativa')
      .col-lg-7.order-lg-2.order-2(data-aos="fade-right")
        .cajon.color-secundario.p-4.mb-4(data-aos="fade-right")
          p.mb-0 La modelación en matemáticas se refiere al proceso de crear representaciones matemáticas de situaciones del mundo real para comprender mejor un fenómeno, hacer predicciones, o resolver problemas prácticos. Este proceso implica abstraer elementos clave de una situación, formular un modelo matemático que los represente, analizar y resolver el modelo, e interpretar los resultados en el contexto original.
        p(data-aos="fade-right") La importancia de la modelación matemática radica en su capacidad para simplificar y estructurar problemas complejos, permitiendo a los aprendices aplicar conceptos matemáticos a situaciones concretas. A través de la modelación, se fomenta un pensamiento crítico y creativo, ayudando a desarrollar habilidades esenciales como la toma de decisiones, la capacidad de análisis, y la adaptación a diferentes contextos. A continuación, se describe el proceso que se puede llevar a cabo para la modelación matemática:
    
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in")
      .tarjeta.bg-img-tarj.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema1/img9.svg' alt='AvatarTop')
        h4.text-center Comprensión del problema
        p.text-center Se identifica el problema en su contexto real y se determinan los elementos clave que lo conforman.
      .tarjeta.bg-img-tarj.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema1/img10.svg' alt='AvatarTop')
        h4.text-center Formulación del modelo
        p.text-center Se construye un modelo matemático utilizando ecuaciones, funciones, gráficas, o sistemas de ecuaciones, que represente la situación real.
      .tarjeta.bg-img-tarj.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema1/img11.svg' alt='AvatarTop')
        h4.text-center Análisis y resolución del modelo
        p.text-center Se aplica el conocimiento matemático para resolver el modelo y obtener resultados.
      .tarjeta.bg-img-tarj.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema1/img12.svg' alt='AvatarTop')
        h4.text-center Interpretación de los resultados
        p.text-center Se analiza si los resultados del modelo tienen sentido en el contexto original y se ajusta el modelo si es necesario.
      .tarjeta.bg-img-tarj.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema1/img13.svg' alt='AvatarTop')
        h4.text-center Validación y refinamiento
        p.text-center Se verifica la validez del modelo comparando las predicciones con datos reales y se realizan ajustes para mejorar su precisión.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right")
        p Con el fin de complementar la información, a continuación, se presentan ejemplos de modelación matemática aplicados a diferentes contextos para ilustrar cómo este enfoque permite comprender y resolver problemas del mundo real:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        .tarjeta-avatar-b.mb-5.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img14.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h4 Ejemplo en economía
              p Modelar el crecimiento económico de un país usando funciones exponenciales para prever cómo ciertos cambios en la tasa de inversión o consumo afectarán el PIB en el futuro.
                  
      .col-lg-6
        .tarjeta-avatar-b.mb-5.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img15.svg' alt='AvatarTop')          
          .tarjeta.tarjeta--azul
            .p-4
              h4 Ejemplo en física
              p Utilizar ecuaciones diferenciales para modelar el movimiento de un proyectil, tomando en cuenta variables como la resistencia del aire y la gravedad.
              
      .col-lg-6
        .tarjeta-avatar-b.mb-5.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img16.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h4 Ejemplo en epidemiología
              p Desarrollar un modelo SIR (Susceptibles-Infectados-Recuperados) para predecir la propagación de una enfermedad en una población, y determinar la efectividad de las medidas de control como la vacunación o el distanciamiento social.
      .col-lg-6
        .tarjeta-avatar-b.mb-5.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img16.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h4 Ejemplo en ingeniería
              p Crear un modelo matemático para simular el comportamiento de una estructura bajo cargas diferentes, como puentes o edificios, y evaluar su estabilidad y seguridad.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right")
        p La modelación matemática no solo es fundamental para resolver problemas en matemáticas, sino que también se extiende a muchas otras disciplinas como las ciencias naturales, la ingeniería, la economía, y las ciencias sociales, donde se requiere una comprensión profunda de las interacciones entre variables y la capacidad de prever el comportamiento de sistemas complejos.
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
