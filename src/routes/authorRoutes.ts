import { Router, Request, Response } from "express";
import { authors } from "../models/author";
import { books } from "../models/book";

const router = Router();

// GET /authors/:id/books with query support
router.get("/:id/books", (req: Request, res: Response) => {
  const authorId = Number(req.params.id);

  // Check if author exists
  const author = authors.find(a => a.id === authorId);
  if (!author) {
    return res.status(404).json({ message: "Author not found" });
  }

  // Get books by this author
  let result = books.filter(b => b.authorId === authorId);

  // 🔎 Filtering by year
  if (req.query.year) {
    result = result.filter(b => b.year === Number(req.query.year));
  }

  // 🔎 Searching by title
  if (req.query.search) {
    const search = (req.query.search as string).toLowerCase();
    result = result.filter(b => b.title.toLowerCase().includes(search));
  }

  // 🔎 Sorting
  if (req.query.sortBy) {
    const sortBy = req.query.sortBy as string;
    result.sort((a, b) => {
      if (sortBy === "title") return a.title.localeCompare(b.title);
      if (sortBy === "year") return a.year - b.year;
      return 0;
    });
  }

  // 🔎 Pagination
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 5;
  const start = (page - 1) * limit;
  const end = start + limit;
  const paginated = result.slice(start, end);

  res.status(200).json({
    author,
    total: result.length,
    page,
    limit,
    data: paginated
  });
});

export default router;
