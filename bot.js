const Discord = require('discord.js')
const config = require('./config.json');
const { traducir } = require('./traductor');
const client = new Discord.Client( {partials: ['MESSAGE', 'REACTION']})

const prefix = '-'

idioma = {
        '🇫🇷': 'French',
        '🇬🇧': 'English',
        '🇪🇦': 'Spanish',
        '🇩🇪': 'German',
        '🇮🇹': 'Italian'
}

<<<<<<< HEAD
function unaVezTraducido( result, reaction, user ) {
        let channel = client.channels.cache.get(reaction.message.channel.id)
        /* let generalChannel = client.channels.cache.get("967164003375779870")
        generalChannel.send(result.translation[0]); */
        //channel.send(reaction.emoji.name + " " + idioma[reaction.emoji])
        //channel.send(result.translation)
        
        let embed = new Discord.MessageEmbed()
                .setColor('#8ac8df')
                .setTitle(reaction.emoji.name + " " + idioma[reaction.emoji])
                .setAuthor(user.username, user.avatarURL())
                .setDescription(result.translation)
                
        channel.send(embed)
=======
function unaVezTraducido( result, reaction ) {
        let generalChannel = client.channels.cache.get("967164003375779870")
        generalChannel.send(result.translation[0]);
        //channel.send(reaction.emoji + ':' + translation[0])
>>>>>>> 933235eefe1bfc0c3c5bedf40cc10228ea5d06cf
}

client.on('ready', () =>{
        console.log('Connected as ' + client.user.tag)

        client.user.setActivity("Translation", {type: "PLAYING"})

        /* client.guilds.cache.forEach((guild) => {
                console.log(guild.name);
                guild.channels.cache.forEach((channel) => {
                        console.log(` - ${channel.name} ${channel.type} ${channel.id}`)
                })
        }) */
})

client.on('messageReactionAdd', (reaction, user) =>{
        if(user.bot){
                return
        }        
        let channel = client.channels.cache.get(reaction.message.channel.id)
        let msg = reaction.message.content
        const desde = 'Spanish'
        const hasta = idioma[reaction.emoji]
        console.log("Message to translate: " + msg)
        
        traducir( {texto: msg, orig_len: desde, target_len: hasta, callback: unaVezTraducido, reaction: reaction, user: user});
})


client.on('message', msg => {
        if(msg.author == client.user){
                return
        }
        
        msg.react('🇫🇷')
        msg.react('🇬🇧')
        msg.react('🇮🇹')
        msg.react('🇩🇪')

       /*  if(msg.content.startsWith(prefix)){
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
        } */
})

client.login(config.token)
