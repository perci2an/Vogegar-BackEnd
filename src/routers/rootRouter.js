import express from "express";
import { postJoin, postLogin } from "../controllers/userController";
import { home, search } from "../controllers/videoController";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.post("/join", postJoin);
rootRouter.route("/login", postLogin);
rootRouter.get("/search", search);

export default rootRouter;
