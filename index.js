const Discord = require('discord.js');
require('dotenv').config()
const client = new Discord.Client();
const prefix = ("!");
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`${client.users.cache.size} members`, {type: 'WATCHING'});
});



client.on("message", (message) => {
    if(message.content && message.content.toLowerCase()=== "-hi") {
      message.channel.send("Hey hello ");
    }
    if(message.content && message.content.toLowerCase()=== "-lol") {
      message.channel.send(":rofl:");
    }
    if(message.content && message.content.toLowerCase()=== "-bye bye") {
      message.channel.send("bye bye but where are you going,don't go to hell please :rofl:");
    }
    
    if(message.content && message.content.toLowerCase()=== "-how are you?") {
      message.channel.send("I am fine and you");
    }
    if(message.content && message.content.toLowerCase()=== '-fine') {
      message.channel.send('Ok');
    }

//after here





if(message.content && message.content.toLowerCase()=== "-happy") {
      message.channel.send("are you happy now ");
    }

    if(message.content && message.content.toLowerCase()=== "-happy") {
      message.channel.send("are you happy now ");
    }
    if(message.content && message.content.toLowerCase()=== "-what is my name") {
      message.channel.send(`your name is ${message.author.username}`);
    }



//before here
});


client.login(process.env.token);
