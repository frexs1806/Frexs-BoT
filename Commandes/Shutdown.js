const discord = require('discord.js');
const configbot = require("../config.json")

module.exports.run = async(bot, message, args) =>{

    if(message.author.id!= "742775039866437714","813518925366165514","811275479700865026") return message.channel.send("Vous n'avez pas la permission.")

    try {
        await message.channel.send("Le bot s'éteind..")
        process.exit()
    } catch(e) {
        message.channel.send(`ERREUR: ${e.message}`)
    }
    


















}

module.exports.help = {
	name:"shutdown"
}