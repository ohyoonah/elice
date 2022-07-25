const fs = require('node:fs');

// console.log(fs);

function add(x, y) {
  return x + y;
}

console.log(add(1, 2));
// add(x, y)
// x: number
// y: number 

const content1 = fs.readFileSync('readme.txt');
const content2 = fs.readFileSync('readme.txt', {encoding: 'utf-8', flag: 'r'});
console.log(content1);
console.log(content2);
