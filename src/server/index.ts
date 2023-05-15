import express from "express";
import morgan from "morgan";
import { generalError, notFound } from "./middlewares/errorMiddlewares.js";
import robotsRouter from "./router/robotsRouter.js";
import userRouter from "./router/userRouter.js";

const app = express();
app.disable("x-powered-by");

app.use(express.json());

app.use(morgan("dev"));

app.use("/user", userRouter);

app.use("/robots", robotsRouter);

app.use(notFound);

app.use(generalError);

export default app;
