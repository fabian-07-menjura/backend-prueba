import express from "express";
import morgan from "morgan";
import { db } from "./config/db";
import rutas from "./rutas/rutas";
import path from "path";

async function conectDB() {
  try {
    await db.authenticate();
    db.sync();
    console.log("conexion exitosa a la base de datos");
  } catch (err) {
    console.log("A OCURRIDO UN ERR EN LA CONEXION", err);
  }
}
conectDB();
const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use("/tienda", rutas);

app.use("/public", express.static(path.join(__dirname, "../public")));

export default app;
