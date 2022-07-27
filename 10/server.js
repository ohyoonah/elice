const url = require('node:url');

const myURL1 = new URL('https://aitrack.lms.elice.io/');
console.log(myURL1);

const myURL2 = url.parse('https://aitrack.lms.elice.io/');
console.log(myURL2);