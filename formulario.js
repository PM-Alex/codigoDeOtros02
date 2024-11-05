// Se cambio #form -> form debido a que es una etiqueta y no un id
var formulario = document.querySelector("form")

formulario.onsubmit = function(e) {

  // Cambio e.prevent() -> e.preventDefault()
  e.preventDefault();
  
  var n = formulario.elements[0]
  // Se sustituye var e -> var edadInvitado debido a que e ya esta en uso
  var edadInvitado = formulario.elements[1]
  var na = formulario.elements[2]

  var nombre = n.value
  // Se sustituye e por edadInvitado
  var edad = edadInvitado.value

  var i = na.selectedIndex
  var nacionalidad = na.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    n.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    edadInvitado.classList.add("error")
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad)
  }
}

//Se omite el siguiente bloque de codigo para evitar crear botones de eliminar extra
// var botonBorrar = document.createElement("button")
// botonBorrar.textContent = "Eliminar invitado"
// botonBorrar.id = "boton-borrar"
// var corteLinea = document.createElement("br")
// document.body.appendChild(corteLinea)
// document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

var lista = document.getElementById("lista-de-invitados")

var elementoLista = document.createElement("div")
//Se cambia .added -> add
elementoLista.classList.add("elemento-lista")
lista.appendChild(elementoLista)

// Se omite el siguiente bloque de codigo ya que genera que 
// var spanNombre = document.createElement("span")
// var inputNombre = document.createElement("input")
// var espacio = document.createElement("br")
// spanNombre.textContent = "Nombre: "
// inputNombre.value = nombre 
// elementoLista.appendChild(spanNombre)
// elementoLista.appendChild(inputNombre)
// elementoLista.appendChild(espacio)

function crearElemento(descripcion, valor) {
  // Se cambia el nombre a las variables spanNombre -> spanElemento y inputNombre -> inputElemento
  var spanElemento = document.createElement("span");
  var inputElemento = document.createElement("input");
  var espacio = document.createElement("br");
  spanElemento.textContent = descripcion + ": ";
  inputElemento.value = valor;
  elementoLista.appendChild(spanElemento);
  elementoLista.appendChild(inputElemento);
  elementoLista.appendChild(espacio);
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}