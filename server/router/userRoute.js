import express from "express";
import { register, signin } from "../controllers/auth.js";

const userRouter = express.Router();

userRouter.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    const result = await signin(email, password);
    if (result.success) {
        res.status(200).json(result);
    } else {
        res.status(401).json(result);
    }
});

// Register endpoint
userRouter.post('/register', async (req, res) => {
    const { email, password } = req.body;
    const result = await register(email, password);
    if (result.success) {
        res.status(201).json(result);
    } else {
        res.status(400).json(result);
    }
});


// userRouter.post('/signin', signin);
// userRouter.post('/signup', signup);
// userRouter.get('/user/:username', checkPermission('read_user'), getUser);


export default userRouter;