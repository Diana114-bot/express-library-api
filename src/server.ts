import express, { Request, Response } from "express";
import authorRoutes from "./routes/authorRoutes";
import bookRoutes from "./routes/bookRoutes";
import { logger } from "./middleware/logger";
import { errorHandler } from "./middleware/errorHandler";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

const app = express();
const PORT = 3000;


app.use(express.json());
app.use(logger);
app.use(helmet());


const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
app.use(limiter);


app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome to the Library API!" });
});


app.use("/authors", authorRoutes);
app.use("/books", bookRoutes);


app.use((req: Request, res: Response) => {
  res.status(404).json({ error: "Route not found" });
});


app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
