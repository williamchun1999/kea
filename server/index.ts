import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";



import {connectDB} from "./config/database"
    
import settingRoutes from "./routes/setting"
import authRoutes from "./routes/auth"
// const settingRoutes = require("./routes/setting")

const app = express();


require("dotenv").config({ path: "./config/.env" });

//connecting to db 
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({origin: "http://localhost:5175", credentials:true}));


  
//determining which route to use 
app.use ("/settings", settingRoutes)
app.use("/",authRoutes)

//Server Running 

app.listen(process.env.PORT, () => {
  console.log(`Server running on Port: ${process.env.PORT}`)
})
