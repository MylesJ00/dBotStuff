const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = '!';

bot.on('ready', () =>{
    console.log('bot is online');
})

bot.on('message', message=>{
    
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.send('pong!')
            break;
        case 'website':
            message.channel.send('twitch.tv/mc3mustangs')
            break;
        case 'info':
            if(args[1] === 'help'){
                message.channel.send('Here is the list!')
            }else{
                message.channel.send('I got nothing for you, give a correct argument')
                break;
            }
    }
})

bot.login('Nzc3MjM0Mzg0NjQ1MjU5Mjc0.X7Ad7Q.PiSfq0hQr_uJ1OK8_EbvPINowbs');