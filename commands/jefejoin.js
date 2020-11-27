   module.exports = {
	name: 'jefejoin',
	cooldown: 300,
	description: 'Cuando se une',
	execute(message, args) {
		const fs = require('fs');
		let rawdata = fs.readFileSync('jefe.json');
		let jefe = JSON.parse(rawdata);
		console.log(jefe);
		var f = new Date();
		var dialocal= f.getDate();
		var meslocal= (f.getMonth()) ;
		var hour = f.getHours();
		var year = f.getFullYear();
		var min  = f.getMinutes();
		var updatejson =JSON.stringify({"Dia":dialocal,"Mes":meslocal,"Year":year,"Hora":hour,"Minutos":min});
		 message.channel.send("la fecha se ha guardado");
		fs.writeFileSync('./jefe.json', updatejson);
	},
};
