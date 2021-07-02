async function main(interaction, client) {
    if (interaction.isButton()) {
        switch (interaction.customID) {
            case "ACCEPT_RULES":
                const role = await interaction.guild.roles.cache.find(role => role.id === '860369780749893692');
                await interaction.member.roles.add(role);
                interaction.deferUpdate();
                break;
        
            default:
                interaction.deferUpdate();
                break;
        }
    }

    else if (interaction.isSelectMenu()) {
        switch (interaction.customID) {
            case "select":
                console.log(interaction.values)
                interaction.deferUpdate();
                break;
        
            default:
                interaction.deferUpdate();
                break;
        }
    }

    else interaction.deferUpdate();
}

module.exports = {
	name: 'interaction',
	execute: main
}