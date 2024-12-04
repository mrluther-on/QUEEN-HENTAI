import fg from 'api-dylux'

let handler  = async (m, { conn, args, text, usedPrefix, command }) => {

  if (!text) throw `—(••÷[ Š𝓊ḅᤂ𝖗𝓊 ]÷••)— img downloader\n\n🇱🇰 Ex: *${usedPrefix + command}* —(••÷[ Š𝓊ḅᤂ𝖗𝓊 ]÷••)—`

  let res = await fg.googleImage(text)

  conn.sendFile(m.chat, res.getRandom(), 'img.png', `

🇱🇰 Results : *${text}*`.trim(), m)

}

handler.help = ['imagen']

handler.tags = ['img']

handler.command = /^(img|image|gimage|imagen)$/i

handler.diamond = false

export default handler



