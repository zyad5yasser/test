import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys';

const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const device = await getDevice(m.key.id);
    const mentionId = m.key.participant || m.key.remoteJid;

    if (device !== 'desktop' && device !== 'web') { // يجب استخدام && بدلاً من ||
        // إعداد متغيرات وقت التشغيل وعدد المستخدمين
        const uptime = '00:00:00'; // تعديل بناءً على وقت التشغيل الفعلي
        const currentDate = new Date();
        const date = currentDate.toLocaleString('ar-EG', { timeZone: 'Africa/Cairo' }); // تعديل بناءً على التوقيت الفعلي
        const rtotalreg = 100; // تعديل بناءً على عدد المستخدمين الفعلي
        
        // إعداد صورة للرسالة التفاعلية
        const joanimiimg = await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/b63528315a84c3205ed98.jpg' } }, { upload: conn.waUploadToServer });
        
        // إعداد رسالة التفاعلية
        const interactiveMessage = {
            body: { text: `*◞❐وقـت الـتـشـغـيـل* ${uptime}\n\n*◞❐الـتـوقـيـت* ${date}\n\n*عـدد الـمـسـتـخـدمـيـن* ${rtotalreg}`.trim() },
            footer: { text: `ممنوع سب للبوت لانك سبيت للبوت = سبيت المطور تمتع بالبوت ولا تكتر اسبام للبوت اذا كان لديك مشكله او تريد اضافه اوامر اخري جديده تواصل مع المطور المطور* ◞❐wa.me/201115618853`.trim() },
            header: {
                title: `*┃━━━━━⬣ₛₐfᵣₒₜ bₒₜ⬣━━━━━┃*\n\n*◞❐نورت يحب قائمة الاوامر*\n\n*◞❐ تفضل القائمة يا  :* @${mentionId.split('@')[0]}`,
                subtitle: ``,
                hasMediaAttachment: true,
                imageMessage: joanimiimg.imageMessage,
            },
            nativeFlowMessage: {
                buttons: [
                    {
                        name: 'single_select',
                        buttonParamsJson: JSON.stringify({
                            title: '⌝قـائـمـه الاوامـر⌞',
                            sections: [
                                {
                                    title: 'List',
                                    highlight_label: 'ON',
                                    rows: [
                                        {
                                            header: '◡̈⃝˼‏📖˹ ━━|قسم الادمن│━━˼‏📖˹◡̈⃝',
                                            title: 'ₛₐfᵣₒₜ bₒₜ',
                                            description: '◡̈⃝˼‏📖˹ ━━|قسم الادمن│━━˼‏📖˹◡̈⃝',
                                            id: '.سفروت1'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: 'ON',
                                    rows: [
                                        {
                                            header: '🚻 ◡̈⃝☠︎︎━━ |قسم الاعضاء│━━☠︎︎🚻 ◡̈⃝‎',
                                            title: 'ₛₐfᵣₒₜ bₒₜ',
                                            description: '🚻 ◡̈⃝☠︎︎━━ |قسم الاعضاء│━━☠︎︎🚻 ◡̈⃝‎',
                                            id: '.سفروت2'
                                        }
                                    ]
                                },
                                // إضافة المزيد من الأقسام حسب الحاجة
                            ]
                        })
                    }
                ],
                messageParamsJson: ''
            }
        };

        // إنشاء الرسالة التفاعلية
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
