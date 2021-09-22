const Shazz = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('menu');

Shazz.addCommand({pattern: 'menu', fromMe: false, desc: Lang.MENU}, (async (message, match) => {

    var r_text = new Array ();
    
    
r_text[0] = "https://i.imgur.com/DnoqRZ3.jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `╔═════════════════❍

╔══◉𝙻𝚞𝚝𝚝𝚊𝚙𝚒 𝚋𝚢 𝚂𝚑𝚊𝚣𝚣◉══╗
║
║╾ ɴᴜᴍʙᴇʀ : @916282185054
║
║▬▭▬▭▬▭▬▭▬▭
║╾ ᴄʀᴇᴀᴛᴏʀ : 𝚂𝙷𝙰𝙷𝙸𝙳 𝚂𝙷𝙰𝚉𝚉 🧞
║
║╾ ᴄʀᴇᴅɪᴛꜱ : 𝚂𝙷𝙰𝙷𝙸𝙳 𝚂𝙷𝙰𝚉𝚉 🧚
║
║╾ ᴏᴡɴᴇʀ : 𝚂𝙷𝙰𝙷𝙸𝙳 𝚂𝙷𝙰𝚉𝚉 🤗!!
║
║╾ ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ : wa.me/916282185054
║
║╾ ꜱᴛᴀᴛᴜꜱ : Public
║
║  ᴇɴᴛʜᴀᴅᴀ ɴᴇ ғᴇᴀʀ ᴀʏᴏ 🤭
║▬▭▬▭▬▭▬▭▬▭
╠══════════════════⎉
║-ᴀꜱᴋ ᴍʏ ᴏᴡɴᴇʀ
╠══════════════════⎉
╠═════⊱ *「𝙼𝙴𝙳𝙸𝙰 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂」* 
║┏━━⊱
║┣❏ *!song*
║┣❏ 
║┣❏ *!video*
║┣❏ 
║┣❏ *!insta*
║┣❏ 
║┣❏ *!yt*
║┣❏ 
║┣❏ *!show*
║┣❏
║┣❏ *!gif*
║┣❏
║┣❏ *!say*
║┣❏ 
║┣❏ *!img*
║┣❏ 
║┣❏ *!trt*
║┣❏ 
║┣❏ *!wiki*
║┣❏ 
║┣❏ *!lyric*
║┣❏ 
║┣❏ *!covid*
║┣❏ 
║┣❏ *!weather*
║┣❏ 
║┣❏ *!removebg*
║┣❏ 
║┣❏ *!ocr*
║┣❏ 
║┣❏ *!wallpaper*
║┣❏ 
║┗━━━━*《𝙻𝚄𝚃𝚃𝙰𝙿𝙸》*
╠═════════════════❍
║┣━━⊱*「𝙵𝚄𝙽 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂」* 
║┣❏ *!joke*
║┣❏  
║┣❏ *!meme*
║┣❏
║┣❏ *!quote*
║┣❏  
║┣❏ *!ss*
║┣❏  
║┣❏ *!changesay*
║┣❏  
║┣❏ *!trumpsay*
║┣❏ 
║┣❏ *!compliment*
║┣❏
║┣❏ *!bitly*
║┣❏
║┣❏ *dict*
║┣❏ 
║┣❏ *!zodiac*
║┣❏
║┣❏ *!qr*
║┣❏
║┣❏ *!movie*
║┣❏
║┣❏ *!anime*
║┣❏ 
║┗━━━━*《𝙻𝚄𝚃𝚃𝙰𝙿𝙸》*
╠═════════════════❍
║┣━━⊱*「𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂」* 
║┣❏ *!sticker*
║┣❏
║┣❏ *!photo*
║┣❏
║┣❏ !*attp*
║┣❏
║┣❏ *!ttp*
║┣❏
║┣❏ *!gft*
║┣❏
║┣❏ *!carbon*
║┣❏
║┗━━━━*《𝙻𝚄𝚃𝚃𝙰𝙿𝙸》*
╠═════════════════❍
║┣❏ *𝚂𝙾𝙼𝙴 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙰𝚁𝙴 𝙽𝙾𝚃 𝚆𝙾𝚁𝙺𝙸𝙽𝙶
║┣❏
║┣❏ *𝙻𝚄𝚃𝚃𝙰𝙿𝙸*
║┣❏ 
║┣❏ ✆ ʀᴇᴘᴏʀᴛ ʙᴜɢ?
║┣❏ 
║┣❏ https://wa.me/916282185054
║┣❏ 
║┣❏ ✆ ᴄʀᴇᴅɪᴛs ɢᴏᴇs ᴛᴏ!
║┣❏ 
║┣❏ https://wa.me/916282185054
║┣❏ 
║┗━━━━ *《𝙻𝚄𝚃𝚃𝙰𝙿𝙸》*
╚═══❖══▣══▣══❖═══╝

`}) 

}));
