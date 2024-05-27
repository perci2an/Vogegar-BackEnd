import express from "express";
import { watch, postEdit, postUpload } from "../controllers/videoController.js";

const videoRouter = express.Router();

videoRouter.get("/:id([0-9a-f]{24})", watch);
videoRouter.post("/:id([0-9a-f]{24})/edit", postEdit);
videoRouter.post("/upload", postUpload);

export default videoRouter;
