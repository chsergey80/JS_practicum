// Мутации в JS
const person = {
  name: 'Bob',
  age: 25,
}
const person2 = person
person2.age = 26
person2.isAdult = true
console.log(person.age);
console.log(person2.age);
console.log(person2.isAdult);
//console.log(person);
//console.log(person2);

// как не менять оригинал при изменении копии
const person3 = Object.assign({},person);   // мы не мутировали оригинальный объект, но вложенные свойства ссылки сохранят
person2.age = 27
console.log(person2.age);

const person4 = {...person}   // проблемы со вложенными свойствами сохраняются, ссылки на оригинальный объект сохранятся
person4.age = 30;
console.log(person4.age);

const person5 = JSON.parse(JSON.stringify(person)); //проблема со вложенными свойствами решается
person5.age = 35;
console.log(person5.age);