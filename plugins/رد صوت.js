let handler = m => m;
handler.all = async function (m) {
  let chat = global.db.data.chats[m.chat];

  if (/^احا|احااا$/i.test(m.text)) {
    let vn =   'https://qu.ax/ruSl.wav'  ;
    conn.sendPresenceUpdate( 'recording' , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:  audio/mpeg , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }

  if (/^الجن|جن$/i.test(m.text)) {
    let vn =   https://qu.ax/OiSk  ;
    conn.sendPresenceUpdate( recording , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:  audio/mpeg , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }

  if (/^سبحانه$/i.test(m.text)) {
    let vn =   https://qu.ax/nGFt.mp3  ;
    conn.sendPresenceUpdate( recording , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:  audio/mpeg , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }
  if (/^علاوي$/i.test(m.text)) {
    let vn =   https://qu.ax/vXcL.mp3  ;
    conn.sendPresenceUpdate( recording , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:  audio/mpeg , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }
  if (/^دانس$/i.test(m.text)) {
    let vn =   https://qu.ax/NDrj.m4a  ;
    conn.sendPresenceUpdate( recording , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:  audio/mpeg , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }
  if (/^نعم|😂$/i.test(m.text)) {
    let vn =   https://qu.ax/HdPo.mp3  ;
    conn.sendPresenceUpdate( recording , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:  audio/mpeg , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }

  if (/^بضاني$/i.test(m.text)) {
    let vn =  https://qu.ax/oOd ;
    conn.sendPresenceUpdate( recording , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:  audio/mpeg , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }
  if (/^اه$/i.test(m.text)) {
    let vn =  https://qu.ax/DCh ;
    conn.sendPresenceUpdate( recording , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:  audio/mpeg , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }


  return !0;
};
export default handler;
