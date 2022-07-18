const getJson = (resource, callback) => {

  return new Promise((resolve, reject) => {

    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {

      if(request.readyState == 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);

      }else if (request.readyState === 4) {
        reject('실패!');
      }
    });

    request.open('GET', resource);
    request.send();

  });
}

getJson('json/pikachu.json').then(result => {
  console.log('promise 1: ' + result);
  return getJson('json/musclemon.json');
}).then(result => {
  console.log('promise 2: ' + result);
  return getJson('json/jammanbo.json');
}).then(result => {
  console.log('promise 3: ' + result);
}).catch(err => {
  console.log('rejected ' + err);
})
