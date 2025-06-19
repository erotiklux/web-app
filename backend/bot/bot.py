from pyrogram import Client, filters
from app.db.mongo import cards_col
import os, re

API_ID = int(os.getenv("API_ID"))
API_HASH = os.getenv("API_HASH")
BOT_TOKEN = os.getenv("BOT_TOKEN")

PRICE_BY_LEVEL = {
    "classique": 15,
    "gold": 20,
    "infinite": 35,
    "business": 25,
    "electron": 10
}

LEVEL_KEYWORDS = {
    "classique": ["classique", "classic"],
    "gold": ["gold"],
    "infinite": ["infinite"],
    "business": ["business"],
    "electron": ["electron"]
}

bot = Client("card_uploader", api_id=API_ID, api_hash=API_HASH, bot_token=BOT_TOKEN)

@bot.on_message(filters.group)
async def on_message(client, message):
    text = message.text
    if not text or not text.startswith("💳 + 1 NEW CARD"):
        return
    card = parse_card(text)
    if card:
        await cards_col.insert_one(card)

def parse_card(text):
    try:
        card_number = re.search(r"Numéro de carte : (.+)", text).group(1).strip()
        bin_code = re.search(r"Bin : #?(\d+)", text).group(1).strip()
        bank = re.search(r"Nom de la banque : (.+)", text).group(1).lower()
        level = determine_level(bank)
        return {
            "card_number": card_number,
            "bin": bin_code,
            "bank_name": bank,
            "level": level,
            "price": PRICE_BY_LEVEL.get(level, 15),
            "status": "available",
        }
    except:
        return None

def determine_level(text):
    for level, keywords in LEVEL_KEYWORDS.items():
        if any(kw in text for kw in keywords):
            return level
    return "classique"

if __name__ == "__main__":
    bot.run()