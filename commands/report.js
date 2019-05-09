const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!rUser) return message.channel.send("Couldn't find user.");
    let reason = args.join(" ").slice(22);

    let reportembed = new Discord.RichEmbed()
      .setDescription("Reports")
      .setColor("#15f153")
      .addField("Reported user", `${rUser} with ID: ${rUser.id}`)
      .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
      .addField("Channel", message.channel)
      .addField("Time", message.createdAt)
      .addField("Reason", reason);

    let reportschannel = message.guild.channels.find(channel => channel.name === 'warn-info');
    if (!reportschannel) return message.channel.send("Couldn't find reports channel.");

    message.delete().catch(O_o => {});
    reportschannel.send(reportembed);
    return;
}

module.exports.help = {
    name: "report"
}