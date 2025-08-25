import express from "express";
import { PORT } from "./config.js";
import bookRoutes from "./routes/books.routes.js";

const app = express();

app.listen(PORT);

app.use(bookRoutes);

console.log(`Servidor escuchando en puerto ${PORT}`);
