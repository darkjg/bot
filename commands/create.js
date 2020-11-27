module.exports = {
name: 'create',
description: 'Creacion de comandos',
execute(message,args,client,Discord) {
		var fs = require('fs');
		let rol = message.guild.roles.cache.find(r => r.name === "Royal Chichen");
		let admin =message.member.roles.cache.has(rol.id);
		console.log(args.length)
		if(admin){
			// writeFile function with filename, content and callback function
			const name = args[0].toLowerCase();
			const descripcion = args[1].toLowerCase();
			var mensaje = "";
			for (let i = 2; i < args.length; i++) {
				mensaje=mensaje+" "+args[i];
			}			
			fs.writeFile('./commands/'+name+".js", 'module.exports = { \n name: '+"'"+name+"'"+',\n description: '+"'"+descripcion+"'"+',\n execute(message,args,client,Discord) { \n message.channel.send('+"'"+mensaje+"'"+'); \n }, \n};', function (err) {
			  if (err) throw err;
			  console.log(err);
			  message.channel.send("Ahora se hacer la cosa "+name+' Guau');
			});  
		}else{
			  message.channel.send('No, tu no puedes');
		}
	
	},
};