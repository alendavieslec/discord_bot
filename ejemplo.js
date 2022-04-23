const { traducir } = require('./traductor');

reaction = {
    message: {content: "lindo"},
}

// user = {

// }

function unaVezTraducido( {result, reaction, user} ) {
    console.log(result);
    console.log(reaction.message.content);
    // acá va lo que tenga que imprimir el bot
}

// ejemplo uso funcion
const texto = 'Il y a certainement des gens heureux de vivre, dont les jouissances ne ratent pas et qui se gorgent de bonheur et de succès.';
const desde = '';
const hasta = '';
traducir( {texto: reaction.message.content, callback: unaVezTraducido, reaction, user} );