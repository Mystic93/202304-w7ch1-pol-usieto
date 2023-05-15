import { type JwtPayload } from "jsonwebtoken";
import CustomError from "../../../CustomError/CustomError.js";
import User from "../../../database/models/User";
import bcrypt from "bcryptjs";
import { type Response, type NextFunction, type Request } from "express";
import jwt from "jsonwebtoken";

const loginUser = async (
  req: Request<
    Record<string, unknown>,
    Record<string, unknown>,
    { username: string; password: string }
  >,
  res: Response,
  next: NextFunction
) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username, password }).exec();

    if (!user) {
      const customError = new CustomError(401, "Wrong credentials");

      throw customError;
    }

    if (!(await bcrypt.compare(password, user.password))) {
      const customError = new CustomError(401, "Wrong credentials");

      throw customError;
    }

    const tokenPayload: JwtPayload = {
      sub: user._id.toString(),
      name: user.username,
    };

    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET!);
    res.status(200).json({ token });
  } catch (error: unknown) {
    next(error);
  }
};

export default loginUser;
