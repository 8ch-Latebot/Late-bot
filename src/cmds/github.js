const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
        .setThumbnail('https://avatars3.githubusercontent.com/u/32183264?s=400&u=ec035a4ef1fcb0aa4f2a62d501508b15e30507d8&v=4')
        .setAuthor('Latememes')
        .setDescription('The Github For Late-Bot')
        .setURL('https://github.com/8ch-Latebot/Late-bot')
        .setColor('GREEN');
message.channel.send(embed);
return;
}

module.exports.help = {
	name:"github"
}
