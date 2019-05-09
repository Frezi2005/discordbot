const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let placeToRide = args[0];
    if(!placeToRide) return message.reply("You didn't specify the city/country!");

    let rideembed = new Discord.RichEmbed()
      .setDescription("Ride")
      .setColor("#00c5ff")
      .addField("City/Country", `${placeToRide}`)
      .addField("Rided by", `${message.author}`);

    message.delete().catch(O_o => {});
    message.channel.send(rideembed);
    return;
}

module.exports.help = {
    name: "ride"
}