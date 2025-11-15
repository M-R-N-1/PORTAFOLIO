const sequelize = require("./config/db");
const {
  createUsuario,
  getAllUsuarios,
  getUsuarioById,
  updateUsuario,
  deleteUsuario,
} = require("./controllers/usuario.controllers");
const {
  createRol,
  getAllRoles,
  getRolById,
  updateRol,
  deleteRol,
} = require("./controllers/rol.controllers");
const { Usuario, Rol } = require("./models/tables");

//Ejemplos de transacciones
const main = async () => {
  try {
    await sequelize.sync({
      force: true,
      alter: true,
    });
    console.log("Todos los modelos fueron sincronizados correctamente.");
    const result = await createUsuario({
      nombre: "Usuario 1",
      email: "usuario1@email.com",
      password: "password",
    });
    console.log(result);
    console.log("Usuario creado correctamente.");
    console.log(await getAllUsuarios());
    console.log(await getUsuarioById(1));
    console.log(await updateUsuario(1, { nombre: "Usuario_1" }));
    console.log(await deleteUsuario(1));
  } catch (error) {
    console.error("Error al sincronizar los modelos:", error);
  }
};

main();

process.on("uncaughtException", async (err) => {
  console.error("Error no controlado:", err);
  const logs = JSON.parse(await fs.readFile("./logs.json", "utf-8"));
  logs.push({ error: err.message, timestamp: new Date() });
  await fs.writeFile("./logs.json", JSON.stringify(logs, null, 2));
});
