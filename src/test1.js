const CreateQuestion = (TextoPregunta, respuestaText1, respuestaText2 , idRespuesta1, idRespuesta2, RadioName) => {

  let ContenerdorDePreguntas = document.getElementById("preguntas");

  var pregunta = document.createElement("main");
  var divPregunta = document.createElement("div");
  var parrafoPregunta = document.createElement("p");
  parrafoPregunta.innerHTML = TextoPregunta;

  pregunta.appendChild(divPregunta);
  divPregunta.appendChild(parrafoPregunta);
  for (var i = 0; i < 2; i++) {

    var divrespuesta = document.createElement("div");
    var div2respuesta = document.createElement("div");
    var div3respuesta = document.createElement("div");
    var inputRespuesta = document.createElement("input");
    var respuesta = document.createElement("input");

    pregunta.className = "container";
    divPregunta.className = "jumbotron colorTwo align-middle shadow p-3 mb-5";
    parrafoPregunta.className = "text-white d-flex justify-content-center ";
    divrespuesta.className = "input-group w-100";
    div2respuesta.className = "input-group-prepend";
    div3respuesta.className = "input-group-text bg-white";
    inputRespuesta.type = "radio";
    inputRespuesta.name = RadioName;
    respuesta.type = "text";
    respuesta.className = "form-control bg-white text-dark";
    switch (i) {
      case 0:
        respuesta.value = respuestaText1;
        inputRespuesta.id=idRespuesta1;
        break;
      case 1:
        respuesta.value = respuestaText2;
        inputRespuesta.id=idRespuesta2;
        break;
    }

    respuesta.disabled = true;

    divPregunta.appendChild(divrespuesta);
    divrespuesta.appendChild(div2respuesta);
    div2respuesta.appendChild(div3respuesta);
    div3respuesta.appendChild(inputRespuesta);
    divrespuesta.appendChild(respuesta);
  }



  ContenerdorDePreguntas.appendChild(pregunta);

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

createTituloTest("Test 2", "Indicaciones");

let arrayPreguntas=["Ciencias Físicas" , "Ingeniero Civil", "Mecánico" , "Veterinario","Inventor" , "Agente de compras", "Químico" , "Comerciante de Automóviles",
"Electricidad" , "Director de museo", "Aviador" , "Abogado Defensor", "Ciencias Físicas" , "Escritor", "Astrónomo" , "Sacerdote", "Diseño de máquinas" , "Arquitecto",
"Radio Técnico" , "Maestro de Música", "Medico" , "Ciencias Físicas", "Nutrición" , "Zoólogo", "Dentista" , "Estadística", "Veterinario" , "Industrial",
"Zoólogo" , "Supervisión de Fabrica", "Bacteriólogo " , "Redactor de Publicidad", "Bacteriólogo", "Redactor de Publicidad", "Botánico", "Novelista", "Agricultor",
"Asilo de ancianos", "Cirujano", "Escultor", "Biólogo", "Trompetista", "Matemático", "Químico", "Estadística", "Botánico", "Analistas de Precios", "Especialista en Impuestos",
"Contador", "Revendedor", "Estadística de seguros", "Director de empresa", "Pagador", "Arbitro de trabajo", "Análisis de precio", "Conferencista", "Agente de Compras",
"Tribunal de menores", "Especialista en Impuestos", "Diseñador de Tejidos", "Cajero", "Director de banda", "Banquero", "Diseñador de máquinas", "Negocios",
"Nutrición", "Industrial", "Pagador", "Revendedor", "Industrial", "Agente de Inversión", "Gobernador", "Comerciante de inmuebles", "Orador político",
"Comisionista", "Licenciado en leyes", "Comerciante al por menor", "Orientador Vocacional", "Comerciante al por mayor", "Decorador", "Agente de Seguros",
"Compositor de Canciones", "Director de Empresas", "Ingeniero Civil", "Alcalde", "Biólogo", "Juez", "Contador", "Gobernador", "Comerciante al mayoreo",
"Gerente de Hotel", "Alcalde", "Oficial de Guardacostas", "Escritor de Editoriales", "Director de Hospital", "Periodista", "Director de Escuelas", "Trabajador Social",
"Capitán de Barco", "Artista Comercial", "Supervisor de fabrica", "Organista", "Abogado Defensor", "Diseñador Puentes", "Arbitro de Trabajo", "Seguridad Pública",
"Propagandista", "Cajero", "Orador Político", "Banquero", "Redactor de Publicidad", "Oficial del Ejercito", "Abogado Defensor", "Orador Político", "Vendedor",
"Catedrático Universitario", "Redactor de Publicidad", "Rehabilitación de Ciegos", "Comentarista de Radio", "Director de teatro", "Vendedor de Seguros", "Violinista",
"Periodistas", "Aviador", "Corresponsal en el extranjero", "Agricultor", "Profesor de Lenguajes", "Estadístico de Seguro", "Escritor de Periódico", "Importador",
"Escritor de Revistas", "Capitán de Barco", "Historiador", "Visitador Médico", "Editor de Periódico", "Editor de Revista", "Licenciado en Leyes", "Cruz Roja",
"Escritor", "Artista", "Conferencista", "Compositor Musical", "Bienestar Infantil", "Diseñador de Aviones", "Sacerdote", "Medico", "Orientación Vocacional", "Contador",
"Tribunal de Menores", "Prestamista", "Misionero", "Director de Escuela", "Trabajador Social", "Vendedor de Seguros", "Rehabilitación de Ciegos", "Novelista",
"Bienestar Infantil", "Banco de Sangre", "Cruz Roja", "Pintor Retratista", "Asilo de Ancianos", "Cantante", "Artista Comercial", "Mecánico", "Decorador", "Bacteriólogo",
"Artista", "Matemático", "Pintor Retratista", "Contratista", "Escultor", "Juez", "Dibujante de tiras cómicas", "Propagandista", "Arquitecto", "Historiador",
"Director de Teatro", "Misionero", "Artista Comercial", "Actor", "Diseñador de Tejidos", "Director de Orquesta", "Director de Orquesta", "Inventor", "Compositor Musical",
"Cirujano", "Saxofonista", "Cajero", "Violinista", "Comerciante de Inmuebles", "Cantante", "Director de Hospital", "Director de Coros", "Vendedor", "Compositor de Canciones",
"Corresponsal en el extranjero", "Organista", "Bienestar Infantil", "Maestro de Música", "Diseñador de Vestidos", "Pianista", "Violinista"]
var c=1;
for(var i=0; i<202; i+=2)
{
  CreateQuestion("Seccion "+c, arrayPreguntas[i], arrayPreguntas[i+1], i, (i+1), i);
   c++;
}


// const Evaluar = () =>{ // cuando se oprime el boton de evaluar las respuestas del test
//
//   /*
// 	 Ciencias Físicas=CF
// 	 Ciencias Biológicas=CB
//    Computacional=CP
//    Comercial=C
//    Ejecutiva=E
//    Persuasiva=P
//    Lingüística=L
//    Humanitaria=H
//    Artística=A
//    Musical=M
//   El valor que selecciona el usuario lo sumare y mostrare el final, el maximo puntaje a sacar es 20 puntos
//   */
//
//   alert("Boton en construccion");
//
// }
