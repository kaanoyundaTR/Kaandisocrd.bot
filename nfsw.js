const Discord = require('discord.js')
exports.run = (client, msg, args) => {
 if(msg.channel.nsfw || msg.channel.type === 'dm'){
   let embed = new Discord.RichEmbed()
   .setTitle('+:underage: Olumsuz Örnek ')
   .setColor(0x00AE86)
   .setImage(("https://cdn.boobbot.us/4k/4k"+ Math.floor(Math.random() * 1460)+".jpg"))
   msg.channel.send(embed)
}
 else{
       msg.channel.send({embed: {
color: Math.floor(Math.random() * (0xFFFFAD + 2)),
description: ('Bu kanal NSFW(Not Safe For Work) kanalı değil!')
 }})
 }
};
 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: [],
   permLevel: 0
 };

 exports.help = {
   name: 'hd',
   description: 'NSFW bir resim gösterir.',
   usage: 'hd'
 };