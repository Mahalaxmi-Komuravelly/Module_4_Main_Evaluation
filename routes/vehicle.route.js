import express from "express";
import { addVehicle } from "../controllers/vehicle.controller.js";

export const VehicleRouter = express.Router();

VehicleRouter.post("/add",addVehicle)