const path = require('node:path');

const fileInfo = {
  sep: path.sep,
  basename: path.basename('readme.txt'),
  delimiter: path.delimiter,
  ext: path.extname('readme.txt'),
  dir: path.dirname('readme.txt'),
  paths: path.parse('readme.txt'),
  normal_path: path.normalize('readme.txt'),
  absolute: path.isAbsolute('readme.txt'),
  relative: path.relative('/', process.cwd())
};

console.log(fileInfo);


const newFileName = path.join('bin', 'www');
console.log('newFileName', typeof(newFileName), newFileName);
//출력결과: newFileName string bin\www