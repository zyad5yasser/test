import os from 'os';
import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys';

const formatUptime = (uptime) => {
    let seconds = Math.floor(uptime % 60);
    let minutes = Math.floor((uptime % 3600) / 60);
    let hours = Math.floor((uptime % 86400) / 3600);
    let days = Math.floor(uptime / 86400);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const device = await getDevice(m.key.id);
    const mentionId = m.key.participant || m.key.remoteJid;

    if (device !== 'desktop' || device !== 'web') {
        const uptime = formatUptime(os.uptime());
        var joanimiimg = await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/b63528315a84c3205ed98.jpg' } }, { upload: conn.waUploadToServer });
        const interactiveMessage = {
            body: { text: `*وقـت الـتـشـغـيـل ${uptime}* `.trim() },
            footer: { text: `ممنوع سب للبوت لانك سبيت للبوت = سبيت المطور تمتع بالبوت ولا تكتر اسبام للبوت اذا كان لديك مشكله او تريد اضافه اوامر اخري جديده تواصل مع المطور المطور* ◞❐wa.me/201115618853`.trim() },
            header: {
                title: `*┃━━━━━⬣ₛₐfᵣₒₜ bₒₜ⬣━━━━━┃*\n\n*◞❐نورت يحب قائمة الاوامر*\n\n*◞❐ تفضل القائمة يا :* @${mentionId.split('@')[0]}`,
                subtitle: ``,
                hasMediaAttachment: true,
                imageMessage: joanimiimg.imageMessage,
            },
            nativeFlowMessage: {
                buttons: [
                    // باقي الكود الخاص بالأزرار
                ],
                messageParamsJson: ''
            }
        };

        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    interactiveMessage,
                },
            },
        }, { userJid: conn.user.jid, quoted: m });
        msg.message.viewOnceMessage.message.interactiveMessage.contextInfo = { mentionedJid: [mentionId] };
        conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

    } else {
        conn.sendFile(m.chat, 'JoAnimi•Error.jpg', m);
    }
};

handler.help = ['imgboton'];
handler.tags = ['For Test'];
handler.command = /^(help|الاوامر|menu|أوامر|menu|اوامر)$/i;

export default handler;
