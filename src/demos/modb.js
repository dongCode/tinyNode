module.exports.test = 'b';

const moda = require('./moda');

console.log('B:', moda.test);

module.exports.test = 'bb';

