import express from "express";

import { taskController } from '../controllers/task';
import { userController } from '../controllers/user';
import { authController } from "../controllers/auth";
import {authMiddleware} from "../middleware/auth"

export const homeRouter = express.Router();



//get tasks

homeRouter.get('/tasks/:userId?', taskController.getTasks);
homeRouter.post('/tasks/', taskController.createTask);
homeRouter.patch('/tasks/:taskId', taskController.updateTask);
homeRouter.delete('/tasks/:taskId', taskController.deleteTask);


// get user, list user

homeRouter.get("/", authMiddleware.ensureAuth, userController.getUser);

homeRouter.get('/logout', authController.logout)
