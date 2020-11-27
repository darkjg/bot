    module.exports = {
	name: 'bendicion',
	description: 'Este comando promociona un sorteo temporal.',
	execute(message,args,client,Discord) {
		const mikucha = client.emojis.cache.get("776413363588431892");
		message.channel.send(`${mikucha} Sorteo de una bendición lunar ${mikucha} Aquí tenéis toda la información. Que los gachas os acompañen: https://twitter.com/MikuChinatsu/status/1326537251770101762?s=20`);
	},
};
