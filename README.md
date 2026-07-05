# 💬 Online Chat Application — Client (Frontend)

A modern **real-time chat application frontend** built with **React.js**. This client provides a responsive and user-friendly interface where users can log in, view online users, send and receive messages instantly, and enjoy a smooth chatting experience.

> **Note:** This repository contains only the **client-side (frontend)** of the application. It communicates with the backend API using Axios and supports real-time messaging through Socket.io.

---

# 📸 Preview

> Add screenshots of your application here.

| Login Page | Chat Page |
|------------|-----------|
| ![Login](./screenshots/login.png) | ![Chat](./screenshots/chat.png) |

---

# 🚀 Features

- 🔐 User Authentication
- 👤 User Login & Logout
- 💬 Real-Time Messaging
- 👥 Online Users List
- 📩 Send & Receive Messages
- ⚡ Instant UI Updates
- 📱 Responsive Design
- 🔄 Auto Refresh of Messages
- 🎨 Clean and Modern Interface
- 🌐 REST API Integration
- 🔌 Socket.io Client Integration
- ⚛️ React Hooks
- 📦 Component-Based Architecture

---

# 🛠 Tech Stack

| Technology | Purpose |
|------------|----------|
| React.js | Frontend Library |
| JavaScript (ES6+) | Programming Language |
| Vite | Development Environment |
| Axios | API Requests |
| React Router DOM | Client-side Routing |
| Socket.io Client | Real-Time Communication |
| CSS3 | Styling |

---

# 📂 Folder Structure

```
client
│
├── public
│
├── src
│   ├── assets
│   │
│   ├── components
│   │   ├── ChatBox.jsx
│   │   ├── Sidebar.jsx
│   │   ├── Message.jsx
│   │   ├── MessageInput.jsx
│   │   ├── Navbar.jsx
│   │   └── ...
│   │
│   ├── pages
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   └── Signup.jsx
│   │
│   ├── context
│   │
│   ├── hooks
│   │
│   ├── utils
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── vite.config.js
```

---

# ⚙️ Installation

## Clone the Repository

```bash
git clone https://github.com/yourusername/chat-app-client.git
```

Go inside the project

```bash
cd chat-app-client
```

Install Dependencies

```bash
npm install
```

Start Development Server

```bash
npm run dev
```

The application will run on

```
http://localhost:5173
```

---

# 🔑 Environment Variables

Create a `.env` file in the root directory.

```env
VITE_API_URL=http://localhost:5000
```

Example:

```env
VITE_API_URL=http://localhost:5000/api
```

---

# 🔄 Application Flow

```
User Opens App
        │
        ▼
Login / Signup
        │
        ▼
Authentication
        │
        ▼
Load User List
        │
        ▼
Select a User
        │
        ▼
Fetch Previous Messages
        │
        ▼
Start Real-Time Chat
        │
        ▼
Send / Receive Messages
```

---

# 📦 Main Components

## Sidebar

- Displays all available users
- Highlights selected user
- Shows online users
- Fetches user list from backend

---

## ChatBox

Responsible for

- Displaying conversation
- Loading previous messages
- Auto-scrolling to latest message
- Sending new messages
- Receiving real-time updates

---

## Message

Displays

- Sender message
- Receiver message
- Message alignment
- Timestamp (optional)

---

## MessageInput

Handles

- Typing messages
- Sending messages
- Enter key support
- Input validation

---

# 🔌 API Integration

The frontend communicates with the backend using Axios.

Example

```javascript
axios.get("/api/messages/:id");

axios.post("/api/messages/send/:id", {
    message: text
});
```

---

# ⚡ Real-Time Communication

Socket.io Client is used for

- User connection
- Online status
- Receiving new messages
- Sending messages instantly

Typical Flow

```
Connect Socket
       │
       ▼
Join User Room
       │
       ▼
Receive Messages
       │
       ▼
Update React State
       │
       ▼
Re-render UI
```

---

# 🎨 UI Features

- Responsive Layout
- Chat Bubbles
- Scrollable Conversations
- Online User Indicators
- Active Chat Highlight
- Modern Design
- Smooth User Experience

---

# 📱 Responsive Design

Supports

- Desktop
- Laptop
- Tablet
- Mobile Devices

---

# 📌 Scripts

Run Development Server

```bash
npm run dev
```

Build Production

```bash
npm run build
```

Preview Build

```bash
npm run preview
```

---

# 🚀 Future Improvements

- ✅ Emoji Support
- ✅ Typing Indicator
- ✅ Message Seen Status
- ✅ Voice Messages
- ✅ Image Sharing
- ✅ File Sharing
- ✅ Group Chat
- ✅ Video Calling
- ✅ Notifications
- ✅ Dark Mode

---

# 🧩 Dependencies

Common packages used

```json
{
  "react": "^19.x",
  "react-dom": "^19.x",
  "react-router-dom": "^7.x",
  "axios": "^1.x",
  "socket.io-client": "^4.x"
}
```

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository

2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push the branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# 📄 License

This project is licensed under the **MIT License**.

---

# 👨‍💻 Author

**Ashok Sam**

GitHub: https://github.com/yourusername

LinkedIn: https://linkedin.com/in/yourprofile

---

# ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.

It helps others discover the project and motivates future improvements.

---

## 🙌 Acknowledgements

Thanks to the open-source community and the creators of:

- React
- Vite
- Axios
- Socket.io
- Node.js
- Express.js
- MongoDB

for making full-stack web development faster and more enjoyable.
