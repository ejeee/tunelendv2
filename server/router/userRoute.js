import express, { Router } from "express";
import { signup, signin, getUser } from "../controller/auth.js";

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
userRouter.post('/signup', async (req, res) => {
    const { email, password, confirm_password } = req.body;
    const result = await signup(email, password, confirm_password);
    if (result.success) {
        res.status(201).json(result);
    } else {
        res.status(400).json(result);
    }
});

userRouter.get('/user', async (req, res) => {
    const username = req.params.username;
    const user = await getUser(username);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ success: false, message: 'User not found' });
    }
});

export default userRouter;