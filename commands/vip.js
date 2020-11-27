    module.exports = {
	name: 'vip',
	description: 'Este comando devuelve una explicanción de cómo conseguir el vip.',
execute(message,args,client,Discord) {
	  const mikucha = client.emojis.cache.get("776413363588431892");
		message.channel.send(`${mikucha} ~ Ser 💎VIP💎 tiene sus ventajas: Rol especial en Discord - Sin cooldown al hablar - Participación extra en sorteos - Cofre extra mensual | Para serlo debes ser un viewer activo en la comunidad y donar 50 suscripciones(aunque puede haber negocios si hablas con <@671771464306786324>) ~ ${mikucha}`);
	},
};
