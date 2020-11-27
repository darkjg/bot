    module.exports = {
	name: 'adrian',
	description: 'Muestra unos emotes',
	execute(message,args,client,Discord) {
		const adrian = client.emojis.cache.get('776413540771954718');
		message.channel.send(`${adrian} ${adrian} ${adrian} ${adrian}`);
	},
};