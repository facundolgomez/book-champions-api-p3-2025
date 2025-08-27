import express from "express";
import { PORT } from "./config.js";
import bookRoutes from "./routes/books.routes.js";
import { sequelize } from "../db.js";
import { Book } from "./models/Book.js";
const app = express();

try {
  app.listen(PORT);
  app.use(bookRoutes);

  await sequelize.sync();

  console.log(`Servidor escuchando en puerto ${PORT}`);
} catch (error) {
  console.log("Hubo un error en la inicializacion");
}
