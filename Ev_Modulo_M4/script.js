// Fase 1: Configuración de clases y objetos

class Tarea {
  constructor(id, titulo, descripcion, completa) {
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.completa = completa;
  }

  mostrarDetalles() {
    console.log(
      `Detalle = ID:${this.id}, título: ${this.titulo}, descripción: ${this.descripcion}, estado: ${this.completa}`
    );
  }
}

class ListaTareas {
  constructor() {
    this.tareas = [];
  }

  agregarTarea(tarea) {
    this.tareas.push(tarea);
  }

  eliminarTarea(id) {
    if (id >= 0 && id < this.miArray.length) {
      this.miArray.splice(id, 1);
    } else {
      console.error("Índice fuera de rango");
    }
  }

  marcarComoCompletada(id) {
    if (id >= 0 && id < this.tareas.length) {
      this.tareas[id].completa = true;
    } else {
      console.log("Índice fuera de rango");
    }
  }

  mostrarTareas() {
    console.log(this.tareas);
  }
}

// Fase 2: Interacción con el DOM y manejo de eventos

const listaTareas = document.getElementById("lista-tareas");
const nuevaTareaInput = document.getElementById("nueva-tarea");
const nuevaDescripcionInput = document.getElementById("nueva-descripcion");
const agregarTareaBtn = document.getElementById("agregar-tarea");

agregarTareaBtn.addEventListener("click", agregarTarea);

function agregarTarea() {
  const textoTarea = nuevaTareaInput.value;
  if (textoTarea.trim() !== "") {
    const nuevoItem = document.createElement("li");
    nuevoItem.classList.add("list-group-item");
    nuevoItem.textContent = textoTarea;

    const textoDescripcion = document.createElement("p");
    textoDescripcion.textContent =
      "Descripción: " + nuevaDescripcionInput.value;
    nuevoItem.appendChild(textoDescripcion);

    function crearId() {
      const numeroId = document.createElement("p");
      numeroId.textContent =
        "Id: " + (Math.floor(Math.random() * (100 - 1)) + 1);
      nuevoItem.appendChild(numeroId);
    }

    function eliminarTarea() {
      const botonEliminar = document.createElement("button");
      botonEliminar.textContent = "Eliminar";
      botonEliminar.classList.add(
        "btn",
        "btn-outline-danger",
        "border",
        "border-white"
      );
      botonEliminar.addEventListener("click", function () {
        listaTareas.removeChild(nuevoItem);
      });
      nuevoItem.appendChild(botonEliminar);
    }

    function marcarTarea() {
      const botonMarcar = document.createElement("input");
      botonMarcar.type = "checkbox";
      const label = document.createElement("label");
      label.htmlFor = "myCheckbox";
      label.textContent = "Tarea completa";
      botonMarcar.addEventListener("change", function () {
        if (this.checked) {
          console.log("Tarea completa");
        } else {
          console.log("Tarea no realizada");
        }
      });
      nuevoItem.appendChild(botonMarcar);
      nuevoItem.appendChild(label);
    }

    crearId();
    marcarTarea();
    eliminarTarea();
    listaTareas.appendChild(nuevoItem);
    nuevaTareaInput.value = "";
    nuevaDescripcionInput.value = "";
  }
}
