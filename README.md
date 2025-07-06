# 🏥 MidCity Hospital Web Application

A full-stack healthcare management platform. It allows patients to:

* View and order medicines 💊
* Book lab test appointments 🧪
* Schedule checkups with doctors 👨‍⚕️
* Book surgeries with prescription upload 🏥



## 🚀 Tech Stack

**Frontend**: React, CSS Modules
**Backend**: Node.js, Express
**Database**: MongoDB (with Mongoose)
**File Uploads**: Multer




## 📁 Folder Structure


MidCity_Hospital/
│
├── client/               # React frontend
├── server/               # Express backend
├── .env                  # Environment variables
├── README.md             # You're here
└── package.json


## ⚙️ Setup Instructions

### 1. Clone the Repo


git clone https://github.com/samarsajad/midcity-hospital.git
cd MidCity_Hospital


### 2. Backend Setup (`server/`)

#### 🔹 Install Dependencies


cd server
npm install


#### 🔹 Create `.env` File

Inside `server/`, create a `.env` file:


MONGO_URI=your_mongodb_connection_string


> 📝 Use your own MongoDB URI. You can get it from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

#### 🔹 Start Backend Server


node index.js


Server runs on: [http://localhost:5000](http://localhost:5000)



### 3. Frontend Setup (`client/`)

#### 🔹 Install Dependencies


cd ../client
npm install


#### 🔹 Start Frontend Server


npm start


App runs on: [http://localhost:3000](http://localhost:3000)



## 🗂 Features Overview

### 🧾 Pharmacy Page

* Lists medicines from MongoDB
* Medicine details (brand, composition, price)
* Stylish grid layout with images

### 🧪 Lab Test Booking

* User enters details
* Selects tests from predefined list
* Appointment stored in database

### 🧪 Doctor Checkup

* Lists doctors with photo & specialization
* Select doctor + enter patient details
* Books appointment to MongoDB

### 🏥 Surgery Booking

* Form with patient details
* Choose doctor + surgery type
* Upload prescription (PDF/image)
* Stores file + data in MongoDB



## 🧠 Admin View

* All data (medicines, appointments, surgeries) can be viewed in MongoDB via [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or Compass.



## 🧑‍💻 Contributors

Contributions are welcome.



## 📌 Notes

* Uploads are saved in `/uploads/` directory and served statically
* MongoDB must be running or accessible via cloud URI

