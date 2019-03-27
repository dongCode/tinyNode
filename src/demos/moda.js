module.exports.test = 'a';

const modb = require('./modb.js');

console.log('A:', modb.test);

exports.test = 'aa';

