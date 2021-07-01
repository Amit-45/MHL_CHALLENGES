const Discord = require('discord.js')
const client = new Discord.Client();
const prefix = process.env.prefix;

client.once('ready', () =>{
  console.log(client.user.tag + "has logged in!")
});

client.on('message',(message) => {
  if(message.content === prefix + "p"){
    message.reply('HELLO')
  }
});

client.login(process.env.TOKEN);

const mySecret = process.env['TOKEN']
