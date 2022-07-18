const getJson = (callback) => {

  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState);
    //정상적으로 수행이 완료 되었습니다.

    if(request.readyState == 4 && request.status === 200) {
      //코드가 정상적으로 수행됐을 때 실행되는 구간.
      // console.log(request.responseText);
      callback(undefined, request.responseText);

    }else if (request.readyState === 4) {
      //코드 오류가 났을 때 실행되는 구간. 404
      // console.log('요청하신 내용은 찾을 수 없습니다.');
      callback('데이터를 받아 올 수 없습니다.', undefined);

    }
  });

  //request (클라이언트의 요청), response(서버의 응답)
  request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
  // request.open('GET', 'https://jsonplaceholder.typicode.com/toooooodos/'); //error
  request.send(); //위에 것이 준비되었으니 서버로 전송 하겠다.
}

// error메세지, 결과값, 존재하지 않으면 undefined
getJson(function(err, result) {
  if(err) {
    console.log(err);
  } else {
    console.log(result);
  }
});
// getJson(() => {
//   console.log('callback 실행');
// });




//통신 ...각 컴퓨터의 port. 일종의 통신을 하기 위한 전기 콘센트 같은 느낌.

// 서버의 일
// http 통신 규약에 의하면 통신하는 방법이 4가지

// GET ==> Read 읽는다
// Post ==> create ==> 글을 새로 쓴다. 회원 가입을 한다던가 ==> 서버쪽에 클라이언트가 정보를 전달하는 방식
// Put ==> update patch
// delete ==> 만들고, 읽고, 업데이트하고, 지운다 ==> CRUD