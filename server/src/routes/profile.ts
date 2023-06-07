import express from "express";

import { taskController } from "../controllers/task";

export const profileRouter = express.Router();

profileRouter.get("/tasks", taskController.getTasks);
profileRouter.post("/tasks", taskController.createTask);
profileRouter.patch("/tasks/:taskId", taskController.updateTask);
profileRouter.delete("/tasks/:taskId", taskController.deleteTask);
// Get user
