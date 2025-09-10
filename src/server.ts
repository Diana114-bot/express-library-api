import express, { Request, Response } from "express";
import authorRoutes from "./routes/authorRoutes";
import { logger } from "./middleware/logger";

const app = express();
const PORT = 3000;


app.use(express.json());
app.use(logger); 


app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: " Welcome to the Library API!" });
});


app.use("/authors", authorRoutes);

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Route not found" });
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
