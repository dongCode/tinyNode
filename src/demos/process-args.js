process.argv.forEach((val, index) => {
  console.log(`argv${index}: ${val}`);
});

// console.log('argv0:', process.argv0);

// console.log('execArgv:', process.execArgv)

// console.log('execPath:', process.execPath)

// console.log('env:', process.env)

console.log('cwd:', process.cwd());


