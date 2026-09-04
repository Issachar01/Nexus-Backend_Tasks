const express = require('express')
const authToken = require('../middleware/authMiddleware')
const userController = require('../controllers/userController')

const router = express.Router()

router.get('/', authToken, userController.getAllUSers)
router.get('/me', authToken, userController.getProfile) 

module.exports = router
