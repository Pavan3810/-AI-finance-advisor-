from database import expenses_collection, budgets_collection

def check_alerts(username):
    expenses = list(
        expenses_collection.find(
            {"username": username},
            {"_id": 0}
        )
    )

    total_spending = 0

    for expense in expenses:
        total_spending += expense["amount"]

    budget_data = budgets_collection.find_one({"username": username})

    if budget_data:
        monthly_budget = budget_data["monthly_budget"]
    else:
        monthly_budget = 50000

    if total_spending > monthly_budget:
        return {
            "alert": "Warning! Budget exceeded",
            "spent": total_spending,
            "budget": monthly_budget
        }

    return {
        "message": "Spending within budget",
        "spent": total_spending,
        "budget": monthly_budget
    }