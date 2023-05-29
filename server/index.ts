import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import MongoStore from "connect-mongo";
import dotenv from "dotenv";

import homeRoutes from "./routes/home";
import friendsRoutes from "./routes/friends";
import profileRoutes from "./routes/profile";

const app = express();
dotenv.config({ path: "./config/.env" });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/home", homeRoutes);
app.use("/friends", friendsRoutes);
app.use("/profile", profileRoutes);

mongoose
  .connect(process.env.DB_STRING)
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`Server running on Port: ${process.env.PORT}`)
    )
  )
  .catch((err) => console.log(err));
