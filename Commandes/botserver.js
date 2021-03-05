const discord = require('discord.js');
require('dotenv');
module.exports.run = async(bot, message, args, db) =>{
    const authorid = [
        "742775039866437714", 
        "813518925366165514",
        "811275479700865026"
    ]
    if(message.authorid= "742775039866437714", "813518925366165514", "811275479700865026") return message.channel.send(`:no_entry: Developpeur seulement.`);
    let data = [];
    bot.guilds.forEach(x => {
        data.push(`**${x.name}** | \`${x.memberCount}\` members (ID: ${x.id})`);
    });
    if(data.length > 0){
        data.sort();
        data = `🔹 `+data.join('\n🔹 ');
    }
    else{
        data = "[No server found]";
    }
    let embed = new discord.MessageEmbed()
    .setAuthor(`Server data`, bot.user.avatarURL)
    .setColor(color.set('blue'))
    .setDescription(data);

    message.channel.send(embed);
}
module.exports.help = {
	name:"botserver"
}