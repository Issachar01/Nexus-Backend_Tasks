import dotenv from "dotenv"
import jwt from "jsonwebtoken";

dotenv.config()

export const authLogin = async (req, res, next) => {
    try {

        const authHeader = req.header('authorization')
        const token = authHeader && authHeader.split(' ')[1]

        if (!token) return res.status(401).json({message: "Access denied"})
    
        const decoded = await jwt.verify(token, process.env.JWT_SECRET)

        req.user = decoded        
        next()

    } catch(err) {
        res.status(401).json({message: err.message})
    }
}