import config from "../config.js";

export const startHandler = async (bot, msg) => {
  const chatId = msg.chat.id;
  const user = msg.from?.first_name || "User";

  const caption =
`✨ *Welcome ${user}!*  

🤖 *${config.botName}* is Online ✅  
🛡️ I can auto-hide join/left messages in groups.  

📌 *Add me to your group and make me admin!*`;

  const buttons = {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "➕ Add Me To Group", url: `https://t.me/${bot.username}?startgroup=true` }
        ],
        [
          { text: "👑 Owner", url: `tg://user?id=${config.ownerId}` },
          { text: "💬 Support", url: config.supportGroup }
        ],
        [
          { text: "📢 Channel", url: config.supportChannel }
        ]
      ]
    },
    parse_mode: "Markdown"
  };

  try {
    await bot.sendPhoto(chatId, "assets/start.jpg", {
      caption,
      ...buttons
    });
  } catch {
    await bot.sendMessage(chatId, caption, buttons);
  }
};
