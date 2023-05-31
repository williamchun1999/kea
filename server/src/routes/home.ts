import express from "express";

import { taskController } from "../controllers/task";

export const homeRouter = express.Router();

homeRouter.get("/tasks", taskController.getTasks);
homeRouter.post("/tasks", taskController.createTask);
homeRouter.patch("/tasks/:taskId", taskController.updateTask);
homeRouter.delete("/tasks/:taskId", taskController.deleteTask);
// get user, list user
