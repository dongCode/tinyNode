const { normalize, join } = require('path');
console.log(normalize('./././dddd'));

console.log(join('/foo', 'bar', 'baz/asdf', 'quux', '..'));
