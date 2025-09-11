import { Router, Request, Response, NextFunction } from "express";
import { authors, Author } from "../models/author";

const router = Router();


router.get("/", (req: Request, res: Response) => {
  res.status(200).json(authors);
});


router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
  const author = authors.find(a => a.id === Number(req.params.id));
  if (!author) {
    const error: any = new Error("Author not found");
    error.status = 404;
    return next(error);
  }
  res.status(200).json(author);
});

router.post("/", (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  if (!name || typeof name !== "string") {
    const error: any = new Error("Name is required and must be a string");
    error.status = 400;
    return next(error);
  }

  const exists = authors.some(a => a.name === name);
  if (exists) {
    const error: any = new Error("Author already exists");
    error.status = 409;
    return next(error);
  }

  const newAuthor: Author = { id: authors.length + 1, name };
  authors.push(newAuthor);
  res.status(201).json(newAuthor);
});


router.put("/:id", (req: Request, res: Response, next: NextFunction) => {
  const author = authors.find(a => a.id === Number(req.params.id));
  if (!author) {
    const error: any = new Error("Author not found");
    error.status = 404;
    return next(error);
  }

  if (!req.body.name || typeof req.body.name !== "string") {
    const error: any = new Error("Name is required and must be a string");
    error.status = 400;
    return next(error);
  }

  author.name = req.body.name;
  res.status(200).json(author);
});


router.delete("/:id", (req: Request, res: Response, next: NextFunction) => {
  const index = authors.findIndex(a => a.id === Number(req.params.id));
  if (index === -1) {
    const error: any = new Error("Author not found");
    error.status = 404;
    return next(error);
  }

  const deleted = authors.splice(index, 1);
  res.status(200).json(deleted[0]);
});

export default router;
