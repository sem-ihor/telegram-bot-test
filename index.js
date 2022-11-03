const TelegramApi = require('node-telegram-bot-api')
const token = '5550938956:AAHMUWl6WZtAb3BPzA6mVMvOxi2JRqZiBh0'

const bot = new TelegramApi(token, {polling: true})

bot.on('message', async (msg) => {
    console.log(msg)
    const text = msg.text
    const chatId = msg.chat.id

    if (text === '/start') {
        await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/f40/774/f4077484-5680-377b-a6fc-c9fd165063ff/6.webp')
        return await bot.sendMessage(chatId, `Welcome the owner of the wonderful Opel!`)
    }
    if (text === '/info') {
        return await bot.sendMessage(chatId, `I know you are ${msg.from.first_name} and you love your Opel Omega 1998...`)
    }

    return await bot.sendMessage(chatId, `Huy tobi v sraku`)
})