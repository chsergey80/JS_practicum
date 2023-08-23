//Флаги и дескрипторы свойств
let user = {
  name: 'John',
};
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(JSON.stringify(descriptor, null, 2));

//Чтобы изменить флаги, мы можем использовать метод Object.defineProperty
let user1 = {};
Object.defineProperty(user1, "name", {
  value: "John"
});
let descriptor1 = Object.getOwnPropertyDescriptor(user1, 'name');
console.log( JSON.stringify(descriptor1, null, 2 ) );