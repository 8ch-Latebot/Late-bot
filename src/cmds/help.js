const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {

message.channel.send('**Command List**\n#play <song-name> = play a song you called\n#pause = to pause the song currently playing\n#resume = to resume playing the song after pausing\n#end = to end the song you are playing whenever\n#github = to get the github repo for the bot\n!help = to display this list\n#list to list the avable songs\n\n*coming soon*\n#awaken = to play todays (or yesterdays) stream of alex jones\'s infowar\nsome sort of queue\n');
}

module.exports.help = {
	name:"help"
}
