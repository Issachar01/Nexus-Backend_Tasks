const express = require('express')
const authControllers = require('../controllers/authController')

const router = express.Router()

router.post("/register", authControllers.authRegisteration)
router.post("/login", authControllers.authLogin)

module.exports = router