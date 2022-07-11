var target = document.getElementById('btn');

function changeButtonOnclick() {
    target.classList.add('changeColor');
    target.innerText = '버튼 클릭 성공!';
}

// target.addEventListener('click', e => {
//     console.log(changeButtonOnclick());
// });

target.addEventListener('click', changeButtonOnclick);