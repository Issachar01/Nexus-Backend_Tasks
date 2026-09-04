const express = require('express');
const studentController = require('../controllers/studentController');
const authToken = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

const router = express.Router();

router.get('/stats', authToken, roleMiddleware('admin'), studentController.getStudentStats);
router.get('/', authToken, studentController.getAllStudents);
router.get('/:id', authToken, studentController.getStudentById);
router.post('/', authToken, roleMiddleware('admin'), studentController.createStudent);
router.put('/:id', authToken, roleMiddleware('admin'), studentController.updateStudent);
router.patch('/:id', authToken, roleMiddleware('admin'), studentController.updateStudent);
router.delete('/:id', authToken, roleMiddleware('admin'), studentController.deleteStudent);

module.exports = router;