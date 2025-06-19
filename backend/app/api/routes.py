from fastapi import APIRouter
from app.db.mongo import users_col, cards_col, purchases_col
from bson import ObjectId
from datetime import datetime

router = APIRouter()

@router.get("/cards")
async def get_cards():
    cards = await cards_col.find({"status": "available"}).to_list(length=100)
    return cards

@router.get("/balance/{user_id}")
async def get_balance(user_id: int):
    user = await users_col.find_one({"user_id": user_id})
    return {"balance": user.get("balance", 0.0) if user else 0.0}

@router.get("/purchases/{user_id}")
async def get_purchases(user_id: int):
    purchases = await purchases_col.find({"user_id": user_id}).to_list(length=100)
    return purchases

@router.get("/profile/{user_id}")
async def profile(user_id: int):
    user = await users_col.find_one({"user_id": user_id})
    return user if user else {}

@router.post("/buy")
async def buy_card(data: dict):
    card_id = data.get("card_id")
    user_id = data.get("user_id")
    card = await cards_col.find_one({"_id": ObjectId(card_id), "status": "available"})
    user = await users_col.find_one({"user_id": user_id})
    if not card or not user:
        return {"error": "Invalid data"}
    if user.get("balance", 0) < card.get("price", 0):
        return {"error": "Insufficient balance"}
    await users_col.update_one({"user_id": user_id}, {"$inc": {"balance": -card["price"]}})
    await cards_col.update_one({"_id": card["_id"]}, {"$set": {"status": "sold"}})
    await purchases_col.insert_one({"user_id": user_id, "card_id": card_id, "price": card["price"], "date": datetime.now()})
    return {"status": "success"}

@router.post("/webhook/oxapay")
async def oxapay_webhook(payload: dict):
    if payload.get("status") == "finished":
        user_id = int(payload["order_id"].split("_")[1])
        amount = float(payload["amount"])
        await users_col.update_one({"user_id": user_id}, {"$inc": {"balance": amount}}, upsert=True)
        return {"ok": True}
    return {"ok": False}