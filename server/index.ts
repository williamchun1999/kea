import express from "express";
import cors from "cors";
import flash from "express-flash";
import session from "express-session";
import MongoStore from "connect-mongo";
import passport from "passport";
import {
  Strategy as LocalStrategy,
  AuthenticatorDoneFunction,
} from "passport-local";
import dotenv from "dotenv";
import cron from "node-cron";
import path from "path"

import { connectDB } from "./src/config/database";
import { settingRouter } from "./src/routes/setting";
import { authRouter } from "./src/routes/auth";
import { homeRouter } from "./src/routes/home";
import { friendsRouter } from "./src/routes/friends";
import { profileRouter } from "./src/routes/profile";
import { Task } from "./src/models/task";
import logger from "morgan";
import { User, IUser, comparePassword } from "./src/models/User";

const app = express();

// Path for .env file
dotenv.config({ path: "src/config/.env" });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

//connecting to db
connectDB();

// PASSPORT
passport.use(
  new LocalStrategy(
    { usernameField: "email" },
    async (
      email: string,
      password: string,
      done: AuthenticatorDoneFunction
    ) => {
      try {
        //check if the email exists in the db
        const user = await User.findOne({ email: email.toLowerCase() });
        if (!user) {
          return done(null, false, { msg: `Email ${email} not found.` });
        }
        if (!user.password) {
          return done(null, false, {
            msg: "Incorrect Password",
          });
        }

        //if there is a match then compare the password to the password in the db
        const isMatch = await comparePassword(password, user.password);

        if (isMatch) {
          return done(null, user);
        }
        return done(null, false, { msg: "Invalid email or password." });
      } catch (err) {
        return done(err);
      }
    }
  )
);

passport.serializeUser((user: IUser, done: AuthenticatorDoneFunction) => {
  done(null, user._id);
});

passport.deserializeUser((id: string, done: AuthenticatorDoneFunction) => {
  User.findById(id)
    .then((user) => done(null, user))
    .catch((err) => done(err));
});

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

app.use((req, res, next) => {
  console.log(req.session);
  console.log(req.user);
  next();
});

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

//serving the frontend 
app.use(express.static(path.join(__dirname, "./client/dist")))
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/dist/index.html"),
    function(err) {
      res.status(500).send(err)
    }
  )
})

//Server Running

app.listen(process.env.PORT, () => {
  console.log(`Server running on Port: ${process.env.PORT}`);
});
