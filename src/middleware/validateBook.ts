import { Request, Response, NextFunction } from "express";
import { authors } from "../models/author";

export const validateBook = (req: Request, res: Response, next: NextFunction) => {
  const { title, year, authorId } = req.body;

  if (!title || typeof title !== "string") {
    return res.status(400).json({ message: "Title is required and must be a string" });
  }

  if (!year || typeof year !== "number") {
    return res.status(400).json({ message: "Year is required and must be a number" });
  }

  if (!authorId || typeof authorId !== "number") {
    return res.status(400).json({ message: "authorId is required and must be a number" });
  }

  const authorExists = authors.some(a => a.id === authorId);
  if (!authorExists) {
    return res.status(400).json({ message: "Invalid authorId, author not found" });
  }

  next();
};
