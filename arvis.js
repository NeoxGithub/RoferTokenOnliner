const { Client } = Discord = require('discord.js-selfbot-v13');
const { joinVoiceChannel } = require("@discordjs/voice");


const arvis = require("./ayarlar.json");
const client = global.client = new Client({ 'intents': [32767]});

for (let index = 0; index < arvis.HesapTOKEN.length; index++) {
    const token = arvis.HesapTOKEN[index];
    client.login(token)


    
    client.on('ready', async () => {
    const VoiceChannel = client.channels.cache.get(arvis.SesKanalı[index]);
    joinVoiceChannel({
        channelId: "1107414905021288533",
        guildId: "1107414905021288528",
        adapterCreator: client.guilds.cache.get("1107414905021288528").voiceAdapterCreator,
        selfDeaf: true
    });

    client.user.setStatus("online");
    console.log(`[TOKEN AKTİF] ${client.user.tag}`);
    })}