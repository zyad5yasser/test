let handler = async (m, { conn, command, text }) => {
let love = `
*⎔⋅• ┏╼╃✦⊰⟦𝙼𝚅𝚁𝙾-𝙱𝙾𝚃⟧⊱✦╄╾┓ •⋅⎔*

𝑾𝑬𝑳𝑪𝑶𝑴𝑬 𝑻𝑶 𝑴𝑽𝑹𝑶_𝑩𝑶𝑻🙈

𝑩𝒀 𝑴𝑽𝑹𝑶-𝑨𝑳𝑴𝑹𝑱𝑨𝑾𝒀

*· • • ━ ╃✦⊰𝙼𝚅𝚁𝙾-𝙱𝙾𝚃⊱✦╄ ━ • • ·*

*⌬〘 مرحبا بك في بوت مارو 〙⌬*

*⌬〘 اليك قائمه بسورس البوت 〙⌬*

*· • • ━ ╃✦⊰𝙼𝚅𝚁𝙾-𝙱𝙾𝚃⊱✦╄ ━ • • ·*

*⌬〘 تم تطويري وبرمجتي 〙⌬*
*⌬〘 بواسطه مارو المرجاوي 〙⌬*
*⌬〘 هذا البوت يعمل بالخاص 〙⌬*
*⌬〘 ويعمل ايضاا بالمجموعات 〙⌬*

*· • • ━ ╃✦⊰𝙼𝚅𝚁𝙾-𝙱𝙾𝚃⊱✦╄ ━ • • ·*

*⌬〘 انستا 〙⌬*

*⏣⊰https://www.instagram.com/m_vro1?igsh=OGQ5ZDc2ODk2ZA==⊱⏣*

*⌬〘 واتساب 〙⌬*

*⏣⊰ https://wa.me/201115618853⊱⏣*

*⎔⋅• ┗╼╃✦⊰⟦ₛₐfᵣₒₜ bₒₜ⟧⊱✦╄╾┛ •⋅⎔*
 `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(السورس|سورس)$/i
export default handler
