/*지시사항을 따라 작성해주세요*/

/*1. index.html 파일을 참고해 주어진 변수들 완성시키기*/

const target = document.querySelector('.attend');
const inputName = document.querySelector('input');
const attendee = document.querySelector('#attendee');

/*2. 입력받은 이름을 출석부에 나타내기*/

function attend() {
  const name = inputName.value;
  //attendee.textContent += name;
  attendee.innerHTML += attendee.innerText ? `<br>${name}` : name
}

target.addEventListener('click', attend);