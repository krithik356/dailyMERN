import express from "express";
import connectDB from "./config/connecdb.js";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();

connectDB();

app.use(express.json());
app.use("/api", contactRoutes);
app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
export default app;