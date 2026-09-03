const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config();
const authRoutes = require("./routes/userRoutes")
const app = express();

app.use(express.json());

app.use(authRoutes);

app.get("/",(req,res) => {
    res.json({
        message:"server is working"
    })
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDb connected");
    })
    .catch((error) => {
        console.log("some error" ,error)
    });

const PORT = (process.env.PORT) || 5000;
app.listen(PORT , () =>{
    console.log(`Server Running on PORT ${PORT}`);
});
