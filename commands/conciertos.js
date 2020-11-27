   module.exports = {
	name: 'conciertos',
	description: 'Cuando Miku la estrella del Katalan Pop nos deleita con una actuacion',
	execute(message,args,client,Discord) {		
		//console.log(client)
		const biblethump = client.emojis.cache.get("708427339658428436"); 
		message.channel.send('Por ahora no me han confirmado en ningun evento, pero si queréis que vaya a alguno, recordad comentarselo a los del evento. ' + `${biblethump}`);
	},
};