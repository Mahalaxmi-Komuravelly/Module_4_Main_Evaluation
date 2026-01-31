import express from "express";
import { addVehicle, assignDriver, getVehicleByVehicleId } from "../controllers/vehicle.controller.js";
import { limiter } from "../middlewares/ratelimit.middleware.js";
export const VehicleRouter = express.Router();

VehicleRouter.post("/add",limiter,addVehicle);
VehicleRouter.get("/:vehicleId",getVehicleByVehicleId);
VehicleRouter.patch("/assign-driver/:vehicleId",assignDriver)