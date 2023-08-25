// Переменные дают возможность повторного доступа к значениям
let myName;
myName = 'sergey';
console.log(myName);

const myName_1 = 'Natalja';
//myName_1 = 1;   not work
console.log(myName_1);

let id1 = Symbol('id');
console.log(id1);

//ссылочный тип данных
const objectA = {
  a: 10,
  b: true
}
const copyOfA = objectA
copyOfA.c = 'abc';
console.log(objectA.c);
console.log(copyOfA.c);

//Динамическая типизация
let a = 'abc';
console.log(a);
a =1;
console.log(a);

