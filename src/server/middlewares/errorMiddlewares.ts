import { type NextFunction, type Request, type Response } from "express";
import CustomError from "../../CustomError/CustomError.js";

export const notFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new CustomError(404, "Enpoint not found");
  const { statusCode } = error;

  res.status(statusCode).json(req.body);

  next(error);
};
