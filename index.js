import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";
import config from "./config.js";
import { connectMongo } from "./database/mongo.js";
import { startHandler } from "./handlers/start.js";
import { groupEventsHandler } from "./handlers/groupEvents.js";
import { callbackHandler } from "./handlers/buttons.js";

dotenv.config();

const BOT_TOKEN = process.env.BOT_TOKEN;

if (!BOT_TOKEN) {
  console.log("❌ BOT_TOKEN missing in .env");
  process.exit(1);
}

const bot = new TelegramBot(BOT_TOKEN, { polling: true });

bot.getMe().then((me) => {
  bot.username = me.username;
  console.log(`🤖 Bot Started: @${me.username}`);
});

connectMongo(process.env.MONGO_URI);

bot.onText(/\/start/, (msg) => startHandler(bot, msg));

bot.on("message", (msg) => groupEventsHandler(bot, msg));

bot.on("callback_query", (query) => callbackHandler(bot, query));
