# AI Finance Advisor

AI Finance Advisor is a smart personal finance management web application designed to help users track expenses, manage budgets, and receive AI-powered financial insights. The application provides intelligent recommendations based on user spending habits and helps improve financial health.

---

# Features

- User Authentication (Login / Register)
- Expense Management
  - Add Expenses
  - Edit Expenses
  - Delete Expenses
- Budget Management
- Expense Analytics
- AI Chat Assistant
- AI Financial Insights
- Smart Savings Suggestions
- Dark Mode Support
- Responsive UI Design

---

# Tech Stack 🛠️

## Frontend

- React.js
- Vite
- Axios
- Framer Motion
- Lucide React
- CSS

## Backend

- FastAPI
- Python

## Database

- MongoDB

## AI Integration

- Ollama
- Phi3 Model

---

# Project Structure

```bash
finance-advisor/
│
├── backend/
│   ├── routes/
│   │   ├── auth.py
│   │   ├── expense.py
│   │   ├── analytics.py
│   │   ├── budget.py
│   │   ├── chatbot.py
│   │
│   ├── agents/
│   │   ├── openai.py
│   │
│   ├── models/
│   │   ├── expense.py
│   │
│   ├── database.py
│   ├── main.py
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── index.css
│
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone <your-repository-url>
cd finance-advisor
```

---

# Backend Setup

Go to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
pip install fastapi uvicorn pymongo requests python-dotenv
```

Run backend:

```bash
uvicorn main:app --reload
```

Backend will run at:

```bash
http://127.0.0.1:8000
```

---

# Frontend Setup

Go to frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Install extra packages:

```bash
npm install axios framer-motion lucide-react
```

Run frontend:

```bash
npm run dev
```

Frontend runs at:

```bash
http://localhost:5173
```

---

# Database Setup

Make sure MongoDB is installed and running locally.

Connection URL:

```bash
mongodb://127.0.0.1:27017/
```

Database Name:

```bash
finance_advisor
```

Collections:

- users
- expenses
- budgets

---

# AI Setup

This project uses Ollama with Phi3 model for AI financial recommendations.

Install Ollama:

:contentReference[oaicite:0]{index=0}

Run Phi3 model:

```bash
ollama run phi3
```

Ollama server runs at:

```bash
http://127.0.0.1:11434
```

---

# Core Modules

## Authentication

- User Login
- User Registration

## Dashboard

- Total Spending
- Categories Count
- Top Category
- Remaining Budget

## Expense Management

- Add Expense
- Edit Expense
- Delete Expense

## Budget Management

- Set Monthly Budget
- Track Remaining Budget

## AI Chatbot

- Expense Analysis
- Savings Suggestions
- AI Health Score
- Conversation History

---

# API Endpoints

## Auth

- POST `/register`
- POST `/login`

## Expenses

- POST `/expenses`
- GET `/expenses/{username}`
- PUT `/expenses`
- DELETE `/expenses`

## Budget

- POST `/budget`
- GET `/budget/{username}`

## Chatbot

- POST `/chat`

---

# Screenshots

- Login Page
- Dashboard
- Expense Tracker
- Budget Management
- AI Chatbot

---

# Future Enhancements

- Export Financial Reports (PDF)
- Advanced Charts
- Email Alerts
- Smart Notifications
- AI Expense Prediction
- Cloud AI Integration
- Voice Assistant

---

# Deployment

## Current Deployment Status

- Frontend → Deployable
- Backend → Deployable
- Database → Deployable
- AI → Requires local Ollama server

## Recommended Production Deployment

- Frontend → Vercel
- Backend → Render
- Database → MongoDB Atlas
- AI → Gemini API / OpenAI API

---

# Challenges Faced

- Backend CORS Issues
- MongoDB Integration
- AI Response Formatting
- Frontend State Management
- Responsive UI Design

---

# Learning Outcomes

Through this project, I gained practical experience in:

- Full Stack Development
- FastAPI Backend Development
- React UI Design
- MongoDB Integration
- AI Integration using Ollama
- State Management
- REST API Development

---

# Author 👨

**Pavan Prasad**  
B.Tech CSE
SRM University AP

---

# License

This project is built for educational, learning, and portfolio purposes.
