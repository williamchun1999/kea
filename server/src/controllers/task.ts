import express, { Request, Response } from "express";
import mongoose from "mongoose";

import { Task, ITask } from "../models/task";
import { IUser } from "../models/User";

export const taskController = {
  getTasks: async (req: Request, res: Response) => {
    const currentUser = req.user as IUser;
    const { userId } = req.params;
    try {
      const tasks = await Task.find({ userId: userId ? userId : currentUser._id }).exec();

      res.status(200).json(tasks);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  createTask: async (req: Request, res: Response) => {
    const { taskName, taskType, taskProgress, taskProgressTotal } = req.body;
    const currentUser = req.user as IUser;

    if (!mongoose.Types.ObjectId.isValid(currentUser._id))
      return res.status(404).send(`No task with user id: ${currentUser._id}`);

    const newTask = new Task({
      userId: currentUser._id,
      taskName,
      taskType,
      taskProgress,
      taskProgressTotal,
      taskCompleted: false,
      lastUpdated: new Date(),
    });

    try {
      await newTask.save();

      res.status(201).json(newTask);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  },

  updateTask: async (req: Request, res: Response) => {
    const {
      taskName,
      taskType,
      taskProgress,
      taskProgressTotal,
      taskCompleted,
    } = req.body as ITask;
    const { taskId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(taskId))
      return res.status(404).send(`No task with task id: ${taskId}`);

    const updatedTask = {
      taskName,
      taskType,
      taskProgress,
      taskProgressTotal,
      taskCompleted,
      lastUpdated: new Date(),
    };

    await Task.findByIdAndUpdate({ taskId }, updatedTask, { new: true });

    return res.json(updatedTask);
  },

  deleteTask: async (req: Request, res: Response) => {
    const { taskId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(taskId))
      return res.status(404).send(`No task with task id: ${taskId}`);

    await Task.findByIdAndDelete(taskId);

    res.json({ message: "Post deleted successfully." });
  },

  // resetTasks: async (req:Request, res:Response) => {
  //   const { userId } = req.params;

  //   if (!mongoose.Types.ObjectId.isValid(userId))
  //     return res.status(404).send(`No task with user id: ${userId}`);

  //   const updatedTasksResult = await Task.bulkWrite([
  //     {
  //       updateMany: {
  //         filter: { taskType: "progress" },
  //         update: {
  //           $set: {
  //             taskProgress: { type: 0, nullable: true },
  //             taskCompleted: false,
  //           },
  //         },
  //       },
  //     },
  //     {
  //       updateMany: {
  //         filter: { taskType: "checkbox" },
  //         update: {
  //           $set: {
  //             taskProgress: { type: null, nullable: true },
  //             taskCompleted: false,
  //           },
  //         },
  //       },
  //     },
  //   ]);

  //   return res.json(updatedTasksResult);
  // },
};
