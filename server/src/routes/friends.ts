import express from "express";

import { taskController } from "../controllers/task";

export const friendsRouter = express.Router();

friendsRouter.get("/tasks", taskController.getTasks);
// list users
