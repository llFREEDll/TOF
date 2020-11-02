const CreateQuestion = (TextoPregunta, respuestaText1, respuestaText2 , respuestaText3, respuestaText4, RadioName) => {

  let ContenerdorDePreguntas = document.getElementById("preguntas");

  var pregunta = document.createElement("main");
  var divPregunta = document.createElement("div");
  var parrafoPregunta = document.createElement("p");
  var textNode = document.createTextNode(TextoPregunta); // variable comodin para agregar textos
  var divrespuesta1 = document.createElement("div");
  var div2respuesta1 = document.createElement("div");
  var div3respuesta1 = document.createElement("div");
  var inputRespuesta1 = document.createElement("input");
  var respuesta1 = document.createElement("input");

  var divrespuesta2 = document.createElement("div");
  var div2respuesta2 = document.createElement("div");
  var div3respuesta2 = document.createElement("div");
  var inputRespuesta2 = document.createElement("input");
  var respuesta2 = document.createElement("input");

  var divrespuesta3 = document.createElement("div");
  var div2respuesta3 = document.createElement("div");
  var div3respuesta3 = document.createElement("div");
  var inputRespuesta3 = document.createElement("input");
  var respuesta3 = document.createElement("input");

  var divrespuesta4 = document.createElement("div");
  var div2respuesta4 = document.createElement("div");
  var div3respuesta4 = document.createElement("div");
  var inputRespuesta4 = document.createElement("input");
  var respuesta4 = document.createElement("input");

  pregunta.className = "container";
  divPregunta.className = "jumbotron colorTwo align-middle shadow p-3 mb-5";
  parrafoPregunta.className = "text-white d-flex justify-content-center ";
  divrespuesta1.className = "input-group w-50 marginLeft25";
  div2respuesta1.className = "input-group-prepend";
  div3respuesta1.className = "input-group-text bg-white";
  inputRespuesta1.type = "radio";
  inputRespuesta1.name = RadioName;
  respuesta1.type = "text";
  respuesta1.className = "form-control bg-white text-dark";
  respuesta1.value = respuestaText1;
  respuesta1.disabled = true;

  divrespuesta2.className = "input-group w-50 marginLeft25";
  div2respuesta2.className = "input-group-prepend";
  div3respuesta2.className = "input-group-text bg-white";
  inputRespuesta2.type = "radio";
  inputRespuesta2.name = RadioName;
  respuesta2.type = "text";
  respuesta2.className = "form-control bg-white text-dark";
  respuesta2.value = respuestaText2;
  respuesta2.disabled = true;

  divrespuesta3.className = "input-group w-50 marginLeft25";
  div2respuesta3.className = "input-group-prepend";
  div3respuesta3.className = "input-group-text bg-white";
  inputRespuesta3.type = "radio";
  inputRespuesta3.name = RadioName;
  respuesta3.type = "text";
  respuesta3.className = "form-control bg-white text-dark";
  respuesta3.value = respuestaText3;
  respuesta3.disabled = true;

  divrespuesta4.className = "input-group w-50 marginLeft25";
  div2respuesta4.className = "input-group-prepend";
  div3respuesta4.className = "input-group-text bg-white";
  inputRespuesta4.type = "radio";
  inputRespuesta4.name = RadioName;
  respuesta4.type = "text";
  respuesta4.className = "form-control bg-white text-dark";
  respuesta4.value = respuestaText4;
  respuesta4.disabled = true;

  pregunta.appendChild(divPregunta);
  parrafoPregunta.appendChild(textNode);
  divPregunta.appendChild(parrafoPregunta);
  divPregunta.appendChild(divrespuesta1);
  divrespuesta1.appendChild(div2respuesta1);
  div2respuesta1.appendChild(div3respuesta1);
  div3respuesta1.appendChild(inputRespuesta1);
  divrespuesta1.appendChild(respuesta1);

  divPregunta.appendChild(divrespuesta2);
  divrespuesta2.appendChild(div2respuesta2);
  div2respuesta2.appendChild(div3respuesta2);
  div3respuesta2.appendChild(inputRespuesta2);
  divrespuesta2.appendChild(respuesta2);

  divPregunta.appendChild(divrespuesta3);
  divrespuesta3.appendChild(div2respuesta3);
  div2respuesta3.appendChild(div3respuesta3);
  div3respuesta3.appendChild(inputRespuesta3);
  divrespuesta3.appendChild(respuesta3);

  divPregunta.appendChild(divrespuesta4);
  divrespuesta4.appendChild(div2respuesta4);
  div2respuesta4.appendChild(div3respuesta4);
  div3respuesta4.appendChild(inputRespuesta4);
  divrespuesta4.appendChild(respuesta4);

  ContenerdorDePreguntas.appendChild(pregunta);

}

for (var i = 0; i < 5; i++) {
  CreateQuestion("Ejemplo" + i , "si" , "si", "no", "no", i);
}
