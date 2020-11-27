   module.exports = {
	name: 'vasku',
	description: 'bloodtrail',
	execute(message,args,client,Discord) {	
	const bloodtrail = client.emojis.cache.get("675795814563446795");
    message.channel.send('Vasku deja los chistes malos fenómeno' + `${bloodtrail}`);
	},
};