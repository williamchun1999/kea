import express from "express";

import { taskController } from "../controllers/task";
import { authMiddleware } from "../middleware/auth";
import { userController } from "../controllers/user";

export const profileRouter = express.Router();

profileRouter.get("/tasks/:userId?", taskController.getTasks);
profileRouter.post("/tasks", taskController.createTask);
profileRouter.patch("/tasks/:taskId", taskController.updateTask);
profileRouter.delete("/tasks/:taskId", taskController.deleteTask);
// Get user
profileRouter.get("/:userId?", authMiddleware.ensureAuth, userController.getUser);
