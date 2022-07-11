// const btn = document.querySelector('button');
// evnet를 발동 시키기 위해서는
// event가 발생했는가? 안 했는가? 행동을 했는가?를 인지 시켜줘야 한다.

// btn.addEventListener('click', e => {
//   console.log(e);
//   console.log('주문이 완료되었습니다.');
// });

// addEventListener(type, listener)
// event는 하나만 사용 가능!

const orders = document.querySelectorAll('li');
orders.forEach(order => {
  order.addEventListener('click', e => {
    console.log(e.target);
    console.log(order);
    e.target.remove();
    console.log(`${e.target.innerText} 주문이 완료되었습니다.`);
  });
});
//forEach = 배열 전체를 순회하는 반복문으로, return 값이 없고, 원본을 수정한다.
//map은 return 사용 가능. forEach는 return 사용 불가능.
//map은 원본을 수정하지 않고 수정한 배열의 내용을 다시 배열로 리턴한다.

const ul = document.querySelector('ul');
const btn = document.querySelector('button');

btn.addEventListener('click', e => {
  const li = document.createElement('li');
  li.textContent = '나는 콜라가 좋아';
  // ul.prepend(li);
  //맨 앞에 추가됨
  ul.append(li);
  //맨 뒤에 추가됨
});