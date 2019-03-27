const fs = require('fs');

const result = fs.readFile('./fs02.js', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

console.log(result);
