
const About = () =>{
alert("Este proyecto fue realizado por:\n\nDuran Linares Ana Valeria\nGarcia Montiel Juan Diego\nSierra Mendoza Alfredo\nUribe Baltazar Bramdon Aldair\n\nCon el objetivo de orientar a los jóvenes que no tienen claro que desean estudiar.\nTOF pretende dar una visión más amplia a sus usuarios, no solo resaltando sus cualidades con un test vocacional, sino a su vez mostrando las mejores opciones de la región en las cuales pueden aprender a desarrollar sus habilidades.");
}
const Works = () =>{
    alert('Actualmente este proyecto presenta las siguientes herramientas:\n\n-Test vocacional\n-Retículas de las universidades más importantes de Uruapan');
}
const Contact = () =>{
    alert('Instagram: https://www.instagram.com/alfredo._sm/ \n github: https://github.com/llFREEDll');
}
const WriteResult = (text) =>{
  if (document.getElementById("tablaResultado") != null)
    document.getElementById("tablaResultado").remove();

  let ContenerdorDePreguntas = document.getElementById("preguntas");
  var resultadoHTML = document.createElement("main");
  var divResultado = document.createElement("div");
  var pResultado = document.createElement("p");

  pResultado.innerHTML = text;
  resultadoHTML.id = "tablaResultado";
  resultadoHTML.className = "container";
  divResultado.className = " jumbotron bg-white shadow p-3 mb-5 ";

  resultadoHTML.appendChild(divResultado);
  divResultado.appendChild(pResultado);
  ContenerdorDePreguntas.appendChild(resultadoHTML);
}

let linkUniversidades = "<br><br> Para mayor información visita nuestro apartado de <a href='universidades.html'>universidades</a> donde podrás ver los detalles de estas carreras";
