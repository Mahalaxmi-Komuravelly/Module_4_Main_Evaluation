import express from "express";
import { checkDB } from "./utils/checkDB.js";
import { UserRouter } from "./routes/user.route.js";
import { loggerMiddleware } from "./middlewares/logger.middleware.js";
import { VehicleRouter } from "./routes/vehicle.route.js";
import { CustomerRouter } from "./routes/customer.route.js";

const app= express();
const PORT = process.env.PORT || 3500;
app.use(express.json());
app.use(loggerMiddleware);
app.use("/users",UserRouter);
app.use("/vehicles",VehicleRouter);
app.use("/trips",CustomerRouter)
app.listen(PORT,async ()=>{
    await checkDB();
    console.log(`Server running on http://localhost:${PORT}`)
})