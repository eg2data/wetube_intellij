import express from "express";
import { edit, remove, logout, see } from "../controllers/userController";

// 1. create router
const userRouter = express.Router();

// 2. configure router
userRouter.get("/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/remove", remove);
userRouter.get(":id", see);

// 3. export router
export default userRouter;

