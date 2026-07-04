from fastapi import APIRouter
from agents.analyzer import analyze_expenses

router = APIRouter()

@router.get("/analytics/{username}")
def get_analytics(username: str):
    return analyze_expenses(username)