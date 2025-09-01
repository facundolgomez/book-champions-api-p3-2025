import express from "express";
import { PORT } from "./config.js";
import router from "./routes/books.routes.js";
import { sequelize } from "../db.js";
import { Book } from "./models/Book.js";
const app = express();

try {
  app.use(express.json());
  app.listen(PORT);
  app.use(router);

  await sequelize.sync();

  console.log(`Servidor escuchando en puerto ${PORT}`);
} catch (error) {
  console.log("Hubo un error en la inicializacion");
}
