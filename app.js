require('dotenv-flow').config();
const
    fs = require('fs'),
    Discord = require('discord.js'),
    { BOT_PREFIX, BOT_TOKEN } = require('./config.js'),
    client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] });


client.commands = new Discord.Collection();
console.log(` \nLoading Commands and events:\n `);

console.log('• Commands:');
fs.readdirSync('./commands/').filter(file => file.endsWith('.js')).forEach(file => {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
    console.log(` - Loaded → ${BOT_PREFIX}${command.name}`);
});
console.log(' ');

console.log('• Events:');
fs.readdirSync('./events/').filter(file => file.endsWith('.js')).forEach(file => {
    const event = require(`./events/${file}`);
    if (event.once) client.once(event.name, (...args) => event.execute(...args, client));
    else client.on(event.name, (...args) => event.execute(...args, client));
    console.log(` - Loaded → ${event.name}`);
});
console.log(' ');


client.login(BOT_TOKEN);