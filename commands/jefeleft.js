   module.exports = {
	name: 'jefeleft',
	cooldown: 300,
	description: 'Cuando se une',
	execute(message, args) {
		const fs = require('fs');
		let rawdata = fs.readFileSync('jefe.json');
		let jefe = JSON.parse(rawdata);
		console.log(jefe);
		var f = new Date();
		var ano= jefe.Year;
		var mes= jefe.Mes;
		var dia=jefe.Dia;
		var hora = jefe.Hora;
		var min= jefe.Minutos;
		console.log(ano);
		var nacimiento= new Date(ano, mes, jefe.Dia, jefe.Hora, jefe.Minutos, 0, 0);
		
		
			var hoy = new Date()

			var tiempoPasado= hoy -nacimiento
			var segs = 1000;
			var mins = segs * 60;
			var hours = mins * 60;
			var days = hours * 24;
			var months = days * 30.416666666666668;
			var years = months * 12;

			//calculo 
			var anos = Math.floor(tiempoPasado / years);

			tiempoPasado = tiempoPasado - (anos * years);
			var meses = Math.floor(tiempoPasado / months)

			tiempoPasado = tiempoPasado - (meses * months);
			var dias = Math.floor(tiempoPasado / days)

			tiempoPasado = tiempoPasado - (dias * days);
			var horas = Math.floor(tiempoPasado / hours)

			tiempoPasado = tiempoPasado - (horas * hours);
			var minutos = Math.floor(tiempoPasado / mins)

			tiempoPasado = tiempoPasado - (minutos * mins);
			var segundos = Math.floor(tiempoPasado / segs)

			message.channel.send(`Han pasado ${anos} años, ${meses} meses,  ${dias} dias, ${horas} horas, y ${minutos} minutos desde que entro jefemaestro`)
		
		
		
		
		//var updatejson =JSON.stringify({"Dia":dialocal,"Mes":meslocal,"Hora":hour});
		//fs.writeFileSync('./jefe.json', updatejson);
	},
};
