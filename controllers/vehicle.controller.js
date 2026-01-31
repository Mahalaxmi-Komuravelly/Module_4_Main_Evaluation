import supabase from "../configs/supabase.config.js";

export const addVehicle = async (req,res) => {
    try {
        const {name,registration_number,rate_per_km,owner_id} = req.body || {};
        if(!name || !registration_number || !rate_per_km || !owner_id){
            return res.status(400).json({message:"All fields required"})
        }
        const {data:existing,error:findError} = await supabase.from("vehicles").select().eq("email",email).maybeSingle();
    if(findError){
        return res.status(500).json({message:findError.message})
    }
    if(existing){
        return res.status(409).json({message:"Email already exists"})
    }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}