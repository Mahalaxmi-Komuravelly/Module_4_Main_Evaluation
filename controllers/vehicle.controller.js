import supabase from "../configs/supabase.config.js";

export const addVehicle = async (req, res) => {
    try {
        const { name, registration_number, rate_per_km, owner_id } = req.body || {};
        let role = "owner";
        if (!name || !registration_number || !rate_per_km || !owner_id) {
            return res.status(400).json({ message: "All fields required" })
        }
        const { data: existing, error: findError } = await supabase.from("vehicles").select().eq("registration_number", registration_number).maybeSingle();
        if (findError) {
            return res.status(500).json({ message: findError.message })
        }
        if (existing) {
            return res.status(409).json({ message: "Vehicle with same registration number already exists" })
        }
        const {data:owner ,error: ownerError} = await supabase.from("users").select().eq("id", owner_id).eq("role",role).maybeSingle();
        if (ownerError) {
            return res.status(500).json({ message: ownerError.message })
        }
        if (!owner) {
            return res.status(404).json({ message: "owner not found" })
        }
        const { data, error } = await supabase.from("vehicles").insert([{ name, registration_number, rate_per_km, owner_id }]).select().single();
        if (error) {
            res.status(500).json({ message: error.message })
        }
        res.status(201).json({ message: "Vehicle created successfully", vehicle: data })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getVehicleByVehicleId = async (req, res) => {
    try {
        const { vehicleId } = req.params;
        const { data: existing, error: findError } = await supabase.from("vehicles").select().eq("id", vehicleId).maybeSingle();
        if (findError) {
            return res.status(500).json({ message: findError.message })
        }
        if (!existing) {
            return res.status(404).json({ message: "vehicle not found" })
        }
        const { data, error } = await supabase.from("vehicles").select().eq("id", vehicleId);
        if (error) {
            res.status(500).json({ message: error.message })
        }
        res.status(200).json({ message: "Vehicle found", vehicle: data })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const assignDriver = async (req, res) => {
    const { vehicleId } = req.params;
    const { data: existing, error: findError } = await supabase.from("vehicles").select().eq("id", vehicleId).maybeSingle();
    if (findError) {
        return res.status(500).json({ message: findError.message })
    }
    if (!existing) {
        return res.status(404).json({ message: "vehicle not found" })
    }
    const { driver_id } = req.body || {}
    if (!driver_id) {
        return res.status(400).json({ message: "Driver id required" });
    }
    const { data, error } = await supabase.from("vehicles").update([{ driver_id }]).eq("id", vehicleId).select().single();
    if (error) {
        res.status(500).json({ message: error.message })
    }
    res.status(200).json({ message: "Driver assigned successfully" })
}