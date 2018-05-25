const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Santim yükleniyor...').then(message => {
      var espriler = ['**Seninki 4 santim, oha minnacık!**','**Seninki 8 santim, oha minnacıkhmm :thinking: iyiymiş.**','**Seninki 12 santim, aga be azcık daha büyük olsa.**','**Seninki 16 santim, güzelmiş**','**Seninki 28 santim, oha makine büyükmüş**','**Seninki 34 santim, maşallah İstanbul un plakası kadar!**','**Seninki 58 santim, nasıl büyüttün o kadar?**','**Seninki 189 santim, yuh be çüş!!**'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['santim'],
  permLevel: 0
};

exports.help = {
  name: 'kaç-santim',
  description: 'Seninkini olcer.',
  usage: 'kaç-santim'
};