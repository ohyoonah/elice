const form = document.querySelector('.login-form');
const feedback = document.querySelector('.feedback');
const regexp = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', e => {
  e.preventDefault();
  //preventDefault는 button 클릭시 동작되는 기본동작을 막는다.
  // 이런 것들이 기본동작에 해당됩니다. 
  // (1) 텍스트 필드에 텍스트가 입력 된다든지~
  // (2) submit 버튼을 누르면 데이터가 전송된다든지~
  // (3) a 태그를 누르면 href의 URL로 이동한다든지~
  console.log(form.username.value);
  const username = form.username.value;

  // if(regexp.test(username)) {
  //   feedback.textContent = '환영합니다 여러분.';
  // } else {
  //   feedback.textContent = '영문 6~12자로 적어주셔야 합니다.';
  // }
});

form.username.addEventListener('keyup', e => {
  console.log(e);
  if(regexp.test(e.target.value)) {
      feedback.textContent = '환영합니다 여러분.';
    } else {
      feedback.textContent = '영문 6~12자로 적어주셔야 합니다.';
    }
});
