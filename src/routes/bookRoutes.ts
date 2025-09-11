import { Router, Request, Response, NextFunction } from "express";
import { books, Book } from "../models/book";
import { validateBook } from "../middleware/validateBook";

const router = Router();


router.get("/", (req: Request, res: Response) => {
  res.status(200).json(books);
});


router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
  const book = books.find(b => b.id === Number(req.params.id));
  if (!book) {
    const error: any = new Error("Book not found");
    error.status = 404;
    return next(error);
  }
  res.status(200).json(book);
});


router.post("/", validateBook, (req: Request, res: Response, next: NextFunction) => {
  const { title, year, authorId } = req.body;

  const exists = books.some(b => b.title === title && b.authorId === authorId);
  if (exists) {
    const error: any = new Error("Book already exists for this author");
    error.status = 409;
    return next(error);
  }

  const newBook: Book = {
    id: books.length + 1,
    title,
    year,
    authorId
  };

  books.push(newBook);
  res.status(201).json(newBook);
});


router.put("/:id", validateBook, (req: Request, res: Response, next: NextFunction) => {
  const book = books.find(b => b.id === Number(req.params.id));
  if (!book) {
    const error: any = new Error("Book not found");
    error.status = 404;
    return next(error);
  }

  book.title = req.body.title;
  book.year = req.body.year;
  book.authorId = req.body.authorId;

  res.status(200).json(book);
});

router.delete("/:id", (req: Request, res: Response, next: NextFunction) => {
  const index = books.findIndex(b => b.id === Number(req.params.id));
  if (index === -1) {
    const error: any = new Error("Book not found");
    error.status = 404;
    return next(error);
  }

  const deleted = books.splice(index, 1);
  res.status(200).json(deleted[0]);
});

export default router;
