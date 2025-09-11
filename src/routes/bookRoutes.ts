import { Router, Request, Response } from "express";
import { books, Book } from "../models/book";
import { validateBook } from "../middleware/validateBook";

const router = Router();


router.get("/", (req: Request, res: Response) => {
  res.status(200).json(books);
});


router.get("/:id", (req: Request, res: Response) => {
  const book = books.find(b => b.id === Number(req.params.id));
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.status(200).json(book);
});


router.post("/", validateBook, (req: Request, res: Response) => {
  const { title, year, authorId } = req.body;

  const newBook: Book = {
    id: books.length + 1,
    title,
    year,
    authorId
  };

  books.push(newBook);
  res.status(201).json(newBook);
});


router.put("/:id", validateBook, (req: Request, res: Response) => {
  const book = books.find(b => b.id === Number(req.params.id));
  if (!book) return res.status(404).json({ message: "Book not found" });

  book.title = req.body.title;
  book.year = req.body.year;
  book.authorId = req.body.authorId;

  res.status(200).json(book);
});


router.delete("/:id", (req: Request, res: Response) => {
  const index = books.findIndex(b => b.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Book not found" });

  const deleted = books.splice(index, 1);
  res.status(200).json(deleted[0]);
});

export default router;
