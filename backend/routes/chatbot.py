from fastapi import APIRouter
from pydantic import BaseModel
from agents.openai import finance_chat

router = APIRouter()

class ChatInput(BaseModel):
    username: str
    question: str

@router.post("/chat")
def chat(data: ChatInput):
    return finance_chat(data.username, data.question)