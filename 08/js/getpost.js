const getBtn = document.querySelector('#get-btn');
const postBtn = document.querySelector('#post-btn');

// 하나의 함수로 두가지 기능을 할 수 있게끔 구현
const sendHttpRequest = (method, url, data) => {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: data ? {'Content-Type' : 'application/json'}:{}
  }).then(response => {
    if(response.status >= 400) {
      return response.json().then(err => {
        const error = new Error('Network Error');
        error.data = err;
        throw error;
      })
    }
    return response.json();
  })
}

const getData = () => {
  sendHttpRequest('GET', 'https://reqres.in/api/users')
    .then(result => {
      console.log(result);
    })
}

const sendDate = () => {
  sendHttpRequest('POST', 'https://reqres.in/api/register', {
    "email": "eve.holt@reqres.in",
    "password": "pistol"
  }).then(result => {
    console.log(result);
  }).catch(err => {
    console.log(err);
  })
}

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendDate);