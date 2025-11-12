# 🧩 Project Management App

A **full-stack project collaboration platform** built with **MERN stack + Prisma ORM**, featuring **workspace management**, **projects**, **tasks**, **comments**, and **real-time collaboration** powered by modern tools like **Clerk**, **Vite**, and **Redux Toolkit**.

---

## 🚀 Tech Stack

### 🖥️ Frontend
- **React 19 + Vite 6** – Fast, modern frontend setup  
- **Redux Toolkit + React Query** – For state and async data management  
- **Tailwind CSS 4** – Utility-first responsive design  
- **Clerk** – Authentication & user management  
- **Recharts** – Analytics and visualizations  
- **React Hot Toast** – Quick feedback notifications  
- **React Router v7** – Page routing  

### ⚙️ Backend
- **Express 5** – API framework  
- **Prisma ORM** – Database schema and access layer  
- **NeonDB / PostgreSQL** – Scalable database  
- **Inngest** – Background events (notifications, task updates)  
- **Clerk (Server SDK)** – Auth middleware  
- **Nodemailer** – Email notifications  

---

## 🧱 Core Features

### 👥 Workspace Management
- Create workspaces and manage members  
- Role-based permissions (Admin / Member)  

### 📁 Project Management
- Create, update, and delete projects within workspaces  
- Assign project leads and team members  
- Track project progress, status, and priority  

### ✅ Task Management
- Create and assign tasks to team members  
- Update status, priority, due dates  
- Cascade deletion and validation for assignee permissions  

### 💬 Comments System
- Task-level discussions  
- Only project members can comment  
- Real-time sync (optional WebSocket or polling integration)

### 🔒 Authentication
- Secure login/signup via **Clerk**  
- Session-based authorization on both client & server  

### 📊 Dashboard
- Workspace overview with nested projects and tasks  
- Charts (via Recharts) to visualize progress and performance  


## ⚙️ Setup & Installation

### 1️⃣ Clone the repository

git clone https://github.com/yourusername/project-management.git

cd project-management

2️⃣ Install dependencies

Backend

cd server

npm install

Frontend

cd client

npm install

3️⃣ Environment Variables

Backend .env

DATABASE_URL="postgresql://user:password@host:port/dbname"

JWT_SECRET="your_jwt_secret"

CLERK_SECRET_KEY="your_clerk_secret"

EMAIL_USER="your_email"

EMAIL_PASS="your_app_password"

Frontend .env

VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key

VITE_API_URL=http://localhost:5000/api

4️⃣ Run the app

Backend (development)

npm run dev

Frontend (development)

npm run dev

App will run at:

🖥️ Frontend → http://localhost:5173

⚙️ Backend → http://localhost:5000

🧰 Prisma Commands

# Generate Prisma client

npx prisma generate

# Push schema to database

npx prisma db push

# Open Prisma Studio (DB UI)

npx prisma studio

## Screen Shots

## Login
<img width="746" height="558" alt="image" src="https://github.com/user-attachments/assets/67f93137-8815-42f4-a7be-678c70b81618" />


## Dashboard


## Tasks



🧑‍💻 Author

Sanjay Aggi

📧 aggisanjay123@gmail.com

🪪 License

This project is licensed under the MIT License – you’re free to use and modify with attribution.
