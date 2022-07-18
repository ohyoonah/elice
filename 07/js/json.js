const getJson = (resource, callback) => {

  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {

    if(request.readyState == 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, request.responseText);

    }else if (request.readyState === 4) {
      callback('데이터를 받아 올 수 없습니다.', undefined);

    }
  });

  request.open('GET', resource);
  request.send();
}

//callback 지옥 형태 ==> Promise, Async/Await
getJson('json/pikachu.json', (err, data) => {
  console.log(data);
  getJson('json/jammanbo.json', (err, data) => {
    console.log(data);
    getJson('json/musclemon.json', (err, data) => {
      console.log(data);
    })
  })
});
