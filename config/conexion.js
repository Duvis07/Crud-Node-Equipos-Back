const mysql = require("mysql");

const conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  port: 3306,
  database: "db_basico",
});

// Conectar a la base de datos
conexion.connect((error) => {
  if (error) {
    console.log("Error al conectarse a la base de datos");
  } else {
    console.log("🐧Conexion BD exitosa🐧");
  }
});

module.exports = conexion;
