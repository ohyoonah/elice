//배달음식 어플리케이션의 사용자

let user = {
  nane: '홍길동',
  age: 30,
  email: 'test@test.com',
  address: '서울시 용산구',
  food: ['김치찌개', '제육볶음'],

  payment: function() {
    console.log('결제가 완료 되었습니다.');
  },

  deliverystart: function() {
    console.log('배달이 시작되었습니다.');
  },

  // arrow: () => {
  //   console.log('');
  // }
}

// console.log(user);
console.log(user.payment());