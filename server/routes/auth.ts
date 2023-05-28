
import express from "express"

const router = express.Router()

// const settingController = require("../controllers/setting");
import {authController} from "../controllers/auth"

//middleware to check if the user is logged in 
import {authMiddleware} from "../middleware/auth"


//auth Routes 


export default router