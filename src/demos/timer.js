process.nextTick(() => {
  console.log('nextTick');
}); // 队尾

setTimeout(() => {
  console.log('setTimeout');
}, 0); // 中间
let time = 0;

setInterval(() => {
  console.log(time++);
}, 0);

setImmediate(() => {
  console.log('setImmediate');
}); //队首
