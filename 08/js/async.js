const getPoketmons = async() => {
  //Promise 형태로 반환이 된다.
  const response = await fetch('json/pikachu.json');
  console.log(response);

  if(response.status !== 200) {
    throw new Error('통신 주소값을 찾을 수 없습니다.');
    //new Error는 에러를 전달하기 위해서 작성
    //throw는 중간에 멈추고 내가 메시지를 보내기 위해 작성
  }

  const data = await response.json();
  // await를 쓰면 순서 컨트롤 가능
  // await 문장이 끝나지 않으면 아래 코드 실행 안 됨
  return data;
}
// async function getPoketmon () {}

// const test = getPoketmons();
// console.log(test);

getPoketmons()
  .then(data => console.log('resolve : ', data))
  .catch(err => console.log('rejected : ', err));