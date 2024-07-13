import fs from 'fs';
import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys';

// دالة لحساب وقت التشغيل
const formatUptime = (uptime) => {
    let seconds = Math.floor(uptime % 60);
    let minutes = Math.floor((uptime % 3600) / 60);
    let hours = Math.floor((uptime % 86400) / 3600);
    let days = Math.floor(uptime / 86400);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

// دالة للحصول على التاريخ الحالي
const getFormattedDate = () => {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return now.toLocaleDateString('ar-EG', options);
};

// دالة لقراءة عدد المستخدمين من ملف JSON
const getUserCount = () => {
    const data = fs.readFileSync('users.json', 'utf-8');
    const users = JSON.parse(data);
    return users.userCount;
};

// دالة لزيادة عدد المستخدمين وتحديث الملف
const incrementUserCount = () => {
    const data = fs.readFileSync('users.json', 'utf-8');
    const users = JSON.parse(data);
    users.userCount += 1;
    fs.writeFileSync('users.json', JSON.stringify(users), 'utf-8');
};

const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const device = await getDevice(m.key.id);
    const mentionId = m.key.participant || m.key.remoteJid;

    if (device !== 'desktop' && device !== 'web') {
        // زيادة عدد المستخدمين
        incrementUserCount();

        // الحصول على عدد المستخدمين الحالي
        const userCount = getUserCount();
        const uptime = formatUptime(process.uptime());
        const currentDate = getFormattedDate();

        const joanimiimg = await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/b63528315a84c3205ed98.jpg' } }, { upload: conn.waUploadToServer });
        const interactiveMessage = {
            body: { text: `*وقـت الـتـشـغـيـل: ${uptime}*\n*التاريخ: ${currentDate}*\n*عدد المستخدمين: ${userCount}*`.trim() },
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

        const msg = generateWAMessageFromContent(m.chat, {
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
