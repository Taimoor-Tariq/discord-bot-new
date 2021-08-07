async function main(interaction, client) {
    if (interaction.isCommand()) {
        if (!client.slashCommands.has(interaction.commandName)) return;
        client.slashCommands.get(interaction.commandName).execute(interaction, client);
    }

    else if (interaction.isButton()) {
        switch (interaction.customID) {
            case "ACCEPT_RULES":
                var role = await interaction.guild.roles.fetch('649147478121381903');
                await interaction.member.roles.add(role);
                interaction.deferUpdate();
                break;

            case "KANSAN_ADD":
                var role = await interaction.guild.roles.fetch('865715220386807838');
                await interaction.member.roles.add(role);
                interaction.deferUpdate();
                break;

            case "KANSAN_REMOVE":
                var role = await interaction.guild.roles.fetch('865715220386807838');
                await interaction.member.roles.remove(role);
                interaction.deferUpdate();
                break;
        }
    }

    else if (interaction.isSelectMenu()) {
        switch (interaction.customID) {
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

                interaction.deferUpdate();
                break;
        }
    }

    else interaction.deferUpdate();
}

module.exports = {
    name: 'interactionCreate',
    execute: main
};