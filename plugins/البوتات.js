async function handler(m, { usedPrefix }) {
let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]
await m.reply( '*🤖 فيما يلي قائمة ببعض الروبوتات الفرعية (jadibot / Serbot) 🤖️*\n\n*👉🏻 يمكنك الاتصال بهم لمعرفة ما إذا كانوا قد انضموا إلى مجموعتك*\n\n*نطلب منك من فضلك:*\n*1.- كن طيبا ✅*\n*2.- لا تصر أو تجادل ✅*\n\n*✳ ️إذا ظهر فارغا التالي ، فلا يوجد بوتات فرعيه متاحه في الوقت الحالي ، حاول مرة أخرى لاحقًا*\n\n*⚠ هام: ️مستخدمين البوتات الفرعية لا اعرفهم فا انا غير مسئول عما قد يحدث..*')
await m.reply(users.map(v => '👉🏻 wa.me/' + v.jid.replace(/[^0-9]/g, '') + `?text=${usedPrefix}estado (${v.name})`).join('\n'))}
handler.command = handler.help = ['listjadibot','البوتات','subsbots']
handler.tags = ['jadibot']
export default handler

