const CreateDropDownQuestion = (TextoPregunta, respuestaText1, respuestaText2 , respuestaText3, respuestaText4, respuestaText5, idRespuesta1, idRespuesta2,idRespuesta3,idRespuesta4,idRespuesta5) => {

  let ContenerdorDePreguntas = document.getElementById("preguntas");

  var pregunta = document.createElement("main");
  var divPregunta = document.createElement("div");
  var parrafoPregunta = document.createElement("p");
  parrafoPregunta.innerHTML = TextoPregunta;

  pregunta.className = "container";
  divPregunta.className = "jumbotron colorTwo align-middle shadow p-3 mb-5";
  parrafoPregunta.className = "text-white d-flex justify-content-center ";

  pregunta.appendChild(divPregunta);
  divPregunta.appendChild(parrafoPregunta);
  ContenerdorDePreguntas.appendChild(pregunta);

for (var i = 0; i < 5; i++) {

  var divrespuesta = document.createElement("div");
  var div2respuesta = document.createElement("div");
  var selectorRespuesta = document.createElement("select");
  var respuesta = document.createElement("textarea");

  divrespuesta.className = "input-group w-100 ";
  div2respuesta.className = "input-group-prepend";
  selectorRespuesta.className = "btn btn-secondary dropdown-toggle bg-white text-dark";
  respuesta.type = "text";
  respuesta.className = "form-control bg-white text-dark";
  respuesta.disabled = true;

  switch (i) {
    case 0:
      selectorRespuesta.id = idRespuesta1;
      respuesta.value = respuestaText1;
      break;
    case 1:
      selectorRespuesta.id = idRespuesta2;
      respuesta.value = respuestaText2;
      break;
    case 2:
      selectorRespuesta.id = idRespuesta3;
      respuesta.value = respuestaText3;
      break;
    case 3:
      selectorRespuesta.id = idRespuesta4;
      respuesta.value = respuestaText4;
      break;
    case 4:
      selectorRespuesta.id = idRespuesta5;
      respuesta.value = respuestaText5;
      break;
  }

  divPregunta.appendChild(divrespuesta);
  divrespuesta.appendChild(div2respuesta);
  divrespuesta.appendChild(respuesta);
  div2respuesta.appendChild(selectorRespuesta);
  for (var j = 1; j < 5; j++) {

    var a1respuesta = document.createElement("option");

    a1respuesta.className = "dropdown-item";
    a1respuesta.value = j;
    a1respuesta.innerHTML = j;

    selectorRespuesta.appendChild(a1respuesta);

  }


}

}

createTituloTest=(tituloText, cuerpoText)=>
{
  let ContenerdorDePreguntas = document.getElementById("preguntas");

  var pregunta = document.createElement("main");
  var divPregunta = document.createElement("div");
  var parrafoPregunta = document.createElement("p");
  parrafoPregunta.innerHTML = tituloText+".\n"+cuerpoText;

  pregunta.className = "container";
  divPregunta.className = "jumbotron colorTwo align-middle shadow p-3 mb-5";
  parrafoPregunta.className = "text-white d-flex justify-content-center ";

  pregunta.appendChild(divPregunta);
  divPregunta.appendChild(parrafoPregunta);
  ContenerdorDePreguntas.appendChild(pregunta);
}

createTituloTest("Test 1", "<br>En seguida se presentará una lista de actividades en las cuales quizás hayas tenido alguna experiencia personal. La finalidad es que determines que tan apto te consideras para cada una de ellas. Para indicarlo selecciona uno de los siguientes números 1, 2, 3 o 4 guiándote por las explicaciones que siguen:<br><br> a)	1 si te consideras incompetente para esta actividad<br>b)	2 si te consideras medianamente apto<br>c)	3 si te consideras bastante apto<br>d)	4 si te consideras muy apto");

