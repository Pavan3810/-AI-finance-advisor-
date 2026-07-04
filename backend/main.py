from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.expense import router as expense_router
from routes.analytics import router as analytics_router
from routes.budget import router as budget_router
from routes.alerts import router as alert_router
from routes.recommendation import router as recommendation_router
from routes.auth import router as auth_router
from routes.chatbot import router as chatbot_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(auth_router)
app.include_router(expense_router)
app.include_router(analytics_router)
app.include_router(budget_router)
app.include_router(alert_router)
app.include_router(recommendation_router)
app.include_router(chatbot_router)
@app.get("/")
def home():
    return {"message": "AI Finance Advisor Backend Running"}