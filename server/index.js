// using ESM vs commonJS for asynchronous loading of modules
import express from "express" // Routing, Middleware (access to req/res), Server Setup
import cors from "cors"
import dotenv from 'dotenv';
import cookieParser from "cookie-parser"

import authRoute from "./routes/auth-route.js"; // ESM requires file ext.
import userRoute from "./routes/user-route.js";
import postRoute from "./routes/post-route.js";

dotenv.config();
const app = express();

// middleware
app.use(cors({origin: process.env.CLIENT_URL, credentials: true}))
app.use(express.json())
app.use(cookieParser())


app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("api/post", postRoute);

app.listen(process.env.PORT, () => {
    console.log("Server is running on port", process.env.PORT);
});