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
//alert(user.ref.name);
//    Это потому, что правила, которые определяют значение this, никак не смотрят на объявление объекта. Важен лишь момент вызова.
//    Здесь значение this внутри makeUser() равно undefined, потому что оно вызывается как функция, а не через «точечный» синтаксис как метод.
//    Значение this одно для всей функции, блоки кода и объектные литералы на него не влияют.
//    Таким образом, ref: this фактически принимает текущее this функции makeUser().
//  Вот противоположный случай:
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

//  Создайте объект calculator (калькулятор) с тремя методами:
//  read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
//  sum() (суммировать) возвращает сумму сохранённых значений.
//  mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt('a?', 0); // запрашиваем значение a и формируем контекст
    this.b = +prompt('b?', 0); // запрашиваем значение b и формируем контекст
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

//  У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:
let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() {
    alert(this.step);
  }
};   //nеперь, если нам нужно выполнить несколько последовательных вызовов, мы можем сделать это так:
ladder.up();
ladder.up();
ladder.down();
ladder.showStep();
ladder.down();
ladder.showStep();
//Изменим код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
ladder.up().up().down().showStep().down().showStep();
