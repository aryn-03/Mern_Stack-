# User Management Application - Backend

Backend server for the User Management Application built with Express.js and MongoDB.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm

## Installation

1. Navigate to the Backend directory:
```bash
cd Backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with your configuration:
```
DB_URL=mongodb://mongodb_connection_string
PORT=4000
```

## Running the Server

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on the port specified in your `.env` file (default: 4000).

## API Endpoints

### User Management
- `POST /user-api/users` - Create a new user
- `GET /user-api/users` - Get all users (Status: true)
- `GET /user-api/users/:id` - Get user by ID
- `PUT /user-api/users/:id` - Update user completely
- `PATCH /user-api/users/:id` - Activate user (soft delete recovery)
- `DELETE /user-api/users/:id` - Soft delete user (set Status to false)

## User Model

```javascript
{
  name: String (required),
  email: String (required, unique),
  dateOfBirth: Date (required),
  mobileNumber: Number,
  Status: Boolean (default: true),
  timestamps: true
}
```

## Technologies

- **Express.js** - Web server framework
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## License

ISC
