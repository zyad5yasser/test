import uploadImage from '../lib/uploadImage.js';
import {sticker} from '../lib/sticker.js';
import MessageType from '@whiskeysockets/baileys';
const effects = ['greyscale', 'invert', 'brightness', 'threshold', 'sepia', 'red', 'green', 'blue', 'blurple', 'pixelate', 'blur'];

const handler = async (m, {conn, usedPrefix, text}) => {
  const effect = text.trim().toLowerCase();
  if (!effects.includes(effect)) {
    throw `
*_✳️ قـسـم الـفلتـرات ✳️_*
*🦦🥂 الاستخدام رد علي الاستيكر)*
- يجيب ان يتم الرد علي الصوره
*🦦 مثل:* ${usedPrefix}فلتر greyscale
*Lista de efectos:*
${effects.map((effect) => `_> ${effect}_`).join('\n')}
`.trim();
  }
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';
  if (!mime) throw '*_لم يتم العثور على الصورة🧸_*\n\n*_✅ ريب ع الصوره_*';
  if (!/image\/(jpe?g|png)/.test(mime)) throw `*_🦦صيغة مش مدعومة_*\n\n*_🧸🥂 الرد على الصورة_*`;
  const img = await q.download();
  const url = await uploadImage(img);
  const apiUrl = global.API('https://some-random-api.com/canvas/', encodeURIComponent(effect), {
    avatar: url,
  });
  try {
    const stiker = await sticker(null, apiUrl, global.packname, global.author);
    conn.sendFile(m.chat, stiker, null, {asSticker: true});
  } catch (e) {
    m.reply('*_حدث خطأ أثناء التحويل إلى🦦🥂_*\n\n*_✳️ إرسال الصورة بدلا من ذلك.._*');
    await conn.sendFile(m.chat, apiUrl, 'image.png', null, m);
  }
};
handler.help = ['stickfilter (caption|reply media)'];
handler.tags = ['General'];
handler.command = /^(stickerfilter|تاثير|cs2)$/i;
handler.limit = 2;
export default handler;
