const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let place = args[0];
    if(!place) return message.reply("You didn't specify the place to drop!");

    let bombembed = new Discord.RichEmbed()
      .setDescription("Atomic Bomb")
      .setColor("#ffb321")
      .addField("Drop place", `${place}`)
      .addField("Dropped By", `${message.author}`);

    message.delete().catch(O_o => {});
    message.channel.send(bombembed);
    return;
}

module.exports.help = {
    name: "bomb"
}