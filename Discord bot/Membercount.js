const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'membercount',
  description: 'shows the number of the members in the server',
  async execute(message, args, client){
    const { guild } = message
    const membercount = guild.membercount

    const membercountEmbed = new MessageEmbed()
    .setTitle('member count:')
    .setDescription(membercount)
    .setColor('random');

    message.channel.send(membercountEmbed)
  }
