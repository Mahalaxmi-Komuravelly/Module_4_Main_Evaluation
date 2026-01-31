import express from "express";
import { checkDB } from "./utils/checkDB.js";
import { UserRouter } from "./routes/user.route.js";
import { loggerMiddleware } from "./middlewares/logger.middleware.js";
import { VehicleRouter } from "./routes/vehicle.route.js";

const app= express();
const PORT = process.env.PORT || 3500;
app.use(express.json());
app.use(loggerMiddleware);
app.use("/users",UserRouter);
app.use("/vehicles",VehicleRouter)
app.listen(PORT,async ()=>{
    await checkDB();
    console.log(`Server running on http://localhost:${PORT}`)
})