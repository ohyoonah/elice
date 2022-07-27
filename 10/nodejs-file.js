// const content1 = fs.readFileSync('readme.txt');
// const content2 = fs.readFileSync('readme.txt', {encoding: 'utf-8'});

// console.log(content1);
// console.log(content2);

// const fs = require('node:fs');

//콜백 첫번째 파라미터는 무조건 error!!
// fs.readFile('readme.txt', {encoding: 'utf-8'}, (err, data) => {
//   if(err)
//     return new Error('파일을 읽는 도중 에러가 발생했습니다!');
//   console.log(data);
// });

const fs = require("fs").promises;

fs.readFile("readme.txt", { encoding: "utf-8" })
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((reject) => {
    console.error(reject); //new Error('')
  });
