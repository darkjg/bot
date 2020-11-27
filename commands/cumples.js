module.exports = {
	name: 'cumples',
	description: 'Te enseño los cumples de este mes , si quieres de otro mes dime el numero de mes ',
	cooldown: 5,
	execute(message,args,client,Discord) {	
	const sql = require('mysql');
	const connection = sql.createConnection({
		host: 'localhost',
		user: '',
		password: '',
		database: 'Bot'
	}); 
	function sqlQuery(query) {
    return new Promise((resolve, reject) => {
        connection.query(
            query, 
            (error, results) => {
                if (error) return reject(error);
                return resolve(results);
            });
    });
}
	 var embed = new Discord.MessageEmbed()
	  var f = new Date();
	  var dia= f.getDate();
	  var mes= (f.getMonth() +1) ;
	  
	  var  mescomprobar = message.content.split(' ')[1];
	  if(mescomprobar==null){
		  mescomprobar =mes;
	  }
		console.log(mescomprobar);
      sqlQuery(`SELECT username,Dia,Mes from Cumple where Mes =`+mescomprobar+` Order By Dia asc, Mes asc`) .then(results => {
		  var resultArray = Object.values(JSON.parse(JSON.stringify(results)))
		  console.log(results.length);
            if (results.length == 0) {
				var embed = new Discord.MessageEmbed()
					.setColor(0x00AE86)
					.setThumbnail(message.guild.iconURL)
					.addField(`No existen cumpleaños aun`," :(")
					
				message.channel.send({embed: embed});
            } 
			if(results.length >0 ){
				
				var embed = new Discord.MessageEmbed()
					.setColor(0x00AE86)
					.setTitle(`Cumples`)
					.setThumbnail(message.guild.iconURL)
					resultArray.forEach(entry => {
						//	console.log(entry.username+" "+entry.Dia+" "+entry.Mes+" "+entry.Año);
					var tem=(+entry.username+" "+entry.Dia+" "+entry.Mes);
					console.log(tem);
					embed.addField(``+entry.username,`Dia: `+entry.Dia+` Mes: `+entry.Mes)
					})
				//console.log(embed+" Holaaaa");
				//channel.send(embed);	
				message.channel.send({embed: embed});

			}
        })
        .catch(error => {
			console.log(error)
           		var embed = new Discord.MessageEmbed()
					.setColor(0x00AE86)
					.setThumbnail(message.guild.iconURL)
					.addField(`No existen cumpleaños aun`,":(")
				message.channel.send({embed: embed});
        });
	},
};