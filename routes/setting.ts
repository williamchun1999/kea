import express from "express";

import { userController } from "../controllers/user";
import { authController } from "../controllers/auth";
import { taskController } from "../controllers/task";

export const settingRouter = express.Router();

//Settings Routes

settingRouter.get("/", userController.getUser);

settingRouter.delete("/deleteUser", userController.deleteUser);
settingRouter.delete(
  "/deleteUserFromFriendsList",
  userController.deleteUserFromFriendsLists
);
settingRouter.delete("/deleteAllTasks", taskController.deleteAllTasks);

settingRouter.put("/updateUser", userController.updateUser);
settingRouter.get("/logout", authController.logout);
