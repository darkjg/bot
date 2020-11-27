   module.exports = {
	name: 'flopper',
	description: 'Siempre pasa lo mismo',
	execute(message, args) {
		message.channel.send('*<mensaje eliminado por un moderador>*');
	},
};
