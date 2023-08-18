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