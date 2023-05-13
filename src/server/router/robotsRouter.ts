import { Router } from "express";
import { getRobots } from "../controllers/robotsController.js";

const robotsRouter = Router();

robotsRouter.get("/", getRobots);

export default robotsRouter;
