# StudyNotion - Mega Project

StudyNotion is a fully functional **Ed-Tech Platform** built using the **MERN Stack** (MongoDB, ExpressJS, ReactJS, NodeJS). The platform enables users to create, consume, and rate educational content. It supports authentication, course management, payments, media handling, and more.

---

## 🧠 Project Architecture

The application follows a **client-server architecture** with the following components:

- **Frontend:** ReactJS, Tailwind CSS, Redux
- **Backend:** NodeJS, ExpressJS
- **Database:** MongoDB (NoSQL)

---

## 🚀 Tech Stack

- **Frontend:** ReactJS, TailwindCSS, Redux
- **Backend:** NodeJS, ExpressJS
- **Database:** MongoDB
- **Authentication:** JWT, Bcrypt
- **Media Storage:** Cloudinary
- **Payment Integration:** Razorpay

---

## 📦 Deployment

- **Frontend:** Vercel
- **Backend:** Render
- **Media Storage:** Cloudinary

---

## 🧩 Data Models and Database Schema

![Database Schema](https://github.com/user-attachments/assets/2eec75a0-ef02-468e-bc25-083579e1fa5d)

---

## 🎨 UI Screens

![UI Preview](https://github.com/user-attachments/assets/cdabb435-9068-481f-be25-d2f0813867cd)

---

## 📡 REST API Design

All APIs follow **RESTful principles** and communicate via **JSON**.

### 🔐 Authentication Routes

- `POST /api/auth/signup` – Register a new user (student/instructor)
- `POST /api/auth/login` – Login and receive JWT token
- `POST /api/auth/verify-otp` – Verify OTP sent via email
- `POST /api/auth/forgot-password` – Password reset request

### 📚 Course Routes

- `GET /api/courses` – List all courses
- `GET /api/courses/:id` – Get course details by ID
- `POST /api/courses` – Create new course
- `PUT /api/courses/:id` – Update course
- `DELETE /api/courses/:id` – Delete course
- `POST /api/courses/:id/rate` – Add rating to a course

---

## 🖥️ Frontend Pages

### 👨‍🎓 For Students:

- **Homepage** – Overview of the platform
- **Course List** – List with descriptions and ratings
- **Wishlist** – Saved courses
- **Cart Checkout** – Payment & enrolment
- **Course Content** – Videos, docs, and lectures
- **User Details/Edit** – Account info and editing

### 👩‍🏫 For Instructors:

- **Dashboard** – Course overview & ratings
- **Insights** – Engagement metrics
- **Course Management** – CRUD operations for courses
- **Profile Management** – View & edit instructor profile

### 👨‍💼 For Admins (Future Scope):

- **Dashboard** – Platform-wide overview
- **Insights** – User, course, revenue analytics
- **Instructor Management** – Manage instructors and content
- **User/Course Management** – Admin-level CRUD operations

---

## 🔧 Backend Features

- **Monolithic architecture** built with Express.js and Node.js
- **MongoDB** for scalable NoSQL data storage
- **Authentication** using JWT with OTP verification
- **Password hashing** using Bcrypt
- **Course Management** with full CRUD functionality
- **Razorpay Integration** for secure payments
- **Cloudinary** for image/video/doc upload & optimization
- **Markdown support** for readable course documents

---

## 🧰 Libraries & Tools Used

| Technology     | Purpose                             |
|----------------|-------------------------------------|
| Node.js        | Backend runtime                     |
| Express.js     | Web application framework           |
| MongoDB        | NoSQL database                      |
| Mongoose       | ODM for MongoDB                     |
| ReactJS        | Frontend UI framework               |
| Redux          | State management                    |
| Tailwind CSS   | UI styling                          |
| JWT            | Secure token-based authentication   |
| Bcrypt         | Secure password hashing             |
| Cloudinary     | Media storage & CDN                 |
| Razorpay       | Payment gateway                     |

---

## 📌 Summary

StudyNotion is a robust full-stack educational platform that bridges the gap between educators and learners. With a clean UI, secured backend, seamless payments, and responsive design, it's an ideal foundation for real-world ed-tech applications.

---
