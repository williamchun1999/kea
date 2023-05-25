
import express from "express"

const router = express.Router()

// const settingController = require("../controllers/setting");
import {settingController} from "../controllers/setting"

//Settings Routes 

router.delete("/deleteUser/:id", settingController.deleteUser)

router.put("/addFriend/:id/:friend", settingController.addFriend)

router.put("/updateUser/:id", settingController.updateUser)

module.exports = router;