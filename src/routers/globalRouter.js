import express from "express";
import { join, login } from "../controllers/userController";
import { trending, search } from "../controllers/videoController";

// 1. create router
const globalRouter = express.Router();

// 2. configure router
globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

// name change
// change again

// 3. export router
export default globalRouter;


