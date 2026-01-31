import {rateLimit} from "express-rate-limit";

export const limiter = rateLimit(
    {
        windowMs:1*60*1000,
        limit:3,
        standardHeaders:'draft-8',
        legacyHeaders:false,
        ipv6Subnet:1,
        handler:(req,res)=>{
            res.status(429).json({"error":"Only 3 requests per minute per IP"})
        }
    }
)