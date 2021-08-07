async function main(client) {
    await require('../modules/slash-loader')(client);
    console.log(`\nLogged in as ${client.user.tag}`);
}

module.exports = {
    name: 'ready',
    once: true,
    execute: main
};