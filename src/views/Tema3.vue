<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Aplicaciones prácticas en lógica y trigonometría
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img1.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center
      .col-lg-12(data-aos="fade-right")
        p Con el fin de poner en práctica lo aprendido en lógica y trigonometría, se presentan a continuación una serie de problemas que permiten aplicar los conceptos estudiados en situaciones concretas.
    
    separador 

    .titulo-segundo.color-acento-contenido(data-aos="flip-up")
      #t_3_1.h2 3.1 Problema de lógica 
    
    .row.justify-content-center.align-items-center
      .col-lg-12(data-aos="fade-right")
        p Determinar si la siguiente afirmación es verdadera o falsa usando una tabla de verdad: "Si Juan estudia matemáticas o física, entonces aprobará el examen". Considerar que Juan no estudió matemáticas, pero sí física.

    .titulo-decorativo.my-4(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/imgtitulo.svg")
      .cont-text 
        h3 Proceso de Solución
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right")
        listul.lista-ul
          li 
            | #[b Definición de proposiciones]
        p Tales como el seno, coseno y tangente, son relaciones entre los lados del triángulo rectángulo que se utilizan para resolver problemas de cálculo de alturas, distancias y ángulos. Las funciones trigonométricas básicas y sus correspondientes inversas son:
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-4.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img2.png', alt='')
      .col-lg-6.mb-lg-0.mb-4
        .row.justify-content-center.mb-3
          .col-lg-12(data-aos="fade-right")
            .tarjeta.p-3.divformu
              p.mb-1.text-center #[b p: Juan estudia matemáticas.]
        .row.justify-content-center.mb-3
          .col-lg-12(data-aos="fade-right")
            .tarjeta.p-3.divformu
              p.mb-1.text-center #[b q: Juan estudia física.]
            
        .row.justify-content-center.mb-3
          .col-lg-12(data-aos="fade-right")
            .tarjeta.p-3.divformu
              p.mb-1.text-center #[b r: Juan aprobará el examen.]
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right")
        listul.lista-ul
          li 
            | #[b Expresión lógica]
        p La afirmación se puede expresar como: (p ∨ q) → r.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right")
        listul.lista-ul
          li 
            | #[b Tabla de verdad]
    
    .titulo-sexto.color-acento-contenido.offset-1(data-aos="zoom-in")
      h5 Tabla 1.
      span  #[i  Tablas de verdad]
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="fade-right")
        table
          thead(style="background-color:#6FD9FB")
            tr
              th.text-center p
              th.text-center q
              th.text-center pvq
              th.text-center r
              th.text-center (p v q)→r
          tbody
            tr
              td.text-center F
              td.text-center F
              td.text-center F
              td.text-center F
              td.text-center V
            tr
              td.text-center F
              td.text-center F
              td.text-center F
              td.text-center V
              td.text-center V
            tr
              td.text-center F
              td.text-center V
              td.text-center V
              td.text-center F
              td.text-center V
            tr
              td.text-center F
              td.text-center V
              td.text-center V
              td.text-center V
              td.text-center V
            tr
              td.text-center V
              td.text-center F
              td.text-center V
              td.text-center F
              td.text-center F
            tr
              td.text-center V
              td.text-center F
              td.text-center V
              td.text-center V
              td.text-center V
            tr
              td.text-center V
              td.text-center V
              td.text-center V
              td.text-center F
              td.text-center F
            tr
              td.text-center V
              td.text-center V
              td.text-center V
              td.text-center V
              td.text-center V
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right")
        listul.lista-ul
          li 
            | #[b Evaluación]
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta.p-3.divformu
          p.mb-1.text-center Dado que Juan no estudió matemáticas (p = F) pero sí estudió física (q = V), la proposición p ˅ q es verdadera.
      .col-lg-4.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta.p-3.divformu
          p.mb-1.text-center Si se supone que Juan no aprobó el examen (r = F), entonces la implicación (p ˅ q) → r, resulta ser falsa.
      .col-lg-4.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta.p-3.divformu
          p.mb-1.text-center Si Juan aprobó el examen (r = V), entonces la implicación es verdadera.
          br
    
    separador 

    .titulo-segundo.color-acento-contenido(data-aos="flip-up")
      #t_3_2.h2 3.2 Problema de conjunto
    
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img3.png', alt='')
      .col-lg-6
        .tarjeta.divformuazul.p-3
          .row.justify-content-center.align-items-center.mb-3
            .col-lg-12.p-3
              p Dado el conjunto A = {1, 2, 3, 4} y el conjunto B = {3, 4, 5, 6}, se debe encontrar:
              li.mb-3
                i
                | La intersección A ∩ B.
              li.mb-3
                i
                | La unión A ⋃ B.
              li
                i
                | La diferencia A − B.
    
    .titulo-decorativo.my-4(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/imgtitulo.svg")
      .cont-text 
        h3 Proceso de Solución
    
    .row.bg--gradientBlue.mb-4
      .col-10
        .row.justify-content-center.align-items-center.mb-3(style="margin-inline:3em;")
          .col-lg-8.mb-lg-0.mb-4.order-lg-1.order-2(data-aos="fade-right")
            .row.justify-content-center.align-items-center
              .col-lg-10
                ul.lista-ul
                  li(data-aos="fade-right")
                    i.fas.fa-angle-right(style="color:#6FD9FB")
                    |#[b Intersección:] A ∩ B incluye los elementos que están en ambos conjuntos.
                  .row.justify-content-center.align-items-center.mb-3
                    .col-lg-8
                      .tarjeta.p-1.divgeome
                        p.mb-0.text-center #[b A ∩ B = {3,4}]
                  li(data-aos="fade-right")
                    i.fas.fa-angle-right(style="color:#6FD9FB")
                    |#[b Unión:] A ⋃ B incluye todos los elementos que están en A o en B o en ambos.
                  .row.justify-content-center.align-items-center.mb-3
                    .col-lg-8
                      .tarjeta.p-1.divgeome
                        p.mb-0.text-center #[b A ⋃ B = {1, 2, 3, 4, 5, 6}]
                  li(data-aos="fade-right")
                    i.fas.fa-angle-right(style="color:#6FD9FB")
                    |#[b Diferencia:] A − B incluye los elementos que están en A pero no en B.
                  .row.justify-content-center.align-items-center.mb-3
                    .col-lg-8
                      .tarjeta.p-1.divgeome
                        p.mb-0.text-center #[b A – B = {1, 2}]
          .col-lg-4.col-8.mb-lg-0.mb-4.order-lg-1.order-1(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema3/img4.png', alt='Imagen decorativa')

    separador 

    .titulo-segundo.color-acento-contenido(data-aos="flip-up")
      #t_3_3.h2 3.3 Problema de razón trigonométrica
    
    .row.justify-content-center.align-items-center
      .col-lg-12(data-aos="fade-right")
        p Hallar las razones trigonométricas del ángulo θ en el siguiente triángulo:
    
    .titulo-sexto.color-acento-contenido.offset-1(data-aos="zoom-in")
      h5 Figura 3.
      span  #[i Ejemplo de triangulo rectángulo]

    .row.justify-content-center.mb-5
      .col-md-10.desktop(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img5.svg', alt='En la figura 3 se presenta un ejemplo de triangulo rectángulo, con el fin de determinar las razones trigonométricas.')
      .col-md-6.movil(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img5_1.svg', alt='En la figura 3 se presenta un ejemplo de triangulo rectángulo, con el fin de determinar las razones trigonométricas.')

    .titulo-decorativo.my-4(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/imgtitulo.svg")
      .cont-text 
        h3 Proceso de Solución
    
    .row.justify-content-center.align-items-center
      .col-lg-12(data-aos="fade-right")
        p Para encontrar las razones trigonométricas se aplica lo visto en la sección en trigonometría y número complejo, y se procede de la siguiente manera:

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-5.col-8.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img6.svg', alt='Imagen decorativa')
      .col-lg-5.col-8.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img7.svg', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-5.col-8.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img8.svg', alt='Imagen decorativa')
      .col-lg-5.col-8.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img9.svg', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-5.col-8.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img10.svg', alt='Imagen decorativa')
      .col-lg-5.col-8.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img11.svg', alt='Imagen decorativa')



    separador 

    .titulo-segundo.color-acento-contenido(data-aos="flip-up")
      #t_3_4.h2 3.4 Problema de ecuación trigonométrica
    
    .row.justify-content-center.align-items-center
      .col-lg-12(data-aos="fade-right")
        p Carlos sube por una rampa de 5 m hasta el tejado de su casa. Estando ahí, mide la visual entre su casa y la rampa, resultando ser de 60°. Calcular la altura de la casa y el ángulo que hay entre la rampa y el suelo.
    
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="zoom-in")
        figure.mb-3
          img(src='@/assets/curso/temas/tema3/img12.svg', alt='Imagen decorativa')
        h4 Paso 1
        p Carlos sube por una rampa de 5 m hasta el tejado de su casa.
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="zoom-in")
        figure.mb-3
          img(src='@/assets/curso/temas/tema3/img13.svg', alt='Imagen decorativa')
        h4 Paso 2
        p Estando ahí, mide la visual entre su casa y la rampa, resultando ser de 60°
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="zoom-in")
        figure.mb-3
          img(src='@/assets/curso/temas/tema3/img14.svg', alt='Imagen decorativa')
        h4 Paso 3
        p Calcular la altura de la casa y el ángulo que hay entre la rampa y el suelo
    
    .titulo-decorativo.my-4(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/imgtitulo.svg")
      .cont-text 
        h3 Proceso de Solución
    
    .row.justify-content-center.align-items-center
      .col-lg-12(data-aos="fade-right")
        p Para hallar la altura y el ángulo a la distancia dada, se aplica lo presentado en la sección en trigonometría y número complejo, primero se representan los datos, en un triángulo:
    
    .titulo-sexto.color-acento-contenido.offset-1(data-aos="zoom-in")
      h5 Figura 4.
      span  #[i Representación de los datos en un triangulo]

    .row.justify-content-center.mb-5
      .col-md-10.desktop(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img15.svg', alt='En la figura 4, se presenta un triángulo, con un ángulo de 90 y una hipotenusa de 5 centímetros.')
      .col-md-6.movil(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img15_1.svg', alt='En la figura 4, se presenta un triángulo, con un ángulo de 90 y una hipotenusa de 5 centímetros.')

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12(data-aos="fade-right")
        p Se nombra la altura de la casa h y β al ángulo que hay entre la rampa y el suelo. Los ángulos internos de todo triángulo es 1800. Ya con esta información, se obtiene la siguiente ecuación, 90° + 60° + β = 180° → β = 30°. Se calcula la altura, de la siguiente manera:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema3/img16.svg', alt='')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12(data-aos="fade-right")
        p Despejando h de la ecuación y se obtiene que la altura de la casa de Carlos es 2.5 m.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        .tarjeta.p-3.divformu
          p.mb-1.text-center #[b h=2.5 m]

    separador 

    .titulo-segundo.color-acento-contenido(data-aos="flip-up")
      #t_3_5.h2 3.5 Problema de número complejo
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12(data-aos="fade-right")
        p Encontrar el módulo y argumento del número complejo z = 3 + 4i.
    
    .titulo-decorativo.my-4(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/imgtitulo.svg")
      .cont-text 
        h3 Proceso de Solución
    
    .row.bg--gradientBlue.mb-4
      .col-10
        .row.justify-content-center.align-items-center.mb-3(style="margin-inline:3em;")
          .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema3/img17.svg', alt='Imagen decorativa')
          .col-lg-8.mb-lg-0.mb-4(data-aos="fade-right")
            .row.justify-content-center.align-items-center
              .col-lg-10
                ul.lista-ul
                  li(data-aos="fade-right")
                    i.fas.fa-angle-right(style="color:#6FD9FB")
                    | #[b a Cálculo del módulo:]
                  .row.justify-content-center.align-items-center.mb-3
                    .col-lg-8
                      figure
                        img(src='@/assets/curso/temas/tema3/img18.svg', alt='Imagen decorativa')
                  li(data-aos="fade-right")
                    i.fas.fa-angle-right(style="color:#6FD9FB")
                    | #[b b	Cálculo del argumento:]
                    li
                      i
                      | Argumento = tan^(-1) (4/3)
                    li
                      i
                      | Calculando el valor: argumento ≈ 53.13°
                  li(data-aos="fade-right")
                    i.fas.fa-angle-right(style="color:#6FD9FB")
                    |#[b c	Respuesta:] el módulo del número complejo z = 3 + 4i es 5 y su argumento es aproximadamente 53.13°.
                 
    separador 

    .titulo-segundo.color-acento-contenido(data-aos="flip-up")
      #t_3_6.h2 3.6 Problema de patrón lógico inductivo

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12(data-aos="fade-right")
        p Encontrar el siguiente número en la serie: 2, 6, 12, 20, 30, ...
    
    .titulo-decorativo.my-4(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/imgtitulo.svg")
      .cont-text 
        h3 Proceso de Solución

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/tema3/img19.png', alt='Imagen decorativa')
      .col-lg-6
         LineaTiempoD.color-acento-botones
          .row(numero="a" titulo="Identificación del patrón")
            .col-md-12.mb-4.mb-md-0
              p La diferencia entre números consecutivos aumenta en 2. A continuación, se calculan estas diferencias:
              li
                i
                | #[b 6 – 2 = 4]
              li
                i
                | #[b 12 – 6 = 6]
              li
                i
                | #[b 20 – 1 2= 8]
              li
                i
                | #[b 30 – 20 = 10]
              p Se evidencia que la diferencia entre cada número consecutivo sigue el patrón: 4, 6, 8, 10.
          .row(numero="b" titulo="Aplicación del patrón")
            .col-md-12.mb-4.mb-md-0
              p La siguiente diferencia debería ser #[b 12] (siguiendo el patrón en el que las diferencias aumentan en #[b 2]).
          .row(numero="c" titulo="Cálculo del siguiente número")
            .col-md-12.mb-4.mb-md-0
              p Sumando esta diferencia al último número de la serie: #[b 30 + 12 = 42]
          .row(numero="d" titulo="Respuesta")
            .col-md-12.mb-4.mb-md-0
              p El siguiente número en la serie es #[b 42].
        
</template>

<script>
export default {
  name: 'Tema3',
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
