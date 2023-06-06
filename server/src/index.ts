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
import logger from "morgan";

import { connectDB } from "./config/database";
import userRoutes from "./routes/user";
import authRoutes from "./routes/auth";
import { homeRouter } from "./routes/home";
import friendsRoutes from "./routes/friends";
import profileRoutes from "./routes/profile";
import { User, IUser, comparePassword } from "./models/User";

const app = express();
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
app.use("/settings", userRoutes);
app.use("/", authRoutes);
app.use("/home", homeRouter);
app.use("/friends", friendsRoutes);
app.use("/profile", profileRoutes);

//Server Running

app.listen(process.env.PORT, () => {
  console.log(`Server running on Port: ${process.env.PORT}`);
});
