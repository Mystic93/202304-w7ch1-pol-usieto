import express from "express";
import morgan from "morgan";
import robotsRouter from "./router/robotsRouter.js";

const app = express();

app.use(express.json());

app.use(morgan("dev"));

app.use("/robots", robotsRouter);

export default app;
