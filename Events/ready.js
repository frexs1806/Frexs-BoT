const prefix = "="

module.exports = async(client) => {

    client.user.setActivity(`${prefix}help | ${client.guilds.cache.size}Serveurs `,{ type: 'WATCHING' });

};