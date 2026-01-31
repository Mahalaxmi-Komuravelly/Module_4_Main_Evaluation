export const createTrip = async (req,res)=> {
    try {
        const {customer_id,vehicle_id,start_date,end_date,location,distance_km,passengers} = req.body || {};
        if(!customer_id|| !vehicle_id|| !start_date || !end_date || !location ||!distance_km || !passengers){
            return res.status(400).json({ message: "All fields required" })
        }
        

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}