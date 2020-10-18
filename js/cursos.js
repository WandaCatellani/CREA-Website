// var cursosElegir = $("#cursos");

// const cargaCurso = document.querySelector('#cargaCurso');
// let fechainicio;

// function renderfechainicio() {
//   fechaInicio.forEach((cursito) => {
//     var miNodoCursito = $(document.createElement("div")).addClass("col s12 m4")
//       .html(`

//         <div class="card hoverable">

//       <div class="card-image">
//         <img class="materialboxed" src="${cursito.imagen}">
//         <span class="card-title">TITULO</span>
//       </div>

//       <div class="card-content">
//         <p>${cursito.nombre}</p>
//       </div>

//       <div class="card-content">
//         <p>${cursito.inicia}</p>
//       </div>

//       <div class="card-action">
//         <a href="#" onclick="agregarCarrito (${fechaInicio.indexOf(
//           cursito
//         )})">INICIAR</a>
//       </div>
//     </div>
//         `);

//     cursosElegir.append(miNodoCursito);
//   });
// }

// renderfechainicio();

// function agregarCarrito(index) {
//   let productoDb = fechaInicio[index];

//   if (carrito.length > 0) {
//     var noExiste = true;

//     for (var i = 0; i < carrito.length; i++) {
//       if (productoDb.nombre === carrito[i].nombre) {
//         carrito[i.cantidad++];

//         noExiste = false;
//       }
//     }

//     if (noExiste) {
//       productoDb.cantidad = 1;

//       carrito.push(productoDb);
//     }
//   } else {
//     productoDb.cantidad = 1;

//     carrito.push(productoDb);
//   }

//   renderCarrito();
  
//   sumadorDePrecios()
//   localStorage.carrito = JSON.stringify(carrito);
// }

// function renderCarrito (){
//   localStorage.carrito = JSON.stringify(carrito);
//   cargaCurso.innerHTML = "";

//   if (carrito.length > 0) {
//     carrito.forEach (element  => {
//       cargaCurso.innerHTML += `
//       <div> 
//       <h1>Felicitaciones, seleccionaste${element.nombre} </h1>

//       <img src = "${element.imagen}">
//       </div>

//       `
//     })     
//   }
// }


// function  borrarCurso(index) {

//   carrito[index].cantidad = carrito[index].cantidad - 1;

//   if (carrito[index].cantidad <= 0) {
//     carrito.splice(index, 1)
//   }

//   localStorage.carrito = JSON.stringify(carrito);

//   renderCarrito ();
// }