   module.exports = {
	name: 'espana',
	description: 'A ver si es verdad que eres ESPAÑOL',
	execute(message, args) {
		var x=Math.floor(Math.random() * 100)+1;  
		message.channel.send("<@" + message.author.id + ">" + " es " + x + "% ESPAÑOL/A :flag_es: :flag_es: :flag_es: ");
	},
};
