   module.exports = {
	name: 'pat',
	cooldown: 300,
	description: 'Dame pat ;-;',
	execute(message, args) {
		const fs = require('fs');
		let rawdata = fs.readFileSync('pat.json');
		let pat = JSON.parse(rawdata);
		console.log(pat.Pat);
		///if(message.author.id=="661641018244071444"){
			var patupdate=pat.Pat +1;
			message.channel.send("Guau Guau! Me habéis acariciado "+patupdate+" veces. Guaucias! " +message.author.username);
			var updatejson =JSON.stringify({"Pat":patupdate});
			fs.writeFileSync('./pat.json', updatejson);
	//	}
	},
};
