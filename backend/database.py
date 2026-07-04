from pymongo import MongoClient

client = MongoClient("mongodb://127.0.0.1:27017/")

db = client["finance_advisor"]

expenses_collection = db["expenses"]
users_collection = db["users"]
budgets_collection = db["budgets"]