const data = [1,2];

if(data.length === 0){
  console.log('빈배열입니다')
}else{
  console.log('배열이 차있습니다')
}

data.length === 0 ? console.log('빈배열') : console.log('배열이 차있습니다')

function printData(name='Dave Lee') {
  console.log(name);
}
printData();

const data = {
  name: 'dave lee',
  age : 20,
  hobby: 'coding'

};
const {name: myName, age: myAge} = data;

console.log(myName, myAge);

const data = {
  name: 'dave lee',
  age : 20,
  hobby: 'coding'

};
const {name: myName, age: myAge, speacial='python'} = data;

console.log(myName, myAge, speacial);


const data = {
  name: 'dave lee',

  hobby: 'coding'

};
const {name: myName, age: myAge=25} = data;

console.log(myName, myAge);


let data = [1,2,3];

const [item1, item2, item3, item4, item5]= data;

console.log(item1, item2, item3, item4, item5);


let data = [1,2,3];

const [ item3, ...item4]= data;

console.log( item3, item4);

let data = [1,2,3];

const [ item3, item4, item5,item6='dave']= data;

console.log( item3, item4, item5,item6);

let a =1;
let b =2;

[a,b]=[b,a];
console.log(a,b);


let data ='dave lee, fun-coding, coding';

console.log(data.split(','))

let data ='dave lee, fun-coding, coding';

let [name, brand, hobby]= data.split(',');

console.log(name, brand)