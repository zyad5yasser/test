let handler = async (m, { conn, args, usedPrefix, command }) => {      
 var joanimiimg = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/73ef7488ba7f7f3e613ee.mp4'}},  conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: '*♯ЅᗩFᏒOT꙯ 🧚‍♂️📌*'
            },
            body: {
              text: 'نورت قسم الاوامر بلازرار🕊💜'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: '◡̈⃝| قائـمـة📰الاوامـر|◡̈⃝',
                    sections: [
                      {
                        title: 'List',
                        highlight_label: 'yas',
                        rows: [
                          {
                            header: '◡̈⃝˼‏📖˹ ━━|قسم الادمن│━━˼‏📖˹◡̈⃝',
                            title: '',
                            description: '😴 َِ🖤 َِ🖤ۥَِ!))‼...۽قسہًٍۦـۥـِمٛ ٱلٱډـۥـِمٛن',
                            id: '.سفروت1'
                          },
                          {
                            header: '🚻 ◡̈⃝☠︎︎━━ |قسم الاعضاء│━━☠︎︎🚻 ◡̈⃝‎',
                            title: '',
                            description: '😴 َِ🖤 َِ🖤ۥَِ!))‼...۽قشہًٍۦـۥـِمٛ ٱلٱعـضٱﺂء',
                            id: '.سفروت2'
                          },
                          {
                            header: '🂱◡̈⃝📿━━│قسم الديني│━━◡̈⃝🂱📿',
                            title: '',
                            description: '🙂َِ💔 َِ🍃 ۥَِ!))‼...۽قسہًٍۦــۥـِمٛ ٱﺂلډين',
                            id: '.سفروت3'
                          },
                          {
                            header: '◡̈⃝˼‏🏌˹ ━━|قسم الترفيه│━━˼‏🕺🏻˹◡̈⃝',
                            title: '',
                            description: '🚶🏻َِ💔 َِ💔 ۥَِ!))‼...۽قسہًٍۦـۥـِمٛ ٱﺂلټ̸ـﺮفيهه',
                            id: '.سفروت4'
                          },
                          {
                            header: '⬇️◡̈⃝ ━━│ قسم التحميل │━━◡̈⃝⬇️',
                            title: '',
                            description: '😽 َِ♥ َِ🤞ۥَِ،!))‼...۽قسہًٍۦــِمٛ ٱﺂلټحٍَـمَِـۥيل',
                            id: '.سفروت5'
                          }, 
                          {
                            header: '◡̈⃝🔃✠━━│قسم الـتحـويل│━━✠◡̈⃝🔃',
                            title: '',
                            description: '🙂َِ💔 َِ🍃 ۥَِ!))‼...۽قسہًٍۦــِمٛ ٱﺂلټحٍَـح̸ـويل',
                            id: '.سفروت6'
                          },
                            {
                            header: '◡̈⃝💆🏻❏━━│قسم الايدت│━━❏◡̈⃝💆🏻',
                            title: '',
                            description: '😴 َِ🖤 َِ🖤ۥَِ!))‼...۽قسہًٍۦـۥـِمٛ ٱﺂلٱډيډټ',
                            id: '.سفروت7'
                          },
                            {
                            header: '◡̈⃝🏦❏━━│قسم البنك│━━❏◡̈⃝🏦',
                            title: '',
                            description: '؍.َِ🙂 َِ💔 َِ👏ۥَِ،!))‼...۽قـسہًٍۦــِمٛ ٱﺂلبنڪ',
                            id: 'سفروت8'
                          },
                            {
                            header: '◡̈⃝🤴🏻❏━━│قسم المطوࢪ│━━❏◡̈⃝🧏🏻',
                            title: '',
                            description: 'قسہًٍۦـۥـِمٛ ٱﺂلـۥـِمٛطـﺮ🧸 َِ☹ َِ❤ۥَ!))‼...۽',
                            id: '.سفروت9'
                          },
                            {
                            header: '◡̈⃝🤴🏻❏━━│ المطوࢪ│━━❏◡̈⃝🧏🏻',
                            title: '',
                            description: 'ألمطـــﯡـــࢪ َِ💜.؟ۥَ!))‼...۽',
                            id: '.المطور'
                          },
                        ]
                      }
                    ]
                  }),
                  messageParamsJson: ''
                }
              ]
            }
          }
        }
      }
    }, {})

}

handler.help = ['info']
handler.tags = ['main']
handler.command = /^(help|الاوامر|menu|أوامر|menu|اوامر)$/i

export default handler
