const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {	
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('>>Menü')
  .setColor('RANDOM')
  .addField("___**Kullanıcı Komutları**___", '**!davet = BOT Davet linki atar. \n!yardım = BOT Komutlarını gösterir. \n!sunucuresmi = BOT Sunucunun Resmini Atar. \n!sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \n!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. \n!havadurumu = İstediğiniz bir bölgenin hava durumunu gösterir. \n!istatistik = BOT İstatisliklerini atar. \n!yenilikler = Bottaki yenilikleri gösterir. \n!tavsiye = BOT ile ilgili tavsiyede bulunmanızı sağlar. \n!bilgi = BOT Kendisi Hakkında Bilgi Verir. \n!ping = BOT Gecikme Süresini Söyler.**')
  .addField("___**Eğlence Komutları:**___", '**!yumruk-at = Bir kişiye yumruk atmanızı sağlar. \n!soru-sor = Bota soru sormanızı sağlar. \n!piksel = Etiketlediğiniz kişinin avatarını piksel şeklinde gösterir. \n!espri = BOT iğrenç ve soğuk espriler yapar. \n!zar-at = Zar atarsınız. \n!kaç-santim = Seninkini ölcer. \n!rastgele-renk = Rastgele bir renk ismi söyler. \n!koş = Koşarsınız.\n!çayiç = Çay İçersiniz. \n!kurabiye = Kurabiye yersiniz. \n!çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \n!yaz = Bota İstediğiniz Şeyi Yazdırırsınız.**')
  .addField("___**Yetkili Komutları**___", '**!kilit = Bir kanalı belirlediğiniz süre boyunca kilitler. \n!ban = İstediğiniz Kişiyi Sunucudan Banlar. \n!kick  = İstediğiniz Kişiyi Sunucudan Atar. \n!unban = İstediğiniz Kişinin Yasağını Açar. \n!uyar = Bir kişiyi uyarmanızı sağlar. \n!geçici-sustur = Bir kişiyi belirlediğiniz süre kadar susutup süresi bitince otomatik susturmasını kaldırır. \n!sustur = Bir kişiyi süresiz biçimde susturur. \n!konuştur = Süresiz biçimde susturulmuş birisinin susturulmasını kaldırır. \n!anket = Anket Açar. \n!duyuru = Duyuru yapar. \n!rol-ver = Bir kişiye rol vermenizi sağlar. \n!ses-kanal-aç = Sesli konuşma odası açar. \n!yazı-kanal-aç = Yazı kanalı açar.**')
  .addField("___**» Destek Hattı**___", "**!tavsiye =  eklenmesini istediğin özelliği buradan bizlere iletebilirsin. \n!destek = Destek Ekibine Soru İle Yetkiliyi Çağırısınız**")
  .addField("___**Yapımcı Komutları:**___", "****Güvenlik amacı ile gösterilmemektedir.**")
  .setFooter('KaanSvs 2018© Sahib: Kaan/17#5305 Kodlayıcı/Yapımcı: Kaan/17#5305')
 if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
