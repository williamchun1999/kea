import express from "express";

import {userController } from "../controllers/user";
import {authController} from "../controllers/auth";


export const settingRouter = express.Router();

//Settings Routes


settingRouter.get("/", userController.getUser);

settingRouter.delete("/deleteUser/:id", userController.deleteUser);

settingRouter.put("/addFriend/:id/:friend", userController.addFriend);

settingRouter.put("/updateUser/:id?", userController.updateUser);
settingRouter.get("/logout", authController.logout);
