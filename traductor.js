const { User } = require('discord.js');
const Reverso = require('reverso-api');
const reverso = new Reverso();

exports.traducir = async function ( {texto = 'No se pasó texto', orig_len = 'Spanish', target_len = 'English', callback = unaVezTraducido, reaction, user} = {} ) {
    // const result =
<<<<<<< HEAD
    await reverso.getTranslation(texto, orig_len, target_len).catch(err => console.error(err)).then(result => callback( result, reaction, user));

=======
    await reverso.getTranslation(texto, orig_len, target_len).catch(err => console.error(err)).then(result => callback( result, reaction ));
    
>>>>>>> 933235eefe1bfc0c3c5bedf40cc10228ea5d06cf
    // callback(result);
}