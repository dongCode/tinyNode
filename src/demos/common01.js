const testVar = 'test';
function test() {
  console.log(testVar);
}
module.exports.testVar = testVar;
module.exports.testFn = test;
