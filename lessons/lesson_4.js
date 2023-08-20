// Объекты
const myCity = {
  city: 'Ney York',
  population: 8000000,
}
myCity.city = 'Las Vegas';  // меняем свойство
myCity.country = 'USA';   // добавляем свойство
delete myCity.country   //удаление свойства
myCity['popular'] = true;   //Добавляем свойство
const countryPropertyName = 'country';  // вводим переменную, которая будет новым или имеющимся свойством
myCity[countryPropertyName] = 'Russia';  // задаем значение этому свойству
console.log(myCity);

// Вложенные свойства
const myCityNew = {
  city: 'Ney York',
  population: 8000000,
  info: {
    isPopular: true,
    country: 'USA',
  }
}
console.log(myCityNew.info.isPopular);
delete myCityNew.info['isPopular'];
console.log(myCityNew);

// Использование переменных при формировании объекта
const name = 'Bogdan';
const postsQty = 23;
const userProfile = {
  name,
  postsQty,
  hasSignedAgreement: false,
}
console.log(userProfile);

// Глобальные объекты
console.log('Hello'); // или аналог window.console.log('Hello');
//global.console.log('Hello'); // это работает в Node.js

// Методы объектов
const myCity_1 = {
  city: 'New York',
  cityGreeting() {
    console.log('Greeting!!')
  }
}
myCity_1.cityGreeting()

//JSON нотации
 const post = {
  title: 'My post',
  likesQty: 5,
 }
 console.log(post);  //Выводим объект как есть
 console.log(JSON.stringify(post));  // преобразуем объект в строку
 console.log(JSON.parse(JSON.stringify(post)));   // преобразуем строку в объект

//Контекст this
function makeUser() {
  return {
    name: 'John',
    ref: this,
  };
}
let user = makeUser();
alert(user.ref.name);
//    Это потому, что правила, которые определяют значение this, никак не смотрят на объявление объекта. Важен лишь момент вызова.
//    Здесь значение this внутри makeUser() равно undefined, потому что оно вызывается как функция, а не через «точечный» синтаксис как метод.
//    Значение this одно для всей функции, блоки кода и объектные литералы на него не влияют.
//    Таким образом, ref: this фактически принимает текущее this функции makeUser().
// Вот противоположный случай:
function makeUser1() {
  return {
    name: 'Smith',
    ref() {
      return this;
    }
  }
}
let user1 = makeUser1();
console.log(user1.ref().name);  // Теперь это работает, поскольку user1.ref() – это метод. И значением this становится объект перед точкой .

