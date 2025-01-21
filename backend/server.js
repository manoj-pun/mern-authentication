import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDb from "./config/mongodb.js";

connectDb();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.get("/",(req,res) => {
    res.send("Hello World")
}) 

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`)
})