import { Router, Request, Response } from "express";
import { authors, Author } from "../models/author";

const router = Router();


router.get("/", (req: Request, res: Response) => {
  res.json(authors);
});


router.get("/:id", (req: Request, res: Response) => {
  const author = authors.find(a => a.id === Number(req.params.id));
  if (!author) {
    return res.status(404).json({ message: "Author not found" });
  }
  res.json(author);
});

router.post("/", (req: Request, res: Response) => {
  const { name, bio } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  const newAuthor: Author = {
    id: authors.length + 1,
    name,
    bio
  };

  authors.push(newAuthor);
  res.status(201).json(newAuthor);
});


router.put("/:id", (req: Request, res: Response) => {
  const author = authors.find(a => a.id === Number(req.params.id));
  if (!author) {
    return res.status(404).json({ message: "Author not found" });
  }

  author.name = req.body.name ?? author.name;
  author.bio = req.body.bio ?? author.bio;

  res.json(author);
});


router.delete("/:id", (req: Request, res: Response) => {
  const index = authors.findIndex(a => a.id === Number(req.params.id));
  if (index === -1) {
    return res.status(404).json({ message: "Author not found" });
  }

  const deleted = authors.splice(index, 1);
  res.json(deleted[0]);
});

export default router;
