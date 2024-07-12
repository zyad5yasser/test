let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[❗تحذير❗] ادخل بلاغك*\n\n*مثال:*\n*${usedPrefix + command} مرحباً أليكس${usedPrefix}البوت تعطل*`
if (text.length < 5) throw `*[❗تحذير❗] البلاغ لا يقل عن خمس احرف*`
if (text.length > 500) throw `*[❗تحذير❗] البلاغ لا يزيد عن 500 حرف*`
let teks = `*✧━━═⊰إبلاغ⊱═━━✧*\n*┬*\n*├❧ الرقم:* wa.me/${m.sender.split`@`[0]}\n*┴*\n*┬*\n*├❧ البلاغ:* ${text}\n*┴*`
conn
//حط رقمك مكان رقمي
.reply('201115618853@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, { contextInfo: { mentionedJid: [m.sender] }})
conn.reply('@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, { contextInfo: { mentionedJid: [m.sender] }})
m.reply(`*[ ✔️ ] تم ارسال البلاغ سيتم حل المشكلة في اقرب وقت️*`)
}
handler.help = ['reporte', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.command = /^(report|بلاغ|بلغ|ابلاغ|bug|report-owner|reportes)$/i
export default handler
