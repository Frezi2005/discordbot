const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("Couldn't find user.");
    if(tomute.hasPermission("ADMINISTRATOR")) return message.reply("Can't mute them!");
    let muteRole = message.guild.roles.find(`name`, `muted`);
    if(!muteRole) {
        try {
            muteRole = await message.guild.createRole({
                name: "muted",
                color: "#ffffff",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muteRole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                })
            })
        } catch(e) {
           console.log(e.stack); 
        }
    }

    let mutetime = args[1];
    if(!mutetime) return message.reply("You didn't specify the time!");

    await(tomute.addRole(muteRole.id));
    message.reply(`<@${tomute.id}> has been mute for ${ms(ms(mutetime))}`);

    setTimeout(function() {
        tomute.removeRole(muteRole.id);
        message.channel.send(`<@${tomute.id}> has been unmuted!`);
    }, ms(mutetime));

}

module.exports.help = {
    name: "tempmute"
}