import motor.motor_asyncio
import os

MONGO_URL = os.getenv("MONGO_URI", "mongodb://localhost:27017")
client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_URL)
db = client["cardstore"]

users_col = db.users
cards_col = db.cards
purchases_col = db.purchases