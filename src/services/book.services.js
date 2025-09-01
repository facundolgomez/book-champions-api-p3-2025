import { Router } from "express";
import { Book } from "../models/Book.js";

export const findBooks = async (req, res) => {
  const books = await Book.findAll();
  res.json(books);
};

export const findBook = async (req, res) => {
  const { id } = req.params;

  const book = await Book.findByPk(id);

  if (!book) {
    return res.status(404).send({ message: "Libro no encontrado" });
  }
  res.json(book);
};

export const createBook = async (req, res) => {
  const { title, author, rating, pageCount, summary, imageUrl, available } =
    req.body;

  if (!title || !author) {
    res
      .status(400)
      .send({ message: "Los campos titulo y autor son requeridos" });
  }

  const newBook = await Book.create({
    title,
    author,
    rating,
    pageCount,
    summary,
    imageUrl,
    available,
  });
  res.json(newBook);
};

export const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, rating, pageCount, summary, imageUrl, available } =
    req.body;

  if (!title || !author) {
    res
      .status(400)
      .send({ message: "Los campos titulo y autor son requeridos" });
  }

  const book = await Book.findByPk(id);

  if (!book) {
    return res.status(404).send({ message: "Libro no encontrado" });
  }

  await book.update({
    title,
    author,
    rating,
    pageCount,
    summary,
    imageUrl,
    available,
  });

  await book.save();

  res.json(book);
};

export const deleteBook = async (req, res) => {
  const { id } = req.params;
  const book = await Book.findByPk(id);

  if (!book) {
    return res.status(404).send({ message: "Libro no encontrado" });
  }
  await book.destroy();

  res.send(`El libro con el id: ${id} se ha eliminado`);
};
