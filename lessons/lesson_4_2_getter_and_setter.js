//Свойства - геттеры и сеттеры
let user = {
  name: "John",
  surname: "Smith",
  get fullName() {
    return `${this.name} ${this.surname}`;
  },
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};
user.fullName = "Alice Cooper"; // set fullName запустится с данным значением
console.log(user.name); // Alice
console.log(user.surname); // Cooper
for(let key in user) console.log(key); // name, surname

//Рассмотрим вараинты "Умных" геттеров/сеттеров

let user1 = {
  get name() {
    return this._name;
  },
  set name(value) {
    if (value.length < 4) {
      console.log("Имя слишком короткое, должно быть более 4 символов");
      return;
    }
    this._name = value;
  }
};
user1.name = "Pete";
console.log(user1.name); // Pete
user1.name = ""; // Имя слишком короткое...

//Еще пример с совместимостью геттеров и сеттеров
function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;
  Object.defineProperty(this, "age", {  // возраст рассчитывается из текущей даты и дня рождения
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    }
  });
}
let john = new User("John", new Date(1992, 6, 1));
console.log( john.birthday ); // доступен как день рождения
console.log( john.age );      // ...так и возраст