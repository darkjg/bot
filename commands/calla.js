    module.exports = {
	name: 'calla',
	description: 'Este comando devuelve un mensaje de texto.',
	execute(message,args,client,Discord) {	
	const mikuchillo = client.emojis.cache.get("776430405078745090"); 
		message.channel.send('Calla' + '<@344914038477553666>' + `${mikuchillo}`);
	},
};
