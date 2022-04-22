const { traducir } = require('./traductor');

function unaVezTraducido( {translation} ) {
    console.log(translation[0]);
    // acá va lo que tenga que imprimir el bot
}

// ejemplo uso funcion
const texto = 'Il y a certainement des gens heureux de vivre, dont les jouissances ne ratent pas et qui se gorgent de bonheur et de succès.';
const desde = 'French';
const hasta = 'German';
traducir( {texto: texto, orig_len: desde, target_len: hasta, callback: unaVezTraducido} );