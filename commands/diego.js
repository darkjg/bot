

   module.exports = {
	name: 'diego',
	description: 'Este comando devuelve tres lineas de :mikuchillo:',
	execute(message,args,client,Discord) {		
		const mikuchillo = client.emojis.cache.get("776430405078745090"); 

		message.channel.send(`${mikuchillo} ${mikuchillo} ${mikuchillo} ${mikuchillo} ${mikuchillo}`);
		message.channel.send(`${mikuchillo} ${mikuchillo} ${mikuchillo} ${mikuchillo} ${mikuchillo}`);
		message.channel.send(`${mikuchillo} ${mikuchillo} ${mikuchillo} ${mikuchillo} ${mikuchillo}`);
	},
};
