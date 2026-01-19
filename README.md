# 🤖 GroupGuardXBot

A powerful Telegram Group Manager Bot 🛡️  
Auto deletes join/left messages + Welcome image + Owner button.

## ✅ Features
- Auto hide join/left messages
- Welcome /start image
- Inline buttons (Owner / Support / Add to group)
- MongoDB connected
- Render deploy ready

## 🧪 Setup
1. Clone repo
2. Install packages
   ```bash
   npm install
   ```
3. Create `.env`
   ```env
   BOT_TOKEN=YOUR_TELEGRAM_BOT_TOKEN
   MONGO_URI=YOUR_MONGO_DB_URL
   OWNER_ID=8206476526
   SUPPORT_GROUP=https://t.me/YOUR_SUPPORT_GROUP
   SUPPORT_CHANNEL=https://t.me/YOUR_SUPPORT_CHANNEL
   BOT_NAME=GroupGuardXBot
   ```

4. Start bot
   ```bash
   npm start
   ```

## 🚀 Deploy on Render
- Upload repo to GitHub
- Create new Web Service on Render
- Add ENV Variables
- Deploy ✅
