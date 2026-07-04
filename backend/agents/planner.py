def generate_budget(salary):
    needs = salary * 0.50
    wants = salary * 0.30
    savings = salary * 0.20

    return {
        "salary": salary,
        "needs": needs,
        "wants": wants,
        "savings": savings
    }