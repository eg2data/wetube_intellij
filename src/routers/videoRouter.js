import express from "express";
import { see, edit, upload, deleteVideo } from "../controllers/videoController";

// 1. create router
const videoRouter = express.Router();

// 2. configure router
videoRouter.get("/upload", upload);
videoRouter.get("/:id(\\d+)", see);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);

// 3. export router
export default videoRouter;
