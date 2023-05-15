import { Router } from "express";
import { getRobots } from "../controllers/robotsController.js";
import { auth } from "../middlewares/authMiddleware.js";

const robotsRouter = Router();

robotsRouter.get("/", auth, getRobots);

export default robotsRouter;
