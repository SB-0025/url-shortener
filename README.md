# 🔗 MERN URL Shortener

A full‑stack URL shortener built using the **MERN stack**. Convert long URLs into clean, shareable short links instantly.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

🌐 **Live Demo:** [url-shortener-blond-delta.vercel.app](https://url-shortener-blond-delta.vercel.app/)

---

## ✨ Features

- 🔗 Convert long URLs into short, shareable links
- ↩️ Redirect from short URL to original URL
- 📋 One-click copy to clipboard
- ⚡ Fast React frontend connected to Express backend
- 🗄️ MongoDB database for persistent URL storage

---

## 🛠️ Tech Stack

| Layer      | Technology                            |
|------------|---------------------------------------|
| Frontend   | React, Vite, Tailwind CSS             |
| Backend    | Node.js, Express.js                   |
| Database   | MongoDB, Mongoose ODM                 |
| Deployment | Vercel (frontend), Render (backend)   |

---

## ⚙️ How It Works

1. User enters a long URL in the React frontend
2. React sends a `POST` request to the Express API
3. Backend generates a unique short code
4. Long URL and short code are saved in MongoDB
5. Backend returns the shortened URL
6. React displays the short URL with a copy button
7. When the short URL is visited, Express looks up and redirects to the original URL

---

## 🔌 API Reference

### Shorten a URL

```http
POST /shorten
Content-Type: application/json

{
  "url": "https://your-very-long-url.com/with/a/long/path"
}
```

**Response:**
```json
{
  "message": "Data inserted successfully",
  "success": true,
  "shortUrl": "https://your-backend.onrender.com/abc123"
}
```

### Redirect to Original URL

```http
GET /:shortCode
```

Redirects the user to the original long URL.

---

## 🚀 Setup Instructions

### 1. Clone the repository

```bash
git clone <repository-url>
cd url-shortener
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file in the backend folder:
```env
MONGO_URI=your_mongodb_connection_string
PORT=4000
```

Start the backend:
```bash
npm run dev
```
Server runs on `http://localhost:4000`

### 3. Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`

---

## 🌍 Deployment

| Part     | Platform  | URL                                            |
|----------|-----------|------------------------------------------------|
| Frontend | Vercel    | `https://url-shortener-blond-delta.vercel.app` |
| Backend  | Render    | `https://your-backend.onrender.com`            |

---

## 🔒 CORS Setup

Since frontend and backend run on different domains, CORS is enabled in Express:

```javascript
import cors from "cors";

app.use(cors({
  origin: "https://url-shortener-blond-delta.vercel.app"
}));
```

---

## 🧠 Key Concepts

- REST API development with Express
- MongoDB data modeling with Mongoose
- React state management with `useState`
- Fetch API for frontend‑backend communication
- CORS configuration for cross-origin requests
- Clipboard API for copy functionality
- Environment variables for secure configuration
- Deployment across multiple platforms

---

## 🔮 Future Improvements

- URL analytics and click tracking
- User authentication and dashboard
- Custom short URL aliases
- URL expiration / auto-delete
- QR code generation for short URLs

---
## 📄 License
 
This project is open source and available under the MIT License

