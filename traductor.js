const Reverso = require('reverso-api');
const reverso = new Reverso();

exports.traducir = async function ( {texto = 'No se pasó texto', orig_len = '', target_len = 'English', callback = unaVezTraducido, reaction} = {} ) {
    // const result =
    await reverso.getTranslation(texto, orig_len, target_len).catch(err => console.error(err)).then(result => callback( result, reaction ));
    
    // callback(result);
}