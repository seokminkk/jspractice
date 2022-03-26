for (let i =0; i<5; i++) {
  console.log(i);
}

const data = ['dave', 'alex', 'david'];
for (let i = 0; i<data.length; i++){
  console.log(data[i]);
}


const data = ['dave', 'alex', 'david'];
for (let item of data){
  console.log(item);
}


const data = {
  name: "dave",
  age: 20,
  brand: "fun-coding"
}

console.log(Object.entries(data));
console.log(Object.keys(data));
console.log(Object.values(data));

const data = {
  name: "dave",
  age: 20,
  brand: "fun-coding"
}
for (let key in data){
  console.log(key);
}
for (let key in data){
  console.log(data[key]);
}

let i=0;
while (i<5){
  console.log(i);
  i++;
}

for (let i =0; i<5; i++) {
  if (i===3){
    continue;
  }
  console.log(i);
}

for (let i =0; i<5; i++) {
  if (i===3){
    break;
  }
  console.log(i);
}

const data = [1, 2, 3, 'dave',true];
console.log(data);
console.log(data.length);

const data= new Array();

data[0] = 1;
data[1] = 2;
console.log(data)

const data= new Array();

data[0] = 1;
data[1] = 2;
console.log(data[0], data[1], data[data.length -1])

const data = [1,2,3, 'dave', 'fun-coding'];

console.log(data);
data.splice(1, 3);
console.log(data);


const data1 = [1,2,'dave', null];

const data2 = [
  {name: 'dave', age: 30},
  {name: 'alex', age: 40}
];
const data3 = [
  [1,2,3],
  [4,5,6]
];

console.log(data1[0]);
console.log(data2[0].name);
console.log(data3[0][2]);

const data=[1,2,3];
data.push('dave');
console.log(data);

const data=[1,2,3];
console.log(data.pop());
console.log(data);

const data=[1,2,3];
data.shift();
console.log(data);

const data=[1,2,3];
const data2=['dave',5];
const data3= data.concat(data2);
console.log(data3);


const data1=[1,2,3,4,5,6,7]
let data2=data1.join('굳');
console.log(data2, typeof data2 );

const data1=[1,2,3,4,5,6,7];
data1.reverse();
console.log(data1);

const data1=[1,2,3,4,5,6,7];
let data2= data1.slice(1,4);
console.log(data2);


const data1=[1,2,3,4,5,6,7];
data1.forEach(item => {
  console.log(item);
})


const data1=[1,2,3,4,5,6,7];
const data2= data1.map(item => item*2);
console.log(data2);


const data1=[1,2,'dave',7];
console.log(data1.indexOf('dave'));

let data = [1,2,3,4,5,6,7,8,9,10];
let even = data.filter(item => item %2===0);
console.log(even,typeof even);