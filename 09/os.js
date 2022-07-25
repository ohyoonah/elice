const os = require('os');

// console.log(os);

const currentOS = {
  name: os.type(),
  release: os.release(),
  cpu: os.cpus(),
  core_cnt: os.totalmem(),
  freeMem: os.freemem()
}

console.log(currentOS);