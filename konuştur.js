const Discord = require('discord.js');
exports.run = (client, message, args) => {

  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor('Kullanıcının susturulması açıldı!')
  .addField(':warning: **Uyarı** :warning:', '`konuştur` **adlı komutu özel mesajlarda kullanamazsın.**')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', 'mod-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'MUTED');
  if (!modlog) return message.reply('`mod-log` **kanalını bulamıyorum.**').catch(console.error);
  if (!muteRole) return message.reply('`MUTED` **adlı bir rol bulamıyorum.**').catch(console.error);
  if (message.mentions.users.size < 1) return message.reply(' **Kimi susturacağını Belirtmedin!** ').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Eylem:', 'Konuşturma :bangbang: ')
    .addField('Konuşturulan Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Konuşturan Yetkili:', `${message.author.username}#${message.author.discriminator}`)

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('Gerekli izinlere sahip değilim.').catch(console.error);

  if (message.guild.member(user).roles.has(muteRole.id)) {
    message.guild.member(user).removeRole(muteRole).then(() => {
      guild.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
    });
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
      guild.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
    });
  }

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: 'konuştur',
  description: 'İstediğiniz kişinin susturmasını kaldırır.',
  usage: 'konuştur [kullanıcı]'
};
