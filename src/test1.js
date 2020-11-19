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
  CreateQuestion("Seccion "+c, arrayPreguntas[i], arrayPreguntas[i+1], i, (i+1), "Seccion "+c);
   c++;
}


const Evaluar = () =>{ // cuando se oprime el boton de evaluar las respuestas del test

  /*
	 Ciencias Físicas=CF
	 Ciencias Biológicas=CB
   Computacional=CP
   Comercial=C
   Ejecutiva=E
   Persuasiva=P
   Lingüística=L
   Humanitaria=H
   Artística=A
   Musical=M
  El valor que selecciona el usuario lo sumare y mostrare el final, el maximo puntaje a sacar es 20 puntos
  */
  var cf=1,cb=1,cp=1,c=1,e=0,p=0,l=0,h=0,a=0,m=0;
  for(var i=0; i<202; i+=2)
  {
    radioB=document.getElementById(i);
    if(i==2)
      radioB.checked ? cf++ : cb++;
    if(i==4)
      radioB.checked ? cf++ : cp++;
    if(i==6)
      radioB.checked ? cf++ : c++;
    if(i==8)
      radioB.checked ? cf++ : e++;
    if(i==10)
      radioB.checked ? cf++ : p++;
    if(i==12)
      radioB.checked ? cf++ : l++;
    if(i==14)
      radioB.checked ? cf++ : h++;
    if(i==16)
      radioB.checked ? cf++ : a++;
    if(i==18)
      radioB.checked ? cf++ : m++;
    if(i==20)
      radioB.checked ? cb++ : cf++;
    if(i==24)
      radioB.checked ? cb++ : cp++;
    if(i==26)
      radioB.checked ? cb++ : c++;
    if(i==28)
      radioB.checked ? cb++ : e++;
    if(i==30)
      radioB.checked ? cb++ : p++;
    if(i==32)
      radioB.checked ? cb++ : l++;
    if(i==34)
      radioB.checked ? cb++ : h++;
    if(i==36)
      radioB.checked ? cb++ : a++;
    if(i==38)
      radioB.checked ? cb++ : m++;
    if(i==40)
      radioB.checked ? cp++ : cf++;
    if(i==42)
      radioB.checked ? cp++ : cb++;
    if(i==46)
      radioB.checked ? cp++ : c++;
    if(i==48)
      radioB.checked ? cp++ : e++;
    if(i==50)
      radioB.checked ? cp++ : p++;
    if(i==52)
      radioB.checked ? cp++ : l++;
    if(i==54)
      radioB.checked ? cp++ : h++;
    if(i==56)
      radioB.checked ? cp++ : a++;
    if(i==58)
      radioB.checked ? cp++ : m++;
    if(i==60)
      radioB.checked ? c++ : cf++;
    if(i==62)
      radioB.checked ? c++ : cb++;
    if(i==64)
      radioB.checked ? c++ : cp++;
    if(i==68)
      radioB.checked ? c++ : e++;
    if(i==70)
      radioB.checked ? c++ : p++;
    if(i==72)
      radioB.checked ? c++ : l++;
    if(i==74)
      radioB.checked ? c++ : h++;
    if(i==76)
      radioB.checked ? c++ : a++;
  }
  alert("CF="+cf+", CB="+cb+", CP="+cp+", C="+c+", E="+e+", P="+p+", L="+l+", H="+h+", A="+a+", M="+m);

}
