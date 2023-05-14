import express from "express";
import morgan from "morgan";
import { generalError } from "./middlewares/errorMiddlewares.js";
import robotsRouter from "./router/robotsRouter.js";

const app = express();
app.disable("x-powered-by");

app.use(express.json());

app.use(morgan("dev"));

app.use("/robots", robotsRouter);

app.use(generalError);

export default app;
