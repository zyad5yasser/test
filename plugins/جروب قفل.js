const handler = async (m, {conn, args, usedPrefix, command}) => {
  const isClose = { // Switch Case Like :v
    'open': 'not_announcement',
    'close': 'announcement',
    'abierto': 'not_announcement',
    'cerrado': 'announcement',
    'فتح': 'not_announcement',
    'قفل': 'announcement',
  }[(args[0] || '')];
  if (isClose === undefined) {
    throw `
*[❗] استخدام خطأ!!*

*┏━━━❲ بوت سفروت🤺🥂 ❳━━━┓* 
*┠┉↯ ${usedPrefix + command} فتح*
*┠┉↯ ${usedPrefix + command} قفل*
`.trim();
  }
  await conn.groupSettingUpdate(m.chat, isClose);
  {m.reply('*تم قفل الجروب🦦*');}
};
handler.help = ['group open / close', 'grupo abrir / cerrar'];
handler.tags = ['group'];
handler.command = /^(جروب|grupo)$/i;
handler.admin = true;
handler.botAdmin = true;
export default handler;