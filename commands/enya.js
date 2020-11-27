   module.exports = {
	name: 'enya',
	description: 'Invocas a dos soldados de enya',
	execute(message,args,client,Discord) {		
		const focacry = client.emojis.cache.get("562432642499346451"); 
		const focashy = client.emojis.cache.get("572140143620653087"); 
		message.channel.send(`${focacry} ${focashy}`);
	},
};
