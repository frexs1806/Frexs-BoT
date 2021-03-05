const discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    message.delete()

    const suggembed = new discord.MessageEmbed()
    .setAuthor('Invite FrexsBoT')
    .setURL("https://discord.com/api/oauth2/authorize?client_id=808755464501985301&permissions=8&scope=bot")
    .setThumbnail(`${message.author.displayAvatarURL({ dynamic : true })}`)
    .setDescription(`My invite url: https://discord.com/api/oauth2/authorize?client_id=808755464501985301&permissions=8&scope=bot`)
    .setFooter('SécuBot')
    .setTimestamp()

    if (message.content === `${suggembed}`) return guild.channel.react('👍')

    message.channel.send(suggembed)
};

module.exports.help = {
    name: 'invite'
};