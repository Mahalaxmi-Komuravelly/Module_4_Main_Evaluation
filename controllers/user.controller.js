import supabase from "../configs/supabase.config.js"

export const addUser = async(req,res) => {
try {
    const {name,email,password,role} = req.body || {}
    if(!name || !email || !password || !role) {
        return res.status(400).json({message:"All fields required"})
    }
    const {data:existing,error:findError} = await supabase.from("users").select().eq("email",email).maybeSingle();
    if(findError){
        return res.status(500).json({message:findError.message})
    }
    if(existing){
        return res.status(409).json({message:"Email already exists"})
    }
    const {data,error} = await supabase.from("users").insert([{name,email,password,role}]).select().single();
    if(error){
        res.status(500).json({message:error.message})
    }
    res.status(201).json({message:"User created successfully",user:data})

} catch (error) {
    res.status(500).json({message:error.message})
}
}