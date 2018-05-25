const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('**Kime Alkış Atcağımı Yazmalısın**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor(3447003)
    .setDescription(`** ${mesaj} `  + message.author.username + ' Seni Alkışladı Bravoo**')
	.setImage(`https://thumbs.gfycat.com/WarpedAdmiredCormorant-size_restricted.gif`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'Alkış',
  description: 'İstediğiniz Kişiye Çekiç Atarsınız.',
  usage: 'Alkış'
};

