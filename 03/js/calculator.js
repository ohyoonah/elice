function printExpression(value) {
  document.querySelector('#expression').
  innerHTML += value;
  // =연산자를 넣으면 출력되고 다른 버튼을 눌렀을 때 숫자가 지워짐
  // +=연산자를 넣으면 문자열이 뒤로 더해져서 출력됨

  
  // function printExpression(value) {
  //   const element = document.querySelector('#expression');
  //   element.innerHTML += value;
  // }
}

function calculate() {
  let expression = document.querySelector('#expression').innerHTML;
  document.querySelector("#answer").innerHTML = eval(expression);
}