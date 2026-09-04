require('dotenv').config();

const express = require("express");
const app = express();

// Router
const studentRouter = require("./routes/studentsRoutes");
const authRouter = require('./routes/authRoutes')
const userRouter = require('./routes/userRoutes')

// Middleware
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

app.use(express.json());
app.use(logger);

// Routes
app.use("/api/students", studentRouter);
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter)
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server Running on port ${PORT}...`));