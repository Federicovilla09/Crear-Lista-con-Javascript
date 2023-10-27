const div = document.getElementById("contenedorDiv");

div.innerHTML = `
  <form action="" id="formulario">
    <label>Nombre</label>
    <input type="text" name="nombre" id="inputNombre" placeholder="Agregar tu nombre">
    <button type="button" id="boton">Agregar</button>
  </form>
  <ul id="ulLista"></ul>
  `;

document.body.appendChild(div);

const botonAgregar = document.getElementById("boton");
const input = document.getElementById("inputNombre");
const ul = document.getElementById("ulLista");
botonAgregar.addEventListener("click", crearLista)

function crearLista() {
  const nombreAgregado = input.value;
  if (nombreAgregado) {
    const listaNombre = document.createElement("li");
    listaNombre.textContent = nombreAgregado;
    ul.appendChild(listaNombre);
    input.value = "";
  }
}

