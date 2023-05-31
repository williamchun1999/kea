import express from "express";
import { settingController } from "../controllers/setting";

export const settingRouter = express.Router();

//Settings Routes

settingRouter.delete("/deleteUser/:id", settingController.deleteUser);

settingRouter.put("/addFriend/:id/:friend", settingController.addFriend);

settingRouter.put("/updateUser/:id", settingController.updateUser);
