from fastapi import APIRouter
from agents.alert import check_alerts

router = APIRouter()

@router.get("/alerts/{username}")
def get_alerts(username: str):
    return check_alerts(username)