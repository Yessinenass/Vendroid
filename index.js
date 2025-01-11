// { This Bot Was Programmed And Devloped By Ciminal Team } //

const express = require('express');


const app = express();

app.get('/', (req, res) => {
  res.send('Ciminal Team')
});

app.listen(3000, () => {
  console.log('Ciminal Team');
});

// { Ciminal Team Uptime } //

app.post("/uptime_devtools", (req, res) => {
  console.log("Ciminal Team Uptime")
    res.send({
      msg: "done uptime",
      access: "by_devtools",
    })
  })

  // { Ciminal Team Intents } //

  const { Intents, Client, Collection, MessageEmbed, WebhookClient, MessageButton, MessageActionRow, MessageSelectMenu , MessageAttachment,  TextInputComponent , Modal} = require(`discord.js`)
  const {createTranscript} = require('discord-html-transcripts');
  const ms = require("ms")
  const fs = require(`node:fs`)
  const client = new Client({
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES,
      Intents.FLAGS.GUILD_MEMBERS,
      Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  Intents.FLAGS.GUILD_VOICE_STATES,
      Intents.FLAGS.GUILD_PRESENCES
    ],
    partials: ["REACTION", "MESSAGE", "CHANNEL"]
  }).setMaxListeners(0)
  const { REST } = require("@discordjs/rest")
  const { Routes } = require("discord-api-types/v9")
  const config = require(`./config.json`)
  const db = require(`pro.db`)
  const prefix = "!"
  client.config = config
  const line = "https://media.discordapp.net/attachments/1327311139796811839/1327311346265489478/Picsart_25-01-09_21-33-19-444.jpg?ex=67829a85&is=67814905&hm=2128b8f876cc2816ea658027fc3472bf53d14799a4e02a3b6e6350dffab5671c&"

  // { Ciminal Team Discord.Js } //

  const Discord = require("discord.js")
  module.exports = client

  // { Ciminal Team Fix Error } //

   process.on("unhandledRejection", error => {
    return console.log(error)
  }); 
   process.on("unhandledRejection", error => {
    return 
  }); 
   process.on("unhandledRejection", error => {
    return 
  }); 

  

  // { Ciminal Team Bot Ready } //

  client.on('ready' , async() => {
    console.log(`================`)
    console.log(``)
    console.log(`Bot Name : ${client.user.username}`)
    console.log(`Bot Tag : ${client.user.tag}`)
    console.log(`Bot Id : ${client.user.id}`)
    console.log(`Servers Count : ${client.guilds.cache.size}`)
    console.log(`Users Count : ${client.guilds.cache
  .reduce((a, b) => a + b.memberCount, 0)
  .toLocaleString()}`)
    console.log(``)
    console.log(`================`)
    var statuses = [`Redbull S Is Back`];
    var timers = 2;
      var timeing = Math.floor(timers * 1000);
      setInterval(function() {
        var lengthesof = statuses.length;
        var amounter = Math.floor(Math.random() * lengthesof);
        client.user.setActivity(statuses[amounter], { type: 'STREAMING', url: 'https://www.twitch.tv/help' });
      }, timeing);

    })

 // { Ciminal Team Const,Let,Var } //

const link = "https://discord.gg/HpnzzpUFqt"
const feedback = "1206354265187295332"
const autolinerooms = ["1327268510170353664","1206354256370864138","1211388992193560587"]
const ordercategory = "1324502138717732917"
const taxchannel = "1327312227337900061"
let team = "1327336624815734905"
let offerroom = "1327268510170353664"
let color = "#303136"
  var blacklistWords = ['نترو','اكونتات','بوتات','كرديت','نيترو','ديس','كريديت','ديسكورد','ديس','سوشيال','بيتكوين','btc','حسابات','متوفر','بيع','سيرفر','سيرفرات','توكنات','توكن','تفعيل','بوستات','بوست','فيزا','هكر','سعر','عرض','تيك توك','انستا','نتفلكس','نتفليكس','سبوتيفاي','فيسبوك','يوتيوب','تويتر','تيلجرام','ستيم','شدات','يوسي','روبلوكس','Watch it','شاهد','فوت','فوتات','بايبال','اكس بوكس','ماين كرافت','كروت','ديزاين','فايكينج','انشارتد','فايكنج','كسمك','كسمين امك','كسمينك','ياخول','يا خول','يمعرص','يعرص','يامتناك','يا متناك','يشرموط','ياشرموط','يا شرموط','يكسمك','احا','خول']
const VClientRole = "1324502056743993344"; // اي دي رول الكلاينت
const VTeamRole = "1327336624815734905"; // رول التيم او الرول اللي تقدر تستخدم الامر
let boost_channel = "1211388943883313182"; //ID CHANNEL BOOST HERE 
  // { تشفير } //

    client.on('messageCreate', message => {
      if (message.author.bot || message.member.permissions.has('ADMINISTRATOR')) return;

      const content = message.content.split(' ');

      if (!content[0]) return;

      content.forEach(arg => {
        if (!message) return;

        const found = blacklistWords.filter(b => b === arg).map(m => m)[0];

        if (found) {
          message.author.send('');
          message.delete();
          return;
        }
      });
    });

