import express from "express";
import dotenv from "dotenv";
import { connection } from "./database/db.js";
import { checkRole } from "./middleware/rbacMiddleware.js";
import userRouter from "./router/userRoute.js";
import toolsRouter from "./router/toolsRoute.js";
import cors from "cors";
import bodyParser from "body-parser";

// environment
dotenv.config();
const PORT = process.env.PORT || 3000;

// setups
const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors({
  origin : `http://localhost:${PORT}`,
  Credential : true
}));

// routers
app.use('/auth', userRouter);
app.use(checkRole('user'), toolsRouter);

app.listen(PORT, () => {
    connection();
    console.log(`Server running http://localhost:${process.env.PORT}`);
});