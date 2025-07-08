import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";
dotenv.config();

const app = express();
const dbuser = encodeURIComponent(process.env.DBUSERNAME);
const dbpass = encodeURIComponent(process.env.DBPASSWORD);

// mongoose
//   .connect(`mongodb://${dbuser}:${dbpass}@localhost:27017/lpu?authsource=admin`)
//   .then(() => {
//     app.listen(8080, () => {
//       console.log("Server started");
//     });
//   });

  mongoose
  .connect(`mongodb+srv://${dbuser}:${dbpass}@project1.t8s8jn0.mongodb.net/merndb?retryWrites=true&w=majority&appName=Project1`)
  .then(() => {
    app.listen(8080, () => {
      console.log("Server started");
    });
  });

app.use(express.json());

app.use("/api/users", userRouter);