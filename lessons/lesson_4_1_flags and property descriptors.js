//Флаги и дескрипторы свойств
let user = {
  name: 'John',
};
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(JSON.stringify(descriptor, null, 2));

//Чтобы изменить флаги, мы можем использовать метод Object.defineProperty
let user1 = {};
Object.defineProperty(user1, "name", {
  value: "John",
  writable: true,
});
let descriptor1 = Object.getOwnPropertyDescriptor(user1, 'name');
console.log( JSON.stringify(descriptor1, null, 2 ) );

//Сделаем свойство user3.name доступным только для чтения. Для этого изменим флаг writable
let user3 = {
  name: "John"
};
Object.defineProperty(user3, "name", {
  writable: false
});
user.name = "Pete";  // Ошибка: Невозможно изменить доступное только для чтения свойство 'name'

//Неперечислимое свойство, 
let user4 = {
  name: "John",
  toString() {
    return this.name4;
  }
};
for (let key in user4) console.log(key); // name, toString

Object.defineProperty(user4, "toString", {
  enumerable: false
});
for (let key in user4) console.log(key); // Теперь наше свойство toString пропало из цикла:

//Неконфигурируемое свойство
let descriptor2 = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log( JSON.stringify(descriptor2, null, 2 ) );
Math.PI = 3; // Ошибка, потому что writable: false
Object.defineProperty(Math, "PI", { writable: true }); // Ошибка, из-за configurable: false