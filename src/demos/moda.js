module.exports.test = 'a';

const modb = require('./modb.js');

console.log('A:', modb.test);

module.exports.test = 'aa';

