   module.exports = {
	name: 'hate',
	description: 'A ver cuanto nos odiamos',
	execute(message,args,client,Discord) {	
	const mikuchillo = client.emojis.cache.get("776430405078745090"); 
	const kappa = client.emojis.cache.get("755397830847234098"); 
	var x=Math.floor(Math.random() * 100)+1;  
	// checking if user inluded correct medal name in message.	
    let mention = message.mentions.users.first();
    // checking if message don't have a user mention
    if (!mention) return message.channel.send(`Necesito un @ so cerdo. ${mikuchillo}`);

    message.channel.send('Se siente un hate en el aire del ' + x + '% entre ' + "<@" + message.author.id + ">" + ` y ${mention} ${kappa} ${mikuchillo}`);
	},
}; 