import express from "express";

import { taskController } from "../controllers/task";
import {userController } from "../controllers/user";

export const friendsRouter = express.Router();

friendsRouter.get("/tasks/:userId", taskController.getTasks);

// list user info 

friendsRouter.get("/:userId?", userController.getUser);
friendsRouter.patch("/addFriend/:friend", userController.addFriend)
