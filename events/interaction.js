async function main(interaction, client) {
    if (interaction.isButton()) {
        switch (interaction.customID) {
            case "ACCEPT_RULES":
                var role = await interaction.guild.roles.cache.find(r => r.id === '860369780749893692');
                await interaction.member.roles.add(role);
                break;

            case "KANSAN_ADD":
                var role = await interaction.guild.roles.cache.find(r => r.id === '865715220386807838');
                await interaction.member.roles.add(role);
                break;

            case "KANSAN_REMOVE":
                var role = await interaction.guild.roles.cache.find(r => r.id === '865715220386807838');
                await interaction.member.roles.remove(role);
                break;
        }
    }

    else if (interaction.isSelectMenu()) {
        switch (interaction.customID) {
            case "PING_SELECT":
                const
                    ANNOUNCEMENT_ROLES = {
                        "860580566654124052": await interaction.guild.roles.cache.find(r => r.id === '860580566654124052'), // COMMUNITY_NIGHTS
                        "860580771152134185": await interaction.guild.roles.cache.find(r => r.id === '860580771152134185'), // NEWS
                        "860580627132841984": await interaction.guild.roles.cache.find(r => r.id === '860580627132841984') // WATCH_PARTIES
                    },
                    REQUIRED_ROLES = interaction.values || [];

                for (var i in ANNOUNCEMENT_ROLES) await interaction.member.roles.remove(ANNOUNCEMENT_ROLES[i]);
                for (var i in REQUIRED_ROLES) await interaction.member.roles.add(ANNOUNCEMENT_ROLES[REQUIRED_ROLES[i]]);
                break;
        }
    }
}

module.exports = {
	name: 'interaction',
	execute: main
}