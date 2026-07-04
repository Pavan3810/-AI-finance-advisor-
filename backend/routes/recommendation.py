from fastapi import APIRouter
from agents.recommendation import generate_recommendation

router = APIRouter()

@router.get("/recommendation/{username}")
def get_recommendation(username: str):
    return generate_recommendation(username)