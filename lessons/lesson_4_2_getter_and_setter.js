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