//
client.on('messageCreate', async voxm => {
    if (voxm.author.bot) return;

    if (voxm.content.toLowerCase().startsWith(prefix + "cl")) {
      if (!(voxm.member.permissions.has('ADMINISTRATOR') || voxm.member.roles.cache.has(VTeamRole))) { return voxm.reply("> **❌ | You Don't Have Permission To Do That**"); }
      const user = voxm.mentions.users.first();
      if (!user) { return voxm.reply('> **❌ | Please Mention A User**'); }
      const member = voxm.guild.members.cache.get(user.id);
      if (!member) { return voxm.reply("> **❌ | The Mentioned User Isn't In The Server**"); }
      const role = voxm.guild.roles.cache.get(VClientRole);
      if (!role) { return; }
      if (member.roles.cache.has(role.id)) { return voxm.reply('> **❌ | The Mentioned User Already Has The Role**'); }
      try {
          await member.roles.add(role);
          voxm.reply(`> **✅ | Done Add Client Role To ${user.tag}**`);
      } catch (error) {
          console.error('Error Adding Role Client, Error:', error);
          voxm.reply('Error, Please Try Again Later.');
      }
    }
});  
// { Wlc } //

  client.on('guildMemberAdd' , async(member) => {
    let welcomefukenembed = new MessageEmbed()
    .setAuthor({name: member.user.username , iconURL : member.user.displayAvatarURL({dynamic: true})})
    .setFooter({ text : member.user.username , iconURL: member.user.displayAvatarURL({dynamic: true})})
    .setImage(line)
  .setThumbnail(member.user.displayAvatarURL({dynamic: true}))
    .setTimestamp()
    .setDescription(`**<a:cs:1120349872097345677> | 𝐇𝐢 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐓𝐨 __𝐃𝐢𝐫𝐞𝐜𝐓__ 𝐎𝐧𝐞 𝐎𝐟 𝐓𝐡𝐞 𝐁𝐞𝐬𝐭 𝐀𝐧𝐝 𝐁𝐢𝐠𝐠𝐞𝐬𝐭 𝐒𝐭𝐨𝐫.𝐞𝐬 𝐈𝐧 𝐓𝐡𝐞 𝐂𝐨𝐦𝐦𝐮𝐧𝐢𝐭𝐲.<a:red_blinking:1202748637990354954> 

<:logo_1701:1120365671583326289> | 𝐓𝐡𝐢𝐬 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐇𝐞𝐥𝐩𝐢𝐧𝐠 𝐘𝐨𝐮 𝐓𝐨 𝐍𝐨𝐰 𝐇𝐨𝐰 𝐓𝐨 𝐔𝐬𝐞 𝐓𝐡𝐞 𝐒𝐞𝐫𝐯𝐞𝐫 𝐂𝐡𝐚𝐧𝐧𝐞𝐥𝐬. <a:pp781:1120353380997546104>

<:logo_1701:1120365671583326289> | 𝐅𝐨𝐫 𝐎𝐫𝐝𝐞𝐫 <#${order}> <a:33UsRDrG:1120343931654250576>

<:logo_1701:1120365671583326289> | 𝐅𝐨𝐫 𝐀𝐩𝐩𝐥𝐲 𝐓𝐨 𝐓𝐞𝐚𝐦 <#${applyteam}> <:G_:1120341071772258344> 

<:logo_1701:1120365671583326289> | 𝐅𝐨𝐫 𝐒𝐮𝐩𝐩𝐨𝐫𝐭 :⁠ <#${supportt}> <a:megaright:1201940581681737758>

<:logo_1701:1120365671583326289> | 𝐓𝐡𝐞 𝐀𝐝𝐬 𝐏𝐫𝐢𝐜𝐞𝐬 : <#${adsprice}> <a:FEVERHEART:1121212037834494034> 


<:logo_1701:1120365671583326289> | 𝐄𝐧𝐣𝐨𝐲 <𝟑 <a:redheart:1201551988240953344>**`) 
     .setColor(color)

  member.guild.channels.cache.get(welcomerooom).send({ content: `> **<:logo_1701:1120365671583326289> | Hey** <@!${member.user.id}> **Welcome To ** __${member.guild.name}__ ` , embeds: [welcomefukenembed]})

  // { Wlc2 } //

  member.send(`**> <:logo_1701:1120365671583326289>  | Welcome To DirecT
  <:hear:1202748436630216704>

  > \`#\` <:logo_1701:1120365671583326289>  |  مرحبا بك ، نورت اكبر و اضمن ستور فالشرق العربي دايركت ستور <:hear:1202748436630216704> 



  > \`#\` <:logo_1701:1120365671583326289>  | تعريف بسيط : دايركت ستور مصري يوفر جميع الخدمات ، حيث يتكون من طاقم عمل ممتاز ، ويعمل علي تطوير خدماته دائما بشكل يليق بكم ، . ويوفر جميع المبيعات <a:red_blinking:1202748637990354954> 



  > \`#\` <:logo_1701:1120365671583326289>  | لطلب اوردر بما تحتاجه من مبيعات أو تصاميم <#${order}> <a:ss_4:1192067884772503673>
  > 
  > \`#\` <:logo_1701:1120365671583326289>  |  للتقديم علي طاقم العمل <#${applyteam}> <a:ss_4:1192067884772503673>



  # نتمي لك السعاده معنا <a:redheart:1064843075907760129>**`)
  }) 

  // { مقبول } //

  client.on('messageCreate', async(message) => {
    if(message.author.bot) return;

    if(message.content === "مقبول") {
   message.delete()

  message.channel.send(`> تم قبولك في و ${message.guild.name} <a:emoji_16:1212408881020542976>

اجـبـاري قـراءة لـعـدم جـلـب الـورنـات <a:emoji_16:1212408881020542976> 
<#${newst}>
<#${rulest}>
<#${pricet}>

> نحـن سعـيـدون لـوجودك معـنا <a:emoji_16:1212408881020542976>`)
    }

  // { +Map } //

    if(message.content === "+mamalzkzbahaap") {
     message.delete()
  message.channel.send(`**<a:cs:1120349872097345677> | 𝐇𝐢 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐓𝐨 __𝐃𝐢𝐫𝐞𝐜𝐓__ 𝐎𝐧𝐞 𝐎𝐟 𝐓𝐡𝐞 𝐁𝐞𝐬𝐭 𝐀𝐧𝐝 𝐁𝐢𝐠𝐠𝐞𝐬𝐭 𝐒𝐭𝐨𝐫.𝐞𝐬 𝐈𝐧 𝐓𝐡𝐞 𝐂𝐨𝐦𝐦𝐮𝐧𝐢𝐭𝐲.<a:red_blinking:1202748637990354954> **

**<:logo_1701:1120365671583326289> | 𝐓𝐡𝐢𝐬 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐇𝐞𝐥𝐩𝐢𝐧𝐠 𝐘𝐨𝐮 𝐓𝐨 𝐍𝐨𝐰 𝐇𝐨𝐰 𝐓𝐨 𝐔𝐬𝐞 𝐓𝐡𝐞 𝐒𝐞𝐫𝐯𝐞𝐫 𝐂𝐡𝐚𝐧𝐧𝐞𝐥𝐬. <a:pp781:1120353380997546104>**


> - **Request Order - طلب اوردر**

 <a:right:1122564045527068843>   <#1206354259575054378> 


> - **Request Ads - طلب اعلان**

 <a:right:1122564045527068843>   <#1206354250091855872> 


> - **Request Mediator - طلب وسيط **

 <a:right:1122564045527068843>   <#1206354266713759834>  


> - **Technical Support - الدعم الفني**

 <a:right:1122564045527068843>  <#1206354271474556928>  


> - **Daily Offers - معرفه العروض اليوميه**

> <a:right:1122564045527068843>   <#1206354256370864138>  


> - **Daily GiveAways - مسابقات يوميه**

> <a:right:1122564045527068843>  <#1206354226331263066>
`)
      }

  // { دليل } //

      if(message.content === "+sbsvshtr") {
        message.reply(`> ** يرجي اجباريأ لمساعدتك بالكامل ، ارسال صوره للتحويلات عن طريق موقع التحويلات :**   



  > **About : https://probot.io/transactions **`)
      }
    //
if(message.content === "+addhhhhrole") {
        message.reply(`> الان تم اضافه لك رول جديده  <a:812986091283152916:1212482816936251484> 



> يجب نزول بها اوفرات يوميا علي الاقل واحد و الا سيتم تصفيتك  <a:thunder709:1211697737477922817> `)
}

  // { مرفوض } //

    if(message.content === "مرhhhhhفوض") {
      message.reply(`تم رفضك في فريق ${message.guild.name} <a:emoji_16:1212408881020542976> 
    
  <a:emoji_16:1212408881020542976> برجاء تطوير مستواك و التقديم مره اخري`)
    }
  // { +Ws } //

    if(message.content === prefix+"wsaazddns") {
      message.delete()
      message.channel.send(`> <a:emoji149:1212509704765309069> | معك __${message.author}__ من طاقم السيرفر <a:emoji_16:1212408881020542976> 

> <:support:1212482820430237749> | برجاء انتظار البائع <a:emoji_16:1212408881020542976> 

> <a:thunder709:1211697737477922817>  | شكرا لتفهمكم برجاء عدم الازعاج بالمنشن <a:emoji_16:1212408881020542976> 

> <a:emoji149:1212509704765309069> | With You __${message.author}__ From Staff Server <a:emoji_16:1212408881020542976> 

> <:support:1212482820430237749>| Please Wait Saller <a:emoji_16:1212408881020542976> 

> <a:thunder709:1211697737477922817>  | Thank You For Your Understanding. Please don't Disturb With Mention <a:emoji_16:1212408881020542976>`)
    }

  // { شفر } //

  // { تشفير } //

    

  // { +Rep } //

     if(message.content === prefix+"rlllllep") {
       message.delete()
       message.channel.send({embeds: [
         new MessageEmbed()
         .setTitle(`${message.guild.name} Team Report`)
         .setDescription(`**\`-\` للتبليغ علي سيلر  قم باملاء الاستماره حتي نستطيع تعويضك

  صاحب البلاغ :
  اسم السيلر فالديسكورد :
  ايدي السيلر فالديسكورد :
  القصه :
  قم بارسال الدلائل مع دليل التحويل :
  **
  `)
         .setFooter({text: `${message.guild.name} Requirements` , iconUrl: message.guild.iconURL()})
         .setTimestamp()
         .setColor(color)
         .setThumbnail(message.guild.iconURL())
       ]})
     }



  // { لاين } //

    if(message.content === "لاين") {
      message.delete();
      message.channel.send({embeds: [new MessageEmbed().setColor(color).setImage(line)]})
    }

  // { Line } //

      if(message.content.toLowerCase() === "line") {
      message.delete();
      message.channel.send({embeds: [new MessageEmbed().setColor(color).setImage(line)]})
    }

  // { خط } //

      if(message.content === "خط") {
      message.delete();
      message.channel.send({embeds: [new MessageEmbed().setColor(color).setImage(line)]})
    }

  // { Fb } //

    if(message.content.toLowerCase() === "fb") {
      message.reply(`**
 شكرا لاختيارك ${message.guild.name} <a:thunder709:1327336601956646964>

 Thanks For Choosing ${message.guild.name} <:luv_u:1327316447214436353>


رايك يهمنا , نتمني ان تعطي فيدباك و تذكر بلمنشن ${message.author}

Your opinion matters , Please give feedback and m Mention the name of the person ${message.author}

----------------------------------------------


Here :
 <#${feedback}>
 <#${feedback}>
 **`)
  }
  });
  // { Add Client Role } //

    client.on('messageCreate', async (message) => {
      if (message.author.id === "1206354139580473385" && message.channel.parentId === ordercategory) {
          let member = message.mentions.members.first();
          if (!member || member.bot) return;

          let roleId = "1179867905186349086";
          let role = message.guild.roles.cache.get(roleId);

          if (!role) {
              console.error(`Role with ID ${roleId} not found.`);
              return;
          }

          if (member.roles.cache.has(roleId)) {
              return;
          } else {
              member.roles.add(role.id).then(() => {
                  return message.channel.send({
                      content: `**<:logo_1701:1120365671583326289> | Done Added __𝖢𝗅𝗂𝖾𝗇𝗍__
<:logo_1701:1120365671583326289> | To Client : <@!${member.user.id}>**`
                  });
              }).catch(error => {
                  console.error("Error adding role:", error);
              });
          }
      }
  });

  // { +Setactivity } //

  client.on('messageCreate', message => {
      if(message.content.toLowerCase().startsWith(prefix + 'setactivity')) {
          if (!owner.includes(message.author.id)) return;
          const oy = message.content.split(" ").slice(1).join(" ");
          if(!oy) return message.reply("**Please Write New Activity**");

          // تسجيل النشاط في الكونسول
          console.log(`Changing bot activity to: ${oy}`);

          client.user.setPresence({ activities: [{ name: oy }], status: 'online' });
          return message.reply(`**Done, set bot presence to ${oy}**`);
      }
  });

  // { +Setprefix } //

  client.on("messageCreate", async message => {


      if (message.content.startsWith(prefix + "setprefix")) {
          if (!owner.includes(message.author.id)) {
              return message.channel.send(`**Permission denied. You don't have the required permissions.**`);
          }

          const args = message.content.slice(1).trim().split(/ +/);
          if (!args[1]) {
              return message.channel.send(`**Please provide a new prefix.**`);
          }

          // تغيير قيمة البريفيكس في قاعدة البيانات
          db.set("prefix", args[1]);

          // تحديث ملف config.json
          const config = require('./config.json');
          config.prefix = args[1];
          fs.writeFileSync('./config.json', JSON.stringify(config, null, 2));

          message.channel.send(`**Prefix successfully changed to: \`${args[1]}\`**`);

      }
  });

  // { +Setavatar } //

  client.on("messageCreate", message => {
      if (message.content.toLowerCase().startsWith (prefix+"setavatar")) {
          if (!owner.includes(message.author.id)) return;
          let avLink = message.content.substr(`${prefix}setavatar `.length);
          if (!avLink) return message.channel.send("**Incorrect Link, Please Put Avatar Link!**");

          // تسجيل تغيير الصورة في الكونسول
          console.log(`Changing bot avatar to: ${avLink}`);

          client.user.setAvatar(avLink).then(() => {
              message.delete()
              message.channel.send('**Bot Avatar Has Been Changed ✅**')
          }).catch(() => {
              message.channel.send('**Error, Try Again Later! 🚫: Incorrect Link Or Ratelimit**')
          });
      }
  });

  // { Auto Fedback } //

  client.on('messageCreate' , async(message) => {
    if(message.author.bot) return;
    if(message.channel.id != feedback) return;
      message.reply({embeds:[
        new MessageEmbed()
        .setColor(color)
  .setDescription(`> **Thanks For Giving Us Feedback <a:thunder709:1327336601956646964>

> We Hope You Visit Capitano Store Again <:luv_u:1327316447214436353>**`)
        .setImage(line)
      ]})
    });


  // { +Unbanall } //

  client.on('messageCreate', async message => {
          if(message.content.startsWith(prefix + 'unbanall')) {
                  let b = await message.guild.bans.fetch()
                  if(!message.member.permissions.has("BAN_MEMBERS")) return message.reply("You don't Have permissions")
                  b.forEach(ban => message.guild.members.unban(ban.user))
                          message.reply(`**✅ ${b.size} members has been unbanned.🛬**`)
          }
  });

  // { +Unlock } //

  client.on("messageCreate", async message => {
      if (message.author.bot) return;
  if (!message.channel.guild) return;
      if (message.content.startsWith(prefix + 'unlock')) {
                  const permission = message.member.permissions.has("MANAGE_CHANNELS");
                  const guilds = message.guild.me.permissions.has("MANAGE_CHANNELS");

                  if (!permission)
                          return message.reply(
                                  { content: ":x: **You don't have permission to use this command**", ephemeral: true }
                          ).catch((err) => {
                                  console.log(`i couldn't reply to the message: ` + err.message)
                          })

                  if (!guilds) return message.reply({ content: `:rolling_eyes: **I couldn't change the channel permissions. Please check my permissions.**`, ephemeral: true }).catch((err) => {
                          console.log(`i couldn't reply to the message: ` + err.message)
                  })
                  let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
                  message.channel.permissionOverwrites.edit(everyone, {
                          SEND_MESSAGES: true
                  }).then(() => {
                          message.reply({ content: `:unlock: **<#${message.channel.id}> has been unlocked.**`, ephemeral: true })
                  })
      }
  });

  // { +Lock } //

  client.on("messageCreate", async message => {
      if (message.author.bot) return;
  if (!message.channel.guild) return;
      if (message.content.startsWith(prefix + 'lock')) {
                      const permission = message.member.permissions.has("MANAGE_CHANNELS");
                  const guilds = message.guild.me.permissions.has("MANAGE_CHANNELS");

                  if (!permission)
                          return message.reply(
                                  { content: ":x: **You don't have permission to use this command**", ephemeral: true }
                          ).catch((err) => {
                                  console.log(`i couldn't reply to the message: ` + err.message)
                          })

                  if (!guilds) return message.reply({ content: `:rolling_eyes: **I couldn't edit the channel permissions. Please check my permissions and role position.**`, ephemeral: true }).catch((err) => {
                          console.log(`i couldn't reply to the message: ` + err.message)
                  })
                  let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
                  message.channel.permissionOverwrites.edit(everyone, {
                          SEND_MESSAGES: false
                  }).then(() => {
                          message.reply({ content: `:lock: **${message.channel.name} has been looked.** `, ephemeral: true }).catch((err) => {
                                  console.log(`i couldn't reply to the message: ` + err.message)
                          })
                  })
          }
  });

  // { +Show } //

  client.on("messageCreate", async message => {
      if (message.author.bot) return;
  if (!message.channel.guild) return;
      if (message.content.startsWith(prefix + 'show')) {
                  const permission = message.member.permissions.has("MANAGE_CHANNELS");
                  const guilds = message.guild.me.permissions.has("MANAGE_CHANNELS");

                  if (!permission)
                          return message.reply(
                                  { content: "**You don't have permission to use this command**", ephemeral: true }
                          ).catch((err) => {
                                  console.log(`i couldn't reply to the message: ` + err.message)
                          })

                  if (!guilds) return message.reply({ content: `**I couldn't edit the channel permissions. Please check my permissions and role position.**`, ephemeral: true }).catch((err) => {
                          console.log(`i couldn't reply to the message: ` + err.message)
                  })
                  let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
                  message.channel.permissionOverwrites.edit(everyone, {
                          VIEW_CHANNEL: true
                  }).then(() => {
                          message.reply({ content: `<#${message.channel.id}> Done show this room.**`, ephemeral: true }).catch((err) => {
                                  console.log(`i couldn't reply to the message: ` + err.message)
                          })
                  })
          }
  });

  // { +Hide } //

  client.on("messageCreate", async message => {
      if (message.author.bot) return;
  if (!message.channel.guild) return;
      if (message.content.startsWith(prefix + 'hide')) {

      const permission = message.member.permissions.has("MANAGE_CHANNELS");

      const guilds = message.guild.me.permissions.has("MANAGE_CHANNELS");

           if (!permission)
     return message.reply({ content: "**You don't have permission to use this command**", ephemeral: true }).catch((err) => {
                                  console.log(`i couldn't reply to the message: ` + err.message)

       })

          if (!guilds) return message.reply({ content: `**I couldn't edit the channel permissions. Please check my permissions and role position.**`, ephemeral: true }).catch((err) => {
                             console.log(`i couldn't reply to the message: ` + err.message)

      })

            let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
                  message.channel.permissionOverwrites.edit(everyone, {
                          VIEW_CHANNEL: false
                  }).then(() => {
                          message.reply({ content: `**<#${message.channel.id}> Done hide this room.**`, ephemeral: true }).catch((err) => {
                                  console.log(`i couldn't reply to the message: ` + err.message)

                          })
                  })
          }
  });

  // { +Unban } //

  client.on("messageCreate", async message => {
      if (message.author.bot) return;
      if (message.content.startsWith(prefix + 'unban')) {
  if(!message.member.permissions.has("BAN_MEMBERS")) return message.reply(`** 😕 You don't have permissions **`);
  if(!message.guild.me.permissions.has("BAN_MEMBERS")) return;
      let args = message.content.split(' ')
      let id = args[1];
      if(!id)  return message.reply(`** 😕 Please mention member or id **`);
      if(isNaN(id)) {
         return message.reply(`** 😕 Please mention member or id **`);
      } else {
  message.guild.members.unban(id).then(mmm => {
          message.reply(`✅** ${mmm.tag} unbanned!**`)
        }).catch(err => message.reply(`**I can't find this member in bans list**`));
        }
      }
  }) 


  // { +Ban } //

  client.on("messageCreate", async message => {
      if (message.author.bot) return;
      let c = message.content.split(' ')
      if (c[0] == prefix + 'ban') {
          if(!message.member.permissions.has("BAN_MEMBERS")) return message.reply(`** 😕 You don't have permissions **`);
      if(!message.guild.me.permissions.has("BAN_MEMBERS")) return;

      let argss = message.content.split(' ')
      let user = message.guild.members.cache.get(argss[1]) || message.mentions.members.first();
      if(!user) return message.reply(`** 😕 Please mention member or id **`);
   if(user.roles.highest.position > message.member.roles.highest.position && message.author.id !== message.guild.fetchOwner().id) return message.reply(`** ❌ You can't ban this user**`);

      if(!user.bannable) return message.reply(`** ❌ You can't ban this user**`);
      await user.ban().catch(err => {console.log(err)});
       await message.reply(`✅**${user.user.tag} banned from the server!**✈️`);
      }
  }) 


  // { +Uptime } //

  client.on("messageCreate", async (message) => {
    if (message.content === prefix + "uptime") {
      if (!message.member.permissions.has(`ADMINISTRATOR`)) return message.reply(`**you don't have permissions**`)
      let days = Math.floor(client.uptime / 86400000);
      let hours = Math.floor(client.uptime / 3600000) % 24;
      let minutes = Math.floor(client.uptime / 60000) % 60;
      let s = Math.floor(client.uptime / 1000) % 60;
      ip = `${days} days,  ${hours} hours,  ${minutes} minutes,  ${s} seconds,`
      let embed = new Discord.MessageEmbed()
        .setColor(color)
        .setImage(line)
        .setTitle(`uptime:`)
        .setDescription(`**${ip}**`)
        .setThumbnail(client.user.avatarURL())
        .setTimestamp()
      message.reply({ embeds: [embed] })
    }
  })
  // { Order Msg } //
    client.on('channelCreate', message => {
      if (message.parentId !== ordercategory) return;
      setTimeout(() => {
          message.send(`**السلام عليكم ورحمة الله وبركاته ..

معك طاقم انشارتد في تذكرة الطلب .! <:redbull:1325257297403973707>

يرجي توضيح طلبك بالكامل لكي يمكنني مساعدتك و تاكيد الطلب ، سوف امنشن لك فريق السلعة الخاص بطلبك ويرجي انتظار البائع ، في حالة عدم وجود المنتج في الوقت الحالي سيتم غلق التذكرة وسيتم اتاحته في وقت لاحق وشكراً**`)
          }, 1000);
    })
  // { +Embed } //

  client.on("messageCreate", async message => {
    if (message.author.bot) return;
    if (!message.channel.guild) return;

    if (message.content.startsWith(prefix + 'embed')) {
      if (!message.member.permissions.has("MANAGE_GUILD")) return message.reply(`** :rolling_eyes: You don't have permissions **`);

      let args = message.content.split(' ').slice(1).join(' ');

      if (!args) return message.reply('** :x: Please select a message **');

      message.delete();

      let embed = new MessageEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
        .setDescription(`${args}`)
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setColor(color) 
        .setTimestamp()
        .setImage(line);

      message.channel.send({ embeds: [embed] });
    }
  });

  // { +Say } //

  client.on("messageCreate", async message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix) || message.content.length <= prefix.length) return;

    const args = message.content.slice(prefix.length).trim();
    const command = args.split(/ +/)[0].toLowerCase();

    if (command === 'say') {
      const text = args.slice(command.length).trim();
      message.delete();
      message.channel.send(text);
    }
  });

  // { Transfer Line } //

    client.on('message', message => {
      if (message.content.includes('has transferred')) {

        const TransformEmbed = new MessageEmbed()
          .setImage(line)
          .setColor(color)
        message.channel.send({ embeds: [TransformEmbed] })
      }
    })

    client.on('message', message => {
      if (message.content.includes('قام بتحويل')) {

        const TransformEmbed = new MessageEmbed()
          .setImage(line)
          .setColor(color)
        message.channel.send({ embeds: [TransformEmbed] })
      }
    })

  // { Auto Tax } //

    client.on('message', message => {
      if (message.content.includes('**Your Tax Is**')) {

        const TransformEmbed = new MessageEmbed()
          .setImage(line)
          .setColor(color)
        message.channel.send({ embeds: [TransformEmbed] })
      }
    })
    client.on("messageCreate", async(message) => {
        let args = message.content
          .split(" ")
          .slice(0)
          .join(" "); if (message.author.bot) return;
          if (args.endsWith("m")) args =  args.replace(/m/gi, "") * 1000000;
      else if (args.endsWith("k")) args = args.replace(/k/gi, "") * 1000;
      else if (args.endsWith("M")) args = args.replace(/M/gi, "") * 1000000;
      else if (args.endsWith("K")) args = args.replace(/K/gi, "") * 1000;
      else if (args.endsWith("b")) args = args.replace(/b/gi, "") * 1000000000;
    else if (args.endsWith("B")) args = args.replace(/B/gi, "") * 1000000000;
        if (!message.guild) return; 
  if (message.channel.id != taxchannel) return;  
        let args2 = parseInt(args)
        let tax = Math.floor(args2 * (20) / (19) + (1))
        let tax2 = Math.floor(args2 * (20) / (19) + (1)-(args2))
        let tax3 = Math.floor(tax2 * (20) / (19) + (1))
        let tax4 = Math.floor(tax2 + tax3 + args2)
        if (!args2) return message.reply(`> ❌ **Please specify the number**`);
        if (isNaN(args2)) return message.reply(`> ❌ **Please specify the number**`);
        if (args2 < 1) return message.reply(`> ❌ **Please specify the number**`);

          let m = await message.reply({ content: `
  > ${tax}` });
  })

  // { +Tax } //

    client.on("messageCreate", async message => {
      if (!message.content.startsWith(prefix) || message.author.bot) return;
     const args = message.content.slice(prefix.length).trim().split(/ +/);
     const command = args.shift().toLowerCase();
     if(command === "tax") {
      let args1 = message.content
      .split(" ")
      .slice(1)
      .join(" "); 
    if (message.author.bot) return;
      if (args1.endsWith("m")) args1 =  args1.replace(/m/gi, "") * 1000000;
    else if (args1.endsWith("k")) args1 = args1.replace(/k/gi, "") * 1000;
    else if (args1.endsWith("M")) args1 = args1.replace(/M/gi, "") * 1000000;
    else if (args1.endsWith("K")) args1 = args1.replace(/K/gi, "") * 1000;
    else if (args1.endsWith("b")) args1 = args1.replace(/b/gi, "") * 1000000000;
    else if (args1.endsWith("B")) args1 = args1.replace(/B/gi, "") * 1000000000;
      let args2 = parseInt(args1)
      let tax = Math.floor(args2 * (20) / (19) + (1))
      let tax2 = Math.floor(args2 * (20) / (19) + (1)-(args2))
      let tax3 = Math.floor(tax2 * (20) / (19) + (1))
      let tax4 = Math.floor(tax2 + tax3 + args2)
      if (!args2) return message.reply(`> ❌ **Please specify the number**`);
      if (isNaN(args2)) return message.reply(`> ❌ **Please specify the number**`);
      if (args2 < 1) return message.reply(`> ❌ **Please specify the number**`);
        let row = new MessageActionRow()
      .addComponents(
                new MessageButton()
        .setCustomId(`first_embed`)
        .setLabel("Mediator Tax")
        .setEmoji("<a:zz:1179550774322274344>")
        .setStyle('SUCCESS')
      );
      let row2 = new MessageActionRow()
      .addComponents(
        new MessageButton()
        .setCustomId(`2_embed`)
        .setLabel("Back")
        .setEmoji("↩️")
        .setStyle('DANGER')
    );
        let m = await message.reply({ content: `${tax}` , components: [row]});
        let collector = m.createMessageComponentCollector({ filter: i => i.user.id === message.author.id, time: 3600000 ,max: 2 })
        collector.on('collect', async i => {
          if (i.customId === 'first_embed') {
                  m.edit({ content: `${tax4}`, components: [row2]})
                  row
                  i.deferUpdate()
          }
          if (i.customId === '2_embed') {
          m.edit({ content: `${tax}`, components: [row] })

                  i.deferUpdate()
          } else {
            return;
          }
       });

     }


   // { +Come } //

   if(command === "come") {
        const allowedRoles = ['1327336624815734905']; // Replace with the names of your allowed roles
    
    // Check if the user has one of the allowed roles
    const hasRole = message.member.roles.cache.some(role => allowedRoles.includes(role.name));
    if (!hasRole) {
        return message.reply(``);
    }}
    const user = message.mentions.members.first()
    if (!user) return message.reply(`**❎ | I Can't Find This User!**`)
      if (user.id == message.author.id) return message.reply(`**❎ | You Can't Send To Yourself!**`)
      if (user.user.bot) return message.reply(`**❎ | You Can't Send To Bot!**`)
            let inv = await message.channel.createInvite(message.channel)
      user.send(`
      > **Hey** <@1190147694883254355>

> **You Have Been Requested Here:**
> ${message.channel}

> **Requested By:** ${message.guild.members.cache.get(message.author.id).displayName || message.author.tag}

> **Thank you**`)
   .then(() => {
     message.reply({
      embeds : [
        new MessageEmbed()
        .setDescription(`**<a:loading_gif:1212483472824737822> | Please Wait ....**`)
        .setColor(color)  
      ]
    }).then((t) => {
      setTimeout(() => t.edit({
        embeds : [
          new MessageEmbed()
        .setDescription(`**✅ | Done Send To ${user}**`)
          .setColor(color) 
          ]
      }),1800)
  })   
  }).catch((y) => {
                 message.reply({
      embeds : [
        new MessageEmbed()
        .setDescription(`> ** <a:loading_gif:1212483472824737822> | Please Wait ....**`)
        .setImage(line)
        .setAuthor(message.author.username, message.author.avatarURL()) 
        .setColor(color)
      ]
    }).then((t) => {
      setTimeout(() => t.edit({
        embeds : [
          new MessageEmbed()
        .setDescription(`❎| **Error == __${y.message}__**`)
        .setImage(line)
        .setAuthor(message.author.username, message.author.avatarURL()) 
        .setColor(color)
        ]
      }),1800)
                 })
  })
   
  })

  // { Offers } //

  client.on('messageCreate', async message => {
    if (message.content.startsWith("تشففففففففففير") && !message.author.bot) {
      let args = message.content.split(" ").slice(1).join(" ");
      let content = args.replaceAll("نيترو", "نيتـ رو").replaceAll("فيزا", "فيـ ـزا").replaceAll("كريدت", "كريـ ـدت").replaceAll("كرديت", "كريـ ـدت").replaceAll("كاش", "كـ ـاش").replaceAll("ستيم", "ستـ ـيم").replaceAll("سيرفر", "سيرفـ ـر").replaceAll("ديسكورد", "ديسـ ـكورد").replaceAll("حسابات", "حسابـ ـات").replaceAll("اكونتات", "اكـ ـونتات").replaceAll("بوستات", "بوستـ ـات").replaceAll("تفعيل", "تفـ ـعيل").replaceAll("نيتفليكس", "نيتفلـ ـيكس").replaceAll("سبوتيفاي", "سبوتـ ـيفاي").replaceAll("تيكتوك", "تيكـ ـتوك").replaceAll("فيسبوك", "فيسـ ـبوك").replaceAll("انستا", "انسـ ـتا").replaceAll("توكنات", "توكـ ـنات").replaceAll("فوتات", "فوتـ ـات").replaceAll("بوتات", "بوتـ ـات").replaceAll("كريبتو", "كريبتـ ـو").replaceAll("عملات", "عمـ ـلات").replaceAll("كود", "كـ ـود").replaceAll("بوت", "بـ وت").replaceAll("اكس بوكس", "اكسـ ـبوكس").replaceAll("فيز", "فيـ ـز").replaceAll("موجود", "موجـ ـود").replaceAll("اكونت", "اكـ ونـ ت").replaceAll("متوفر", "مـتـ وفر").replaceAll("سعر", "سـ ـعر").replaceAll("تيكت", "تيـ ـكت").replaceAll("تكت", "تـ كـ ـت").replaceAll("متابع", "مـ ـتـابـع").replaceAll("حساب", "حـ ـسـاب").replaceAll("بيع", "بـ ـيع").replaceAll("اعضاء", "اعـ ـضاء").replaceAll("اوتو", "اوتـ ـو").replaceAll("اوفلاين", "اوفـ ـلاين").replaceAll("اونلاين", "اونـ ـلاين").replaceAll("تيك توك", "تـ ـيك تـ ـوك").replaceAll("وهمي", "وهـ ـمي").replaceAll("استور", "اسـ ـتور").replaceAll("شاهد", "شـ ـاهـ ـد").replaceAll("نوع", "نـ ـوع").replaceAll("شوب", "شـ ـوب").replaceAll("تفاعل", "تفـ ـاعـ ـل").replaceAll("لفل", "لـ ـفـ ـل").replaceAll("ضمان", "ضـ ـمان").replaceAll("محدوده", "محـ ـدوده").replaceAll("فتره", "فـ ـتره").replaceAll("ابدي", "ابـ ـدي").replaceAll("سنه", "سـ ـنه").replaceAll("شهر", "شـ ـهر").replaceAll("شهور", "شـ ـهور").replaceAll("اسبوع", "اسـ ـبوع").replaceAll("انواع", "انـ ـواع").replaceAll("انواع", "انـ ـواع").replaceAll("جميع", "جمـ ـيع").replaceAll("ديس", "ديـ ـس").replaceAll("كوين", "كويـ ـن").replaceAll("والت", "والـ ـت").replaceAll("سويت", "سـ ـويـ ـت").replaceAll("اسعار", "اسعـ ـار").replaceAll("ميمبر", "ميـ ـمبر").replaceAll("ميوزك", "ميـ ـوزك").replaceAll("برودكاست", "برودكـ ـاسـ ـت").replaceAll("سيستم", "سيـ ـستم").replaceAll("ميديا", "ميديـ ـا").replaceAll("خدمات", "خدمـ ـات").replaceAll("سوشيال", "شوشـ ـيال").replaceAll("توكن", "تـ ـوكن").replaceAll("نتفلكس", "نtفلكس");


      message.author.send(content);
      message.reply("**تم ارسال الرساله بي التشفير في الخاص <a:sw1xo:1202745249013702687>**");
    }
  });

  // { Re } //

  client.on("messageCreate", async msg => {
  if(msg.content.toLowerCase() === "re"){
    if(!msg.channel.name.startsWith("ticket-")) return; 
    let user = msg.guild.members.cache.get(msg.author.id).displayName || msg.author.username;
    msg.channel.setName(`by-${user}`)
  }
})
  

  // { +Font } //

   client.on("messageCreate", message => {
    if (message.content.startsWith('!font')) {
      let words = message.content.split(" ").slice(1).join(" ");
      let words2 = words.replaceAll("a", "𝐚").replaceAll("A", "𝐀").replaceAll("b", "𝐛").replaceAll("B", "𝐁").replaceAll('c', "𝐜").replaceAll("C", "𝐂").replaceAll("d", "𝐝").replaceAll("D", "𝐃").replaceAll("e", "𝐞").replaceAll("E", "𝐄").replaceAll("f", "𝐟").replaceAll("F", "𝐅").replaceAll("g", "𝐠").replaceAll("G", "𝐆").replaceAll("h", "𝐡").replaceAll("H", "𝐇").replaceAll("i", "𝐢").replaceAll("I", "𝐈").replaceAll("j", "𝐣").replaceAll("J", "𝐉").replaceAll("k", "𝐤").replaceAll("K", "𝐊").replaceAll("l", "𝐥").replaceAll("L", "𝐋").replaceAll("m", "𝐦").replaceAll("M", "𝐌").replaceAll("n", "𝐧").replaceAll("N", "𝐍").replaceAll("o", "𝐨").replaceAll("O", "𝐎").replaceAll("p", "𝐩").replaceAll("P", "𝐏").replaceAll("q", "𝐪").replaceAll("Q", "𝐐").replaceAll("r", "𝐫").replaceAll("R", "𝐑").replaceAll("s", "𝐬").replaceAll("S", "𝐒").replaceAll("t", "𝐭").replaceAll("T", "𝐓").replaceAll("u", "𝐮").replaceAll("U", "𝐔").replaceAll("v", "𝐯").replaceAll("V", "𝐕").replaceAll("w", "𝐰").replaceAll("W", "𝐖").replaceAll("x", "𝐱").replaceAll("X", "𝐗").replaceAll("y", "𝐲").replaceAll("Y", "𝐘").replaceAll("z", "𝐳").replaceAll("Z", "𝐙").replaceAll("1","𝟏").replaceAll("2","𝟐").replaceAll("3","𝟑").replaceAll("4","𝟒").replaceAll("5","𝟓").replaceAll("6","𝟔").replaceAll("7","𝟕").replaceAll("8","𝟖").replaceAll("9","𝟗").replaceAll("0","𝟎")
      if (!words) return message.channel.send('> ** Please Write a Word :x: !**')
      message.channel.send(`${words2}`)
    }
  });

  // { +Io | خمول } //

  client.on("message", message => {
    if (message.content == ("+ijggjufco") || message.content === "خمول") {

  message.channel.send(`يرجي العلم أنه في حاله الخمول في التذكره لمده عشر دقايق سوف يتم غلق التذكره`)
      message.delete()

    }
  })

  // { +Tag } //

  client.on('message', async message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'tag') {
      let mentionedUser = await message.mentions.members.first();
      let name = args.slice(1).join(' ');

      if (!mentionedUser) {
        return await message.channel.send('**Please mention a user.**');
      }

      if (!message.member.permissions.has("ADMINISTRATOR")) {
        return await message.reply("**You don’t have permission to use this command.**");
      }

      let font = name.replaceAll("a", "𝐚").replaceAll("A", "𝐀").replaceAll("b", "𝐛").replaceAll("B", "𝐁").replaceAll('c', "𝐜").replaceAll("C", "𝐂").replaceAll("d", "𝐝").replaceAll("D", "𝐃").replaceAll("e", "𝐞").replaceAll("E", "𝐄").replaceAll("f", "𝐟").replaceAll("F", "𝐅").replaceAll("g", "𝐠").replaceAll("G", "𝐆").replaceAll("h", "𝐡").replaceAll("H", "𝐇").replaceAll("i", "𝐢").replaceAll("I", "𝐈").replaceAll("j", "𝐣").replaceAll("J", "𝐉").replaceAll("k", "𝐤").replaceAll("K", "𝐊").replaceAll("l", "𝐥").replaceAll("L", "𝐋").replaceAll("m", "𝐦").replaceAll("M", "𝐌").replaceAll("n", "𝐧").replaceAll("N", "𝐍").replaceAll("o", "𝐨").replaceAll("O", "𝐎").replaceAll("p", "𝐩").replaceAll("P", "𝐏").replaceAll("q", "𝐪").replaceAll("Q", "𝐐").replaceAll("r", "𝐫").replaceAll("R", "𝐑").replaceAll("s", "𝐬").replaceAll("S", "𝐒").replaceAll("t", "𝐭").replaceAll("T", "𝐓").replaceAll("u", "𝐮").replaceAll("U", "𝐔").replaceAll("v", "𝐯").replaceAll("V", "𝐕").replaceAll("w", "𝐰").replaceAll("W", "𝐖").replaceAll("x", "𝐱").replaceAll("X", "𝐗").replaceAll("y", "𝐲").replaceAll("Y", "𝐘").replaceAll("z", "𝐳").replaceAll("Z", "𝐙").replaceAll("1","𝟏").replaceAll("2","𝟐").replaceAll("3","𝟑").replaceAll("4","𝟒").replaceAll("5","𝟓").replaceAll("6","𝟔").replaceAll("7","𝟕").replaceAll("8","𝟖").replaceAll("9","𝟗").replaceAll("0","𝟎");

      let newNickname = `𝐑𝐞𝐝𝐒丶${font}`;

      await mentionedUser.setNickname(newNickname).then(async () => {
        await message.channel.send(`> <a:sw1xo:1318554186647998516> **Done Adding Server Tag To ${mentionedUser}**`);
      }).catch(err => message.channel.send(`**I don't have Permission to do that**`));
    }
  });

  // { +Team } //

  const owner = ["1190147694883254355","","",""]
  const wait = require("node:timers/promises").setTimeout;
  client.on('messageCreate', async message => {
    let msg = message, m = message
    if (m.author.bot) return;
    if (message.content !== prefix + "team") return
    if (m.member.permissions.has("ADMINISTRATOR")) {
      if (message.channel.id !== "1327379759503773767") {
        let rep = await message.reply("**استخدم الامر في روم التيم**")
        await wait(2000);
        rep.delete();
        message.delete();
        return;
      }
      const webhook = new WebhookClient({ url: "https://discord.com/api/webhooks/1327380109895667783/E5gHdir0Lr6oeclus3HN1inG9uuCHe3kpW6sWUSUeshnxLzxSkztlp5apOw-fwZ7UWsE" });
      let team = m.guild.roles.cache.get("1327336624815734905")
      let count = 0;
      team.members.forEach((member) => {
        message.channel.sendTyping();
        let mem = m.guild.members.cache.get(member.id);
        webhook.send({
          content: `<@${mem.id}>`,
          username: mem.user.username,
          avatarURL: mem.user.avatarURL(),
        })
        message.channel.send(line)
        count++;
      })
      message.channel.send("**Done , Team count is :** " + count)
    }
  })

  // { +Tbc } //

    client.on('message', async message => {
      if (message.content.startsWith(prefix + 'tbc')) {
        
      if (!owner.includes(message.author.id)) {
          return message.channel.send(`You Don't Have Owner & Ship`);
      }
        const args = message.content
          .split(" ")
          .slice(1)
          .join(" ");
        const role = message.mentions.roles.first();

        if (!role) {
          return message.reply('**Please Mention a Role**');
        }
        if (!args) {
          return message.reply('**Please Enter Your Message**');
        }

        let sentCount = 0;

        let members = message.guild.members.cache.filter(member => !member.user.bot && member.roles.cache.has(role.id));

        members.forEach((member, index) => {
          setTimeout(() => {
            member.send({ content: args })
              .then(() => {
                console.log(`Sent to ${member.user.username}`);
                message.channel.send(`**Sent to <@${member.user.id}> <a:sw1xo:1202745249013702687>**`);
              })
              .catch(err => {
                console.error(`**Couldn't send to ${member.user.tag} ❌**`);
                message.channel.send(`**Couldn't send to <@${member.user.id}> <a:1M_48:1192067924656140340>**`);
              })
              .finally(() => {
                sentCount++;
                if (index === members.size - 1) {
                  // Send a final message after sending to all members
                  message.channel.send(`**Done sending your message to ${sentCount} members**`);
                }
              });
          }, index * 5000); // Send to each member with a delay of 5 seconds
        });
      }
    });


  // { Auto Offers } //

   client.on('messageCreate', message => {
    if (message.author.bot) return;
    if (message.channel.id == "1327380408752406580"){
      const anchannel = client.channels.cache.get("1327268510170353664")
      let args = message.content.split(' ').slice(0).join(' ')

  let test = args.replaceAll("نيترو","نيتـ رو").replaceAll("فيزا","فيـ ـزا").replaceAll("كريدت","كريـ ـدت").replaceAll("كرديت","كريـ ـدت").replaceAll("كاش","كـ ـاش").replaceAll("ستيم","ستـ ـيم").replaceAll("سيرفر","سيرفـ ـر").replaceAll("ديسكورد","ديسـ ـكورد").replaceAll("حسابات","حسابـ ـات").replaceAll("اكونتات","اكـ ـونتات").replaceAll("بوستات","بوستـ ـات").replaceAll("تفعيل","تفـ ـعيل").replaceAll("نيتفليكس","نيتفلـ ـيكس").replaceAll("سبوتيفاي","سبوتـ ـيفاي").replaceAll("تيكتوك","تيكـ ـتوك").replaceAll("فيسبوك","فيسـ ـبوك").replaceAll("انستا","انسـ ـتا").replaceAll("توكنات","توكـ ـنات").replaceAll("فوتات","فوتـ ـات").replaceAll("بوتات","بوتـ ـات").replaceAll("كريبتو","كريبتـ ـو").replaceAll("عملات","عمـ ـلات").replaceAll("كود","كـ ـود").replaceAll("بوت","بـ وت").replaceAll("اكس بوكس","اكسـ ـبوكس").replaceAll("فيز","فيـ ـز").replaceAll("موجود","موجـ ـود").replaceAll("اكونت","اكـ ونـ ت").replaceAll("متوفر","مـتـ وفر").replaceAll("سعر","سـ ـعر").replaceAll("تيكت","تيـ ـكت").replaceAll("تكت","تـ كـ ـت").replaceAll("متابع","مـ ـتـابـع").replaceAll("حساب","حـ ـسـاب").replaceAll("بيع","بـ ـيع").replaceAll("اعضاء","اعـ ـضاء").replaceAll("اوتو","اوتـ ـو").replaceAll("اوفلاين","اوفـ ـلاين").replaceAll("اونلاين","اونـ ـلاين").replaceAll("تيك توك","تـ ـيك تـ ـوك") .replaceAll("وهمي","وهـ ـمي").replaceAll("استور","اسـ ـتور").replaceAll("شاهد","شـ ـاهـ ـد").replaceAll("نوع","نـ ـوع").replaceAll("شوب","شـ ـوب").replaceAll("تفاعل","تفـ ـاعـ ـل").replaceAll("لفل","لـ ـفـ ـل").replaceAll("ضمان","ضـ ـمان").replaceAll("محدوده","محـ ـدوده").replaceAll("فتره","فـ ـتره").replaceAll("ابدي","ابـ ـدي").replaceAll("سنه","سـ ـنه").replaceAll("شهر","شـ ـهر").replaceAll("شهور","شـ ـهور").replaceAll("اسبوع","اسـ ـبوع").replaceAll("انواع","انـ ـواع").replaceAll("انواع","انـ ـواع").replaceAll("جميع","جمـ ـيع").replaceAll("ديس","ديـ ـس").replaceAll("كوين","كويـ ـن").replaceAll("والت","والـ ـت") .replaceAll("سويت","سـ ـويـ ـت").replaceAll("اسعار","اسعـ ـار").replaceAll("ميمبر","ميـ ـمبر").replaceAll("ميوزك","ميـ ـوزك").replaceAll("برودكاست","برودكـ ـاسـ ـت").replaceAll("سيستم","سيـ ـستم").replaceAll("ميديا","ميديـ ـا") .replaceAll("خدمات","خدمـ ـات") .replaceAll("سوشيال","شوشـ ـيال").replaceAll("توكن","تـ ـوكن")

      let embed = new MessageEmbed()
      .setColor(color) 

      let attach = message.attachments.first();

  if (attach) {
     embed.setImage(attach.proxyURL)     
  } 
      anchannel.send(`**
> • <a:right:1327316438536687667>  __${test}__ <a:7071redflames:1327381513863561257>

> • <a:right:1327316438536687667> __𝐎𝐰𝐧𝐞𝐫 𝐎𝐟𝐟𝐞𝐫__ : <@${message.author.id}> <a:7071redflames:1327381513863561257>  

> •  <a:right:1327316438536687667> __𝐎𝐫𝐝𝐞𝐫 𝐓𝐢𝐜𝐤𝐞𝐭__ : <#1324502160087715840>   <a:7071redflames:1327381513863561257>

> • <a:right:1327316438536687667> __𝐎𝐟𝐟𝐞𝐫 𝐌𝐞𝐧𝐭𝐢𝐨𝐧__  : <@&1327269951337271296>   <a:7071redflames:1327381513863561257>**`).then(mes => setTimeout(() => {
          mes.delete()
        }, 43200000))

      message.reply("**<:redbull:1327381837517160530> | 𝐃𝐨𝐧𝐞 𝐒𝐞𝐧𝐝 𝐘𝐨𝐮𝐫 𝐎𝐟𝐟𝐞𝐫 <a:7071redflames:1327381513863561257>**")
       anchannel.send({embeds: [embed]}).then(pho => setTimeout(() => {
          pho.delete()
        }, 43200000))  
      anchannel.send("https://media.discordapp.net/attachments/1327311139796811839/1327311346265489478/Picsart_25-01-09_21-33-19-444.jpg?ex=67829a85&is=67814905&hm=2128b8f876cc2816ea658027fc3472bf53d14799a4e02a3b6e6350dffab5671c&").then(lin => setTimeout(() => {
          lin.delete()
        }, 43200000)) 

    }
  })

  // { +Clear } //

  client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + 'clear')
  ) {
      const args = message.content.split(' ')
      let amount = Number(args[1]) || 100

      const permission = message.member.permissions.has("MANAGE_MESSAGES");
      const me = message.guild.me.permissions.has("MANAGE_MESSAGES");
      if(!permission) return message.reply(":x: **You don't have permission to use this command**")
      if(!me) return message.reply("**:rolling_eyes: - I couldn't clear this channel. Please check my permissions.**")

      args[1] = args[1] ? parseInt(args[1]) : 100;        
      if(isNaN(args[1])) return message.reply({ content: `🙄 **Please provide valid number**` }).catch((err) => {
        console.log(err.message)
      });

      if (amount > 100) return message.reply(":rolling_eyes: **You can't delete more than __100__ messages**`").cache((err) => {
        console.log(err.message)
      });

      if (amount < 1) return message.reply(':rolling_eyes: **You need to delete at least __1__ messages**').catch((err) => {
        console.log(err.message)
      });

      message.delete().catch((err) => {
        console.log(err.message)
      });

      let messages = await message.channel.messages.fetch({ limit: amount  });
      messages = messages.filter(m => Date.now() - (new Date(m.createdTimestamp)).getTime() <= (14 * 24 * 60 * 60000));

      message.channel.bulkDelete(messages).then(() => {
        message.channel.send({content :`\`\`\`js
  ${messages.size} messages have been deleted.\`\`\``}).then((msg) => {
          setTimeout(() => {
            msg.delete().catch((err) => {
              console.log(err.message)
            })
          }, 5000);
        }).catch((err) => {
           console.log(err.message)
           })
              }).catch(err => console.log(err.message));
            } 
          });






  // { +Wf } //

  client.on('message', EgyptTeam => {
    if (EgyptTeam.content === `${prefix}wf`) {
      EgyptTeam.delete()
      EgyptTeam.channel.send(`\`\`\`
  \`Mention : 
  Number : 
  Photo Role : \`
  \`\`\``)
    }
  })

  // { +At } //

  

  // { $close } //

  client.on('message', EgyptTeam => {
    if (EgyptTeam.content === `$close`) {
      
      EgyptTeam.channel.send(`$transcript`)
    }
  })

  // { $close } //

  

  // { $delete } //

  client.on('message', EgyptTeam => {
    if (EgyptTeam.content === `$delete`) {
      
      EgyptTeam.channel.send(`$transcript`)
    }
  })

  // { Are you sure you would like to close this ticket? } //

  client.on('message', EgyptTeam => {
    if (EgyptTeam.content === `Are you sure you would like to close this ticket?`) {
      
      EgyptTeam.channel.send(`$transcript`)
    }
  })

  // { تحويل+ } //


  // { Auto Line } //

  client.on('messageCreate' , async(message) => {
    if(message.author.bot) return;
    let auto = ["1206354188062433310","1206354192730685440","1206354206399668294","1211388992193560587","1206354246304268349","1206354256370864138"]
    if(auto.includes(message.channel.id)) {
      message.channel.send({embeds:[
        new MessageEmbed()
        .setColor(color)
        .setImage(line)
      ]})
    }
  })

