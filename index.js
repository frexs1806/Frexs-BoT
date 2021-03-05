const bot = require("./config.json")
const Discord = require('discord.js');
const client = new Discord.Client();

client.login(TOKEN)

const fs = require('fs');

client.commands = new Discord.Collection();

fs.readdir("./Commandes/", (error, f) => {
    if(error) console.log(error);

    let commandes = f.filter(f => f.split(".").pop() === "js");
    if(commandes.length <= 0) return console.log("Aucune commande trouvée !");

    commandes.forEach((f) => {

        let commande = require(`./Commandes/${f}`);
        console.log(`${f} commande chargée !`);

        client.commands.set(commande.help.name, commande);
  });
    });

fs.readdir("./Commandes/ticket", (error, f) => {
    if(error) console.log(error);

    let ticket = f.filter(f => f.split(".").pop() === "js");
    if(ticket.length <= 0) return console.log("Aucune commande TICKET trouvée !");

    ticket.forEach((f) => {

        let ticket = require(`./Commandes/Ticket/${f}`);
        console.log(`${f} commandes chargées !`);

        client.commands.set(ticket.help.name, ticket);
    });
});


fs.readdir("./Events/", (error, f) => {
    if(error) console.log(error);
    console.log(`${f.length} events en chargement`)

    f.forEach((f) => {
        const events = require(`./Events/${f}`);
        const event = f.split(".")[0];

        client.on(event, events.bind(null, client));
    });
});

client.on("ready", () =>{
    console.log(`Bot ${client.user.tag} désormais en ligne !`);
}) 



client.on('guildCreate', guild => {
    var serverIcon = guild.iconURL();
    let embed = new Discord.MessageEmbed()
    .setTitle(guild.name)
    .setThumbnail(guild.iconURL())
    .setColor("#25c059")
    .addField(`Maintennant sur ${client.guilds.cache.size} serveurs !`)
    .setDescription(`Bonne Nouvelle ! ${guild.name} vient d'ajouté Frexs Bot dans son serveur 🙂`)
    .setThumbnail(serverIcon)
    .setTimestamp()
    const channel = client.channels.cache.find(channel => channel.id === "808781213489692713")
    channel.send(embed)
    return console.log(`Frexs'sBot a été ajoutez sur le serveur ${guild.name} `)
})
client.on('guildDelete', guild => {
    var serverIcon = guild.iconURL();
    let embed = new Discord.MessageEmbed()
    .setTitle(guild.name)
    .setColor("#ff0000")
    .addField(`Maintennant sur: ${client.guilds.cache.size} serveurs !`)
    .setDescription(`Mauvaise Nouvelle, ${guild.name} vient de supprimé Frexs Bot de son serveur 🙁`)
    .setThumbnail(serverIcon)
    .setTimestamp()
    const channel = client.channels.cache.find(channel => channel.id === "808781213489692713")
    channel.send(embed)
    return console.log(`Frexs'sBot a été retiré du serveur ${guild.name} `)
}) 


client.on('guildMemberAdd', member => {
    let GuEmbed = new Discord.MessageEmbed()
    .setFooter(`Nous sommes désormais ${member.guild.memberCount} membres 😄`)
    .setAuthor(`${member.user.username} \n Merci a toi d'avoir rejoind le serveur discord`, member.user.displayAvatarURL())
    .setDescription("Si tu rencontre un soucis n'hésite pas crée un ticket dans le channel <#808760142714765352>")
    .setColor("#35f092")
    .setImage("https://th.bing.com/th/id/OIP.HwLKNN_vysn5WyqEC_i_zQHaCk?w=350&h=121&c=7&o=5&pid=1.7")

    member.guild.channels.cache.get("809127005156671508").send(GuEmbed)
    member.roles.add("808763523022454875")
});
