const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = false;
  m.reply('*[🦦◡̈⃝🥂] تم الغاء الحظر بنجاح*');
};
handler.help = ['unbanchat'];
handler.tags = ['owner'];
handler.command = /^فك_البلوك|بلوك/i;
handler.rowner = true;
export default handler;
