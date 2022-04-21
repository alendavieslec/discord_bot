const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () =>{
        console.log('Connected as ' + client.user.tag)

        client.user.setActivity("YouTube", {type:"WATCHING"})

        client.guilds.cache.forEach((guild) => {
                console.log(guild.name);
                guild.channels.cache.forEach((channel) => {
                        console.log(` - ${channel.name} ${channel.type} ${channel.id}`)
                })
        })

        let generalChannel = client.channels.cache.get("966564830100205584")
        //const attachment = new Discord.Attachment("") para poner imagenes o files
        //generalChannel.send(attachment)
        //generalChannel.send("Hello, world!")
})

client.on('message', (receivedMessage) => {
        if(receivedMessage.author == client.user){
                return
        }
        receivedMessage.channel.send("Message received: " + receivedMessage.author.toString() + ": " + receivedMessage.content)

        //receivedMessage.react() el bot reacciona con un emoji al mensaje recivido

})

client.login("OTY2NTY1MzMwMTQ1MTIwMjg2.YmDmHA.C2kpsjBi6bHj6CxI5eSc5LEQ3Gw")
