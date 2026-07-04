from fastapi import APIRouter
from database import budgets_collection

router = APIRouter()


@router.post("/budget")
def set_budget(username: str, budget: float):
    budgets_collection.update_one(
        {"username": username},
        {"$set": {"budget": budget}},
        upsert=True
    )

    return {"message": "Budget saved successfully"}


@router.get("/budget/{username}")
def get_budget(username: str):
    budget = budgets_collection.find_one(
        {"username": username},
        {"_id": 0}
    )

    if not budget:
        return {"budget": 0}

    return budget