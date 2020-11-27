   module.exports = {
	name: 'bonk',
	description: 'Bonkear es la mejor solucion contra la depresion Arnanu nos lo enseño con sus cocotasos.',
	execute(message) {

	// checking if user inluded correct medal name in message.	
	let mention = message.mentions.users.first();
    // checking if message don't have a user mention
		if (!mention) {
			return     message.channel.send("*AntiDepressive Bonk* BOP " + "<@" + message.author.id + ">" + " BOP DEJA DE SENTIRTE MAL, ERES UNA PERSONA GENIAL Y PRECIOSA");
                       message.channel.send('https://tenor.com/view/despicable-me-minions-bonk-hitting-cute-gif-17663380');
                       message.channel.send('te has bonkeado :(');
		}

		
    message.channel.send(`*AntiDepressive Bonk* BOP ${mention} BOP DEJA DE SENTIRTE MAL, ERES UNA PERSONA GENIAL Y PRECIOSA`);
    message.channel.send('https://tenor.com/view/despicable-me-minions-bonk-hitting-cute-gif-17663380');    
	},
};