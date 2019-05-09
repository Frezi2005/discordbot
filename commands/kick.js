const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!kUser) return message.channel.send("Couldn't find that user.");
    let kReason = args.join(" ").slice(22);
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You do not have right permissions to do this!");
    if (kUser.hasPermission("ADMINISTRATOR")) return message.channel.send("That person can't be kicked");


    let kickembed = new Discord.RichEmbed()
      .setDescription("~kick~")
      .setColor("#e56b00")
      .addField("Kicked User", `${kUser} with ID: ${kUser.id}`)
      .addField("Kicked By", `<@${message.author.id} with ID: ${message.author.id}>`)
      .addField("Kicked In", message.channel)
      .addField("Time", message.createdAt)
      .addField("Reason", kReason);

    let kickchannel = message.guild.channels.find(channel => channel.name === 'warn-info');
    if (!kickchannel) return message.channel.send("Couldn't find kick channel.");
    message.guild.member(kUser).kick(kReason);

    message.delete().catch(O_o => {});
    kickchannel.send(kickembed);

    return;
}

module.exports.help = {
    name: "kick"
}