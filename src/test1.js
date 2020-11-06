const CreateDropDownQuestion = (TextoPregunta, respuestaText1, respuestaText2 , respuestaText3, respuestaText4, idRespuesta1, idRespuesta2,idRespuesta3,idRespuesta4) => {

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

for (var i = 0; i < 4; i++) {

  var divrespuesta = document.createElement("div");
  var div2respuesta = document.createElement("div");
  var selectorRespuesta = document.createElement("select");
  var respuesta = document.createElement("input");

  divrespuesta.className = "input-group w-50 marginLeft25";
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
      respuesta.value = respuestaText3;
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


const CreateQuestion = (TextoPregunta, respuestaText1, respuestaText2 , respuestaText3, respuestaText4 , RadioName) => {

  let ContenerdorDePreguntas = document.getElementById("preguntas");

  var pregunta = document.createElement("main");
  var divPregunta = document.createElement("div");
  var parrafoPregunta = document.createElement("p");
  parrafoPregunta.innerHTML = TextoPregunta;

  pregunta.appendChild(divPregunta);
  divPregunta.appendChild(parrafoPregunta);
  for (var i = 0; i < 4; i++) {

    var divrespuesta = document.createElement("div");
    var div2respuesta = document.createElement("div");
    var div3respuesta = document.createElement("div");
    var inputRespuesta = document.createElement("input");
    var respuesta = document.createElement("input");

    pregunta.className = "container";
    divPregunta.className = "jumbotron colorTwo align-middle shadow p-3 mb-5";
    parrafoPregunta.className = "text-white d-flex justify-content-center ";
    divrespuesta.className = "input-group w-50 marginLeft25";
    div2respuesta.className = "input-group-prepend";
    div3respuesta.className = "input-group-text bg-white";
    inputRespuesta.type = "radio";
    inputRespuesta.name = RadioName;
    respuesta.type = "text";
    respuesta.className = "form-control bg-white text-dark";
    switch (i) {
      case 0:
        respuesta.value = respuestaText1;
        break;
      case 1:
        respuesta.value = respuestaText2;
        break;
      case 2:
        respuesta.value = respuestaText3;
        break;
      case 3:
        respuesta.value = respuestaText4;
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


CreateDropDownQuestion("ejemplo dropdown con codigo" , "si" , "si", "no", "no",1,2,3,4);
CreateQuestion("ejemplo dropdown con codigo" , "si" , "si", "no", "no",1);
const Evaluar = () =>{ // cuando se oprime el boton de evaluar las respuestas del test

  alert("Soy un boton en construccion");


}
