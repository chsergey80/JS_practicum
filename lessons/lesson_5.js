// Мутации в JS
const person = {
  name: 'Bob',
  age: 25,
}
const person2 = person
person2.age = 26
person2.isAdult = true
console.log(person.age);
console.log(person2.isAdult);
console.log(person);
console.log(person2);

//