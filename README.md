# TaskTrove

TaskTrove is a full-stack web application designed to help users manage projects and tasks efficiently. Built with a **React** frontend and a **Node.js/Express** backend, it uses **MongoDB Atlas** for data storage and provides a clean, intuitive interface for user authentication, project organization, and task tracking.

GitHub Repository: [https://github.com/Iflaqbhat/TaskTrove](https://github.com/Iflaqbhat/TaskTrove)

## Features

- **User Authentication**: Secure signup and login with JWT-based authentication.
- **Project Management**: Create, view, and manage projects associated with your account.
- **Task Tracking**: Add, update, and delete tasks within projects, with statuses (Not Started, In Progress, Completed).
- **Responsive UI**: A modern, responsive frontend built with React, React Router, and Tailwind CSS.
- **Persistent Storage**: Data stored in MongoDB Atlas for users, projects, and tasks.
- **Dynamic Navigation**: Navbar adapts based on authentication status (Login/Signup for guests, Dashboard/Logout for authenticated users).

## Tech Stack

### Frontend
- **React**: For building the user interface.
- **React Router**: For client-side routing.
- **Axios**: For making API requests to the backend.
- **Tailwind CSS**: For styling the application.
- **Vite**: For fast development and building.

### Backend
- **Node.js/Express**: For handling API requests and server logic.
- **MongoDB Atlas**: Cloud-based NoSQL database for data storage.
- **Mongoose**: For MongoDB object modeling.
- **JWT**: For secure user authentication.
- **Bcryptjs**: For password hashing.
- **CORS**: For enabling cross-origin requests.



## Prerequisites

- **Node.js** (v18 or higher): [Download](https://nodejs.org/)
- **MongoDB Atlas Account**: Sign up at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) to set up a database.
- **Git**: [Download](https://git-scm.com/downloads) for cloning the repository.

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/Iflaqbhat/TaskTrove.git
cd TaskTrove

2. Set Up the Backend
Navigate to Backend Directory:
bash

cd backend

Install Dependencies:
bash

npm install

Create .env File:
Create a .env file in backend/ with the following:

MONGO_URI=mongodb+srv://<username>:<password>@cluster0.0ajox62.mongodb.net/TaskTrove?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret
PORT=5000

Replace <username> and <password> with your MongoDB Atlas credentials.
Ensure the password is URL-encoded (e.g., @ becomes %40).

Example: If password is Iflak@123, use Iflak%40123.

Generate a secure JWT_SECRET (e.g., run openssl rand -base64 32).

Set Up MongoDB Atlas:
Log in to MongoDB Atlas.

Create a cluster (e.g., Cluster0).

Go to Database Access and add a user with readWriteAnyDatabase role.

Go to Network Access and allow 0.0.0.0/0 (for testing) or your IP.

The TaskTrove database will be created automatically on first write.

Run the Backend:
bash

npm run dev

Expect:

Connected to MongoDB
Server running on port 5000

3. Set Up the Frontend
Navigate to Frontend Directory:
bash

cd ../frontend

Install Dependencies:
bash

npm install

Run the Frontend:
bash

npm run dev

Open http://localhost:5173 in a browser.

The homepage (Home.jsx) should display with Signup and Login buttons.

4. Test the Application
Homepage: Visit http://localhost:5173 to see the welcome page.

Signup: Navigate to /signup, create a user, and verify in MongoDB Atlas (TaskTrove.users).

Login: Log in at /login and access the dashboard.

Projects/Tasks: Create and manage projects and tasks, checking TaskTrove.projects and TaskTrove.tasks in MongoDB.

Usage
Access the App:
Open http://localhost:5173 after starting both backend and frontend.

The homepage welcomes users with options to sign up or log in.

User Authentication:
Signup: Register with a name, email, and password.

Login: Use your credentials to access the dashboard.

Logout: Available in the navbar for authenticated users.

Manage Projects:
In the dashboard, create new projects and view existing ones.

Click a project to see its tasks.

Manage Tasks:
Add tasks to a project with a title, description, and status.

Update task statuses (Not Started, In Progress, Completed) or delete tasks.

