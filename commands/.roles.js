const { MessageSelectMenu, MessageButton, MessageActionRow } = require('discord.js');

function main(client, message, args) {
    let user = message.author;
    console.log(`${user.username} typed the 'selectRoles' command.`);
    
    message.delete();
    
    if (user.id != "220161488516546561") return;
    
    const pingSelect = new MessageActionRow()
        .addComponents(
            new MessageSelectMenu()
                .setCustomID('PING_SELECT')
                .setPlaceholder('None')
                .setMinValues(0)
                .setMaxValues(3)
                .addOptions([
                    {
                        "label": "Community Nights",
                        "value": "860580566654124052",
                        "description": "Get notified about game and movie nights.",
                        "emoji": {
                            "name": "boardgames",
                            "id": "860584277724495942"
                        }
                    },
                    {
                        "label": "News",
                        "value": "860580771152134185",
                        "description": "Get notified about what is happening in the org.",
                        "emoji": {
                            "name": "newspaper",
                            "id": "860585958235963402"
                        }
                    },
                    {
                        "label": "Watch Parties",
                        "value": "860580627132841984",
                        "description": "Get notified when we watch our rosters play.",
                        "emoji": {
                            "name": "clapperboard",
                            "id": "860586345058926592"
                        }
                    }
                ])
        ),
    kansanSelect = new MessageActionRow()
        .addComponents([
            new MessageButton()
                .setCustomID('KANSAN_ADD')
                .setLabel('Get Role')
                .setStyle('SUCCESS'),
            new MessageButton()
                .setCustomID('KANSAN_REMOVE')
                .setLabel('Remove Role')
                .setStyle('DANGER')
        ]);

    message.channel.send({
        content: `­
We do not ping ${message.guild.roles.everyone.toString()} in our announcements unless it is really important. You can select what type of announcements you would like to be pinged in.
­`,
        allowedMentions: { users: [], roles: [] },
        components: [pingSelect]
    }).then(() => {
        message.channel.send({
            content: `­
If you are a **Kansan** or would like to get the <@&865715220386807838> role, press the button below.
­`,
            allowedMentions: { users: [], roles: [] },
            components: [kansanSelect]
        })
    });
}

module.exports = {
	name: '.roles',
	description: 'Print roles selection (only the bot owner can use this command)',
	execute: main
};