# User Management Application

A full-stack MERN (MongoDB, Express, React, Node.js) application for managing user information with a modern web interface.

## Project Structure

```
user-management-app/
├── Backend/          # Express.js server with MongoDB
├── Frontend/         # React application with Vite
└── req.http         # API testing file (REST client)
```

## Quick Start

### Backend Setup

```bash
cd Backend
npm install
# Create .env file with DB_URL and PORT
npm start
```

The backend server runs on `http://localhost:4000` by default.

### Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```

The frontend development server runs on `http://localhost:5173` by default.

## Features

- Create new users
- View all users
- View user details
- Edit user information
- Delete users (soft delete)
- Restore deleted users
- Responsive UI with Tailwind CSS

## Technologies Used

### Backend
- Node.js with Express.js
- MongoDB with Mongoose
- CORS for cross-origin requests
- dotenv for environment management

### Frontend
- React 19
- Vite for fast build tooling
- React Router for navigation
- Tailwind CSS for styling

## Environment Variables

### Backend (.env)
```
DB_URL=your_mongodb_connection_url
PORT=4000
```

## API Documentation

All API endpoints are prefixed with `/user-api`

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /users | Create a new user |
| GET | /users | Get all active users |
| GET | /users/:id | Get user by ID |
| PUT | /users/:id | Update user completely |
| PATCH | /users/:id | Activate/restore user |
| DELETE | /users/:id | Soft delete user |

## User Fields

- **name** (string, required) - User's full name
- **email** (string, required, unique) - User's email address
- **dateOfBirth** (date, required) - User's date of birth
- **mobileNumber** (number) - User's phone number
- **Status** (boolean, default: true) - User's active status

## Running Both Servers

Open two terminals:

**Terminal 1 - Backend:**
```bash
cd Backend
npm start
```

**Terminal 2 - Frontend:**
```bash
cd Frontend
npm run dev
```

Then navigate to `http://localhost:5173` in your browser.

## Building for Production

### Frontend
```bash
cd Frontend
npm run build
```
