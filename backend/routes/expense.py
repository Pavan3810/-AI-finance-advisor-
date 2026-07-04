from fastapi import APIRouter
from models.expense import Expense
from database import expenses_collection

router = APIRouter()


@router.post("/expenses")
def add_expense(expense: Expense):
    expense_dict = expense.dict()
    expenses_collection.insert_one(expense_dict)
    return {"message": "Expense Added Successfully"}


@router.get("/expenses/{username}")
def get_expenses(username: str):
    expenses = list(
        expenses_collection.find(
            {"username": username},
            {"_id": 0}
        )
    )
    return expenses


@router.delete("/expenses")
def delete_expense(username: str, category: str, amount: float):
    expenses_collection.delete_one({
        "username": username,
        "category": category,
        "amount": amount
    })

    return {"message": "Expense deleted successfully"}
@router.put("/expenses")
def update_expense(
    username: str,
    old_category: str,
    old_amount: float,
    new_category: str,
    new_amount: float
):
    expenses_collection.update_one(
        {
            "username": username,
            "category": old_category,
            "amount": old_amount
        },
        {
            "$set": {
                "category": new_category,
                "amount": new_amount
            }
        }
    )

    return {"message": "Expense updated successfully"}