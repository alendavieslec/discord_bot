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

function unaVezTraducido( result, reaction, user ) {
        let channel = client.channels.cache.get(reaction.message.channel.id)
        
        let embed = new Discord.MessageEmbed()
                .setColor('#8ac8df')
                .setTitle(reaction.emoji.name + " " + idioma[reaction.emoji])
                .setAuthor(user.username, user.avatarURL())
                .setDescription(result.translation)
                
        channel.send(embed)
}

client.on('ready', () =>{
        console.log('Connected as ' + client.user.tag)

        client.user.setActivity("Translation", {type: "PLAYING"})
})

client.on('messageReactionAdd', (reaction, user) =>{
        if(user.bot){
                return
        }        
        let channel = client.channels.cache.get(reaction.message.channel.id)
        let msg = reaction.message.content
        const desde = 'Spanish'
        const hasta = idioma[reaction.emoji]
        
        if((Object.keys(idioma)).includes(reaction.emoji)){
                traducir( {texto: msg, orig_len: desde, target_len: hasta, callback: unaVezTraducido, reaction: reaction, user: user});
        }
        else{
                console.log("Hola")
        }
})


client.on('message', msg => {
        if(msg.author == client.user){
                return
        }
        
        msg.react('🇫🇷')
        msg.react('🇬🇧')
        msg.react('🇮🇹')
        msg.react('🇩🇪')
})

client.login(config.token)
