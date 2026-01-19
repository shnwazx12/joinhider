export default {
  botName: process.env.BOT_NAME || "GroupGuardXBot",
  ownerId: Number(process.env.OWNER_ID || 0),
  supportGroup: process.env.SUPPORT_GROUP || "https://t.me/",
  supportChannel: process.env.SUPPORT_CHANNEL || "https://t.me/"
};
