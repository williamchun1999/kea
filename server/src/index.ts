import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import flash from "express-flash";
import session from "express-session";
import MongoStore from "connect-mongo";
import passport from "passport";
import dotenv from "dotenv";
import logger from "morgan"

import { connectDB } from "./config/database";
import userRoutes from "./routes/user";
import authRoutes from "./routes/auth";
import { homeRouter } from "./routes/home";
import friendsRoutes from "./routes/friends";
import profileRoutes from "./routes/profile";

const app = express();
dotenv.config({ path: "src/config/.env" });

// Passport config
import { configurePassport } from "./config/passport";
configurePassport(passport);

//connecting to db
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:5175", credentials: true }));

//Logging
app.use(logger("dev"));

// Setup Sessions - stored in MongoDB
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_STRING }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//allowing to use flash
app.use(flash());

//determining which route to use
app.use("/settings", userRoutes);
app.use("/", authRoutes);
app.use("/home", homeRouter);
app.use("/friends", friendsRoutes);
app.use("/profile", profileRoutes);

//Server Running

app.listen(process.env.PORT, () => {
  console.log(`Server running on Port: ${process.env.PORT}`);
});
