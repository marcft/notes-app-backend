# Notes App Backend

This is the backend for the Notes App, part of the FullStack Open course. The backend is developed using Node.js, Express, and MongoDB. The frontend is developed using React. This backend server is designed to support a notes app where users can add and manage notes.

## Deployment

The application on main-app is deployed on Render and can be accessed [here](https://notes-app-backend-lqz4.onrender.com).

## Getting Started

To get started with the backend, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/marcft/notes-app.git
   cd notes-app/backend
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the root of the backend directory and add the following environment variables:

   ```env
   PORT=3001
   MONGODB_URI=your_mongodb_uri
   ```

4. Start the development server:

   ```sh
   npm run dev
   ```

## API Endpoints

### Notes

- `GET /api/notes` - Get all notes
- `POST /api/notes` - Create a new note
- `GET /api/notes/:id` - Get a note by ID
- `PUT /api/notes/:id` - Update a note by ID
- `DELETE /api/notes/:id` - Delete a note by ID

## Project Structure

- `index.js` - Entry point of the application
- `controllers/` - Contains the route handlers
- `models/` - Contains the Mongoose models
- `utils/` - Utility functions and middleware

## Learn More

This project is part of the FullStack Open course. For more information, visit the [FullStack Open website](https://fullstackopen.com/).
