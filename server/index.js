import express from "express";
import dotenv from "dotenv";
import { connection } from "./database/db.js";
import userRouter from "./router/userRoute.js";
import toolsRouter from "./router/toolsRoute.js";
import cors from "cors";

dotenv.config();
const app = express();

app.use(cors({
    origin : "http://localhost:5173",
    Credential : true
}))
app.use(express.json());
app.use(userRouter, toolsRouter);


app.listen(process.env.APP_PORT, () => {
     connection();
    console.log(`Server up and running http://localhost:${process.env.APP_PORT}`);
});