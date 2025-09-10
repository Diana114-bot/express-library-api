import express from "express";
import authorRoutes from "./routes/authorRoutes";

const app = express();
const PORT = 3000;


app.use(express.json());


app.use("/authors", authorRoutes);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send(" Welcome to the Library API! Use /authors to get started.");
});
