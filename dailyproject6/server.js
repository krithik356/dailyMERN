const express = require("express");
const mongoose = require("mongoose")
const dotenv = require("dotenv");

const feebackRoutes = require("./routes/FeedbackRoutes");
const { default: Feedback } = require("./models/Feedback");

dotenv.config();
const app = express();

app.use(express.json());

app.use("/Feedback", feebackRoutes);

app.use((err,req,res,next) =>{
  console.log(err);
  res.status(500).json({
    message:"Internal Server Error"
  })
});
app.use((req,res,next) =>{
  res.status(404).json({
    message:"Route not found"
  })
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error);
  });