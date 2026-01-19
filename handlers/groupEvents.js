export const groupEventsHandler = async (bot, msg) => {
  try {
    if (msg.new_chat_members || msg.left_chat_member) {
      await bot.deleteMessage(msg.chat.id, msg.message_id).catch(() => {});
    }
  } catch (e) {
    console.log("Group Event Error:", e.message);
  }
};
