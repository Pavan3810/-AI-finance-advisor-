import requests
from database import expenses_collection
from collections import defaultdict

def finance_chat(username, question):
    expenses = list(
        expenses_collection.find(
            {"username": username},
            {"_id": 0}
        )
    )

    if not expenses:
        return {
            "response": "No expense data found for this user."
        }

    # Total spending
    total = sum(exp["amount"] for exp in expenses)

    # Category-wise spending
    category_totals = defaultdict(int)

    for exp in expenses:
        category_totals[exp["category"]] += exp["amount"]

    top_category = max(category_totals, key=category_totals.get)
    prompt = f"""
You are an AI Finance Advisor for Indian users.

Expense Summary:
Total Spending: ₹{total}
Category Breakdown: {category_totals}

User Question:
{question}

STRICT RULES:
- Reply in maximum 4 bullet points only.
- No follow-up questions.
- No extra explanations.
- No assumptions about salary, investments, loans.
- Only analyze given expenses.
- Always use INR ₹.
- Response must be short and practical.

Example response:
• Highest spending is Food (₹5000)
• Reduce unnecessary food expenses
• Set monthly spending limits
• Target 20% savings
"""

    response = requests.post(
        "http://127.0.0.1:11434/api/generate",
        json={
            "model": "phi3",
            "prompt": prompt,
            "stream": False
        },
        timeout=120
    )

    result = response.json()

    suggestions = [
        f"Reduce spending in {top_category}",
        "Track daily expenses",
        "Save at least 20% monthly"
    ]

    return {
        "response": result["response"],
        "total_spending": total,
        "top_category": top_category,
        "suggestions": suggestions
    }