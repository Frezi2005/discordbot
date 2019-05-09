const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!bUser) return message.channel.send("Couldn't find that user.");
    let bReason = args.join(" ").slice(22);
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You do not have right permissions to do this!");
    if (bUser.hasPermission("ADMINISTRATOR")) return message.channel.send("That person can't be banned");
  
  
    let banembed = new Discord.RichEmbed()
    .setDescription("~ban~")
    .setColor("#bc0000")
    .addField("Banned User", `${bUser} with ID: ${bUser.id}`)
    .addField("banned By", `<@${message.author.id} with ID: ${message.author.id}>`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);
  
    let banchannel = message.guild.channels.find(channel => channel.name === 'warn-info');
    if (!banchannel) return message.channel.send("Couldn't find ban channel.");
    message.guild.member(bUser).ban(bReason);
  
    message.delete().catch(O_o => {});
    banchannel.send(banembed);
}

module.exports.help = {
    name: "ban"
}