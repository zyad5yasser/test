//CREDITOS PARA >> https://github.com/BrunoSobrino

let handler = m => m;
handler.all = async function (m) {
    let chat = global.db.data.chats[m.chat];
    if (chat.isBanned) return;

    global.db.data.users[m.sender].money += 50;
    global.db.data.users[m.sender].exp += 50;

    if (/^A Bueno master|Bueno master|Bueno Máster|🫂$/i.test(m.text) && chat.audios) {
        let vn = 'https://qu.ax/xynz.mp3';
        this.sendPresenceUpdate('recording', m.chat);
        this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'audio.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m });
    }

    if (/^Chupame|Pingo|Qliao$/i.test(m.text) && chat.audios) {
        let vn = 'https://qu.ax/SCpi.mp3';
        this.sendPresenceUpdate('recording', m.chat);
        this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'audio.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m });
    }

    if (/^ara ara$/i.test(m.text) && chat.audios) {
        let vn = 'https://qu.ax/PPgt.mp3';
        this.sendPresenceUpdate('recording', m.chat);
        this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'audio.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m });
    }

    if (chat.audios && m.text.match(/(bienveni|🥳|🤗)/gi)) {
        let vn = 'https://qu.ax/cUYg.mp3';
        this.sendPresenceUpdate('recording', m.chat);
        this.sendMessage(m.chat, { audio: { url: vn }, contextInfo: { "externalAdReply": { "title": wm, "body": `🐈`, "previewType": "PHOTO", "thumbnailUrl": null, "thumbnail": imagen1, "sourceUrl": md, "showAdAttribution": true } }, ptt: true, mimetype: 'audio/mpeg', fileName: `audio.mp3` }, { quoted: m });
    }

    if (chat.audios && m.text.match(/(Blackpink in your area|blackpink in your area|in your area|In your area)/gi)) {
        let vn = 'https://qu.ax/pavq.mp3';
        this.sendPresenceUpdate('recording', m.chat);
        this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'audio.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m });
    }

    if (chat.audios && m.text.match(/(Buen día grupo|Buen dia grupo)/gi)) {
        let vn = 'https://qu.ax/GoKq.mp3';
        this.sendPresenceUpdate('recording', m.chat);
        this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'audio.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m });
    }

    if (chat.audios && m.text.match(/(Calla Fan de bts|bts|Amo a bts)/gi)) {
        let vn = 'https://qu.ax/oqNf.mp3';
        let sticker = 'https://qu.ax/rfHP.webp';
        this.sendPresenceUpdate('recording', m.chat);
        let media = Math.random() < 0.5 ? 'audio' : 'sticker';
        if (media === 'audio') await this.sendFile(m.chat, vn, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true });
        if (media === 'sticker') await this.sendFile(m.chat, sticker, 'sticker.webp', '', m);
    }

    if (chat.audios && m.text.match(/(Cambiate a Movistar|cambiate a Movistar|cambiate a movistar|Cambiate a movistar|movistar)/gi)) {
        let vn = 'https://qu.ax/RxJC.mp3';
        this.sendPresenceUpdate('recording', m.chat);
        this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'audio.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m });
    }

    if (chat.audios && m.text.match(/(Corte Corte|corte|pelea|pelear|golpear|golpea)/gi)) {
        let vn = 'https://qu.ax/hRuU.mp3';
        this.sendPresenceUpdate('recording', m.chat);
        this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'audio.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m });
    }

    if (chat.audios && m.text.match(/(El Toxico|El tóxico|Toxico|tóxico|malo|mala|estupido|estupida)/gi)) {
        let vn = 'https://qu.ax/WzBd.mp3';
        this.sendPresenceUpdate('recording', m.chat);
        this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'audio.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m });
    }

    if (chat.audios && m.text.match(/(Elmo sabe donde vives|Elmo sabe dónde vives|elmo|vives|de donde eres|eres de|sabes)/gi)) {
        let vn = 'https://qu.ax/YsLt.mp3';
        this.sendPresenceUpdate('recording', m.chat);
        this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'audio.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m });
    }

    if (chat.audios && m.text.match(/(En caso de una investigación|En caso de una investigacion|fbi|cia|nasa|detective|👤|🕵️‍|♀️🕵️‍♂️)/gi)) {
        let vn = 'https://qu.ax/Syg.mp3';
        this.sendPresenceUpdate('recording', m.chat);
        this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'audio.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m });
    }

    if (chat.audios && m.text.match(/(Eres Fuerte|god|🤜|🤛|🦾|👊)/gi)) {
        let vn = 'https://qu.ax/lhzq.mp3';
        this.sendPresenceUpdate('recording', m.chat);
        this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'audio.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m });
    }

    if (chat.audios && m.text.match(/(Zzzz|zzz|😴|💩|👽)/gi)) {
        let vn = 'https://qu.ax/KkSZ.mp3';
        this.sendPresenceUpdate('recording', m.chat);
        this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'audio.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m });
    }

    if (chat.audios && m.text.match(/(Las reglas del grupo|lee|leíste|leiste)/gi)) {
        let vn = 'https://qu.ax/fwek.mp3';
        this.sendPresenceUpdate('recording', m.chat);
        this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'audio.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m });
    }

    if (chat.audios && m.text.match(/(Me anda buscando anonymous|me anda buscando anonymous|Me está buscando anonymous|me está buscando anonymous|Me está buscando anonimo|Me esta buscando anonimo|anonimus|anónimo)/gi)) {
        let vn = 'https://qu.ax/MWJz.mp3';
        this.sendPresenceUpdate('recording', m.chat);
        this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'audio.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m });
    }

    if (chat.audios && m.text.match(/(Momento equisde|momento equisde|Momento|fuera|🤘|👄|🕴️|💃|🕺)/gi)) {
        let vn = 'https://qu.ax/PitP.mp3';
        this.sendPresenceUpdate('recording', m.chat);
        this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'audio.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m });
    }
    
    return !0;
}

export default handler;