client.on('message', message => {
  if (message.author.bot) return;

  if (message.content.toLowerCase() === '!delete-closed') { // يمكنك تغيير الأمر إلى ما تريده
    message.guild.channels.cache.forEach(channel => {
      if (channel.name.toLowerCase().startsWith('closed-')) {
        channel.delete()
          .then(() => {
            console.log(`Deleted channel: ${channel.name}`);
          })
          .catch(error => {
            console.error(`Error deleting channel: ${channel.name}\n${error}`);
          });
      }
    });
    message.reply('**Done Delete All Closed Tickets**');
  }
});

// ⚚・─━━━❲❲ Delete Normal Tickets ❳❳━━━─・⚚ \\

client.on('message', message => {
  if (message.author.bot) return;

  if (message.content.toLowerCase() === '!delete-tickets') { // يمكنك تغيير الأمر إلى ما تريده
    message.guild.channels.cache.forEach(channel => {
      if (channel.name.toLowerCase().startsWith('ticket-')) {
        channel.delete()
          .then(() => {
            console.log(`Deleted channel: ${channel.name}`);
          })
          .catch(error => {
            console.error(`Error deleting channel: ${channel.name}\n${error}`);
          });
      }
    });
    message.reply('**Done Delete All Normal Tickets**');
  }
});

