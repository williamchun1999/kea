import express from "express";

import { taskController } from "../controllers/task";
import {userController } from "../controllers/user";

export const friendsRouter = express.Router();

friendsRouter.get("/tasks/:id", taskController.getTasks);

// list user info 

friendsRouter.get("/:id?", userController.getUser);
