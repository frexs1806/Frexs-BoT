const Discord = require('discord.js');
const prefix = "="

module.exports = async(client, message) => {

    if (message.author.bot) return;
    if (message.channel.type === "dm") return console.log(`Message provenant des mp: '${message}' qui provient de '${message.author.username}'`);

    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const commande = args.shift();

    const cmd = client.commands.get(commande);

    if (!cmd) return;

    cmd.run(client, message, args)}; 