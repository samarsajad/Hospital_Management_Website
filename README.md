# 🏥 MidCity Hospital Web Application

A modern full-stack healthcare management platform that streamlines key hospital services online.

---

## 📌 What Can Users Do?

- 💊 Browse and order medicines
- 🧪 Book lab test appointments
- 👨‍⚕️ Schedule doctor checkups
- 🏥 Request surgery bookings with prescription uploads

---

## ✨ Features Overview

- 🧾 Pharmacy: Browse available medicines with details and pricing
- 🧪 Lab Tests: Book lab test appointments from a predefined list
- 👨‍⚕️ Doctor Checkups: Browse doctors and book appointments
- 🏥 Surgery Booking: Upload prescriptions and request surgeries
- 🧠 Admin Panel: Manage appointments and listings via MongoDB

---

## ✨ Features

### 🧾 Pharmacy

- View available medicines with images and details (brand, composition, price)
- Data stored in MongoDB

### 🧪 Lab Test Booking

- Enter patient details and select tests from a predefined list
- Booking data saved in MongoDB

### 👨‍⚕️ Doctor Checkups

- Browse doctors by photo and specialization
- Book checkups with patient details

### 🏥 Surgery Booking

- Fill out a form with patient and surgery details
- Upload prescription (PDF/image)
- Files and data stored securely

### 🧠 Admin Panel

- View and manage all appointments, medicine listings, and surgeries through MongoDB (Compass or Atlas)

---

## 🚀 Tech Stack

| Layer        | Technology            |
|--------------|------------------------|
| Frontend     | React, CSS Modules     |
| Backend      | Node.js, Express       |
| Database     | MongoDB with Mongoose  |
| File Uploads | Multer                 |

---

## 📚 Table of Contents

- [What Can Users Do?](#-what-can-users-do)
- [Features Overview](#-features-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Backend Setup](#2-backend-setup-server-folder)
  - [3. Frontend Setup](#3-frontend-setup-client-folder)
- [Notes](#-notes)
- [Contributors](#-contributors)
- [Contributing Steps](#-contributing-steps)
- [License](#-license)
- [Need Help?](#-need-help)

---

## 🛠️ Getting Started

### 1. 📥 Clone the Repository

Git Bash
git clone https://github.com/samarsajad/Hospital_Management_Website.git
cd Hospital_Management_Website


### 2. 🔧 Backend Setup (`/server` folder)

🔹 Install Dependencies
Git Bash:
cd server
npm install
🔹 Create .env File
Inside the server/ directory, create a .env file with the following:

MONGO_URI=your_mongodb_connection_string
💡 You can create a free MongoDB cluster at MongoDB Atlas or use a local MongoDB instance.

🔹 Start the Backend Server
Git Bash :

node index.js
🖥 Server will run at: http://localhost:5000

 ### 3. Frontend Setup (/`/client` folder)
🔹 Install Dependencies
Git Bash :

cd ../client
npm install
🔹 Start the Frontend Server
Git Bash :

npm start
🌐 App will be accessible at: http://localhost:3000

## 🗂 Folder Structure Notes
📁 /uploads/
Stores uploaded prescription files.
If it doesn’t exist, create it manually inside the server/ directory.

🛠 Files in /uploads/ are served statically by the backend.

👥 Contributors
We welcome contributions of all kinds, whether it’s fixing bugs, improving documentation, or adding new features!

## 🚀 Contributing Steps
- Fork the repository

- Create a new branch:
git checkout -b your-feature-name

- Make your changes and commit:
-git commit -m "Your meaningful message"

- Push to your fork:
git push origin your-feature-name

### Create a Pull Request on GitHub ✅

This project is part of GirlScript Summer of Code 2025 (GSSoC '25) 🌸

## 📄 License
This project is licensed under the MIT License.


 
## 🙋‍♀️ Need Help?
Feel free to:

- Open an Issue

- Ask questions or suggest ideas via GitHub Discussions

- Connect with the GSSoC community for guidance

- Let’s build something impactful together! 💻✨


## 📝 Notes

- Uploaded files are saved in the `/uploads/` directory and served statically by the backend.
- Make sure the `/uploads/` directory exists inside the `server/` folder. If not, create it manually.
- MongoDB must be running locally or accessible via a valid cloud URI (e.g., MongoDB Atlas).
