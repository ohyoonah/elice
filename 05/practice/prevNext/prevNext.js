/*지시사항을 따라 작성해주세요*/
const prev = document.getElementById('prev');
const next = document.getElementById('next');

var pageCount = document.getElementsByClassName("page-count")[0]; 
var count = 1;

/*1. 이전 버튼 클릭 시 실행되는 함수*/
function prevBtnOnclick() {

    // 1번째 페이지인 경우 '시작 페이지입니다.' 알림창 띄우기
    if(count == 1) {
        alert('시작 페이지입니다.');
    } else { 
        // count값을 감소시켜 pageCount에 보여주기
        count--;
        pageCount.innerText = `${count}`;
    }
}

/*2. 다음 버튼 클릭 시 실행되는 함수*/
function nextBtnOnclick() {
    
    // 7번째 페이지인 경우 '마지막 페이지입니다.' 알림창 띄우기
    if(count == 7) {
        alert('마지막 페이지입니다.');
    } else {
        // count값을 증가시켜 pageCount에 보여주기
        count++;
        pageCount.innerText = `${count}`;
    }
}

/*3번. 각 버튼에 해당하는 함수 연결해주기*/
// prev.addEventListener('click', e => {
//     console.log(prevBtnOnclick());
// });
// next.addEventListener('click', e => {
//     console.log(nextBtnOnclick());
// });

prev.addEventListener('click', prevBtnOnclick);
next.addEventListener('click', nextBtnOnclick);