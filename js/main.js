/* JQUERY - BUTTONS SOCIAL & IMGS ZOOM  
-------------------------------------------------- */
$(document).ready(function () {
  const toggle = $("#toggle");
  const instagram = $("#instagram");
  const youtube = $("#youtube");
  const linkedin = $("#linkedin");

  toggle.click(function () {
    instagram.toggle(1000);
    youtube.toggle(1000);
    linkedin.toggle(1000);
  });
});

/* FORM INSCRIP
-------------------------------------------------- */
const inscripcion = document.querySelector("#inscripcion");
const formDatos = document.querySelector("#formDatos");
document.addEventListener("DOMContentLoaded", cargaInicial);

//! MOSTRAR U OCULTAR FORM
let displayForm = false;
inscripcion.addEventListener("click", function (e) {
  e.preventDefault();

  if (displayForm === false) {
    document.getElementById("formDatos").style.display = "block";
    formDatos.classList.add("animate__animated", "animate__zoomIn");
    return (displayForm = true);
  } else {
    document.getElementById("formDatos").style.display = "none";
    return (displayForm = false);
  }
});

let cursos = document.querySelector("#cursos");
let cursosDisponibles;
let cursoSeleccionado;

//! CREAR OPCIONES EN EL SELECT DEL FORM
function crearCursos(cursosDisponibles) {
  cursosDisponibles.forEach((curso) => {
    let option = document.createElement("option");
    option.value = cursosDisponibles.indexOf(curso);
    option.innerHTML = curso.nombre;
    cursos.appendChild(option);
  });
}

//! CARGAR LAS OPCIONES EN EL SELECT DEL FORM
function cargaInicial() {
  $.ajax({
    url: "db.json",
    success: function (data) {
      cursosDisponibles = data;
      crearCursos(data);
    },
    error: function (error) {
      console.log(error);
    },
  });
}

//! OBTENER EL VALOR ELEGIDO DEL SELECT DEL FORM
cursos.addEventListener("change", (e) => {
  cursoSeleccionado = e.target.value;
});

//! CREACION DEL MODAL - TABLA
const cobroMeses = document.querySelector("#cobroMeses");
cobroMeses.addEventListener("click", () =>
  createModalWithTable(cursosDisponibles[cursoSeleccionado])
);

function createModalWithTable(curso) {
  if (curso) {
    const modal = document.createElement("div");
    modal.setAttribute("id", "mesesModal");
    modal.classList.add(
      "modal",
      "fade",
      "animate__animated",
      "animate__zoomIn"
    );
    modal.setAttribute("tabindex", "-1");
    modal.setAttribute("aria-labelledby", "mesesModalLabel");
    modal.setAttribute("aria-hidden", "true");
    document.body.appendChild(modal);

    const modalDialog = document.createElement("div");
    modalDialog.classList.add("modal-dialog", "modal-dialog-centered");

    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    const modalHeader = document.createElement("div");
    modalHeader.classList.add("modal-header");
    const titulo = document.createElement("h3");
    titulo.innerText = "Cobro de Meses";
    titulo.classList.add("modal-title", "text-info");
    titulo.setAttribute("id", "mesesModalLabel");
    const btnHeader = document.createElement("button");
    btnHeader.setAttribute("type", "button");
    btnHeader.classList.add("close");
    btnHeader.setAttribute("data-dismiss", "modal");
    btnHeader.setAttribute("aria-label", "Close");
    const span = document.createElement("span");
    span.setAttribute("aria-hidden", "true");
    span.innerHTML = "&times;";

    modalHeader.appendChild(titulo);
    btnHeader.appendChild(span);
    modalHeader.appendChild(btnHeader);

    const modalBody = document.createElement("div");
    modalBody.setAttribute("id", "tabla");
    modalBody.classList.add("modal-body");

    const tabla = document.createElement("table");
    tabla.classList.add("table", "table-hover", "table-responsive-md");

    const fechaSplitteada = curso.inicia.split("/");

    tabla.innerHTML = `
    
        <thead>
        <tr class="encabezado">
            <th scope="col">Día</th>
            <th scope="col">Mes</th>
            <th scope="col">Monto a Cobrar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">${parseInt(fechaSplitteada[0]) + 9}</td>
            <td>${parseInt(fechaSplitteada[1])}</td>
            <td>$3600</td>
          </tr>
          <tr>
          <td scope="row">${parseInt(fechaSplitteada[0]) + 9}</td>
            <td>${parseInt(fechaSplitteada[1]) + 1}</td>
            <td>$3600</td>
            </tr>
          <tr>
            <td scope="row">${parseInt(fechaSplitteada[0]) + 9}</td>
            <td>${parseInt(fechaSplitteada[1]) + 2}</td>
            <td>$3600</td>
            </tr>
          <tr>
            <td scope="row">${parseInt(fechaSplitteada[0]) + 9}</td>
            <td>${parseInt(fechaSplitteada[1]) + 3}</td>
            <td>$0</td>
            </tr>
          <tr>
            <td scope="row">${parseInt(fechaSplitteada[0]) + 9}</td>
            <td>${parseInt(fechaSplitteada[1]) + 4}</td>
            <td>$63900</td>
            </tr>
          <tr>
            <td scope="row">${parseInt(fechaSplitteada[0]) + 9}</td>
            <td>${parseInt(fechaSplitteada[1]) + 5}</td>
            <td>$3600</td>
          </tr>
          <tr>
          <td scope="row">${parseInt(fechaSplitteada[0]) + 9}</td>
            <td>${parseInt(fechaSplitteada[1]) + 6}</td>
            <td>$3600</td>
            </tr>
          <tr>
            <td scope="row">${parseInt(fechaSplitteada[0]) + 9}</td>
            <td>${parseInt(fechaSplitteada[1]) + 7}</td>
            <td>$3600</td>
          </tr>
          <tr>
          <td scope="row">${parseInt(fechaSplitteada[0]) + 9}</td>
            <td>${parseInt(fechaSplitteada[1]) + 8}</td>
            <td>$3600</td>
          </tr>
          <tr>
            <td scope="row">${parseInt(fechaSplitteada[0]) + 9}</td>
            <td>${
              parseInt(fechaSplitteada[1]) + 9 > 12
                ? parseInt(fechaSplitteada[1]) + 9 - 12
                : parseInt(fechaSplitteada[1]) + 9
            }</td>
            <td>$3600</td>
            </tr>
          <tr>
            <td scope="row">${parseInt(fechaSplitteada[0]) + 9}</td>
            <td>${
              parseInt(fechaSplitteada[1]) + 10 > 12
                ? parseInt(fechaSplitteada[1]) + 10 - 12
                : parseInt(fechaSplitteada[1]) + 10
            }</td>
            <td>$3600</td>
          </tr>
          <tr>
            <td scope="row">${parseInt(fechaSplitteada[0]) + 9}</td>
            <td>${
              parseInt(fechaSplitteada[1]) + 11 > 12
                ? parseInt(fechaSplitteada[1]) + 11 - 12
                : parseInt(fechaSplitteada[1]) + 11
            }</td>
            <td>$3600</td>
          </tr>
        </tbody>

    `;

    modal.appendChild(modalDialog);
    modalDialog.appendChild(modalContent);
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalBody.appendChild(tabla);
  } else {
    alertCurso();
  }
}

