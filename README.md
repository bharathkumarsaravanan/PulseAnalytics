# 🚀 PulseAnalytics

A lightweight event tracking system that captures real user interactions from a website and visualizes them in near real-time.

---

## 📌 Overview

PulseAnalytics is a simplified analytics platform inspired by tools like Google Analytics.
It tracks user behavior (clicks, views) from a real website using a custom tracking script (integrated via GTM or direct injection) and displays insights through a performant dashboard.

---

## 🧠 How It Works

```plaintext
Website (Sample App)
        ↓
Tracking Script (GTM / injected JS)
        ↓
Backend API (Node.js + Express)
        ↓
MongoDB (Event Storage)
        ↓
Frontend Dashboard (Next.js)
```

---

## ✨ Features

### 🔹 Event Tracking

* Captures real user interactions (clicks, views)
* Tracks element type and page context
* Works via injected script / GTM

### 🔹 Real-Time Dashboard

* Live updates using polling (every 3 seconds)
* Event insights:

  * Total events
  * Clicks vs Views
  * Top elements
* Raw event table

### 🔹 Performance Optimization

* Handles large datasets efficiently
* Virtualized rendering (react-window)
* Memoized computations for analytics

### 🔹 Scalable Architecture

* Clean feature-based frontend structure
* Centralized API layer
* Separation of UI and computation logic

---

## 🛠️ Tech Stack

### Frontend

* Next.js (App Router)
* React + TypeScript
* React Query
* Tailwind CSS

### Backend

* Node.js + Express
* MongoDB (Mongoose)

### Tracking

* Custom JavaScript tracker
* GTM integration (optional)

---

## 📂 Project Structure

```plaintext
client/
  src/
    app/
    features/
    components/
    lib/

server/
  src/
    routes/
    models/
    db/
```

---

## ⚙️ Setup

### 1. Clone repo

```bash
git clone https://github.com/your-username/pulseanalytics
```

---

### 2. Backend

```bash
cd server
npm install
```

Create `.env`:

```env
MONGO_URL=your_mongo_url
```

Run:

```bash
npm run dev
```

---

### 3. Frontend

```bash
cd client
npm install
```

Create `.env`:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Run:

```bash
npm run dev
```

---

## 📡 Tracker Script

```js
(function () {
  function track(type, element) {
    fetch("YOUR_BACKEND_URL/events/track", {
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

## 🚀 Deployment

* Frontend: Vercel
* Backend: Render

---

## 💡 Key Engineering Decisions

* Used polling instead of WebSockets for simplicity and reliability
* Implemented virtualization to handle large datasets efficiently
* Separated data processing logic from UI for maintainability
* Designed system as modular feature-based architecture

---

## 🎯 What This Project Demonstrates

* Real-world frontend architecture
* Performance optimization strategies
* Full-stack system design thinking
* Handling large-scale data efficiently
* Building production-ready SaaS applications

---

## 👨‍💻 Author

Bharath Kumar
Frontend Engineer (4+ years)

---

## ⭐ Future Improvements

* WebSocket-based real-time updates
* Multi-project support
* Authentication for tracked sites
* Advanced analytics (funnels, sessions)
