const CreateDropDownQuestion = (TextoPregunta, respuestaText1, respuestaText2 , respuestaText3, respuestaText4, idRespuesta1, idRespuesta2,idRespuesta3,idRespuesta4) => {

  let ContenerdorDePreguntas = document.getElementById("preguntas");

  var pregunta = document.createElement("main");
  var divPregunta = document.createElement("div");
  var parrafoPregunta = document.createElement("p");
  var textNode = document.createTextNode(TextoPregunta); // variable comodin para agregar textos
  var textNode11 = document.createTextNode("1");
  var textNode12 = document.createTextNode("2");
  var textNode13 = document.createTextNode("3");
  var textNode14 = document.createTextNode("4");

  var textNode21 = document.createTextNode("1");
  var textNode22 = document.createTextNode("2");
  var textNode23 = document.createTextNode("3");
  var textNode24 = document.createTextNode("4");

  var textNode31 = document.createTextNode("1");
  var textNode32 = document.createTextNode("2");
  var textNode33 = document.createTextNode("3");
  var textNode34 = document.createTextNode("4");

  var textNode41 = document.createTextNode("1");
  var textNode42 = document.createTextNode("2");
  var textNode43 = document.createTextNode("3");
  var textNode44 = document.createTextNode("4");

  var divrespuesta1 = document.createElement("div");
  var div2respuesta1 = document.createElement("div");
  var buttonRespuesta1 = document.createElement("button");
  var div3respuesta1 = document.createElement("div");
  var a1respuesta1 = document.createElement("a");
  var a2respuesta1 = document.createElement("a");
  var a3respuesta1 = document.createElement("a");
  var a4respuesta1 = document.createElement("a");
  var respuesta1 = document.createElement("input");

  var divrespuesta2 = document.createElement("div");
  var div2respuesta2 = document.createElement("div");
  var buttonRespuesta2 = document.createElement("button");
  var div3respuesta2 = document.createElement("div");
  var a1respuesta2 = document.createElement("a");
  var a2respuesta2 = document.createElement("a");
  var a3respuesta2 = document.createElement("a");
  var a4respuesta2 = document.createElement("a");
  var respuesta2 = document.createElement("input");

  var divrespuesta3 = document.createElement("div");
  var div2respuesta3 = document.createElement("div");
  var buttonRespuesta3 = document.createElement("button");
  var div3respuesta3 = document.createElement("div");
  var a1respuesta3 = document.createElement("a");
  var a2respuesta3 = document.createElement("a");
  var a3respuesta3 = document.createElement("a");
  var a4respuesta3 = document.createElement("a");
  var respuesta3 = document.createElement("input");

  var divrespuesta4 = document.createElement("div");
  var div2respuesta4 = document.createElement("div");
  var buttonRespuesta4 = document.createElement("button");
  var div3respuesta4 = document.createElement("div");
  var a1respuesta4 = document.createElement("a");
  var a2respuesta4 = document.createElement("a");
  var a3respuesta4 = document.createElement("a");
  var a4respuesta4 = document.createElement("a");
  var respuesta4 = document.createElement("input");

  pregunta.className = "container";
  divPregunta.className = "jumbotron colorTwo align-middle shadow p-3 mb-5";
  parrafoPregunta.className = "text-white d-flex justify-content-center ";
  divrespuesta1.className = "input-group w-50 marginLeft25";
  div2respuesta1.className = "input-group-prepend";
  buttonRespuesta1.type = "button";
  buttonRespuesta1.className = "btn btn-secondary dropdown-toggle bg-white text-dark";
  buttonRespuesta1.id = "dropdownMenuButton";
  buttonRespuesta1.id= idRespuesta1;
  buttonRespuesta1.setAttribute("aria-haspopup","true");
  buttonRespuesta1.setAttribute("data-toggle","dropdown");
  buttonRespuesta1.ariaExpanded="false";
  div3respuesta1.ariaLabelledby = "dropdownMenuButton";
  div3respuesta1.className = "dropdown-menu";
  a1respuesta1.className = "dropdown-item";
  a2respuesta1.className = "dropdown-item";
  a3respuesta1.className = "dropdown-item";
  a4respuesta1.className = "dropdown-item";
  a1respuesta1.value = "1";
  a2respuesta1.value = "2";
  a3respuesta1.value = "3";
  a4respuesta1.value = "4";
  respuesta1.type = "text";
  respuesta1.className = "form-control bg-white text-dark";
  respuesta1.value = respuestaText1;
  respuesta1.disabled = true;

  divrespuesta2.className = "input-group w-50 marginLeft25";
  div2respuesta2.className = "input-group-prepend";
  buttonRespuesta2.type = "button";
  buttonRespuesta2.className = "btn btn-secondary dropdown-toggle bg-white text-dark";
  buttonRespuesta2.id = "dropdownMenuButton";
  buttonRespuesta2.id= idRespuesta2;
  buttonRespuesta2.setAttribute("aria-haspopup","true");
  buttonRespuesta2.setAttribute("data-toggle","dropdown");
  buttonRespuesta2.ariaExpanded="false";
  div3respuesta2.ariaLabelledby = "dropdownMenuButton";
  div3respuesta2.className = "dropdown-menu";
  a1respuesta2.className = "dropdown-item";
  a2respuesta2.className = "dropdown-item";
  a3respuesta2.className = "dropdown-item";
  a4respuesta2.className = "dropdown-item";
  a1respuesta2.value = "1";
  a2respuesta2.value = "2";
  a3respuesta2.value = "3";
  a4respuesta2.value = "4";
  respuesta2.type = "text";
  respuesta2.className = "form-control bg-white text-dark";
  respuesta2.value = respuestaText1;
  respuesta2.disabled = true;

  divrespuesta3.className = "input-group w-50 marginLeft25";
  div2respuesta3.className = "input-group-prepend";
  buttonRespuesta3.type = "button";
  buttonRespuesta3.className = "btn btn-secondary dropdown-toggle bg-white text-dark";
  buttonRespuesta3.id = "dropdownMenuButton";
  buttonRespuesta3.id= idRespuesta3;
  buttonRespuesta3.setAttribute("aria-haspopup","true");
  buttonRespuesta3.setAttribute("data-toggle","dropdown");
  buttonRespuesta3.ariaExpanded="false";
  div3respuesta3.ariaLabelledby = "dropdownMenuButton";
  div3respuesta3.className = "dropdown-menu";
  a1respuesta3.className = "dropdown-item";
  a2respuesta3.className = "dropdown-item";
  a3respuesta3.className = "dropdown-item";
  a4respuesta3.className = "dropdown-item";
  a1respuesta3.value = "1";
  a2respuesta3.value = "2";
  a3respuesta3.value = "3";
  a4respuesta3.value = "4";
  respuesta3.type = "text";
  respuesta3.className = "form-control bg-white text-dark";
  respuesta3.value = respuestaText1;
  respuesta3.disabled = true;

  divrespuesta4.className = "input-group w-50 marginLeft25";
  div2respuesta4.className = "input-group-prepend";
  buttonRespuesta4.type = "button";
  buttonRespuesta4.className = "btn btn-secondary dropdown-toggle bg-white text-dark";
  buttonRespuesta4.id = "dropdownMenuButton";
  buttonRespuesta4.id= idRespuesta4;
  buttonRespuesta4.setAttribute("aria-haspopup","true");
  buttonRespuesta4.setAttribute("data-toggle","dropdown");
  buttonRespuesta4.ariaExpanded="false";
  div3respuesta4.ariaLabelledby = "dropdownMenuButton";
  div3respuesta4.className = "dropdown-menu";
  a1respuesta4.className = "dropdown-item";
  a2respuesta4.className = "dropdown-item";
  a3respuesta4.className = "dropdown-item";
  a4respuesta4.className = "dropdown-item";
  a1respuesta4.value = "1";
  a2respuesta4.value = "2";
  a3respuesta4.value = "3";
  a4respuesta4.value = "4";
  respuesta4.type = "text";
  respuesta4.className = "form-control bg-white text-dark";
  respuesta4.value = respuestaText1;
  respuesta4.disabled = true;


  pregunta.appendChild(divPregunta);
  parrafoPregunta.appendChild(textNode);
  divPregunta.appendChild(parrafoPregunta);
  divPregunta.appendChild(divrespuesta1);
  divrespuesta1.appendChild(div2respuesta1);
  div2respuesta1.appendChild(buttonRespuesta1);
  div2respuesta1.appendChild(div3respuesta1);
  divrespuesta1.appendChild(respuesta1) ;
  div3respuesta1.appendChild(a1respuesta1);
  div3respuesta1.appendChild(a2respuesta1);
  div3respuesta1.appendChild(a3respuesta1);
  div3respuesta1.appendChild(a4respuesta1);
  a1respuesta1.appendChild(textNode11);
  a2respuesta1.appendChild(textNode12);
  a3respuesta1.appendChild(textNode13);
  a4respuesta1.appendChild(textNode14);

  divPregunta.appendChild(divrespuesta2);
  divrespuesta2.appendChild(div2respuesta2);
  div2respuesta2.appendChild(buttonRespuesta2);
  div2respuesta2.appendChild(div3respuesta2);
  divrespuesta2.appendChild(respuesta2) ;
  div3respuesta2.appendChild(a1respuesta2);
  div3respuesta2.appendChild(a2respuesta2);
  div3respuesta2.appendChild(a3respuesta2);
  div3respuesta2.appendChild(a4respuesta2);
  a1respuesta2.appendChild(textNode21);
  a2respuesta2.appendChild(textNode22);
  a3respuesta2.appendChild(textNode23);
  a4respuesta2.appendChild(textNode24);

  divPregunta.appendChild(divrespuesta3);
  divrespuesta3.appendChild(div2respuesta3);
  div2respuesta3.appendChild(buttonRespuesta3);
  div2respuesta3.appendChild(div3respuesta3);
  divrespuesta3.appendChild(respuesta3) ;
  div3respuesta3.appendChild(a1respuesta3);
  div3respuesta3.appendChild(a2respuesta3);
  div3respuesta3.appendChild(a3respuesta3);
  div3respuesta3.appendChild(a4respuesta3);
  a1respuesta3.appendChild(textNode31);
  a2respuesta3.appendChild(textNode32);
  a3respuesta3.appendChild(textNode33);
  a4respuesta3.appendChild(textNode34);

  divPregunta.appendChild(divrespuesta4);
  divrespuesta4.appendChild(div2respuesta4);
  div2respuesta4.appendChild(buttonRespuesta4);
  div2respuesta4.appendChild(div3respuesta4);
  divrespuesta4.appendChild(respuesta4) ;
  div3respuesta4.appendChild(a1respuesta4);
  div3respuesta4.appendChild(a2respuesta4);
  div3respuesta4.appendChild(a3respuesta4);
  div3respuesta4.appendChild(a4respuesta4);
  a1respuesta4.appendChild(textNode41);
  a2respuesta4.appendChild(textNode42);
  a3respuesta4.appendChild(textNode43);
  a4respuesta4.appendChild(textNode44);


  ContenerdorDePreguntas.appendChild(pregunta);

}


const CreateQuestion = (TextoPregunta, respuestaText1, respuestaText2 , respuestaText3, respuestaText4 , RadioName) => {

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

// papra crear nuevas respuestas copiar y pegar
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

// papra crear nuevas respuestas copiar y pegar
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

// papra crear nuevas respuestas copiar y pegar
  divPregunta.appendChild(divrespuesta4);
  divrespuesta4.appendChild(div2respuesta4);
  div2respuesta4.appendChild(div3respuesta4);
  div3respuesta4.appendChild(inputRespuesta4);
  divrespuesta4.appendChild(respuesta4);

  ContenerdorDePreguntas.appendChild(pregunta);

}


CreateDropDownQuestion("ejemplo dropdown con codigo" , "si" , "si", "no", "no",1,2,3,4);

const Evaluar = () =>{ // cuando se oprime el boton de evaluar las respuestas del test

  alert("Soy un boton en construccion");

}
