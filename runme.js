var readline = require('readline');
var fs = require('fs');
var foo;
foo =0;

var myInterface = readline.createInterface({
  input: fs.createReadStream('./AOC/AOC_Day1_1/input.txt')
});

myInterface.on('line', function (line) {
  console.log('Module: ' , line);
  console.log('Module Fuel: ' , Math.floor(line/3)-2);
  foo = foo + Math.floor(line/3)-2;
  console.log('Total Fuel: ', foo);
});
