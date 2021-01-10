<?php include("src/navbar.php") ?>

       <main class="container">
         <div class="jumbotron bg-white shadow p-3 mb-5">
            <p class=" text-dark d-flex justify-content-center ">En este sitio podrás encontrar herramientas que te ayudarán a
              tomar una decisión sobre qué tipo de carrera universitaria
               deberías estudiar, también puedes consultar una lista de las
               universidades más reconocidas de la ciudad así como sus
               planes de estudios.
             </p>
             <p class=" text-dark d-flex justify-content-center ">Y recuerda que el futuro es tan oscuro que no lo podemos vislumbrar y depende de nosotros mismos darle luz y volverlo cálido con cada una de nuestras acciones.</p>
         </div>
       </main>
       <div class="container">
          <div class="card-deck">
                
               <div class="card">
                    <img src="assets/vocacion.jpg" class="card-img-top " >
                    <div class="card-body">
                      <h5 class="card-title">Test vocacional</h5>
                      <p class="card-text">Cuenta con 100 reactivos que puntea como resultado 20 juicios para cada área vocacional que mide.</p>
                      <a href="test1.php" class="btn colorFour btn-primary">Realizar test vocacional</a>
                    </div>
                  </div>
                  <div class="card">
                    <img src="assets/aptitud.jpg" class="card-img-top" >
                    <div class="card-body">
                      <h5 class="card-title">Test de aptitud</h5>
                      <p class="card-text">Una lista de actividades en las cuales quizás hayas tenido alguna experiencia personal. La finalidad es que determines que tan apto te consideras para cada una de ellas</p>
                      <a href="test2.php" class="btn colorFour btn-primary">Realizar Test de aptitud</a>
                    </div>
                  </div>
                
            
          </div>
       </div>

        
                <div class="jumbotron bg-dark text-white marginTopBot20 uni colorOne">
                  
                    <h5 class="card-title">Universidades</h5>
                    <p class="card-text">En este apartado podrás ver un listado de todas las carreras que se toman en cuenta a la hora de dar un resultado a uno de los test que puedes realizar en nuestra página principal, tomamos en cuenta un total de 56 carreras disponibles de 7 universidades de renombre en la región para arrojar como resultado en nuestros test.
                    <br><br>
                    Selecciona una de la universidades para conocer a detalle sus carreras así como sus asignaturas o materias de las cuales disponen cada carrera, te recomendamos que si alguna carrera llama tu atención ingreses al link de la página de la universidad ya que en esta podras ver una mayor cantidad de información sobre la carrera de tu interés.</p>
                    <a href="universidades.php" class="btn btn-light">Ver universidades</a>
                
                </div>

     
    <footer class="card text-white bg-dark mb-3">
        <div class="card-header">Sobre esta página</div>
        <div class="card-body">
        <p class="card-text">
            Este proyecto fue realizado por:<br><br>Duran Linares Ana Valeria<br>Garcia Montiel Juan Diego<br>Sierra Mendoza Alfredo<br>Uribe Baltazar Bramdon Aldair<br><br>Con el objetivo de orientar a los jóvenes que no tienen claro que desean estudiar.<br>TOF pretende dar una visión más amplia a sus usuarios, no solo resaltando sus cualidades con un test vocacional, sino a su vez mostrando las mejores opciones de la región en las cuales pueden aprender a desarrollar sus habilidades.
            </p>
      </div>
        <div class="card-header">Contactanos</div>
        <div class="card-body">
        <a href="https://www.instagram.com/sm__alfredo/" class="card-text">
        Instagram: sm_alfredo<br>
        </a>
        <a href="https://twitter.com/Alfredo_SM_" class="card-text">
        Twitter: Alfredo_SM_    
        </a>
      </div>
        <div class="card-header">Repositorio</div>
        <div class="card-body">
        <a href="https://github.com/llFREEDll/TOF" class="card-text">
        TOF en Github
        </a>
      </div>
        </footer>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
    <script src="src/logic.js"></script>

  </body>
</html>
