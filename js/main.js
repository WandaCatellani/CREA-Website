// todo===================================  INICIALIZACIÓN MATERIALIZE  ==================================

$(document).ready(function () {
  M.AutoInit();

  $(".sidenav").sidenav();

  $(".slider").slider();

  $(".modal").modal();

  $(".datepicker").datepicker();

  $("textarea#textarea2").characterCounter();

  // ! ********************************************  LOGIN  **********************************************

  //  function capturar() {
  // 	function Persona(email, contraseña) {
  // 		this.email = email;
  // 		this.password = contraseña;
  // 	}

  // 	var mailCapturar = document.getElementById('username').value;
  // 	var contrasenaCapturar = document.getElementById('password').value;

  // 	persona1 = new Persona(mailCapturar, contrasenaCapturar);

  // 	obtener();
  // }

  // var baseDatosUsuarios = [];

  // function obtener() {
  // 	baseDatosUsuarios.push(persona1);
  // 	console.log(baseDatosUsuarios);
  // }

  // *******************************************  CREAR CUENTA  ******************************************
  // var nombreCapturar = document.getElementById('nombre');
  // nombreCapturar.addEventListener('change', function(){
  //  nom = nombreCapturar.value
  // })

  // var apellidoCapturar = document.getElementById('apellido');
  // apellidoCapturar.addEventListener('change', function(){
  // 	ape = apellidoCapturar.value
  // })

  // var mailCapturar = document.getElementById('email');
  // mailCapturar.addEventListener('change', function(){
  // 	mail = mailCapturar.value
  // })

  // var contrasenaCapturar = document.getElementById('contrasena');
  // contrasenaCapturar.addEventListener('change', function(){
  // 	contra = contrasenaCapturar.value
  // })

  // var baseDatos = [];
  // function agregar() {
  // function DatosUsuario(nombre, apellido, mail, contraseña) {
  // 	this.nombre = nombre;
  // 	this.apellido = apellido;
  // 	this.mail = mail;
  // 	this.contraseña = contraseña;
  // }

  // var usuario1 = new DatosUsuario(nom, ape, mail, contra);
  // baseDatos.push(usuario1);
  // console.log(baseDatos);
  // }
  //
  //
  // primer formulario
  // $("#form").submit(function (e) {

  //   e.preventDefault();

  //   const nombrePersona = $("#name").val().trim();

  //   const apellidoPersona = $("#lastname").val().trim();

  //   const datePersona = $("#date").val().trim();

  //   const mailPersona = $("#e-mail").val().trim();

  //   const passwordPersona = $("#password").val().trim();

  //   const phonePersona = $("#phone").val().trim();

  //   const textoPersona = $("#textarea2").val().trim();

  //   $("#envioForm").click(function () {

  //     $("#form").submit();
  //   });

  //   console.log(
  //     nombrePersona,
  //     apellidoPersona,
  //     datePersona,
  //     mailPersona,
  //     passwordPersona,
  //     phonePersona,
  //     textoPersona
  //   );
  // });

  // ? ***************************************  DECLARACION DE $ *******************************************

  // todo **************************************  FORMULARIO  ************************************************

  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");

  var button = document.getElementById("my-form-button");

  var status = document.getElementById("my-form-status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();

    button.style = "display: none ";

    status.innerHTML = "Gracias! Pronto nos pondremos en contacto.";
  }

  function error() {
    status.innerHTML = "Oops! Verifica bien los datos.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();

    var data = new FormData(form);

    ajax(form.method, form.action, data, success, error);
  });

  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();

    xhr.open(method, url);

    xhr.setRequestHeader("Accept", "application/json");

    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;

      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };

    xhr.send(data);
  }
});

// todo ----------------------------------------  PAGINA CREA  ---------------------------------------------

let fechaInicio;

document.addEventListener("DOMContentLoaded", cargaInicial);

function cargaInicial() {
  $.ajax({
    url: "db.json",

    success: function (data) {
      fechaInicio = data;

      diagramarSelect(data);

      renderfechainicio();

      renderCarrito();
    },

    // error: function (jqXHR, status, error) {
    //   console.log(jqXHR);

    //   console.log(`Error -> Status: ${status} - Error: ${error}`);
    // },
  });
}

var cursosElegir = $("#cursos");

const cargaCurso = document.querySelector('#cargaCurso');
let fechainicio;

function renderfechainicio() {
  fechaInicio.forEach((cursito) => {
    var miNodoCursito = $(document.createElement("div")).addClass("col s12 m4")
      .html(`

        <div class="card hoverable">

      <div class="card-image">
        <img class="materialboxed" src="${cursito.imagen}">
        <span class="card-title">TITULO</span>
      </div>

      <div class="card-content">
        <p>${cursito.nombre}</p>
      </div>

      <div class="card-content">
        <p>${cursito.inicia}</p>
      </div>

      <div class="card-action">
        <a href="#" onclick="agregarCarrito (${fechaInicio.indexOf(
          cursito
        )})">INICIAR</a>
      </div>
    </div>
        `);

    cursosElegir.append(miNodoCursito);
  });
}

renderfechainicio();

function agregarCarrito(index) {
  let productoDb = fechaInicio[index];

  if (carrito.length > 0) {
    var noExiste = true;

    for (var i = 0; i < carrito.length; i++) {
      if (productoDb.nombre === carrito[i].nombre) {
        carrito[i.cantidad++];

        noExiste = false;
      }
    }

    if (noExiste) {
      productoDb.cantidad = 1;

      carrito.push(productoDb);
    }
  } else {
    productoDb.cantidad = 1;

    carrito.push(productoDb);
  }

  renderCarrito();
  
  sumadorDePrecios()
  localStorage.carrito = JSON.stringify(carrito);
}

