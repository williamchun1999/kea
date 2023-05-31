import express from "express";
import cors from "cors";
import flash from "express-flash";
import session from "express-session";
import MongoStore from "connect-mongo";
import passport from "passport";
import dotenv from "dotenv";
import cron from "node-cron";

import { connectDB } from "./config/database";
import { configurePassport } from "./config/passport";
import { settingRouter } from "./routes/setting";
import { authRouter } from "./routes/auth";
import { homeRouter } from "./routes/home";
import { friendsRouter } from "./routes/friends";
import { profileRouter } from "./routes/profile";
import { Task } from "./models/task";

const app = express();

// Path for .env file
dotenv.config({ path: "src/config/.env" });

// Passport config

configurePassport(passport);

//connecting to db
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

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
app.use("/settings", settingRouter);
app.use("/", authRouter);
app.use("/home", homeRouter);
app.use("/friends", friendsRouter);
app.use("/profile", profileRouter);

// Cron job for weekly interval resetting tasks
cron.schedule("0 0 * * MON", async () => {
  try {
    await Task.bulkWrite([
      {
        updateMany: {
          filter: { taskType: "progress" },
          update: {
            $set: {
              taskProgress: { type: 0, nullable: true },
              taskCompleted: false,
            },
          },
        },
      },
      {
        updateMany: {
          filter: { taskType: "checkbox" },
          update: {
            $set: {
              taskProgress: { type: null, nullable: true },
              taskCompleted: false,
            },
          },
        },
      },
    ]);
  } catch (error) {
    console.error(error);
  }
});

//Server Running

app.listen(process.env.PORT, () => {
  console.log(`Server running on Port: ${process.env.PORT}`);
});
