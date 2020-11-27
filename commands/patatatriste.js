    module.exports = {
	name: 'patatatriste',
	description: 'Patata esta sad porque no es unas pringles',
	execute(message,args,client,Discord) {	
	const biblethump = client.emojis.cache.get("708427339658428436"); 
	const focacry = client.emojis.cache.get("562432642499346451"); 
		message.channel.send(`${focacry} ${biblethump} ${focacry} ${biblethump} ${focacry}`);
		message.channel.send(`${focacry} ${biblethump} ${focacry} ${biblethump} ${focacry}`);
		message.channel.send(`${focacry} ${biblethump} ${focacry} ${biblethump} ${focacry}`);
	},
};