// ⚚・─━━━❲❲ Delete By User Tickets ❳❳━━━─・⚚ \\

client.on('message', message => {
  if (message.author.bot) return;

  if (message.content.toLowerCase() === '!bt') { // يمكنك تغيير الأمر إلى ما تريده
    message.guild.channels.cache.forEach(channel => {
      if (channel.name.toLowerCase().startsWith('by-')) {
        channel.delete()
          .then(() => {
            console.log(`Deleted channel: ${channel.name}`);
          })
          .catch(error => {
            console.error(`Error deleting channel: ${channel.name}\n${error}`);
          });
      }
    });
    message.reply('**Done Delete All By User Tickets**');
  }
});
// ⚚・─━━━❲❲ Delete Need Tickets ❳❳━━━─・⚚ \\

client.on('message', message => {
  if (message.author.bot) return;

  if (message.content.toLowerCase() === '!nt') { // يمكنك تغيير الأمر إلى ما تريده
    message.guild.channels.cache.forEach(channel => {
      if (channel.name.toLowerCase().startsWith('need-')) {
        channel.delete()
          .then(() => {
            console.log(`Deleted channel: ${channel.name}`);
          })
          .catch(error => {
            console.error(`Error deleting channel: ${channel.name}\n${error}`);
          });
      }
    });
    message.reply('**Done Delete All Need Tickets**');
  }
});

// ⚚・─━━━❲❲ Delete Sell Tickets ❳❳━━━─・⚚ \\

client.on('message', message => {
  if (message.author.bot) return;

  if (message.content.toLowerCase() === '!st') { // يمكنك تغيير الأمر إلى ما تريده
    message.guild.channels.cache.forEach(channel => {
      if (channel.name.toLowerCase().startsWith('sell-')) {
        channel.delete()
          .then(() => {
            console.log(`Deleted channel: ${channel.name}`);
          })
          .catch(error => {
            console.error(`Error deleting channel: ${channel.name}\n${error}`);
          });
      }
    });
    message.reply('**Done Delete All Sell Tickets**');
  }
});


client.login(process.env.token)