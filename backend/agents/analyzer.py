from database import expenses_collection

def analyze_expenses(username):
    expenses = list(
        expenses_collection.find(
            {"username": username},
            {"_id": 0}
        )
    )

    summary = {}
    total = 0

    for expense in expenses:
        category = expense["category"]
        amount = expense["amount"]

        total += amount

        if category in summary:
            summary[category] += amount
        else:
            summary[category] = amount

    return {
        "total_spending": total,
        "category_breakdown": summary
    }