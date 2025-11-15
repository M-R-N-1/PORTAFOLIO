const listaTareas = document.getElementById('lista-tareas');
const nuevaTareaInput = document.getElementById('nueva-tarea');
const agregarTareaBtn = document.getElementById('agregar-tarea');

agregarTareaBtn.addEventListener('click', agregarTarea);

function agregarTarea() {
  const textoTarea = nuevaTareaInput.value;
  if (textoTarea.trim() !== '') {
    const nuevoItem = document.createElement('li');
    nuevoItem.classList.add('list-group-item');
    nuevoItem.textContent = textoTarea;

    function crearId() {
      const numeroId = document.createElement('p');
      numeroId.textContent = "Id: " + (Math.floor(Math.random() * (1000 - 1)) + 1);
      nuevoItem.appendChild(numeroId);
    };

    function verHorario() {
      const horario = document.createElement('p');
      horario.textContent = Date();
      nuevoItem.appendChild(horario);
    };

    function eliminarTarea() {
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.classList.add('btn', 'btn-outline-danger', 'border', 'border-white');
    botonEliminar.addEventListener('click', function() {
      listaTareas.removeChild(nuevoItem);
    }
  );
    nuevoItem.appendChild(botonEliminar);
  };
    crearId();
    verHorario();
    eliminarTarea();
    listaTareas.appendChild(nuevoItem);
    nuevaTareaInput.value = '';
  }
};