# BookMySport 🏏🏓🏸 – Sports Venue Booking Platform
BookMySport is a full-stack web application that allows users to register, browse sports venues, select available time slots, and confirm bookings. It supports real-time slot availability, secure JWT-based login, and seamless backend integration using the MERN tech stack (MongoDB, Express.js, Node.js) with HTML/CSS for the frontend.

📌 Features
👤 User Authentication (JWT based)

📅 Live Slot Booking System

⛔ Prevents double bookings (real-time slot disabling)

🏟️ Venue & Sport selection

💳 "Pay at Venue" confirmation

📁 RESTful APIs built using Express.js

🧾 Booking summary with calculated tax and amount

🔐 Protected routes with JWT middleware

🎨 Static frontend using HTML, CSS, and JavaScript + Axios for API calls

🛠 Tech Stack
Layer	Technology
Frontend	HTML5, CSS3, JavaScript
Backend	Node.js, Express.js
Database	MongoDB + Mongoose
Auth	JWT (JSON Web Tokens)
API Client	Axios
Version Control	Git & GitHub

🏗️ Project Structure
pgsql
Copy
Edit
BookMySport/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   └── Booking.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── Booking.js
│   ├── middleware/
│   │   └── authmiddleware.js
│   └── server.js
├── public/
│   ├── booking.html
│   ├── payment.html
│   └── confirmation.html
├── .env
└── README.md
🧑‍💻 Installation & Setup
Clone the repo

Open Cmd and code:

git clone https://github.com/your-username/BookMySport.git
cd BookMySport
Install dependencies

Open Cmd and code:

cd backend
npm install
Create a .env file in /backend folder:



Open Cmd and code:
node server.js
Serve static frontend
Use any static server (like VS Code Live Server) to serve files from the public/ folder.

📋 API Endpoints
Method	Endpoint	Description	Auth Required
POST	/api/v1/auth/register	Register new user	No
POST	/api/v1/auth/login	Login user (returns token)	No
POST	/api/v1/bookings	Create new booking	Yes (JWT)
GET	/api/v1/bookings	Get booked slots by date	No

🔒 Auth Flow
Users register and login.

A JWT is stored in localStorage.

On protected routes (like /bookings), the token is sent in headers as:

makefile
Copy
Edit
Authorization: Bearer <token>
The authmiddleware.js verifies the token and attaches the user ID to req.user.

Screenshots of the website are uploaded in repository.


🧠 What I Learned
Building secure login and auth systems using JWT

Designing slot booking logic with real-time clash detection

Writing RESTful API routes using Express and Mongoose

Connecting static frontend to backend using Axios

Managing protected routes and middleware


📬 Contact
For queries or collaborations: keyurarora17@gmail.com
