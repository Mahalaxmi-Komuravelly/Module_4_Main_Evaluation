import express from "express";
import { createTrip } from "../controllers/customer.controller.js";

export const CustomerRouter = express.Router();

CustomerRouter.post("/create",createTrip)