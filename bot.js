const Discord = require('discord.js')
const config = require('./config.json');
const { traducir } = require('./traductor');
const client = new Discord.Client( {partials: ['MESSAGE', 'REACTION']})

const prefix = '-'

idioma = {
        '🇨🇵': 'French',
        '🇬🇧': 'English',
        '🇪🇦': 'Spanish',
        '🇩🇪': 'German',
        '🇮🇹': 'Italian'
}

function unaVezTraducido( {translation} ) {
        console.log(translation[0]);
        /* let generalChannel = client.channels.cache.get("966564830100205584")
        generalChannel.send(translation[0]) */
}

client.on('ready', () =>{
        console.log('Connected as ' + client.user.tag)

        client.user.setActivity("Minecraft", {type:"PLAYING"})

        /* client.guilds.cache.forEach((guild) => {
                console.log(guild.name);
                guild.channels.cache.forEach((channel) => {
                        console.log(` - ${channel.name} ${channel.type} ${channel.id}`)
                })
        }) */

        //let generalChannel = client.channels.cache.get("966564830100205584")
        //const attachment = new Discord.Attachment("") para poner imagenes o files
        //generalChannel.send(attachment)
        //generalChannel.send("Hello, world!")
})

client.on('messageReactionAdd', (reaction) =>{
        console.log('Hello')
        
        let channel = client.channels.cache.get(reaction.message.channel.id)
        let msg = reaction.message.content
        const desde = 'Spanish'
        const hasta = idioma[reaction.emoji]

        console.log(hasta)
        
        //traducir( {texto: msg, orig_len: desde, target_len: hasta, callback: unaVezTraducido} );
})

client.on('message', msg => {
        if(msg.author == client.user){
                return
        }
        
        //msg.channel.send("Message received: " + msg.author.toString() + ": " + msg.content)

        if(msg.content.startsWith(prefix)){
                processCommand(msg)
        }

        function processCommand(msg){
                let fullCommand = msg.content.substr(1)
                let splitCommand = fullCommand.split(" ")
                let primaryCommand = splitCommand[0]
                let arguments = splitCommand.slice(1)
                
                if(primaryCommand == "help"){
                        helpCommand(arguments, msg)
                }
        }

        function helpCommand(arguments, msg){
                if(arguments.length == 0){
                        msg.channel.send("I'm not sure what you need help with. Try -help [topic]")
                }else{
                        msg.channel.send("It looks like you need help with " + arguments)
                }
        }
})

client.login(config.token)