// ! SWEETALERT
function alertCurso() {
  Swal.fire({
    icon: "error",
    title: '<span id="alert">Selecciona un curso</span>',
    confirmButtonText: "De acuerdo",
  });
}

//! CAPTO EL VALOR DE DATOS PERSONALES
document.getElementById("envioInsc").addEventListener("click", function (e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const mail = document.getElementById("mail").value;


  const data = {
    nombre: nombre,
    apellido: apellido,
    mail: mail,
    curso: cursosDisponibles[cursoSeleccionado],
  };
  
  localStorage.data = JSON.stringify(data);
  openModal(data);
});


function openModal(data) {
  console.log(data);

  const modal = document.createElement("div");
  modal.setAttribute("id", "dataModal");
  modal.classList.add(
    "modal",
    "fade",
    "animate__animated",
    "animate__backInDown"
  );
  modal.setAttribute("tabindex", "-1");
  modal.setAttribute("aria-labelledby", "dataModalLabel");
  modal.setAttribute("aria-hidden", "true");
  document.body.appendChild(modal);

  const modalDialog = document.createElement("div");
  modalDialog.classList.add("modal-dialog", "modal-dialog-centered", "modal-lg");

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  const modalHeader = document.createElement("div");
  modalHeader.classList.add("modal-header");
  const titulo = document.createElement("h3");
  titulo.innerText = "¡Gracias por inscribirte!";
  titulo.classList.add("modal-title", "text-info");
  titulo.setAttribute("id", "dataModalLabel");
  const btnHeader = document.createElement("button");
  btnHeader.setAttribute("type", "button");
  btnHeader.classList.add("close");
  btnHeader.setAttribute("data-dismiss", "modal");
  btnHeader.setAttribute("aria-label", "Close");
  const span = document.createElement("span");
  span.setAttribute("aria-hidden", "true");
  span.innerHTML = "&times;";

  modalHeader.appendChild(titulo);
  btnHeader.appendChild(span);
  modalHeader.appendChild(btnHeader);

  const modalBody = document.createElement("div");
  modalBody.setAttribute("id", "descripcion_gral");
  modalBody.classList.add("modal-body", "container");

  const descripcion = document.createElement("div");
  descripcion.classList.add("col-12", "datos-inscrip");

  descripcion.innerHTML = `
  
  <section class="nom-ap">
    ${data.nombre}  ${data.apellido}
  </section>

  <div class="mail">${data.mail}</div>

  <section class="curso-selec">
  ${data.curso.inicia}  ${data.curso.nombre}
  </section>

  <div>
    <button type="button" class="btn btn-outline-info btn-mas-cursos">Más Cursos</button>
  </div>

  `;

  modal.appendChild(modalDialog);
  modalDialog.appendChild(modalContent);
  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modalBody.appendChild(descripcion);
}

