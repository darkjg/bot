   module.exports = {
	name: 'mikuu',
	description: 'Pero que guapa es la tia esta',
	execute(message,args,client,Discord) {	
	const biblethump = client.emojis.cache.get("708427339658428436"); 	
	const lineReader = require('line-reader');
	//var returnValue="";
	var	filename="./imageLinks.txt";
	let mySet = new Set();
	var foto="";
	var y,x;
	const fs = require('fs');
	
		
		lineReader.eachLine(filename, function(line) {
		//  console.log(line);
		  mySet.add(line);
		  if(line=="Fin"){
			//console.log(mySet.size +"AAAAA");	
			let arr = new Array(mySet.size)
			var i =0;
			mySet.forEach((value) => {
				arr[i]=value;
				i++;
			});			
			y=(Math.random() *arr.length);
			x= Math.floor(y);
			//console.log(x);
			foto=arr[x];
			const exampleEmbed = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setDescription(`Mira qué guapa es mi dueña ${biblethump}`)
			.setImage(foto)
			.setTimestamp()
			.setFooter('Mikucha', client.user.displayAvatarURL);

			message.channel.send(exampleEmbed);
		  }
		  
		});

		
		/*
		fs.readFile(filename, (err, data) => {
			
		  data = data + ''; // data will now be treated as string.
          if (err) {
			console.error(err)
			return
		  }
		  //foto=data[(Math.random() *data.length)]
			for(i =0; i<data.length;i++){
				console.log(data[i]);
			}
		})
		
		//console.log(y[Math.floor(Math.random()*y.length)];);
*/

		
	},
 };
