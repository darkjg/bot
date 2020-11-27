module.exports = {
name: 'delete',
description: 'Borrar comandos',
execute(message,args,client,Discord) {
		var fs = require('fs');
		let rol = message.guild.roles.cache.find(r => r.name === "Royal Chichen");
		let admin =message.member.roles.cache.has(rol.id);
		if(admin){
			// writeFile function with filename, content and callback function
			var nombre =args[0].toLowerCase();
			var oldPath ="/home/pi/Desktop/mikucha/commands/"+nombre+".js";
			var newPath ="/home/pi/Desktop/comandosborrados/"+nombre+".js";
			console.log(newPath+" Newpath");
			console.log(oldPath+" Oldpath");
			fs.rename(oldPath, newPath, function (err) {
				 if (err) throw err
				 message.channel.send('Ahora me olvide de hacer el truco '+nombre);
			}) ;
		}else{
			 message.channel.send('No, tu no puedes');
		}
	
	},
};