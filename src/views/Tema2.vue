<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Fundamentos de matemáticas avanzadas
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right")
        p Los fundamentos de matemáticas avanzadas abarcan una variedad de conceptos y técnicas que son esenciales para el estudio y la aplicación de las matemáticas en niveles superiores. Estos fundamentos incluyen áreas como la lógica, la teoría de conjuntos, la trigonometría, los números complejos y el razonamiento inductivo. Cada una de estas áreas proporciona herramientas y métodos que son cruciales para resolver problemas complejos y para el desarrollo de nuevas teorías matemáticas.
    
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La lógica matemática se centra en el estudio de los principios del razonamiento válido y la estructura de los argumentos matemáticos. La teoría de conjuntos proporciona un marco para entender y manipular colecciones de objetos, lo cual es fundamental para casi todas las ramas de las matemáticas. La trigonometría estudia las relaciones entre los ángulos y los lados de los triángulos, y tiene aplicaciones en campos tan diversos como la física y la ingeniería. Los números complejos amplían el sistema de números reales para incluir soluciones a ecuaciones que no tienen soluciones reales, y son esenciales en muchas áreas de la ingeniería y la física. Finalmente, el razonamiento inductivo es un método de inferencia que permite generalizar a partir de casos específicos, y es una herramienta clave en la investigación científica y la formación de hipótesis.
    
    .row.justify-content-center.align-items-center.mb-5.mt-4
      .col-lg-12(data-aos="fade-right")
        p Estos fundamentos no solo son importantes para el desarrollo teórico de las matemáticas, sino que también tienen aplicaciones prácticas en diversas disciplinas, desde la ingeniería y la física hasta la economía y las ciencias sociales. El dominio de estos conceptos es esencial para cualquier persona que desee avanzar en el estudio de las matemáticas y sus aplicaciones.

    
    separador 

    .titulo-segundo.color-acento-contenido(data-aos="flip-up")
      #t_2_1.h2 2.1 Lógica
    
    .row.justify-content-center.align-items-center
      .col-lg-12(data-aos="fade-right")
        p La lógica es la ciencia que estudia el razonamiento y las proposiciones. En este apartado, se presentan las bases de las operaciones lógicas y las equivalencias, fundamentales para construir argumentos sólidos en matemáticas y otras disciplinas.

    .titulo-decorativo.my-4(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/imgtitulo.svg")
      .cont-text 
        h3 Proposiciones
    
    .row.justify-content-center.align-items-center
      .col-lg-12(data-aos="fade-right")
        p Una proposición es cualquier enunciado lógico al que se le puede asignar un valor de verdad, ya sea verdadero (V) o falso (F).

    .titulo-decorativo.my-4(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/imgtitulo.svg")
      .cont-text 
        h3 Operaciones lógicas

    .row.justify-content-center.align-items-center
      .col-lg-12(data-aos="fade-right")
        p Se exploran las principales operaciones lógicas, que incluyen otras operaciones realizadas con las proposiciones p y q, como la conjunción, la disyunción, el condicional y el bicondicional. Estas operaciones se muestran en cada tabla de verdad, que es una representación que permite determinar si una proposición compuesta es verdadera, falsa o variada. Para la construcción de una tabla de verdad de una proposición compuesta, primero se traduce en lenguaje matemático las situaciones iniciales dadas, como se presenta a continuación:

    .titulo-sexto.color-acento-contenido.offset-1(data-aos="zoom-in")
      h5 Figura 1.
      span  #[i  Tablas de verdad]

    .row.justify-content-center.mb-5
      .col-md-10.desktop(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img2.png', alt='En la figura 1 se presentan las tablas de verdad, que es un esquema que permite determinar si una proposición compuesta es verdadera, falsa o variada.')
      .col-md-6.movil(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img2_1.png', alt='En la figura 1 se presentan las tablas de verdad, que es un esquema que permite determinar si una proposición compuesta es verdadera, falsa o variada.')

    .bg--gradientBlue.justify-content-center.align-items-center.p-5
      .row
        .col-12
          .row.justify-content-center.align-items-center(style="margin-inline:3em;")
            .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/tema2/img3.png', alt='Imagen decorativa')
            .col-lg-8.mb-lg-0.mb-4(data-aos="fade-right")
              .row.justify-content-center.align-items-center
                .col-lg-12
                  p Dónde:
                  ul.lista-ul
                    li
                      i.fas.fa-angle-right(style="color:#6FD9FB")
                      | Negación: invierte el valor de verdad de una proposición.
                    li
                      i.fas.fa-angle-right(style="color:#6FD9FB")
                      | Conjunción: es verdadera solo si ambas proposiciones son verdaderas.
                    li
                      i.fas.fa-angle-right(style="color:#6FD9FB")
                      | Disyunción: es verdadera si al menos una de las proposiciones es verdadera.
                    li
                      i.fas.fa-angle-right(style="color:#6FD9FB")
                      | Condicional: es falsa solo cuando la primera proposición es verdadera y la segunda es falsa.
                    li
                      i.fas.fa-angle-right(style="color:#6FD9FB")
                      | Bicondicional: es verdadera si ambas proposiciones tienen el mismo valor de verdad.
    .titulo-decorativo.my-4(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/imgtitulo.svg")
      .cont-text 
        h3 Equivalencias lógicas
    .row.justify-content-center.align-items-center
      .col-lg-12(data-aos="fade-right")
        p Se estudian las principales equivalencias lógicas, determinando cuándo dos proposiciones son equivalentes si comparten la misma tabla de verdad.
    separador 

    .titulo-segundo.color-acento-contenido(data-aos="flip-up")
      #t_2_2.h2 2.2 Conjuntos
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img4.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center
      .col-lg-12(data-aos="fade-right")
        p Los conjuntos permiten agrupar elementos con características comunes, proporcionando una base sólida para el análisis matemático. A continuación, se presentan los conceptos básicos y las operaciones entre conjuntos.
    
    
    
    .titulo-decorativo.my-4(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/imgtitulo.svg")
      .cont-text 
        h3 Concepto de conjunto
    .row.justify-content-center.align-items-center
      .col-lg-12(data-aos="fade-right")
        p Un conjunto es una colección de elementos con una característica común.

    .titulo-decorativo.my-4(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/imgtitulo.svg")
      .cont-text 
        h3 Operaciones entre conjuntos
    
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in")
      .tarjeta.bg-img-tarj.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema2/img5.svg' alt='AvatarTop')
        h4.text-center Conjunto universal
        p.text-center Conjunto de referencia que incluye todos los objetos de estudio.
      .tarjeta.bg-img-tarj.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema2/img6.svg' alt='AvatarTop')
        h4.text-center Unión (A ∪ B)
        p.text-center Conjunto que contiene los elementos presentes en al menos uno de los conjuntos.
      .tarjeta.bg-img-tarj.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema2/img7.svg' alt='AvatarTop')
        h4.text-center Intersección (A ∩ B)
        p.text-center Conjunto que contiene los elementos comunes a ambos conjuntos.
      .tarjeta.bg-img-tarj.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema2/img8.svg' alt='AvatarTop')
        h4.text-center Diferencia (A - B)
        p.text-center Conjunto que contiene los elementos de A que no pertenecen a B.
      .tarjeta.bg-img-tarj.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema2/img9.svg' alt='AvatarTop')
        h4.text-center Complemento (Ac)
        p.text-center Conjunto que contiene los elementos que no pertenecen a A.
      .tarjeta.bg-img-tarj.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema2/img10.svg' alt='AvatarTop')
        h4.text-center Diferencia simétrica (A Δ B)
        p.text-center Conjunto que contiene los elementos que pertenecen a A o a B, pero no a ambos.
      .tarjeta.bg-img-tarj.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema2/img11.svg' alt='AvatarTop')
        h4.text-center Producto cartesiano (A × B)
        p.text-center Conjunto de pares ordenados formados por un elemento de A y un elemento de B.


    separador 

    .titulo-segundo.color-acento-contenido(data-aos="flip-up")
      #t_2_3.h2 2.3 Trigonometría

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img12.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center
      .col-lg-12(data-aos="fade-right")
        p La trigonometría estudia las relaciones entre los lados y ángulos de los triángulos, con aplicaciones en problemas de cálculo de alturas, distancias y ángulos. Este apartado explora las principales razones trigonométricas y sus aplicaciones prácticas.
    
    .titulo-decorativo.my-4(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/imgtitulo.svg")
      .cont-text 
        h3 Triángulo rectángulo

    .row.justify-content-center.align-items-center
      .col-lg-12(data-aos="fade-right")
        p Es una figura geométrica de tres lados, caracterizada por tener un ángulo interno de 90 grados o recto, y dos ángulos agudos (θ y β). El lado más largo del triángulo se denomina hipotenusa (c), mientras que los otros dos lados se conocen como catetos (a y b).
    
    .titulo-sexto.color-acento-contenido.offset-1(data-aos="zoom-in")
      h5 Figura 2.
      span  #[i  Triángulo rectángulo]

    .row.justify-content-center.mb-5
      .col-md-10.desktop(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img13.svg', alt='En la figura 2 se presenta un triángulo rectángulo, que es una figura geométrica de tres lados, con un ángulo interno de 90 grados o recto y dos agudos.')
      .col-md-6.movil(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img13_1.svg', alt='En la figura 2 se presenta un triángulo rectángulo, que es una figura geométrica de tres lados, con un ángulo interno de 90 grados o recto y dos agudos.')


    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12(data-aos="fade-right")
        p En el triángulo rectángulo presentado en la Figura 2, se establecen relaciones que facilitan la determinación de las principales razones trigonométricas. A continuación, se presentan las relaciones trigonométricas fundamentales:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right")
        listul.lista-ul
          li 
            | #[b Razones trigonométricas]
        p Tales como el seno, coseno y tangente, son relaciones entre los lados del triángulo rectángulo que se utilizan para resolver problemas de cálculo de alturas, distancias y ángulos. Las funciones trigonométricas básicas y sus correspondientes inversas son:
                
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-5.col-md-10.mb-lg-0.mb-4
        .tarjeta.p-3.divformu
          <div class="eq-c">
            <span>sin &#952; =</span>
            <div class="fraction">
              <span class="fup">Cateto horizontal</span>
              <span class="bar">/</span>
              <span class="fdn">Hipotenusa</span>
            </div>
            <span>=</span>
            <div class="fraction">
              <span class="fup">a</span>
              <span class="bar">/</span>
              <span class="fdn">c</span>
            </div>
          </div>
      .col-lg-5.col-md-10.mb-lg-0.mb-4
        .tarjeta.p-3.divformu
          <div class="eq-c">
            <span>cos &#952; =</span>
            <div class="fraction">
              <span class="fup">Cateto vertical</span>
              <span class="bar">/</span>
              <span class="fdn">Hipotenusa</span>
            </div>
            <span>=</span>
            <div class="fraction">
              <span class="fup">a</span>
              <span class="bar">/</span>
              <span class="fdn">c</span>
            </div>
          </div>
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-5.col-md-10.mb-lg-0.mb-4
        .tarjeta.p-3.divformu
          <div class="eq-c">
            <span>tan &#952; =</span>
            <div class="fraction">
              <span class="fup">Cateto horizontal</span>
              <span class="bar">/</span>
              <span class="fdn">Cateto vertical</span>
            </div>
            <span>=</span>
            <div class="fraction">
              <span class="fup">a</span>
              <span class="bar">/</span>
              <span class="fdn">c</span>
            </div>
          </div>
      .col-lg-5.col-md-10.mb-lg-0.mb-4
        .tarjeta.p-3.divformu
          <div class="eq-c">
            <span>csc &#952; =</span>
            <div class="fraction">
              <span class="fup">Hipotenusa</span>
              <span class="bar">/</span>
              <span class="fdn">Cateto horizontal</span>
            </div>
            <span>=</span>
            <div class="fraction">
              <span class="fup">c</span>
              <span class="bar">/</span>
              <span class="fdn">b</span>
            </div>
          </div>
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-5.col-md-10.mb-lg-0.mb-4
        .tarjeta.p-3.divformu
          <div class="eq-c">
            <span>sec &#952; =</span>
            <div class="fraction">
              <span class="fup">Hipotenusa</span>
              <span class="bar">/</span>
              <span class="fdn">Cateto vertical</span>
            </div>
            <span>=</span>
            <div class="fraction">
              <span class="fup">c</span>
              <span class="bar">/</span>
              <span class="fdn">a</span>
            </div>
          </div>
      .col-lg-5.col-md-10.mb-lg-0.mb-4
        .tarjeta.p-3.divformu
          <div class="eq-c">
            <span>sin &#952; =</span>
            <div class="fraction">
              <span class="fup">Cateto vertical</span>
              <span class="bar">/</span>
              <span class="fdn">Cateto vertical</span>
            </div>
            <span>=</span>
            <div class="fraction">
              <span class="fup">a</span>
              <span class="bar">/</span>
              <span class="fdn">b</span>
            </div>
          </div>

    separador 

    .titulo-segundo.color-acento-contenido(data-aos="flip-up")
      #t_2_4.h2 2.4 Números complejos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img20.png', alt='Imagen decorativa')
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12(data-aos="fade-right")
        p Un número complejo se representa como la suma de un número real y un número imaginario, el cual se denota con la letra i (donde i2 = -1). Los números complejos se expresan en la forma a + bi, donde a y b son números reales.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12(data-aos="fade-right")
        p Las principales operaciones que se realizan con números complejos incluyen la suma, la resta, la multiplicación y la división. A continuación, se detallan cada una de estas operaciones:
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12(data-aos="zoom-in")
        TabsA.color-acento-botones
          .tarjeta.color-secundario.p-4(titulo="Suma")            
            .row.justify-content-center.align-items-center
              .col-lg-12
                p La suma de números complejos se realiza sumando las partes reales e imaginarias por separado:
                p 
                .row.justify-content-center.align-items-center.mb-3
                  .col-lg-6
                    .tarjeta.p-3.divgeome
                      h4.mb-0.text-center #[b (a + bi) + (c + di) = (a + c) + (b + d)i]
              
          .tarjeta.color-secundario.p-4(titulo="Resta")            
            .row.justify-content-center.align-items-center
              .col-lg-12
                p La resta de números complejos también se lleva a cabo restando las partes reales e imaginarias por separado:
                p 
                .row.justify-content-center.align-items-center.mb-3
                  .col-lg-6
                    .tarjeta.p-3.divgeome
                      h4.mb-0.text-center #[b (a + bi) − (c + di) = (a − c) + (b−d)i]
              
            
          .tarjeta.color-secundario.p-4(titulo="Multiplicación")           
            .row.justify-content-center.align-items-center
              .col-lg-12
                p La multiplicación de números complejos se realiza aplicando la propiedad distributiva y recordando que i2 = -1:
                p 
                .row.justify-content-center.align-items-center.mb-3
                  .col-lg-6
                    .tarjeta.p-3.divgeome
                      h4.mb-0.text-center #[b (a + bi) ⋅ (c + di) = (ac − bd) + (ad + bc)i]
            
          .tarjeta.color-secundario.p-4(titulo="División")           
            .row.justify-content-center.align-items-center
              .col-lg-12
                p La división de números complejos se efectúa multiplicando tanto el numerador como el denominador por el conjugado del denominador. Esto se explica con mayor detalle en la siguiente ecuación:
                p 
                .row.justify-content-center.align-items-center.mb-3
                  .col-lg-8
                    .tarjeta.p-3.divgeome
                      <div class="eq-c">
                        <div class="fraction">
                          <span class="fup"style="color:#000000">a + bi</span>
                          <span class="bar">/</span>
                          <span class="fdn"style="color:#000000">c + di</span>
                        </div>
                        <span style="color:#000000">=</span>
                        <div class="fraction">
                          <span class="fup"style="color:#000000">(a + bi)(c - di)</span>
                          <span class="bar">/</span>
                          <span class="fdn"style="color:#000000">(c + di)(c - di)</span>
                        </div>
                        <span style="color:#000000">=</span>
                        <div class="fraction">
                          <span class="fup"style="color:#000000">(ac + bd)(bc - ad)</span>
                          <span class="bar">/</span>
                          <span class="fdn"style="color:#000000">c<sup>2</sup> + d<sup>2</sup></span>
                        </div>
                        <span style="color:#000000">=</span>
                        <div class="fraction">
                          <span class="fup"style="color:#000000">ac + bd</span>
                          <span class="bar">/</span>
                          <span class="fdn"style="color:#000000">c<sup>2</sup> + d<sup>2</sup></span>
                        </div>
                        <span style="color:#000000">+</span>
                        <div class="fraction">
                          <span class="fup"style="color:#000000">bc</span>
                          <span class="bar">/</span>
                          <span class="fdn"style="color:#000000">c<sup>2</sup></span>
                        </div>
                      </div>

    separador 

    .titulo-segundo.color-acento-contenido(data-aos="flip-up")
      #t_2_5.h2 2.5 Patrón lógico inductivo
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12(data-aos="fade-right")
        p El patrón lógico inductivo se refiere a un proceso de razonamiento en el que se generalizan conclusiones a partir de la observación de casos específicos. En matemáticas y lógica, este tipo de razonamiento es fundamental para identificar secuencias, regularidades y estructuras subyacentes en conjuntos de datos o expresiones.

    .titulo-decorativo.my-4(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/imgtitulo.svg")
      .cont-text 
        h3 Aplicación en matemáticas
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right")
        p El razonamiento inductivo se utiliza frecuentemente para formular conjeturas y descubrir patrones en series numéricas, progresiones, y otros contextos matemáticos. A continuación, se describen algunos ejemplos de cómo se emplea el patrón lógico inductivo:

    .tarjeta--container.row.mb-5
      .col-lg.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/img22.svg', alt='Imagen Decorativa')
        h4.text-center Series numéricas
        p Identificación de la regla que rige una secuencia de números basada en los primeros términos observados. Ejemplo: En la secuencia 2, 4, 8, 16, 32, el patrón sugiere que cada término es el doble del anterior, lo que permite generalizar que el siguiente término será 64.
      .col-lg.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/img23.svg', alt='Imagen Decorativa')
        h4.text-center Progresiones aritméticas y geométricas
        p Determinación de la fórmula general de una progresión a partir de la observación de sus primeros elementos. Ejemplo: En la progresión aritmética 3, 7, 11, 15, se observa que cada término aumenta en 4 unidades. Esto indica que la fórmula del n-ésimo término es an = 3 + (n – 1) × 4.
      .col-lg.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/img24.svg', alt='Imagen Decorativa')
        h4.text-center(style="color:white;") Reconocimiento de patrones en matrices y conjuntos
        p(style="color:white;") Identificación de regularidades en arreglos de datos que permitan hacer predicciones sobre elementos faltantes o futuros.


    .titulo-decorativo.my-4(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/imgtitulo.svg")
      .cont-text 
        h3 Ventajas del razonamiento inductivo
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right")
        p Es útil para descubrir nuevas leyes matemáticas y para formular hipótesis en situaciones donde no se dispone de una fórmula explícita. Aunque sus conclusiones no siempre son infalibles, el razonamiento inductivo es esencial en la exploración matemática y la formación de teorías.
        
    .titulo-decorativo.my-4(data-aos="fade-up")
      .cont-figura
        img(src="@/assets/curso/temas/imgtitulo.svg")
      .cont-text 
        h3 Limitaciones
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right")
        p El principal desafío del razonamiento inductivo es que, a diferencia del razonamiento deductivo, no garantiza conclusiones absolutamente ciertas. Las generalizaciones realizadas a partir de un número finito de casos pueden no aplicarse a todos los casos posibles, lo que requiere una verificación adicional o la formulación de conjeturas que luego deben ser probadas o refutadas.

</template>

<script>
export default {
  name: 'Tema2',
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
