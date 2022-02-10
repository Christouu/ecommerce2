const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection successfull"))
  .catch((e) => console.log(e));

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

app.listen(5000, () => console.log("Back-end server is running on port 5000"));
