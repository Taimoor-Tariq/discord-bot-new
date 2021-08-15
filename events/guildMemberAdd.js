const
    { MessageAttachment } = require('discord.js'),
    opentype = require('opentype.js'),
    Canvas = require('canvas'),
    drawText = require('node-canvas-text').default;

async function main(member, client) {
    const
        canvas = Canvas.createCanvas(1100, 500),
        ctx = canvas.getContext('2d'),
        background = await Canvas.loadImage('./modules/Discord-Join.png');
        

    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    drawText(ctx, member.user.tag, opentype.loadSync('./modules/font.ttf'), {
        x: 500,
        y: 388,
        width: 500,
        height: 75
    }, {
        hAlign: 'center',
        vAlign: 'center',
        textFillStyle: '#FFF'
    })


    ctx.beginPath();
    ctx.arc(750, 200, 150, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
    ctx.drawImage(avatar, 600, 50, 300, 300);

    const attachment = new MessageAttachment(canvas.toBuffer(), 'join-image.png');

    client.guilds.cache.get('617434888555200576').channels.cache.get('708033893143674881').send({ files: [attachment] });
}

module.exports = {
    name: 'guildMemberAdd',
    execute: main
};