const { MessageButton, MessageActionRow } = require('discord.js');

function main(client, message, args) {
    let user = message.author;
    console.log(`${user.username} typed the 'test' command.`);
    
    message.delete();
    const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomID('ACCEPT_RULES')
                .setLabel('Accept Rules')
                .setStyle('DANGER')
                .setEmoji("<:WW:797586427595849769>")
        ),
        rules = `­
**Basic Rules**

> No harassment of other players. This includes: racism, sexism, xenophobia, transphobia, homophobia misogyny, etc.

> Sexual harassment of any kind will not be tolerated.

> Keep all discussion civil and contained within the relevant channels. We may delete your conversation!

> No inappropriate language.

> No spamming or flooding the chat rooms.

> No pinging unless wanted. Pinging without a reason will have consequences.

> No NSFW content or conversations around illegal activities.

> No inappropriate or offensive usernames, status's or profile pictures. We may ask you to change it.
­
`;

    message.channel.send({ content: rules, components: [row] })
    message.channel.send({ content: "­\nOur invite link: https://discord.gg/WE5bJgD" })
}

module.exports = {
	name: '.rules',
	description: 'Print rules (only the bot owner can use this command)',
	execute: main
};