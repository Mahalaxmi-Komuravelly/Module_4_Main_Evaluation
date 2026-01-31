import fs from "fs"
export const loggerMiddleware = (req,res,next) => {
    const data = [`${new Date().toISOString().replace("T"," ").slice(0,19)} ${req.method} ${req.url}`]
    fs.writeFileSync("../logs.txt",JSON.stringify(data))
}