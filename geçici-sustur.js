const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!tempmute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Kullanıcı bulunamadı.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Onları susturmak olamaz!");
  let muterole = message.guild.roles.find(`name`, "MUTED");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "MUTED",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("Bir zaman belirlemedin!");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> için ses kapatıldı ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> Kisinin Mutesi Acildi!`);
  }, ms(mutetime));


//end of module
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['geçici-sustur', 'sustur', 'gsustur'],
  permLevel: 2
};

exports.help = {
  name: 'geçici-sustur',
  description: 'Sureli Susturur.',
  usage: 'geçici-sustur [Kullanici] [Sure]'
};
