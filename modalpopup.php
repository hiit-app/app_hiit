<!doctype html>
<head>
  <style>

/* :root; Hace Referencia al HTML 
    :root {
      box-sizing: border-box;
    }
     

    *
    ::before,
    ::after {
      box-sizing: inherit;
    }

    body {
      font-family: Helvetica, Arial, sans-serif;
      min-height: 200vh;
    }
/*
    .modal {
      display: none;
    }
/* modal backdrop, si cambio top y right , se ve muy extraño...  // Es como la parte de 
Atras del modal.... Define el color de fondo , */

    .modal-backdrop {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.2);

    }

    .modal-body {
      position: fixed;
      top: 3em;
      bottom: 3em;
      
      
      padding: 2em 3em;
      background-color: white;
      overflow: auto;
      box-pack: justify;
      text-overflow: ellipsis;
      font-size: 80%;
      max-width: 100%;
      text-align : justify;
      display: table;
   
    }

    .modal-close {
      position: absolute;
      top: .1em;
      right: .3em;
      display: block;
      padding: .3em;
      font-size: 2em;
      line-height: 1;
      cursor: pointer;
    }

  </style>
</head>

<body>
  <!--<button id="open">Open modal</button>-->


<div class="modal" id="modal" value="hola">
  <div class="modal-backdrop"></div>
      <div class="modal-body">
                
          <div class="modal-close" id="close">&times;</div>

<!-- Abajo se incluye cuerpo del modal que se abre -->
          <h3>Instrucciones:</h3>
          <p>Debes ingresar los kilos de la serie. Luego debes percibir cuantas repeticiones te quedan en reserva
          	al terminar la serie. Si sientes que te quedan aún 2 mas, escribe ese número en reserva.
          	Si sientes que solo puedes hacer una mas, escribe una. Si luego de hacer las repeticiones, sientes que ya no puedes
          	hacer otra repetición mas, escribe 0. </p>
<!-- Arriba se incluye cuerpo del modal que se abre -->

     </div><!-- Fin al Modal body-->
</div><!-- Fin al Modal Inicial-->


  <script type="text/javascript">
    let button = document.getElementById('open');


    var close = document.getElementById('close');
    let modal = document.getElementById('modal');

    window.addEventListener('load', (event) => {
      event.preventDefault();
      modal.style.display = 'block';
    });



    modal.addEventListener('click', close1);

    function close1(){
      
      modal.style.display="none";
    }
  </script>
</body>
