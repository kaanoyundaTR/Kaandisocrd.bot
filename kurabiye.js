const Discord = require('discord.js');

exports.run = (client, message, args) => {
    message.channel.send('Canım gel buraya sana kurabiye vereceğim! ')
    message.react("🍪");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kurabiye'],
  permLevel: 0
};

exports.help = {
  name: 'kurabiye',
  description: 'Size kurabiye verir',
  usage: 'kurabiye '
};
