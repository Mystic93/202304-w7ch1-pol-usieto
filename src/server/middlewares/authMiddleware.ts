import { type NextFunction, type Request, type Response } from "express";
import CustomError from "../../CustomError/CustomError.js";
import jwt from "jsonwebtoken";

export const auth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const autorizationHeader = req.header("Authorization");

    if (!autorizationHeader?.includes("Bearer")) {
      const error = new CustomError(401, "Missing token");
      throw error;
    }

    const token = autorizationHeader.replace("Bearer ", "");

    jwt.verify(token, process.env.JWT_SECRET!);
    next();
  } catch (error: unknown) {
    next(error);
  }
};
