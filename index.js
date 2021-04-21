const Discord = require('discord.js');
//variable for the bot
const client = new Discord.Client();
//prefix for commands
const prefix = ('^'); 

//stuff I want to happen when the bot starts (like a start method in unity)
client.once('ready', () => {
	console.log('your mom is a blob');

  //I want a custom status so I use this simple function and also I set it to listening and catch any errors
  client.user.setActivity('^help', {type: 'PLAYING'}).catch(console.error);
});

//tests if the message was sent by a user and starts with our prefix, if one of these is not true it will not do anything
client.on('message', msg => { //on('messgae',msg =>) is a function which tests if the user wrote a message
    if(!msg.content.startsWith(prefix) || msg.author.bot){
      return;
    }

    const args = msg.content.slice(prefix.length).split(/ + /);
    const commands = args.shift().toLowerCase();

    if(commands == 'help')
    {
      //Embeds, I commented out fields I dont want, also imigur links for photos
      const exampleEmbed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Kotch Help Menu!')
	.setURL('https://discord.com/oauth2/authorize?client_id=813520057765724190&permissions=0&scope=bot')
	.setAuthor('Help', 'https://imgur.com/OqUmYp4.png')
	.setDescription('In this embed, you will find the list of commands available in the Kotch Discord bot!')
	.setThumbnail('https://imgur.com/RbIWNmn.png')
	.addFields(
		{ name: '^help', value: 'Shows the help menu (this menu) with a list of all commands in the Kotch Discord bot!' },
		{ name: '\u200B', value: '\u200B' }, //This to leave a space
//		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	//.addField('Inline field title', 'Some value here', true)
	//.setImage('https://imgur.com/RbIWNmn.png')
	//.setTimestamp()
//	.setFooter('Some footer text here', 'https://imgur.com/OqUmYp4.png');

    //Actually send the embed
    msg.reply(exampleEmbed);

    }
 
  })

  
//same thing but monke
  client.on('message', msg => {
    if (msg.content === '🐵') {
      msg.reply('funky');
    }
  });

 
//client id cuz we need it
client.login('Im not showing you my token');
