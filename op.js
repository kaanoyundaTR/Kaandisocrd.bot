const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('**Kimi Öpeceğini Yazmalısın!**');
    const embed = new Discord.RichEmbed()
    .setAuthor('Öpme')
    .setColor(3447003)
    .setTimestamp()
    .setDescription(`** ${mesaj} , ` + message.author.username + ' Tarafından öpüldı**')
		.setImage("https://media0.giphy.com/media/3owzW6WuFoagEZDqFi/giphy.gif")                            
		.setFooter("©️ 2018 |Kaan Svs", "http://i.hizliresim.com/VrnLLB.jpg")
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['öp'],
  permLevel: 0
};

exports.help = {
  name: 'öpme',
  description: 'Seçtiğin Kullanıcıyı Öper!',
  usage: 'öpme'
};