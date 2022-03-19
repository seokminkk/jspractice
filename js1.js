let testValue;
testValue = 1;
console.log(testValue);
testValue = 2;
console.log(testValue);

const testValue = 1;
console.log(testValue);


//if, else if ,else
let age = 19;
if (age >= 19) {
  console.log('성인입니다');
}

let age = 18;

if (age > 19) {

  console.log('어른입니다');

} else if (age >= 15) {

  console.log('청소년입니다')

} else {

  console.log('어른이아닙니다');

}
// 스위치

let age = 14;

switch (age) {

  case 12:

    console.log('12살입니다');

    break;

  case 13:

    console.log('13살입니다');

    break;

  default:

    console.log('매칭되는 나이가 없습니다');

}
// 함수
function FunCoding(name) {

  return 'Hi!' + name;

}

console.log(FunCoding('Dave'));

// arrow함수
let func = (name) => console.log('hi!' + name);

func('Dave');

let func = (item1, item2) => item1 * item2;

console.log(func(1, 2));