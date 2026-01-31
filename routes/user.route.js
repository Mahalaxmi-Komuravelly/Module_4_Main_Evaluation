import express from "express";
import { addUser } from "../controllers/user.controller.js";
export const UserRouter = express.Router();

UserRouter.post("/signup",addUser);