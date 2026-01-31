import express from "express";
import { addVehicle, assignDriver, getVehicleByVehicleId } from "../controllers/vehicle.controller.js";

export const VehicleRouter = express.Router();

VehicleRouter.post("/add",addVehicle);
VehicleRouter.get("/:vehicleId",getVehicleByVehicleId);
VehicleRouter.patch("/assign-driver/:vehicleId",assignDriver)