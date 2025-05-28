import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDb from "./config/mongodb.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";

connectDb();
const app = express();
const PORT = process.env.PORT || 4000;

const allowedOrigins = [process.env.FRONTEND_URI]
//also if you want to use the backend server on another server then you can add like const allowedOrigins = ["http://localhost:5173",http://localhost:6000,http://localhost:3000]

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin:allowedOrigins, credentials:true}));

//API endpoints
app.get("/",(req,res) => {
    res.send("Hello World")
}) 
app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`)
})