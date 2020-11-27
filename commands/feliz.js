   module.exports = {
	name: 'feliz',
	description: 'A ver cuan feliz estas',
	execute(message, args) {
		message.channel.send("<@" + message.author.id + ">" + ' está feliz y no puede parar de sonreír.');
	},
};
