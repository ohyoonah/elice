// 지시사항을 참고하여 코드를 작성하세요.
var form = document.querySelector('#form');
var input = document.querySelector('#input');
var answer = document.querySelector('#answer');
var btn = document.querySelector('#btn');

function btnClick (e) {
    e.preventDefault();
    const name = input.value;
    answer.textContent = name;
    input.value = null;
}

form.addEventListener('submit', btnClick);