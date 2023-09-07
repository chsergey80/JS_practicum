//Функции
function myFn(a, b) {
  let c
  a = a + 1
  c = a + b
  return c
}
console.dir(myFn);
//Создание копии объекта для изменения внутри функции
const personOne = {
  name: 'Bob',
  age: 21
}
function increasePersonAge(person){
  const updatedPerson = Object.assign({}, person)  //мы не мутируем объект personOne, а делаем его копию
  updatedPerson.age += 1
  return updatedPerson
}
const updatedPersonOne = increasePersonAge(personOne)
console.log(personOne.age)
console.log(updatedPersonOne.age)

//Колбэк функции
function printMyName() {
  console.log('Bogdan')
}
console.log('Start')
setTimeout(printMyName, 2000)
