let handler = async (m, { conn, command, text }) => {
let elkrh = `▣──────────────────
│
*▣─❧ 🥀💔 نسبة الكره 💔🥀*
  *نسبة الكره ${text} 💔🥀*
*${Math.floor(Math.random() * 100)}%* *من 100%*
│
▣──────────────────
`.trim()
m.reply(elkrh, null, { mentions: conn.parseMention(elkrh) })}
handler.help = ['✓ ◡̈⃝ ✓│الكره🧸💜']
handler.tags = ['game']
handler.command = /^(الكره)$/i
export default handler
