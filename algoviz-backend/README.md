AlgoViz Backend
Overview
AlgoViz Backend is a Node.js and Express.js RESTful API that provides the backend services for the AlgoViz web application — an interactive learning platform to teach Data Structures and Algorithms (DSA) with animations and quizzes.

This backend handles authentication, lesson management, quiz functionality, user profiles, and progress tracking. It interfaces with a MongoDB database to store all persistent data.

Features
User registration and login with JWT-based authentication and password hashing

CRUD operations for lessons including animated content metadata

Quiz creation, retrieval, and management

User management and progress tracking

Middleware for secure route protection and consistent error handling

Modular and scalable architecture following MVC patterns

Technology Stack
Node.js

Express.js

MongoDB with Mongoose ODM

JWT for authentication

bcrypt for password hashing

dotenv for environment configuration

cors for cross-origin resource sharing

Getting Started
Prerequisites
Node.js (v16+ recommended)

MongoDB (local or cloud instance)

npm or yarn package manager

Installation
Clone the repository:

bash
git clone https://github.com/yourusername/algoviz-backend.git
cd algoviz-backend
Install dependencies:

bash
npm install
Create a .env file in the root directory and set environment variables:

text
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
Run the development server:

bash
npm run dev
The server will start on http://localhost:5000.

Project Structure
text
algoviz-backend/
├── config/
│   └── db.js                # MongoDB connection setup
├── controllers/             # Route handler logic
├── middleware/              # Authentication & error handling (authMiddleware, errorMiddleware)
├── models/                  # MongoDB schemas (User, Lesson, Quiz, Submission)
├── routes/                  # API route definitions (authRoutes, lessonRoutes, quizRoutes, userRoutes)
├── .env                    # Environment variables
├── index.js                 # Express server entry point
├── package.json
└── README.md
API Endpoints (Examples)
POST /api/auth/register — Register new user

POST /api/auth/login — User login

GET /api/lessons — List all lessons

GET /api/lessons/:id — Get lesson details

POST /api/lessons — Create new lesson (protected)

GET /api/quizzes — List all quizzes

POST /api/quizzes — Create quiz (protected)

GET /api/users/:id — Get user profile (protected)

Authentication
Uses JWT tokens in Authorization: Bearer <token> header

Passwords hashed with bcrypt before storage

Protected routes verify token and user identity

Error Handling
Centralized error middleware returns consistent JSON error responses

Errors logged to console in development mode for debugging

Future Improvements
Add request input validation (e.g., express-validator)

Implement role-based access control (user vs admin)

Add API documentation with Swagger/OpenAPI

Integrate test suite with Jest or Mocha

Configure CI/CD and Docker for deployment

License
This project is licensed under the MIT License.