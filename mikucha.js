const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const { prefix, token } = require('./config.json');
const sql = require('mysql');
const connection = sql.createConnection({
	host: 'localhost',
	user: '',
	password: '',
	database: 'Bot'
}); 

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getCumple () {
		var embed = new Discord.MessageEmbed()
	  var f = new Date();
	  var dialocal= f.getDate();
	  var meslocal= (f.getMonth() +1) ;
	
      sqlQuery(`SELECT username,Dia,Mes from Cumple Order By Dia asc, Mes asc`) .then(results => {
		  var resultArray = Object.values(JSON.parse(JSON.stringify(results)))
		// console.log(resultArray[0].username);
		// console.log(entry.username+" "+entry.Dia+" "+entry.Mes+" "+entry.Año);
			resultArray.forEach(entry => {
				var dia=entry.Dia;
				var mes=entry.Mes;
				var año=entry.Año;
				var nombre =entry.username;
				var tem=("Hoy es el cumple de "+nombre+" el dia "+dia+" del mes "+mes);
				let canal = '450937247823429643'; // Canal destino en el que se publicará.
				var channel = client.channels.cache.get(canal)
				if (dialocal==dia & meslocal==mes){
					channel.send(tem);
				}
				
			})

			
        }).catch(error => {
			console.log(error);
        });
	  
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


client.on("ready", () => {
    console.log(`hola bueno dia!`);

    client.user.setStatus('online'); 
    client.user.setActivity('Mikuverso | !ayuda', ({type: "WATCHING"}))
	  var myInt = setInterval(function () {
	  
	var date= new Date();
	 var hour = date.getHours();
	//console.log(hour);
	////////console.log(date.getMonth());
	
	if(hour==19){
		getCumple();
		console.log(date.getMonth());
	}  
	  
	var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;
    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;
	
	

	
},  15 * 10000); //30 min 
})



client.on("message", async message => {




    ///-Importing Emojis from Mikuverse
    const mikucha = client.emojis.cache.get("776413363588431892"); //only for subs
    const biblethump = client.emojis.cache.get("708427339658428436");
	const bloodtrail = client.emojis.cache.get("675795814563446795");
    const focacry = client.emojis.cache.get("562432642499346451");
    const focashy = client.emojis.cache.get("572140143620653087");
    const mikuchillo = client.emojis.cache.get("776430405078745090"); //only for subs
    const mikuchillo1 = client.emojis.cache.get("560785217837858818");
    const hahasweat = client.emojis.cache.get("755400970778705962");
    const mikuhey = client.emojis.cache.get("762993602204401664"); //only for subs
    const kappa = client.emojis.cache.get("755397830847234098"); 
    const mikustitch = client.emojis.cache.get("762993647594897450"); //only for subs
    const mikuhi = client.emojis.cache.get("762993678088011776"); //only for subs
    const monichu1 = client.emojis.cache.get('763365354348216320');
    const adrian = client.emojis.cache.get('764946784320487515'); //outOfMikuverse
    const mikuDab = "https://gfycat.com/whisperedgiganticbabirusa";

    ///-Functions

    //getRandomInt for %
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }
    var x = getRandomInt(0,100);

    //getRandomLine for Miku's Images
    function getRandomLine(filename, callback){
    fs.readFile(filename, function(err, data){
    if(err) throw err;
    data = data + ''; //converting to string because 'data' is a Location object
    let lines = data.split('\n');

    randomLine = lines[Math.floor(Math.random()*lines.length)];
    callback(randomLine);

    });
    }

  if (message.content.indexOf('.asend')== 0) {  
  const frase=(message.content.substring(6).toString());
  let canal = '582640590920089640'; // Canal destino en el que se publicará.
	var channel = client.channels.cache.get(canal);
	channel.send(frase);
  }
  if (message.content.indexOf('.bsend')== 0) {  
  const frase=(message.content.substring(6).toString());
  let canal = '450776589144424462'; // Canal destino en el que se publicará.
	var channel = client.channels.cache.get(canal);
	channel.send(frase);
  }
    ///-Commands without prefix
    if (message.content.toLowerCase() === 'f') {
    message.channel.send(`F ${biblethump}`);
    }

    if (message.content.toLowerCase() === 'mikuwapa') {
    message.channel.send(`MIKU WAPA ${mikustitch} ${biblethump}`);
    }

    ///- ALL Commands LOOP
 // Split commands and arguments from message so they can be passed to functions
 if(message.content.startsWith(prefix)){
   const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    // If the command isn't in the  command folder, move on
    const command = client.commands.get(commandName)
        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if(!command) return;

        // If the command requires arguments, make sure they're there.
        if (command.args && !args.length) {
            let reply = 'That command requires more details!';

            // If we have details on how to use the args, provide them
            if (command.usage) {
                reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
            }

            // Send a reply from the bot about any error encountered
            return message.channel.send(reply);
        }


    try {
        // Run the command
        command.execute(message, args,client,Discord);
    } catch(error) {
        console.error(error);
		message.reply('Hubo un error con dicho comando. wuau ;-;');
	}
 } 

});


client.login(token); 