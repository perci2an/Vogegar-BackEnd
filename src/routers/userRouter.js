import express from "express";
import {
  edit,
  remove,
  logout,
  see,
  startGithubLogin,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/delete", remove);
userRouter.get("/see", see);
userRouter.get("/github/start", startGithubLogin);

export default userRouter;
