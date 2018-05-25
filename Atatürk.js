const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor('Türk Milletinin Karekteri Yüksektir Türk Milleti Çalışkandır Türk Milleti Cesirdir Ne Mutlu Türküm Diyene.')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
        .setImage(`https://www.stratejikortak.com/wp-content/uploads/2017/05/atat%C3%BCrk-resim.jpg`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'Atatürk',
  description: 'Atatürk Resmini Gösterir',
  usage: 'Atatürk'
};
