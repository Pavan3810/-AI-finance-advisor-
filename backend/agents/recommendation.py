from database import expenses_collection

def generate_recommendation(username):
    expenses = list(
        expenses_collection.find(
            {"username": username},
            {"_id": 0}
        )
    )

    if not expenses:
        return {"recommendation": "No expenses found."}

    total = sum(expense["amount"] for expense in expenses)

    category_totals = {}

    for expense in expenses:
        category = expense["category"]
        amount = expense["amount"]

        if category in category_totals:
            category_totals[category] += amount
        else:
            category_totals[category] = amount

    highest_category = max(category_totals, key=category_totals.get)
    highest_amount = category_totals[highest_category]

    percentage = (highest_amount / total) * 100

    recommendation = (
        f"You are spending {percentage:.2f}% on "
        f"{highest_category}. Try reducing this by 10–15%."
    )

    return {"recommendation": recommendation}