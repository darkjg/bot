
const embeds = [];
 
module.exports = {
	name: 'ayuda',
	description: 'Lista de todos mis comandos y explicacion de estes .',
	aliases: ['commands'],
	usage: '[command name]',
	cooldown: 5,
	execute(message,args,client,Discord) {	
		const data = [];
		const datamostrar = [];
		const { commands } = message.client;
		if (!args.length) {
			message.channel.send('si necesitas ayuda con alguno pon !ayuda [Nombre Comando]. Ej.: !ayuda awa');
			commands.map(command => command.name).join('\n');
			
			let rol = message.guild.roles.cache.find(r => r.name === "Royal Chichen");

			let admin =message.member.roles.cache.has(rol.id);
			commands.forEach((values,keys)=>{ 
			if(admin){
				data.push(values.name);
			}else{
				if(values.name=="jefejoin" || values.name=="jefeleft"){
					
				}else{
					data.push(values.name);
				}
			}
				
			})
		//	console.log(message.author);
			let start=0;
			const guilds =data; 
			/**
			 * Creates an embed with guilds starting from an index.
			 * @param {number} start The index to start from.
			 */
			const myImage = message.author.displayAvatarURL();
			const generateEmbed = start => {
			  const current = guilds.slice(start, start + 10)

			  // you can of course customise this embed however you want
			  const embed = new Discord.MessageEmbed()
				//.setTitle(`Showing guilds ${start + 1}-${start + current.length} out of ${guilds.length}`)		  current.forEach(g => embed.addField(g.name, `**ID:** ${g.id}		**Owner:** ${g.owner.user.tag}`))
				  current.forEach(g => embed.addField("--------------",g))
				  embed.setThumbnail(myImage);
			  return embed
			}

			// edit: you can store the message author like this:
			const author = message.author

			// send the embed with the first 10 guilds
			message.channel.send(generateEmbed(0)).then(message => {
			  // exit if there is only one page of guilds (no need for all of this)
			  if (guilds.length <= 10) return
			  // react with the right arrow (so that the user can click it) (left arrow isn't needed because it is the start)
			  message.react('➡️')
			  const collector = message.createReactionCollector(
				// only collect left and right arrow reactions from the message author
				(reaction, user) => ['⬅️', '➡️'].includes(reaction.emoji.name) && user.id === author.id,
				// time out after a minute
				{time: 60000}
			  )

			  let currentIndex = 0
			  collector.on('collect', reaction => {
				// remove the existing reactions
				message.reactions.removeAll().then(async () => {
				  // increase/decrease index
				  reaction.emoji.name === '⬅️' ? currentIndex -= 10 : currentIndex += 10
				  // edit message with new embed
				  message.edit(generateEmbed(currentIndex))
				  // react with left arrow if it isn't the start (await is used so that the right arrow always goes after the left)
				  if (currentIndex !== 0) await message.react('⬅️')
				  // react with right arrow if it isn't the end
				  if (currentIndex + 10 < guilds.length) message.react('➡️')
				})
			  })
			})
		
		}else{
			const name = args[0].toLowerCase();
			const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

			if (!command) {
				return  message.channel.send('Ese no es un comando valido');
			}

			 message.channel.send(`**Nombre:** ${command.name}`);

			//	if (command.aliases)  message.channel.send(`**Aliases:** ${command.aliases.join(', ')}`);
			if (command.description)  message.channel.send(`**Descripcion:** ${command.description}`);
			//if (command.usage)  message.channel.send(`**Como usarlo:** ${prefix}${command.name} ${command.usage}`);
			// message.channel.send(`**Cooldown:** ${command.cooldown || 3} second(s)`);
			//	message.channel.send(data, { split: true });
		}
	},
};