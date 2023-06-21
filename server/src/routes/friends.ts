import express from "express";

import { taskController } from "../controllers/task";

export const friendsRouter = express.Router();

friendsRouter.get("/:id", taskController.getTasks);
// list users
