(function(e){function a(a){for(var n,t,c=a[0],s=a[1],u=a[2],d=0,l=[];d<c.length;d++)t=c[d],Object.prototype.hasOwnProperty.call(i,t)&&i[t]&&l.push(i[t][0]),i[t]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);m&&m(a);while(l.length)l.shift()();return r.push.apply(r,u||[]),o()}function o(){for(var e,a=0;a<r.length;a++){for(var o=r[a],n=!0,t=1;t<o.length;t++){var c=o[t];0!==i[c]&&(n=!1)}n&&(r.splice(a--,1),e=s(s.s=o[0]))}return e}var n={},t={app:0},i={app:0},r=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5"}[e]||e)+"."+{actividad:"5459465e","chunk-0206bfa0":"db848401","chunk-110f1f0b":"61a4ed11","chunk-13a6037e":"0dbe5c65","chunk-179248a2":"d6cf2861","chunk-18f95272":"9d8cf629","chunk-2a9fce91":"0ecc359b","chunk-2c06842c":"6cae5bfb","chunk-2d0c5615":"75151c9d","chunk-2d0e96ec":"a0992f3a","chunk-2d208d90":"7ca99724","chunk-2d21d0e2":"662065e2","chunk-2d22c123":"3ab92924","chunk-2e80bb9a":"84e37d65","chunk-319206de":"0748c1e6","chunk-36769079":"db07006a","chunk-4cdd78c0":"0277c010","chunk-515a8379":"5df7d778","chunk-53ccb27e":"cc458c56","chunk-55d286b8":"f370762b","chunk-59974754":"12fa6331","chunk-5d1ce150":"6ee84259","chunk-60cbc06b":"c331d9c0","chunk-623f2040":"dfc3159f","chunk-659152b8":"592218b5","chunk-6a43ec24":"c4a1c2ef","chunk-6e1e538a":"0a30a368","chunk-6e613899":"042dd297","chunk-766a929b":"cee86727","chunk-7794bb60":"280b6865","chunk-c796899c":"d7fc5ff3","chunk-e8a7823a":"8074120d","chunk-fde47172":"53c5fbd8",comple:"fb425b48",creditos:"2d37fb69",glosario:"99243f29",intro:"ae6553ab",referencias:"b7021c14",sintesis:"116d1895",tema1:"2d56c88c",tema2:"1f730134",tema3:"a1df6e73",tema4:"a939e307",tema5:"c7ef73fd"}[e]+".js"}function s(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(e){var a=[],o={"chunk-110f1f0b":1,"chunk-179248a2":1,"chunk-2a9fce91":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-5d1ce150":1,"chunk-60cbc06b":1,"chunk-623f2040":1,"chunk-6a43ec24":1,"chunk-6e1e538a":1,"chunk-6e613899":1,"chunk-766a929b":1,"chunk-7794bb60":1,comple:1,creditos:1,glosario:1,referencias:1};t[e]?a.push(t[e]):0!==t[e]&&o[e]&&a.push(t[e]=new Promise((function(a,o){for(var n="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-110f1f0b":"52141945","chunk-13a6037e":"31d6cfe0","chunk-179248a2":"52141945","chunk-18f95272":"31d6cfe0","chunk-2a9fce91":"52141945","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-36769079":"31d6cfe0","chunk-4cdd78c0":"31d6cfe0","chunk-515a8379":"da194529","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"246be43d","chunk-5d1ce150":"52141945","chunk-60cbc06b":"09438581","chunk-623f2040":"52141945","chunk-659152b8":"31d6cfe0","chunk-6a43ec24":"52141945","chunk-6e1e538a":"3ba0a060","chunk-6e613899":"52141945","chunk-766a929b":"7eb4de56","chunk-7794bb60":"52141945","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-fde47172":"31d6cfe0",comple:"42ceea7e",creditos:"0fb9ba6f",glosario:"e6608166",intro:"31d6cfe0",referencias:"092f24f9",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0",tema5:"31d6cfe0"}[e]+".css",i=s.p+n,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var u=r[c],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===n||d===i))return a()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){u=l[c],d=u.getAttribute("data-href");if(d===n||d===i)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var n=a&&a.target&&a.target.src||i,r=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete t[e],m.parentNode.removeChild(m),o(r)},m.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){t[e]=0})));var n=i[e];if(0!==n)if(n)a.push(n[2]);else{var r=new Promise((function(a,o){n=i[e]=[a,o]}));a.push(n[2]=r);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(e);var l=new Error;u=function(a){d.onerror=d.onload=null,clearTimeout(m);var o=i[e];if(0!==o){if(o){var n=a&&("load"===a.type?"missing":a.type),t=a&&a.target&&a.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+t+")",l.name="ChunkLoadError",l.type=n,l.request=t,o[1](l)}i[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(a)},s.m=e,s.c=n,s.d=function(e,a,o){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)s.d(o,n,function(a){return e[a]}.bind(null,n));return o},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=a,u=u.slice();for(var l=0;l<u.length;l++)a(u[l]);var m=d;r.push([0,"chunk-vendors"]),o()})({0:function(e,a,o){e.exports=o("56d7")},"2cad":function(e,a,o){e.exports=o.p+"img/banner-principal-decorativo-1.e6ae4b4f.png"},"52e5":function(e,a,o){e.exports=o.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,o){"use strict";o.r(a);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("68f3"),t=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"app",attrs:{id:"app"}},[o("Header"),o("div",{staticClass:"contenedor-principal"},[o("AsideMenu"),o("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[o("router-view")],1)],1),o("BarraAvance"),o("Accesibilidad")],1)},i=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,s=o("2877"),u=Object(s["a"])(c,t,i,!1,null,null,null),d=u.exports,l=(o("d3b7"),o("3ca3"),o("ddb0"),o("b0c0"),o("2b0e")),m=o("8c4f"),p=o("ae58"),f=o("7e58");l["a"].use(m["a"]);var h=new m["a"]({routes:[{path:"/",name:"inicio",component:p["a"]},{path:"/introduccion",name:"introduccion",component:function(){return o.e("intro").then(o.bind(null,"5167"))}},{path:"/curso",name:"curso",component:f["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return o.e("tema1").then(o.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return o.e("tema2").then(o.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return o.e("tema3").then(o.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return o.e("tema4").then(o.bind(null,"3eb5"))}},{path:"tema5",name:"tema5",component:function(){return o.e("tema5").then(o.bind(null,"5029"))}}]},{path:"/actividad",name:"actividad",component:function(){return o.e("actividad").then(o.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return o.e("glosario").then(o.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return o.e("comple").then(o.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return o.e("referencias").then(o.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return o.e("sintesis").then(o.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return o.e("creditos").then(o.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var o={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?o:new Promise((function(e){setTimeout((function(){e(o)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),g=h,b=o("1c2c"),A=(o("a3a0"),{global:{componenteFormativo:"Pensamiento matemático, espacial y estadístico",descripcionCurso:"Este componente formativo aborda las competencias matemáticas esenciales, la lógica y la trigonometría, aplicando estos conceptos a problemas prácticos. Además, desarrolla el pensamiento lógico, numérico y espacial, y explora técnicas estadísticas clave. Todo ello facilita la comprensión y aplicación efectiva de principios matemáticos en contextos reales.",imagenBannerPrincipal:o("74b5"),fondoBannerPrincipal:o("ce7c"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:o("2cad")},{clases:["banner-principal-decorativo-2"],imagen:o("f533")},{clases:["banner-principal-decorativo-3"],imagen:o("5b70")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",numero:"1",titulo:"Competencias matemáticas y modelación",desarrolloContenidos:!0,subMenu:[{numero:"1.1",titulo:"Competencias matemáticas",hash:"t_1_1"},{numero:"1.2",titulo:"Modelación en matemáticas",hash:"t_1_2"}]},{nombreRuta:"tema2",numero:"2",titulo:"Fundamentos de matemáticas avanzadas",desarrolloContenidos:!0,subMenu:[{numero:"2.1",titulo:"Lógica",hash:"t_2_1"},{numero:"2.2",titulo:"Conjuntos",hash:"t_2_2"},{numero:"2.3",titulo:"Trigonometría",hash:"t_2_3"},{numero:"2.4",titulo:"Números complejos",hash:"t_2_4"},{numero:"2.5",titulo:"Patrón lógico inductivo",hash:"t_2_5"}]},{nombreRuta:"tema3",numero:"3",titulo:"Aplicaciones prácticas en lógica y trigonometría",desarrolloContenidos:!0,subMenu:[{numero:"3.1",titulo:"Problema de lógica",hash:"t_3_1"},{numero:"3.2",titulo:"Problema de conjunto",hash:"t_3_2"},{numero:"3.3",titulo:"Problema de razón trigonométrica",hash:"t_3_3"},{numero:"3.4",titulo:"Problema de ecuación trigonométrica",hash:"t_3_4"},{numero:"3.5",titulo:"Problema de número complejo",hash:"t_3_5"},{numero:"3.6",titulo:"Problema de patrón lógico inductivo",hash:"t_3_6"}]},{nombreRuta:"tema4",numero:"4",titulo:"Desarrollo del pensamiento lógico, numérico y espacial",desarrolloContenidos:!0,subMenu:[{numero:"4.1",titulo:"Pensamiento lógico",hash:"t_4_1"},{numero:"4.2",titulo:"Razonamiento numérico",hash:"t_4_2"},{numero:"4.3",titulo:"Razonamiento espacial",hash:"t_4_3"}]},{nombreRuta:"tema5",numero:"5",titulo:"Técnicas estadísticas de conteo y muestreo",desarrolloContenidos:!0,subMenu:[{numero:"5.1",titulo:"Técnicas de conteo y muestreo",hash:"t_5_1"},{numero:"5.2",titulo:"Estimador puntual y de intervalos",hash:"t_5_2"},{numero:"5.3",titulo:"Variables cuantitativas",hash:"t_5_3"}]}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-file-pdf",titulo:"Descargar PDF",download:"downloads/CFA_02_22310162_DU.zip"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"Fundamentos de matemáticas avanzadas",referencia:"Bloque 10 Unimagdalena. (2022). Lo que debes saber del módulo de razonamiento cuantitativo. Saber Pro se acerca ¡prepárate!",tipo:"Página web",link:"https://bloque10.unimagdalena.edu.co/lo-que-debes-saber-del-modulo-de-razonamiento-cuantitativo-saber-pro-se-acerca-preparate/"},{tema:"Fundamentos de matemáticas avanzadas",referencia:"Ministerio de Educación Icfes. (2015). Módulo de razonamiento cuantitativo Saber Pro 2015-1.",tipo:"PDF",descarga:"/downloads/Modulo_de_Razonamiento_cuantitativo_Saber_Pro_2015-1.pdf"},{tema:"Fundamentos de matemáticas avanzadas",referencia:"Ministerio de Educación Icfes. (2015). Módulo de razonamiento cuantitativo Saber Pro 2015-2.",tipo:"PDF",descarga:"/downloads/Modulo_de_Razonamiento_cuantitativo_Saber_Pro_2015-2.pdf"},{tema:"Aplicaciones prácticas en lógica y trigonometría",referencia:"Ministerio de Educación Icfes. (2015). Banco de preguntas de matemáticas.",tipo:"PDF",descarga:"/downloads/Banco_de_preguntas_de_matematicas.pdf"}],glosario:[{termino:"Ángulo",significado:"figura geométrica formada por dos rectas o dos planos que se cortan respectivamente en una superficie o en el espacio."},{termino:"Contexto",significado:"entorno físico o de situación político histórico cultural o de cualquier otra índole en el que se considera un hecho."},{termino:"Ecuación",significado:"igualdad que contiene una o más incógnitas."},{termino:"Función",significado:"relación entre dos conjuntos que asigna a cada elemento del primero un elemento del segundo o ninguno."},{termino:"Inductivo",significado:"extraer a partir de determinadas observaciones o experiencias particulares el principio general implícito en ellas."},{termino:"Intervalo",significado:"conjunto de los valores que toma una magnitud entre dos límites dados."},{termino:"Patrón",significado:"modelo que sirve de muestra para sacar otra cosa igual."},{termino:"Proposición",significado:"enunciación de una verdad demostrada o que se trata de demostrar."},{termino:"Temporal",significado:"que pasa con el tiempo que no es eterno."},{termino:"Trigonometría",significado:"estudio de las relaciones numéricas entre los elementos que forman los triángulos planos y esféricos."},{termino:"Permutación",significado:"cada una de las ordenaciones posibles de los elementos de un conjunto finito."}],referencias:[{referencia:"Canal Díaz N. (2006). Técnicas de muestreo: Sesgos más frecuentes.",link:"http://www.revistaseden.org/files/9-CAP%209.pdf"},{referencia:"Cobo B. & Batanero C. (2004). Razonamiento numérico en problemas promedios.",link:""},{referencia:"Corporación Educacional Colegio “Sao Paulo”. (n.d.). Módulo de autoaprendizaje Nº4. Tema: Tablas de verdad.",link:"https://colegiosaopaulo.cl/wp-content/uploads/2021/03/Ma4_Pensamientocomputacionalyprogramacion.pdf"},{referencia:"Estimación puntual y estimación por intervalos de confianza. (n.d.). Universitat Oberta de Catalunya.",link:""},{referencia:"Números complejos y trigonometría. (n.d.). Universidad de Puerto Rico.",link:""},{referencia:"Teoría de conjuntos. (n.d.). Wikipedia.",link:"https://es.wikipedia.org/wiki/Teor%C3%ADa_de_conjuntos"},{referencia:"UNID. (n.d.). Estadística para la toma de decisiones. Universidad Interamericana para el Desarrollo.",link:""},{referencia:"Vasco U. C. E. (2010). El pensamiento variacional y la modelación matemática.",link:""}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Responsable del equipo",centro:"Dirección General"},{nombre:"Liliana Victoria Morales Gualdrón",cargo:"Responsable de línea de producción",centro:"Centro de Comercio y Servicios - Regional Tolima"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Hugo García Calderón",cargo:"Experto temático",centro:"Centro de Diseño Tecnológico Industrial - Regional Valle"},{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Claudia Milena Hernández Naranjo",cargo:"Asesor pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Viviana Herrera Quiñonez",cargo:"Evaluador instruccional",centro:"Centro de Comercio y Servicios - Regional Tolima"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Jose Yobani Penagos Mora",cargo:"Diseñador web",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Oscar Ivan Uribe Ortiz",cargo:"Diseñador web",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Veimar Celis Melendez",cargo:"Desarrollador <em>Full stack</em>",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Diego Fernando Velasco Güiza",cargo:"Desarrollador <em>Full stack</em>",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Ernesto Navarro Jaimes",cargo:"Animador y productor audiovisual",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Gilberto Junior Rodríguez Rodríguez",cargo:"Animador y productor audiovisual",centro:"Centro de Comercio y Servicios - Regional Tolima"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Jorge Eduardo Rueda Peña",cargo:"Evaluador para contenidos inclusivos y accesibles",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Jorge Bustos Gómez",cargo:"Validador y vinculador de recursos educativos digitales",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});n["a"].prototype.$config=A;var v=o("9224");n["a"].prototype.$package=v,new n["a"]({router:g,store:b["a"],render:function(e){return e(d)}}).$mount("#app")},"5b70":function(e,a){e.exports="data:image/png;base64,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"},"74b5":function(e,a,o){e.exports=o.p+"img/banner-princiapal.d27a6eb8.png"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.2","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.2","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},a00a:function(e,a,o){e.exports=o.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,a,o){},ce7c:function(e,a,o){e.exports=o.p+"img/fondo-banner-principal.b7d9746f.png"},f533:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAABMCAYAAAAFpxWvAAAABHNCSVQICAgIfAhkiAAABSBJREFUaEPVmj1vE0EQhnFHB/RIXH4AIukp7JaCj44Op4MKkCigilNBB1SUOAUSHaSAlusoKEhAosX8AkKHRBHex5oLh3N3O7t7RmallZ272dlnZ2ZnP5zBiYZyeHg41eOvqk8Hg8FBk0zXM7Uv9P606hXVddW70jPz6Bm0AE30fMve7emzVN2RUr43FoO4oZdXVc9YGwZzVe0AdJU2oLFa31bdVuU7I0X5WMp3K82CYPQVxBd9/2ByZQUvme/6DqCrtAExyldSNJBCTE8FbKh6zjoFkPal6rTNJWp/oHe0d5U2IDp+pzqSMjr8q6gT3s88cSHZj5LbcNHYCI/JWocArXk67epMuh5Jx/1VAnotIELAVRpdRkuN7FAf16TstUtTi1AvMVQD2hTQNBMof5YZEDkHc08ygbC0Oxa7XMbs2hPQnVQgSxkM7LL0fPLoCQGdkCKmeFIxoFdqvN2UPpqULhuIwTDDnnjTRwiIJSA5hiyfAUQsEgLBEgIqYhbGxd5swX2i55NqbQsRdQFhmRtStBZS0vbeYohp39rPYtsuoELCuIzPpFJbgs5Ij2tf1UkuhV97sNAtjeZ9HzHEliHK3E1m1KCe6/m+gIilYAlZKCrLtgChgzxETAaLB2jkNXcLUKnnbOCmQRoJ/AsgQAACLFg8QJwYXP7vsBB78VmQxmEhFkZGlwvEyaOXaQ+IO+23WIhBDfsCwv8kR1dAtgA9UPuHHnchE4qhiWROZ+6J7sS4PATE5gwgwJKKEiOrPRu9XoJ6KGXrMSNcpBZQVByGLATQloBGSeZRIwH1cwwCwM7uKCwygMZqi478aW9QzDIslVQ0qEtq/9bbOLhxsgOjez/TEEMrZ6HrstDLPi3ETdqmd3FssBBpwxU/tPW4rJQcm3Q+o4tczsI69Tb0AHHZQGAnLbCcPLxJMcZCyeezZQBNRE62dt/x1N1jRyGO5K448rgMILYPSbkIIC+M12XkkcdS6r5J9QZwk5zHQriKLcTKWAgQroiTLLQMlxUC4gQbtGaOq6q2rk5y1jO15aKd8cw8wDFAo5Rs3XseYlRSyuhYAkrPKHNkvBYCJHk9iwH8r4G4uMy61fdYymshlg+OMisFxIq/MkEd3NPYjSsrOjdv1FM1F/3Qd97x62O9MHuL2oMXc5dJGSdUFPASIQrf68KL77hE4Bm3tHRGvaC6b8/rQN/0DEh080myrArv+Bvos/WfMKv9Dg0odFApqMCAqJ4faWzKwnWLdWVpO/t9lLINye25gro2ml6/2uYNmF3B4KU/m/zYFN8HmfoEhnVuvdJ3ZKHYbUIukPp7Jh03VTliTY8B5XYQ096uaIBg43cE85fL6grZMkiQ6O+91OIGy5SLHTQG9TLjyVIMp5hx02jbgOZTP+a04DGluYo1sWiTD11YEf38B4PrTNUFZa4iXgA65ipXUJuSoYRZx7KgbIpvhxZoV2KUsvNS9NnjliYZy8ZYhQMn2b61eIGIKZYW99Vc1aMtISRA9uSdMPO49Y7aTg9PJc/e2uU+czk/k+8s5pukoF5spA7GesZZ3XU1I3mCmNlKO1dxW6jmApT/Un3TZSnBXJTMPclE3ZpEAwFmluIX61HTsC2IAXf/A0GlJwnIoOZuq7YNNQsyAYgb/sMveg+eDGRQzJrvqqxLMwviif5maRi6gmZBKBeITF4CoFpYZaPFD3azfw5kVsJFU+sci2Udl7IsVLeA3EW88C+C4xTLVG36BDppQf4zB+g3W/GklUnkx4gAAAAASUVORK5CYII="}});
//# sourceMappingURL=app.635d0154.js.map