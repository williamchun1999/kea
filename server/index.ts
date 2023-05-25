import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors"
import MongoStore from "connect-mongo";
import dotenv from "dotenv";

const app = express();
dotenv.config({path: "./config/.env"});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose
  .connect(process.env.DB_STRING)
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`Server running on Port: ${process.env.PORT}`)
    )
  )
  .catch((err) => console.log(err));
