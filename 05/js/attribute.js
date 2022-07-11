const link = document.querySelector('a');
//link = element(요소)
console.log(link.getAttribute('href'));

link.setAttribute('href', 'https://www.google.com');
link.innerHTML = '역시 검색은 구글이다.';
console.log(link.getAttribute('href'));

//get(가져오다)- read 값을 읽는다.
//set(값을 세운다)- write 값을 쓴다.

const msg = document.querySelector('p');
// msg.setAttribute('class', 'success');
// msg.setAttribute('style', 'color: green');

msg.classList.remove('error');
//클래스 속성 삭제
msg.classList.add('success');
//클래스 속성 추가

