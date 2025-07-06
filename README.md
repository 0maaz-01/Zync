# Zync

A **full-stack real-time language learning platform** that helps users connect with fellow learners. Built using the MERN stack along with Stream Chat and Zustand for advanced messaging, video calling and state management.

This platform allows users to:

* **Chat** with other users who are learning the same language
* **Place one-on-one or group video calls** with screen sharing
* **Send and receive friend requests**
* **Get real-time notifications**
* Enjoy a smooth **authentication flow** and responsive user interface

---

## 🌟 Features & Highlights

### 👥 Social Learning

* Connect with people learning the same language
* Browse all users and current friends from the homepage

### 💬 Real-Time Chat

* One-to-one messaging using **Stream Chat**
* Message persistence and delivery tracking

### 🎥 Group Video Calls

* Join or start group video calls
* **Screen sharing** supported

### 🔔 Notifications

* Get notified instantly on new friend requests
* Accept or reject friend requests within the app

### 🔐 Authentication

* Secure login and signup functionality
* JWT-based protected routes

### 🏠 Dashboard

* View your connections and discover other learners
* See who’s online, initiate chats or calls easily

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
| **Stream Chat**  | Real-time messaging service                          |
| **JWT**          | Authentication                                       |
| **Socket.io**    | (Optional if used) Real-time communication for calls |

---

## Screenshots & Demo 📸

### 💻 Desktop View

<img src="https://github.com/0maaz-01/Zync/blob/main/Images/HomePage.jpg" alt="Thumbnail" width="320" height="180"><img src="https://github.com/0maaz-01/Zync/blob/main/Images/Signin.jpg" alt="Thumbnail" width="320" height="180"><img src="https://github.com/0maaz-01/Zync/blob/main/Images/Signin.jpg" alt="Thumbnail" width="320" height="180">

 <br></br>

<img src="https://github.com/0maaz-01/Netflix-Clone/blob/main/Netflix%20Pages/MovieDetailPage.png" alt="Thumbnail" width="320" height="180"><img src="https://github.com/0maaz-01/Netflix-Clone/blob/main/Netflix%20Pages/SearchHistory.page.png" alt="Thumbnail" width="320" height="180"><img src="https://github.com/0maaz-01/Netflix-Clone/blob/main/Netflix%20Pages/SearchPage.png" alt="Thumbnail" width="320" height="180">

 <br></br>
  
### 📱 Mobile View

[<img src="https://github.com/0maaz-01/Netflix-Clone/blob/main/Netflix%20Pages/Mobile2.jpg" alt="Thumbnail" width="220" height="500">
<img src="https://github.com/0maaz-01/Netflix-Clone/blob/main/Netflix%20Pages/Mobile3.jpg" alt="Thumbnail" width="220" height="500">
<img src="https://github.com/0maaz-01/Netflix-Clone/blob/main/Netflix%20Pages/Mobile4.jpg" alt="Thumbnail" width="220" height="500">
<img src="https://github.com/0maaz-01/Netflix-Clone/blob/main/Netflix%20Pages/Mobile5.jpg" alt="Thumbnail" width="220" height="500">]

---


## 🚀 Installation Guide

To run the project locally, follow these steps:

```bash
# Backend setup
npm install express mongoose jsonwebtoken

# Frontend setup
npm install react react-dom zustand tailwindcss@3 postcss autoprefixer stream-chat-react

# Optional packages
npm install react-hot-toast react-router-dom
```

Tailwind Initialization:

```bash
npx tailwindcss init -p
```

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
