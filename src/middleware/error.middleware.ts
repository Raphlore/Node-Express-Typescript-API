import { Request, Response, NextFunction } from "express";
import httpException from "@/utils/interfaces/exceptions/http.exception";

function ErrorMiddleware(
  error: httpException,
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const status = error.status || 500;
  const message = error.message || "something went wrong";

  res.status(status).json({
    status,
    message,
  });
}

export default ErrorMiddleware;
