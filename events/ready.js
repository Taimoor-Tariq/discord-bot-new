async function main(client) {
	let LAUNCH_TIME = new Intl.DateTimeFormat('en', {
		timeZone: 'America/Toronto',
		year: 'numeric',
		month: 'short',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
	}).format(new Date());
	
	console.log(` \nLogged in as ${client.user.tag} on ${LAUNCH_TIME}`);
}

module.exports = {
	name: 'ready',
	once: true,
	execute: main
}