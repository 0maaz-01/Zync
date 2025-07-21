# Zync 
 
A **full-stack real-time video calling and chat web app** that helps users connect with people. Built using the MERN stack along with Stream Chat and Zustand for advanced messaging, video calling and state management.

This platform allows users to:

* **Chat** with other users.
* **Place one-on-one or group video calls** with screen sharing.
* **Send and receive friend requests**
* **Get real-time notifications**
* Enjoy a smooth **authentication flow** and responsive user interface

---

## 🌟 Features & Highlights

### 💬 Real-Time Chat

* One-to-one messaging using **Stream Chat**
* Message persistence and delivery tracking

### 🎥 Group Video Calls

* Join or start one on one / group video calls
* **Screen sharing** supported

### 🔔 Notifications

* Get notified instantly on new friend requests
* Accept or reject friend requests within the app

### 🔐 Authentication

* Secure login and signup functionality
* JWT-based protected routes

---

## 📄 Pages Overview

1. **Login / Signup Pages** 🔑
   Auth pages with form validation, password encryption, and session management.

2. **Home Page** 🏠
   Display a list of current friends and all users on the platform.

3. **Notification Center** 🔔
   Friend request notifications and interactions (accept/deny).

4. **Chat Page** 💬
   Real-time messaging experience using Stream Chat integration.

5. **Video Call Page** 📹
   One-on-one and group video conferencing with screen sharing.

---

## Screenshots & Demo 📸

### 💻 Desktop View

<img src="https://github.com/0maaz-01/Zync/blob/main/Images/E.png" alt="Thumbnail" width="320" height="180"> <img src="https://github.com/0maaz-01/Zync/blob/main/Images/D.png" alt="Thumbnail" width="320" height="180">
<img src="https://github.com/0maaz-01/Zync/blob/main/Images/A.jpg" alt="Thumbnail" width="320" height="180"> <img src="https://github.com/0maaz-01/Zync/blob/main/Images/B.jpg" alt="Thumbnail" width="320" height="180"><img src="https://github.com/0maaz-01/Zync/blob/main/Images/C.jpg" alt="Thumbnail" width="320" height="180"> <img src="https://github.com/0maaz-01/Zync/blob/main/Images/G.png" alt="Thumbnail" width="320" height="180">
<img src="https://github.com/0maaz-01/Zync/blob/main/Images/J.png" alt="Thumbnail" width="320" height="180"> <img src="https://github.com/0maaz-01/Zync/blob/main/Images/F.png" alt="Thumbnail" width="320" height="180"> <img src="https://github.com/0maaz-01/Zync/blob/main/Images/I.png" alt="Thumbnail" width="320" height="180">

  
### 📱 Mobile View

<img src="https://github.com/0maaz-01/Zync/blob/main/Images/AM.jpg" alt="Thumbnail" width="220" height="500"> <img src="https://github.com/0maaz-01/Zync/blob/main/Images/BM.jpg" alt="Thumbnail" width="220" height="500"><img src="https://github.com/0maaz-01/Zync/blob/main/Images/CM.jpg" alt="Thumbnail" width="220" height="500"><img src="https://github.com/0maaz-01/Zync/blob/main/Images/DM.jpg" alt="Thumbnail" width="220" height="500"><img src="https://github.com/0maaz-01/Zync/blob/main/Images/EM.jpg" alt="Thumbnail" width="220" height="500">
<img src="https://github.com/0maaz-01/Zync/blob/main/Images/FM.jpg" alt="Thumbnail" width="220" height="500">
<img src="https://github.com/0maaz-01/Zync/blob/main/Images/GM.jpg" alt="Thumbnail" width="220" height="500">
<img src="https://github.com/0maaz-01/Zync/blob/main/Images/HM.jpg" alt="Thumbnail" width="220" height="500">
<img src="https://github.com/0maaz-01/Zync/blob/main/Images/JM.jpg" alt="Thumbnail" width="220" height="500">
<img src="https://github.com/0maaz-01/Zync/blob/main/Images/KM.jpg" alt="Thumbnail" width="220" height="500">
<img src="https://github.com/0maaz-01/Zync/blob/main/Images/IM.jpg" alt="Thumbnail" width="220" height="500">
<img src="https://github.com/0maaz-01/Zync/blob/main/Images/LM.jpg" alt="Thumbnail" width="220" height="500">


---

## 🛠 Technologies Used
![My Skills](https://skillicons.dev/icons?i=mongodb,express,react,nodejs,js,html,css,tailwind)

| Tech Stack       | Purpose / Usage                                      |
| ---------------- | ---------------------------------------------------- |
| **MongoDB**      | Database for storing user data and connections       |
| **Mongoose**     | ODM for MongoDB                                      |
| **Express.js**   | Backend API & routes                                 |
| **React.js**     | Frontend UI framework                                |
| **Tailwind CSS** | Responsive styling                                   |
| **CSS / HTML**   | Structure and base styling                           |
| **Zustand**      | Lightweight state management                         |
| **Stream Chat**  | Real-time messaging & video calling service                          |
| **JWT**          | Authentication                                       |
| **Socket.io**    | Real-time communication for calls |
| **Node JS**        | For setting up the backend                    |

---


## 🚀 Installation Guide

To run the project locally, follow these steps:

1. Fork this repository.

2. Open the **frontend** and **backend** folders in separate terminals, and run the `npm install` command in both.

3. Set up `.env` files in both the frontend and backend folders.

   **a) Frontend `.env` file:**

   ```
   VITE_STEAM_API_KEY=your_steam_api_key
   ```

   **b) Backend `.env` file:**

   ```
   PORT=5001  
   MONGO_URI=your_mongodb_url

   STEAM_API_KEY=your_steam_api_key  
   STEAM_API_SECRET=your_secret_steam_api_key

   JWT_SECRET_KEY=your_jwt_secret_key  
   NODE_ENV=development
   ```

4. Run `npm run dev` in both frontend and backend terminal windows.
5. Open http://localhost:5173/

---

## 🤝 Contributing

Want to improve this project? Contributions are always welcome!

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Push to your fork
5. Submit a Pull Request

---

## 📄 License

**MIT License**

Copyright (c) 2025 Mohammed Maaz Rayeen

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

The software is provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.
