const crypto = require ('crypto')

const key1 = crypto.randomBytes(32).toString('hex')
const key2 = crypto.randomBytes(32).toString('hex')
console.table({key1, key2})
// console.log(`Key 1: ${key1}`)
// console.log(`Key 2: ${key2}`)

/*function encrypt (text) {
    let cipher = crypto.createCipher('aes-256-cbc', Buffer.from(key1, 'hex'))
    let encryptedText = cipher.update(text, 'utf8', 'base64')
    return encryptedText + cipher.final('base64')
}

function decrypt (encryptedText) {
    let decipher = crypto.createDecipher('aes-256-cbc', Buffer.from(key1,
        'hex'))
        let text = decipher.update(Buffer.from(encryptedText, 'base64'), 'base64',
        'utf8')
        return text + decipher.final('utf8')
}
*/