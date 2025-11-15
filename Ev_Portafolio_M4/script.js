class Producto {
  constructor(id, nombre, precio, categoria, descripcion) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    this.descripcion = descripcion;
  }

  mostrarDetalles = () => {
    const { nombre, precio, categoria, descripcion } = this;
    console.log(
      `Producto: ${nombre}, precio: ${precio}, categoria: ${categoria}, detalle: ${descripcion}`
    );
  };
}

class ListaProductos {
  constructor() {
    this.productos = [];
  }

  agregarTarea = (productoNuevo) => {
    this.productos.push(productoNuevo);
  };

  marcarComoCompletada = (id) => {
    if (id >= 0 && id < this.tareas.length) {
      this.productos[id].completa = true;
    } else {
      console.log("Índice fuera de rango");
    }
  };

  mostrarProductos = () => {
    console.log(this.productos);
  };
}

const listaProductos = document.getElementById("lista-productos");
const nuevoProductoInput = document.getElementById("nuevo-producto");
const nuevaDescripcionInput = document.getElementById("nueva-descripcion");
const agregarProductoBtn = document.getElementById("agregar-producto");

agregarProductoBtn.addEventListener("click", agregarProducto);

function agregarProducto() {
  const textoProducto = nuevoProductoInput.value;
  if (textoProducto.trim() !== "") {
    const nuevoItem = document.createElement("li");
    nuevoItem.classList.add("list-group-item");
    nuevoItem.textContent = textoProducto;

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

    function eliminarProducto() {
      const botonEliminar = document.createElement("button");
      botonEliminar.textContent = "Eliminar";
      botonEliminar.classList.add(
        "btn",
        "btn-outline-danger",
        "border",
        "border-white"
      );
      botonEliminar.addEventListener("click", function () {
        listaProductos.removeChild(nuevoItem);
      });
      nuevoItem.appendChild(botonEliminar);
    }

    function marcarProducto() {
      const botonMarcar = document.createElement("input");
      botonMarcar.type = "checkbox";
      const label = document.createElement("label");
      label.htmlFor = "myCheckbox";
      label.textContent = "Producto agregado";
      botonMarcar.addEventListener("change", function () {
        if (this.checked) {
          console.log("Producto agregado");
        } else {
          console.log("Producto no agregado");
        }
      });
      nuevoItem.appendChild(botonMarcar);
      nuevoItem.appendChild(label);
    }

    crearId();
    marcarProducto();
    eliminarProducto();
    listaProductos.appendChild(nuevoItem);
    nuevoProductoInput.value = "";
    nuevaDescripcionInput.value = "";
  }
}

async function buscarProductos() {
  try {
    const response = await fetch(`https://api.escuelajs.co/api/v1/products`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

let buscador = document.getElementById("listado-productos");
buscador.addEventListener("click", buscarProductos());