let seccionArray=["Seccion A","Seccion B","Seccion C","Seccion D","Seccion E","Seccion F","Seccion G","Seccion H","Seccion I","Seccion J","Seccion K"]
let preguntasArray=["Para expresarte con facilidad en clase o al conversar con tus amigos","Para redactar composiciones o artículos periodísticos","Para componer versos serios o jocosos","Para escribir cuentos, narraciones o historietas","Para saber distinguir y apreciar la buena literatura",//seccion A
"Para ejecutar con exactitud y rapidez operaciones aritméticas","Para hacer cálculos mentales","Para calcular costos en una fiesta","Para comprender fórmulas matemáticas","Para distribuir el dinero de la escuela en varias actividades",//seccion B
"Para asimilar el contenido de textos sobre radio, TV o similares","Para hacer trabajos con instrumentos de medición precisa, tales como balanzas, compases o pinzas especiales","Para entender el funcionamiento de algún aparato mediante la simple observación o con explicaciones ligeras","Para armar y desarmar juguetes mecánicos, o instrumentos algo complicados","Para localizar desperfectos y realizar arreglos en equipo o instrumentos domésticos, como planchas, lavadoras, licuadoras o circuitos electrónicos", //seccion C
"Para cantar, bailar o declamar","Para conocer la calidad de una pintura, de una pieza musical o de un poema","Para realizar pinturas, dibujos, grabados, modelo en barro o plastilina","Para efectuar modificaciones en tu voz, tu figura o tus movimientos, mediante indicaciones de una persona conocedoras del arte escénico","Para ejecutar algún instrumento componer versos, melodías, realizar escenografías o decoraciones", //seccion D
"Para cantar en un grupo coral","Para aprender a tocar un instrumento musical","Para distinguir cuando se desentona en las canciones o piezas musicales","Para aprender a entonar correctamente las canciones de moda","Para saber distinguir y apreciar buena música", //Seccion E
"Para entender principios y experimentos de biología","Para entender principios y experimentos de física","Para entender principios y experimentos de química","Para entender principios y hechos económicos sociales","Para entender las causas que determinan los acontecimientos sociales", //seccion F
"Para tratar y hablar con tacto y tino a las personas","Para ser miembro activo y útil en un club o sociedad","Para colaborar con otros para bien de ellos y de ti mismo","Para saber escuchar a otros con paciencia y comprender sus puntos de vista","Para conversar en las reuniones y fiestas con acierto y naturalidad",//seccion G
"Para actividades que requieran destreza manual, como cortar, tejer coser","Para manejar con habilidad herramientas de carpintería, como cepillo, martillo, serrucho, etc.","Para manejar con habilidad pequeñas piezas y herramientas como agujas, manecillas, joyas, piezas de relojería, etc.","Para diseñar con facilidad trazos geométricos con la ayuda de las escuadras y la regla y el compás","Conservar la determinacion a la hora de ralizar alguna manualidad",//seccion H
"Para participar en actividades que requieren valor, audacia, decisión, como trepar, dar saltos arriesgados, tomar juegos peligrosos, etc.","Para dominarte en situaciones peligrosas o comprometidas, sin perder la serenidad ni el control de la situación","Para dominar tus nervios y continuar con lo que estés haciendo en un momento en que, por algún peligro, todos quieren huir", "Para recuperar pronto la tranquilidad y presencia de ánimo después de un susto","Para no contagiarte del miedo o pánico de los demás, e infundirles animo con tu ejemplo",//Seccion I
"Para ser jefe competente de un grupo, equipo o sociedad de muchachos","Para organizar y dirigir festivales, encuentros deportivos, excursiones o campañas sociales","Para convencer a otros a que hagan lo que creen que deben hacer","Para dar órdenes a otros, con seguridad y naturalidad","Para dirigir un grupo o equipo en situaciones difíciles o peligrosas",//seccion J
"Para llevar en forma correcta y ordenada los apuntes de las clases","Para ordenar y clasificar debidamente documentos y correspondencia de una oficina","Para aprender a contestar y redactar correctamente cartas y oficios","Para anotar y manejar con exactitud y rapidez nombres, números y otros datos de oficina","Para encargarte de recibir anotar y dar recados, sin olvidar los detalles importantes"]//seccion K
var aux=0;
for (var i = 0; i < 11; i++) {

  CreateDropDownQuestion(seccionArray[i] , preguntasArray[aux] , preguntasArray[aux+1], preguntasArray[aux+2], preguntasArray[aux+3], preguntasArray[aux+4], aux, aux+1, aux+2, aux+3, aux+4);
  aux+=5;
}
const Evaluar = () =>{ // cuando se oprime el boton de evaluar las respuestas del test

  /*
  Sección A = Verbal
  Sección B = Numérica
  Sección C = Mecánica y Constructiva
  Sección D = Artístico-Plástica
  Sección E = Musical
  Sección F = Científica
  Sección G = Social
  Sección H = Destreza Manual
  Sección I = Practica
  Sección J = Ejecutiva
  Sección K = Para trabajo de oficina
  El valor que selecciona el usuario lo sumare y mostrare el final, el maximo puntaje a sacar es 20 puntos
  */
  var a,b,c,d,e,aux=0,res;
  var arrayResultados=[];
  for(var i = 0; i < 11; i++)
  {
    a=document.getElementById(aux).value;
    b=document.getElementById(aux+1).value;
    c=document.getElementById(aux+2).value;
    d=document.getElementById(aux+3).value;
    e=document.getElementById(aux+4).value;
    aux+=5
    res=parseInt(a,10)+parseInt(b,10)+parseInt(c,10)+parseInt(d,10)+parseInt(e,10);
    arrayResultados.push(res);
  }
  GenerarRespuesta("Resultados:<br>Verbal="+arrayResultados[0]+" puntos<br>"+
        "Numerica="+arrayResultados[1]+" puntos<br>"+
        "Mecanica y Constructiva="+arrayResultados[2]+" puntos<br>"+
        "Artistico-Plastica="+arrayResultados[3]+" puntos<br>"+
        "Musical="+arrayResultados[4]+" puntos<br>"+
        "Científica="+arrayResultados[5]+" puntos<br>"+
        "Social="+arrayResultados[6]+" puntos<br>"+
        "Destreza manual="+arrayResultados[7]+" puntos<br>"+
        "Practica="+arrayResultados[8]+" puntos<br>"+
        "Ejecutiva="+arrayResultados[9]+" puntos<br>"+
        "Trabajo de oficina="+arrayResultados[10]+" puntos");

}
const GenerarRespuesta = (resultado) =>{

  let ContenerdorDePreguntas = document.getElementById("preguntas");
  var resultadoHTML = document.createElement("main");
  var divResultado = document.createElement("div");
  var parrafoResultado = document.createElement("p");

  resultadoHTML.className = "container";
  divResultado.className = "jumbotron bg-white shadow p-3 mb-5 ";
  parrafoResultado.className = "text-dark d-flex text-left ";

  parrafoResultado.innerHTML = resultado;

  resultadoHTML.appendChild(divResultado);
  divResultado.appendChild(parrafoResultado);
  ContenerdorDePreguntas.appendChild(resultadoHTML);
}
