const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!kUser) return message.channel.send("Couldn't find user.");

    let killembed = new Discord.RichEmbed()
      .setDescription("kill")
      .setColor("#e56b00")
      .addField("Killed User", `${kUser}`)
      .addField("Killed By", `${message.author}`);

    message.delete().catch(O_o => {});
    message.channel.send(killembed);
    return;
}

module.exports.help = {
    name: "kill"
}