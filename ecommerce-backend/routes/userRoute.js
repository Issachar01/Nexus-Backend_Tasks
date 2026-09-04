import express from "express"
import { authLogin } from "../middleware/authMiddleware.js"
import { registerUser, loginUser, getUserProfile } from "../controllers/userController.js"

const route = express.Router()

route.post("/register", registerUser)
route.post("/login", loginUser)
route.get("/me", authLogin, getUserProfile)

export default route