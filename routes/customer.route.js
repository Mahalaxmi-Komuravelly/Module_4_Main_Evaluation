import express from "express";
import { createTrip, getTripByTripId } from "../controllers/customer.controller.js";

export const CustomerRouter = express.Router();

CustomerRouter.post("/create",createTrip);
CustomerRouter.get("/:tripId",getTripByTripId);