import dotenv from "dotenv"
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/Users.js"

dotenv.config()

export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const newUser = await User.create({ name, email, password })
        
        const responseUser = {
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            createdAt: newUser.createdAt }
        
        res.status(201).json({message: "User created successfully", user: responseUser})
    } catch(err) {
        if (err.code === 11000) {
            return res.status(400).json({message: "Email already in use!"})
        }
        res.status(500).json({message: err.message})
    }
}

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({email})
        if(!user) return res.status(404).json({message: "No user found"})
        if (!await bcrypt.compare(password, user.password)) return res.status(401).json({ message: "Invalid Credential" })
        
        const responseUser = {
            _id: user._id,
            name: user.name,
            email: user.email,
            createdAt: user.createdAt
        }

        const token = jwt.sign( {id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' })

        res.status(200).json({message: "Login successful", user: responseUser, token: token})
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

export const getUserProfile = async (req, res) => {
    try {
        const userProfile = await User.findById(req.user.id).select("-password")
        if (!userProfile) {
            return res.status(404).json({message: "User not found"})
        }
        res.status(200).json({user: userProfile})
    } catch(err) {
        res.status(500).json({message: err.message})
    }
}