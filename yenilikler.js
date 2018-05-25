const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const botbilgi = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('**Bota Gelen Yenilikler:** \n1-`yazı-kanal-aç` ve `ses-kanal-aç` komutları eklendi. \n2-`rol-ver` komutu eklendi. \n3-`kaç-santim` komutu eklendi. \n4-`rastgele-renk` komutu eklendi. \n5-`destek` komutu eklendi.');
    message.channel.sendEmbed(botbilgi) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot bilgi', 'botbilgi', 'bb', 'botb', 'bbot', 'hakkında', 'bot hakkında', 'bothakkında'],
  permLevel: 0
};

exports.help = {
  name: 'yenilikler',
  description: 'Yenilikleri gösterir.',
  usage: 'yenilikler'
};
