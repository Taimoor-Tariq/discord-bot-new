const fs = require('fs');

module.exports = (client) => {
    return new Promise(async (resolve) => {

        if (!client.application?.owner) await client.application?.fetch();

        let data = [];

        fs.readdirSync('./slash-commands/').filter(file => file.endsWith('.js')).forEach(file => {
            const command = require(`../slash-commands/${file}`);
            client.slashCommands.set(command.name, command);
            data.push(command);
        });

        const commands = await client.application?.commands.set(data);
        
        let arr = commands.map(c => { return c.name; }),
            msg = `• Slash Commands:`;

        if (arr.length == 0) msg += "\n  - None";
        else arr.forEach(c => { msg += `\n  - Loaded → /${c}` });

        console.log(msg);
        resolve();
    });
};