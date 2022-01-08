const Discord = require("discord.js");
const client = new Discord.Client({
    intents: [
      Discord.Intents.FLAGS.GUILDS,
      Discord.Intents.FLAGS.GUILD_MESSAGES,
    ]
});

//? export module antiscam
const antiscam = require("antiscam");
const folder = require(antiscam.chemin)
//?============================================================

//? Confirm start bot.
client.on("ready", () => {
    console.log(`Bot ${client.user.tag} on !`)
    antiscam.protondev()//? export file antiscam
    folder(client)//? Start antiscam
});

//?============================================================

client.login("TOKEN BOT");