module.exports = {
	name: 'addcumple',
	description: 'Añadir un cumpleaños , primero dame el dia y despues el mes. Ejemplo !addcumple 11 4',
	cooldown: 5,
	execute(message,args,client,Discord) {	
	const sql = require('mysql');
	const connection = sql.createConnection({
		host: 'localhost',
		user: '',
		password: '',
		database: 'Bot'
	}); 
	
		try{
		  var  nombre = message.author.username;
		  var  dia = message.content.split(' ')[1]
		  var  mes = message.content.split(' ')[2]
		  
		  var autor="";
		  if(nombre!=null & dia!=null &mes!=null  ){
			  connection.query(`SELECT userID FROM Cumple WHERE userID=`+ message.author.id+ '', function (err, result, fields){
					if (err) throw err;
					if (result.length == 0) {
						 connection.query(`INSERT INTO Cumple(guildID,userID,username,Dia,Mes) VALUES (?,?,?,?,?)`, [message.guild.id, message.author.id, message.author.username,dia,mes]);
						 message.channel.send("Ahora ya me se tu tu cumple GUAU");
					}else{
						  console.log(message.guild.id +" dia "+dia+" mes "+ mes );
						  
						connection.query(`Update Cumple set username="`+message.author.username+`", Dia=`+dia+`, Mes=`+mes+` where userID=`+ message.author.id);
						message.channel.send("Eh actualizado tu cumple GUAU");
					}
			 });
		  }else{
			  message.channel.send("No he sido capaz de guardar tu cumple :( me perdonas?");
		  }
		}catch (error) {
			message.channel.send("No he sido capaz de guardar tu cumple :( me perdonas?");
		}
	},
};