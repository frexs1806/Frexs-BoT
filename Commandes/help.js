const pagination = require('discord.js-pagination');
const prefix = "$"
const discord = require('discord.js');

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    async run (client, message, args){
 
        //Sort your commands into categories, and make seperate embeds for each category

        const moderation = new discord.MessageEmbed()
        .setTitle('Moderation')
        .addField(`${prefix}kick`, 'éjecter un membre du serveur')
        .addField(`${prefix}ban`, 'Bannir un membre du serveur ')
        .addField(`${prefix}clear`, 'Effacer un nombre de message (max: 100) ')
        .addField(`${prefix}giveaway`, 'Crée un concours')
        .addField(`${prefix}addrole`, 'Ajoutez un role a la personne mentionnez')
        .addField(`${prefix}createrole`, 'Crée un role')
        .addField(`${prefix}lock`, 'Verrouillez un channel')
        .setTimestamp()

        const fun = new discord.MessageEmbed()
        .setTitle('Fun')
        .addField(`${prefix}cat`, 'Generez une image de chats ')
        .addField(`${prefix}dog`, 'Generez une image de chiens')
        .addField(`${prefix}say`, 'Faire dire ce que vous voulez au bot ')
        .addField(`${prefix}botserver`, 'Crée un concours')
        .setTimestamp()

        const utility = new discord.MessageEmbed()
        .setTitle('Utlity')
        .addField(`${prefix}emojis`, "Voir combien d'émojis a votre serveur ")
        .addField(`${prefix}invite`, 'Invitez le bot sur votre serveur ')
        .addField(`${prefix}ping`, 'Voir le ping du bot ')
        .addField(`${prefix}sondage`, 'Crée un sondage ')
        .addField(`${prefix}avatar`, "Afficher la photo de profil d'une personne")
        .addField(`${prefix}afk`, 'révenir que vous etes inactif')
        .addField(`${prefix}serveurinfo`, 'Avoir des information sur le serveur')
        .addField(`${prefix}userinfo`, "Avoir des information sur l'utilisateur mentionnez")
        .setTimestamp()

        const pages = [
                moderation,
                fun,
                utility
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}

module.exports.help = {
    name: 'help'
};