function renderCarrito (){
  localStorage.carrito = JSON.stringify(carrito);
  cargaCurso.innerHTML = "";

  if (carrito.length > 0) {
    carrito.forEach (element  => {
      cargaCurso.innerHTML += `

      <div>
      
      <h1>Felicitaciones, seleccionaste${element.nombre} </h1>

      <img src = "${element.imagen}">

      </div>

      `
    })     
  }
}


function  borrarCurso(index) {

  carrito[index].cantidad = carrito[index].cantidad - 1;

  if (carrito[index].cantidad <= 0) {
    carrito.splice(index, 1)
  }

  localStorage.carrito = JSON.stringify(carrito);

  renderCarrito ();
}

// 
// 
// 
// 
// 
const infoMeses = document.querySelector("#infoMeses");

const carrito = localStorage.carrito ? JSON.parse(localStorage.carrito) : [];

const total = 102000;

function diagramarSelect(fechaInicio) {
  let select = document.querySelector("#select");

  fechaInicio.forEach((fecha) => {
    let option = document.createElement("option");

    option.value = fechaInicio.indexOf(fecha);

    option.innerText = fecha.inicia;

    select.appendChild(option);
  });
}

function diagramameTabla(e) {
  infoMeses.innerHTML = "";

  const tabla = document.createElement("div");

  const fechaSplitteada = fechaInicio[e.target.value].inicia.split("/");

  tabla.innerHTML = `

  <div id="tabla">

  <a id="closeTable333" class="center waves-effect waves-light btn blue" href="cursos.html">Elegir curso</a>

  <table class="highlight centered responsive-table">
  <thead class="blue-text text-darken-1">
    <tr>
      <th>Día</th>
      <th>Mes</th>
      <th>Monto a Cobrar</th>
      <th><button onclick="ocultarTabla()"id="closeTable" class="waves-effect waves-light btn-floating blue right">
      <span aria-hidden="true">X</span></button></th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>${parseInt(fechaSplitteada[0]) + 9}</td>
      <td>${parseInt(fechaSplitteada[1])}</td>
      <td>$3000</td>
    </tr>

    <tr>
      <td>${parseInt(fechaSplitteada[0]) + 9}</td>
      <td>${parseInt(fechaSplitteada[1]) + 1}</td>
      <td>$3000</td>
    </tr>

    <tr>
      <td>${parseInt(fechaSplitteada[0]) + 9}</td>
      <td>${parseInt(fechaSplitteada[1]) + 2}</td>
      <td>$3000</td>
    </tr>

    <tr>
      <td>${parseInt(fechaSplitteada[0]) + 9}</td>
      <td>${parseInt(fechaSplitteada[1]) + 3}</td>
      <td>$0</td>
    </tr>

    <tr>
      <td>${parseInt(fechaSplitteada[0]) + 9}</td>
      <td>${parseInt(fechaSplitteada[1]) + 4}</td>
      <td>$63900</td>
    </tr>

    <tr>
      <td>${parseInt(fechaSplitteada[0]) + 9}</td>
      <td>${parseInt(fechaSplitteada[1]) + 5}</td>
      <td>$3000</td>
    </tr>

    <tr>
      <td>${parseInt(fechaSplitteada[0]) + 9}</td>
      <td>${parseInt(fechaSplitteada[1]) + 6}</td>
      <td>$3000</td>
    </tr>

    <tr>
      <td>${parseInt(fechaSplitteada[0]) + 9}</td>
      <td>${parseInt(fechaSplitteada[1]) + 7}</td>
      <td>$3000</td>
    </tr>

    <tr>
      <td>${parseInt(fechaSplitteada[0]) + 9}</td>
      <td>${parseInt(fechaSplitteada[1]) + 8}</td>
      <td>$3000</td>
    </tr>

    <tr>
      <td>${parseInt(fechaSplitteada[0]) + 9}</td>
      <td>${
        parseInt(fechaSplitteada[1]) + 9 > 12
          ? parseInt(fechaSplitteada[1]) + 9 - 12
          : parseInt(fechaSplitteada[1]) + 9
      }</td>
      <td>$3000</td>
    </tr>

    <tr>
      <td>${parseInt(fechaSplitteada[0]) + 9}</td>
      <td>${
        parseInt(fechaSplitteada[1]) + 10 > 12
          ? parseInt(fechaSplitteada[1]) + 10 - 12
          : parseInt(fechaSplitteada[1]) + 10
      }</td>
      <td>$3000</td>
    </tr>

    <tr>
      <td>${parseInt(fechaSplitteada[0]) + 9}</td>
      <td>${
        parseInt(fechaSplitteada[1]) + 11 > 12
          ? parseInt(fechaSplitteada[1]) + 11 - 12
          : parseInt(fechaSplitteada[1]) + 11
      }</td>
      <td>$3000</td>
    </tr>

  </tbody>
</table>
</div>

  `;

  localStorage.carrito = JSON.stringify(carrito);

  infoMeses.appendChild(tabla);
}

function ocultarTabla() {
  document.getElementById("tabla").style.display = "none";
}

const masInfo = document.querySelectorAll(".info");

const btnInfo = document.querySelector("#btnInfo");

diagramarSelect();
