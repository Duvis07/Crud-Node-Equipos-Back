const express = require("express");
 require("./config/conexion");
const port = (process.env.port || 8080);

//se llama una instancia de express
const app = express();

//permite recibir datos de tipo json
app.use(express.json());


//configuraciones del puerto
app.set("port", port);


//ruta principal de la app
app.use("/api", require("./rutas/rutas"));

//inicializacion del servidor de express
app.listen(app.get("port"), () => {
  console.log(`Servidor corriendo en el puerto ${app.get("port")}`);
});