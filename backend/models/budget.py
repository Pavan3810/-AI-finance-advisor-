from pydantic import BaseModel

class BudgetInput(BaseModel):
    salary: float
    monthly_budget: float
    username: str