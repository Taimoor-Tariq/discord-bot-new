async function main(interaction, client) {
    switch (interaction.type) {
        case "APPLICATION_COMMAND":
            if (!client.appCommands.has(interaction.commandName)) return;
            client.appCommands.get(interaction.commandName).execute(interaction, client);
            break;

        case "MESSAGE_COMPONENT":
            switch (interaction.customId) {
                case "ACCEPT_RULES":
                    var role = await interaction.guild.roles.fetch('649147478121381903');
                    await interaction.member.roles.add(role);
                    break;
    
                case "KANSAN_ADD":
                    var role = await interaction.guild.roles.fetch('865715220386807838');
                    await interaction.member.roles.add(role);
                    break;
    
                case "KANSAN_REMOVE":
                    var role = await interaction.guild.roles.fetch('865715220386807838');
                    await interaction.member.roles.remove(role);
                    break;

                    case "PING_SELECT":
                        const
                            ANNOUNCEMENT_ROLES = {
                                "860580566654124052": await interaction.guild.roles.fetch('860580566654124052'), // COMMUNITY_NIGHTS
                                "860580771152134185": await interaction.guild.roles.fetch('860580771152134185'), // NEWS
                                "860580627132841984": await interaction.guild.roles.fetch('860580627132841984')  // WATCH_PARTIES
                            },
                            REQUIRED_ROLES = interaction.values || [];
        
                        for (var i in ANNOUNCEMENT_ROLES) await interaction.member.roles.remove(ANNOUNCEMENT_ROLES[i]);
                        for (var i in REQUIRED_ROLES) await interaction.member.roles.add(ANNOUNCEMENT_ROLES[REQUIRED_ROLES[i]]);
        
                        break;
            }
            break;
    }
}

module.exports = {
    name: 'interactionCreate',
    execute: main
};