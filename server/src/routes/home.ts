import express from 'express';

import { taskController } from '../controllers/task';
import { userController } from '../controllers/user';

export const homeRouter = express.Router();



//get tasks

homeRouter.get('/tasks/:userId', taskController.getTasks);
homeRouter.post('/tasks/:userId', taskController.createTask);
homeRouter.patch('/tasks/:taskId', taskController.updateTask);
homeRouter.delete('/tasks/:taskId', taskController.deleteTask);


// get user, list user

homeRouter.get("/", userController.getUser);