const students = require('../data/students');

const getAllStudents = (req, res) => {
    let results = [...students];
    const { name, course, status } = req.query;

    if (name) {
        results = results.filter(s => s.name.toLowerCase().includes(name.toLowerCase()));
    }
    if (course) {
        results = results.filter(s => s.course.toLowerCase().includes(course.toLowerCase()));
    }
    if (status) {
        results = results.filter(s => s.status.toLowerCase() === status.toLowerCase());
    }

    res.status(200).json({ success: true, count: results.length, data: results });
};

const getStudentById = (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (!student) return res.status(404).json({ success: false, message: "Student not found" });
    res.status(200).json({ success: true, data: student });
};

const createStudent = (req, res) => {
    const { name, email, age, course, gpa, status } = req.body;
    if (!name || !email || !age || !course || !gpa) {
        return res.status(400).json({ success: false, message: "All required fields must be provided" });
    }

    const newStudent = {
        id: students.length ? students[students.length - 1].id + 1 : 1,
        name,
        email,
        age,
        course,
        gpa,
        status: status || "Active"
    };

    students.push(newStudent);
    res.status(201).json({ success: true, message: "Student created successfully", data: newStudent });
};

const updateStudent = (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (!student) return res.status(404).json({ success: false, message: "Student not found" });

    const { name, email, age, course, gpa, status } = req.body;
    student.name = name || student.name;
    student.email = email || student.email;
    student.age = age || student.age;
    student.course = course || student.course;
    student.gpa = gpa || student.gpa;
    student.status = status || student.status;

    res.status(200).json({ success: true, message: "Student updated successfully", data: student });
};

const deleteStudent = (req, res) => {
    const index = students.findIndex(s => s.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ success: false, message: "Student not found" });

    const deleted = students.splice(index, 1);
    res.status(200).json({ success: true, message: "Student deleted successfully", data: deleted[0] });
};

const getStudentStats = (req, res) => {
    if (students.length === 0) {
        return res.status(200).json({ success: true, totalStudents: 0, averageGpa: 0 });
    }

    const totalStudents = students.length;
    const totalGpa = students.reduce((sum, s) => sum + s.gpa, 0);
    const averageGpa = (totalGpa / totalStudents).toFixed(2);

    res.status(200).json({
        success: true,
        stats: {
            totalStudents,
            averageGpa: parseFloat(averageGpa)
        }
    });
};

module.exports = {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent,
    getStudentStats
};