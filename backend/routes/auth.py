from fastapi import APIRouter, HTTPException
from models.user import User
from jose import jwt
from passlib.context import CryptContext
from database import users_collection

router = APIRouter()

SECRET_KEY = "financeadvisorsecret"

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


@router.post("/register")
def register(user: User):
    hashed_password = pwd_context.hash(user.password)

    result = users_collection.insert_one({
        "username": user.username,
        "password": hashed_password
    })

    print(result.inserted_id)

    return {"message": "User registered successfully"}

@router.post("/login")
def login(user: User):
    db_user = users_collection.find_one({"username": user.username})

    if not db_user:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    if not pwd_context.verify(user.password, db_user["password"]):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    token = jwt.encode(
        {"sub": user.username},
        SECRET_KEY,
        algorithm="HS256"
    )

    return {"access_token": token}