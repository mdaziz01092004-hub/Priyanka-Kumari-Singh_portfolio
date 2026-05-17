# Priyanka Kumari Singh - Personal Portfolio Website

A premium, fully responsive full-stack portfolio website built for **Priyanka Kumari Singh** showcasing her academic journey in B.A. English literature, technical skills, and professional exploration.

## 🚀 Architecture & Tech Stack

This project is structured as a clean monorepo:

### Frontend (`/frontend`)
- **Framework**: React 19 powered by Vite
- **Styling**: Tailwind CSS v3.4 (Mobile-first, fully responsive with custom themes)
- **Animations**: Framer Motion for elegant entrance/micro-animations
- **Icons**: Lucide React
- **Typography**: Playfair Display (Headings) & Inter (Body Text)

### Backend (`/backend`)
- **Environment**: Node.js with Express.js
- **Database**: SQLite (local serverless storage for seamless portability)
- **Security**: Rate limiting via `express-rate-limit`, robust incoming payload validation
- **API Endpoints**: POST `/api/contact` to capture inquiries securely

---

## 🛠 Setup & Installation Instructions

### Prerequisites
- Node.js (v18+ recommended)

### 1. Clone & Install Dependencies
From the root directory, run:
```bash
npm run install:all
```
*(This automatically installs dependencies for both the frontend and backend).*

### 2. Configure Environment Variables
Navigate to the `/backend` directory and copy the template:
```bash
cd backend
cp .env.example .env
```

### 3. Run Development Servers Concurrently
From the root directory, start both the Vite frontend and Express backend simultaneously:
```bash
npm run dev
```

- **Frontend Application**: `http://localhost:5173`
- **Backend API Server**: `http://localhost:5000`

---

## ✨ Features
- **Premium Arts-tailored UI**: Glassmorphism badges, warm elegant color palettes, and literary-inspired typography.
- **Dynamic Content Integration**: Comprehensive vertical education timeline and multi-language fluency indicators.
- **Robust Inquiries Backend**: Complete feedback validation, persistent local database records, and anti-spam rate limiting.
# priyankakumarisingh_portfolio
