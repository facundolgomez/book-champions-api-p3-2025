import { Router } from "express";
import { Book } from "../models/Book.js";

const router = Router();

router.get("/books", async (req, res) => {
  const books = await Book.findAll();
  res.json(books);
});

router.get("/books/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Obteniendo libro con el id ${id} `);
});

router.post("/books", (req, res) => {
  res.send("Creando libro");
});

router.put("/books/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Actualizando libro con id ${id}`);
});

router.delete("/books/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Borrando libro con id: ${id}`);
});
export default router;
