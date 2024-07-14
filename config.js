import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk' 
import { fileURLToPath } from 'url' 

global.owner = [
  ['201115618853', '♯ЅᗩFᏒOT꙯', true],
  ['201115618853']
] //Numeros de owner 

global.mods = [''] 
global.prems = ['201115618853', '201115618853']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'm2XBbNvz' //-- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = '𝙎𝙖𝙛𝙧𝙤𝙩𝘽𝙤𝙩' 
global.author = '♯ЅᗩFᏒOT꙯' 

//--info FG
global.botName = '𝙎𝙖𝙛𝙧𝙤𝙩-𝙈𝘿'
global.fgig = 'https://chat.whatsapp.com/ClNQxTnKyFx6eZnJcvqsPY' 
global.fgsc = 'https://chat.whatsapp.com/ClNQxTnKyFx6eZnJcvqsPY' 
global.fgyt = 'https://chat.whatsapp.com/ClNQxTnKyFx6eZnJcvqsPY'
global.fgpyp = 'https://www.atom.bio/safrotbob-376'
global.fglog = 'https://telegra.ph/file/a8b5050b72585b93b1380.jpg' 

//--- Grupos WA
global.id_canal = '120363297635509525@newsletter' //-ID de canal de WhatsApp
global.fgcanal = 'https://whatsapp.com/channel/0029VaeXAKJAjPXLKGuZSr46'
global.bgp = 'https://chat.whatsapp.com/ClNQxTnKyFx6eZnJcvqsPY'
global.bgp2 = 'https://chat.whatsapp.com/ClNQxTnKyFx6eZnJcvqsPY'
global.bgp3 = 'https://chat.whatsapp.com/ClNQxTnKyFx6eZnJcvqsPY' //--GP NSFW

global.wait = '⌛ _Cargando..._\n*▬▬▬▭*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
