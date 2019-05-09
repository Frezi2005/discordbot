const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let vehicle = args[0];
    if(!vehicle) return message.reply("You didn't specify the vehicle!");

    let garageembed = new Discord.RichEmbed()
      .setDescription("Garage")
      .setColor("#00c5ff")
      .addField("Vehicle", `${vehicle}`)
      .addField("Garaged by", `${message.author}`);

    message.delete().catch(O_o => {});
    message.channel.send(garageembed);
    return;
}

module.exports.help = {
    name: "garage"
}