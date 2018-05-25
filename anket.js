const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('Yazmam İçin Birşey Yazmalısın!');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setAuthor('ANKET')
    .setColor(3447003)
    .setDescription(`${mesaj} \n\n\ Evet İçin: :thumbsup: Hayır İçin: :thumbsdown: `)
    return message.channel.sendEmbed(embed);
	message.react("👍")
	message.react("👎")
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'anket',
  description: 'Anket yapar.',
  usage: 'anket'
};
