import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import ProductRouter from "./routes/ProductRoute.js";

const app = express();
mongoose
  .connect('mongodb://127.0.0.1:27017/tugasEduwork')
  .then(() => console.log("DB Connection Mongoose Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use(ProductRouter);

app.listen(5000, ()=> console.log('Server is Running'));