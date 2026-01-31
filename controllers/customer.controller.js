export const createTrip = async (req,res)=> {
    try {
        const {customer_id,vehicle_id,start_date,end_date,location,distance_km,passengers} = req.body || {};
        let available = true;
        if(!customer_id|| !vehicle_id|| !start_date || !end_date || !location ||!distance_km || !passengers){
            return res.status(400).json({ message: "All fields required" })
        }
         const { data: existing, error: findError } = await supabase.from("vehicles").select().eq("id", vehicle_id).eq("isAvailable",available).maybeSingle();

        if (findError) {
            return res.status(500).json({ message: findError.message })
        }
        if (!existing) {
            return res.status(404).json({ message: "Vehicle not available" })
        }
        const { data, error } = await supabase.from("trips").insert([{customer_id,vehicle_id,start_date,end_date,location,distance_km,passengers}]).select().single();
        if (error) {
            res.status(500).json({ message: error.message })
        }
        res.status(201).json({ message: "Trip created successfully", trip: data })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getTripByTripId = async (req,res) => {
    try {
        const { tripId } = req.params;
        const { data: existing, error: findError } = await supabase.from("trips").select().eq("id", tripId).maybeSingle();
        if (findError) {
            return res.status(500).json({ message: findError.message })
        }
        if (!existing) {
            return res.status(404).json({ message: "trip not found" })
        }
        const { data, error } = await supabase.from("trips").select().eq("id", tripId);
        if (error) {
            res.status(500).json({ message: error.message })
        }
        res.status(200).json({ message: "Trip found", trip: data })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}