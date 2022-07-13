// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects
const now = new Date();
// constructor = 생성자
// new = 새로운 인스턴스를 만든다 라고 하는 연산자
// new가 하는 역할이 생성자 함수를 객체로 만들어 주는 것
// instance 는 생성자가 만든 객체

console.log(now);
console.log(typeof now);

console.log('Year: ' + now.getFullYear());
console.log('month: ' + now.getMonth());
console.log('day: ' + now.getDay());

// 우리나라 표준시
console.log(now.toLocaleString());


function Cal() {
  this.a = 1;
  this.b = 2;
  this.sum = function() {
    return this.a + this.b;
  }
}

const c = new Cal();
console.log(c.sum());


function Address(name, address) {
  this.name = name;
  this.address = address;
}

let park = new Address('박', '서울');
let lee = new Address('이', '부산');

console.log(park);
console.log(lee);

// 객체는 인스턴스의 상위 개념
// let oh = Address('오', '인천');
// 위 코드처럼 new를 붙이지 않으면 실행이 안 됨
// 객체 자체를 사용하기 위해 메모리에 올리는 과정