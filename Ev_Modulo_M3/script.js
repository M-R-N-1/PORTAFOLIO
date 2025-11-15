// Fase 1: Se crean variables, el objeto recursos y el objeto nave con propiedades y métodos utilizando las variables

var nombreNave = "Discovery";
var distancia = 500;
var estadoMision = true;
var recursos = {
    agua: Math.floor((Math.random() * 100) + 1),
    comida: Math.floor((Math.random() * 100) + 1),
    energia: Math.floor((Math.random() * 100) + 1),
};

var nave = {
    nombreNave,
    modelo: "XLR8",
    tripulacion: [],
    estadoMision,
    mostrarEstado: function() {
        console.log(`¿La misión está operativa? ${this.estadoMision}`)
    },
    reportarRecursos: function() {
        console.log(`Los recursos disponibles son:\nAgua: ${recursos.agua}, Comida: ${recursos.comida}, Energía: ${recursos.energia}`)
    },
};

// Fase 2: Se crea arreglo tripulación y funciones para registrar tripulantes, eliminar el último ingreso y mostrar la tripulación

var tripulacion = [];
function registroTripulante(nombre, rol, nivelSalud) {
    tripulacion.push({"Nombre": nombre, "Rol": rol, "Salud": nivelSalud});
};

registroTripulante("Juan", "Capitan", Math.floor(Math.random() * 100) + 1);
registroTripulante("Jose", "Vice", Math.floor(Math.random() * 100) + 1);
registroTripulante("Paola", "Navegante", Math.floor(Math.random() * 100) + 1);

function eliminarUltimoTripulante() {
    tripulacion.pop();
};

eliminarUltimoTripulante();

function mostrarTripulacion() {
    console.log(tripulacion);
};

mostrarTripulacion();

// Fase 3: Se crea switch case con acciones que pueden aumentar o disminuir los recursos o el nivel de salud y generar un reporte

var opcion = "Reportar"
switch (opcion) {
  case "Explorar":
    for (let i = 0; i < tripulacion.length; i++) {
     let objeto = tripulacion[i];
     if (objeto.Salud > 0 && objeto.Salud <= 100){
      Math.round(objeto.Salud * 0.8);
    } else {
      console.log("No se puede realizar la exploración")
    };
  };
    if ((recursos.agua || recursos.comida || recursos.energia > 0) && (recursos.agua || recursos.comida || recursos.energia <= 100)){
      Math.round(recursos.agua * 0.9),
      Math.round(recursos.comida * 0.8),
      Math.round(recursos.energia * 0.7);
  } else {
    console.log("No se puede realizar la exploración");
  };
    break;
  case "Comer":
    for (let i = 0; i < tripulacion.length; i++) {
     let objeto = tripulacion[i];
     Math.round(objeto.Salud * 1.2);
    if (objeto.Salud > 0 && objeto.Salud <= 100){
     Math.round(objeto.Salud * 0.8);
  } else {
      console.log("No se puede realizar la acción");
    };
  };
    if ((recursos.comida > 0) && (recursos.comida <= 100)){
      Math.round(recursos.comida * 0.8);
    } else {
      console.log("No se puede realizar la acción");
    };
    break;
  case "Descansar":
    for (let i = 0; i < tripulacion.length; i++) {
     let objeto = tripulacion[i];
     if (objeto.Salud > 0 && objeto.Salud <= 100){
      Math.round(objeto.Salud * 1.2);
  } else {
      console.log("No se puede realizar la acción");
    };
  };
    if ((recursos.energia > 0) && (recursos.energia <= 100)){
      Math.round(recursos.energia * 1.2);
    } else {
      console.log("No se puede realizar la acción");
    };
    break;
  case "Reportar":
    console.log(`Los recursos disponibles y el nivel de salud son:`);
    console.log(recursos);
    for (let i = 0; i < tripulacion.length; i++) {
     let objeto = tripulacion[i];
     console.log(`${objeto.Nombre}: ${objeto.Salud} puntos de salud`);
    };
    break;
  default:
    console.log(`Ingrese una opción válida`);
};

// Fase 4: Se crean funciones para calcular promedio de tripulación, cantidad de tripulantes con salud menor a 50 y mostrar recursos 

function promedioSalud(){
  let sumaSalud = 0;
  for (let i = 0; i < tripulacion.length; i++) {
     const objeto = tripulacion[i];
     sumaSalud += objeto.Salud;    
  };
  return console.log(`\nEl promedio de salud es: ${sumaSalud / tripulacion.length}`);
};

promedioSalud();

function saludMenor50(){
  let cantidadSaludMenor50 = 0;
  for (let i = 0; i < tripulacion.length; i++) {
     const objeto = tripulacion[i];
     if (objeto.Salud < 50) {
     cantidadSaludMenor50 ++; 
     };
  };
  return console.log(`\nLa cantidad de tripulantes con salud menor a 50 es: ${cantidadSaludMenor50}`);
};

saludMenor50();

function estadoRecursos(){
  console.log(`\nEl estado de los recursos es:`);
  console.log(recursos);
};

estadoRecursos();