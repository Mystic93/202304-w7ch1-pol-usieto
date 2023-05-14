import { type NextFunction, type Request, type Response } from "express";
import createDebug from "debug";
import CustomError from "../../CustomError/CustomError.js";
import chalk from "chalk";

const debug = createDebug(
  "robotsdb-api:server/middlewares/errorMiddlewares.ts"
);

export const notFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new CustomError(404, "Enpoint not found");
  const { statusCode } = error;

  res.status(statusCode).json(req.body);

  next(error);
};

export const generalError = (
  error: CustomError,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const statusCode = error.statusCode || 500;

  const message = error.statusCode ? error.message : "Internal Server Error";

  debug(`Error: ${chalk.bgRed(error.statusCode)} ${chalk.red(error.message)}`);

  res.status(statusCode).json({ message });
};
