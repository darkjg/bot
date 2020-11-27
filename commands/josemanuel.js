   module.exports = {
	name: 'josemanuel',
	description: 'El fenomenal',
	execute(message,args,client,Discord) {		
		const bloodtrail = client.emojis.cache.get("675795814563446795"); 
		message.channel.send(`Fenómenx ${bloodtrail}`);
	},
};
