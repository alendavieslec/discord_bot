const Reverso = require('reverso-api');
const reverso = new Reverso();

exports.traducir = async function ( {texto = 'No se pasó texto', orig_len = 'Spanish', target_len = 'English', callback = unaVezTraducido, reaction, user} = {} ) {
    // const result =
    await reverso.getTranslation(texto, orig_len, target_len).catch(err => console.error(err)).then(result => callback( {result: result, reaction: reaction, user: user} ));
    
    // callback(result);
}