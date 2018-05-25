const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send({embed: {
                author: {
                    name: "Afk",
                    icon_url: "file:///C:/Users/ACER/Desktop/Fotoraflar/Kaan_SVS.png"
                  },
                description: "**:white_check_mark: Artik Afksin**"
              }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['afk'],
  permLevel: 0
};

exports.help = {
  name: 'afk',
  description: 'Değişiklikleri gösterir.',
  usage: 'afk'
};