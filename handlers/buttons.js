export const callbackHandler = async (bot, query) => {
  const chatId = query.message.chat.id;

  if (query.data === "ping") {
    await bot.answerCallbackQuery(query.id, { text: "✅ Bot is Alive!" });
    await bot.sendMessage(chatId, "⚡ Working perfectly!");
  }
};
