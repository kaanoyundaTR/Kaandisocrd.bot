const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('**Kimi Kucaklayacağını Yazmalısın!**');
    const embed = new Discord.RichEmbed()
    .setAuthor('Sarılma')
    .setColor(3447003)
    .setTimestamp()
    .setDescription(`** ${mesaj} , ` + message.author.username + ' Tarafından Kucaklandı**')
		.setImage(`https://78.media.tumblr.com/e3c0fb9ad4247fa6f7c5d150a5b88e51/tumblr_mpnrxsOIW31s4ejf8o1_500.gif`)
		.setFooter('Axion Premium V3')
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Sarıl'],
  permLevel: 0
};

exports.help = {
  name: 'sarıl',
  description: 'Sarıl',
  usage: 'sarıl'
};
