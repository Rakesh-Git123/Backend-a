import mongoose from "mongoose";
import express from "express";
import userRouter from "./routes/userRoute.js"
import dotenv from "dotenv"
dotenv.config()

const app = express();

mongoose.connect(`mongodb+srv://${process.env.DBUSERNAME}:${process.env.DBPASSWORD}@project1.t8s8jn0.mongodb.net/merndb?retryWrites=true&w=majority&appName=Project1`).then(() => {
  app.listen(8080, () => {
    console.log("Server started");
  });
});

app.use(express.json());

app.use("/api/users", userRouter);