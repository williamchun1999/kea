import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import flash from "express-flash"
import session from "express-session"
import MongoStore from "connect-mongo"
import passport from "passport"


import {connectDB} from "./config/database"
    
import settingRoutes from "./routes/setting"
import authRoutes from "./routes/auth"
// const settingRoutes = require("./routes/setting")

const app = express();


require("dotenv").config({ path: "./config/.env" });

// Passport config
import {configurePassport} from "./config/passport"
configurePassport(passport)

//connecting to db 
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({origin: "http://localhost:3000", credentials:true}));


// Setup Sessions - stored in MongoDB
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_STRING
  })
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//allowing to use flash
app.use(flash())
  
//determining which route to use 
app.use ("/settings", settingRoutes)
app.use("/",authRoutes)

//Server Running 

app.listen(process.env.PORT, () => {
  console.log(`Server running on Port: ${process.env.PORT}`)
})
