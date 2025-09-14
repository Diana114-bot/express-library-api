import { Request, Response, NextFunction } from "express";

interface ApiError extends Error {
  status?: number;
}

export const errorHandler = (
  err: ApiError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(`[ERROR] ${err.message}`);

  const status = err.status || 500;
  const message = err.message || "Internal Server Error";

  res.status(status).json({ error: message });
};
