# 🚀 PulseAnalytics

A lightweight full-stack analytics platform that captures real user interactions from websites and visualizes them through a performant real-time dashboard.

Built with a unified Next.js + Express architecture for scalable authentication, event tracking, and analytics processing.

---

# 📌 Overview

PulseAnalytics is a simplified analytics platform inspired by tools like Google Analytics.

It enables websites to send interaction events (clicks, page views, etc.) through a lightweight tracking script and provides a real-time dashboard to analyze user behavior.

---

# 🧠 System Architecture

```plaintext
Tracked Website
        ↓
Tracking Script (Injected JS / GTM)
        ↓
Express API (/api/*)
        ↓
MongoDB (Event Storage)
        ↓
Next.js Dashboard
```

---

# 🏗️ Current Architecture

PulseAnalytics now uses a unified single-domain architecture:

```plaintext
Browser
   ↓
Node.js Server
   ├── Next.js Frontend
   └── Express API
```

### ✅ Benefits

- Same-domain frontend + backend
- Secure HTTP-only cookie authentication
- No CORS complexity
- Cleaner deployment setup
- Middleware-based route protection
- Easier scalability and maintenance

---

# ✨ Features

## 🔹 Event Tracking

- Captures real user interactions
- Tracks:
  - Click events
  - Page views
  - Element type
  - Current page path
- Lightweight embeddable tracking script
- GTM integration support

---

## 🔹 Authentication & Authorization

- JWT-based authentication
- HTTP-only cookie auth
- Middleware-protected dashboard routes
- Role-based route access support

---

## 🔹 Real-Time Analytics Dashboard

- Near real-time updates using polling
- Dashboard insights:
  - Total events
  - Click vs View breakdown
  - Top interacted elements
  - Event activity table
- Responsive dashboard UI

---

## 🔹 Performance Optimization

- Virtualized rendering using `react-window`
- Memoized analytics calculations
- Efficient polling architecture
- Optimized React rendering patterns

---

## 🔹 Scalable Frontend Architecture

- Feature-based architecture
- Centralized API layer
- Reusable UI components
- Separation of UI and business logic
- Modular analytics computation

---

# 🛠️ Tech Stack

## Frontend

- Next.js (App Router)
- React
- TypeScript
- React Query
- Tailwind CSS

---

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

---

## Tracking

- Custom JavaScript tracker
- Google Tag Manager integration (optional)

---

# 📂 Project Structure

```plaintext
PulseAnalytics/
│
├── client/                 # Next.js frontend
│   ├── src/
│   │   ├── app/
│   │   ├── features/
│   │   ├── components/
│   │   └── lib/
│
├── server/                 # Express backend
│   ├── routes/
│   ├── db/
│   ├── middlewares/
│   └── models/
│
├── server.js               # Unified server entry
├── package.json
└── .env
```

---

# ⚙️ Setup

## 1. Clone Repository

```bash
git clone https://github.com/your-username/pulseanalytics
cd pulseanalytics
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Environment Variables

Create a root `.env` file:

```env
MONGO_URL=your_mongodb_connection
JWT_SECRET=your_secret
```

---

## 4. Run Development Server

```bash
npm run dev
```

Application runs on:

```plaintext
http://localhost:3000
```

---

# 📡 Tracker Script

```js
(function () {
  function track(type, element) {
    fetch("/api/events/track", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        type,
        element,
        page: window.location.pathname
      })
    });
  }

  document.addEventListener("click", function (e) {
    track("click", e.target.tagName.toLowerCase());
  });

  window.addEventListener("load", function () {
    track("view", "page");
  });
})();
```

---

# 🔐 Authentication Flow

```plaintext
Login Request
      ↓
Express Auth API
      ↓
JWT Generated
      ↓
HTTP-only Cookie Set
      ↓
Next.js Middleware Validation
      ↓
Protected Dashboard Access
```

---

# 🚀 Deployment

The application is designed for unified deployment.

## Recommended Platforms

- Railway
- VPS
- Render
- Docker
- AWS EC2

---

# 💡 Key Engineering Decisions

- Unified Next.js + Express architecture for same-domain auth
- HTTP-only cookie authentication for security
- Polling used instead of WebSockets for simplicity and reliability
- Virtualized rendering for handling large datasets efficiently
- Modular feature-based frontend architecture
- Middleware-based protected routing
- Centralized API abstraction layer

---

# 🎯 What This Project Demonstrates

- Full-stack application architecture
- Real-world authentication systems
- Middleware-based route protection
- Secure cookie-based auth flow
- Frontend performance optimization
- Scalable analytics dashboard design
- System design thinking
- Production-oriented SaaS architecture

---

# 🔮 Future Improvements

- WebSocket-based real-time updates
- Multi-project support
- Session tracking
- User funnels and conversion analytics
- Heatmaps
- Custom dashboard widgets
- Advanced RBAC system
- Dockerized deployment
- Distributed event processing

---

# 👨‍💻 Author

Bharath Kumar  
Frontend / Full-Stack Engineer (4+ years)

- LinkedIn: https://www.linkedin.com/in/bharath-saravanan-11690b213
- GitHub: https://github.com/bharathkumarsaravanan

---

# ⭐ Project Goal

PulseAnalytics was built to demonstrate real-world frontend engineering, scalable architecture patterns, performance optimization, and production-style SaaS development using modern JavaScript technologies.