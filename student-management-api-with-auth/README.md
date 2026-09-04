# Student Management REST API

A robust, modular RESTful API built with Node.js and Express.js featuring secure JWT authentication, role-based authorization (RBAC), and full student management CRUD operations.

## Features

- **Authentication & Security:** Secure user registration and login utilizing `bcryptjs` for password hashing and JSON Web Tokens (JWT) for stateless session management.
- **Role-Based Access Control (RBAC):** Granular permissions distinguishing between `admin` (full CRUD capabilities, access to statistics) and `user` (read-only access).
- **Modular Architecture:** Clean separation of concerns with dedicated controllers, routes, and custom error-handling/logging middleware.
- **In-Memory Data Store:** Quick testing setup utilizing structured mock data.

---

## Project Structure

```text
student-management-api/
│
├── controllers/          # Route logic and handlers
├── middleware/           # Authentication, error handling, and logging
├── routes/               # Express router modules (auth, users, students)
├── data/                 # In-memory mock databases
├── .env                  # Environment variables
├── server.js             # Application entry point
└── package.json
Getting Started
Prerequisites
Node.js installed on your machine.

Installation & Setup
Clone the repository:

Bash
git clone <repository-url>
cd student-management-api
Install dependencies:

Bash
npm install
Configure environment variables:
Create a .env file in the root directory and add the following:

Code snippet
PORT=3000
JWT_SECRET=your_jwt_secret_key_here
Run the server:

Bash
# Development mode (using nodemon)
npm run devStart

# Production mode
npm start
API Endpoints Reference
1. Authentication (Public)
POST /api/auth/register - Register a new user account

POST /api/auth/login - Log in and receive a JWT access token

2. Users (Authenticated)
GET /api/users/me - Get profile details of the currently logged-in user

GET /api/users - Get all registered users

3. Students (User & Admin Access)
GET /api/students - Retrieve all student records (supports query filters like ?name=...)

GET /api/students/:id - Retrieve a specific student by ID

4. Students (Admin-Only Access)
POST /api/students - Create a new student record

PUT /api/students/:id - Fully update a student record

PATCH /api/students/:id - Partially update a student record

DELETE /api/students/:id - Delete a student record

GET /api/students/stats - View student statistics and analytics

Testing
You can test all endpoints seamlessly using REST client extensions (like VS Code's REST Client via .rest files) or Postman by passing your generated JWT token under the Authorization header as a Bearer token:

HTTP
Authorization: Bearer <your_jwt_token>