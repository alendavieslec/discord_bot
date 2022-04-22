const Reverso = require('reverso-api');
const reverso = new Reverso();

exports.traducir = async function ( {texto, orig_len = 'Spanish', target_len = 'English', callback = unaVezTraducido} = {} ) {
    // const result =
    await reverso.getTranslation(texto, orig_len, target_len).catch(err => console.error(err)).then(result => callback(result));
    // callback(result);
}