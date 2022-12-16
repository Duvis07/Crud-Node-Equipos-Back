const conexion = require("../config/conexion");

const rutas = require("express").Router();

//asignacion de rutas a la app de express

//GET - obtener equipos de la base de datos
rutas.get("/", (req, res) => {
  let sql = "SELECT * FROM tb_equipo";
  conexion.query(sql, (error, rows, fields) => {
    if (error) throw error;
    else {
      res.json(rows);
    }
  });
});

//GET - obtener un equipo de la base de datos por id
rutas.get("/:id", (req, res) => {
  const { id } = req.params;
  let sql = "SELECT * FROM tb_equipo WHERE id_equipo = ?";
  conexion.query(sql, [id], (error, rows, fields) => {
    if (error) throw error;
    else {
      res.json(rows);
    }
  });
});

//POST - insertar un equipo en la base de datos
rutas.post("/", (req, res) => {
  const { nombre, descripcion, logo } = req.body;

  let sql = `insert into tb_equipo(nombre, descripcion, logo) values('${nombre}','${descripcion}','${logo}')`;
  conexion.query(sql, (error, rows, fields) => {
    if (error) throw error;
    else {
      res.json({ status: "equipo insertado correctamente" });
    }
  });
});

//DELETE - eliminar un equipo en la base de datos
rutas.delete("/:id", (req, res) => {
  const { id } = req.params;
  let sql = "DELETE FROM tb_equipo WHERE id_equipo = ?";
  conexion.query(sql, [id], (error, rows, fields) => {
    if (error) throw error;
    else {
      res.json({ status: "equipo eliminado correctamente" });
    }
  });
});

//PUT - actualizar un equipo en la base de datos
rutas.put("/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, logo, descripcion } = req.body;

  let sql = `UPDATE tb_equipo SET nombre = '${nombre}', logo = '${logo}', descripcion = '${descripcion}'  
   WHERE id_equipo = ${id}`;
  conexion.query(sql, (error, rows, fields) => {
    if (error) throw error;
    else {
      res.json({ status: "equipo actualizado correctamente" });
    }
  });
});

//exportacion de rutas para ser utilizadas en index.js
module.exports = rutas;
