
import express from "express"

const router = express.Router()

// const settingController = require("../controllers/setting");
import {userController} from "../controllers/user"

//Settings Routes 

router.delete("/deleteUser", userController.deleteUser)

router.put("/addFriend/:friend", userController.addFriend)

router.put("/updateUser", userController.updateUser)

export default router